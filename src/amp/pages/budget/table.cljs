(ns amp.pages.budget.table
  (:require
   [amp.ui.icons :refer [ChevronRightIcon InformationCircle]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [amp.hooks.use-scroll-to :refer [use-scroll-to-ref]]
   [amp.utils.debug :refer [spy]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def contingency-amount 66821)

(defn format-currency [amount]
  (let [rounded-amount (Math/round amount)]
    (str "$" (.toLocaleString rounded-amount "en-US"))))

(defn calculate-section-total-no-tax [details]
  (reduce + (map :amount details)))

(defn calculate-section-total-with-tax [item]
  (let [item-details (-> item :details)
        sub-total (reduce + (map :amount item-details))
        tax-rate (-> item :tax :rate)
        has-tax? (> tax-rate 0)
        tax-total (if has-tax? (* tax-rate sub-total) 0)]
    (+ tax-total sub-total)))

(defn sub-total-all-sections
  [cost-data]
  (reduce + (map #(calculate-section-total-with-tax %) cost-data)))

(defnc total-section
  [{:keys [cost-data]}]
  (let [sub-total (sub-total-all-sections cost-data)
        contingency contingency-amount
        grand-total (+ sub-total contingency)]
    (d/div {:class (s/cx "flex flex-col" s/font-ui)}
           (d/li {:class (s/cx s/bg-surface s/text-primary "flex items-baseline px-4 py-2 border-t-2" s/border-accent)}
                 (d/h3 {:class (s/cx s/text-sm s/uppercase- s/tracking-wider s/text-muted "flex-1 min-w-0")}
                       "Sub total")
                 (d/div {:class "flex items-baseline justify-end shrink-0 ml-2"}
                        (d/span {:class (s/cx s/weight-semibold s/text-secondary)}
                                (format-currency sub-total))))
           (d/li {:class (s/cx s/bg-surface-alt s/text-primary "flex items-baseline px-4 py-2")}
                 (d/h3 {:class (s/cx s/text-sm s/uppercase- s/tracking-wider s/text-muted "flex-1 min-w-0")}
                       "Contingency 5%")
                 (d/div {:class "flex items-baseline justify-end shrink-0 ml-2"}
                        (d/span {:class (s/cx s/weight-semibold s/text-secondary)}
                                (format-currency contingency))))
           (d/li {:class (s/cx s/bg-surface s/text-primary "flex items-baseline px-4 py-4 border-t border-pink-500/40")}
                 (d/h3 {:class (s/cx s/weight-bold s/text-lg s/uppercase- s/tracking-wider "flex-1 min-w-0")}
                       "TOTAL")
                 (d/div {:class "flex items-baseline justify-end shrink-0 ml-2"}
                        (d/span {:class s/value-lg}
                                (format-currency grand-total)))))))

(defn pad-two-digits [n]
  (if (< n 10)
    (str "0" n)
    (str n)))

(defnc detail-line-item
  [{:keys [idx detail set-expanded-items expanded-items]}]
  (let [item-id (str "detail-item-" idx)
        description (-> detail :description)
        has-description? description
        is-odd-detail? (odd? idx)]
    (if has-description?
      (d/li {:class (s/cx "cursor-pointer overflow-hidden" s/font-ui
                          (when is-odd-detail? s/bg-surface-alt))
             :on-click (fn []
                         (set-expanded-items
                          (fn [prev]
                            (if (prev item-id)
                              (disj prev item-id)
                              (conj prev item-id)))))}
            (d/div {:class "px-8 py-2 flex justify-between items-center"}
                   (d/span {:class (s/cx s/text-xs+ s/text-ghost "mr-4")}
                           (str (pad-two-digits (inc idx)) "."))
                   (d/span {:class (s/cx "justify-start flex-1 flex items-center" s/text-sm s/text-secondary)}
                           (:title detail)
                           (d/div {:class (s/cx "w-4 h-4 ml-2" s/text-ghost)} ($ InformationCircle)))
                   (d/span {:class s/value-sm}
                           (format-currency (:amount detail))))
            (when (expanded-items item-id)
              (d/div {:class "border-l-2 border-pink-500/30"}
                     (d/div {:class ""}
                            (d/div {:class (s/cx s/body-sm s/bg-surface-alt)}
                                   (d/p {:class "px-6 py-4"}
                                        description))))))
      (d/li {:class (s/cx s/font-ui (when is-odd-detail? s/bg-surface-alt))}
            (d/div {:class "px-8 py-2 flex justify-between items-center"}
                   (d/span {:class (s/cx s/text-xs+ s/text-ghost "mr-4")}
                           (str (pad-two-digits (inc idx)) "."))
                   (d/span {:class (s/cx "justify-start flex-1" s/text-sm s/text-secondary)}
                           (:title detail))
                   (d/span {:class s/value-sm}
                           (format-currency (:amount detail))))))))

(defn details->render-items
  "Transforms a flat seq of detail maps into a render sequence with
   interleaved group headers. Each detail may have an optional :group key.
   Returns a vector of {:type :header/:detail ...} maps."
  [details]
  (loop [items details
         idx 0
         prev-group nil
         result []]
    (if (empty? items)
      result
      (let [detail (first items)
            curr-group (:group detail)
            show-header? (and curr-group (not= curr-group prev-group))]
        (recur (rest items)
               (inc idx)
               curr-group
               (cond-> result
                 show-header? (conj {:type :header :label curr-group :key (str "gh-" idx)})
                 true (conj {:type :detail :detail detail :idx idx :key (str "d-" idx)})))))))

(defnc section-line-item
  [{:keys [idx item set-expanded-items expanded-items]}]
  (let [section-ref (hooks/use-ref (str "section-" idx))
        scroll-to-ref (use-scroll-to-ref)
        item-id (str "item-" idx)
        details (:details item)
        sub-total (calculate-section-total-no-tax details)
        tax-rate (-> item :tax :rate)
        tax-label (-> item :tax :label)
        tax-total (* sub-total tax-rate)
        has-tax? (> tax-rate 0)
        total (+ sub-total tax-total)
        is-odd (odd? idx)
        render-items (details->render-items details)]

    (d/li {:ref section-ref
           :class (s/cx "overflow-hidden" s/font-ui
                        (if is-odd s/bg-surface s/bg-surface-alt))}

          ;; Section header — stacks on mobile, side-by-side on sm+
          (d/div {:class (s/cx "flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors"
                               "hover:bg-slate-800/50 dark:hover:bg-slate-800/50")
                  :on-click (fn []
                              (set-expanded-items
                               (fn [prev]
                                 (if (prev item-id)
                                   (disj prev item-id)
                                   (conj prev item-id)))))}
                 (d/h3 {:class (s/cx s/font-display s/weight-semibold s/uppercase- s/tracking-wide s/text-secondary
                                     "text-base sm:text-lg flex-1 min-w-0")}
                       (str (inc idx) ". " (:title item)))
                 (d/div {:class "flex items-baseline justify-end shrink-0 ml-2"}
                        (d/span {:class (s/cx s/weight-semibold s/text-value s/text-sm "sm:text-base")}
                                (format-currency total))
                        (d/div {:class (str "w-4 h-4 ml-3 transition-transform " s/text-faint " "
                                            (when (expanded-items item-id) "rotate-90"))}
                               ($ ChevronRightIcon))))

          ;; Expanded content
          (when (expanded-items item-id)
            (d/div {:class "border-l-2 border-pink-500/30"}

                   ;; Section description
                   (d/div {:class (s/cx s/body-sm s/bg-surface-alt)}
                          (d/p {:class "px-8 py-4"}
                               (:description item)))

                   ;; Detail line items with group headers
                   (d/ol {}
                         (map (fn [ri]
                                (case (:type ri)
                                  :header
                                  (d/div {:key (:key ri)
                                          :class (s/cx "px-8 py-2 border-b border-slate-700/40"
                                                       s/bg-surface s/text-accent-50
                                                       "text-sm sm:text-base" s/weight-semibold s/uppercase- s/tracking-label)}
                                         (d/span {} (:label ri)))
                                  :detail
                                  ($ detail-line-item
                                     {:idx (:idx ri)
                                      :key (:key ri)
                                      :detail (:detail ri)
                                      :set-expanded-items set-expanded-items
                                      :expanded-items expanded-items})))
                              render-items))

                   ;; Section footer — totals + close button
                   (d/div {:class (s/cx s/bg-surface "flex flex-col border-t border-slate-200 dark:border-slate-800")}
                          (when has-tax?
                            (d/div (d/div {:class (s/cx s/weight-semibold s/text-sm "px-8 py-2 flex")}
                                          (d/span {:class (s/cx s/text-xs s/text-ghost)} "-")
                                          (d/div {:class (s/cx "flex justify-between ml-8 w-full" s/text-secondary)}
                                                 (d/span {} "Sub total: ")
                                                 (d/span {} (format-currency sub-total))))
                                   (d/div {:class (s/cx s/weight-semibold s/text-sm "px-8 py-2 flex")}
                                          (d/span {:class (s/cx s/text-xs s/text-ghost)} "-")
                                          (d/div {:class (s/cx "flex justify-between ml-8 w-full" s/text-warning-80)}
                                                 (d/span {} tax-label)
                                                 (d/span {} (format-currency tax-total))))))
                          (d/div {:class (s/cx s/weight-bold s/text-base
                                               "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20")}
                                 (d/span {:class (s/cx s/text-xs s/text-ghost)} "-")
                                 (d/div {:class (s/cx "flex justify-between ml-8 w-full" s/text-accent)}
                                        (d/span {} "Total: ")
                                        (d/span {} (format-currency total))))
                          (d/div {:class (s/cx s/btn-text s/bg-surface-alt
                                               "flex p-3 justify-center items-center cursor-pointer")
                                  :on-click (fn []
                                              (set-expanded-items
                                               (fn [prev]
                                                 (if (prev item-id)
                                                   (disj prev item-id)
                                                   (conj prev item-id))))
                                              (scroll-to-ref section-ref))}
                                 "CLOSE SECTION"
                                 (d/div {:class (str "w-4 h-4 transition-transform ml-2 "
                                                     (when (expanded-items item-id) "-rotate-90"))}
                                        ($ ChevronRightIcon)))))))))

(defnc budget-table
  [{:keys [cost-data]}]
  (let [[expanded-items set-expanded-items] (hooks/use-state #{})]
    (d/ol {:class (s/cx "w-full" s/text-inverse s/font-ui)}
          (map-indexed
           (fn [idx item]
             ($ section-line-item
                {:idx idx
                 :key (str idx "-section")
                 :item item
                 :set-expanded-items set-expanded-items
                 :expanded-items expanded-items}))
           cost-data)

          ;; Total
          ($ total-section {:cost-data cost-data}))))
