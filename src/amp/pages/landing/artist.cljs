(ns amp.pages.landing.artist
  (:require
   [amp.ui.image-overlay :refer [lazy-image-with-overlay]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc artist-section
  [{:keys [id title]}]
  (let [ref (hooks/use-ref "artist-ref")
        [_visited? visible?] (use-intersection-observer ref {:threshold 0.05})
        tag-bg "bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"
        tag-style {:boxDecorationBreak "clone"
                   :WebkitBoxDecorationBreak "clone"}]
    (d/section
     {:id id
      :ref ref
      :class (s/cx s/section-pt s/section-pb)}

     ;; Section heading — blocky teaser style
     (when title
       (d/h2 {:class (s/cx s/person-name-lg "mb-10 px-4")}
             (d/span {:class tag-bg :style tag-style} title)))

     (d/div {:class "px-4 sm:flex sm:gap-10 sm:items-start"}

            ;; Portrait — left column on desktop, full width on mobile
            (d/div
             {:class "w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0"}
             ($ lazy-image-with-overlay {:img-src "https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg"
                                         :fit "crop"
                                         :aspect-ratio 0.75
                                         :active? visible?}))

            ;; Text — right column on desktop
            (d/div
             {:class "sm:flex-1 sm:min-w-0"}

             ;; Name
             (d/p {:class (s/cx s/person-name-lg "mb-2")}
                  (d/span {:class tag-bg :style tag-style} "Zadik Zadikian"))

             ;; Role
             (d/p {:class (s/cx s/person-role "mb-6")} "Artist")

             ;; Quote
             (d/blockquote
              {:class "border-l-2 border-white/20 pl-6 my-8"}
              (d/p {:class (s/cx s/body-lg "italic")}
                   "\u201CIf you want to learn about something, become that thing and then study yourself.\u201D")
              (d/cite {:class (s/cx "block mt-3 not-italic" s/label-muted)}
                      "\u2014 Zadik Zadikian"))

             ;; Bio
             (d/p {:class (s/cx s/body-base "mb-6")}
                  "Born in Yerevan, Zadik Zadikian\u2019s life began in extremes. At nineteen\u2014armed only with conviction\u2014he escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. He arrived in America with nothing but the instincts that had guided him since childhood: to build, to shape matter, to seek form through discipline and elemental materials.")

             (d/p {:class (s/cx s/body-base "mb-6")}
                  "In San Francisco, he apprenticed with sculptor "
                  (d/span {:class s/em-bold} "Beniamino Bufano")
                  ", absorbing a lifelong sense of scale, color, and the physical intelligence of large-form making. Drawn to the heat and velocity of New York, he moved east in 1974 and quickly found himself inside the crucible of the Minimalist movement, assisting "
                  (d/span {:class s/em-bold} "Richard Serra")
                  " on the monumental black oil-stick wall drawings\u2014one of which Serra titled "
                  (d/em "Zadikian")
                  ".")

             (d/p {:class (s/cx s/body-base "mb-6")}
                  "This immersion into New York\u2019s severity and possibility forged an artist who has always moved toward intensity: toward weight, clarity, touch. The son of a builder, he grew up with materials\u2014clay, plaster, stone, the raw grammar of structure. In New York, these instincts crystallized. In 1976 he transformed his ten-thousand-square-foot home and studio into a continuous field of industrial gold, an act of totalizing vision that set the tone for everything that followed.")

             (d/p {:class (s/cx s/body-base "mb-6")}
                  "His 1978 project "
                  (d/em "1,000 Bricks Gilded in 24-Karat Gold Leaf")
                  " marked the emergence of his now-signature language: unit-based sculptural forms\u2014bricklike, essential, endlessly recombinable\u2014through which gold becomes not decoration but ontology. For decades, Zadikian has pushed this vocabulary to distill the elemental. His works hover between the geological and the luminous, between ancient memory and future speculation, always returning to the fundamental question: What is born when matter is reduced to its clearest form?")

             (d/p {:class (s/cx s/body-base)}
                  "Zadikian\u2019s practice is defined by extremes\u2014of material, of discipline, of vision\u2014and by a lifelong commitment to the structures that underlie both art and the world itself. His is a studio forged through touch, labor, repetition, and the pursuit of a form so essential it borders on the eternal."))))))
