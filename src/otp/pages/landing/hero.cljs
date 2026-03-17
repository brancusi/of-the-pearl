(ns otp.pages.landing.hero
  (:require
   [otp.hooks.use-gsap-from-to :refer [use-gsap-from-to]]
   [otp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [otp.ui.image-overlay :refer [lazy-image-with-overlay]]
   [otp.ui.animated-lines :refer [animated-lines]]
   [otp.ui.action-button :refer [action-button]]
   [otp.ui.icons :refer [ArrowLongDownIcon]]
   [otp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [otp.styles :as s]
   [helix.dom :as d]
   [helix.hooks :as hooks]))


(defnc mobile-hero-section
  []
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        which-ref (hooks/use-ref nil)
        arrow-ref (hooks/use-ref nil)
        subtitle-effects [{:type :strike-through
                           :thickness 1
                           :offset-y "9px"
                           :delay 1.5
                           :duration 0.4}]
        [visited? is-active?] (use-intersection-observer outer-ctx)]

    (use-gsap-from-to arrow-ref
                      :from {:opacity 0 :y -10}
                      :to   {:opacity 1 :y 0
                             :duration 0.5
                             :ease "power2.out"
                             :delay 1.2}
                      :active? visited?)

    (d/div
     {:ref outer-ctx
      :class "w-full h-screen flex flex-col bg-black dark:bg-black"}

     ;; Image section — fills remaining space
     (d/div
      {:class "relative flex-1 min-h-0 w-full"}

      ($ lazy-image-with-overlay {:img-src "https://otp-media.imgix.net/jewelry/DSC02716.jpg"
                                  :active? visited?}

         (d/div {:class "absolute inset-0 flex items-end overflow-hidden"}
                ($ animated-lines
                   {:lines [{:text    "rejection"
                             :effects [{:type     :strike-through
                                        :delay    1.2
                                        :thickness 10
                                        :duration 0.6}]}
                            {:text "of"}
                            {:text "that"}
                            {:text "which" :class "mix-blend-overlay"
                             :ref which-ref}]
                    :class "font-ocr font-normal
                            ml-[15%] sm:ml-[40%] md:ml-[30%] lg:ml-[25%]
                            mb-[2%]
                            text-8xl md:text-11xl
                            leading-[1em]
                            text-amber-100/90
                            lowercase whitespace-nowrap"
                    :separator :br
                    :split-type "chars,lines"
                    :text-delay 0.3
                    :text-stagger 0.03}))

         (d/div {:class "absolute bottom-12 right-12 sm:bottom-16 sm:right-16"}
                ($ action-button {:title "don't shop"
                                  :size :lg
                                  :strikethrough true}))))

     ;; White bottom bar
     (d/div
      {:class "relative w-full bg-white dark:bg-white py-3 px-4 flex items-center"}

      ;; Down arrow centered
      (d/div {:class "flex-1 flex justify-center"}
             (d/div {:ref arrow-ref}
                    ($ ArrowLongDownIcon {:class "w-6 h-6 text-black"})))

      ;; "decorates / assumes / dictates" — right edge aligned to "which" h
      ($ animated-lines
         {:lines [{:text "decorates"
                   :effects subtitle-effects}
                  {:text "assumes"
                   :effects subtitle-effects}
                  {:text "dictates"
                   :effects subtitle-effects}]
          :style {:right "4rem"}
          :class (s/cx s/body-base "absolute top-1/2 -translate-y-1/2 text-red-500
                  text-right font-mono font-semibold
                  text-[10px] sm:text-xs tracking-[0.15em]
                  leading-relaxed")
          :text-delay 0.8
          :separator :br
          :text-stagger 0.08})))))

