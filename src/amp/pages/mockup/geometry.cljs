(ns amp.pages.mockup.geometry)

(defn fmt-dim
  "Formats a dimension value: integer when whole, 1 decimal place otherwise."
  [n]
  (if (== n (js/Math.floor n))
    (str (int n))
    (.toFixed n 1)))

(defn calculate-position
  "Calculates [x z] position for a box within bounds based on alignment.
   Alignment: :tl (top-left), :tr (top-right), :bl (bottom-left), :br (bottom-right)
   Top = negative Z, Left = negative X"
  [align [bw _bh bd] [dw _dh dd]]
  (let [half-bw (/ bw 2)
        half-bd (/ bd 2)
        half-dw (/ dw 2)
        half-dd (/ dd 2)]
    (case align
      :tl [(- half-dw half-bw) (- half-dd half-bd)]  ; top-left corner
      :tr [(- half-bw half-dw) (- half-dd half-bd)]  ; top-right corner
      :bl [(- half-dw half-bw) (- half-bd half-dd)]  ; bottom-left corner
      :br [(- half-bw half-dw) (- half-bd half-dd)]  ; bottom-right corner
      [0 0])))  ; centered (default)

(defn get-layer-height
  "Gets the maximum height of all boxes in a level's layers."
  [layers]
  (apply max (for [layer layers
                   box layer
                   :let [[_dw dh _dd] (:dims box)]]
               dh)))

(declare total-level-height)

(defn- total-box-height
  "Returns the total height a box occupies, including any nested layers stacked on top.
   Falls back to :bounds if :dims is not set."
  [{:keys [dims bounds layers]}]
  (let [[_dw dh _dd] (or dims bounds [0 0 0])]
    (if (seq layers)
      (+ dh (total-level-height layers))
      dh)))

(defn total-level-height
  "Returns the total stacked height of all layer groups in a level.
   Layer groups stack vertically (summed), boxes within a group share the
   same vertical space (max). Recurses into nested children."
  [layers]
  (reduce + (map (fn [lg]
                   (if (seq lg)
                     (apply max (map total-box-height lg))
                     0))
                 layers)))

(defn layer-group-height
  "Returns the max total height of a single layer group (vector of boxes),
   including recursively nested children."
  [layer-group]
  (if (seq layer-group)
    (apply max (map total-box-height layer-group))
    0))

(defn- collect-all-dims
  "Recursively collects all :dims vectors from the data tree,
   including boxes nested via :layers on individual boxes."
  [data]
  (when (seq data)
    (mapcat
     (fn [level]
       (mapcat
        (fn [layer-group]
          (mapcat
           (fn [box]
             (concat
              (when (:dims box) [(:dims box)])
              (when (seq (:layers box))
                (collect-all-dims [{:layers (:layers box)}]))))
           layer-group))
        (:layers level)))
     data)))

(defn extract-parts-list
  "Extracts all parts from mockup data and groups by dimensions.
   Recurses into nested :layers so every rendered box is counted.
   Returns a sorted list of {:dims [w h d] :qty n} maps."
  [mockup-data]
  (when-let [data (:data mockup-data)]
    (let [all-parts (collect-all-dims data)
          grouped (frequencies all-parts)
          parts-list (for [[dims qty] grouped]
                       {:dims dims :qty qty})]
      ;; Sort by dimensions (L x W x H)
      (sort-by (fn [{:keys [dims]}]
                 [(- (nth dims 2)) (- (nth dims 0)) (- (nth dims 1))])
               parts-list))))

(defn calculate-total-dimensions
  "Calculates the overall bounding box of the full stacked piece.
   Width & Length are the max across ALL dims in the tree (including nested).
   Height is computed recursively via total-level-height so stacked layers
   are properly summed. Returns unrounded float values."
  [mockup-data]
  (when-let [data (:data mockup-data)]
    (when (seq data)
      (let [all-dims (collect-all-dims data)
            total-w (when (seq all-dims)
                      (apply max (map #(nth % 0) all-dims)))
            total-d (when (seq all-dims)
                      (apply max (map #(nth % 2) all-dims)))
            total-h (reduce + 0.0
                            (for [level data
                                  :when (seq (:layers level))]
                              (total-level-height (:layers level))))]
        (when (and total-w total-d)
          {:width (double total-w)
           :height total-h
           :length (double total-d)})))))
