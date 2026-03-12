(ns otp.pages.budget.section
  (:require
   [otp.pages.budget.committee :refer [committee]]
   [otp.pages.budget.cost-breakdown :refer [cost-breakdown]]
   [otp.pages.budget.location :refer [location-section]]
   [otp.pages.budget.cash-flow :refer [cash-flow]]
   [otp.pages.budget.non-profit :refer [non-profit]]
   [otp.pages.budget.sponsors :refer [sponsors-section]]
   [otp.pages.budget.why-support :refer [why-support]]
   [otp.ui.icons :refer [ChevronRightIcon]]
   [otp.ui.page-shell :refer [page-shell]]
   [otp.ui.section :refer [section]]
   [otp.pages.landing.studio :refer [about-studio]]
   [otp.pages.landing.press-release :refer [press-release]]
   [otp.hooks.use-scroll-to :refer [use-scroll-to-id]]
   [otp.lib.defnc :refer [defnc]]
   [otp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc section-link
  [{:keys [title anchor]}]
  (let [scroll-to-id (use-scroll-to-id)]
    (d/button {:on-click #(scroll-to-id anchor)
               :class s/nav-link}
              title " " ($ ChevronRightIcon {:class "w-4 h-4 inline-block ml-1"}))))

(defnc header
  []
  (d/div {:class "relative"}
         (d/div {:class "w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4"}
                (d/img {:src "images/graphics/61_biennale_logo_line.svg"
                        :class "invert dark:invert-0"}))

         (d/div {:class "px-4 mt-12 lg:mt-16 max-w-4xl"}
                (d/h1 {:translate "no"
                       :class (s/cx "notranslate" s/heading-page)}
                      "ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"))

         (d/div {:class "w-full px-4 mt-8"}
                (d/div {:class (s/cx s/text-inverse "space-y-3 flex flex-col justify-start items-start")}
                       ($ section-link
                          {:title "1. Press Release"
                           :anchor "section-1"})
                       ($ section-link
                          {:title "2. Overview - THE STUDIO"
                           :anchor "section-2"})
                       ($ section-link
                          {:title "3. Budget"
                           :anchor "section-3"})
                       ($ section-link
                          {:title "4. Cashflow"
                           :anchor "section-4"})
                       ($ section-link
                          {:title "5. Committee"
                           :anchor "section-5"})
                       ($ section-link
                          {:title "6. Patrons & Sponsors"
                           :anchor "section-6"})
                       ($ section-link
                          {:title "7. Location Details"
                           :anchor "section-7"})
                       ($ section-link
                          {:title "8. Donation Info"
                           :anchor "section-8"})
                       ($ section-link
                          {:title "9. Why Support"
                           :anchor "section-9"})))))

(defnc budget-section
  []
  ($ section
     {:key "budget-section"
      :section-id "budget-section"}
     ($ page-shell
        ($ header)

        ($ press-release {:id "section-1"
                          :idx 1
                          :subtitle "press"
                          :title "press release"
                          :show-budget-footer? true})

        ($ about-studio {:id "section-2"
                         :idx 2
                         :subtitle "overview"
                         :title "Armenian Pavilion - The Studio"})

        ($ cost-breakdown {:id "section-3"
                           :subtitle "financials"
                           :title "budget"})

        ($ cash-flow {:id "section-4"
                      :subtitle "financials"
                      :title "cashflow"})

        ($ committee {:id "section-5"
                      :subtitle "team"
                      :title "committee"})

        ($ sponsors-section {:id "section-6"
                             :subtitle "acknowledgements"
                             :title "patrons & sponsors"})

        ($ location-section {:id "section-7"
                             :subtitle "venue"
                             :title "location information"})

        ($ non-profit {:id "section-8"
                       :subtitle "non-profit"
                       :title "donation information"})

        ($ why-support {:id "section-9"
                        :subtitle "why it matters"
                        :title "why support"}))))
