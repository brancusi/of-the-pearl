(ns amp.pages.artist.works
  "Artwork gallery section — lazy-loaded image carousel of the artist's work."
  (:require
   [amp.ui.image-gallery :refer [lazy-image-gallery]]
   [amp.ui.section-header :refer [section-header]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; TODO: Replace stub slides with final artwork images
(def slides
  [{:img-src      "https://atd-722658831.imgix.net/artwork/1.jpeg"
    :aspect-ratio 0.75
    :caption      "GILDED BLOCK COMPOSITION"
    :credit       "Zadik Zadikian"}

   {:img-src      "https://atd-722658831.imgix.net/blue_yellow/top_view.jpg"
    :aspect-ratio 0.75
    :caption      "BLUE YELLOW BLUE YELLOW"
    :credit       "Studio 2026"}

   {:img-src      "https://atd-722658831.imgix.net/blue_yellow/side-2.jpg"
    :aspect-ratio 0.75
    :caption      "BLUE YELLOW BLUE YELLOW"
    :credit       "Studio 2026"}

   {:img-src      "https://atd-722658831.imgix.net/big_red/master.jpg"
    :aspect-ratio 1.78
    :caption      "THE BIG RED"
    :credit       "Render 2026"}

   {:img-src      "https://atd-722658831.imgix.net/big_red/corner_low.jpg"
    :aspect-ratio 0.75
    :caption      "THE BIG RED"
    :credit       "Render 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/blue_unit_with_hand.jpg"
    :aspect-ratio 1.50
    :caption      "BLUE BLOCK"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/big_red/flag.jpg"
    :aspect-ratio 1.38
    :caption      "THE BIG RED"
    :credit       "Render 2026"}])

(defnc works-section
  [{:keys [id]}]
  (let [ref (hooks/use-ref "works-ref")
        [_visited? visible?] (use-intersection-observer ref {:threshold 0.05})]
    (d/div {:id id :ref ref}
           ($ section-header {:eyebrow "selected works" :title "The Work"}
              (d/div {:class "mt-6 relative pinstripe-bold"}
                     ($ lazy-image-gallery {:enabled? visible?
                                            :slides   slides}))))))
