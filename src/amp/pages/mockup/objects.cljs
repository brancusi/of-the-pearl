(ns amp.pages.mockup.objects
  (:require ["three" :as THREE]
            ["three/addons/lines/Line2.js" :refer [Line2]]
            ["three/addons/lines/LineMaterial.js" :refer [LineMaterial]]
            ["three/addons/lines/LineGeometry.js" :refer [LineGeometry]]
            [threeagent.entity :as entity]))

(defn create-sky-gradient-texture
  "Creates a vertical gradient canvas texture simulating a warm sky/sun environment."
  []
  (let [^js canvas (.createElement js/document "canvas")
        _ (set! (.-width canvas) 2)
        _ (set! (.-height canvas) 512)
        ^js ctx (.getContext canvas "2d")
        ^js gradient (.createLinearGradient ctx 0 0 0 512)]
    ;; Sky gradient: soft blue top → warm peach horizon → light cream bottom
    (.addColorStop gradient 0.0 "#7EC8E3")
    (.addColorStop gradient 0.3 "#B8DBE8")
    (.addColorStop gradient 0.5 "#E8D5C4")
    (.addColorStop gradient 0.7 "#F5EDE4")
    (.addColorStop gradient 1.0 "#FAF6F0")
    (set! (.-fillStyle ctx) gradient)
    (.fillRect ctx 0 0 2 512)
    (let [^js texture (THREE/CanvasTexture. canvas)]
      (set! (.-needsUpdate texture) true)
      texture)))

(defn configure-shadow-camera!
  "Traverses scene to find DirectionalLight and configure its shadow camera
   for proper coverage. Marks each light so it's only configured once."
  [^js scene]
  (when scene
    (.traverse scene
               (fn [^js obj]
                 (when (and (instance? THREE/DirectionalLight obj)
                            (not (.-_shadowConfigured obj)))
                   (let [^js shadow (.-shadow obj)
                         ^js shadow-cam (.-camera shadow)
                         size 120]
                     (set! (.-left shadow-cam) (- size))
                     (set! (.-right shadow-cam) size)
                     (set! (.-top shadow-cam) size)
                     (set! (.-bottom shadow-cam) (- size))
                     (set! (.-near shadow-cam) 0.5)
                     (set! (.-far shadow-cam) 500)
                     (set! (.. shadow -mapSize -x) 4096)
                     (set! (.. shadow -mapSize -y) 4096)
                     (set! (.-bias shadow) -0.0001)
                     (set! (.-radius shadow) 2)
                     (set! (.-blurSamples shadow) 16)
                     ;; Dispose old shadow map so new mapSize takes effect
                     (when-let [^js m (.-map shadow)]
                       (.dispose m)
                       (set! (.-map shadow) nil))
                     (set! (.-_shadowConfigured obj) true)))))))

(defn create-edge-box
  "Creates a box rendered as edge lines only (like a line drawing).
   Uses Line2 for thick lines that work across all platforms.
   All edges are rendered in a fixed dark grey color."
  [config]
  (let [{:keys [position width height depth]} config
        hw (/ width 2)
        hh (/ height 2)
        hd (/ depth 2)
        ;; Define the 12 edges of a box as line segments
        ;; Each edge is defined by start and end points
        edges [;; Bottom face edges
               [(- hw) (- hh) (- hd)  hw (- hh) (- hd)]     ; back
               [hw (- hh) (- hd)  hw (- hh) hd]             ; right
               [hw (- hh) hd  (- hw) (- hh) hd]             ; front
               [(- hw) (- hh) hd  (- hw) (- hh) (- hd)]     ; left
               ;; Top face edges
               [(- hw) hh (- hd)  hw hh (- hd)]             ; back
               [hw hh (- hd)  hw hh hd]                     ; right
               [hw hh hd  (- hw) hh hd]                     ; front
               [(- hw) hh hd  (- hw) hh (- hd)]             ; left
               ;; Vertical edges
               [(- hw) (- hh) (- hd)  (- hw) hh (- hd)]     ; back-left
               [hw (- hh) (- hd)  hw hh (- hd)]             ; back-right
               [hw (- hh) hd  hw hh hd]                     ; front-right
               [(- hw) (- hh) hd  (- hw) hh hd]]            ; front-left
        ;; Create a group to hold all edge lines
        ^js group (THREE/Group.)
        ;; Edge color: use :outline-color from config or default dark grey
        edge-color (THREE/Color. (or (:outline-color config) 0x444444))
        line-width (or (:line-width config) 3)]
    ;; Create each edge as a Line2
    (doseq [edge edges]
      (let [^js geometry (LineGeometry.)
            _ (.setPositions geometry (clj->js edge))
            ^js material (LineMaterial. #js {:color (.getHex edge-color)
                                             :linewidth line-width
                                             :resolution (THREE/Vector2. js/window.innerWidth js/window.innerHeight)
                                             :depthTest true
                                             :depthWrite false
                                             :polygonOffset true
                                             :polygonOffsetFactor -1
                                             :polygonOffsetUnits -1})
            ^js line (Line2. geometry material)]
        (.add group line)))
    ;; Position the group
    (when position
      (let [^js group-pos (.-position group)]
        (.set group-pos (nth position 0) (nth position 1) (nth position 2))))
    group))

