(ns amp.ui.button
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(def ^:private color-classes
  {:pink  {:text   "text-pink-700 hover:text-pink-800 dark:text-pink-300/70 dark:hover:text-pink-300"
           :border "border-pink-600/30 hover:border-pink-600/50 dark:border-pink-500/20 dark:hover:border-pink-500/40"
           :bg     "bg-pink-500/10 hover:bg-pink-500/15 dark:bg-pink-500/5 dark:hover:bg-pink-500/10"
           :arrow  "text-pink-600/50 group-hover:text-pink-700 dark:text-pink-300/40 dark:group-hover:text-pink-300 transition-colors"}
   :slate {:text   "text-slate-600 hover:text-slate-700 dark:text-slate-300/70 dark:hover:text-slate-200"
           :border "border-slate-600/30 hover:border-slate-600/50 dark:border-slate-400/20 dark:hover:border-slate-400/40"
           :bg     "bg-slate-500/10 hover:bg-slate-500/15 dark:bg-slate-500/5 dark:hover:bg-slate-500/10"
           :arrow  "text-slate-600/50 group-hover:text-slate-700 dark:text-slate-400/40 dark:group-hover:text-slate-300 transition-colors"}})

(defnc main-button
  [{:keys [title
           on-click
           size
           color
           bg-opacity
           additional-classes
           children]}]
  (let [size-classes (case size
                       :xs "text-[8px] tracking-[0.15em] px-2 py-1 gap-1.5"
                       :sm "text-[9px] tracking-[0.2em] px-3 py-1.5 gap-2"
                       "text-[11px] tracking-[0.25em] px-6 py-3 gap-3")
        palette     (get color-classes (or color :pink) (:pink color-classes))
        opacity-style (when bg-opacity {:backgroundColor (str "rgb(236 72 153 / " bg-opacity ")")})]
    (d/button {:class (str "group flex items-center
                            font-body font-semibold uppercase
                            transition-colors duration-300 ease-in-out "
                           (:text palette) " "
                           (:border palette) " border "
                           (:bg palette) " "
                           size-classes " "
                           additional-classes)
               :style opacity-style
               :on-click on-click}
              (or children title)
              (when title
                (d/span {:class (:arrow palette)} "↓")))))
