(ns amp.ui.section-transitioner
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.nav.menu :refer [menu]]
            [amp.state.provider :refer [use-main-state]]
            [amp.ui.footer :refer [site-footer]]
            [amp.utils.for-indexed :refer [for-indexed]]
            ["gsap" :refer [gsap]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [nano-id.core :refer [nano-id]]))

;; ---------------------------------------------------------------------------
;; Page layer — wraps each routed page in a shell div that the transitioner
;; controls for GSAP fade-out.  When `active?` flips false the wrapper fades
;; out, fires `on-remove` which purges the layer from the view-stack, and
;; React unmounts the page component (cleaning up all hooks/effects).
;; ---------------------------------------------------------------------------

(defnc page-layer
  [{:keys [view active? on-remove]}]
  (let [wrapper-ref (hooks/use-ref nil)]

    (hooks/use-effect
     [active?]
     (when (false? active?)
       ;; Fade out the wrapper, then tell the transitioner to remove us
       (.to gsap
            (.-current wrapper-ref)
            #js{:opacity 0
                :duration 0.4
                :ease "power2.inOut"
                :onComplete on-remove}))
     js/undefined)

    (d/div {:ref wrapper-ref
            :class (if active?
                     "w-full overflow-x-hidden"
                     "absolute inset-0 w-full overflow-x-hidden")}
           ($ view))))

(defnc section-transitioner
  []
  (let [[state _] (use-main-state)
        [view-stack set-view-stack!] (hooks/use-state [])

        current-state-view-data (-> state
                                    :current-route
                                    :data)

        state-view (:view current-state-view-data)
        state-view-id (:name current-state-view-data)
        hide-footer? (:hide-footer? current-state-view-data)

        has-state-view? (keyword? state-view-id)]

    ;; Push new layers onto the view stack when the route changes
    (hooks/use-effect
     [state-view state-view-id]
     (when (and has-state-view?
                (not= state-view-id (:id (last view-stack))))
       (set-view-stack!
        (fn [prev]
          (if (= state-view-id (:id (last prev)))
            prev
            (conj prev {:view state-view
                        :uuid (nano-id)
                        :id   state-view-id}))))))

    (d/div
     ($ menu)
     (d/div {:class "relative"}
            (when has-state-view?
              (for-indexed [{:keys [view uuid]} idx view-stack]
                           (let [stack-size (count view-stack)
                                 is-active? (= idx (dec stack-size))]
                             ($ page-layer
                                {:key uuid
                                 :view view
                                 :active? is-active?
                                 :& {:on-remove
                                     (fn []
                                       (set-view-stack!
                                        (fn [prev]
                                          (filterv #(not= (:uuid %) uuid) prev))))}})))))
     (when (and has-state-view? (not hide-footer?))
       ($ site-footer)))))
