(ns amp.pages.artist.video
  "Video section — embedded artist speaking video."
  (:require
   [amp.ui.section-header :refer [section-header]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; TODO: Replace Mux playback ID with the artist-speaking video

(defnc video-section
  [{:keys [id]}]
  (let [ref (hooks/use-ref "artist-video-ref")
        [_visited? visible?] (use-intersection-observer ref {:end "bottom"})]
    (d/div {:id id :ref ref}
           ($ section-header {:eyebrow "in his own words" :title "The Artist Speaks"}
              (d/div {:class "mt-6 px-4"}
                     (d/p {:class (s/cx s/body-base "mb-8")}
                          "Hear "
                          (d/span {:class s/em-strong} "Zadik Zadikian")
                          " speak about his practice, his relationship with material, and "
                          "the significance of representing "
                          (d/span {:class s/em-strong} "Armenia")
                          " at the 61st Venice Biennale.")

                     ;; Video player — 16:9 aspect ratio
                     ;; TODO: Replace stub playback ID with the final artist interview
                     (d/div {:class "w-full aspect-[16/9]"}
                            ($ lazy-video {:playback-id  "ay2rRkV3PxHTy92Gfi00SibKfEDjDLqGqxmiTzbrz3sQ"
                                           :aspect-ratio 1.77
                                           :should-play? visible?
                                           :allow-audio? true})))))))
