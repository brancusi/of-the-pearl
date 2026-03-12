(ns amp.pages.budget.non-profit
  (:require
   [amp.pages.budget.section-block :refer [section-block]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))



(defnc non-profit
  [{:keys [id subtitle title]}]
  (let [field-label (s/cx s/weight-semibold s/text-muted)
        field-value (s/cx "text-right" s/weight-bold s/text-value s/tracking-wide)]
    (d/div {:id id}
           ($ section-block
              {:idx 8
               :eyebrow subtitle
               :title title}
              (d/div
               {:class "space-y-8 p-4"}
               (d/div {:class (s/cx s/text-secondary "mb-12")}

                      (d/p {}
                           "The Armenia Pavilion 2026 is supported through "
                           (d/span {:class s/weight-semibold} "Fallen Angels Inc.")
                           ", a registered "
                           (d/span {:class s/weight-semibold} "501(c)(3)")
                           " public non-profit organization. "
                           (d/span {:class s/weight-semibold} "Contributions are tax deductible")
                           " to the extent permitted by law.")

                      (d/div {:class (s/cx s/font-ui s/text-sm "mt-6 space-y-1")}
                             (d/p {}
                                  (d/span {:class field-label} "Organization: ")
                                  "Fallen Angels Inc.")
                             (d/p {}
                                  (d/span {:class field-label} "EIN: ")
                                  (d/span {:class field-value} "92-2395513"))
                             (d/p {}
                                  (d/span {:class field-label} "Located in: ")
                                  (d/span {:class s/em-bold} "Los Angeles, CA")))

                      (d/div {:class "mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10"}

                             (d/div
                              (d/p {:class (s/cx s/heading-section s/text-primary "mb-4")}
                                   "Domestic "
                                   (d/span {:class (s/cx "font-normal" s/text-muted)} "Transfers"))

                              (d/div {:class (s/cx s/font-ui s/text-sm "space-y-3")}
                                     (d/div {:class "flex items-baseline justify-between gap-6"}
                                            (d/span {:class field-label} "Name:")
                                            (d/span {:class "text-right"} "Fallen Angels Inc."))
                                     (d/div {:class "flex items-baseline justify-between gap-6"}
                                            (d/span {:class field-label} "Routing:")
                                            (d/span {:class field-value} "091311229"))
                                     (d/div {:class "flex items-baseline justify-between gap-6"}
                                            (d/span {:class field-label} "Account #:")
                                            (d/span {:class field-value} "202535309341"))
                                     (d/div {:class "flex items-start justify-between gap-6"}
                                            (d/span {:class field-label} "Address:")
                                            (d/div {:class "text-right leading-snug"}
                                                   (d/p {} "Choice Financial Group")
                                                   (d/p {} "4501 23rd Avenue S")
                                                   (d/p {} "Fargo, ND 58104")))))

                             ;; International
                             (d/div
                              (d/p {:class (s/cx s/heading-section s/text-primary "mb-4")}
                                   "International "
                                   (d/span {:class (s/cx "font-normal" s/text-muted)} "Transfers"))

                              (d/div {:class (s/cx s/font-ui s/text-sm "space-y-3")}
                                     (d/div {:class "flex items-baseline justify-between gap-6"}
                                            (d/span {:class field-label} "Name:")
                                            (d/span {:class "text-right"} "Fallen Angels Inc."))
                                     (d/div {:class "flex items-baseline justify-between gap-6"}
                                            (d/span {:class field-label} "SWIFT/BIC:")
                                            (d/span {:class field-value} "CHFGUS44021"))
                                     (d/div {:class "flex items-baseline justify-between gap-6"}
                                            (d/span {:class field-label} "ABA/Routing:")
                                            (d/span {:class field-value} "091311229"))
                                     (d/div {:class "flex items-baseline justify-between gap-6"}
                                            (d/span {:class field-label} "IBAN/Account #:")
                                            (d/span {:class field-value} "202535309341"))
                                     (d/div {:class "flex items-start justify-between gap-6"}
                                            (d/span {:class field-label} "Address:")
                                            (d/div {:class "text-right leading-snug"}
                                                   (d/p {} "Choice Financial Group")
                                                   (d/p {} "4501 23rd Avenue S")
                                                   (d/p {} "Fargo, ND 58104")))))))

               (d/p {:class (s/cx s/text-muted "p-4 mt-10 text-sm md:text-base")}
                    "If you would like a receipt letter for your records, please include your name and email address with the transfer memo."))))))