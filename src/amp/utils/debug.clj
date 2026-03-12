(ns amp.utils.debug)

(defmacro spy
  "Logs the value of expr to the console and returns it."
  [expr]
  `(let [value# ~expr]
     (tap> {:source "SPY"
            :value value#})
     (js/console.log "SPY:" value#)
     value#))