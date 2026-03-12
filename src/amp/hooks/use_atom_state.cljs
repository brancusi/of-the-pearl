(ns amp.hooks.use-atom-state
  "Hook that subscribes a React component to a Clojure/threeagent atom,
   keeping a local React state value in sync via `add-watch`."
  (:require [helix.hooks :as hooks]))

(defn use-atom-state
  "Subscribe to a Clojure atom and return its current value as React state.
   Adds a watch on mount, seeds with the atom's current value, and removes
   the watch on unmount. Returns the current value (read-only from React's
   perspective — mutations go through the atom).

   Usage:
     (let [wireframe? (use-atom-state wireframe-atom)]
       ...)"
  [atom-ref]
  (let [[value set-value!] (hooks/use-state #(deref atom-ref))]
    (hooks/use-effect
     [atom-ref]
     (let [k (gensym "atom-sync")]
       (set-value! @atom-ref)
       (add-watch atom-ref k (fn [_ _ _ new-val] (set-value! new-val)))
       #(remove-watch atom-ref k)))
    value))
