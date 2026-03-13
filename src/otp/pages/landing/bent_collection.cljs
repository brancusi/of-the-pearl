(ns otp.pages.landing.bent-collection
  (:require
   [otp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [otp.ui.image-overlay :refer [lazy-image-with-overlay]]
   [otp.hooks.use-gsap-from-to :refer [use-gsap-from-to]]
   [otp.lib.defnc :refer [defnc]]
   [otp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; ---------------------------------------------------------------------------
;; Hex values extracted from the mockup via imgix palette API + visual match
;; ---------------------------------------------------------------------------

;; Background decorative blocks (pastel corners behind the white card)
(def ^:private light-grey   "#F2F2F2")
(def ^:private sky-blue     "#EBFFFF")
(def ^:private lavender     "#FFE5FA")
(def ^:private mint-green     "#F6FFF0")
(def ^:private base-grey     "#FBFBFB")

;; Bottom color strip
(def ^:private strip-dark   "#1A1A1A")
(def ^:private strip-cyan   "#B9FEFF")
(def ^:private strip-pink   "#EFEFEF")

;; Card / content
(def ^:private card-white   "#FFFFFF")
(def ^:private text-dark    "#1A1A1A")

;; Image-derived tones (from imgix palette of bent_207.jpg)
(def ^:private bronze       "#B5A596")
(def ^:private steel-blue   "#3A5067")

(def ^:private lorem-text
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")

;; ---------------------------------------------------------------------------
;; Diagonal-stripe SVG pattern (used for the lavender block)
;; ---------------------------------------------------------------------------
(def ^:private stripe-pattern-id "bent-stripes")

(defnc stripe-svg-defs []
  ($ "svg" {:class "absolute w-0 h-0" :aria-hidden true}
     ($ "defs"
        ($ "pattern" {:id stripe-pattern-id
                      :width "8" :height "8"
                      :patternUnits "userSpaceOnUse"
                      :patternTransform "rotate(45)"}
           ($ "line" {:x1 "0" :y1 "0" :x2 "0" :y2 "8"
                      :stroke lavender :stroke-width "4"})))))

;; ---------------------------------------------------------------------------
;; Sub-components
;; ---------------------------------------------------------------------------

(defnc background-blocks
  []
  (d/div {:class "absolute inset-x-0 top-0 bottom-0 flex pointer-events-none md:px-4"
          :aria-hidden true}
         ;; Left mint
         (d/div {:class "w-11/24 mr-4"
                 :style {:backgroundColor light-grey}})
         ;; Center blue
         (d/div {:class "w-2/24"
                 :style {:backgroundColor sky-blue}})
         ;; Right lavender with stripe pattern
         (d/div {:class "relative w-11/24 ml-4 overflow-hidden"
                 :style {:backgroundColor base-grey}}
                ($ "svg" {:class "absolute inset-0 w-full h-full"
                          :preserveAspectRatio "none"}
                   ($ "rect" {:width "100%" :height "100%"
                              :fill (str "url(#" stripe-pattern-id ")")})))))

(defnc collection-footer
  []
  (d/div {:class "w-full flex px-4 mt-2 pointer-events-none z-30 mb-4"
          :aria-hidden true}
         ;; Left mint
         (d/div {:class "w-11/24 mr-4 flex justify-end relative"
                 :style {:backgroundColor strip-dark}}
                (d/span {:class (s/cx s/body-base "text-xs text-justify py-8 pl-24 absolute bottom-0 text-slate-900")
                         :style {:textAlignLast "right"}}
                        lorem-text)
                (d/span {:class (s/cx s/body-base "text-xs text-right px-2 text-white")}
                        "bent collection - 2026")
                (d/div {:class "border-b border-red-500 w-64 absolute bottom-[-4px]"}))
         ;; Center blue
         (d/div {:class "w-2/24"
                 :style {:backgroundColor strip-cyan}})
         ;; Right lavender with stripe pattern
         (d/div {:class "relative w-11/24 ml-4 relative"
                 :style {:backgroundColor strip-pink}}

                (d/span {:class (s/cx s/body-base "text-xs text-justify py-8 pr-24 absolute bottom-0 text-slate-900")
                         :style {:textAlignLast "left"}}
                        lorem-text))))

;; ---------------------------------------------------------------------------
;; Main section
;; ---------------------------------------------------------------------------

(defnc bent-collection-section []
  (let [section-ref (hooks/use-ref nil)
        [visited? visible?] (use-intersection-observer section-ref {:threshold 0.05})]

    (use-gsap-from-to section-ref
                      {:from {:opacity 0 :y -10}
                       :to   {:opacity 1 :y 0
                              :duration 0.5
                              :ease "power2.out"
                              :delay 0.3}
                       :active? visible?})

    (d/div {:ref section-ref
            :class "relative w-full flex flex-col items-center
                    justify-center overflow-hidden"
            :style {:backgroundColor mint-green}}

           ;; SVG pattern definitions 
           ($ stripe-svg-defs)

           ;; Wrapper: card is in flow (sets height), stripes are absolute inside
           (d/div {:class "relative w-full mt-4"}

                  ;; Decorative background blocks (flush bottom, room on top)
                  ($ background-blocks)

                  ;; White card (mt-16 so stripes are visible above)
                  (d/div {:class "relative z-10 w-11/12 md:w-10/12 mt-16 mx-auto pb-20"
                          :style {:backgroundColor card-white}}

                         ($ lazy-image-with-overlay
                            {:img-src "https://otp-media.imgix.net/editorial/bent_207.jpg"
                             :aspect-ratio "2/1"
                             :active? visible?
                             :layout-fit "contain"})))

           ($ collection-footer))))
