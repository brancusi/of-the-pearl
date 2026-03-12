(ns amp.pages.mockup.renderers.simple-stack-formation
  "Renderer for simple stacked-box formations.
   Converts a vector of levels (each with :bounds and :layers) into a
   threeagent scene tree with lighting, ground plane, and selection outlines."
  (:require [amp.pages.mockup.geometry :as geometry]))

(declare build-box-tree)

(defn- build-layer-elements
  "Builds threeagent elements for a single layer group at a given y-offset.
   Returns a vector of elements.
   When a box has no :dims, falls back to :bounds then to the parent effective-bounds.
   Children use the box's :bounds (or :dims) as their effective-bounds."
  [layer-group y-offset effective-bounds base-x base-z wireframe?]
  (into []
        (mapcat identity
                (for [box layer-group
                      :let [{:keys [align dims bounds color offset]} box
                            sub-layers (:layers box)
                            ;; Effective dims for this box: dims > bounds > parent effective-bounds
                            effective-dims (or dims bounds effective-bounds)
                            [dw dh dd] effective-dims
                            [rel-x rel-z] (geometry/calculate-position align effective-bounds effective-dims)
                            [off-x off-y off-z] (or offset [0 0 0])
                            x (+ base-x rel-x off-x)
                            z (+ base-z rel-z off-z)
                            box-y (+ y-offset (/ dh 2) off-y)
                            ;; Children use box's bounds if set, else box's dims, else parent bounds
                            child-bounds (or bounds dims effective-bounds)]]
                  (let [;; Only render a visible box if :dims is explicitly set
                        box-elem (when dims
                                   (if wireframe?
                                     [:edge-box {:position [x box-y z]
                                                 :width dw
                                                 :height dh
                                                 :depth dd
                                                 :color (or color "gray")}]
                                     [:selectable-box {:position [x box-y z]
                                                       :cast-shadow true
                                                       :width dw
                                                       :height dh
                                                       :depth dd
                                                       :color (or color "gray")
                                                       :block-info {:dims dims
                                                                    :note (:note box)
                                                                    :color (or color "gray")}}]))]
                    (if (seq sub-layers)
                      (let [child-elems (build-box-tree
                                         [{:bounds child-bounds :layers sub-layers}]
                                         wireframe?)]
                        (cond-> []
                          box-elem (conj box-elem)
                          true (conj (into [:object {:position [x (+ y-offset dh) z]}]
                                           child-elems))))
                      (if box-elem
                        [box-elem]
                        [])))))))

(defn- build-box-tree
  "Recursively builds threeagent elements from stacked levels.
   Each level has :bounds and :layers. Layers within a level stack vertically —
   each layer group sits on top of the previous one's tallest content (including children).
   When a box has nested :layers, children are wrapped in an [:object] group
   positioned at the top of the parent box, making child positions relative."
  [levels wireframe?]
  (loop [remaining levels
         y-offset 0
         prev-bounds nil
         prev-offset [0 0]
         elements []]
    (if (empty? remaining)
      elements
      (let [{:keys [bounds layers]} (first remaining)
            effective-bounds (or bounds prev-bounds)
            [base-x base-z] (if bounds [0 0] prev-offset)
            ;; Process each layer group sequentially, stacking vertically
            {:keys [elems total-h]}
            (reduce (fn [{:keys [elems layer-y]} layer-group]
                      (let [layer-elems (build-layer-elements
                                         layer-group layer-y effective-bounds
                                         base-x base-z wireframe?)
                            h (geometry/layer-group-height layer-group)]
                        {:elems (into elems layer-elems)
                         :layer-y (+ layer-y h)
                         :total-h (+ layer-y h)}))
                    {:elems [] :layer-y y-offset :total-h y-offset}
                    layers)
            first-box (-> layers first first)
            first-dims (or (:dims first-box) (:bounds first-box))
            first-align (:align first-box)
            [first-rel-x first-rel-z] (geometry/calculate-position first-align effective-bounds (or first-dims effective-bounds))
            next-offset [(+ base-x first-rel-x) (+ base-z first-rel-z)]
            next-bounds (or first-dims effective-bounds)]
        (recur (rest remaining)
               total-h
               next-bounds
               next-offset
               (into elements elems))))))

(defn render
  "Renders a simple stacked-box formation.
   Takes the full mockup-data map and an options map.
   Extracts :data (levels) and :lighting from mockup-data.
   Options:
     :wireframe?   - if true, renders boxes in wireframe mode (default: false)
     :show-ground? - if true, adds a ground plane (default: true)
     :selection    - selected block info map for rendering selection outline."
  ([mockup-data] (render mockup-data {}))
  ([mockup-data {:keys [wireframe? show-ground? selection]
                 :or {wireframe? false
                      show-ground? true}}]
   (let [elements (:data mockup-data)
         lighting (:lighting mockup-data)
         boxes (build-box-tree elements wireframe?)
         lights (or lighting
                    [[:ambient-light {:intensity 0.7}]
                     [:directional-light {:cast-shadow true
                                          :position [80 120 60]
                                          :intensity 1.5}]])
         selection-outline
         (when selection
           (let [[wx wy wz] (:world-position selection)]
             [:edge-box {:position [wx wy (+ wz 4)]
                         :width  (* 1.02 (:width selection))
                         :height (* 1.02 (:height selection))
                         :depth  (* 1.02 (:depth selection))
                         :outline-color 0x00bcd4
                         :line-width 4}]))]
     (cond-> (into (into [:object {:position [0 0 -4]}]
                         (conj (vec lights)
                               ;; Ground plane container — always present to keep child indices stable
                               [:object {}
                                (when show-ground?
                                  [:ground-plane {:position [0 0 0]
                                                  :width 500
                                                  :depth 500
                                                  :height 12
                                                  :square-size 12}])]))
                   boxes)
       selection-outline (conj selection-outline)))))
