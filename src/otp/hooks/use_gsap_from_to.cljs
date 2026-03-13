(ns otp.hooks.use-gsap-from-to
  (:require ["gsap" :refer [gsap]]
            [helix.hooks :as hooks]))

(defn use-gsap-from-to
  "One-shot gsap.fromTo animation gated by an `:active?` flag.

   Sets the element to the `:from` state immediately (layout phase, no flash),
   then fires `gsap.fromTo` exactly once when `:active?` first becomes truthy.
   Clojure maps are converted to JS objects automatically.

   The caller controls *when* to trigger — pass in an intersection observer
   result, a scroll-trigger flag, a timer, or anything that yields a boolean.

   Parameters:
   - ref      — React ref attached to the DOM element to animate.

   Keyword options:
   - :from     — Map of starting GSAP properties, e.g. {:opacity 0 :y 20}
   - :to       — Map of ending properties + tween vars,
                  e.g. {:opacity 1 :y 0 :duration 0.6 :ease \"power2.out\"}
   - :active?  — Boolean trigger. Animation fires once when this becomes true.
                  Defaults to true (plays immediately).

   Example:
     (let [el    (hooks/use-ref nil)
           [visited?] (use-intersection-observer el)]
       (use-gsap-from-to el
         :from    {:opacity 0 :y 20}
         :to      {:opacity 1 :y 0 :duration 0.6 :ease \"power2.out\"}
         :active? visited?)
       (d/div {:ref el} \"hello\"))"
  [ref & {:keys [from to active?]
          :or {active? true}}]
  (let [fired-ref (hooks/use-ref false)]

    ;; Set initial "from" state in layout phase so the element starts hidden
    ;; before the browser paints — no flash of the final state.
    ;; Skip when the animation already fired (hot-reload) to preserve final state.
    (hooks/use-layout-effect
     :once
     (when (and @ref (not @fired-ref))
       (.set gsap @ref (clj->js from))))

    ;; Fire the animation once when active? first becomes true.
    (hooks/use-effect
     [active?]
     (when (and active? (not @fired-ref) @ref)
       (set! (.-current fired-ref) true)
       (.fromTo gsap @ref (clj->js from) (clj->js to)))
     (fn []
       (when @ref
         (.killTweensOf gsap @ref))))))
