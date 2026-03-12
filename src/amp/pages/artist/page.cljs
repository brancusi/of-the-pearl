(ns amp.pages.artist.page
  (:require
   [amp.pages.artist.portrait :refer [portrait-section]]
   [amp.pages.artist.biography :refer [biography-section]]
   [amp.pages.artist.works :refer [works-section]]
   [amp.pages.artist.escape :refer [escape-section]]
   [amp.pages.artist.video :refer [video-section]]
   [amp.pages.artist.return :refer [return-section]]
   [amp.ui.page-shell :refer [page-shell]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc artist-view
  [_props]
  ($ page-shell
     ($ portrait-section  {:id "portrait"})
     ($ biography-section {:id "biography"})
     ($ works-section     {:id "works"})
     ($ escape-section    {:id "escape"})
     ($ video-section     {:id "video"})
     ($ return-section    {:id "return"})))
