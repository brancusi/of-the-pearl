(ns otp.ui.image-overlay
  (:require
   [otp.ui.image :refer [lazy-image]]
   [otp.lib.defnc :refer [defnc]]
   [otp.hooks.use-container-size :refer [use-container-size]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc lazy-image-with-overlay
  "Sized container that wraps `lazy-image` with automatic dimension measurement.

  Measures its own width/height via `use-container-size` and forwards the
  values to `lazy-image`, so callers only need to supply a source URL and
  let CSS control the container size. An optional `aspect-ratio` locks the
  container proportions.

  Props:
  - `img-src`      — imgix image URL (required).
  - `active?`      — boolean; image is fetched only when true.
  - `imgix-fit`    — imgix fit mode (default \"clip\"). Legacy alias: `fit`.
  - `layout-fit`   — CSS object-fit (default \"cover\"). Legacy alias: `object-fit`.
  - `aspect-ratio` — optional CSS aspect-ratio string, e.g. \"16/9\".
  - `crop`         — imgix crop strategy, e.g. \"focalpoint\".
  - `fp-x`, `fp-y`, `fp-z` — focal-point coordinates (0–1).
  - `children`     — overlay content rendered on top of the image after paint."
  [{:keys [img-src active? imgix-fit layout-fit fit object-fit aspect-ratio crop fp-x fp-y fp-z children]}]

  (let [imgix-fit (or imgix-fit fit "clip")
        layout-fit (or layout-fit object-fit)
        image-container (hooks/use-ref "image-container")
        dimensions (use-container-size image-container)]
    ;; Container drives layout — lazy-image handles dimension bucketing.
    (d/div {:class "relative w-full h-full overflow-hidden"
            :style (when aspect-ratio
                     {:aspect-ratio (str aspect-ratio)})
            :ref image-container}
           ($ lazy-image {:src img-src
                          :w (:width dimensions)
                          :h (:height dimensions)
                          :imgix-fit imgix-fit
                          :layout-fit layout-fit
                          :crop crop
                          :fp-x fp-x
                          :fp-y fp-y
                          :fp-z fp-z
                          :transition {:duration 1
                                       :opacity 1}
                          :should-load? active?}
              children))))
