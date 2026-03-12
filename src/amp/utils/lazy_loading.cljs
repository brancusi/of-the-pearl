(ns amp.utils.lazy-loading
  (:require-macros [amp.utils.lazy-loading])
  (:require
   ["react" :as react]
   [helix.core :refer [fnc $]]
   [shadow.lazy :as lazy]))

(defn lazy-component* [loadable]
  (react/lazy
   (fn []
     (-> (lazy/load loadable)
         (.then
          (fn [_root-el]
            ;; Wrap one extra level so React doesn't keep a stale reference
            ;; and hot-reload works (same reason as your Reagent version).
            #js {:default
                 (fnc LazyWrapper [props]
                      ;; props comes from React as JS; convert if your loaded Helix component expects clj keys

                      ($ @loadable {& props}))}))))))