(defn create-selectable-box
  "Creates a box mesh with userData for click-to-select identification."
  [config]
  (let [{:keys [position width height depth color cast-shadow block-info]} config
        ^js geometry (THREE/BoxGeometry. width height depth)
        ^js material (THREE/MeshStandardMaterial. #js {:color (or color "gray")})
        ^js mesh (THREE/Mesh. geometry material)]
    (set! (.-castShadow mesh) (boolean cast-shadow))
    ;; Store block info on userData so raycasting can identify this block
    (set! (.. mesh -userData -blockInfo)
          #js {:dims (clj->js (:dims block-info))
               :note (or (:note block-info) nil)
               :color (or (:color block-info) "gray")})
    (when position
      (let [^js p (.-position mesh)]
        (.set p (nth position 0) (nth position 1) (nth position 2))))
    mesh))

(defn create-ground-plane
  "Creates a textured ground plane or thick pedestal block using a checker-grid image.
   The image is tiled via RepeatWrapping so each tile covers (square-size * 2) world units.
   Options:
     :width        - plane width in world units  (default 500)
     :depth        - plane depth in world units  (default 500)
     :height       - block thickness; 0 or nil = flat plane (default 0)
     :square-size  - world-unit size of one checker square (default 12, i.e. 1 ft)
     :texture-path - path to the checker image  (default \"/images/graphics/checker-grid-grey.png\")"
  [config]
  (let [{:keys [width depth height square-size texture-path position]
         :or {width 500 depth 500 height 0 square-size 12
              texture-path "/images/graphics/checker-grid-grey.png"}} config
        ^js loader (THREE/TextureLoader.)
        ^js texture (.load loader texture-path)
        ;; One image tile = 2x2 checker squares, so one tile = 2 * square-size world units
        tile-world-size (* 2 square-size)
        repeat-x (/ width tile-world-size)
        repeat-y (/ depth tile-world-size)]
    ;; Configure tiling
    (set! (.-wrapS texture) THREE/RepeatWrapping)
    (set! (.-wrapT texture) THREE/RepeatWrapping)
    (.set (.-repeat texture) repeat-x repeat-y)
    (set! (.-colorSpace texture) THREE/SRGBColorSpace)
    (if (and height (pos? height))
      ;; Thick block / pedestal: checker texture on all faces, extends downward
      (let [^js geometry (THREE/BoxGeometry. width height depth)
            ;; Bake the downward offset into geometry so top face sits at y=0.
            ;; This prevents threeagent from overwriting the position offset.
            _ (.translate geometry 0 (- (/ height 2)) 0)
            ^js material (THREE/MeshStandardMaterial.
                          #js {:map       texture
                               :color     "#f0ebe5"  ;; warm cream tint — looks good in light & dark modes
                               :roughness 0.85
                               :metalness 0.0})
            ^js mesh (THREE/Mesh. geometry material)]
        (set! (.-receiveShadow mesh) true)
        (set! (.-castShadow mesh) true)
        (when position
          (.set (.-position mesh) (nth position 0) (nth position 1) (nth position 2)))
        mesh)
      ;; Original flat plane
      (let [^js geometry (THREE/PlaneGeometry. width depth)
            ;; Bake rotation into geometry vertices so threeagent won't overwrite it
            _ (.rotateX geometry (- (/ js/Math.PI 2)))
            ^js material (THREE/MeshStandardMaterial.
                          #js {:map       texture
                               :color     "#f0ebe5"
                               :roughness 0.85
                               :metalness 0.0})
            ^js mesh (THREE/Mesh. geometry material)]
        (set! (.-receiveShadow mesh) true)
        (when position
          (.set (.-position mesh) (nth position 0) (nth position 1) (nth position 2)))
        mesh))))

;; Entity types map — use def (not defonce) so new entity types register on hot reload.
;; Use var reference #' so function changes are picked up.
(def custom-entity-types
  {:edge-box
   (reify entity/IEntityType
     (create [_ _ config]
       (#'create-edge-box config))
     (destroy! [_ _ ^js obj _]
       (when obj
         (.traverse obj
                    (fn [^js child]
                      (when (.-geometry child)
                        (.dispose (.-geometry child)))
                      (when (.-material child)
                        (.dispose (.-material child))))))))
   :selectable-box
   (reify entity/IEntityType
     (create [_ _ config]
       (#'create-selectable-box config))
     (destroy! [_ _ ^js obj _]
       (when obj
         (when (.-geometry obj) (.dispose (.-geometry obj)))
         (when (.-material obj) (.dispose (.-material obj))))))
   :ground-plane
   (reify entity/IEntityType
     (create [_ _ config]
       (#'create-ground-plane config))
     (destroy! [_ _ ^js obj _]
       (when obj
         (when (.-geometry obj) (.dispose (.-geometry obj)))
         (when-let [^js mat (.-material obj)]
           (when-let [^js m (.-map mat)] (.dispose m))
           (.dispose mat)))))})
