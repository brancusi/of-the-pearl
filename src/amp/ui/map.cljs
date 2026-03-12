(ns amp.ui.map
  (:require ["react-map-gl/mapbox" :default ReactMapGL
             :refer [Marker NavigationControl Source Layer useMap]]
            ["gsap" :refer [gsap]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [amp.lib.defnc :refer [defnc]]))

(def access-token "pk.eyJ1IjoiYXJhbXphZGlraWFuIiwiYSI6IkVhVERJS28ifQ.fpzwPGWJ9AWc1Jab8LeKPA")
(def map-style "mapbox://styles/aramzadikian/cmlmon0w9004n01sw24b3an9h")

(def venice-arsenale
  {:longitude 12.3525
   :latitude 45.4345
   :zoom 15.5})

(defnc geojson-layer
  "Renders a single GeoJSON source + layer pair.
   Expects :source {:id \"src-id\" :url \"/data/file.geojson\"}
           :layer  {:id \"layer-id\" :type \"fill\"
                    :paint  {...}    ;; fill-color, line-width, etc.
                    :layout {...}}   ;; text-field, text-size, etc. (for symbol layers)"
  [{:keys [source layer]}]
  (let [layer-props (clj->js (cond-> {:id (:id layer)
                                      :type (:type layer)
                                      :source (:id source)}
                               (:paint layer)  (assoc :paint (:paint layer))
                               (:layout layer) (assoc :layout (:layout layer))
                               (:filter layer) (assoc :filter (:filter layer))))]
    ($ Source {:id (:id source)
               :type "geojson"
               :data (:url source)}
       ($ Layer {& layer-props}))))

(def ^:private dash-period
  "Total period of the dash pattern: dash(3) + gap(4) = 7."
  7)

(defn- clamp-min
  "Clamp n to at least mn."
  [n mn]
  (if (< n mn) mn n))

(defn phase->dasharray
  "Compute a continuous line-dasharray from a phase value 0→period.
   Dash=3, gap=4, period=7. Always returns a 4-element JS array
   (even count) so Mapbox keeps a constant period of 7.
   Values are clamped to a minimum epsilon to avoid zero-length
   dash/gap segments which can cause Mapbox rendering artifacts."
  [phase]
  (let [e 0.01
        p (mod phase dash-period)]
    (if (<= p 3)
      #js [(clamp-min p e) 4 (clamp-min (- 3 p) e) e]
      #js [e (clamp-min (- p 3) e) 3 (clamp-min (- 7 p) e)])))

(defnc ant-path
  "Animated ant-march line using native Mapbox line-dasharray + GSAP.
   Renders two line layers (background + dashed) on the same source
   and animates the dasharray with GSAP for the marching effect.
   Must be rendered inside a <Map> component.
   Props:
     :source-id  - unique source identifier for the line data
     :url        - GeoJSON data url
     :filter     - optional Mapbox expression filter for features
     :color      - line color (default \"#fbbf24\")
     :width      - line width (default 4)
     :bg-opacity - background line opacity (default 0.4)
     :duration   - full animation cycle in seconds (default 2)"
  [{:keys [source-id url filter color width bg-opacity duration]
    :or {color "#fbbf24" width 4 bg-opacity 0.4 duration 2}}]
  (let [current (.-current (useMap))
        bg-id (str source-id "-bg")
        dash-id (str source-id "-dash")]

    (hooks/use-effect
     [current source-id url]
     (when current
       (let [^js map-obj (.getMap ^js current)
             proxy #js {:phase 0}

             setup!
             (fn []
               ;; Add GeoJSON source
               (when-not (.getSource ^js map-obj source-id)
                 (.addSource ^js map-obj source-id
                             #js {:type "geojson" :data url}))

               ;; Background line — fills the gaps in the dashed line
               (when-not (.getLayer ^js map-obj bg-id)
                 (.addLayer ^js map-obj
                            (clj->js (cond-> {:id bg-id
                                              :type "line"
                                              :source source-id
                                              :paint {:line-color color
                                                      :line-width width
                                                      :line-opacity bg-opacity}}
                                       filter (assoc :filter filter)))))

               ;; Dashed line — animated with GSAP
               (when-not (.getLayer ^js map-obj dash-id)
                 (.addLayer ^js map-obj
                            (clj->js (cond-> {:id dash-id
                                              :type "line"
                                              :source source-id
                                              :paint {:line-color color
                                                      :line-width width
                                                      :line-dasharray [0 4 3]}}
                                       filter (assoc :filter filter)))))

               ;; GSAP ticker drives the animation for perfectly smooth looping.
               ;; Using elapsed time + mod avoids any restart discontinuity.
               (let [start-time (atom nil)
                     speed (/ dash-period duration)
                     tick-fn (fn []
                               (when-not @start-time
                                 (reset! start-time (.now js/Date)))
                               (let [elapsed (/ (- (.now js/Date) @start-time) 1000)
                                     phase (mod (* elapsed speed) dash-period)]
                                 (when (.getLayer ^js map-obj dash-id)
                                   (.setPaintProperty ^js map-obj
                                                      dash-id
                                                      "line-dasharray"
                                                      (phase->dasharray phase))
                                   (.triggerRepaint ^js map-obj))))]
                 (.add (.-ticker gsap) tick-fn)
                 ;; Store tick-fn on proxy so cleanup can remove it
                 (set! (.-tickFn proxy) tick-fn)))]

         (if (.isStyleLoaded ^js map-obj)
           (setup!)
           (.once ^js map-obj "style.load" setup!))

         ;; Cleanup: remove ticker, layers & source
         (fn []
           (when (.-tickFn proxy)
             (.remove (.-ticker gsap) (.-tickFn proxy)))
           (try
             (when (.getLayer ^js map-obj dash-id) (.removeLayer ^js map-obj dash-id))
             (when (.getLayer ^js map-obj bg-id) (.removeLayer ^js map-obj bg-id))
             (when (.getSource ^js map-obj source-id) (.removeSource ^js map-obj source-id))
             (catch :default _))))))

    ;; Purely imperative — renders nothing
    nil))

(defnc dev-info-widget
  "Dev overlay showing current lng/lat/zoom with copy-to-clipboard."
  [{:keys [view-state]}]
  (let [[copied? set-copied!] (hooks/use-state false)
        fmt (fn [n decimals] (.toFixed n decimals))
        clj-str (str "{:longitude " (fmt (:longitude view-state) 6) "\n"
                     " :latitude  " (fmt (:latitude view-state) 6) "\n"
                     " :zoom      " (fmt (:zoom view-state) 1) "}")]
    (d/div {:class "absolute bottom-2 left-2 z-20 bg-black/80 text-white font-mono text-xs
                    p-2 flex items-center gap-2 select-none"}
           (d/span {} (str (fmt (:latitude view-state) 6)
                           ", " (fmt (:longitude view-state) 6)
                           " z" (fmt (:zoom view-state) 1)))
           (d/button {:class "px-2 py-0.5 bg-white/20 hover:bg-white/30 transition-colors
                             cursor-pointer text-[10px] uppercase tracking-wider"
                      :on-click (fn [_]
                                  (-> (js/navigator.clipboard.writeText clj-str)
                                      (.then (fn []
                                               (set-copied! true)
                                               (js/setTimeout #(set-copied! false) 1500)))))}
                     (if copied? "copied!" "copy")))))

(defnc mapbox-map
  "An interactive Mapbox map centered on the Arsenale in Venice.
   Accepts:
     :class        - extra Tailwind classes for the outer container
     :initial-view - {:longitude _ :latitude _ :zoom _} (defaults to Arsenale)
     :dev          - when true, shows a lat/lng/zoom widget with copy-to-clipboard
     :interactive? - when false, disables all map interactions (default true)
     :layers       - vector of source+layer maps for declarative GeoJSON layers
     :ant-paths    - vector of ant-path configs, e.g.
                     [{:source-id \"dir\" :url \"/data/geo.geojson\"
                       :filter [\"==\" [\"geometry-type\"] \"LineString\"]
                       :color \"#fbbf24\" :width 4 :duration 2}]"
  [{:keys [class initial-view dev interactive? layers ant-paths]
    :or {interactive? true}}]
  (let [[view-state set-view-state!] (hooks/use-state (merge venice-arsenale initial-view))
        [map-loaded? set-map-loaded!] (hooks/use-state false)]
    ;; Sync initial-view prop into state on hot-reload / prop changes
    (hooks/use-effect
     [initial-view]
     (set-view-state! (merge venice-arsenale initial-view)))

    (d/div {:class (str "relative w-full h-[70vh] overflow-hidden shadow-lg " class)}
           (when dev
             ($ dev-info-widget {:view-state view-state}))
           ($ ReactMapGL
              {:mapboxAccessToken access-token
               :mapStyle map-style
               :longitude (:longitude view-state)
               :latitude (:latitude view-state)
               :zoom (:zoom view-state)
               :onMove (fn [e] (set-view-state! (js->clj (.-viewState e) :keywordize-keys true)))
               :onLoad (fn [_] (set-map-loaded! true))
               :style #js {:width "100%" :height "100%"}
               :scrollZoom interactive?
               :boxZoom interactive?
               :dragRotate interactive?
               :dragPan interactive?
               :keyboard interactive?
               :doubleClickZoom interactive?
               :touchZoomRotate interactive?
               :touchPitch interactive?
               :attributionControl false
               :logoPosition "top-left"
               :mapboxLogo false}
              ($ NavigationControl {:position "top-right"})
              (when (seq layers)
                (<>
                 (for [layer-cfg layers]
                   ($ geojson-layer {:key (-> layer-cfg :layer :id)
                                     :source (:source layer-cfg)
                                     :layer (:layer layer-cfg)}))))
              ;; Defer ant-path rendering until the map has fully loaded.
              ;; This prevents a race where useMap().current is null on
              ;; the first render (common on lazy-loaded route pages).
              (when (and map-loaded? (seq ant-paths))
                (<>
                 (for [path-cfg ant-paths]
                   ($ ant-path {:key (:source-id path-cfg)
                                & path-cfg}))))))))
