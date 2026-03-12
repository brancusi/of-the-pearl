(ns amp.state.provider
  (:require
   ["react" :as react]
   [helix.core :refer [defnc provider]]
   [helix.hooks :as hooks]
   [amp.state.reducer :refer [main-reducer]]))

(def main-context (react/createContext))

(defn use-main-state
  "Returns [state dispatch!] for the global app state."
  []
  (hooks/use-context main-context))

(defnc MainProvider [{:keys [default-state
                             children]}]

  (provider
   {:context main-context
    :value (hooks/use-reducer main-reducer default-state)}
   children))
