(ns amp.pages.budget.why-support
  (:require
   [amp.ui.expandable-text :refer [expandable-text-area-2]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc preview
  [{:keys []}]
  (d/div {:class (s/cx s/body-lg "p-4")}
         (d/span {}
                 "To stand on the Biennale's global stage is not \"participation\" in an art event—it is ")
         (d/span {:class s/em-strong} "presence in the world's most influential cultural forum")
         (d/span {:class s/text-secondary}
                 ", where nations are read, remembered, and measured in real time. ")
         (d/span {}
                 "For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a ")
         (d/span {:class (s/cx s/weight-semibold s/em-italic s/text-primary)} "living intelligence")
         (d/span {:class s/text-secondary}
                 "—capable of producing contemporary vision at the highest level. ")))

(defnc details
  [{:keys []}]
  (d/div {:class (s/cx s/body-lg "p-4")}
         ;; Opening paragraph
         (d/span {}
                 "To stand on the Biennale's global stage is not \"participation\" in an art event—it is ")
         (d/span {:class s/em-strong} "presence in the world's most influential cultural forum")
         (d/span {:class s/text-secondary}
                 ", where nations are read, remembered, and measured in real time. ")
         (d/span {}
                 "For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a ")
         (d/span {:class (s/cx s/weight-semibold s/em-italic s/text-primary)} "living intelligence")
         (d/span {:class s/text-secondary}
                 "—capable of producing contemporary vision at the highest level. ")
         (d/span {:class s/text-secondary}
                 "This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest.")

         ;; What presence elevates
         (d/div {:class "mt-8 mb-4"}
                (d/span {:class (s/cx s/em-strong s/text-lg)}
                        "This is why being present matters—and what it elevates:"))

         (d/div {:class (s/cx s/text-secondary "space-y-5")}
                (d/p {:class ""}
                     (d/span {:class (s/cx s/em-bold s/em-italic)} "National dignity, made public: ")
                     "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics.")
                (d/p {:class ""}
                     (d/span {:class (s/cx s/em-bold s/em-italic)} "Soft power that compounds: ")
                     "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot.")
                (d/p {:class ""}
                     (d/span {:class (s/cx s/em-bold s/em-italic)} "Narrative control: ")
                     "If Armenia does not author its own image, others will—and they will simplify it.")
                (d/p {:class ""}
                     (d/span {:class (s/cx s/em-bold s/em-italic)} "A platform for future generations: ")
                     "A serious national presence signals to Armenian artists, students, and institutions that the world stage is not \"for others.\"")
                (d/p {:class ""}
                     (d/span {:class (s/cx s/em-bold s/em-italic)} "Diaspora cohesion: ")
                     "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud.")
                (d/p {:class ""}
                     (d/span {:class (s/cx s/em-bold s/em-italic)} "Institutional consequences: ")
                     "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."))

         ;; Opportunity cost paragraph
         (d/div {:class "block mt-8"}
                (d/span {:class s/em-strong} "The opportunity cost of not partaking is brutal and silent: ")
                (d/span {:class (s/cx s/weight-semibold s/em-italic s/text-primary)} "invisibility")
                (d/span {:class s/text-secondary}
                        ". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "))

         (d/span {:class (s/cx s/text-secondary "block mt-6")}
                 "That is the long-term gap: Armenia is not always \"where it should be\" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. ")

         (d/span {:class (s/cx s/text-secondary "block mt-6")}
                 "A donor is not \"buying\" a sculpture or an event; they are buying representation with consequences: an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable.")



         ;; Closing — cultural battle
         (d/span {:class "block mt-8"}
                 "And yes: ")
         (d/span {:class (s/cx s/weight-semibold s/em-italic s/text-primary)}
                 "the cultural battle must be won")
         (d/span {:class s/text-secondary}
                 "—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. ")

         (d/span {:class (s/cx s/body-closing "block mt-6")}
                 "Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching.")))

(defnc why-support
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:idx 9
                                    :section-hint subtitle
                                    :title title
                                    :expand-button-label "Read more"
                                    :preview-text preview
                                    :full-text details})))
