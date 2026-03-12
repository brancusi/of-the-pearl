(ns amp.ui.image-gallery
  "Universal media carousel — supports image, threejs, and video slides.
   Uses Embla for swiping/navigation with autoplay, dot indicators,
   prev/next arrows, and overlay system. When a threejs slide enters
   interactive mode the carousel is frozen (drag & autoplay disabled)
   until the user exits."
  (:require ["embla-carousel-react" :as use-embla-carousel]
            ["embla-carousel-autoplay" :as auto-play]

            [amp.ui.threejs-slide :refer [threejs-slide]]
            [amp.ui.image-overlay :refer [lazy-image-with-overlay]]
            [amp.ui.overlays :refer [caption-overlay]]
            [amp.ui.icons :refer [ChevronRightIcon]]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]
            [helix.hooks :as hooks]
            [helix.dom :as d]))

;; ---------------------------------------------------------------------------
;; Dot indicator (pill-style, same visual as progress-menu-v2)
;; ---------------------------------------------------------------------------

(defnc dot-indicators
  [{:keys [total current on-click]}]
  (d/div {:class "flex items-center gap-1"}
         (for [i (range total)]
           (d/button {:key      i
                      :on-click #(when on-click (on-click i))
                      :class    "cursor-pointer"
                      :style    {:width      (if (= i current) "16px" "6px")
                                 :height     "3px"
                                 :border-radius "2px"
                                 :background (if (= i current)
                                               "rgba(255,255,255,1)"
                                               "rgba(255,255,255,0.35)")
                                 :transition "all 0.3s ease"}}))))

;; ---------------------------------------------------------------------------
;; Slide renderers (dispatched by :type in the main component)
;; ---------------------------------------------------------------------------

(defnc image-slide
  [{:keys [img-src caption credit active? lazy-image-parent-styles]}]
  (d/div {:class "w-full h-full"}
         ($ lazy-image-with-overlay
            {:img-src img-src
             :active? active?}
            (d/div
             (when caption
               ($ caption-overlay {:position      :tl
                                   :rotation      90
                                   :parent-styles lazy-image-parent-styles}
                  (d/span {:class "italic text-xs"} caption)))
             (when credit
               ($ caption-overlay {:position      :bl
                                   :parent-styles lazy-image-parent-styles}
                  (d/span {:class "italic text-xs"} credit)))))))

;; ---------------------------------------------------------------------------
;; Main carousel
;; ---------------------------------------------------------------------------

