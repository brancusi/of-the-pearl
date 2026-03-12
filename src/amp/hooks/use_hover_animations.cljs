(ns amp.hooks.use-hover-animations
  (:require [applied-science.js-interop :as j]
            [helix.hooks :as hooks]
            ["gsap" :refer [gsap]]))

(defn use-hover-animations
  "Mouse hover animations hook. 
   
   Returns  [on-mouse-over on-mouse-out] callbacks that will play the animation.

   Example: (use-hover-animations dom-element-ref)"
  [ref & {:keys [target
                 initial
                 over
                 out]}]
  (let [target (or target ref)

        clear-tween! (fn []
                       (.killTweensOf gsap @target))

        over-handler (hooks/use-callback
                      [ref target]
                      (fn []
                        (clear-tween!)
                        (.to gsap @target (clj->js over))))
        out-handler (hooks/use-callback
                     [ref target]
                     (fn []
                       (clear-tween!)
                       (.to gsap @target (clj->js out))))]

    (when initial
      (hooks/use-layout-effect
       [ref target]
       (when @target
         (.set gsap @target (clj->js initial)))))

    (hooks/use-layout-effect [ref]
                             (when @ref
                               (.addEventListener @ref "mouseenter" over-handler)
                               (.addEventListener @ref "mouseleave" out-handler)
                               (fn []
                                 (.removeEventListener @ref "mouseenter" over-handler)
                                 (.removeEventListener @ref "mouseleave" out-handler))))))