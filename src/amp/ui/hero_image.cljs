(ns amp.ui.hero-image
  (:require
   [amp.hooks.use-container-size :refer [use-container-size]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.image :refer [lazy-image]]
   [helix.core :refer [$]]
   [helix.hooks :as hooks]
   [clojure.math :as math]
   [helix.dom :as d]))

(defn normalize-dimensions
  [dimensions side increment]
  (let [{:keys [target-side other-side]} (if (= side :width)
                                           {:target-side :width
                                            :other-side :height}
                                           {:target-side :height
                                            :other-side :width})
        target-length (get dimensions target-side)
        other-length (get dimensions other-side)
        diff (mod target-length increment)
        has-diff? (> diff 0)]
    (if has-diff?
      (let [factor (/ (- increment (mod target-length increment)) target-length)
            new-target-length (+ (* target-length factor) target-length)
            aspect-ratio (/ (max target-length other-length)
                            (min target-length other-length))
            updated-dimensions (assoc {}
                                      target-side new-target-length
                                      other-side (math/round (* new-target-length aspect-ratio)))]
        updated-dimensions)
      dimensions)))

(defnc hero-image-view
  [{:keys [img-src children]}]
  (let [image-container (hooks/use-ref "image-container")
        dimensions (use-container-size image-container)
        normalized-dimensions (normalize-dimensions dimensions :width 10)]
    (d/div {:class ""
            :ref image-container}
           ($ lazy-image {:src img-src
                          #_#_:w (:width normalized-dimensions)
                          :w 350
                          :h 350
                          ;;  Simply force the width on this and allow the height to just flow
                          #_#_:h (:height normalized-dimensions)
                          :object-fit "none"
                          :transition {:duration 0.25
                                       :opacity 1}
                          :should-load? true})

           (d/div {:class "relative origin-bottom-right"
                   :style {:transform "rotate(-90deg) translateX(100%)"}}
                  (when children
                    (d/div {:class ""}
                           (d/div {:class "absolute
                                       bottom-0
                                       font-mono
                                       bg-white/60
                                       text-sm
                                       p-1
                                       px-4
                                       mb-4
                                       text-slate-700
                                       whitespace-nowrap"}
                                  children)))))))
