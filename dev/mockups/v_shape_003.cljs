(ns mockups.v-shape-003
  (:require [amp.services.firebase :refer [set-edn]]))


(def ^:private DEG->RAD (/ js/Math.PI 180))

(defn- deg->rad [v]
  (mapv #(* % DEG->RAD) v))

(defn row-block-spec
  "Returns the block spec {:dims [l w h] :color c} for the given row index.
   Even rows (0, 2, 4 …) use :even, odd rows use :odd."
  [{:keys [even odd]} row]
  (if (even? row) even odd))

(defn generate-stepped-wall
  "Generates a stepped wall formation as a vector of threeagent hiccup elements.

   block-config:
     :even      - {:dims [length width height] :color str :omit [col-indices]} for even rows
     :odd       - {:dims [length width height] :color str :omit [col-indices]} for odd rows
     :transform - [x y z] position of the whole structure (default [0 0 0])
     :rotation  - [rx ry rz] rotation in degrees (default [0 0 0])

   The :omit vector lists column indices that should be skipped (not rendered)
   but still occupy space — so spacing of remaining blocks is unchanged.

   wall-config:
     :gap           - uniform gap between all blocks horizontally (default 2)
     :rows          - vector of column counts per row, bottom to top
                      e.g. [10 9 8 7 6 5 4 3 2 1] = 10 cols on row 0, 9 on row 1, …
     :bond-offset?  - if true, odd rows shift by half a block (running bond) (default true)

   Returns a single [:object ...] group that can be composed with others in a scene-graph vec.

   Dims convention: [length width height]
     length → Three.js :width  (X axis)
     width  → Three.js :depth  (Z axis)
     height → Three.js :height (Y axis)"
  [block-config {:keys [gap rows bond-offset?]
                 :or   {gap 2 bond-offset? true}}]
  (let [transform (or (:transform block-config) [0 0 0])
        rotation  (when-let [r (:rotation block-config)] (deg->rad r))
        num-rows  (count rows)
        ;; Pre-calculate cumulative Y bottom positions for each row,
        ;; accounting for alternating heights
        y-bottoms (loop [row 0 y 0 acc []]
                    (if (>= row num-rows)
                      acc
                      (let [[_l _w h] (:dims (row-block-spec block-config row))]
                        (recur (inc row)
                               (+ y h)
                               (conj acc y)))))
        boxes
        (for [row (range num-rows)
              col (range (nth rows row))
              :let [{:keys [dims color omit]} (row-block-spec block-config row)
                    omit-set (set (or omit []))]
              :when (not (omit-set col))
              :let [[l w h]   dims
                    ;; Map [length width height] → Three.js axes
                    three-w   l       ;; X
                    three-h   h       ;; Y
                    three-d   w       ;; Z
                    y-bottom  (nth y-bottoms row)
                    y-center  (+ y-bottom (/ three-h 2))
                    ;; Running bond: odd rows shift right by half a unit + half a gap
                    x-off     (if (and bond-offset? (odd? row))
                                (/ (+ l gap) 2)
                                0)
                    x         (+ x-off (* col (+ l gap)))
                    z         0]]
          [:selectable-box {:position   [x y-center z]
                            :cast-shadow true
                            :width  three-w
                            :height three-h
                            :depth  three-d
                            :color  color
                            :block-info {:dims  [three-w three-h three-d]
                                         :color color
                                         :note  (str "R" row "C" col)}}])
        group-props (cond-> {:position transform}
                      rotation (assoc :rotation rotation))]
    (into [:object group-props] boxes)))

(comment

  ;; ---- Single staircase wall ----
  (set-edn "stairs-001"
           {:name     "Staircase Wall"
            :renderer :manual-formation
            :camera   {:position [350 200 400]
                       :target   [150 40 0]}
            :lighting [[:ambient-light {:intensity 0.7}]
                       [:directional-light {:cast-shadow true
                                            :position [-100 200 100]
                                            :intensity 1.5}]]
            :scene-graph
            [(generate-stepped-wall
              {:even {:dims [48 36 24] :color "grey"}
               :odd  {:dims [48 36 18] :color "red"}}
              {:gap  12
               :rows [10 9 9 8 8 7 7 6 6 5 5 4 4 3 3 2 2 1]})]})

  ;; ---- Two walls: one at origin, one rotated 90° and offset ----
  (set-edn "stairs-002"
           {:name     "Two Staircase Walls"
            :renderer :manual-formation
            :camera   {:position [600 400 600]
                       :target   [100 60 0]}
            :lighting [[:ambient-light {:intensity 0.7}]
                       [:directional-light {:cast-shadow true
                                            :position [-100 200 100]
                                            :intensity 1.5}]]
            :scene-graph
            [(generate-stepped-wall
              {:even {:dims [63 24 24] :color "grey"}
               :odd  {:dims [63 24 18] :color "red"}}
              {:gap  12
               :rows [10 9 9 8 8 7 7 6 6 5 5 4 4 3 3 2 2 1]})
             (generate-stepped-wall
              {:transform [-14 0 0]
               :rotation  [0 90 0]
               :even {:dims [63 24 24]
                      :color "grey"
                      :omit [0]}
               :odd  {:dims [63 24 18] :color "red"}}
              {:gap  12
               :rows [10 9 9 8 8 7 7 6 6 5 5 4 4 3 3 2 2 1]})]})



  {:name     "Two Staircase Walls"
   :renderer :manual-formation
   :camera   {:position [600 400 600]
              :target   [100 60 0]}
   :lighting [[:ambient-light {:intensity 0.7}]
              [:directional-light {:cast-shadow true
                                   :position [-100 200 100]
                                   :intensity 1.5}]]
   :scene-graph
   [(generate-stepped-wall
     {:even {:dims [48 36 24] :color "grey"}
      :odd  {:dims [48 36 18] :color "red"}}
     {:gap  12
      :rows [10 9 9 8 8 7 7 6 6 5 5 4 4 3 3 2 2 1]})
    (generate-stepped-wall
     {:transform [0 0 0]
      :rotation  [0 90 0]
      :even {:dims [48 36 24]
             :color "grey"
             :omit [0]}

      :odd  {:dims [48 36 18] :color "red"}}
     {:gap  12
      :rows [10 9 9 8 8 7 7 6 6 5 5 4 4 3 3 2 2 1]})]}

  ;; Keep from folding
  )
