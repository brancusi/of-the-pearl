(ns amp.pages.landing.hero
  (:require
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video-background (lazy-component amp.ui.video-background/video-background))


(defnc mobile-hero-section
  []
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        [_visited? is-active?] (use-scroll-trigger outer-ctx {:end "bottom"})
        block-bg "bg-black/70 px-3 py-1.5 inline decoration-clone"
        block-bg-light "bg-black/50 px-3 py-1 inline decoration-clone"
        clone-style {:boxDecorationBreak "clone"
                     :WebkitBoxDecorationBreak "clone"}]

    (d/div
     {:id "video"
      :ref outer-ctx
      :class "relative w-full overflow-hidden"}

     (d/div
      {:class "w-full h-screen relative flex flex-col"}

      ;; ── Video background ──
      (d/div {:class "absolute inset-0"}
             ($ lazy-video-background {:allow-audio? false
                                       :playback-id "fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"
                                       :should-play? is-active?}))

      ;; ── Biennale logo — top right ──
      (d/div {:class "absolute top-20 right-8 z-20"}
             (d/div {:class "cursor-pointer w-24 sm:w-28 lg:w-32"
                     :on-click #(js/window.open "https://www.labiennale.org/en/art/2026" "_blank")}
                    (d/img {:src "images/graphics/61_biennale_logo_red.svg"
                            :class "opacity-90"})))

      ;; ── Center content ──
      (d/div
       {:class "relative z-10 flex-1 flex flex-col items-center justify-center px-8"}

       ;; The Studio logo — hero centerpiece, amber tint via CSS mask
       (d/div {:class "w-4/5 sm:w-2/3 max-w-2xl aspect-square mb-10 bg-amber-400 opacity-90"
               :style {:WebkitMaskImage "url(images/graphics/the_studio_logo.svg)"
                       :maskImage "url(images/graphics/the_studio_logo.svg)"
                       :WebkitMaskSize "contain"
                       :maskSize "contain"
                       :WebkitMaskRepeat "no-repeat"
                       :maskRepeat "no-repeat"
                       :WebkitMaskPosition "center"
                       :maskPosition "center"}})

       ;; Subtitle — pavilion info
       (d/p
        {:class (s/cx s/font-display "text-xs sm:text-sm uppercase tracking-[0.2em] max-w-md text-center leading-loose text-white/90")}
        (d/span
         {:class block-bg-light
          :style clone-style}
         "Armenia Pavilion \u00B7 61st International Art Exhibition La Biennale di Venezia")))

      ;; Learn more — anchored to bottom
      (d/a
       {:href "#press-release"
        :class (s/cx "absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1
                text-white/80 hover:text-white transition-colors"
                     s/font-display "text-xs uppercase tracking-[0.2em]")}
       "Learn More"
       (d/span {:class "text-lg animate-bounce"} "\u2193"))))))
