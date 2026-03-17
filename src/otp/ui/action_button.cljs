(ns otp.ui.action-button
  (:require
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [otp.hooks.use-hover-animations :refer [use-hover-animations]]
   [otp.lib.defnc :refer [defnc]]
   [otp.styles :as s]))

(def ^:private size-config
  {:sm {:padding    "pl-6 pr-4 pt-2.5 pb-2.5"
        :text       "text-sm tracking-[0.18em]"
        :arrow-size 28}
   :md {:padding    "pl-8 pr-6 pt-3.5 pb-3.5"
        :text       "text-md tracking-[0.2em]"
        :arrow-size 36}
   :lg {:padding    "pl-10 pr-8 pt-5 pb-5"
        :text       "text-xl tracking-[0.22em]"
        :arrow-size 44}})

(defnc action-button
  [{:keys [title on-click size bg-color text-color strikethrough
           arrow-offset-x arrow-offset-y additional-classes]}]
  (let [sz   (keyword (or size :md))
        cfg  (get size-config sz (:md size-config))
        bg   (or bg-color "#FFFFFF")
        fg   (or text-color "#2B2B2B")
        ox   (or arrow-offset-x 10)
        oy   (or arrow-offset-y 10)
        asz  (:arrow-size cfg)
        button-ref (hooks/use-ref nil)
        arrow-ref  (hooks/use-ref nil)]

    (use-hover-animations button-ref
                          :target arrow-ref
                          :over {:x 5 :y -5 :duration 0.3 :ease "power2.out"}
                          :out  {:x 0 :y 0  :duration 0.3 :ease "power2.out"})

    (d/button
     {:ref      button-ref
      :class    (s/cx "group relative inline-flex items-center"
                      "transition-all duration-300 ease-in-out cursor-pointer overflow-visible"
                      (:padding cfg)
                      additional-classes)
      :style    {:backgroundColor bg
                 :color fg}
      :on-click on-click}
     ;; Arrow SVG — top-right corner of SVG anchored at button's bottom-left.
     ;; offset-x shifts horizontally (positive = rightward into button),
     ;; offset-y shifts vertically (positive = upward into button).
     (d/img {:ref   arrow-ref
             :src   "/images/icons/arrow.svg"
             :alt   ""
             :class "absolute pointer-events-none"
             :style {:width  asz
                     :height asz
                     :bottom (+ (- asz) oy)
                     :left   (+ (- asz) ox)
                     :filter (when (not= fg "#2B2B2B")
                               (str "brightness(0) saturate(100%) invert(100%)"))}})
     ;; Label text
     (d/span {:class (s/cx (:text cfg)
                           (when strikethrough "line-through decoration-[1.5px]"))}
             title))))
