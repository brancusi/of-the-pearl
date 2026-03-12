(ns amp.pages.mockup.stack
  "Legacy wrapper — delegates to renderers.simple-stack-formation.
   Kept for backward compatibility with dev/mockup scripts."
  (:require [amp.pages.mockup.renderers.simple-stack-formation :as ssf]))

(defn create-stack
  "Delegates to simple-stack-formation/render.
   Wraps the elements vector into the expected map format.
   Kept for backward compatibility with existing dev scripts."
  ([elements] (create-stack elements {}))
  ([elements {:keys [wireframe? show-ground? lighting selection]
              :or {wireframe? false show-ground? true}}]
   (ssf/render {:data elements :lighting lighting}
               {:wireframe? wireframe?
                :show-ground? show-ground?
                :selection selection})))
