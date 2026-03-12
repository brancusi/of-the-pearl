(ns amp.pages.venue.page
  "Visitor Guide — wayfinding, venue history, and space details.
   Full dedicated page for the Armenia Pavilion location at the
   Venice Biennale 2026."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.map :refer [mapbox-map]]
   [amp.ui.image-gallery :refer [lazy-image-gallery]]
   [amp.ui.button :refer [main-button]]
   [amp.ui.page-shell :refer [page-shell]]
   [amp.ui.section-header :refer [section-eyebrow]]
   [amp.ui.icons :refer [MapPinIcon]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; Venue-specific display heading — same treatment as s/heading-display but
;; with a smaller mobile base so multi-word titles ("The Outdoor Piece",
;; "Arsenale Militare") don't overflow narrow viewports.
(def venue-display
  (s/cx s/font-display s/weight-semibold s/uppercase-
        "leading-none text-3xl sm:text-5xl md:text-7xl"
        s/text-primary))

;; ── Shared eyebrow component ──────────────────────────────────────────────
;; Stacked layout: pink accent line → small uppercase text → pink accent line.
;; Compact enough to never wrap, even on narrow mobile screens.

;; Re-export from shared component for backward compat within this file
(def venue-eyebrow section-eyebrow)

;; ── Gallery slides ─────────────────────────────────────────────────────────

(def tesa-41-slides
  [{:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"
    :aspect-ratio 1.34
    :active? true}
   {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"
    :aspect-ratio 1.34
    :active? true}
   {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif"
    :aspect-ratio 1.34
    :active? true}])

(def crossing-slides
  [{:img-src "https://atd-722658831.imgix.net/big_red_walkway/5.jpg"
    :aspect-ratio 1.82
    :caption "Crossing at the Arsenale"
    :credit "Render 2026"}
   {:img-src "https://atd-722658831.imgix.net/big_red_walkway/1.jpg"
    :aspect-ratio 1.82
    :caption "Crossing at the Arsenale"
    :credit "Render 2026"}])

(defnc map-button
  []
  (d/div {:class "mb-10 flex justify-center sm:justify-start"}
         (d/a {:href mc/maps-url
               :target "_blank"
               :rel "noopener noreferrer"}
              ($ main-button
                 {:children (d/span {:class "flex items-center gap-3"}
                                    ($ MapPinIcon {:class "w-5 h-5"})
                                    "Navigate to the Pavilion")}))))

;; ── Hero ───────────────────────────────────────────────────────────────────

(defnc hero-section
  [{:keys []}]
  (let [is-desktop? (use-touch-enabled)]
    (d/div {:class "pt-10 pb-16 px-4"}
           ($ venue-eyebrow {:text "Venice \u00B7 Arsenale Militare"})

           ;; Display title
           (d/h1 {:class (s/cx venue-display "mb-8")}
                 "Visit the pavilion")

           ;; Navigate CTA — prominent, immediate action
           ($ map-button)

           (d/div {:class "mb-6"}
                  ($ mapbox-map
                     {:dev false
                      :interactive? is-desktop?
                      :initial-view mc/initial-view
                      :ant-paths    mc/ant-paths
                      :layers       mc/layers})
                  (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic s/text-muted "mt-4 px-4")}
                       "Walking path from the crossing to the pavilion \u2014 approximately 8 minutes"))


           ;; Display title
           (d/h1 {:class (s/cx venue-display "mb-8")}
                 "About")

           ;; Lead copy — enticing, sets the two-site narrative
           (d/div {:class "space-y-6"}
                  (d/p {:class s/body-lg}
                       "The Armenia Pavilion unfolds across "
                       (d/span {:class s/em-strong} "two sites")
                       " within the historic Arsenale of Venice\u2014a "
                       (d/span {:class s/em-strong} "5,000-square-foot interior studio")
                       " and a monumental "
                       (d/span {:class s/em-strong} "outdoor sculpture")
                       " at the gates of the complex.")

                  (d/p {:class s/body-base}
                       "Together they form a single constellation: "
                       (d/span {:class s/em-italic} "a place for study, for work, to create, share, and exhibit")
                       ". Over six months the Pavilion operates not as a static exhibition "
                       "but as a living workshop\u2014open, evolving, and built in real time.")))))
