(ns amp.ui.overlays
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(def ^:private position-configs
  {:tl     {0   {:origin "origin-top-left"     :pos "top-0 left-0"      :translate ""}
            90  {:origin "origin-top-left"     :pos "top-0 left-0"      :translate "translateY(-100%)"}
            -90 {:origin "origin-top-left"     :pos "top-0 left-0"      :translate "translateX(-100%)"}}
   :tr     {0   {:origin "origin-top-right"    :pos "top-0 right-0"     :translate ""}
            90  {:origin "origin-top-right"    :pos "top-0 right-0"     :translate "translateX(100%)"}
            -90 {:origin "origin-top-right"    :pos "top-0 right-0"     :translate "translateY(-100%)"}}
   :bl     {0   {:origin "origin-bottom-left"  :pos "bottom-0 left-0"   :translate ""}
            90  {:origin "origin-bottom-left"  :pos "bottom-0 left-0"   :translate "translateX(-100%)"}
            -90 {:origin "origin-bottom-left"  :pos "bottom-0 left-0"   :translate "translateY(100%)"}}
   :br     {0   {:origin "origin-bottom-right" :pos "bottom-0 right-0"  :translate ""}
            90  {:origin "origin-bottom-right" :pos "bottom-0 right-0"  :translate "translateY(100%)"}
            -90 {:origin "origin-bottom-right" :pos "bottom-0 right-0"  :translate "translateX(100%)"}}
   :center {0   {:origin "origin-center"       :pos "top-1/2 left-1/2"  :translate "translate(-50%, -50%)"}
            90  {:origin "origin-center"       :pos "top-1/2 left-1/2"  :translate "translate(-50%, -50%)"}
            -90 {:origin "origin-center"       :pos "top-1/2 left-1/2"  :translate "translate(-50%, -50%)"}}})

(defnc caption-overlay
  [{:keys [parent-styles children position rotation]}]
  (let [position (or position :tl)
        rotation (or rotation 0)
        pos-config (get position-configs position)
        config (get pos-config rotation (get pos-config 0))
        outer-transform (str "rotate(" rotation "deg) " (:translate config))]
    (d/div {:class (str "absolute whitespace-nowrap "
                        (:pos config) " "
                        (:origin config) " "
                        parent-styles)
            :style {:transform outer-transform}}
           children)))
