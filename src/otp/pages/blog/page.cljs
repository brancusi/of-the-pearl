(ns otp.pages.blog.page
  "Blog entry point — dispatches between the index page and individual
   post pages based on the :slug route parameter.
   All blog code loads in the :blog-view module."
  (:require [otp.pages.blog.index :refer [blog-index]]
            [otp.pages.blog.post :refer [blog-post]]
            [otp.ui.page-shell :refer [page-shell]]
            [otp.state.provider :refer [use-main-state]]
            [otp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]))

(defnc blog-view
  [_props]
  (let [[state _] (use-main-state)
        slug (-> state :current-route :path-params :slug)]
    ($ page-shell {:show-back-up? (some? slug)}
       (if slug
         ($ blog-post {:slug slug})
         ($ blog-index)))))
