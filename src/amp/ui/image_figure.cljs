(ns amp.ui.image-figure
  "Captioned, lazy-loaded image with a skeleton placeholder.

   Combines `skeleton-box`, `lazy-image`, `use-container-size`, and
   `use-intersection-observer` into a single reusable `<figure>`.
   The container's CSS `aspectRatio` defines the shape; actual pixel
   dimensions are measured at runtime — no hardcoded widths.

   Usage:
       ($ image-figure {:src \"https://example.imgix.net/photo.jpg\"
                        :aspect-ratio \"16/9\"
                        :caption \"Optional caption text\"})"
  (:require
   [amp.ui.skeleton :refer [skeleton-box]]
   [amp.ui.image :refer [lazy-image]]
   [amp.hooks.use-container-size :refer [use-container-size]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc image-figure
  "Image with skeleton shimmer while loading. Aspect ratio drives layout;
   pixel dimensions are measured from the container so the imgix request
   always matches the actual rendered size.

   Props:
     :src          — imgix image URL (required)
     :aspect-ratio — CSS aspect-ratio string, e.g. \"16/9\", \"1.34\" (default \"16/9\")
     :caption      — optional figcaption text
     :fit          — imgix fit mode passed to lazy-image (default \"cover\")
     :class        — additional classes on the outer <figure>"
  [{:keys [src aspect-ratio caption fit class]}]
  (let [aspect (or aspect-ratio "16/9")
        ref (hooks/use-ref nil)
        [_visited? visible?] (use-intersection-observer ref)
        {:keys [width height]} (use-container-size ref)]
    (d/figure {:class (s/cx "my-8" class)
               :ref ref}
              (d/div {:class "relative w-full overflow-hidden"
                      :style {:aspectRatio aspect}}
                     ;; Skeleton underneath
                     ($ skeleton-box {:aspect-ratio aspect
                                      :class "absolute inset-0"})
                     ;; Lazy image on top — dimensions measured from container
                     ($ lazy-image {:src src
                                    :w width
                                    :h height
                                    :should-load? visible?
                                    :object-fit (or fit "cover")
                                    :transition {:opacity 1 :duration 0.6 :ease "power2.out"}}))
              (when caption
                (d/figcaption {:class (s/cx s/font-data s/text-xs s/text-muted
                                            "mt-3 px-1")}
                              caption)))))
