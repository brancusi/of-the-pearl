(ns amp.pages.blog.posts.blue-yellow-maquette
  "Blog post: Blue Yellow Blue Yellow — the full-scale maquette as prelude to Venice."
  (:require
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.ui.image-gallery :refer [lazy-image-gallery]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; ---------------------------------------------------------------------------
;; Gallery slides — CNC milling process + interactive 3D mockup
;; ---------------------------------------------------------------------------

(def ^:private gallery-slides
  [{:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/Screenshot%202026-02-27%20at%209.02.01%E2%80%AFAM.png"
    :aspect-ratio 1.77
    :caption      "CNC FOAM MILLING"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00117198.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — MILLED UNIT"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00116841.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — DETAIL"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00116751.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — CNC EDGE"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00116035.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — STACKING TEST"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00115488.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — ALIGNMENT"
    :credit       "Los Angeles 2026"}

   ;; Interactive 3D mockup — same scene data as mockups?piece=mockup-007
   {:type         :threejs
    :aspect-ratio 0.75
    :caption      "MOCKUP 007 — INTERACTIVE 3D"
    :credit       "Zadik Zadikian 2026"
    :camera       {:position [150 150 150]
                   :target   [0 50 0]}
    :scene-data   {:lighting [[:ambient-light {:intensity 0.7}]
                              [:directional-light {:cast-shadow true
                                                   :position    [-100 120 60]
                                                   :intensity   1.5}]]
                   :data [{:bounds [36 36 48]
                           :layers [[{:color "#eb0000" :align :tl :dims [4 4 6]}
                                     {:color "#eb0000" :align :tr :dims [4 4 6]}
                                     {:color "#eb0000" :align :bl :dims [4 4 6]}
                                     {:color "#eb0000" :align :br :dims [4 4 6]}]]}
                          {:layers [[{:color "#ff7979" :align :tl :dims [36 36 48]}]]}
                          {:layers [[{:color "#ffb1b1" :align :tl :dims [36 8 12]}]]}
                          {:layers [[{:color "#ff9f9f" :align :tl :dims [12 6 12]}]]}
                          {:layers [[{:color "#eb0000" :align :tl :dims [4 4 4]}]]}]}}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00091415.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — ASSEMBLY"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00088317.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — STRUCTURE"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00086751.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — PROFILE"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/photos/02-13-26/foam_00091886.jpg"
    :aspect-ratio 1.77
    :caption      "FOAM CORE — COMPLETED UNIT"
    :credit       "Los Angeles 2026"}])

;; ---------------------------------------------------------------------------
;; Section divider
;; ---------------------------------------------------------------------------

(defn- section-break []
  (d/div {:class "my-10 flex justify-center"}
         (d/span {:class (s/cx s/text-faint "text-xl tracking-[0.5em]")}
                 "⸻")))

;; ---------------------------------------------------------------------------
;; Post content component
;; ---------------------------------------------------------------------------

(defnc post-content
  "Body of the Blue Yellow Blue Yellow maquette post."
  [_props]
  (let [ref (hooks/use-ref nil)
        gallery-ref (hooks/use-ref nil)
        [_visited? visible?] (use-intersection-observer ref)
        [_gallery-visited? gallery-visible?] (use-intersection-observer gallery-ref)]
    (d/div {:class "space-y-6 pb-8"}

           ;; Subtitle
           (d/p {:class (s/cx s/font-display s/weight-medium s/text-muted
                              "text-lg sm:text-xl italic mb-2")}
                "The Full-Scale Maquette as Prelude to Venice")

           (d/p {:class s/body-lg}
                "In preparation for the Venice Biennale, "
                (d/span {:class s/em-strong} "Zadik Zadikian")
                " is developing a full-scale maquette of a new sculptural variation titled "
                (d/span {:class s/em-strong} "Blue Yellow Blue Yellow")
                ".")

           (d/p {:class s/body-base}
                "This is not a miniature study. It is a one-to-one rehearsal of structure, proportion, "
                "and chromatic rhythm\u2014an architectural test before the casting of plaster and the final "
                "realization of form within "
                (d/span {:class s/em-strong} "The Studio")
                ", the Armenian Pavilion\u2019s living atelier.")

           (d/p {:class s/body-base}
                "At its core, the work investigates reflection and repetition. A square side\u2014precise, "
                "disciplined, elemental\u2014is mirrored at each successive step upward along the chain of "
                "units. The geometry does not simply stack; it responds. Each level echoes the one beneath "
                "it, producing a visual cadence: blue, yellow, blue, yellow. Structure becomes rhythm. "
                "Form becomes sequence.")

           (d/p {:class (s/cx s/body-base s/em-italic)}
                "Like a musical phrase in a minor key, it advances through modulation rather than spectacle.")

           ;; Video
           (d/div {:ref ref :class "my-8"}
                  (d/div {:class "w-full aspect-[16/9]"}
                         ($ lazy-video {:playback-id  "ay2rRkV3PxHTy92Gfi00SibKfEDjDLqGqxmiTzbrz3sQ"
                                        :aspect-ratio 1.77
                                        :should-play? visible?
                                        :allow-audio? true})))

           (section-break)

           ;; CNC section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 "Precision as Foundation: CNC Milling the Foam Core")

           (d/p {:class s/body-base}
                "The maquette begins not with plaster, but with foam. Each unit is CNC-milled to exact "
                "dimensions, ensuring structural integrity and repeatability. Precision at this stage is critical.")

           (d/p {:class s/body-base}
                "The foam core will ultimately live inside the plaster shell, reducing weight while "
                "maintaining mass and stability\u2014an approach central to "
                (d/span {:class s/em-strong} "The Studio\u2019s")
                " material language.")

           (d/p {:class s/body-base}
                "This method allows the sculptures to appear monumental while remaining "
                "maneuverable\u2014an essential condition for a Pavilion that will assemble, disassemble, "
                "and reassemble structures continuously over seven months.")

           (d/p {:class (s/cx s/body-base s/em-strong)}
                "Repetition demands accuracy. Without mathematical rigor, rhythm collapses.")

           ;; Image gallery — CNC process photos + interactive 3D mockup
           (d/div {:ref gallery-ref
                   :class "my-8 relative pinstripe-bold"}
                  ($ lazy-image-gallery {:enabled? gallery-visible?
                                         :slides   gallery-slides}))

           (section-break)

           ;; Color section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 "Color as Incarnation")

           (d/p {:class s/body-base}
                "The next phase will flesh out the chromatic body of the work. Blue and yellow are not "
                "surface decoration; they are structural forces.")

           (d/p {:class s/body-base}
                "In Zadikian\u2019s practice, pigment is conceived as something incarnated within material "
                "rather than applied externally. Even in this maquette stage, color testing is essential. "
                "Saturation, edge clarity, and the dialogue between planes must be resolved before casting begins.")

           (d/div {:class "my-6 space-y-1"}
                  (d/p {:class s/body-base}
                       "Blue carries depth and receding space.")
                  (d/p {:class s/body-base}
                       "Yellow advances\u2014radiant, assertive, luminous."))

           (d/p {:class s/body-base}
                "Together, they generate tension. The repetition of the pair stabilizes that tension into pattern.")

           (section-break)

           ;; Laboratory section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 "The Maquette as Laboratory")

           (d/p {:class s/body-base}
                "For decades, Zadikian\u2019s work has operated at the intersection of Minimalist discipline "
                "and metaphysical resonance. As Carlo McCormick writes, his practice rises "
                (d/span {:class s/em-italic}
                        "\u201Clike a visual song\u2026 to that which remains immutable in the seas of change.\u201D"))

           (d/p {:class s/body-base}
                "The full-scale maquette is part of that discipline. It is a laboratory of proportion, "
                "a site where reflection, stacking logic, and chromatic sequencing are tested under real "
                "conditions. Nothing is simulated. Every edge matters. Every angle carries consequence.")

           (d/p {:class s/body-base}
                "Only after this stage will full plaster casting begin.")

           (section-break)

           ;; Toward Venice section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 "Toward Venice")

           (d/p {:class s/body-base}
                "This work will eventually enter the ecosystem of "
                (d/span {:class s/em-strong} "The Studio")
                "\u2014a space conceived as an active site of fabrication, touch, arrangement, "
                "and re-arrangement.")

           (d/p {:class s/body-base}
                "There, units will not remain fixed. They will shift, recombine, and evolve over time. "
                "The square reflected upward in "
                (d/span {:class s/em-strong} "Blue Yellow Blue Yellow")
                " anticipates that larger logic: continuity through repetition, variation through structure.")

           (d/div {:class "my-8 space-y-1"}
                  (d/p {:class s/body-base} "The maquette is preparation.")
                  (d/p {:class s/body-base} "The casting will be commitment.")
                  (d/p {:class s/body-base} "The Pavilion will be transformation."))

           (d/p {:class (s/cx s/body-closing)}
                (d/span {:class s/em-italic}
                        "In the discipline of repetition, change begins.")))))

;; ---------------------------------------------------------------------------
;; Post metadata
;; ---------------------------------------------------------------------------

(def post-meta
  {:slug "blue-yellow-maquette"
   :title "Blue Yellow Blue Yellow"
   :date "2026-02-14"
   :author "Armenian Pavilion Team"
   :summary "In preparation for the Venice Biennale, Zadik Zadikian is developing a full-scale maquette of a new sculptural variation\u2014an architectural test of structure, proportion, and chromatic rhythm."
   :cover-image "https://atd-722658831.imgix.net/photos/02-13-26/foam_00117198.jpg"
   :component post-content})
