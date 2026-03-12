(ns amp.pages.artist.biography
  "Expandable biography section — preview paragraph + full bio on expand."
  (:require
   [amp.ui.expandable-text :refer [expandable-text-area-light]]
   [amp.ui.written-by :refer [written-by]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; ── Preview (visible before expand) ────────────────────────────────────────

(defnc preview
  []
  (d/div {:class "px-4"}
         ($ written-by {:author "Carlo McCormick" :class "mb-6"})

         (d/p {:class (s/cx s/body-base "mb-6")}
              "Born in Yerevan, "
              (d/span {:class s/em-strong} "Zadik Zadikian")
              "\u2019s life began in extremes. At nineteen\u2014armed only with conviction\u2014he "
              "escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. "
              "He arrived in America with nothing but the instincts that had guided him since "
              "childhood: to build, to shape matter, to seek form through discipline and "
              "elemental materials.")))

;; ── Full text (visible after expand) ─────────────────────────────────────────────

(defnc details
  []
  (d/div {:class "px-4"}
         ($ written-by {:author "Carlo McCormick" :class "mb-6"})

         ;; Paragraph 1 — origins & escape
         (d/p {:class (s/cx s/body-base "mb-6")}
              "Born in Yerevan, "
              (d/span {:class s/em-strong} "Zadik Zadikian")
              "\u2019s life began in extremes. At nineteen\u2014armed only with conviction\u2014he "
              "escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. "
              "He arrived in America with nothing but the instincts that had guided him since "
              "childhood: to build, to shape matter, to seek form through discipline and "
              "elemental materials.")

         ;; Paragraph 2 — Bufano & Serra
         (d/p {:class (s/cx s/body-base "mb-6")}
              "In San Francisco, he apprenticed with sculptor "
              (d/span {:class s/em-strong} "Beniamino Bufano")
              ", absorbing a lifelong sense of scale, color, and the physical intelligence of "
              "large-form making. Drawn to the heat and velocity of New York, he moved east in "
              "1974 and quickly found himself inside the crucible of the Minimalist movement, "
              "assisting "
              (d/span {:class s/em-strong} "Richard Serra")
              " on the monumental black oil-stick wall drawings\u2014one of which Serra titled "
              (d/em "Zadikian")
              ".")

         ;; Paragraph 3 — New York & studio
         (d/p {:class (s/cx s/body-base "mb-6")}
              "This immersion into New York\u2019s severity and possibility forged an artist who has "
              "always moved toward intensity: toward weight, clarity, touch. The son of a builder, "
              "he grew up with materials\u2014clay, plaster, stone, the raw grammar of structure. In "
              "New York, these instincts crystallized. In 1976 he transformed his "
              "ten-thousand-square-foot home and studio into a continuous field of industrial "
              "gold, an act of totalizing vision that set the tone for everything that followed.")

         ;; Paragraph 4 — 1,000 Bricks & artistic language
         (d/p {:class (s/cx s/body-base "mb-6")}
              "His 1978 project "
              (d/em "1,000 Bricks Gilded in 24-Karat Gold Leaf")
              " marked the emergence of his now-signature language: unit-based sculptural "
              "forms\u2014bricklike, essential, endlessly recombinable\u2014through which gold becomes "
              "not decoration but ontology. For decades, Zadikian has pushed this vocabulary to "
              "distill the elemental. His works hover between the geological and the luminous, "
              "between ancient memory and future speculation, always returning to the fundamental "
              "question: What is born when matter is reduced to its clearest form?")

         ;; Paragraph 5 — closing
         (d/p {:class (s/cx s/body-base)}
              "Zadikian\u2019s practice is defined by extremes\u2014of material, of discipline, of "
              "vision\u2014and by a lifelong commitment to the structures that underlie both art "
              "and the world itself. His is a studio forged through touch, labor, repetition, "
              "and the pursuit of a form so essential it borders on the eternal.")))

;; ── Public component ──────────────────────────────────────────────────────

(defnc biography-section
  [{:keys [id]}]
  (d/div {:id id}
         ($ expandable-text-area-light
            {:section-hint  "biography"
             :title         "The Artist"
             :expand-button-label "Read full biography"
             :preview-text  preview
             :full-text     details})))
