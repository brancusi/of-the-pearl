(ns amp.hooks.use-container-size
  (:require
   [helix.hooks :as hooks]))

(defn use-container-size
  [external-ref]
  (let [[dimensions set-dimensions!] (hooks/use-state {:width 0 :height 0})]

    (hooks/use-layout-effect
     [@external-ref]
     (try
       (when @external-ref
         (let [element @external-ref
               update-size (fn [rect]
                             (let [size {:width (.-width rect)
                                         :height (.-height rect)}]
                               (when (not= size dimensions)
                                 (set-dimensions! size))))
               resize-observer (js/ResizeObserver.
                                (fn [entries]
                                  (when-let [entry (first entries)]
                                    (update-size (.-contentRect entry)))))]

           (.observe resize-observer element)

           ;; Fire on mount - happens before browser paint
           (update-size (.getBoundingClientRect element))

           ;; Cleanup
           (fn []
             (.disconnect resize-observer))))

       (catch js/Error e
         (tap> {:error e :message "use-container-size hook layout effect error"}))))

    dimensions))