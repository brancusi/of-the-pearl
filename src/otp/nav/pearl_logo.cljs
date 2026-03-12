(ns otp.nav.pearl-logo
  "Animated 'of the pearl' logo mark.
   A single circle splits into two, a thread appears connecting them,
   and the text 'of the pearl' is revealed between the circles.
   Accepts a `should-play?` prop to control when the animation starts."
  (:require [otp.lib.defnc :refer [defnc]]
            [otp.styles :as s]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            ["gsap" :refer [gsap]]))

(defnc pearl-logo [{:keys [should-play?]}]
  (let [container-ref (hooks/use-ref nil)
        tl-ref        (hooks/use-ref nil)
        has-played?   (hooks/use-ref false)]

    ;; Build the timeline once on mount (paused).
    (hooks/use-effect
     :once
     (let [tl (.timeline gsap #js {:paused true
                                   #_#_:repeat -1
                                   #_#_:repeatDelay 1.5
                                   #_#_:yoyo true})]

       ;; Set initial position (both circles centered)
       (.set gsap ".pearl-circle-left"
             #js {:xPercent -50 :yPercent -50})
       (.set gsap ".pearl-circle-right"
             #js {:xPercent -50 :yPercent -50})

       ;; Phase 1: split circles to the edges of the container
       (.to tl ".pearl-circle-left"
            #js {:left     "0%"
                 :xPercent -50
                 :yPercent -50
                 :duration 0.6
                 :ease     "power2.out"}
            0)
       (.to tl ".pearl-circle-right"
            #js {:left     "100%"
                 :xPercent -50
                 :yPercent -50
                 :duration 0.6
                 :ease     "power2.out"}
            0)

       ;; Phase 2: stretch the connecting thread
       (.to tl ".pearl-thread"
            #js {:scaleX   1
                 :opacity  1
                 :duration 0.5
                 :ease     "power2.out"}
            0.15)

       ;; Phase 3: fade-in & reveal text
       (.to tl ".pearl-text"
            #js {:opacity  1
                 :duration 0.5
                 :ease     "power1.out"}
            0.35)

       (set! (.-current tl-ref) tl)

       ;; Cleanup
       (fn [] (when-let [t (.-current tl-ref)]
                (.kill t)))))

    ;; Play when should-play? becomes true (one-shot).
    (hooks/use-effect
     [should-play?]
     (when (and should-play?
                (not (.-current has-played?))
                (.-current tl-ref))
       (set! (.-current has-played?) true)
       (.play (.-current tl-ref))))

    ;; Markup — fills parent width, parent controls overall size
    (d/div {:ref   container-ref
            :class (s/cx "relative flex items-center justify-center select-none"
                         "w-full h-8 overflow-visible")}

           ;; Thread (line connecting the two circles)
           (d/div {:class (s/cx "pearl-thread absolute"
                                "h-[1.5px] bg-current"
                                "top-1/2 -translate-y-1/2"
                                "left-0 right-0"
                                "origin-center scale-x-0 opacity-0"
                                "text-red-400")})

           ;; Left circle (starts centered, GSAP moves to left edge)
           (d/div {:class (s/cx "pearl-circle-left absolute left-1/2 top-1/2"
                                "w-3 h-3 rounded-full")
                   :style #js {:backgroundColor "#2B2B2B"}})

           ;; Right circle (starts centered, GSAP moves to right edge)
           (d/div {:class (s/cx "pearl-circle-right absolute left-1/2 top-1/2"
                                "w-3 h-3 rounded-full")
                   :style #js {:backgroundColor "#2B2B2B"}})

           ;; Text — centered, hidden until revealed
           (d/span {:class (s/cx "pearl-text relative opacity-0 whitespace-nowrap px-5"
                                 s/font-display
                                 "text-sm sm:text-base font-light tracking-[0.25em] lowercase")
                    :style #js {:color "#2B2B2B"}}
                   "of the pearl"))))
