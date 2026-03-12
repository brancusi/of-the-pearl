(ns amp.pages.artist.escape
  "The escape story — narrative section about Zadikian's journey out of
   the Soviet Union."
  (:require
   [amp.ui.section-header :refer [section-header]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc escape-section
  [{:keys [id]}]
  (d/div {:id id}
         ($ section-header {:eyebrow "origins" :title "The Escape"}
            (d/div {:class "mt-6 px-4"}
                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "At nineteen\u2014armed only with conviction\u2014"
                        (d/span {:class s/em-strong} "Zadik Zadikian")
                        " escaped Soviet Armenia by swimming across the "
                        (d/span {:class s/em-strong} "Arax River")
                        " under machine-gun fire. He arrived in America with nothing but "
                        "the instincts that had guided him since childhood: to build, to "
                        "shape matter, to seek form through discipline and elemental materials.")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "In "
                        (d/span {:class s/em-strong} "San Francisco")
                        ", he apprenticed with sculptor "
                        (d/span {:class s/em-strong} "Beniamino Bufano")
                        ", absorbing a lifelong sense of scale, color, and the physical "
                        "intelligence of large-form making. Drawn to the heat and velocity "
                        "of New York, he moved east in 1974 and quickly found himself inside "
                        "the crucible of the Minimalist movement, assisting "
                        (d/span {:class s/em-strong} "Richard Serra")
                        " on the monumental black oil-stick wall drawings\u2014one of which "
                        "Serra titled "
                        (d/em "Zadikian")
                        ".")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "The son of a builder, he grew up with materials\u2014clay, plaster, "
                        "stone, the raw grammar of structure. In New York, these instincts "
                        "crystallized. In 1976 he transformed his ten-thousand-square-foot "
                        "home and studio into a continuous field of industrial gold, an act "
                        "of totalizing vision that set the tone for everything that followed.")

                   (d/blockquote
                    {:class "border-l-2 border-white/20 dark:border-white/20 pl-6 my-8"}
                    (d/p {:class (s/cx s/body-base "italic")}
                         "\u201CThe block remembers two things\u2014the wall it was taken "
                         "from and the wall it will become.\u201D")
                    (d/cite {:class (s/cx "block mt-3 not-italic" s/label-muted)}
                            "\u2014 Zadik Zadikian"))))))