;; pt-10 (40px) visual breathing room — nav clearance handled by page-shell)

;; ── The Studio (Tesa 41) ──────────────────────────────────────────────────

(defnc studio-section [{:keys []}]
  (let [ref (hooks/use-ref "studio-ref")
        [_visited? is-visible?] (use-intersection-observer ref)]
    (d/div {:class s/section-pb}
           ;; Eyebrow + display heading
           (d/div {:class "px-4"}
                  ($ venue-eyebrow {:text "Interior \u00B7 Tesa 41"})
                  (d/h2 {:class (s/cx venue-display "mb-8")}
                        "The Studio"))

           ;; Prose
           (d/div {:class "px-4 space-y-6"}
                  (d/p {:class s/body-lg}
                       (d/span {:class s/em-strong} "Tesa 41")
                       " is the primary studio and exhibition space for the Armenia Pavilion\u2014"
                       (d/span {:class s/em-strong} "5,000 square feet")
                       " of expansive industrial volume within the Arsenale that functions as the "
                       (d/span {:class s/em-italic} "operational and conceptual heart")
                       " of the project.")

                  (d/p {:class s/body-base}
                       "Here, the Pavilion operates as a "
                       (d/span {:class s/em-strong} "working studio")
                       " rather than a static exhibition\u2014a place of continuous "
                       (d/span {:class s/em-strong} "making")
                       ", "
                       (d/span {:class s/em-strong} "stacking")
                       ", "
                       (d/span {:class s/em-strong} "dismantling")
                       ", and "
                       (d/span {:class s/em-strong} "rebuilding")
                       ". The interior volume allows the work to expand "
                       (d/span {:class s/em-strong} "horizontally")
                       " and "
                       (d/span {:class s/em-strong} "vertically")
                       ", accommodating both monumental arrangements and intimate moments of material attention.")

                  (d/p {:class s/body-base}
                       "Defined by scale, clarity, and architectural restraint, the space is built for sustained "
                       (d/span {:class s/em-strong} "fabrication")
                       ", "
                       (d/span {:class s/em-strong} "assembly")
                       ", and "
                       (d/span {:class s/em-strong} "reconfiguration")
                       " across the full duration of the Biennale.")

                  (d/p {:class (s/cx s/body-closing)}
                       "Tesa 41 anchors the Pavilion physically and philosophically\u2014establishing "
                       (d/span {:class s/em-italic} "the studio as the artwork itself")
                       "."))

           ;; Media \u2014 video + gallery
           (d/div {:class "w-full flex flex-col gap-4 mt-8" :ref ref}
                  (d/div {:class "w-full aspect-[16/9]"}
                         ($ lazy-video {:playback-id "KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk"
                                        :aspect-ratio 1.77
                                        :should-play? is-visible?
                                        :allow-audio? false}))

                  ($ lazy-image-gallery {:enabled? is-visible?
                                         :slides tesa-41-slides})))))

;; ── The Outdoor Piece ─────────────────────────────────────────────────────

(defnc outdoor-section [{:keys []}]
  (let [ref (hooks/use-ref "outdoor-ref")
        [_visited? is-visible?] (use-intersection-observer ref)]
    (d/div {:class s/section-pb}
           ;; Eyebrow + display heading
           (d/div {:class "px-4"}
                  ($ venue-eyebrow {:text "Exterior \u00B7 Arsenale Crossing"})
                  (d/h2 {:class (s/cx venue-display "mb-8")}
                        "The Outdoor Piece"))

           ;; Prose
           (d/div {:class "px-4 space-y-6"}
                  (d/p {:class s/body-lg}
                       "The outdoor artwork will be installed at the historic crossing grounds near the "
                       (d/span {:class s/em-strong} "Piraeus Lion")
                       ", one of the most recognized landmarks marking the approach to the Arsenale. "
                       "Positioned at a critical pedestrian junction, this site receives "
                       (d/span {:class s/em-strong} "exceptionally high foot traffic")
                       " throughout the six-month exhibition period.")

                  (d/p {:class s/body-base}
                       "Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. "
                       "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a "
                       (d/span {:class s/em-strong} "threshold")
                       " and a "
                       (d/span {:class s/em-strong} "directional marker")
                       "\u2014an early encounter that orients audiences toward the Pavilion.")

                  (d/p {:class (s/cx s/body-closing)}
                       "A freestanding, architecturally scaled form\u2014functioning simultaneously as "
                       (d/span {:class s/em-italic} "sculpture, signal, and prelude")
                       "."))

           ;; Media \u2014 image gallery
           (d/div {:class "w-full flex flex-col gap-4 mt-8" :ref ref}
                  ($ lazy-image-gallery {:enabled? is-visible?
                                         :slides crossing-slides})))))

