(ns amp.hooks.use-intersection-observer
  (:require [helix.hooks :as hooks]
            [cljs.reader :as edn]))

(defn use-intersection-observer
  "Modern hook using native IntersectionObserver API to detect when element is in viewport.
  
  Parameters:
  - ref: React ref to the DOM element to observe
  
  Optional keyword arguments:
  - :threshold - Number 0-1 or array, how much of element must be visible (default: 0.1)
  - :root-margin - String like '0px 0px -100px 0px' to adjust trigger area
  - :on-enter - Callback when element enters viewport
  - :on-exit - Callback when element exits viewport
  
  Returns:
  A vector of [visited? is-visible?] where:
  - visited? - Boolean, has element ever been visible
  - is-visible? - Boolean, is element currently visible"

  [ref & {:keys [threshold root-margin on-enter on-exit]
          :or {threshold 0.1
               root-margin "0px"}}]

  (let [[is-visible? set-is-visible!] (hooks/use-state false)
        [visited? set-visited!] (hooks/use-state false)]

    (hooks/use-effect
     [ref threshold root-margin]

     (tap> {:ref ref
            :derefed @ref})
     (when @ref
       (let [observer (js/IntersectionObserver.
                       (fn [entries]
                         (doseq [entry entries]
                           (let [is-intersecting (.-isIntersecting entry)]
                             (set-is-visible! is-intersecting)

                             (when is-intersecting
                               (set-visited! true)
                               (when on-enter (on-enter entry)))

                             (when (and (not is-intersecting) visited?)
                               (when on-exit (on-exit entry))))))

                       #js{:threshold threshold
                           :rootMargin root-margin})]

         (try
           (.observe observer @ref)
           (catch js/Error e
             (tap> e)))

         ;; Cleanup
         (fn []
           (.disconnect observer)))))

    [visited? is-visible?]))