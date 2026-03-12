(ns amp.hooks.use-scroll-trigger
  (:require ["gsap/ScrollTrigger" :refer [ScrollTrigger]]
            [helix.hooks :as hooks]))

(defn check-positioning
  [st]
  (let [current-scroll (-> st .scroll)
        trigger-start (-> st .-start)
        trigger-end (-> st .-end)]
    {:trigger-start trigger-start
     :trigger-end trigger-end
     :current-scroll current-scroll}))

(defn use-scroll-trigger
  "A React hook that creates a GSAP ScrollTrigger for scroll-based animations and interactions.
  
  Tracks when an element enters/exits the viewport and provides state about whether the trigger
  has been visited and whether it's currently active (in view).
  
  Parameters:
  - ref: A React ref to the DOM element that should trigger scroll events
  
  Optional keyword arguments:
  - :on-toggle - Callback function called whenever the trigger toggles active/inactive state.
                 Receives the ScrollTrigger instance as argument.
  - :on-enter  - Callback function called when the trigger first enters the viewport.
                 Receives the ScrollTrigger instance as argument.
  - :start     - ScrollTrigger start position (default: 'top center')
                 Defines when the trigger becomes active relative to viewport.
  - :end       - ScrollTrigger end position (default: 'bottom')
                 Defines when the trigger becomes inactive.
  - :scroll-ref - Optional ref to a custom scroll container (uses window by default)
  - :markers?  - Boolean to show GSAP ScrollTrigger markers for debugging (default: false)
  - :debug?    - Boolean to enable debug mode (default: false)
  
  Returns:
  A vector of [visited? is-active?] where:
  - visited?  - Boolean indicating if the trigger has ever been entered
  - is-active? - Boolean indicating if the trigger is currently in the active range
  
  Example usage:
  (let [section-ref (hooks/use-ref nil)
        [visited? is-active?] (use-scroll-trigger section-ref
                                                   :start \"top bottom\"
                                                   :end \"bottom top\"
                                                   :on-enter #(js/console.log \"Entered!\"))]
    (d/section {:ref section-ref}
      (when is-active? \"Currently visible\")))"
  [ref & {:keys [on-toggle
                 on-enter
                 start
                 end
                 scroll-ref
                 markers?
                 debug?]
          :or {markers? false
               debug? false
               start "top center"
               end "bottom"}}]

  (let [[is-active? set-is-active!] (hooks/use-state false)
        [visited? set-visited!] (hooks/use-state false)]
    (hooks/use-effect
     [ref scroll-ref]
     (let [st (.create ScrollTrigger #js{:trigger @ref
                                         :start start
                                         :end end
                                         :invalidateOnRefresh true
                                         :onRefresh (fn [_])
                                         :onEnter (fn [self]
                                                    (set-visited! true)
                                                    (when on-enter
                                                      (on-enter self)))
                                         :onToggle (fn [self]
                                                     (set-is-active! (.-isActive self))
                                                     (when on-toggle
                                                       (on-toggle self)))
                                         :markers markers?})
           resize-observer (js/ResizeObserver.
                            (fn [_entries]
                              (.refresh ScrollTrigger)))]

       (.observe resize-observer js/document.body)

       (fn [] (.kill st)
         (.disconnect resize-observer))))

    [visited? is-active?]))