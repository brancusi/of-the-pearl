(ns amp.utils.window)

(defn center-coords
  []
  (let [x (/ (.-innerWidth js/window) 2)
        y (/ (.-innerHeight js/window) 2)]
    [x y]))

(defn width
  []
  (.-innerWidth js/window))

(defn height
  []
  (.-innerHeight js/window))

;; ── Horizontal-scroll overflow checker ──────────────────────────────
;; Runs on an interval; logs every element whose right edge exceeds the
;; viewport width (default 390 px to match Chrome mobile debug size).

(defn find-overflow-elements
  "Walk every element in the DOM and return a seq of maps
   {:el element :tag tagName :class className :right bounding-right}
   for any element whose bounding-box right edge > viewport-width."
  ([] (find-overflow-elements (.-innerWidth js/window)))
  ([viewport-width]
   (let [all (js/document.querySelectorAll "*")]
     (reduce (fn [acc i]
               (let [el  (.item all i)
                     rect (.getBoundingClientRect el)
                     right (.-right rect)]
                 (if (> right viewport-width)
                   (conj acc {:el    el
                              :tag   (.-tagName el)
                              :class (.-className el)
                              :right right
                              :over  (- right viewport-width)})
                   acc)))
             []
             (range (.-length all))))))

(defn check-horizontal-overflow!
  "Logs a warning when horizontal overflow is detected.
   Uses 390 px as the reference viewport width."
  []
  (let [viewport-w   (.-innerWidth js/window)
        scroll-w     (.-scrollWidth js/document.documentElement)
        body-scroll-w (.-scrollWidth js/document.body)
        max-scroll   (max scroll-w body-scroll-w)]
    (if (> max-scroll viewport-w)
      (let [offenders (find-overflow-elements viewport-w)]
        (js/console.warn
         (str "🚨 HORIZONTAL OVERFLOW DETECTED — viewport: " viewport-w
              "px, scrollWidth: " max-scroll "px, delta: "
              (- max-scroll viewport-w) "px"))
        (js/console.warn "Offending elements:" (clj->js offenders))
        (doseq [{:keys [el tag class right over]} offenders]
          (js/console.warn
           (str "  ▸ <" tag "> ." class " — right: " right "px (+" over "px)")))
        {:overflow? true
         :viewport viewport-w
         :scroll-width max-scroll
         :delta (- max-scroll viewport-w)
         :offenders offenders})
      (do
        (js/console.log
         (str "✅ No horizontal overflow — viewport: " viewport-w
              "px, scrollWidth: " max-scroll "px"))
        {:overflow? false
         :viewport viewport-w
         :scroll-width max-scroll
         :delta 0}))))

(defonce ^:private overflow-timer (atom nil))

(defn start-overflow-watch!
  "Start polling for horizontal overflow every `ms` milliseconds (default 2000)."
  ([] (start-overflow-watch! 2000))
  ([ms]
   (when-let [old @overflow-timer]
     (js/clearInterval old))
   (reset! overflow-timer
           (js/setInterval check-horizontal-overflow! ms))
   (js/console.log (str "📏 Overflow watch started (every " ms "ms)"))))

(defn stop-overflow-watch!
  "Stop the polling interval."
  []
  (when-let [t @overflow-timer]
    (js/clearInterval t)
    (reset! overflow-timer nil)
    (js/console.log "📏 Overflow watch stopped")))