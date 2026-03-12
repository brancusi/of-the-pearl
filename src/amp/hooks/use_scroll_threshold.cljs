(ns amp.hooks.use-scroll-threshold
  (:require [helix.hooks :as hooks]))

(defn use-scroll-threshold
  "Returns true when the user has scrolled past the pixel value returned by `threshold-fn`.

  `threshold-fn` is called on every scroll event so it can be viewport-relative
  (e.g. `#(* 0.875 (win-utils/height))`).

  Example:
      (use-scroll-threshold #(* 0.875 (win-utils/height)))"
  [threshold-fn]
  (let [[active? set-active!] (hooks/use-state false)]
    (hooks/use-effect
     :once
     (let [handler (fn []
                     (let [threshold (threshold-fn)
                           scrolled? (> js/window.scrollY threshold)]
                       (set-active! scrolled?)))]
       (.addEventListener js/window "scroll" handler #js {:passive true})
       (handler)
       (fn [] (.removeEventListener js/window "scroll" handler))))
    active?))