(defnc lazy-image-gallery
  "Universal Embla-powered media carousel.

   Props
   -----
   :slides   — vector of slide maps. Each slide must have :type
               (:image | :threejs | :video). Additional keys depend on type:
                 :image   → :img-src, :aspect-ratio, :caption, :credit
                 :threejs → :scene-data, :camera, :caption, :credit
                 :video   → (reserved for future)
               Slides without :type default to :image.
   :enabled? — autoplay runs only when true (typically intersection-based)"
  [{:keys [slides enabled?]}]
  (let [lazy-image-parent-styles "font-mono
                                  bg-white/70 dark:bg-slate-900/70
                                  px-2
                                  text-slate-700 dark:text-slate-200"

        auto-play-opts (clj->js {:delay 7000})

        [embla-container-ref embla-api]
        (use-embla-carousel (clj->js {:loop true})
                            (clj->js [(auto-play auto-play-opts)]))

        autoplay (hooks/use-memo
                  [embla-api]
                  (when embla-api
                    (-> embla-api (.plugins) (.-autoplay))))

        ;; Current slide index (0-based)
        [current-index set-current-index!] (hooks/use-state 0)
        total-slides (count slides)

        ;; Locked? — true while a threejs slide is in interactive mode
        [locked? set-locked!] (hooks/use-state false)

        ;; Navigation helpers
        next-slide     (hooks/use-callback
                        [embla-api]
                        (fn [] (when embla-api (.scrollNext embla-api))))
        previous-slide (hooks/use-callback
                        [embla-api]
                        (fn [] (when embla-api (.scrollPrev embla-api))))
        go-to-slide    (hooks/use-callback
                        [embla-api]
                        (fn [idx] (when embla-api (.scrollTo embla-api idx))))

        ;; Scroll listener
        on-select (hooks/use-callback
                   [embla-api]
                   (fn []
                     (when embla-api
                       (set-current-index! (.selectedScrollSnap embla-api)))))

        ;; --- Lock / unlock carousel for interactive slides -------------------
        lock-carousel!
        (hooks/use-callback
         [embla-api autoplay]
         (fn []
           (set-locked! true)
           (when embla-api
             ;; Disable dragging by re-initialising with watchDrag false
             (.reInit embla-api (clj->js {:watchDrag false})))
           (when autoplay (.stop autoplay))))

        unlock-carousel!
        (hooks/use-callback
         [embla-api autoplay enabled?]
         (fn []
           (set-locked! false)
           (when embla-api
             (.reInit embla-api (clj->js {:watchDrag true})))
           (when (and autoplay enabled?) (.play autoplay))))]

    ;; --- Autoplay play/stop based on visibility ---
    (hooks/use-layout-effect
     [autoplay enabled? locked?]
     (when autoplay
       (if (and enabled? (not locked?))
         (.play autoplay)
         (.stop autoplay))))

    ;; --- Attach Embla select listener ---
    (hooks/use-effect
     [embla-api on-select]
     (when embla-api
       (.on embla-api "select" on-select)
       (on-select)
       (fn [] (.off embla-api "select" on-select))))

    ;; --- Render ---
    (d/div {:class "relative w-full max-w-full max-h-screen overflow-hidden select-none"}

           ;; Embla viewport
           (d/div {:ref   embla-container-ref
                   :class "w-full max-w-full overflow-hidden max-h-screen"}
                  (d/div {:class "flex items-center max-h-screen"}
                         (map-indexed
                          (fn [idx slide]
                            (let [is-active?  (and enabled? (= idx current-index))
                                  slide-type  (or (:type slide) :image)]
                              (d/div {:key   idx
                                      :class "flex-[0_0_100%] min-w-0 relative max-h-screen overflow-hidden"
                                      :style {:aspect-ratio (str (or (:aspect-ratio slide) "16/9"))}}
                                     (case slide-type
                                       :threejs
                                       ($ threejs-slide
                                          {:scene-data (:scene-data slide)
                                           :camera     (:camera slide)
                                           :caption    (:caption slide)
                                           :credit     (:credit slide)
                                           :active?    is-active?
                                           :on-lock    lock-carousel!
                                           :on-unlock  unlock-carousel!
                                           :lazy-image-parent-styles lazy-image-parent-styles})

                                       ;; default → image
                                       ($ image-slide
                                          {:img-src                (:img-src slide)
                                           :caption                (:caption slide)
                                           :credit                 (:credit slide)
                                           :active?                is-active?
                                           :lazy-image-parent-styles lazy-image-parent-styles})))))
                          slides)))

           ;; --- Prev / Next arrows ---
           (when-not locked?
             (d/div {:class "absolute w-full top-1/2 transform -translate-y-1/2 pointer-events-none"}
                    (d/div {:class "flex justify-between h-full w-full items-center"}
                           (d/div {:on-click previous-slide
                                   :class    "w-12 flex items-center pointer-events-auto cursor-pointer"}
                                  (d/div {:class "w-10 h-10 transition-transform rotate-180 text-pink-300"}
                                         ($ ChevronRightIcon)))
                           (d/div {:on-click next-slide
                                   :class    "w-12 flex justify-end items-center pointer-events-auto cursor-pointer"}
                                  (d/div {:class "w-10 h-10 transition-transform text-pink-300"}
                                         ($ ChevronRightIcon))))))

           ;; --- Dot indicators ---
           (d/div {:class "absolute w-full bottom-4"}
                  (d/div {:class "flex items-center justify-center w-full"}
                         ($ dot-indicators {:total    total-slides
                                            :current  current-index
                                            :on-click go-to-slide}))))))
