(ns amp.pages.mockup.renderers.manual-formation
  (:require
   [amp.services.firebase :refer [set-edn]]))

(defn render
  "Renders a manual formation.
   Takes the full mockup-data map and an options map.
   Extracts :scene-graph (vector of threeagent hiccup elements),
   :lighting, and :position from mockup-data.
   Options:
     :wireframe?   - reserved for future use
     :show-ground? - if true, adds a ground plane (default: true)
     :selection    - selected block info map for rendering selection outline."
  ([mockup-data] (render mockup-data {}))
  ([mockup-data {:keys [show-ground? selection]
                 :or {show-ground? true}}]
   (tap> "manual babay")
   (let [scene-graph (:scene-graph mockup-data)
         lighting    (:lighting mockup-data)
         [px py pz]  (or (:position mockup-data) [0 0 -4])
         lights (or lighting
                    [[:ambient-light {:intensity 0.7}]
                     [:directional-light {:cast-shadow true
                                          :position [80 120 60]
                                          :intensity 1.5}]])
         selection-outline
         (when selection
           (let [[wx wy wz] (:world-position selection)]
             [:edge-box {:position [wx wy (+ wz 4)]
                         :width  (* 1.02 (:width selection))
                         :height (* 1.02 (:height selection))
                         :depth  (* 1.02 (:depth selection))
                         :outline-color 0x00bcd4
                         :line-width 4}]))]
     (cond-> (into (into [:object {:position [px py pz]}]
                         (conj (vec lights)
                               [:object {}
                                (when show-ground?
                                  [:ground-plane {:position [0 0 0]
                                                  :width 500
                                                  :depth 500
                                                  :square-size 12}])]))
                   (or scene-graph []))
       selection-outline (conj selection-outline)))))

(comment

  (require '[amp.services.firebase :refer [set-edn]])

  ;; ---- Example 1: Simple wall ----
  (set-edn "manual-001"
           {:name     "Manual — Simple Wall"
            :renderer :manual-formation
            :camera   {:position [200 150 200]
                       :target   [0 30 0]}
            :lighting [[:ambient-light {:intensity 0.7}]
                       [:directional-light {:cast-shadow true
                                            :position [-100 180 80]
                                            :intensity 1.5}]]
            :scene-graph
            (vec
             (for [row (range 5)
                   col (range 6)
                   :let [w 36 h 12 d 18
                         gap 2
                         ;; Running bond: offset every other row by half a brick
                         x-off (if (odd? row) (/ (+ w gap) 2) 0)
                         x (+ x-off (* col (+ w gap)))
                         y (* row (+ h gap))]]
               [:selectable-box {:position [x (+ (/ h 2) y) 0]
                                 :cast-shadow true
                                 :width w :height h :depth d
                                 :color "#e8e0d4"
                                 :block-info {:dims [w h d]
                                              :color "#e8e0d4"
                                              :note (str "R" row " C" col)}}]))})

  ;; ---- Example 2: Gateway / portal ----
  (set-edn "manual-002"
           {:name     "Manual — Gateway"
            :renderer :manual-formation
            :camera   {:position [250 180 250]
                       :target   [0 40 0]}
            :lighting [[:ambient-light {:intensity 0.7}]
                       [:directional-light {:cast-shadow true
                                            :position [-100 180 80]
                                            :intensity 1.5}]]
            :scene-graph
            (let [w 24 h 12 d 24 gap 2
                  pillar-h 6
                  pillar-color "#c8bfb0"
                  lintel-color "#a09080"
                  left-x  -30
                  right-x  30]
              (vec
               (concat
                ;; Left pillar
                (for [row (range pillar-h)]
                  [:selectable-box {:position [left-x (+ (/ h 2) (* row (+ h gap))) 0]
                                    :cast-shadow true
                                    :width w :height h :depth d
                                    :color pillar-color
                                    :block-info {:dims [w h d]
                                                 :color pillar-color
                                                 :note "Left pillar"}}])
                ;; Right pillar
                (for [row (range pillar-h)]
                  [:selectable-box {:position [right-x (+ (/ h 2) (* row (+ h gap))) 0]
                                    :cast-shadow true
                                    :width w :height h :depth d
                                    :color pillar-color
                                    :block-info {:dims [w h d]
                                                 :color pillar-color
                                                 :note "Right pillar"}}])
                ;; Lintel spanning the top
                (let [lintel-y (+ (/ h 2) (* pillar-h (+ h gap)))
                      lintel-w (+ (- right-x left-x) w)]
                  [[:selectable-box {:position [0 lintel-y 0]
                                     :cast-shadow true
                                     :width lintel-w :height h :depth d
                                     :color lintel-color
                                     :block-info {:dims [lintel-w h d]
                                                  :color lintel-color
                                                  :note "Lintel"}}]]))))})

  ;; ---- Example 3: Stepped pyramid ----
  (set-edn "manual-003"
           {:name     "Manual — Stepped Pyramid"
            :renderer :manual-formation
            :camera   {:position [300 250 300]
                       :target   [0 30 0]}
            :lighting [[:ambient-light {:intensity 0.7}]
                       [:directional-light {:cast-shadow true
                                            :position [-80 200 100]
                                            :intensity 1.5}]]
            :scene-graph
            (let [h 10 gap 1
                  tiers [[120 120 "#d4cec6"]   ;; [w d color]
                         [96  96  "#ccc5bb"]
                         [72  72  "#c4bdb1"]
                         [48  48  "#bcb3a5"]
                         [24  24  "#b0a898"]]]
              (vec
               (for [[tier [w d color]] (map-indexed vector tiers)
                     :let [y (+ (/ h 2) (* tier (+ h gap)))]]
                 [:selectable-box {:position [0 y 0]
                                   :cast-shadow true
                                   :width w :height h :depth d
                                   :color color
                                   :block-info {:dims [w h d]
                                                :color color
                                                :note (str "Tier " (inc tier))}}])))})

  ;; Keep from folding
  )