;; ── About the Arsenale Militare ───────────────────────────────────────────

(defnc arsenale-section [{:keys []}]
  (d/div {:class s/section-pb}
         ;; Eyebrow + display heading
         (d/div {:class "px-4"}
                ($ venue-eyebrow {:text "History"})
                (d/h2 {:class (s/cx venue-display "mb-8")}
                      "Arsenale Militare"))

         ;; Prose
         (d/div {:class "px-4 space-y-6"}
                (d/p {:class s/body-lg}
                     "The "
                     (d/span {:class s/em-strong} "Arsenale di Venezia")
                     " is one of the largest and oldest shipbuilding complexes in the world. "
                     "Founded in the "
                     (d/span {:class s/em-strong} "12th century")
                     ", it served as the engine of Venetian naval power for over "
                     (d/span {:class s/em-strong} "seven centuries")
                     "\u2014at its peak employing 16,000 workers and capable of producing a fully outfitted warship in a single day.")

                (d/p {:class s/body-base}
                     "Spanning roughly "
                     (d/span {:class s/em-strong} "45 hectares")
                     " of covered halls, dry docks, and open yards, the Arsenale is a monumental index of "
                     (d/span {:class s/em-italic} "industrial ingenuity")
                     ". Its massive brick walls, timber-roofed warehouses ("
                     (d/span {:class s/em-italic} "tese")
                     "), and water-accessed basins represent a proto-industrial system that anticipated modern assembly-line production by centuries.")

                (d/p {:class s/body-base}
                     "Since "
                     (d/span {:class s/em-strong} "1980")
                     ", the Arsenale has served as a primary exhibition site for the "
                     (d/span {:class s/em-strong} "Venice Biennale")
                     "\u2014its raw, monumental spaces providing a counterpoint to the refined galleries of the Giardini. "
                     "National pavilions, large-scale installations, and the central International Exhibition share this vast industrial landscape, "
                     "transforming shipbuilding halls into some of the most powerful exhibition spaces in the world.")

                (d/p {:class (s/cx s/body-closing)}
                     "Tesa 41 sits within this historic matrix\u2014one of the original covered warehouses now given over to artistic production. "
                     "The Armenia Pavilion's presence continues a tradition of nations "
                     (d/span {:class s/em-italic} "working within")
                     " the Arsenale's industrial grain, not against it."))))

;; ── Getting There (map + directions) ──────────────────────────────────────

(defnc getting-there-section [{:keys []}]
  (let [is-desktop? (use-touch-enabled)]
    (d/div {:class s/section-pb}
           ;; Eyebrow + heading
           (d/div {:class "px-4"}
                  ($ venue-eyebrow {:text "Directions"})
                  (d/h2 {:class (s/cx s/heading-section "mb-8")}
                        "Getting There"))

           ;; Map
           (d/div {:class "mb-6"}
                  ($ mapbox-map
                     {:dev false
                      :interactive? is-desktop?
                      :initial-view mc/initial-view
                      :ant-paths    mc/ant-paths
                      :layers       mc/layers})
                  (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic s/text-muted "mt-4 px-4")}
                       "Walking path from the crossing to the pavilion \u2014 approximately 8 minutes"))

           ;; CTA
           ($ map-button))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc venue-view
  [_props]
  ($ page-shell
     ($ hero-section)
     ($ studio-section)
     ($ outdoor-section)
     ($ arsenale-section)
     ($ getting-there-section)))
