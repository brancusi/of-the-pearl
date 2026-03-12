(ns amp.pages.landing.press-release
  (:require
   [amp.ui.expandable-text :refer [expandable-text-area-2]]
   [amp.ui.written-by :refer [written-by]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc header-block
  []
  (let [label-class s/label]
    (d/div {:class "mb-10 text-sm"}
           ;; Title
           (d/p {:class (s/cx s/font-display s/text-xl s/weight-medium "leading-snug mb-1" s/text-primary)}
                "Pavilion of the Republic of Armenia at the 61st International Art Exhibition La Biennale di Venezia to be represented by Zadik Zadikian")

           ;; Exhibition title
           (d/p {:class "mt-6 mb-6"}
                (d/span {:class (s/cx s/font-display s/text-lg s/weight-medium s/em-italic s/text-primary)}
                        "Zadik Zadikian: The Studio"))

           ;; Structured info — stacked on mobile, side-by-side on sm+
           (d/div {:class (s/cx s/info-grid)}

                  ;; Participation
                  (d/div {:class s/info-row}
                         (d/span {:class label-class} "Participation")
                         (d/span {:class s/text-secondary} "National Participation of the Republic of Armenia"))

                  ;; Curated by
                  (d/div {:class s/info-row}
                         (d/span {:class label-class} "Curated by")
                         (d/span {:class s/text-secondary}
                                 (d/span {:class s/weight-semibold} "Tony Shafrazi")
                                 " & "
                                 (d/span {:class s/weight-semibold} "Tina Chakarian")))

                  ;; Commissioner
                  (d/div {:class s/info-row}
                         (d/span {:class label-class} "Commissioner")
                         (d/span {:class (s/cx s/weight-semibold s/text-secondary)} "Svetlana Sahakyan"))

                  ;; Press contact
                  (d/div {:class s/info-row}
                         (d/span {:class label-class} "Press contact")
                         (d/a {:href "mailto:pressoffice@armenianpavilion2026.org"
                               :class (s/cx s/link-subtle s/text-secondary "break-all")}
                              "pressoffice@armenianpavilion2026.org"))

                  ;; Website
                  (d/div {:class s/info-row}
                         (d/span {:class label-class} "Web")
                         (d/a {:href "https://armenianpavilion2026.org"
                               :class (s/cx s/link-subtle s/text-secondary)
                               :target "_blank"}
                              "armenianpavilion2026.org"))))))

(defnc preview
  [{:keys []}]
  (d/div {:class "px-4"}
         ($ written-by {:author "Alejandro Jassan" :class "mb-6"})

         ;; Header block
         ($ header-block)))

(defnc details
  [{:keys []}]
  (d/div {:class "px-4"}
         ($ written-by {:author "Alejandro Jassan" :class "mb-6"})

         ($ header-block)

         ;; Paragraph 1
         (d/p {:class (s/cx s/body-base "mb-6")}
              (d/span {:class s/em-italic} "Venice, Italy — ")
              "The Republic of Armenia presents "
              (d/span {:class s/em-strong} "The Studio")
              ", a solo project by artist "
              (d/span {:class s/em-bold} "Zadik Zadikian")
              ", for the Pavilion of the Republic of Armenia at the 61st International Art Exhibition \u2013 La Biennale di Venezia. The project is co-curated by legendary art dealer "
              (d/span {:class s/em-bold} "Tony Shafrazi")
              ", whose decades-long relationship and close collaboration with Zadikian shape the conceptual framework of the Pavilion, alongside Boston-based curator and cultural strategist "
              (d/span {:class s/em-bold} "Tina Chakarian")
              ", who has played a central role in advancing Armenia\u2019s presence at La Biennale di Venezia since 2015 as Commissioner and Development Director of the Armenian Pavilion. On view from May 9 through November 22, 2026, the Pavilion reimagines the exhibition space as a living studio\u2014an active site of production, transformation, and renewal that unfolds over the full duration of La Biennale di Venezia.")

         ;; Paragraph 2 — Shafrazi + Zadikian history
         (d/p {:class (s/cx s/body-base "mb-6")}
              "This presentation marks the continuation of Shafrazi and Zadikian\u2019s decades-long collaboration, which began in the late 1970s with Zadikian\u2019s first solo exhibition in Tehran at Shafrazi\u2019s then-new eponymous gallery, just weeks before the fall of Iran\u2019s ruling shah and on the cusp of the profound political and social transformations that would follow. At that time, a young Zadikian observed laborers carefully stacking clay bricks to dry in the open air at a facility nearly 200 miles from Tehran. \u201CI was completely taken by the way they were making sculptures without knowing what they were doing,\u201D he recalls. Ever since, the brick has become a central material and conceptual anchor in his work, continuing to inform Zadikian\u2019s sustained engagement with repetition, labor, and the transformation of basic forms into complex structures.")

         ;; Paragraph 3 — Studio in Venice
         (d/p {:class (s/cx s/body-base "mb-6")}
              "In Venice, Zadikian will operate a fully functioning studio, in which objects—principally plaster bricks of varying scales and pigments—are formed, cast, and assembled by the artist and his studio assistants over the course of the exhibition. Each composite form is built by stacking multiple individual bricks of different sizes that remain separate and movable, allowing the arrangement to change and develop over time. This emphasis on repetition and physical presence places the project in dialogue with early modernist and post-Minimalist sculpture, recalling the work of "
              (d/span {:class s/em-bold} "Richard Serra")
              ", "
              (d/span {:class s/em-bold} "Sol LeWitt")
              ", and "
              (d/span {:class s/em-bold} "Carl Andre")
              ", and reflecting a shared inquiry by both Zadikian and Shafrazi into form and the experience of space.")

         ;; Paragraph 4 — Concept / factory / McCormack quote
         (d/p {:class (s/cx s/body-base "mb-6")}
              "Aptly titled "
              (d/span {:class s/em-italic} "The Studio")
              ", the installation invites visitors to witness and engage directly with Zadikian’s process and materials, allowing the work to unfold in real time. By making production visible, the project challenges the often ritualized and private conventions of the artist’s studio, reframing it instead as a site of openness, exchange, and collective labor. In this way, "
              (d/span {:class s/em-italic} "The Studio")
              " recalls the legacy of Pop Art’s factories and ateliers—most notably Andy Warhol’s Factory—while emphasizing sustained, hands-on production over spectacle. As critic "
              (d/span {:class s/em-bold} "Carlo McCormack")
              " observes, “"
              (d/span {:class s/em-italic} "The Studio")
              ", for Zadikian, is workroom, factory, and laboratory at once\u2014a locus of constant production, invention, and reinvention, a place of infinite possibility where art is not simply what is made; it is the study of its creation, and what we make of it.\u201D")

         ;; Paragraph 5 — Chakarian
         (d/p {:class (s/cx s/body-base "mb-6")}
              "Furthermore, Chakarian\u2019s longstanding engagement with Armenia\u2019s cultural infrastructure\u2014both within the Republic and across its global diaspora\u2014inflects the Pavilion with a broader commitment to visibility, continuity, and international dialogue. Since 2015, as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, she has played a central role in shaping Armenia\u2019s sustained presence on this global stage, overseeing curatorial development, institutional partnerships, and strategic fundraising efforts. Her work bridges generations of artists working in Yerevan and abroad, positioning Armenian contemporary art within an expansive transnational discourse while honoring its distinct historical and cultural narratives.")

         ;; Paragraph 6 — Arsenale / production / McCormack quote
         (d/p {:class (s/cx s/body-base "mb-6")}
              (d/span {:class s/em-italic} "The Studio")
              " will be located within the Arsenale Militare, a vast complex of shipyards and armories that for over 900 years served as the heart of Venetian naval power. Over the course of La Biennale di Venezia, hundreds of plaster bricks will be cast, stacked, disassembled, and reassembled within the Pavilion, allowing the installation to evolve continuously through ongoing production. Here, process is neither theatricalized nor concealed. As McCormack states, \u201Cthe act of making is not staged, but neither is it hidden.\u201D")

         ;; Paragraph 7 — Brooklyn Museum
         (d/p {:class (s/cx s/body-base "mb-6")}
              "The Venice presentation follows Zadikian\u2019s recent inclusion in a major group exhibition at the "
              (d/span {:class s/em-bold} "Brooklyn Museum")
              ", "
              (d/span {:class s/em-italic} "Solid Gold")
              " (November 16, 2024\u2013July 6, 2025), where his work "
              (d/span {:class s/em-italic} "Path to Nine")
              " (2024) took the form of a luminous wall composed of 999 gold leaf\u2013covered bars, extending his long-standing engagement with modularity, material transformation, and symbolic value.")

         ;; About Zadik Zadikian
         (d/div {:class "mb-6 mt-8"}
                (d/p {:class s/heading-section} "About Zadik Zadikian")
                (d/p {:class (s/cx s/body-base "mt-2")}
                     "Zadik Zadikian (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works that challenge both the materials and ideologies of contemporary art. A daring escape from the Soviet Union in his youth marked the beginning of an extraordinary journey, from his training under "
                     (d/span {:class s/em-bold} "Benjamino Bufano")
                     " to his longstanding friendship with "
                     (d/span {:class s/em-bold} "Richard Serra")
                     ". Zadikian\u2019s work, particularly his exploration of gilded forms, has established him as one of the leading sculptors in the realm of contemporary alchemy. His pieces, often crafted from gold leaf, suggest a transcendence of time and place, pushing boundaries while creating worlds that seem to belong to another realm entirely."))

         ;; General information
         (d/div {:class "mb-6"}
                (d/p {:class (s/cx s/heading-section "mb-2")} "General information")
                (d/p {:class (s/cx s/body-base "mb-1")}
                     (d/span {:class s/em-bold} "Venue: ")
                     (d/a {:href "https://maps.app.goo.gl/aaFLEeWQZmVQNi7d9?g_st=ic"
                           :target "_blank"
                           :class (s/cx s/link-subtle s/text-secondary)}
                          "Case Nuove 2738/C, Castello, Venezia, Tesa 41, Arsenale Militare"))
                (d/p {:class (s/cx s/body-base "mb-1")}
                     (d/span {:class s/em-bold} "Dates: ")
                     "9 May \u2013 22 November 2026")
                (d/p {:class s/body-base}
                     (d/span {:class s/em-bold} "Press preview: ")
                     "6–8 May 2026"))))

(defnc footer
  [{:keys []}]
  (d/div {:class (s/cx "p-4" s/body-base s/em-italic s/text-warning)}
         (d/span {:class "mt-6"}
                 "*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue\u2014a standard and widely accepted model for many non-permanent participating nations. "
                 "The selected site operates at a base rental cost of approximately ")

         (d/span {:class s/value-currency} "$145,600")

         (d/span
          ", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. "
          "Comparable venues just minutes away within the Arsenale or Giardini typically begin at ")

         (d/span {:class s/value-currency} "$450,000 or more")

         (d/span
          " in base rent alone\u2014often closer to \u20ac450,000+\u2014excluding construction, staffing, technical services, and operational expenses. "
          "In this context, the Pavilion\u2019s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources.")

         ;; Fundraising committee
         (d/span {:class (s/cx "block mt-6" s/text-danger "text-2xl")}
                 "To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed.")
         #_(d/span {:class (s/cx "block mt-6" "text-red-300")}
                   "To support the scale and international significance of this undertaking, "
                   "a dedicated fundraising committee has been formed to guide and advance the project\u2019s philanthropic efforts. ")

         (d/div {:class "mt-6"}
                (d/span {:class (s/cx s/weight-medium s/text-primary)}
                        "At present we are starting with a small committee including members ")

                (d/span {:class (s/cx s/weight-medium s/text-primary)}
                        "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, "
                        "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, ")

                (d/span {:class (s/cx s/weight-bold s/text-danger)}
                        " hopefully encouraging others more able to realize our goal."))))

(defnc press-release
  [{:keys [id idx subtitle title show-budget-footer?]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:idx idx
                                    :section-hint subtitle
                                    :title title
                                    :expand-button-label "Read full release"
                                    :preview-text preview
                                    :full-text details
                                    :footer-text (when show-budget-footer? footer)})))