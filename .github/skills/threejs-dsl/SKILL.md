---
name: threejs-dsl
description: Reference for building 3D scenes in the Armenian Pavilion mockup viewer — threeagent DSL, Three.js fundamentals, custom entity types, renderer system, and Firebase data format.
---

# ThreeJS DSL — Skills Reference

Reference for building 3D scenes in the Armenian Pavilion mockup viewer.
Covers threeagent (the ClojureScript wrapper), Three.js fundamentals, custom entity types, and the renderer system.

---

## Coordinate System

Three.js uses a **right-handed Y-up** coordinate system:

- **X** → right (positive) / left (negative)
- **Y** → up (positive) / down (negative)
- **Z** → toward the viewer (positive) / away (negative)

All positions, rotations, and scales are `[x y z]` vectors.
Transformations are **local-space** — relative to the parent object. Three.js computes world-space automatically through the scene graph hierarchy.

```
      +Y (up)
       |
       |
       +------ +X (right)
      /
     /
   +Z (toward camera)
```

### Alignment Mapping (in this project)

The `geometry/calculate-position` function maps alignment keywords to positions within a bounding box:

| Alignment | X               | Z                     |
| --------- | --------------- | --------------------- |
| `:tl`     | left edge (−X)  | top edge (−Z, "away") |
| `:tr`     | right edge (+X) | top edge (−Z)         |
| `:bl`     | left edge (−X)  | bottom edge (+Z)      |
| `:br`     | right edge (+X) | bottom edge (+Z)      |
| default   | centered        | centered              |

---

## Threeagent Basics (v1.0.1)

