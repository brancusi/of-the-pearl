(ns amp.pages.budget.location
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.expandable-text :refer [expandable-text-area-2]]
   [amp.ui.map :refer [mapbox-map]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc preview-text []
  (d/p {:class s/body-base}
       "The Armenia Pavilion 2026 will be located across "
       (d/span {:class s/em-strong} "two sites,")
       " within the historic Arsenale of Venice. "
       (d/span {:class s/em-strong} " 1. A wonderful interior grand studio")
       (d/span {:class s/em-strong} " , as well 2. An important exterior public crossing to the Arsenale")
       ". "
       "Together these two sites will form a single spatial constellation. "
       (d/span {:class s/text-primary} "A place for study, a place for work, to create, share and exhibit")
       (d/span {:class s/text-primary} " at a public-crossing threshold")
       "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."))

(defnc preview
  [{:keys []}]
  (d/div {:class "p-4 mb-12"}
         ($ preview-text)))


(defnc full-details
  [{:keys [id subtitle title]}]
  (let [is-desktop? (use-touch-enabled)]
    (d/div
     {:class "space-y-8"}

     (d/div {:class s/body-base}
            (d/div {:class "p-4 mb-12"}
                   ($ preview-text))

            (d/div {:class "my-8"}
                   ($ mapbox-map
                      {:dev false
                       :interactive? is-desktop?
                       :initial-view mc/initial-view
                       :ant-paths    mc/ant-paths
                       :layers       mc/layers})
                   (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic "mt-4 px-4")}
                        "* Walking path from the crossing to the pavilion. ~8 minutes"))

            ;; Link to full Visitor Guide
            (d/div {:class "px-4 mt-8 flex flex-col sm:flex-row gap-4"}
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
                        "Open in Maps ↗"))))))


(defnc location-section
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:idx 7
                                    :section-hint subtitle
                                    :title title
                                    :expand-button-label "Expand details"
                                    :preview-text preview
                                    :full-text full-details})))
