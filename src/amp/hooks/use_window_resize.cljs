(ns amp.hooks.use-window-resize
  (:require
   [helix.hooks :as hooks]
   [amp.utils.debug :refer [spy]]
   [amp.utils.window :as win-utils]))

(defn use-window-resize
  [deps handler & {:keys [fire-on-mount?]
                   :or {fire-on-mount? false}}]
  (let [resize-handler (fn [& _]

                         (handler {:width (win-utils/width)
                                   :height (win-utils/height)}))]
    (hooks/use-effect
     deps
     (.addEventListener js/window "resize" resize-handler)
     (when fire-on-mount?
       (resize-handler))

     (fn []
       (.removeEventListener js/window "resize" resize-handler)))))

(defn use-window-size
  []
  (let [[dimensions set-dimensions!] (hooks/use-state {:width (win-utils/width)
                                                       :height (win-utils/height)})
        resize-handler (fn [& _]
                         (set-dimensions! {:width (win-utils/width)
                                           :height (win-utils/height)}))]
    (hooks/use-layout-effect
     []
     (.addEventListener js/window "resize" resize-handler)
     (resize-handler)

     (fn []
       (.removeEventListener js/window "resize" resize-handler)))

    dimensions))

