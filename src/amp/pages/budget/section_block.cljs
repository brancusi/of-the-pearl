(ns amp.pages.budget.section-block
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.dom :as d]))


(defnc section-block
  [{:keys [idx eyebrow title children]}]
  (d/div {:class (s/cx s/section-pt s/section-pb)}
         (d/div {:class (s/cx "px-4" s/text-primary)}
                (when (and idx eyebrow)
                  (d/div {:class "mb-6 flex items-center gap-3"}
                         (d/div {:class (s/cx "w-10" s/divider-accent)})
                         (d/p {:class s/eyebrow-highlight}
                              (str idx ". "))
                         (d/p {:class s/eyebrow-midlight}
                              eyebrow)))
                (d/h2 {:class s/heading-display}
                      title))
         (d/div {:class (s/cx s/text-xl s/text-primary)}
                children)))