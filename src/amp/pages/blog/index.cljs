(ns amp.pages.blog.index
  "Blog index page — lists all posts from the registry as linked cards."
  (:require
   [amp.pages.blog.registry :refer [posts]]
   [amp.ui.section-header :refer [section-eyebrow]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def ^:private blog-display
  (s/cx s/font-display s/weight-semibold s/uppercase-
        "leading-none text-3xl sm:text-5xl md:text-7xl"
        s/text-primary))

(defnc post-card
  "A single post listing card with title, date, summary, and optional cover."
  [{:keys [slug title date summary cover-image]}]
  (d/a {:href (str "/blog/" slug)
        :class (s/cx "block group py-8"
                     "border-b border-slate-200/10 dark:border-white/10"
                     "hover:bg-slate-100/5 dark:hover:bg-slate-800/30"
                     "transition-colors duration-200")}
       (d/div {:class "flex flex-col sm:flex-row gap-4 sm:gap-8"}
              ;; Cover thumbnail (optional)
              (when cover-image
                (d/div {:class "w-full sm:w-48 shrink-0 aspect-[16/9] overflow-hidden"}
                       (d/img {:src (str cover-image "?auto=format,compress&w=400&h=225&fit=crop")
                               :alt title
                               :class "w-full h-full object-cover"})))
              ;; Text
              (d/div {:class "flex flex-col justify-center min-w-0"}
                     (d/p {:class (s/cx s/font-data s/text-xs s/text-faint
                                        s/uppercase- s/tracking-label "mb-2")}
                          date)
                     (d/h3 {:class (s/cx s/font-display s/weight-semibold s/text-primary
                                         "text-xl sm:text-2xl mb-2"
                                         "group-hover:text-pink-600 dark:group-hover:text-pink-300"
                                         "transition-colors duration-200")}
                           title)
                     (d/p {:class (s/cx s/body-sm "line-clamp-2")}
                          summary)))))

(defnc blog-index
  "Full blog index: eyebrow, heading, list of post cards."
  [_props]
  (d/div {:class (s/cx s/section-pt "px-4")}
         ;; Eyebrow + title
         ($ section-eyebrow {:text "Journal"})
         (d/h1 {:class (s/cx blog-display "mb-10")}
               "Blog")

         ;; Post listing
         (if (seq posts)
           (d/div {:class "divide-y divide-slate-200/10 dark:divide-white/10"}
                  (for [{:keys [slug] :as post} posts]
                    ($ post-card {:key slug :& post})))
           ;; Empty state
           (d/p {:class (s/cx s/body-lg s/text-muted "py-20 text-center")}
                "No posts yet — check back soon."))))
