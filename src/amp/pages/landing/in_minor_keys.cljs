(ns amp.pages.landing.in-minor-keys
  (:require
   [amp.ui.expandable-text :refer [expandable-text-area-2]]
   [amp.ui.image-overlay :refer [lazy-image-with-overlay]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; ── Blockquote helper ──────────────────────────────────────────────────────
(defnc pull-quote
  [{:keys [text attribution]}]
  (d/blockquote
   {:class "border-l-2 border-white/20 pl-6 my-8"}
   (d/p {:class (s/cx s/body-base "italic")} text)
   (d/cite {:class (s/cx "block mt-3 not-italic" s/label-muted)}
           (str "\u2014 " attribution))))

;; ── Curator card ───────────────────────────────────────────────────────────
(defnc curator-card
  [{:keys [visible?]}]
  (let [tag-bg "bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"
        tag-style {:boxDecorationBreak "clone"
                   :WebkitBoxDecorationBreak "clone"}]
    (d/div
     {:class "sm:flex sm:gap-8 sm:items-start mb-10"}

     ;; Portrait
     (d/div
      {:class "float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0
               w-24 aspect-square sm:w-40
               flex-shrink-0 rounded-sm overflow-hidden"}
      ($ lazy-image-with-overlay {:img-src "https://atd-722658831.imgix.net/portraits/koyo.png"
                                  :fit "crop"
                                  :aspect-ratio 1
                                  :active? visible?}))

     ;; Text
     (d/div
      {:class "sm:flex-1 sm:min-w-0"}
      (d/p {:class (s/cx s/person-name "mb-1")}
           (d/span {:class tag-bg :style tag-style} "Koyo Kouoh"))
      (d/p {:class (s/cx s/person-role "mb-3")}
           "Curator, 61st Biennale Arte")
      (d/p {:class (s/cx s/body-base)}
           "The curatorial statement for the 61st International Art Exhibition \u2014 La Biennale di Venezia \u2014 invites us to listen to the minor keys: the quiet tones, the lower frequencies, the persistent signals of earth and life.")
      (d/div {:class "clear-both sm:hidden"})))))

;; ── Preview ────────────────────────────────────────────────────────────────
(defnc preview
  []
  (let [ref (hooks/use-ref "imk-preview-ref")
        [_visited? visible?] (use-intersection-observer ref {:threshold 0.05})]
    (d/div {:class "px-4" :ref ref}
           ($ curator-card {:visible? visible?})

           ;; Opening meditation
           (d/div {:class "text-center my-10 space-y-1"}
                  (d/p {:class (s/cx s/body-base "italic")} "[Take a deep breath]")
                  (d/p {:class (s/cx s/body-base "italic")} "[Exhale]")
                  (d/p {:class (s/cx s/body-base "italic")} "[Drop your shoulders]")
                  (d/p {:class (s/cx s/body-base "italic")} "[Close your eyes]"))

           (d/p {:class (s/cx s/body-base "mb-6")}
                "This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."))))

;; ── Full text ──────────────────────────────────────────────────────────────
(defnc details
  []
  (let [ref (hooks/use-ref "imk-details-ref")
        [_visited? visible?] (use-intersection-observer ref {:threshold 0.05})]
    (d/div {:class "px-4" :ref ref}
           ($ curator-card {:visible? visible?})

           ;; Opening meditation
           (d/div {:class "text-center my-10 space-y-1"}
                  (d/p {:class (s/cx s/body-base "italic")} "[Take a deep breath]")
                  (d/p {:class (s/cx s/body-base "italic")} "[Exhale]")
                  (d/p {:class (s/cx s/body-base "italic")} "[Drop your shoulders]")
                  (d/p {:class (s/cx s/body-base "italic")} "[Close your eyes]"))

           (d/p {:class (s/cx s/body-base "mb-6")}
                "This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds.")

           ($ pull-quote
              {:text "There is a reason, after all, that some people wish to colonize the moon, and others dance before it as an ancient friend."
               :attribution "James Baldwin, 1972"})

           ;; Minor keys — definition
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The minor key, in music, alludes both to the structure of a song and to its emotional effects. It is a rich idea, so rich that it quickly overflows its technical definition and spills with metaphor. It summons moods, the blues, the call-and-response, the morna, the second line, the lament, the allegory, the whisper.")

           ;; Minor keys — what they refuse
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The minor keys refuse orchestral bombast and goose-step military marches and come alive in the quiet tones, the lower frequencies, the hums, the consolations of poetry, all portals of improvisation to the elsewhere and the otherwise. The minor keys ask for listening that calls on the emotions and sustains them in return.")

           ;; Minor keys — islands & oases
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The minor keys are also the small islands, worlds amid oceans with distinct and endlessly rich ecosystems, social lives that are articulated, for better and worse, within much larger political forms and ecological stakes. Here, the evocation of the key and the island extends to an archipelago of oases: gardens, courtyards, compounds, lofts, dance floors \u2014 the other worlds that artists make, the intimate and convivial universes that refresh and sustain even in terrible times; indeed, especially in terrible times.")

           ($ pull-quote
              {:text "Look at the creole garden, you put all species on such a little lick of land: avocados, lemons, yams, sugarcanes\u2026 plus thirty or forty other species on this bit of land that doesn\u2019t go more than fifty feet up the side of the hill, they protect each other. In the great Circle, everything is in everything else."
               :attribution "\u00C9douard Glissant, 1993"})

           ;; Cues for an exhibition
           (d/p {:class (s/cx s/body-base "mb-6")}
                "These are the cues for an exhibition; an exhibition tuned in to the minor keys; an exhibition that invites listening to the persistent signals of earth and life, connecting to soul frequencies. If, in music, the minor keys are often associated with strangeness, melancholy and sorrow, here their joy, solace, hope, and transcendence manifest as well.")

           ;; Grounding & polyphony
           (d/p {:class (s/cx s/body-base "mb-6")}
                "In the minor keys, sound and sensation are grounding, they hold the cadences, melodies, and silences of resonant worlds that gather and create together a polyphonous assembly of art, convening and communing in convivial collectivity, beaming across the void of alienation and the crackle of conflict.")

           ;; Biennale statement
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The 61st edition of the Biennale Arte is grounded in a deep belief in artists as the vital interpreters of the social and psychic condition and catalysts of new relations and possibilities.")

           ;; Composition
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The exhibition\u2019s composition is formed by artistic practices that open portals, that refresh and nourish, that prompt relation and relationship, that advance concept and form through networks and schools \u2014 understood freely and informally.")

           ;; Free-jazz ensemble
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The intended effect scrambles cohesion and dissonance in the manner of a free-jazz ensemble, or perhaps, at the scale of the Biennale Arte, a festival of ensembles with a common premise: that poetics liberate and people make beauty together.")

           ;; Sensory experience
           (d/p {:class (s/cx s/body-base "mb-6")}
                "Through relation, sharing, and transcendence, the artists and practices that operate in this spirit, like jazz, across methods, scales, senses and forms, propose to visitors an exhibitional experience that is more sensory than didactic, renewing rather than exhausting, and fortifying for the work ahead.")

           ;; Procession
           (d/p {:class (s/cx s/body-base "mb-6")}
                "Through a visual and meditative procession, the exhibition prompts all senses to interconnect and meander from one universe to the other, rendering visible the possibilities that reside in the in-between spaces and beyond the portals.")

           ($ pull-quote
              {:text "\u2026there is no choice but to tune in like jazzmen to these imperative mutations. The jazzman constantly meditates on the unpredictable, stands within it according to the laws of polyrhythm, and improvises breathtaking moments. We small-island Caribbeans are not ready, but we have this resource. The change will have to be so profound that we will no doubt have to add to the knowledge of jazz, the old totemisms, animisms, analogisms, and other metaphysics too summarily discarded. These old-world poems are already precious scores."
               :attribution "Patrick Chamoiseau, 2023"})

           ;; Radical reconnection
           (d/p {:class (s/cx s/body-base "mb-6")}
                "In this spirit, the international exhibition of the 61st Biennale Arte intends neither a litany of commentary on world events, nor an inattention or escape from compounding and continuous intersecting crises. Rather, it proposes a radical reconnection with art\u2019s natural habitat and role in society: that is the emotional, the visual, the sensory, the affective, the subjective.")

           ;; Exhilarating journeys
           (d/p {:class (s/cx s/body-base "mb-6")}
                "In Minor Keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect, and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity.")

           ;; Civilizing mission critique
           (d/p {:class (s/cx s/body-base "mb-6")}
                "After all, it is clear by now that the enduring time of capital and empire maligned local, Indigenous and terrestrial knowledges as chimeric, and dismissed co-constitutive artistic practices as artisanal, intended for decoration or devotional rituals.")

           ;; Refusing spectacle
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The \u2018civilizing mission\u2019 flattens all with condescending contempt, and in the contemporary era entire societies and ecologies are regarded as collateral damage in the headstrong pursuit of growth supported by ruthlessness and greed. In refusing the spectacle of horror, the time has come to listen to the minor keys, to tune in sotto voce to the whispers, to the lower frequencies; to find the oases, the islands, where the dignity of all living beings is safeguarded.")

           ;; Radical shifts
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The exhibition posits that such radical shifts are taking place \u2014 indeed, have been underway all along \u2014 in the minor keys, and the artists, poets, performers, and filmmakers whom the exhibition will convene are grounded in their commitments to realizing them. Artists are channels to and between the minor keys and listening to, rather than speaking for them is at the core of the curatorial conceit.")

           ;; Collective score
           (d/p {:class (s/cx s/body-base "mb-6")}
                "The exhibition In Minor Keys stands as a collective score composed together with artists who have built universes of imagination. Artists who work at the boundaries of form, and whose practices can be thought of as intricate melodies to be heard both collectively and on their own terms. These are artists whose practices seamlessly bleed into society.")

           ;; Artists who accommodate daily life
           (d/p {:class (s/cx s/body-base "mb-6")}
                "Artists who accommodate daily life as part of a logical and aesthetically consistent relation of parts. Artists who are exceedingly generous and hospitable to life.")

           ($ pull-quote
              {:text "In our myths, in our songs, that\u2019s where the seeds are. It is not possible to constantly hone on the crisis. You have to have the love and you have to have the magic, that\u2019s also life."
               :attribution "Toni Morrison, 1977"})

           ;; ── THE STUDIO connection ──────────────────────────────────
           (d/div {:class "mt-12 mb-6 border-t border-white/10 pt-10"}
                  (d/h3 {:class (s/cx s/heading-section "mb-6")}
                        "The Studio \u2014 In Minor Keys")

                  (d/p {:class (s/cx s/body-base "mb-6")}
                       "Zadik Zadikian\u2019s "
                       (d/span {:class s/em-italic} "The Studio")
                       " is a practice tuned precisely to these frequencies. In a pavilion where the brick \u2014 the most elementary building unit, unchanged for eleven millennia \u2014 is cast, stacked, disassembled, and reassembled over six months, simplicity becomes the method and the meaning.")

                  (d/p {:class (s/cx s/body-base "mb-6")}
                       (d/span {:class s/em-bold} "Doing the work.")
                       " The minor keys ask for sustained attention, not spectacle. In "
                       (d/span {:class s/em-italic} "The Studio")
                       ", the act of making is neither performed nor concealed. Plaster is mixed, forms are poured, bricks emerge. Day after day, the labor itself is the statement \u2014 a refusal of the accelerated and the disposable in favor of the deliberate and the enduring.")

                  (d/p {:class (s/cx s/body-base "mb-6")}
                       (d/span {:class s/em-bold} "Making simple things.")
                       " Each brick is humble. It carries no narrative, bears no symbol. Like the creole garden where thirty species protect each other on a lick of land, the individual unit is modest. Its power lives not in what it represents but in what it "
                       (d/span {:class s/em-italic} "is")
                       " \u2014 material presence, weight, color, surface.")

                  (d/p {:class (s/cx s/body-base "mb-6")}
                       (d/span {:class s/em-bold} "Higher-order structures from simplicity.")
                       " When stacked, these bricks become something else entirely. Composite forms emerge \u2014 not designed from above but discovered through assembly. The whole exceeds its parts, not through complexity of component, but through the patient, improvisational logic of combination. Like polyrhythm in jazz, coherence arises from the interplay of simple, repeating elements.")

                  (d/p {:class (s/cx s/body-base "mb-6")}
                       (d/span {:class s/em-bold} "Simplicity is not ease.")
                       " To cast a perfect brick, to find the right pigment, to know which form belongs beside another \u2014 this is the discipline beneath the quiet surface. The minor keys sound gentle, but they demand the deepest listening. The studio is where that discipline lives: not in reaching for the obvious, but in reaching for the precise.")

                  (d/p {:class (s/cx s/body-base "mb-6")}
                       (d/span {:class s/em-bold} "Reaching for the right tool.")
                       " Zadikian does not reach for what is always close at hand. He reaches for what is right. The plaster, the mold, the trowel \u2014 each chosen not for convenience but for fidelity to the form. In this way, "
                       (d/span {:class s/em-italic} "The Studio")
                       " enacts the curatorial premise of In Minor Keys: that beauty is made together, through relation, through the handmade, through the refusal to shortcut the work that matters.")))))

;; ── Public component ───────────────────────────────────────────────────────
(defnc in-minor-keys
  [{:keys [id idx subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:idx idx
                                    :section-hint subtitle
                                    :title title
                                    :expand-button-label "Read full statement"
                                    :preview-text preview
                                    :full-text details})))
