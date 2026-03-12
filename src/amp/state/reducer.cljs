(ns amp.state.reducer)

(defn main-reducer
  "Global app state reducer. Dispatched via (dispatch! [:action payload])."
  [state [action-type payload]]
  (case action-type
    :enter-route! (assoc state :current-route payload)
    ;; Return state unchanged for unknown actions
    state))
