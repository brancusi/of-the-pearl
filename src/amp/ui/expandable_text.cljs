(ns amp.ui.expandable-text
  (:require
   [amp.ui.button :refer [main-button]]
   [amp.ui.section-header :refer [section-header]]
   [amp.pages.budget.section-block :refer [section-block]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc expandable-text-area
  [{:keys [idx
           section-hint
           title
           expand-button-label
           preview-text
           full-text
           footer-text]}]
  (let [[expanded? set-expanded] (hooks/use-state false)]
    ($ section-block
       {:idx (or idx 1)
        :eyebrow section-hint
        :title title}
       (d/div {:class "mt-6"}
              (if expanded?
                full-text
                (d/div
                 preview-text
                 (d/div {:class "flex justify-center mt-6 px-4"}
                        ($ main-button
                           {:on-click #(set-expanded (not expanded?))
                            :class "px-8 py-3"
                            :title expand-button-label})))))

       (when footer-text
         footer-text))))

(defnc expandable-text-area-2
  [{:keys [idx
           section-hint
           title
           expand-button-label
           preview-text
           full-text
           footer-text]}]
  (let [[expanded? set-expanded] (hooks/use-state false)]
    ($ section-block
       {:idx (or idx 1)
        :eyebrow section-hint
        :title title}
       (d/div {:class "mt-6"}
              (if expanded?
                ($ full-text)
                (d/div
                 ($ preview-text)
                 (d/div {:class "flex justify-center mt-6 px-4"}
                        ($ main-button
                           {:on-click #(set-expanded (not expanded?))
                            :class "px-8 py-3"
                            :title expand-button-label})))))

       (when footer-text
         ($ footer-text)))))

(defnc expandable-text-area-light
  "Like expandable-text-area-2 but uses the lightweight section-header
   (venue-style eyebrow) instead of the budget-style section-block."
  [{:keys [section-hint
           title
           expand-button-label
           preview-text
           full-text
           footer-text]}]
  (let [[expanded? set-expanded] (hooks/use-state false)]
    ($ section-header
       {:eyebrow section-hint
        :title title}
       (d/div {:class "mt-6"}
              (if expanded?
                ($ full-text)
                (d/div
                 ($ preview-text)
                 (d/div {:class "flex justify-center mt-6 px-4"}
                        ($ main-button
                           {:on-click #(set-expanded (not expanded?))
                            :class "px-8 py-3"
                            :title expand-button-label})))))

       (when footer-text
         ($ footer-text)))))
