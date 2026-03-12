(ns mockups.v-shape-002
  "Generator for V-shaped (L-shaped) interlocking brick structures.
   Two perpendicular arms meet at a corner with zipper interlocking.
   Alternating row patterns (even/odd block dims + gap).
   Each arm's blocks orient lengthwise along the arm direction."
  (:require
   [amp.services.firebase :refer [set-edn]]))

;; ---------------------------------------------------------------------------
;; Configuration
;; ---------------------------------------------------------------------------
;;
;; :even-row     {:block-dims [w h d] :gap n}  — dims & gap for even rows (0,2,4…)
;; :odd-row      {:block-dims [w h d] :gap n}  — dims & gap for odd rows  (1,3,5…)
;;    block-dims are specified as [long-side height short-side].
;;    The generator orients each arm's blocks so the long side runs along
;;    the arm direction (unless :crosswise is set).
;;
;; :arm1-orient  :lengthwise | :crosswise  — block long axis vs arm1 (+x) direction
;; :arm2-orient  :lengthwise | :crosswise  — block long axis vs arm2 (+z) direction
;;
;; :arm1-color   string  — color for arm1 blocks
;; :arm2-color   string  — color for arm2 blocks
;; :corner-color string  — explicit corner block color (nil → owning arm's color)
;;
;; :arm1-blocks  int  — blocks along arm1 at base row
;; :arm2-blocks  int  — blocks along arm2 at base row
;; :taper        int  — blocks each arm loses per row going up
;; :bond-offset  0–1  — fraction-of-stride shift on odd rows (0 = none)
;; :corner       :zipper | :overlap — :zipper alternates corner ownership per row
;; ---------------------------------------------------------------------------

(def default-config
  {:even-row     {:block-dims [48 12 18] :gap 12}
   :odd-row      {:block-dims [48 10 18] :gap 12}
   :arm1-orient  :lengthwise
   :arm2-orient  :lengthwise
   :arm1-color   "#e8e0d4"
   :arm2-color   "#e8e0d4"
   :corner-color nil
   :arm1-blocks  9
   :arm2-blocks  9
   :taper        2
   :bond-offset  0
   :corner       :zipper})

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn- orient-block
  "Returns [x-size height z-size] for a block placed along the given arm axis.
   :lengthwise → block long side (w) aligns with arm run direction.
   :crosswise  → block short side (d) aligns with arm run direction."
  [[w h d] arm-axis orient]
  (if (or (and (= arm-axis :x) (= orient :lengthwise))
          (and (= arm-axis :z) (= orient :crosswise)))
    [w h d]
    [d h w]))

(defn- row-blocks
  "Computes blocks for one row in edge-based coords (L-corner at origin).
   Returns {:blocks [...] :extent-x n :extent-z n}."
  [row config]
  (let [{:keys [even-row odd-row arm1-orient arm2-orient
                arm1-color arm2-color corner-color
                arm1-blocks arm2-blocks taper bond-offset corner]
         :or {arm1-orient :lengthwise arm2-orient :lengthwise
              arm1-color "#e8e0d4" arm2-color "#e8e0d4"
              taper 1 bond-offset 0 corner :zipper}} config

        is-even (even? row)
        {:keys [block-dims gap]} (if is-even even-row odd-row)

        ;; Oriented dims: [x-extent height z-extent] for each arm
        [a1x a1h a1z] (orient-block block-dims :x arm1-orient)
        [a2x _a2h a2z] (orient-block block-dims :z arm2-orient)

        ;; Stride along each arm's run direction
        stride1 (+ a1x gap) ;; arm1 along +x
        stride2 (+ a2z gap) ;; arm2 along +z

        ;; Blocks per arm this row (shrink with taper)
        n1 (max 0 (- arm1-blocks (* row taper)))
        n2 (max 0 (- arm2-blocks (* row taper)))

        ;; Corner ownership
        zipper? (= corner :zipper)
        arm1-corner? (or (not zipper?) is-even)
        has-corner? (and (pos? n1) (pos? n2))

        ;; Build blocks — :offset is the CENTER of each block in edge-based coords
        blocks
        (cond
          ;; Both arms present → corner + two arms
          has-corner?
          (let [;; Corner block uses owning arm's oriented dims
                [cdx cdh cdz] (if arm1-corner? [a1x a1h a1z] [a2x a1h a2z])
                c-color (or corner-color (if arm1-corner? arm1-color arm2-color))

                corner-blk {:dims  [cdx cdh cdz]
                            :color c-color
                            :offset [(/ cdx 2) 0 (/ cdz 2)]}

                ;; Arm1 blocks — when arm1 owns corner, skip i=0 (it IS the corner)
                ;; When arm2 owns corner, arm1 starts after arm2 corner block width + gap
                [a1-start a1-x-base]
                (if arm1-corner?
                  [1 0]
                  [0 (+ a2x gap)])

                arm1-blks
                (for [i (range a1-start n1)]
                  {:dims  [a1x a1h a1z]
                   :color arm1-color
                   :offset [(+ (/ a1x 2) a1-x-base (* i stride1)) 0 (/ a1z 2)]})

                ;; Arm2 blocks — when arm2 owns corner, skip j=0
                ;; When arm1 owns corner, arm2 starts after arm1 corner block depth + gap
                [a2-start a2-z-base]
                (if arm1-corner?
                  [0 (+ a1z gap)]
                  [1 0])

                arm2-blks
                (for [j (range a2-start n2)]
                  {:dims  [a2x a1h a2z]
                   :color arm2-color
                   :offset [(/ a2x 2) 0 (+ (/ a2z 2) a2-z-base (* j stride2))]})]
            (vec (concat [corner-blk] arm1-blks arm2-blks)))

          ;; Only arm1
          (pos? n1)
          (vec (for [i (range n1)]
                 {:dims  [a1x a1h a1z]
                  :color arm1-color
                  :offset [(+ (/ a1x 2) (* i stride1)) 0 (/ a1z 2)]}))

          ;; Only arm2
          (pos? n2)
          (vec (for [j (range n2)]
                 {:dims  [a2x a1h a2z]
                  :color arm2-color
                  :offset [(/ a2x 2) 0 (+ (/ a2z 2) (* j stride2))]}))

          :else [])

        ;; Row extent (max edge x and z)
        ext-x (if (seq blocks)
                (apply max (map (fn [b]
                                  (let [[ox _ _] (:offset b)
                                        [bw _ _] (:dims b)]
                                    (+ ox (/ bw 2))))
                                blocks))
                0)
        ext-z (if (seq blocks)
                (apply max (map (fn [b]
                                  (let [[_ _ oz] (:offset b)
                                        [_ _ bd] (:dims b)]
                                    (+ oz (/ bd 2))))
                                blocks))
                0)]
    {:blocks blocks :extent-x ext-x :extent-z ext-z}))

