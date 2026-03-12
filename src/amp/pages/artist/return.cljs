(ns amp.pages.artist.return
  "Return to Armenia — the story of Zadikian's reconnection with Armenia
   and the significance of representing the country at Venice."
  (:require
   [amp.ui.section-header :refer [section-header]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; TODO: Replace stub text with final narrative

(defnc return-section
  [{:keys [id]}]
  (d/div {:id id}
         ($ section-header {:eyebrow "full circle" :title "Return to Armenia"}
            (d/div {:class "mt-6 px-4"}
                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "After decades in the United States, "
                        (d/span {:class s/em-strong} "Zadik Zadikian")
                        " began a gradual return\u2014not only to the country he had fled, "
                        "but to the questions of identity, belonging, and cultural memory "
                        "that had shaped his work from the very beginning.")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "Armenia in the post-Soviet era was a country in transformation. "
                        "The independence of 1991 had opened new possibilities but also "
                        "revealed old wounds. For Zadikian, returning was not a simple "
                        "homecoming; it was an encounter with a nation remaking itself "
                        "from the same elemental materials\u2014stone, earth, will\u2014that "
                        "he had been working with in his studio for half a century.")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "The invitation to represent "
                        (d/span {:class s/em-strong} "Armenia at the 61st Venice Biennale")
                        " carries a particular resonance. Venice and Armenia share a deep "
                        "historical connection: the island of "
                        (d/span {:class s/em-strong} "San Lazzaro degli Armeni")
                        " has housed an Armenian monastery since 1717, preserving manuscripts, "
                        "language, and culture through centuries of upheaval. To bring Armenian "
                        "art to the Biennale is to continue a conversation that has been "
                        "unfolding in this lagoon for over three hundred years.")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "For Zadikian, the Biennale is not a stage for national spectacle "
                        "but a place where the quiet persistence of making\u2014the "
                        (d/span {:class s/em-strong} "studio as sanctuary")
                        "\u2014can speak across borders. The pavilion will operate as a "
                        "living workshop, echoing the Armenian tradition of the "
                        (d/span {:class s/em-italic} "arvestanots")
                        " (workshop), where art is inseparable from the daily labor of its creation.")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "In representing Armenia at Venice, Zadikian closes a circle that "
                        "began with his escape. The young man who left a culture behind in "
                        "order to make art freely now returns that art to the world stage "
                        "under the flag of the nation he never stopped carrying with him.")

                   ;; Closing aphorism
                   (d/p {:class (s/cx s/body-closing "mt-10")}
                        "\u201CThe block is the smallest homeland. Wherever you stack it, "
                        "you are building Armenia.\u201D")))))
