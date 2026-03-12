(ns amp.ui.image-overlay
  (:require
   [amp.ui.image :refer [lazy-image]]
   [amp.lib.defnc :refer [defnc]]
   [amp.hooks.use-container-size :refer [use-container-size]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc lazy-image-with-overlay
  [{:keys [img-src active? fit children]}]

  (let [fit (or fit "clip")
        image-container (hooks/use-ref "image-container")
        dimensions (use-container-size image-container)]
    ;; Container drives layout — lazy-image handles dimension bucketing.
    (d/div {:class "relative w-full h-full overflow-hidden"
            :ref image-container}
           ($ lazy-image {:src img-src
                          :w (:width dimensions)
                          :h (:height dimensions)
                          :fit fit
                          :transition {:duration 1
                                       :opacity 1}
                          :should-load? active?}
              children))))