;; ---------------------------------------------------------------------------
;; Main generator
;; ---------------------------------------------------------------------------

(defn generate-v-shape
  "Converts a config map into :data for create-stack.
   Builds an L-shaped staircase with zipper-interlocked corner.
   All rows are emitted as layer-groups inside a single level so they
   stack vertically and share the same centering."
  [config]
  (let [max-rows (max (:arm1-blocks config) (:arm2-blocks config))

        ;; Compute all rows
        rows (vec (for [r (range max-rows)] (row-blocks r config)))

        ;; Global extent for centering (base row is the widest)
        gx (apply max 1 (map :extent-x rows))
        gz (apply max 1 (map :extent-z rows))
        cx (/ gx 2)
        cz (/ gz 2)

        ;; Center-shift every block, group each row as a layer-group
        layers (vec (for [{:keys [blocks]} rows
                          :when (seq blocks)]
                      (vec (map (fn [b]
                                  (let [[ox oy oz] (:offset b)]
                                    (assoc b :offset [(- ox cx) oy (- oz cz)])))
                                blocks))))]
    [{:bounds [gx 1 gz]
      :layers layers}]))

;; ---------------------------------------------------------------------------
;; REPL — evaluate in a connected REPL to push to Firebase
;; ---------------------------------------------------------------------------

(comment

  {:even {:dims [50 50 10] ;; Use coords [length width height]
          :color "grey"}}

  ;; Use this if you need to access fns in mockup-view
  amp.views.mockup-view/render-elements

  ;; Push the default V-shape as piece "v-shape-002"
  (set-edn "v-shape-002"
           {:name    "V Shape 002"
            :camera  {:position [350 250 350]
                      :target   [0 40 0]}
            :lighting [[:ambient-light {:intensity 0.7}]
                       [:directional-light {:cast-shadow true
                                            :position [-120 180 80]
                                            :intensity 1.5}]]
            :data (generate-v-shape {:even-row     {:block-dims [48 12 18] :gap 12}
                                     :odd-row      {:block-dims [48 10 18] :gap 12}
                                     :arm1-orient  :lengthwise
                                     :arm2-orient  :lengthwise
                                     :arm1-color   "#e8e0d4"
                                     :arm2-color   "#e8e0d4"
                                     :corner-color nil
                                     :arm1-blocks  9
                                     :arm2-blocks  9
                                     :taper        1
                                     :bond-offset  0
                                     :corner       :zipper})})

  ;; Two-tone variant
  #_(set-edn "v-shape-002"
             {:name "V Shape 002 — two-tone"
              :camera {:position [350 250 350] :target [0 40 0]}
              :lighting [[:ambient-light {:intensity 0.7}]
                         [:directional-light {:cast-shadow true
                                              :position [-120 180 80]
                                              :intensity 1.5}]]
              :data (generate-v-shape
                     (assoc default-config
                            :arm1-color "#d4cfc8"
                            :arm2-color "#c8c0b4"
                            :corner-color "#b8b0a4"))})

  ;; Crosswise variant — blocks run across the arm instead of along it
  #_(set-edn "v-shape-002"
             {:name "V Shape 002 — crosswise"
              :camera {:position [350 250 350] :target [0 40 0]}
              :lighting [[:ambient-light {:intensity 0.7}]
                         [:directional-light {:cast-shadow true
                                              :position [-120 180 80]
                                              :intensity 1.5}]]
              :data (generate-v-shape
                     (assoc default-config
                            :arm1-orient :crosswise
                            :arm2-orient :crosswise))})

  ;; Keep from folding
  )
