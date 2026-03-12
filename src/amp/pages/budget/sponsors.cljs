(ns amp.pages.budget.sponsors
  (:require
   [amp.pages.budget.section-block :refer [section-block]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; ---------------------------------------------------------------------------
;; Tier terminology follows Venice Biennale / institutional art convention:
;;   :founding-patron  — Lead institutional or family commitment
;;   :patron           — Major individual or foundation gift
;;   :benefactor       — Significant contribution
;;   :supporter        — General contribution
;; ---------------------------------------------------------------------------

(def sponsors
  [{:name "Tony Shafrazi"
    :tier :founding-patron
    :logo "images/graphics/tony_shafrazi_logo_lighter.svg"
    :type :institution}

   {:name "Armenian Fund USA"
    :tier :founding-patron
    :logo "images/graphics/armenia_fund_logo.svg"
    :type :institution}

   {:name "Khudikyan Family"
    :tier :patron
    :type :individual}

   {:name "Ourfalian Family"
    :tier :patron
    :type :individual}

   {:name "Sarafyan Family"
    :tier :patron
    :type :individual}])

(def tier-meta
  {:founding-patron {:label "Founding Patrons"
                     :accent "text-pink-700 dark:text-pink-300"
                     :border "border-pink-500/30"
                     :order 0}
   :patron          {:label "Patrons"
                     :accent "text-amber-700 dark:text-amber-300"
                     :border "border-amber-500/30 dark:border-amber-300/30"
                     :order 1}
   :benefactor      {:label "Benefactors"
                     :accent "text-indigo-700 dark:text-indigo-300"
                     :border "border-indigo-500/30 dark:border-indigo-300/30"
                     :order 2}
   :supporter       {:label "Supporters"
                     :accent "text-slate-700 dark:text-slate-300"
                     :border "border-slate-400 dark:border-slate-600"
                     :order 3}})

;; ---------------------------------------------------------------------------
;; Sub-components
;; ---------------------------------------------------------------------------

(defnc logo-card
  [{:keys [name logo]}]
  (d/div {:class "group py-6 px-8 transition-all duration-500 ease-out"}
         (d/img {:src logo
                 :alt name
                 :style {:height "4rem" :width "auto"}
                 :class " transition-all duration-500
                         
                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"})))

(defnc name-item
  [{:keys [name accent]}]
  (d/span {:class (s/cx s/font-ui s/text-sm s/tracking-wide accent)} name))

(defnc tier-section
  [{:keys [tier members]}]
  (let [{:keys [label accent border]} (get tier-meta tier)
        with-logos  (filter :logo members)
        without-logos (remove :logo members)]
    (d/div {:class "mb-12"}

           ;; tier heading
           (d/div {:class "flex items-center gap-3 mb"}
                  #_(d/div {:class (str "h-px w-4 " (case tier
                                                      :founding-patron "bg-pink-600/70 dark:bg-pink-500/70"
                                                      :patron "bg-amber-500/50 dark:bg-amber-300/50"
                                                      :benefactor "bg-indigo-500/50 dark:bg-indigo-300/50"
                                                      "bg-slate-400 dark:bg-slate-600"))})
                  (d/p {:class (s/cx s/font-ui s/text-xl s/weight-bold s/uppercase- s/tracking-label accent)}
                       label))

           ;; logos
           (when (seq with-logos)
             (d/div {:class "mb-4 flex flex-col items-center"}
                    (map (fn [{:keys [name logo]}]
                           ($ logo-card {:key name :name name :logo logo}))
                         with-logos)))

           ;; names list
           (when (seq without-logos)
             (d/div {:class "flex flex-wrap gap-x-6 gap-y-2"}
                    (map (fn [{:keys [name]}]
                           (d/div {:key name
                                   :class (str "border-l-2 pl-3 py-1 " border)}
                                  ($ name-item {:name name :accent accent})))
                         without-logos))))))

;; ---------------------------------------------------------------------------
;; Main component
;; ---------------------------------------------------------------------------

(defnc sponsors-section
  [{:keys [id subtitle title]}]
  (let [grouped (->> sponsors
                     (group-by :tier)
                     (sort-by (fn [[tier _]] (:order (get tier-meta tier)))))]
    (d/div {:id id}
           ($ section-block
              {:idx 6
               :eyebrow subtitle
               :title title}

              (d/div {:class "p-4 mt-6 space-y-2"}

                     (d/div {:class "mb-12"}
                            (d/span {:class (s/cx s/text-secondary "mb-8")}
                                    "At present the Armenia Pavilion 2026 ")

                            (d/span {:class (s/cx s/text-danger)}
                                    "is only made possible")

                            (d/span {:class (s/cx s/text-secondary "mb-8")} " through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."))


                     ;; tier sections
                     (map (fn [[tier members]]
                            ($ tier-section {:key (cljs.core/name tier)
                                             :tier tier
                                             :members members}))
                          grouped))))))
