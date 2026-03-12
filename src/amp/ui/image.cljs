(ns amp.ui.image
  (:require [helix.core :refer [$]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [amp.utils.gsap :as gsap]
            [amp.lib.defnc :refer [defnc]]))

(def ^:private size-buckets
  "Pre-computed width/height buckets for imgix cache friendliness.
   Small images get fine-grained buckets; large images get coarse ones.
   Every requested dimension snaps UP to the next value in this list so
   that nearby viewport sizes share the same cached imgix render.
   Covers 50 → 3200 px which handles everything from avatars to 4K hero
   images at 2× DPR."
  [50 75 100 150 200 300 400 500 600 700 800 900
   1000 1200 1400 1600 1800 2000 2400 2800 3200])

(defn- snap-to-bucket
  "Snap `n` UP to the nearest value in `size-buckets`.
   Returns the largest bucket if `n` exceeds all of them.
   Zero or negative values pass through unchanged."
  [n]
  (if (pos? n)
    (or (first (drop-while #(< % n) size-buckets))
        (last size-buckets))
    n))

(defn- snap-dimensions
  "Snap w and h to cache-friendly buckets while preserving aspect ratio.
   Snaps the width first, then derives the height from the original
   aspect ratio (also snapped up) so the image is always slightly
   oversized but never distorted.
   Returns [0 0] for zero, negative, or NaN inputs."
  [w h]
  (if (and (number? w) (number? h)
           (pos? w) (pos? h)
           (js/isFinite w) (js/isFinite h))
    (let [snapped-w (snap-to-bucket w)
          aspect    (/ h w)
          raw-h     (* snapped-w aspect)
          snapped-h (snap-to-bucket raw-h)]
      [snapped-w snapped-h])
    [0 0]))

(defn preload-image
  "Preloads an image and waits for full decode before calling on-success.
   Uses .decode() which ensures the image is fully decoded and ready to
   render without layout shift."
  [url on-success on-error]
  (let [image (js/Image.)]
    (set! (.-onload image)
          (fn [_]
            (if (.-decode image)
              (-> (.decode image)
                  (.then (fn [] (on-success nil)))
                  (.catch (fn [_] (on-success nil)))) ;; decode fail is rare; show anyway
              (on-success nil))))
    (set! (.-onerror image) on-error)
    (set! (.-src image) url)))

(defnc lazy-image
  "Renders an image element with lazy loading using imgix API. The image will only load when the `should-load?` flag is set to true.
  
  Parameters:
  - src: The imgix image source URL.
  - w: Target width in pixels.
  - h: Target height in pixels.
  - fp-x: Focal point x-coordinate (0-1).
  - fp-y: Focal point y-coordinate (0-1).
  - should-load?: A boolean value determining if the image should be loaded.
  - transition: GSAP transition object for intro animation.
  - on-intro-completed: Callback function when intro animation completes.

  Returns:
  - An image element if the image is loaded, otherwise a div element with a gray background.

  Example usage:
  (lazy-image {:src \"https://example.imgix.net/image.jpg\"
               :w 1920
               :h 1080
               :fp-x 0.5
               :fp-y 0.5
               :should-load? true})"
  [{:keys [src w h fp-x fp-y fit object-fit should-load? transition on-intro-completed children]}]

  (let [;; Snap dimensions to cache-friendly buckets, preserving aspect ratio.
        [w h] (snap-dimensions w h)

        ;; imgix best practices: use auto format, auto compression, and fit=crop with focal point
        base-params (hooks/use-memo
                     [fp-x fp-y]
                     (str "?fit=" (or fit "clip")
                          "&crop=focalpoint"
                          "&fp-x=" (or fp-x 0.5)
                          "&fp-y=" (or fp-y 0.5)
                          "&auto=format,compress"
                          "&q=75"))

        ;; Primary src with target dimensions 
        img-src (hooks/use-memo
                 [src base-params w h]
                 (str src base-params "&w=" w "&h=" h))

        ;; imgix srcset best practice: use DPR (device pixel ratio) for responsive images
        ;; Generate srcset for 1x, 1.5x, 2x, and 3x displays
        img-src-set (hooks/use-memo
                     [src base-params w h]
                     (str src base-params "&w=" w "&h=" h "&dpr=1 1x, "
                          src base-params "&w=" w "&h=" h "&dpr=1.5 1.5x, "
                          src base-params "&w=" w "&h=" h "&dpr=2 2x, "
                          src base-params "&w=" w "&h=" h "&dpr=3 3x"))

        sizes "100vw"

        ;; Layout mode for the <img> element:
        ;; - "cover" (default): absolute-positioned, fills container, crops excess.
        ;;   Image cannot overflow because inset-0 pins it to the container edges.
        ;; - "contain": absolute-positioned, fits within container, letterboxed.
        ;; - "none": normal flow, w-full h-auto (image height dictates layout).
        img-class (case object-fit
                    "cover"   "absolute inset-0 w-full h-full object-cover block"
                    "contain" "absolute inset-0 w-full h-full object-contain block"
                    "fill"    "absolute inset-0 w-full h-full object-fill block"
                    "none"    "w-full h-auto block"
                    ;; default: cover
                    "absolute inset-0 w-full h-full object-cover block")

        ref (hooks/use-ref "lazy-image-ref")
        overlay-ref (hooks/use-ref "overlay-ref")

        ;; Two-phase loading:
        ;; 1. preloaded? — image bytes are cached (triggers DOM render of <img>)
        ;; 2. painted?   — the actual <img> element has fired onLoad (safe to show overlays)
        [preloaded? set-preloaded!] (hooks/use-state false)
        [painted? set-painted!] (hooks/use-state false)

        on-success-handler (hooks/use-callback
                            :once
                            (fn [_]
                              (set-preloaded! true)))

        on-error-handler (hooks/use-callback
                          :once
                          (fn [_]
                            (set-preloaded! true)))

        on-img-load (hooks/use-callback
                     :once
                     (fn [_]
                       (set-painted! true)))]

    (hooks/use-effect
     [img-src w h should-load? preloaded?]

     (when (and should-load?
                (not preloaded?)
                (pos? w) (pos? h))
       (preload-image img-src
                      on-success-handler
                      on-error-handler)))

    (hooks/use-layout-effect
     [painted?]
     (when painted?
       (gsap/to-ref ref (merge
                         transition
                         {:onComplete on-intro-completed}))

       (gsap/to-ref overlay-ref (merge
                                 transition
                                 {:delay 0.5
                                  :onComplete on-intro-completed}))))

    (d/div {:class "relative w-full h-full min-w-0"}

           (if preloaded?
             (d/div {:style {:opacity 0}
                     :ref ref
                     :class "relative w-full h-full"}
                    (d/img {:srcSet img-src-set
                            :src img-src
                            :sizes sizes
                            :alt ""
                            :class img-class
                            :onLoad on-img-load})
                    (when painted?
                      (d/div {:style {:opacity 0}
                              :ref overlay-ref}
                             (when children
                               children))))

             ;; Minimal loading indicator — three pulsing dots
             (d/div {:class "flex items-center justify-center w-full h-full"}
                    (d/div {:style {:display "flex" :gap "6px"}}
                           (d/span {:style {:width "8px"
                                            :height "8px"
                                            :border-radius "50%"
                                            :background "#9ca3af"
                                            :animation "lazy-img-pulse 1s ease-in-out infinite"
                                            :animation-delay "0ms"}})
                           (d/span {:style {:width "8px"
                                            :height "8px"
                                            :border-radius "50%"
                                            :background "#9ca3af"
                                            :animation "lazy-img-pulse 1s ease-in-out infinite"
                                            :animation-delay "200ms"}})
                           (d/span {:style {:width "8px"
                                            :height "8px"
                                            :border-radius "50%"
                                            :background "#9ca3af"
                                            :animation "lazy-img-pulse 1s ease-in-out infinite"
                                            :animation-delay "400ms"}})))))))
