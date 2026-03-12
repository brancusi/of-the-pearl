(ns otp.pages.artist.page
  (:require
   [otp.pages.artist.portrait :refer [portrait-section]]
   [otp.pages.artist.biography :refer [biography-section]]
   [otp.pages.artist.works :refer [works-section]]
   [otp.pages.artist.escape :refer [escape-section]]
   [otp.pages.artist.video :refer [video-section]]
   [otp.pages.artist.return :refer [return-section]]
   [otp.ui.page-shell :refer [page-shell]]
   [otp.lib.defnc :refer [defnc]]
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
