(ns amp.pages.budget.committee
  (:require
   [amp.ui.captioned-image :refer [captioned-image]]
   [amp.ui.expandable-text :refer [expandable-text-area-2]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.image-overlay :refer [lazy-image-with-overlay]]
   [amp.ui.overlays :refer [caption-overlay]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def committee-members
  [{:name "Archbishop Derderian"
    :role "Committee Lead"
    :img-src "https://atd-722658831.imgix.net/committee/hovnan.png"
    :credit "Courtesy of the Committee"}
   {:name "Tony Shafrazi"
    :role "Chief Curator"
    :img-src "https://atd-722658831.imgix.net/committee/tony.png"
    :credit "Courtesy of the Committee"}
   {:name "Tina Chakarian"
    :role "Curator"
    :img-src "https://atd-722658831.imgix.net/committee/tina.png"
    :credit "Courtesy of the Committee"}
   {:name "Zadik Zadikian"
    :role "Artist"
    :img-src "https://atd-722658831.imgix.net/committee/zadik.png"
    :credit "Courtesy of the Committee"}
   {:name "Rafi Ourfalian"
    :role "Legal Advisor"
    :img-src "https://atd-722658831.imgix.net/committee/rafi.png"
    :credit "Courtesy of the Committee"}
   {:name "Khachik Khudikyan"
    :role "Logistics Advisor"
    :img-src "https://atd-722658831.imgix.net/committee/chris.png"
    :credit "Courtesy of the Committee"}
   {:name "Andranik Torosyan"
    :role "Financial Advisor"
    :img-src "https://atd-722658831.imgix.net/committee/andy.png"
    :credit "Courtesy of the Committee"}
   {:name "Aram Alajajian"
    :role "Architect"
    :img-src "https://atd-722658831.imgix.net/committee/aram.png"
    :credit "Courtesy of the Committee"}
   {:name "Vik Hovsepian"
    :role "Committee Member"
    :credit "Courtesy of the Committee"
    :img-src "https://atd-722658831.imgix.net/committee/vic.png"}])

(defnc preview
  [{:keys []}]
  (d/div {:class "space-y-3 p-4"}
         (d/p {}
              (d/span {:class s/text-secondary}
                      "To realize an undertaking of this scale and international significance, an ")
              (d/span {:class s/em-strong} "urgent fundraising program")
              (d/span {:class s/text-secondary}
                      " is greatly needed."))))

(defnc details
  [{:keys []}]
  (d/div {:class (s/cx "p-4" s/body-base)}
         (d/p {:class (s/cx s/em-italic s/text-warning)}
              "*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue\u2014a standard and widely accepted model for many non-permanent participating nations. "
              "The selected site operates at a base rental cost of approximately "
              (d/span {:class s/value-currency} "$145,600")
              (d/span
               ", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. "
               "Comparable venues just minutes away within the Arsenale or Giardini typically begin at ")
              (d/span {:class s/value-currency} "$450,000 or more")
              (d/span
               " in base rent alone\u2014often closer to \u20ac450,000+\u2014excluding construction, staffing, technical services, and operational expenses. "
               "In this context, the Pavilion\u2019s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."))

         (d/p {:class (s/cx "mt-6 text-2xl" s/text-danger)}
              "To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed.")

         (d/div {:class "mt-6"}
                (d/span {:class (s/cx s/weight-medium s/text-primary)}
                        "At present we are starting with a small committee including members "
                        "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, "
                        "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, ")
                (d/span {:class (s/cx s/weight-bold s/text-danger)}
                        "hopefully encouraging others more able to realize our goal."))))

(defnc committee-member-card
  [{:keys [name role img-src credit]
    :as opts}]
  (let [overlay-styles (s/cx s/font-ui "bg-white/70 px-1 text-slate-500")]
    (d/div {:class "w-[150px] aspect-[0.7] relative ml-2"}
           ($ lazy-image-with-overlay {:img-src img-src
                                       :fit "crop"
                                       :aspect-ratio 0.7
                                       :active? true}
              (d/div {:class ""}
                     ($ caption-overlay {:position :tl
                                         :rotation 90
                                         :parent-styles overlay-styles}
                        (d/span {:class (s/cx s/em-italic "text-xs")} name))
                     ($ caption-overlay {:position :bl
                                         :parent-styles overlay-styles}
                        (d/span {:class (s/cx s/em-italic "text-xs")} role)))))))

(defnc committee-gallery
  [{:keys []}]
  (d/div {:class "p-4 w-full"}
         (d/div (d/div {:class "pl-4"}
                       (d/h3 {:class s/label-muted} "Committee Members"))
                (d/div {:class "mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"}
                       (map (fn [{:keys [name role img-src credit]}]
                              (d/div {:key name}
                                     (when img-src
                                       ($ committee-member-card {:name name
                                                                 :role role
                                                                 :img-src img-src
                                                                 :credit credit}))))
                            committee-members)))))

(defnc committee
  [{:keys [id subtitle title]}]
  (d/section {:id id
              :class "space-y-4"}
             ($ expandable-text-area-2 {:idx 5
                                        :section-hint subtitle
                                        :title title
                                        :expand-button-label "Read more"
                                        :preview-text preview
                                        :full-text details})
             ($ committee-gallery committee-members)))