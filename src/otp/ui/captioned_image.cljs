(ns otp.ui.captioned-image
  (:require
   [otp.lib.defnc :refer [defnc]]
   [otp.ui.hero-image :refer [hero-image-view]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc captioned-image
  [{:keys [img-src caption credit]}]
  (d/div {:class "w-full h-full"}
         ($ hero-image-view
            {:img-src img-src}
            (when (or caption credit)
              (d/div
               (when caption
                 (d/span {:class "italic font-bold"} caption))
               (when credit
                 (d/span {:class "ml-4"} credit)))))))
