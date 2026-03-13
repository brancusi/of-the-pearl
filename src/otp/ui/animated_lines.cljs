(ns otp.ui.animated-lines
  (:require
   ["gsap" :refer [gsap]]
   ["gsap/SplitText" :refer [SplitText]]
   [otp.lib.defnc :refer [defnc]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))


;; ---------------------------------------------------------------------------
;; Effect registry — per-type defaults
;; ---------------------------------------------------------------------------

(def ^:private effect-defaults
  {:strike-through {:duration  0.4
                    :ease      "power2.inOut"
                    :thickness 2
                    :color     "currentColor"}})

;; ---------------------------------------------------------------------------
;; DOM helpers  (called inside the layout effect, outside React's tree)
;; ---------------------------------------------------------------------------

(defn- populate-container!
  "Builds line elements inside `container-el` via the DOM API.
   Sets forwarded refs (`:ref` in each line map) to the created elements."
  [container-el lines separator]
  (set! (.-innerHTML container-el) "")
  (let [tag      (if (= separator :br) "span" "div")
        last-idx (dec (count lines))]
    (doseq [[i {:keys [text] line-class :class line-ref :ref}]
            (map-indexed vector lines)]
      (let [el (js/document.createElement tag)]
        (when line-class
          (set! (.-className el) line-class))
        (set! (.-textContent el) text)
        (.appendChild container-el el)
        (when line-ref (reset! line-ref el))
        (when (and (= separator :br) (< i last-idx))
          (.appendChild container-el (js/document.createElement "br")))))))

(defn- create-decoration!
  "Creates a single decoration DOM element, appends it to `parent-el`,
   returns the element.  Effect-specific keys are merged over defaults
   so callers can pass any type-specific param."
  [parent-el line-idx effect]
  (let [eff-type (:type effect)
        merged   (merge (get effect-defaults eff-type) (dissoc effect :delay))]
    (case eff-type
      :strike-through
      (let [{:keys [thickness color offset-y]} merged
            span (js/document.createElement "span")]
        (.setAttribute span "data-fx-line" (str line-idx))
        (.setAttribute span "data-fx-type" (name eff-type))
        (let [s (.-style span)]
          (set! (.-position s) "absolute")
          (set! (.-left s) "0")
          (set! (.-right s) "0")
          (set! (.-top s) (or offset-y "50%"))
          (set! (.-height s) (str thickness "px"))
          (set! (.-backgroundColor s) color)
          (set! (.-transformOrigin s) "left center")
          (set! (.-pointerEvents s) "none"))
        (.appendChild parent-el span)
        span)
      ;; Unknown effect type — no-op
      nil)))

(defn- add-decorations!
  "Creates decoration DOM elements on SplitText line wrappers and queues
   GSAP `.from` tweens on `tl`."
  [tl container-el split-lines lines]
  (doseq [[i {:keys [effects]}] (map-indexed vector lines)
          :when (seq effects)]
    (when-let [line-el (aget split-lines i)]
      (set! (.. line-el -style -position) "relative")
      (doseq [{eff-type :type :as effect} effects]
        (create-decoration! line-el i effect)
        (let [merged (merge (get effect-defaults eff-type) effect)
              sel    (str "[data-fx-line=\"" i "\"]"
                          "[data-fx-type=\"" (name eff-type) "\"]")
              els    (.querySelectorAll container-el sel)]
          (when (pos? (.-length els))
            (case eff-type
              :strike-through
              (.from tl els
                     #js {:scaleX   0
                          :duration (:duration merged)
                          :ease     (:ease merged)}
                     (or (:delay effect) 0))
              nil)))))))

;; ---------------------------------------------------------------------------
;; Stable config fingerprint
;; ---------------------------------------------------------------------------

(defn- config-fingerprint
  "Value-based hash of the animation-relevant props.  Refs are excluded so
   that the hash is stable across re-renders where only object identity
   changes."
  [lines split-type text-delay text-stagger separator]
  (hash [(mapv #(select-keys % [:text :class :effects]) lines)
         split-type text-delay text-stagger separator]))

;; ---------------------------------------------------------------------------
;; Component
;; ---------------------------------------------------------------------------

(defnc animated-lines
  "Renders lines of text with a GSAP entrance animation and optional
   per-line effects (animated decorations).

  Each line map in `lines` supports:
  - `:text`    — the string to display (required).
  - `:class`   — CSS / Tailwind classes applied to the line wrapper.
  - `:ref`     — a React ref forwarded to the wrapper element.
  - `:effects` — vec of effect maps for GSAP-animated decorations.

    Common keys (all effect types):
      `:type`      — keyword, e.g. :strike-through (required).
      `:delay`     — position on the GSAP timeline in seconds (default 0).
      `:duration`  — tween duration in seconds (type default).
      `:ease`      — GSAP ease string (type default).

    :strike-through keys:
      `:thickness` — line height in px (default 2).
      `:color`     — CSS color string (default \"currentColor\").
      `:offset-y`  — CSS top value (default \"50%\").

  Props:
  - `lines`        — vec of line maps.
  - `class`        — container class string.
  - `style`        — container inline style map.
  - `split-type`   — SplitText type (default \"lines\").
  - `text-delay`   — delay before entrance (default 0.3).
  - `text-stagger` — stagger between animated units (default 0.05).
  - `separator`    — :br | :div (default :div).

  Implementation notes:
  - All inner DOM is built via the DOM API inside a layout-effect, not in
    React's render tree.  This means SplitText's DOM modifications never
    conflict with React reconciliation.
  - The effect depends on a value-based hash of the animation config.  On
    hot-code-reload the hash is unchanged, so the effect does NOT re-run
    and the existing SplitText / decoration / GSAP state survives intact."
  [{:keys [lines class style split-type text-delay text-stagger separator]
    :or   {split-type   "lines"
           text-delay   0.3
           text-stagger 0.05
           separator    :div}}]

  (let [container-ref (hooks/use-ref nil)
        tl-ref        (hooks/use-ref nil)
        split-ref     (hooks/use-ref nil)
        cfg-key       (config-fingerprint
                       lines split-type text-delay text-stagger separator)]

    (hooks/use-layout-effect
     [cfg-key]
     (when-let [el @container-ref]
       ;; 1. Build line elements via DOM API (outside React's tree)
       (populate-container! el lines separator)

       ;; 2. Run SplitText
       (let [split   (SplitText. el #js {:type split-type})
             targets (case split-type
                       "chars"       (.-chars split)
                       "chars,lines" (.-chars split)
                       (.-lines split))
             tl      (.timeline gsap)
             split-lines (.-lines split)]
         (reset! tl-ref tl)
         (reset! split-ref split)

         ;; 3. Update forwarded refs to SplitText line wrappers (more
         ;;    accurate for measurement after split restructures the DOM)
         (when (and split-lines (pos? (.-length split-lines)))
           (doseq [[i {line-ref :ref}] (map-indexed vector lines)
                   :when line-ref]
             (when-let [wrapper (aget split-lines i)]
               (reset! line-ref wrapper))))

         ;; 4. Entrance animation
         (.from tl targets
                #js {:opacity  0.25
                     :y        15
                     :duration 0.5
                     :stagger  text-stagger
                     :ease     "power2.out"}
                text-delay)

         ;; 5. Per-line decoration effects (strike-through, etc.)
         (when (and split-lines (pos? (.-length split-lines)))
           (add-decorations! tl el split-lines lines))

         (fn []
           (when-let [t @tl-ref]
             (.kill t)
             (reset! tl-ref nil))
           (when-let [s @split-ref]
             (.revert s)
             (reset! split-ref nil))))))

    ;; Render only the container — React never manages children, so
    ;; SplitText's DOM survives reconciliation on hot-reload.
    (if (= separator :br)
      (d/p {:ref container-ref :class class :style style})
      (d/div {:ref container-ref :class class :style style}))))
