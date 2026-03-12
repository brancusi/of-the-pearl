(ns amp.pages.budget.cash-flow
  (:require
   ["gsap" :refer [gsap]]
   [amp.pages.budget.table :refer [sub-total-all-sections contingency-amount]]
   [amp.pages.budget.cost-breakdown :refer [cost-data]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def cashflow-data
  {:debt-raised 0
   :funds-raised 175000

   :cash-flow-model
   [;; ============================================================
    ;; JULY 2025
    ;; ============================================================
    {:id :admin-jul-25
     :title "Admin — Core Team (Jul)"
     :due "2025-07-15"
     :amount 10000
     :priority :normal
     :status :paid}

    {:id :contingency-jul-25
     :title "Contingency (Jul)"
     :due "2025-07-20"
     :amount 500
     :priority :normal
     :status :paid}

    ;; ============================================================
    ;; AUGUST 2025
    ;; ============================================================
    {:id :admin-aug-25
     :title "Admin — Core Team (Aug)"
     :due "2025-08-15"
     :amount 10000
     :priority :normal
     :status :paid}

    {:id :contingency-aug-25
     :title "Contingency (Aug)"
     :due "2025-08-20"
     :amount 500
     :priority :normal
     :status :paid}

    ;; ============================================================
    ;; SEPTEMBER 2025
    ;; ============================================================
    {:id :venice-sep-25
     :title "Venice — Lodging & Per Diem (Sep)"
     :due "2025-09-05"
     :amount 13000
     :priority :normal
     :status :paid}

    {:id :admin-sep-25
     :title "Admin — Core Team + Travel (Sep)"
     :due "2025-09-15"
     :amount 20000
     :priority :high
     :status :paid}

    {:id :contingency-sep-25
     :title "Contingency (Sep)"
     :due "2025-09-20"
     :amount 650
     :priority :normal
     :status :paid}

    ;; ============================================================
    ;; OCTOBER 2025
    ;; ============================================================
    {:id :venice-oct-25
     :title "Venice — Lodging & Per Diem (Oct)"
     :due "2025-10-05"
     :amount 13000
     :priority :normal
     :status :paid}

    {:id :admin-oct-25
     :title "Admin — Core Team + Travel (Oct)"
     :due "2025-10-15"
     :amount 20000
     :priority :high
     :status :paid}

    {:id :contingency-oct-25
     :title "Contingency (Oct)"
     :due "2025-10-20"
     :amount 650
     :priority :normal
     :status :paid}

    ;; ============================================================
    ;; NOVEMBER 2025
    ;; ============================================================
    {:id :la-nov-25
     :title "LA Production — Phase 1 Startup (Nov)"
     :due "2025-11-10"
     :amount 31325
     :priority :high
     :status :paid}

    {:id :admin-nov-25
     :title "Admin — Core Team (Nov)"
     :due "2025-11-15"
     :amount 10000
     :priority :normal
     :status :paid}

    {:id :contingency-nov-25
     :title "Contingency (Nov)"
     :due "2025-11-20"
     :amount 1566
     :priority :normal
     :status :paid}

    ;; ============================================================
    ;; DECEMBER 2025
    ;; ============================================================
    {:id :la-dec-25
     :title "LA Production — Phase 1 Continued (Dec)"
     :due "2025-12-10"
     :amount 31325
     :priority :high
     :status :paid}

    {:id :admin-dec-25
     :title "Admin — Core Team (Dec)"
     :due "2025-12-15"
     :amount 10000
     :priority :normal
     :status :paid}

    {:id :contingency-dec-25
     :title "Contingency (Dec)"
     :due "2025-12-20"
     :amount 1566
     :priority :normal
     :status :paid}

    ;; ============================================================
    ;; JANUARY 2026
    ;; ============================================================
    {:id :venice-jan-26
     :title "Venice — Venue Tranche 1 (10%)"
     :due "2026-01-05"
     :amount 30650
     :priority :critical
     :status :paid}

    {:id :la-jan-26
     :title "LA Production — Phase 2 (Jan)"
     :due "2026-01-10"
     :amount 30325
     :priority :high
     :status :paid}

    {:id :admin-jan-26
     :title "Admin — Core Team (Jan)"
     :due "2026-01-15"
     :amount 10000
     :priority :normal
     :status :paid}

    {:id :contingency-jan-26
     :title "Contingency (Jan)"
     :due "2026-01-20"
     :amount 3049
     :priority :normal
     :status :paid}

    ;; ============================================================
    ;; FEBRUARY 2026
    ;; ============================================================
    {:id :venice-feb-26
     :title "Venice — Venue Tranche 2 + 3 (60%)"
     :due "2026-02-05"
     :amount 183900
     :priority :critical
     :status :pending}

    {:id :la-feb-26
     :title "LA Production — Phase 3 (Feb)"
     :due "2026-02-10"
     :amount 74825
     :priority :critical
     :status :pending}

    {:id :admin-feb-26
     :title "Admin — Core Team + Misc (Feb)"
     :due "2026-02-15"
     :amount 10500
     :priority :high
     :status :pending}

    {:id :contingency-feb-26
     :title "Contingency (Feb)"
     :due "2026-02-20"
     :amount 12936
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; MARCH 2026
    ;; ============================================================
    {:id :venice-mar-26
     :title "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup"
     :due "2026-03-05"
     :amount 172200
     :priority :critical
     :status :pending}

    {:id :la-mar-26
     :title "LA Production — Final Phase + Crating (Mar)"
     :due "2026-03-10"
     :amount 97325
     :priority :critical
     :status :pending}

    {:id :admin-mar-26
     :title "Admin — Core Team + Misc (Mar)"
     :due "2026-03-15"
     :amount 10500
     :priority :high
     :status :pending}

    {:id :contingency-mar-26
     :title "Contingency (Mar)"
     :due "2026-03-20"
     :amount 13476
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; APRIL 2026
    ;; ============================================================
    {:id :venice-apr-26
     :title "Venice — Opening Month + Studio Launch + Operations"
     :due "2026-04-05"
     :amount 110267
     :priority :critical
     :status :pending}

    {:id :admin-apr-26
     :title "Admin — Core Team + Travel + Lodging (Apr)"
     :due "2026-04-15"
     :amount 33000
     :priority :high
     :status :pending}

    {:id :contingency-apr-26
     :title "Contingency (Apr)"
     :due "2026-04-20"
     :amount 5513
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; MAY 2026
    ;; ============================================================
    {:id :venice-may-26
     :title "Venice — Studio + Operations (May)"
     :due "2026-05-05"
     :amount 53717
     :priority :normal
     :status :pending}

    {:id :admin-may-26
     :title "Admin — Core Team + Misc (May)"
     :due "2026-05-15"
     :amount 10500
     :priority :normal
     :status :pending}

    {:id :contingency-may-26
     :title "Contingency (May)"
     :due "2026-05-20"
     :amount 2686
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; JUNE 2026
    ;; ============================================================
    {:id :venice-jun-26
     :title "Venice — Studio + Operations + Catalogue (Jun)"
     :due "2026-06-05"
     :amount 94467
     :priority :high
     :status :pending}

    {:id :admin-jun-26
     :title "Admin — Core Team + Travel + Misc (Jun)"
     :due "2026-06-15"
     :amount 12500
     :priority :normal
     :status :pending}

    {:id :contingency-jun-26
     :title "Contingency (Jun)"
     :due "2026-06-20"
     :amount 4723
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; JULY 2026
    ;; ============================================================
    {:id :venice-jul-26
     :title "Venice — Studio + Operations (Jul)"
     :due "2026-07-05"
     :amount 53717
     :priority :normal
     :status :pending}

    {:id :admin-jul-26
     :title "Admin — Core Team + Misc (Jul)"
     :due "2026-07-15"
     :amount 10500
     :priority :normal
     :status :pending}

    {:id :contingency-jul-26
     :title "Contingency (Jul)"
     :due "2026-07-20"
     :amount 2686
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; AUGUST 2026
    ;; ============================================================
    {:id :venice-aug-26
     :title "Venice — Studio + Operations (Aug)"
     :due "2026-08-05"
     :amount 53717
     :priority :normal
     :status :pending}

    {:id :admin-aug-26
     :title "Admin — Core Team + Misc (Aug)"
     :due "2026-08-15"
     :amount 10500
     :priority :normal
     :status :pending}

    {:id :contingency-aug-26
     :title "Contingency (Aug)"
     :due "2026-08-20"
     :amount 2686
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; SEPTEMBER 2026
    ;; ============================================================
    {:id :venice-sep-26
     :title "Venice — Studio + Operations (Sep)"
     :due "2026-09-05"
     :amount 53717
     :priority :normal
     :status :pending}

    {:id :admin-sep-26
     :title "Admin — Core Team + Travel + Misc (Sep)"
     :due "2026-09-15"
     :amount 12500
     :priority :normal
     :status :pending}

    {:id :contingency-sep-26
     :title "Contingency (Sep)"
     :due "2026-09-20"
     :amount 2686
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; OCTOBER 2026
    ;; ============================================================
    {:id :venice-oct-26
     :title "Venice — Studio + Operations (Oct)"
     :due "2026-10-05"
     :amount 42217
     :priority :normal
     :status :pending}

    {:id :admin-oct-26
     :title "Admin — Core Team + Misc (Oct)"
     :due "2026-10-15"
     :amount 10500
     :priority :normal
     :status :pending}

    {:id :contingency-oct-26
     :title "Contingency (Oct)"
     :due "2026-10-20"
     :amount 2111
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; NOVEMBER 2026
    ;; ============================================================
    {:id :venice-nov-26
     :title "Venice — Studio + Operations (Nov)"
     :due "2026-11-05"
     :amount 42217
     :priority :normal
     :status :pending}

    {:id :admin-nov-26
     :title "Admin — Core Team + Misc (Nov)"
     :due "2026-11-15"
     :amount 10500
     :priority :normal
     :status :pending}

    {:id :contingency-nov-26
     :title "Contingency (Nov)"
     :due "2026-11-20"
     :amount 2111
     :priority :normal
     :status :pending}

    ;; ============================================================
    ;; DECEMBER 2026
    ;; ============================================================
    {:id :venice-dec-26
     :title "Venice — Close-out + Logistics (Return)"
     :due "2026-12-05"
     :amount 134517
     :priority :high
     :status :pending}

    {:id :admin-dec-26
     :title "Admin — Core Team + Travel + Misc (Dec)"
     :due "2026-12-15"
     :amount 20500
     :priority :high
     :status :pending}

    {:id :contingency-dec-26
     :title "Contingency (Dec)"
     :due "2026-12-20"
     :amount 6726
     :priority :normal
     :status :pending}]})

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn parse-date [s] (js/Date. s))
(defn date->ms  [d] (.getTime d))

(defn format-date
  "e.g. 'Feb 20'"
  [date-str]
  (let [d (parse-date date-str)]
    (str (.toLocaleString d "en-US" #js {:month "short"})
         " " (.getDate d))))

(defn format-currency [n]
  (.toLocaleString n "en-US" #js {:style "currency"
                                  :currency "USD"
                                  :maximumFractionDigits 0}))

(defn past? [date-str]
  (< (date->ms (parse-date date-str))
     (date->ms (js/Date.))))

(defn priority-color
  "Pastel palette matching the site."
  [p]
  (case p
    :critical "#b00020"   ;; pink-300
    :high     "#fcd34d"   ;; amber-300
    :normal   "#a5b4fc"   ;; indigo-300
    "#a5b4fc"))

(defn priority-tag-bg [p]
  (case p
    :critical "bg-red-500/15"
    :high     "bg-amber-400/15"
    :normal   "bg-indigo-400/15"
    "bg-indigo-400/15"))

(defn priority-tag-text [p]
  (case p
    :critical "text-pink-600 dark:text-pink-300"
    :high     "text-amber-600 dark:text-amber-300"
    :normal   "text-indigo-600 dark:text-indigo-300"
    "text-indigo-600 dark:text-indigo-300"))

(defn priority-dot-classes
  "Tailwind classes for the timeline circle marker."
  [p paid?]
  (let [border (case p
                 :critical "border-pink-600 dark:border-pink-300"
                 :high     "border-amber-500 dark:border-amber-300"
                 :normal   "border-indigo-500 dark:border-indigo-300"
                 "border-indigo-500 dark:border-indigo-300")
        fill   (if paid?
                 "bg-transparent"
                 (case p
                   :critical "bg-pink-600 dark:bg-pink-300"
                   :high     "bg-amber-500 dark:bg-amber-300"
                   :normal   "bg-indigo-500 dark:bg-indigo-300"
                   "bg-indigo-500 dark:bg-indigo-300"))]
    (str border " " fill)))

(defn priority-amount-class
  "Text color class for the monetary amount."
  [p paid?]
  (if paid?
    s/text-muted
    (case p
      :critical "text-pink-600 dark:text-pink-300"
      :high     "text-amber-500 dark:text-amber-300"
      :normal   "text-indigo-600 dark:text-indigo-300"
      "text-indigo-600 dark:text-indigo-300")))

(defn summary-color-classes
  "Dot + text color classes for month-summary-row."
  [all-paid n-crit]
  (cond
    all-paid
    {:border "border-emerald-500 dark:border-emerald-300"
     :fill   "bg-transparent"
     :text   "text-emerald-600 dark:text-emerald-300"}
    (pos? n-crit)
    {:border "border-pink-600 dark:border-pink-300"
     :fill   "bg-pink-600 dark:bg-pink-300"
     :text   "text-pink-600 dark:text-pink-300"}
    :else
    {:border "border-indigo-500 dark:border-indigo-300"
     :fill   "bg-indigo-500 dark:bg-indigo-300"
     :text   "text-indigo-600 dark:text-indigo-300"}))

(defn priority-label [p]
  (case p
    :critical "CRIT"
    :high     "HIGH"
    :normal   "NORM"
    "—"))

;; Group entries by month
(defn group-by-month [entries]
  (let [month-key (fn [e]
                    (let [d (parse-date (:due e))]
                      (.toLocaleString d "en-US" #js {:month "long" :year "numeric"})))]
    (partition-by month-key (sort-by (comp date->ms parse-date :due) entries))))

;; Month rollup for summary view
(defn month-rollups [entries]
  (let [sorted (sort-by (comp date->ms parse-date :due) entries)
        groups (group-by-month sorted)]
    (mapv (fn [group]
            (let [d        (parse-date (:due (first group)))
                  label    (.toLocaleString d "en-US" #js {:month "short" :year "numeric"})
                  total    (reduce + 0 (map :amount group))
                  paid     (->> group (filter #(= :paid (:status %))) (map :amount) (reduce + 0))
                  pending  (- total paid)
                  n-items  (count group)
                  n-paid   (count (filter #(= :paid (:status %)) group))
                  n-crit   (count (filter #(= :critical (:priority %)) group))
                  all-paid (= n-paid n-items)
                  has-now  (let [month   (.getMonth d)
                                 year    (.getFullYear d)
                                 now     (js/Date.)
                                 n-month (.getMonth now)
                                 n-year  (.getFullYear now)]
                             (and (= month n-month) (= year n-year)))]
              {:label    label
               :total    total
               :paid     paid
               :pending  pending
               :n-items  n-items
               :n-paid   n-paid
               :n-crit   n-crit
               :all-paid all-paid
               :has-now  has-now
               :entries  group}))
          groups)))

;; ---------------------------------------------------------------------------
;; Sub-components
;; ---------------------------------------------------------------------------

(defn status-classes [status]
  (case status
    :paid    {:dot "bg-emerald-400/20 dark:bg-emerald-300/20" :text "text-emerald-600 dark:text-emerald-300" :label "COST, PAID"}
    :pending {:dot "bg-slate-400/15 dark:bg-slate-500/15"     :text "text-slate-500"                       :label "DUE"}
    {:dot "bg-slate-400/15 dark:bg-slate-500/15" :text "text-slate-500" :label "\u2014"}))

(defnc timeline-node
  "A single cash-flow row on the timeline."
  [{:keys [entry idx]}]
  (let [{:keys [title due amount priority status]} entry
        node-ref  (hooks/use-ref nil)
        paid?     (= (keyword status) :paid)
        st        (status-classes (keyword status))]

    (hooks/use-effect
     :once
     (when @node-ref
       (.fromTo gsap @node-ref
                #js {:opacity 0 :x -20}
                #js {:opacity 1 :x 0
                     :duration 0.4
                     :delay (* idx 0.06)
                     :ease "power2.out"})))

    (d/div
     {:ref node-ref
      :class (str "relative flex items-stretch opacity-0 "
                  (when paid? "opacity-50"))}

     ;; left gutter — circle marker + dashed connector
     (d/div {:class "relative flex flex-col items-center"
             :style {:width "28px" :minWidth "28px"}}
            ;; circle
            (d/div {:class (str "mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 "
                                (priority-dot-classes (keyword priority) paid?))})
            ;; dashed line continuing down
            (d/div {:class "flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"}))

     ;; dashed horizontal connector
     (d/div {:class "flex items-start pt-[18px]"}
            (d/div {:class "w-4 border-t border-dashed border-slate-300 dark:border-slate-600"
                    :style {:marginTop "1px"}}))

     ;; content
     (d/div {:class "flex-1 pb-5 pt-1 pl-1"}

            ;; top line: date + priority + status
            (d/div {:class "flex items-center gap-2 mb-1"}
                   (d/span {:class (s/cx s/font-ui "text-[11px]" s/text-muted)}
                           (format-date due))
                   (d/span {:class (str "px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono "
                                        (priority-tag-bg (keyword priority)) " "
                                        (priority-tag-text (keyword priority)))}
                           (priority-label (keyword priority)))
                   ;; status badge
                   (d/span {:class (str "px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono "
                                        (:dot st) " " (:text st))}
                           (:label st)))

            ;; title
            (d/p {:class (str "text-sm leading-snug "
                              (if paid? (str s/text-muted " line-through") s/text-secondary))}
                 title)

            ;; amount
            (d/p {:class (str "mt-0.5 font-mono text-base font-semibold tracking-tight "
                              (priority-amount-class (keyword priority) paid?))}
                 (format-currency amount))))))


(defnc now-marker
  "TODAY — horizontal line across the timeline."
  []
  (let [ref (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (when @ref
       (.fromTo gsap @ref
                #js {:opacity 0 :scaleX 0}
                #js {:opacity 1 :scaleX 1
                     :duration 0.6
                     :delay 0.2
                     :ease "power3.out"})))

    (d/div {:ref ref
            :class "flex items-center gap-2 py-3 origin-left opacity-0"}
           ;; pulsing dot on the spine
           (d/div {:class "relative flex items-center justify-center"
                   :style {:width "28px" :minWidth "28px"}}
                  (d/div {:class "absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"})
                  (d/div {:class "h-2.5 w-2.5 rounded-full bg-rose-400"}))
           ;; line
           (d/div {:class "flex-1 h-px bg-rose-400/50"})
           ;; label
           (d/span {:class "font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1"}
                   "now"))))


(defnc month-header
  "Section header for a month group."
  [{:keys [label idx]}]
  (let [ref (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (when @ref
       (.fromTo gsap @ref
                #js {:opacity 0 :y 8}
                #js {:opacity 1 :y 0
                     :duration 0.35
                     :delay (+ 0.1 (* idx 0.05))
                     :ease "power2.out"})))
    (d/div {:ref ref
            :class "flex items-center gap-3 pt-8 pb-2 opacity-0"}
           ;; pink accent line — matches site section-block
           (d/div {:class "h-px w-8 bg-pink-500/70"})
           (d/span {:class (s/cx s/font-ui "text-[10px]" s/weight-bold s/uppercase- "tracking-[0.25em]" s/text-muted)}
                   label))))


;; ---------------------------------------------------------------------------
;; Month summary row (collapsed view)
;; ---------------------------------------------------------------------------

(defnc month-summary-row
  [{:keys [rollup idx]}]
  (let [{:keys [label total paid pending n-items n-crit all-paid has-now]} rollup
        ref   (hooks/use-ref nil)
        cls   (summary-color-classes all-paid n-crit)]

    (hooks/use-effect
     :once
     (when @ref
       (.fromTo gsap @ref
                #js {:opacity 0 :x -16}
                #js {:opacity 1 :x 0
                     :duration 0.35
                     :delay (* idx 0.05)
                     :ease "power2.out"})))

    (d/div
     {:ref ref
      :class "relative flex items-stretch opacity-0"}

     ;; left gutter — circle + dashed spine
     (d/div {:class "relative flex flex-col items-center"
             :style {:width "28px" :minWidth "28px"}}
            (d/div {:class (str "mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 "
                                (:border cls) " " (:fill cls))})
            (d/div {:class "flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"}))

     ;; dashed connector
     (d/div {:class "flex items-start pt-[18px]"}
            (d/div {:class "w-4 border-t border-dashed border-slate-300 dark:border-slate-600"
                    :style {:marginTop "1px"}}))

     ;; content
     (d/div {:class "flex-1 pb-4 pt-1 pl-1"}

            ;; row 1: month label + item count + now badge
            (d/div {:class "flex items-center gap-2 mb-1"}
                   (d/span {:class (s/cx s/font-ui "text-xs" s/weight-bold s/uppercase- "tracking-wider" s/text-primary)}
                           label)
                   (d/span {:class (s/cx s/font-ui "text-[10px]" s/text-muted)}
                           (str n-items " items"))
                   (when has-now
                     (d/span {:class "px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300"}
                             "NOW"))
                   (when (pos? n-crit)
                     (d/span {:class "px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300"}
                             (str n-crit " crit"))))

            ;; row 2: total + paid/pending breakdown
            (d/div {:class "flex items-baseline gap-3"}
                   (d/span {:class (str "font-mono text-lg font-bold tracking-tight " (:text cls))}
                           (format-currency total))
                   (when (pos? paid)
                     (d/span {:class "font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60"}
                             (str (format-currency paid) " COST, PAID")))
                   (when (pos? pending)
                     (d/span {:class (s/cx s/font-ui "text-[11px]" s/text-muted)}
                             (str (format-currency pending) " due"))))

            ;; progress bar
            (d/div {:class "mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative"}
                   (d/div {:class "absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50"
                           :style {:width (str (if (pos? total)
                                                 (Math/round (* 100 (/ paid total)))
                                                 0) "%")}}))))))


;; ---------------------------------------------------------------------------
;; View toggle
;; ---------------------------------------------------------------------------

(defnc view-toggle
  [{:keys [expanded? on-toggle]}]
  (d/button
   {:class (s/cx "mb-4 flex items-center gap-2" s/font-ui "text-[10px]" s/weight-bold s/uppercase- "tracking-[0.25em]" s/text-muted "transition-colors hover:text-pink-600 dark:hover:text-pink-300")
    :on-click on-toggle}
   (d/div {:class "h-px w-4 bg-pink-500/50"})
   (if expanded? "Summary" "Expand")
   (d/span {:class s/text-ghost} (if expanded? "▲" "▼"))))


;; ---------------------------------------------------------------------------
;; Summary header
;; ---------------------------------------------------------------------------

(defnc summary-header
  [{:keys [entries target-total funds-raised debt-raised]}]
  (let [paid-sum     (->> entries
                          (filter #(= :paid (keyword (:status %))))
                          (map :amount)
                          (reduce + 0))
        pending-sum  (- target-total paid-sum)
        critical-sum (->> entries
                          (filter #(= :critical (keyword (:priority %))))
                          (map :amount)
                          (reduce + 0))
        gap          (- target-total funds-raised)
        next-due     (let [d (js/Date.)]
                       (.setDate d (+ (.getDate d) 7))
                       d)
        ref          (hooks/use-ref nil)]

    (hooks/use-effect
     :once
     (when @ref
       (.fromTo gsap @ref
                #js {:opacity 0 :y -12}
                #js {:opacity 1 :y 0
                     :duration 0.5
                     :ease "power2.out"})))

    (d/div {:ref ref
            :class (s/cx "mb-4 pb-5 opacity-0" "border-b" s/border-subtle)}

           ;; eyebrow
           (d/div {:class "mb-6 flex items-center gap-3"}
                  (d/div {:class (s/cx "w-10" s/divider-accent)})
                  (d/p {:class s/eyebrow-highlight}
                       "4. ")
                  (d/p {:class s/eyebrow-midlight}
                       "Cash Flow"))

           ;; target total
           (d/p {:class (s/cx s/font-ui "text-3xl" s/weight-extrabold "tracking-tight" s/text-primary)}
                (format-currency target-total))
           (d/p {:class (s/cx s/font-ui "text-[11px] mt-0.5" s/text-muted)} "target total")

           ;; funding bar
           (d/div {:class "mt-4 grid grid-cols-2 gap-4"}
                  (d/div {:class "border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3"}
                         (d/p {:class "font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1"} "Funds Raised")
                         (d/p {:class "font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300"} (format-currency funds-raised)))

                  (d/div {:class "border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3"}
                         (d/p {:class "font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1"} "Remaining")
                         (d/p {:class "font-mono text-lg font-bold text-pink-600 dark:text-pink-300"} (format-currency gap))))

           ;; second row: paid / pending / critical / next
           (d/div {:class "mt-3 grid grid-cols-2 gap-4"}
                  (d/div {:class "border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3"}
                         (d/p {:class (s/cx s/font-ui "text-lg" s/uppercase- "tracking-widest" s/text-muted "mb-1")} "COST, PAID")
                         (d/p {:class "font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300"} (format-currency paid-sum)))
                  (d/div {:class (str "border-l-2 pl-3 " s/border-subtle)}
                         (d/p {:class (s/cx s/font-ui "text-lg" s/uppercase- "tracking-widest" s/text-muted "mb-1")} "Pending")
                         (d/p {:class (s/cx s/font-ui "text-lg" s/weight-bold " text-pink-600 dark:text-pink-300")} (format-currency pending-sum)))
                  (d/div {:class "border-l-2 border-pink-500/30 pl-3"}
                         (d/p {:class (s/cx s/font-ui "text-lg" s/uppercase- "tracking-widest" s/text-muted "mb-1")} "Critical")
                         (d/p {:class "font-mono text-lg font-bold text-pink-600 dark:text-pink-300"} (format-currency critical-sum)))
                  (d/div {:class "border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3"}
                         (d/p {:class (s/cx s/font-ui "text-lg" s/uppercase- "tracking-widest" s/text-muted "mb-1")} "Next Due")
                         (d/p {:class "font-mono text-base font-bold text-indigo-600 dark:text-indigo-300"}
                              (str (.toLocaleString next-due "en-US" #js {:month "short"})
                                   " " (.getDate next-due))))))))


;; ---------------------------------------------------------------------------
;; Main component
;; ---------------------------------------------------------------------------

(defnc cash-flow [{:keys [id]}]
  (let [entries cashflow-data
        [error set-error!]       (hooks/use-state nil)
        [expanded? set-expanded!] (hooks/use-state false)
        container-ref            (hooks/use-ref nil)]

    ;; spine entrance
    (hooks/use-effect
     [entries]
     (when (and entries @container-ref)
       (let [spine (.querySelector @container-ref ".cf-spine")]
         (when spine
           (.fromTo gsap spine
                    #js {:scaleY 0}
                    #js {:scaleY 1 :duration 0.8 :delay 0.05 :ease "power3.out"})))))

    (d/div
     {:id id
      :ref container-ref
      :class (s/cx "min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30" s/text-primary s/bg-surface)}

     (cond
       error
       (d/p {:class "font-mono text-sm text-red-400 p-4"} (str "err: " error))

       (nil? entries)
       (d/div {:class "flex items-center justify-center py-20"}
              (d/div {:class "h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"}))

       :else
       (let [{:keys [cash-flow-model funds-raised debt-raised]} entries
             budget-sub-total (sub-total-all-sections cost-data)
             target-total (+ budget-sub-total contingency-amount)
             entries-kw (map #(-> %
                                  (update :priority keyword)
                                  (update :status keyword))
                             cash-flow-model)
             sorted     (sort-by (comp date->ms parse-date :due) entries-kw)
             groups     (group-by-month sorted)
             now-ms     (date->ms (js/Date.))

             ;; Build flat list interleaving month headers + now marker
             all-items
             (let [items    (atom [])
                   now-done (atom false)
                   counter  (atom 0)]
               (doseq [group groups]
                 (let [month-label (let [d (parse-date (:due (first group)))]
                                     (.toLocaleString d "en-US" #js {:month "long" :year "numeric"}))]
                   (swap! items conj {:type :month :label month-label :idx @counter})
                   (swap! counter inc)
                   (doseq [entry group]
                     (let [entry-ms (date->ms (parse-date (:due entry)))]
                       ;; insert now marker right before first future entry
                       (when (and (not @now-done) (> entry-ms now-ms))
                         (swap! items conj {:type :now})
                         (reset! now-done true))
                       (swap! items conj {:type  :entry
                                          :entry entry
                                          :idx   @counter
                                          :past? (= :paid (:status entry))})
                       (swap! counter inc)))))
               ;; if all entries are in the past, append now at end
               (when (not @now-done)
                 (swap! items conj {:type :now}))
               @items)]

         (d/div
          ;; summary header
          ($ summary-header {:entries entries-kw
                             :target-total target-total
                             :funds-raised funds-raised
                             :debt-raised debt-raised})

          ;; toggle
          ($ view-toggle {:expanded? expanded?
                          :on-toggle #(set-expanded! not)})

          ;; timeline area
          (d/div {:class "relative"}

                 ;; vertical dashed spine
                 (d/div {:class (str "cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " s/border-subtle)})

                 (if expanded?
                   ;; ── EXPANDED: full timeline ──
                   (map-indexed
                    (fn [i item]
                      (case (:type item)
                        :month ($ month-header {:key (str "m-" i) :label (:label item) :idx (:idx item)})
                        :now   ($ now-marker   {:key "now"})
                        :entry ($ timeline-node {:key  (str "e-" i)
                                                 :entry (:entry item)
                                                 :idx   (:idx item)
                                                 :is-past (= :paid (:status (:entry item)))})))
                    all-items)

                   ;; ── SUMMARY: month rollups ──
                   (let [rollups  (month-rollups entries-kw)
                         now-done (atom false)
                         out      (atom [])]
                     (doseq [[i r] (map-indexed vector rollups)]
                       (when (and (not @now-done) (:has-now r))
                         (swap! out conj ($ now-marker {:key "now-s"}))
                         (reset! now-done true))
                       (swap! out conj ($ month-summary-row {:key (str "sr-" i) :rollup r :idx i})))
                     (when (not @now-done)
                       (swap! out conj ($ now-marker {:key "now-s"})))
                     @out)))))))))