(ns amp.pages.landing.venue
  "Landing page venue teaser — preview text, map, and link to the
   full Visitor Guide page at /visit."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.expandable-text :refer [expandable-text-area-2]]
   [amp.ui.map :refer [mapbox-map]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; ── Preview copy ───────────────────────────────────────────────────────────

(defnc preview
  [{:keys []}]
  (d/div {:class "px-4"}
         (d/p {:class (s/cx s/text-base "mb-6")}
              "The Armenia Pavilion 2026 is located across "
              (d/span {:class s/em-strong} "two sites")
              " within the historic "
              (d/span {:class s/em-strong} "Arsenale of Venice")
              "—a grand interior studio and a prominent exterior crossing. "
              "Together they form a single spatial constellation: "
              (d/span {:class s/em-italic}
                      "a place for study, for work, to create, share and exhibit")
              ".")))

;; ── Details (map + CTA) ───────────────────────────────────────────────────

(defnc details
  [{:keys []}]
  (let [is-desktop? (use-touch-enabled)]
    (d/div
     {:class "space-y-8"}

     ;; Intro paragraph
     (d/div {:class "px-4"}
            (d/p {:class (s/cx s/text-base "mb-6")}
                 "The Armenia Pavilion 2026 is located across "
                 (d/span {:class s/em-strong} "two sites")
                 " within the historic "
                 (d/span {:class s/em-strong} "Arsenale of Venice")
                 "—a grand interior studio and a prominent exterior crossing. "
                 "Together they form a single spatial constellation: "
                 (d/span {:class s/em-italic}
                         "a place for study, for work, to create, share and exhibit")
                 "."))

     ;; ── Map ────────────────────────────────────────────────────────────
     (d/div {:class "my-8"}
            ($ mapbox-map
               {:dev false
                :interactive? is-desktop?
                :initial-view mc/initial-view
                :ant-paths    mc/ant-paths
                :layers       mc/layers})
            (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic "mt-4 px-4")}
                 "* Walking path from the crossing to the pavilion — approximately 8 minutes"))

     ;; ── CTAs ───────────────────────────────────────────────────────────
     (d/div {:class "px-4 flex flex-col sm:flex-row gap-4"}
            (d/a {:href "/visit"
                  :class (s/cx s/font-display s/weight-medium
                               "inline-flex items-center gap-2"
                               "text-sm uppercase tracking-wider"
                               "text-pink-600 dark:text-pink-300"
                               "hover:text-pink-700 dark:hover:text-pink-200"
                               "transition-colors duration-200")}
                 "See the full Visitor Guide →")

            (d/a {:href mc/maps-url
                  :target "_blank"
                  :rel "noopener noreferrer"
                  :class (s/cx s/font-display s/weight-medium
                               "inline-flex items-center gap-2"
                               "text-sm uppercase tracking-wider"
                               s/text-faint
                               "hover:text-pink-600 dark:hover:text-pink-300"
                               "transition-colors duration-200")}
                 "Open in Maps ↗")))))

;; ── Public API ─────────────────────────────────────────────────────────────

(defnc location-section
  [{:keys [id title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:title (or title "The Venue")
                                    :expand-button-label "Explore the venue"
                                    :preview-text preview
                                    :full-text details})))
