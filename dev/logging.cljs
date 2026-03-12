(ns logging
  (:require
   [donut.system :as ds]
   [portal.web :as p]))

(def system #::ds{:start (fn [_]
                           (add-tap #'p/submit)
                           (p/open {:launcher :vs-code
                                    :window-title "Main"
                                    :theme :portal.colors/gruvbox}))
                  :stop  (fn [{:keys [::ds/instance]}]
                           (remove-tap #'p/submit)
                           (p/clear)
                           (p/close))})