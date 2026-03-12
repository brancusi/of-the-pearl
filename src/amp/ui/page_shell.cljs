(ns amp.ui.page-shell
  "Universal page wrapper for routed views (except landing).

   Provides:
   • `grey-grad` background + `text-primary` cascade
   • `pt-14` clearance for the fixed `h-14` nav bar
   • Centered `content-column` layout
   • Optional `back-up-nav` scroll-to-top button

   Usage:
       ($ page-shell {:show-back-up? true}
          ($ my-section-a)
          ($ my-section-b))"
  (:require
   [amp.nav.back-up :refer [back-up-nav]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc page-shell
  [{:keys [show-back-up? children]
    :or   {show-back-up? true}}]
  (d/div {:class (s/cx s/page-shell
                       "flex items-center flex-col")}
         (when show-back-up? ($ back-up-nav))
         (d/div {:class (s/cx "flex flex-col" s/content-column)}
                children)))
