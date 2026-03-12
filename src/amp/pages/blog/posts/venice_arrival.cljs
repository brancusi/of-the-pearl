(ns amp.pages.blog.posts.venice-arrival
  "Blog post: Arriving in Venice — preparations for the Biennale opening."
  (:require
   [amp.ui.image-figure :refer [image-figure]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; ---------------------------------------------------------------------------
;; Post content component
;; ---------------------------------------------------------------------------

(defnc post-content
  "Body of the Venice arrival post."
  [_props]
  (d/div {:class "space-y-6 pb-8"}
         (d/p {:class s/body-lg}
              "The team has arrived in Venice ahead of the "
              (d/span {:class s/em-strong} "61st International Art Exhibition")
              " — the "
              (d/span {:class s/em-strong} "Venice Biennale 2026")
              ". After two years of preparation, the moment to bring the project "
              "into physical reality is finally here.")

         ($ image-figure {:src "https://atd-722658831.imgix.net/big_red_walkway/5.jpg"
                          :aspect-ratio "1.82"
                          :caption "The crossing at the Arsenale — site of the outdoor installation"})

         (d/p {:class s/body-base}
              "Venice in late February is quiet, cold, and extraordinarily beautiful. The city "
              "empties between Carnevale and the start of the Biennale season, and the Arsenale "
              "takes on a quality of "
              (d/span {:class s/em-italic} "suspended potential")
              " — vast halls standing ready, waterways lapping at ancient brick, the hum of "
              "distant preparations echoing through the complex.")

         (d/p {:class s/body-base}
              "Our first task on arrival was to walk the sites — both "
              (d/span {:class s/em-strong} "Tesa 41")
              " and the outdoor crossing near the "
              (d/span {:class s/em-strong} "Piraeus Lion")
              ". Seeing the spaces in person, after months of working from floor plans and "
              "satellite imagery, recalibrates everything. Scale, light, acoustics, the way "
              "visitors will move through — all of it becomes concrete.")

         ($ image-figure {:src "https://atd-722658831.imgix.net/big_red_walkway/1.jpg"
                          :aspect-ratio "1.82"
                          :caption "Approach to the Armenian Pavilion site"})

         (d/p {:class s/body-base}
              "The outdoor piece will occupy one of the highest-traffic pedestrian junctions "
              "in the entire Biennale grounds. Every visitor walking between the main venues "
              "passes this point. The scale of the installation — a freestanding, architecturally "
              "proportioned form — is calibrated to this monumental context.")

         (d/p {:class (s/cx s/body-closing)}
              "The next weeks will be intensive: material deliveries, crew coordination, "
              "and the steady, patient work of making. "
              (d/span {:class s/em-italic} "We'll share the process as it unfolds")
              ".")))

;; ---------------------------------------------------------------------------
;; Post metadata
;; ---------------------------------------------------------------------------

(def post-meta
  {:slug "venice-arrival"
   :title "Arriving in Venice"
   :date "2026-02-20"
   :author "Armenian Pavilion Team"
   :summary "The team has arrived in Venice ahead of the 61st International Art Exhibition. After two years of preparation, the moment to bring the project into physical reality is here."
   :cover-image "https://atd-722658831.imgix.net/big_red_walkway/5.jpg"
   :component post-content})
