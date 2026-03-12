(ns amp.pages.artist.portrait
  "Hero / portrait section — full-width artist portrait with name,
   role eyebrow and pull-quote overlay."
  (:require
   [amp.ui.image-overlay :refer [lazy-image-with-overlay]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc portrait-section
  [{:keys [id]}]
  (let [ref (hooks/use-ref "portrait-ref")
        [_visited? visible?] (use-intersection-observer ref {:threshold 0.05})]
    (d/section
     {:id id :ref ref
      :class (s/cx s/section-pt s/section-pb)}

     ;; Full-width portrait
     (d/div {:class "px-4"}
            (d/div {:class "relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/9] overflow-hidden"}

                   ;; TODO: Replace with final high-res portrait
                   ($ lazy-image-with-overlay
                      {:img-src "https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg"
                       :fit     "crop"
                       :active? visible?})

                   ;; Name & role overlay — bottom-left
                   (d/div {:class "absolute bottom-0 left-0 right-0 p-6 sm:p-10
                                   bg-gradient-to-t from-black/70 to-transparent"}
                          (d/p {:class (s/cx s/eyebrow s/text-faint "mb-2")}
                               "The Artist")
                          (d/h1 {:class (s/cx s/heading-display "mb-2")}
                                "Zadik Zadikian")
                          (d/p {:class (s/cx s/person-role)}
                               "Sculptor \u00B7 Los Angeles, USA"))))

     ;; Pull-quote beneath portrait
     (d/div {:class "px-4 mt-10"}
            (d/blockquote
             {:class "border-l-2 border-white/20 dark:border-white/20 pl-6"}
             (d/p {:class (s/cx s/body-lg "italic")}
                  "\u201CIf you want to learn about something, become that thing and then study yourself.\u201D")
             (d/cite {:class (s/cx "block mt-3 not-italic" s/label-muted)}
                     "\u2014 Zadik Zadikian"))))))
