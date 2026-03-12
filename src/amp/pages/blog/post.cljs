(ns amp.pages.blog.post
  "Individual blog post page — reads slug from route params,
   looks up the registry, and renders the post component inside page-shell."
  (:require
   [amp.pages.blog.registry :refer [posts-by-slug]]
   [amp.ui.section-header :refer [section-eyebrow]]
   [amp.ui.share-bar :refer [share-bar]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def ^:private post-display
  (s/cx s/font-display s/weight-semibold
        "leading-tight text-2xl sm:text-4xl md:text-5xl"
        s/text-primary))

(defnc blog-post
  "Renders a single blog post by slug. Shows 404-style fallback if slug not found."
  [{:keys [slug]}]
  (let [post (get posts-by-slug slug)]
    (if post
      (let [{:keys [title date author component]} post]
        (d/article {:class (s/cx s/section-pt "px-4")}
                   ;; Eyebrow + title
                   ($ section-eyebrow {:text date})
                   (d/h1 {:class (s/cx post-display "mb-4")}
                         title)

                   ;; Author
                   (when author
                     (d/p {:class (s/cx s/font-display s/weight-medium
                                        s/text-muted s/text-sm
                                        s/uppercase- s/tracking-wider "mb-6")}
                          (str "By " author)))

                   ;; Share bar — top
                   (d/div {:class "mb-10"}
                          ($ share-bar {:title title}))

                   ;; Post body — rendered by the post's component function
                   ($ component)

                   ;; Bottom share + back link
                   (d/div {:class (s/cx "mt-16 mb-12 pt-8 border-t" s/border-subtle)}
                          (d/div {:class "mb-8"}
                                 ($ share-bar {:title title}))
                          (d/a {:href "/blog"
                                :class (s/cx s/btn-text
                                             "inline-flex items-center gap-2")}
                               "← All Posts"))))

      ;; Post not found
      (d/div {:class (s/cx s/section-pt "px-4 py-20 text-center")}
             (d/p {:class (s/cx s/eyebrow s/text-faint "mb-6")}
                  "404")
             (d/h1 {:class (s/cx s/heading-display "mb-8")}
                   "Post Not Found")
             (d/p {:class (s/cx s/body-lg s/text-muted "mb-8")}
                  "The post you're looking for doesn't exist.")
             (d/a {:href "/blog"
                   :class (s/cx s/btn-text "inline-flex items-center gap-2")}
                  "← Back to Blog")))))
