(ns system
  (:require
   [donut.system :as ds]
   [logging :as logging]))

(def system
  {::ds/defs
   {:app
    {:logging  logging/system}}})


(defn start-system
  []
  (ds/signal system ::ds/start))

(defn stop-system
  []
  (ds/signal system ::ds/stop))

(comment

  (ds/signal system ::ds/start)
  (ds/signal system ::ds/stop)

  (tap> 50)
  ;;Keep from folding
  )