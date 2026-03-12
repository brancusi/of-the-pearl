(ns amp.pages.landing.teaser
  (:require
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

(defnc teaser-section
  []
  (let [outer-ref (hooks/use-ref "outer-ref")
        [_visited? is-active?] (use-scroll-trigger outer-ref {:end "bottom"})
        block-bg "bg-black/70 px-3 py-1.5 inline decoration-clone"
        block-bg-light "bg-black/50 px-3 py-1 inline decoration-clone"
        block-bg-info "bg-black/60 px-2 py-1 inline decoration-clone"
        label-class (s/cx s/font-display s/weight-semibold "text-[10px] uppercase tracking-[0.2em]" s/text-warning)
        clone-style {:boxDecorationBreak "clone"
                     :WebkitBoxDecorationBreak "clone"}]

    (d/div
     {:id "teaser"
      :ref outer-ref
      :class "relative w-full min-h-screen overflow-hidden"}

     ;; ── Video background ──
     (d/div {:class "absolute inset-0"}
            ($ lazy-video {:allow-audio? false
                           :playback-id "Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00"
                           :should-play? is-active?}))

     ;; ── Dark gradient overlay for readability ──
     (d/div {:class "absolute inset-0 z-[1] pointer-events-none"
             :style {:background "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 50%)"}})

     ;; ── Content overlay ──
     (d/div
      {:class "relative z-10 flex flex-col justify-center
               min-h-screen px-6 sm:px-12 lg:px-20
               py-16 sm:py-24
               max-w-4xl"}

      ;; Title
      (d/h2
       {:class (s/cx s/font-display s/weight-bold "uppercase tracking-wider
                leading-relaxed text-4xl sm:text-5xl lg:text-6xl" s/text-inverse "mb-6")}
       (d/span {:class block-bg :style clone-style}
               "The Studio"))

      ;; Subtitle / tagline
      (d/p
       {:class (s/cx s/font-display "text-sm sm:text-base uppercase tracking-[0.15em]
                leading-loose text-white/90 mb-8 max-w-xl")}
       (d/span {:class block-bg-light :style clone-style}
               "A living studio at the heart of the Venice Biennale"))

      ;; Description
      (d/div
       {:class "space-y-3 mb-10 max-w-lg"}
       (d/p {:class (s/cx s/font-body "text-base sm:text-lg leading-relaxed text-white/90")}
            (d/span {:class block-bg-info :style clone-style}
                    "Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare\u2014casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself.")))

      ;; ── Info grid ──
      (d/div
       {:class "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10"}

       ;; Dates
       (d/div
        {:class "space-y-1"}
        (d/p {:class label-class}
             "Opening")
        (d/p {:class (s/cx s/font-display "text-xs sm:text-sm text-white/90")}
             (d/span {:class block-bg-info :style clone-style}
                     "9 May \u2013 22 November 2026"))
        (d/p {:class (s/cx s/font-display s/weight-medium "text-xs" s/text-warning-80 "mt-1")}
             "Preview: 6, 7, 8 May"))

       ;; Venue
       (d/div
        {:class "space-y-1"}
        (d/p {:class label-class}
             "Venue")
        (d/a {:href "https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7"
              :target "_blank"
              :rel "noopener noreferrer"
              :class (s/cx s/font-display "text-xs sm:text-sm text-white/90 hover:text-white
                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60
                      transition-colors block whitespace-nowrap")}
             (d/span {:class block-bg-info :style clone-style}
                     "Arsenale Militare, Venice")))

       ;; Pavilion
       (d/div
        {:class "space-y-1"}
        (d/p {:class label-class}
             "Pavilion")
        (d/p {:class (s/cx s/font-display "text-xs sm:text-sm text-white/90")}
             (d/span {:class block-bg-info :style clone-style}
                     "Republic of Armenia"))))))))
