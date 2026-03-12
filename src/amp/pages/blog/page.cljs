(ns amp.pages.blog.page
  "Blog entry point — dispatches between the index page and individual
   post pages based on the :slug route parameter.
   All blog code loads in the :blog-view module."
  (:require [amp.pages.blog.index :refer [blog-index]]
            [amp.pages.blog.post :refer [blog-post]]
            [amp.ui.page-shell :refer [page-shell]]
            [amp.state.provider :refer [use-main-state]]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]))

(defnc blog-view
  [_props]
  (let [[state _] (use-main-state)
        slug (-> state :current-route :path-params :slug)]
    ($ page-shell {:show-back-up? (some? slug)}
       (if slug
         ($ blog-post {:slug slug})
         ($ blog-index)))))