[threeagent docs](https://cljdoc.org/d/doughamil/threeagent/1.0.1/doc/introduction) — a reactive scene-graph wrapper around Three.js inspired by Reagent.

### Hiccup Syntax

Scene graphs are vectors — same pattern as Reagent/hiccup:

```clojure
[:entity-type {:prop1 value1 :prop2 value2} & children]
```

### Position, Rotation, Scale

Available on **any** entity via the property map:

```clojure
[:object {:position [10 20 30]
          :rotation [0 (/ js/Math.PI 4) 0]   ;; radians, XYZ Euler
          :scale    [2 2 2]}
  [:box {:width 5 :height 5 :depth 5}]]
```

Transforms are **local-space** — children inherit parent transforms:

```clojure
[:object {:position [2 0 0]}           ;; world: [2 0 0]
  [:box {:position [3 1 0]}]]          ;; world: [5 1 0]
```

### Component Functions

Reusable components are plain ClojureScript functions returning hiccup. Reference them with square brackets (like Reagent):

```clojure
(defn brick [x y z color]
  [:selectable-box {:position [x y z]
                    :cast-shadow true
                    :width 36 :height 12 :depth 18
                    :color color
                    :block-info {:dims [36 12 18] :color color}}])

(defn wall []
  [:object
    [brick 0  6 0 "#e8e0d4"]
    [brick 38 6 0 "#e8e0d4"]])
```

### Reactive State

`threeagent.core/atom` (aliased as `th/atom`) creates a Reagent-compatible reactive atom. Deref-ing it inside a `root` function causes threeagent to re-render when the atom changes:

```clojure
(defonce my-state (th/atom {:count 5}))

(defn root []
  (let [n (:count @my-state)]
    [:object
      (for [i (range n)]
        [:box {:position [0 (* i 14) 0]}])]))
```

### `th/render`

Initializes the Three.js renderer and starts the reactive render loop:

```clojure
(th/render root-fn container
  {:antialias true
   :shadow-map {:enabled true :type THREE/PCFSoftShadowMap}
   :entity-types custom-entity-types   ;; custom entity type registry
   :on-before-render (fn [_] ...)})    ;; per-frame callback
```

Returns a context map with:

- `:threejs-renderer` — the `WebGLRenderer`
- `:threejs-default-camera` — the default `PerspectiveCamera`
- `:threejs-scene` — the `Scene` object
- `:canvas` — the `<canvas>` DOM element

---

## Built-in Entity Types

### Common

| Type        | Three.js Class | Notes                                            |
| ----------- | -------------- | ------------------------------------------------ |
| `:object`   | `Object3D`     | Invisible grouping container                     |
| `:group`    | `Group`        | Same as `:object`                                |
| `:instance` | —              | Injects a raw Three.js object via `:object` prop |

### Geometry (Mesh + Geometry)

All geometry entities accept `:material`, `:cast-shadow`, `:receive-shadow` plus shape-specific props.

| Type            | Key Props                                                                          |
| --------------- | ---------------------------------------------------------------------------------- |
| `:box`          | `:width` `:height` `:depth` `:width-segments` `:height-segments` `:depth-segments` |
| `:sphere`       | `:radius` `:width-segments` `:height-segments` `:phi-*` `:theta-*`                 |
| `:cylinder`     | `:radius-top` `:radius-bottom` `:height` `:radial-segments`                        |
| `:cone`         | `:radius` `:height` `:radial-segments`                                             |
| `:plane`        | `:width` `:height`                                                                 |
| `:circle`       | `:radius` `:segments`                                                              |
| `:torus`        | `:radius` `:tube` `:radial-segments` `:tubular-segments`                           |
| `:torus-knot`   | `:radius` `:tube` `:p` `:q`                                                        |
| `:ring`         | `:inner-radius` `:outer-radius`                                                    |
| `:dodecahedron` | `:radius` `:detail`                                                                |
| `:icosahedron`  | `:radius` `:detail`                                                                |
| `:octahedron`   | `:radius` `:detail`                                                                |
| `:tetrahedron`  | `:radius` `:detail`                                                                |
| `:shape`        | `:shape` (a `THREE.Shape` instance)                                                |

### Material

All geometry types accept a `:material` map. Threeagent creates a `MeshStandardMaterial` by default:

```clojure
[:box {:width 10 :height 10 :depth 10
       :material {:color "#e8e0d4"
                  :roughness 0.8
                  :metalness 0.1}}]
```

### Lights

| Type                 | Key Props                                                 |
| -------------------- | --------------------------------------------------------- |
| `:ambient-light`     | `:color` `:intensity`                                     |
| `:directional-light` | `:color` `:intensity` `:cast-shadow` `:shadow`            |
| `:point-light`       | `:color` `:intensity` `:distance` `:decay` `:cast-shadow` |
| `:hemisphere-light`  | `:sky-color` `:ground-color` `:intensity`                 |
| `:spot-light`        | `:color` `:intensity` `:distance` `:angle` `:penumbra`    |
| `:rect-area-light`   | `:color` `:intensity` `:width` `:height`                  |

### Cameras

| Type                   | Props                                            |
| ---------------------- | ------------------------------------------------ |
| `:perspective-camera`  | `:fov` `:aspect` `:near` `:far`                  |
| `:orthographic-camera` | `:left` `:right` `:top` `:bottom` `:near` `:far` |

---

## Custom Entity Types (this project)

Defined in `src/amp/components/threejs/objects.cljs` via the `IEntityType` protocol. Registered in the `custom-entity-types` map passed to `th/render`.

### `:selectable-box`

A `MeshStandardMaterial` box with `userData.blockInfo` for click-to-select raycasting.

```clojure
[:selectable-box {:position [x y z]
                  :cast-shadow true
                  :width 36      ;; X dimension
                  :height 12     ;; Y dimension
                  :depth 18      ;; Z dimension
                  :color "#e8e0d4"
                  :block-info {:dims [36 12 18]
                               :color "#e8e0d4"
                               :note "Row 0, Col 0"}}]
```

- `:block-info` is stored in `mesh.userData.blockInfo` for raycaster hit identification
- `:cast-shadow` enables shadow casting

### `:edge-box`

Wireframe-only box drawn with thick `Line2` edges. Used for selection outlines and wireframe mode.

```clojure
[:edge-box {:position [x y z]
            :width 36 :height 12 :depth 18
            :color "gray"              ;; not used for line color
            :outline-color 0x00bcd4    ;; hex int for line color (default: 0x444444)
            :line-width 4}]            ;; pixel width (default: 3)
```

### `:ground-plane`

A large flat plane with a tiled checker-grid texture. Receives shadows.

```clojure
[:ground-plane {:position [0 0 0]
                :width 500
                :depth 500
                :square-size 12            ;; world units per checker square
                :texture-path "images/graphics/checker-grid-grey.png"}]
```

### Creating New Entity Types

Implement `threeagent.entity/IEntityType`:

```clojure
(require '[threeagent.entity :as entity])

(def my-entity-type
  (reify entity/IEntityType
    (create [_ _system config]
      ;; config is the property map from hiccup
      ;; Return a THREE.Object3D (Mesh, Group, etc.)
      (let [^js mesh (THREE/Mesh. ...)]
        mesh))
    (destroy! [_ _system ^js obj _config]
      ;; Dispose geometry/materials to prevent memory leaks
      (when (.-geometry obj) (.dispose (.-geometry obj)))
      (when (.-material obj) (.dispose (.-material obj))))))
```

Add it to the `custom-entity-types` map in `objects.cljs`:

```clojure
(def custom-entity-types
  {:my-new-type my-entity-type
   :selectable-box ...
   :edge-box ...
   :ground-plane ...})
```

---

## Renderer System

### Architecture

The mockup viewer uses a **renderer registry** pattern. Each renderer is a function `(fn [mockup-data opts])` that returns a threeagent scene tree.

- **Registry**: `renderer-registry` atom in `mockup_view.cljs`
- **Dispatch**: `root` reads `(:renderer mockup-data)` and looks up the corresponding function
- **Default**: `:simple-stack-formation`

```
Firebase EDN → mockup-data map → renderer dispatch → threeagent scene tree → Three.js
```

### Renderer Interface

```clojure
(defn render
  "Returns a threeagent hiccup scene tree."
  [mockup-data opts]
  ;; mockup-data: the full map from Firebase (renderer-specific keys + common ones)
  ;; opts: {:wireframe? bool, :show-ground? bool, :selection map-or-nil}
  [:object {:position [0 0 -4]}
    ;; ... lights, ground plane, scene content
    ])
```

### Standard Scene Shell

Both existing renderers follow this pattern for the outer scene structure:

```clojure
(let [lights (or (:lighting mockup-data)
                 [[:ambient-light {:intensity 0.7}]
                  [:directional-light {:cast-shadow true
                                       :position [80 120 60]
                                       :intensity 1.5}]])]
  (into [:object {:position [px py pz]}]
        (conj (vec lights)
              [:object {}
               (when show-ground?
                 [:ground-plane {:position [0 0 0]
                                 :width 500 :depth 500
                                 :square-size 12}])])))
```

### Existing Renderers

#### `:simple-stack-formation`

**Namespace**: `amp.components.threejs.renderers.simple-stack-formation`

Takes a `:data` key containing a vector of _levels_. Each level has `:bounds` and `:layers`. Layers stack vertically.

```clojure
{:renderer :simple-stack-formation
 :data [{:bounds [96 12 48]
         :layers [[{:dims [96 12 48] :align :tl :color "#ccc"}]
                  [{:dims [48 12 24] :align :br :color "#aaa"}]]}]}
```

#### `:manual-formation`

**Namespace**: `amp.components.threejs.renderers.manual-formation`

Takes a `:scene-graph` key — a flat vector of threeagent hiccup elements that are injected directly into the scene tree.

```clojure
{:renderer :manual-formation
 :scene-graph [[:selectable-box {:position [0 6 0]
                                  :cast-shadow true
                                  :width 36 :height 12 :depth 18
                                  :color "#e8e0d4"
                                  :block-info {:dims [36 12 18]
                                               :color "#e8e0d4"}}]
               [:selectable-box {:position [38 6 0] ...}]]}
```

### Registering a New Renderer

```clojure
;; In your renderer namespace:
(ns amp.components.threejs.renderers.my-renderer)

(defn render [mockup-data opts]
  ;; Extract your data from mockup-data
  ;; Return a threeagent scene tree
  ...)

;; In mockup_view.cljs, add to the registry reset in start[]:
(reset! renderer-registry
  {:simple-stack-formation ssf/render
   :manual-formation       mf/render
   :my-renderer            my-renderer/render})
```

---

## Firebase EDN Data Format

Mockup data is stored as EDN strings in Firebase Realtime Database.

### Common Keys

```clojure
{:name     "Human-readable name"
 :renderer :renderer-keyword           ;; which renderer to use (default: :simple-stack-formation)
 :camera   {:position [200 150 200]    ;; initial camera position [x y z]
             :target   [0 30 0]}       ;; orbit controls look-at target [x y z]
 :lighting [[:ambient-light {:intensity 0.7}]
            [:directional-light {:cast-shadow true
                                  :position [80 120 60]
                                  :intensity 1.5}]]}
```

### Writing Data from the REPL

```clojure
(require '[amp.services.firebase :refer [set-edn]])

(set-edn "piece-id-here"
  {:name     "My Formation"
   :renderer :manual-formation
   :camera   {:position [200 150 200] :target [0 30 0]}
   :scene-graph [...]})
```

View in browser: `http://localhost:8080/mockup?piece=piece-id-here`

---

## Scene Setup Details

Configured in `src/amp/components/threejs/scene.cljs`:

| Setting                 | Value                                                 |
| ----------------------- | ----------------------------------------------------- |
| Shadow map              | `PCFSoftShadowMap`, 4096×4096                         |
| Shadow camera frustum   | 120 units each side                                   |
| Shadow bias             | −0.0001                                               |
| Shadow blur radius      | 2, 16 blur samples                                    |
| Tone mapping            | `ACESFilmicToneMapping`, exposure 0.8                 |
| Pixel ratio cap         | `min(devicePixelRatio, 2)`                            |
| Camera FOV              | 39° (≈50mm lens)                                      |
| Initial camera position | `[100 100 100]`                                       |
| Orbit controls target   | `[0 0 -4]`                                            |
| Sky shader              | Preetham atmospheric model (`Sky` addon)              |
| Sun animation           | 360° azimuth rotation over 190 seconds, 30° elevation |
| Directional light sync  | Light position tracks sun at distance 150             |
| Antialias               | enabled                                               |

---

## Dimension & Scale Conventions

This project uses **millimeters** as the conceptual unit (matching physical brick dimensions), but Three.js units are dimensionless — the scale is set by convention.

Typical brick dimensions used in the project:

- Standard brick: `[36 12 18]` (w × h × d)
- Small brick: `[24 12 24]`
- Ground plane checker: `12` units per square

### Box Positioning

Boxes are positioned by their **center point**. To place a box sitting on the ground (Y = 0), offset Y by half its height:

```clojure
;; A 12-unit tall box sitting on the ground:
[:selectable-box {:position [0 6 0]    ;; 6 = 12/2
                  :width 36 :height 12 :depth 18 ...}]
```

### Stacking

To stack a second box on top of the first:

```clojure
;; First box: Y center = 6  (top face at Y = 12)
;; Second box: Y center = 12 + 6 = 18  (bottom at Y = 12, top at Y = 24)
[:selectable-box {:position [0 6  0] :height 12 ...}]
[:selectable-box {:position [0 18 0] :height 12 ...}]
```

Formula for Y center of box at layer `n` (0-indexed), uniform height `h`, gap `g`:

$$y = \frac{h}{2} + n \cdot (h + g)$$

### Running Bond Offset

Every other row offset by half a brick width + gap:

```clojure
(let [x-off (if (odd? row) (/ (+ w gap) 2) 0)
      x (+ x-off (* col (+ w gap)))]
  ...)
```

---

## ClojureScript / Three.js Interop Tips

### Type Hints

Use `^js` on Three.js objects to avoid advanced compilation renaming:

```clojure
(let [^js renderer (:threejs-renderer ctx)
      ^js camera   (:threejs-default-camera ctx)]
  (.setSize renderer width height))
```

**Warning**: `^js` inside `:keys` destructuring silently breaks. Use explicit keyword lookups instead:

```clojure
;; ❌ BAD — ^js in :keys won't work
(let [{:keys [^js renderer]} ctx] ...)

;; ✅ GOOD — explicit lookup
(let [^js renderer (:threejs-renderer ctx)] ...)
```

### Property Access

```clojure
;; Read property
(.-position mesh)

;; Nested property
(.. mesh -material -color)

;; Set property
(set! (.-castShadow mesh) true)
(set! (.. shadow -mapSize -x) 4096)
```

### Three.js Constructor Calls

```clojure
(THREE/BoxGeometry. 10 10 10)
(THREE/MeshStandardMaterial. #js {:color "#ff0000"})
(THREE/Vector3. 1 2 3)
```

### Hot Reload

- Use `def` (not `defonce`) for registries that need to update on reload
- Use `defonce` for persistent state atoms
- `^:dev/before-load` and `^:dev/after-load` hooks in shadow-cljs for teardown/setup
- Reset registries explicitly in the `^:dev/after-load` hook

---

## Quick Reference: Minimal Scene Examples

### Single Box on Ground

```clojure
[:object {:position [0 0 -4]}
  [:ambient-light {:intensity 0.7}]
  [:directional-light {:cast-shadow true :position [80 120 60] :intensity 1.5}]
  [:ground-plane {:width 500 :depth 500 :square-size 12}]
  [:selectable-box {:position [0 6 0]
                    :cast-shadow true
                    :width 36 :height 12 :depth 18
                    :color "#e8e0d4"
                    :block-info {:dims [36 12 18] :color "#e8e0d4"}}]]
```

### Column of Stacked Boxes

```clojure
(let [w 36 h 12 d 18 gap 2]
  [:object {:position [0 0 -4]}
    [:ambient-light {:intensity 0.7}]
    [:directional-light {:cast-shadow true :position [80 120 60] :intensity 1.5}]
    [:ground-plane {:width 500 :depth 500 :square-size 12}]
    (for [row (range 5)]
      [:selectable-box {:position [0 (+ (/ h 2) (* row (+ h gap))) 0]
                        :cast-shadow true
                        :width w :height h :depth d
                        :color "#e8e0d4"
                        :block-info {:dims [w h d] :color "#e8e0d4"}}])])
```

### Using `set-edn` to Push a Manual Formation

```clojure
(require '[amp.services.firebase :refer [set-edn]])

(set-edn "my-piece"
  {:name "My Scene"
   :renderer :manual-formation
   :camera {:position [200 150 200] :target [0 30 0]}
   :scene-graph
   [[:selectable-box {:position [0 6 0]
                      :cast-shadow true
                      :width 36 :height 12 :depth 18
                      :color "#e8e0d4"
                      :block-info {:dims [36 12 18] :color "#e8e0d4"}}]]})
;; View at: /mockup?piece=my-piece
```
