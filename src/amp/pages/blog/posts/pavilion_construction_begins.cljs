(ns amp.pages.blog.posts.pavilion-construction-begins
  "Blog post: Pavilion construction begins at the Arsenale."
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
  "Body of the pavilion construction post."
  [_props]
  (d/div {:class "space-y-6 pb-8"}
         (d/p {:class s/body-lg}
              "After months of planning, design, and coordination, construction has officially begun "
              "on the "
              (d/span {:class s/em-strong} "Armenia Pavilion")
              " at "
              (d/span {:class s/em-strong} "Tesa 41")
              " within the historic Arsenale complex in Venice.")

         ($ image-figure {:src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"
                          :aspect-ratio "1.34"
                          :caption "Tesa 41 interior — first day of pavilion setup"})

         (d/p {:class s/body-base}
              "The pavilion occupies approximately "
              (d/span {:class s/em-strong} "5,000 square feet")
              " of interior volume — a raw industrial hall with towering ceilings and exposed "
              "timber trusses that will serve as both studio and exhibition space for the duration "
              "of the Biennale.")

         (d/p {:class s/body-base}
              "Unlike a traditional pavilion that opens fully formed, our approach treats the space as a "
              (d/span {:class s/em-strong} "living workshop")
              ". Visitors will encounter the work in various stages of production: structures being "
              "assembled, materials being tested, forms being revised. The studio "
              (d/span {:class s/em-italic} "is")
              " the artwork.")

         ($ image-figure {:src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"
                          :aspect-ratio "1.34"
                          :caption "Structural framework taking shape inside Tesa 41"})

         (d/p {:class s/body-base}
              "The initial phase focuses on the spatial framework — establishing the modular grid "
              "system that will support the evolving material compositions over six months. "
              "Each element is designed for repeated assembly and disassembly, reflecting the "
              "project's core philosophy of "
              (d/span {:class s/em-strong} "continuous making")
              ".")

         (d/p {:class (s/cx s/body-closing)}
              "More updates to follow as the space transforms — "
              (d/span {:class s/em-italic} "stay tuned")
              ".")))

;; ---------------------------------------------------------------------------
;; Post metadata
;; ---------------------------------------------------------------------------

(def post-meta
  {:slug "pavilion-construction-begins"
   :title "Pavilion Construction Begins"
   :date "2026-02-10"
   :author "Armenian Pavilion Team"
   :summary "After months of planning, construction has officially begun on the Armenia Pavilion at Tesa 41 within the historic Arsenale complex in Venice."
   :cover-image "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"
   :component post-content})
