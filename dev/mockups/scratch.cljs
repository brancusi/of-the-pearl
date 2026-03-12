(ns mockups.scratch
  (:require
   [amp.services.firebase :refer [listen-to-path listen-to-edn set-edn]]))

(defn shift-upward
  [dims row-colors align step-change]
  (reduce (fn [acc cur]
            (let [color cur
                  last-layer (-> acc last :layers ffirst)
                  last-dims (:dims last-layer)
                  next-dims [(- (nth last-dims 0)
                                step-change)
                             (+ (nth last-dims 1)
                                step-change)
                             (- (nth last-dims 2)
                                step-change)]]
              (conj acc {:layers [[{:color color
                                    :align align
                                    :dims next-dims}]]})))
          [{:bounds dims
            :layers [[{:color (first row-colors)
                       :dims dims}]]}]
          (rest row-colors)))

(defn shift-upward-v2
  [{:keys [base-dimensions
           row-colors
           alignment
           transform-width
           transform-length
           transform-height]}]
  (reduce (fn [acc cur]
            (let [color cur
                  last-layer (-> acc last :layers ffirst)
                  last-dims (:dims last-layer)
                  next-dims [(transform-width last-dims (count acc))
                             (transform-height last-dims (count acc))
                             (transform-length last-dims (count acc))]]
              (conj acc {:layers [[{:color color
                                    :align alignment
                                    :dims next-dims}]]})))
          [{:bounds base-dimensions
            :layers [[{:color (first row-colors)
                       :dims base-dimensions}]]}]
          (rest row-colors)))

(comment

  ;; Use this if you need to access fns in mockup-view
  amp.views.mockup-view/render-elements

  (set-edn "mockup" {:name "The Big Red"
                     :camera {:position [210 210 210]
                              :target [0 20 0]}
                     :data [{:bounds [36 36 60]
                             :layers [[{:color "grey"
                                        :align :tl
                                        :dims  [4 4 6]}
                                       {:color "grey"
                                        :align :tr
                                        :dims  [4 4 6]}
                                       {:color "grey"
                                        :align :bl
                                        :dims  [4 4 6]}
                                       {:color "grey"
                                        :align :br
                                        :dims  [4 4 6]}]]}
                            {:layers [[{:color "white"
                                        :align :tl
                                        :dims [36 36 60]}]]}
                            {:layers [[{:color "grey"
                                        :align :tl
                                        :dims [36 6 28]}]]}
                            {:layers [[{:color "white"
                                        :align :tl
                                        :dims [12 12 28]}]]}
                            {:layers [[{:color "grey"
                                        :align :tl
                                        :dims [12 12 14]}]]}
                            {:layers [[{:color "white"
                                        :align :tl
                                        :dims [12 2 2]}]]}

                            ;; 8" x 12" x 36" step (sits on the top plane of the base)
                            ]})


  (set-edn "mockup-001"
           {:name "Mockup 001"
            :camera {:position [210 210 210]
                     :target [0 20 0]}
            :data [{:bounds [36 36 60]
                    :layers [[{:color "grey"
                               :align :tl
                               :dims  [4 4 6]}
                              {:color "grey"
                               :align :tr
                               :dims  [4 4 6]}
                              {:color "grey"
                               :align :bl
                               :dims  [4 4 6]}
                              {:color "grey"
                               :align :br
                               :dims  [4 4 6]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [36 36 60]}]]}
                   {:layers [[{:color "grey"
                               :align :tl
                               :dims [36 6 28]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [12 12 28]}]]}
                   {:layers [[{:color "grey"
                               :align :tl
                               :dims [12 12 14]}]]}
                   #_{:layers [[{:color "white"
                                 :align :tl
                                 :dims [12 2 2]}]]}

                   ;; 8" x 12" x 36" step (sits on the top plane of the base)
                   ]}
           #_{:name "Mockup 001"
              :camera {:position [210 210 210]
                       :target [0 20 0]}
              :data [{:bounds [36 36 60]
                      :layers [[{:color "grey"
                                 :align :tl
                                 :dims  [4 4 6]}
                                {:color "grey"
                                 :align :tr
                                 :dims  [4 4 6]}
                                {:color "grey"
                                 :align :bl
                                 :dims  [4 4 6]}
                                {:color "grey"
                                 :align :br
                                 :dims  [4 4 6]}]]}
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [36 36 60]}]]}
                     {:layers [[{:color "grey"
                                 :align :tl
                                 :dims [36 6 28]}]]}
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [12 12 28]}]]}
                     {:layers [[{:color "grey"
                                 :align :tl
                                 :dims [12 12 14]}]]}
                     #_{:layers [[{:color "white"
                                   :align :tl
                                   :dims [12 2 2]}]]}

                     ;; 8" x 12" x 36" step (sits on the top plane of the base)
                     ]})




  (set-edn "big-red" {:name "The Big Red"
                      :camera {:position [210 210 210]
                               :target [0 20 0]}
                      :data [{:bounds [144 36 72]
                              :layers [[{:color "yellow"
                                         :align :tl
                                         :dims  [4 4 6]}
                                        {:color "black"
                                         :align :tr
                                         :dims  [4 4 6]}
                                        {:color "yellow"
                                         :align :bl
                                         :dims  [4 4 6]}
                                        {:color "green"
                                         :align :br
                                         :dims  [4 4 6]}]]}
                             {:layers [[{:color "red"
                                         :align :tl
                                         :dims [144 36 72]}]]}
                             {:layers [[{:color "lightblue"
                                         :align :tl
                                         :dims [36 6 28]}]]}
                             {:layers [[{:color "white"
                                         :align :tl
                                         :dims [12 12 28]}]]}
                             {:layers [[{:color "darkred"
                                         :align :tl
                                         :dims [12 12 14]}]]}
                             {:layers [[{:color "gold"
                                         :align :tl
                                         :dims [12 2 2]}]]}

                             ;; 8" x 12" x 36" step (sits on the top plane of the base)
                             ]})


  ;;Keep from folding
  )

#_(comment


    (let [squeeze 2
          data (shift-upward-v2 {:base-dimensions [48 2 48]
                                 :row-colors ["white" "white" "white" "white" "white"]
                                 :alignment :tl
                                 :transform-width #(- (nth %1 0) (* squeeze %2 2.2))
                                 :transform-height #(+ (nth %1 1) (* %2 (- squeeze 1)))
                                 :transform-length #(- (nth %1 2) (* squeeze %2 2.2))})
          updated-packet {:name "Corner Pyramid"
                          :camera {:position [210 210 210]
                                   :target [0 20 0]}
                          :data data}]

      (set-edn "mockup-003" updated-packet))

    (shift-upward [72 6 72] ["red" "blue" "green"] :tl 6)

    (render-elements (create-stack [{:bounds [20 5 20]
                                     :layers [[{:align :tl
                                                :color "red"
                                                :dims [5 5 5]}
                                               {:align :tr
                                                :color "yellow"
                                                :dims [5 5 5]}
                                               {:align :bl
                                                :color "blue"
                                                :dims [5 5 5]}
                                               {:align :br
                                                :color "green"
                                                :dims [5 5 5]}]]}
                                    {:bounds [20 5 20]
                                     :layers [[{:dims [20 5 20]}]]}
                                    {:bounds [20 5 20]
                                     :layers [[{:align :tl
                                                :color "red"
                                                :dims [5 5 5]}
                                               {:align :tr
                                                :color "yellow"
                                                :dims [5 5 5]}
                                               {:align :bl
                                                :color "blue"
                                                :dims [5 5 5]}
                                               {:align :br
                                                :color "green"
                                                :dims [5 5 5]}]]}]))


    (render-elements (create-stack [{:bounds [36 36 48]
                                     :layers [[{:color "grey"
                                                :align :tl
                                                :dims  [4 4 6]}
                                               {:color "grey"
                                                :align :tr
                                                :dims  [4 4 6]}
                                               {:color "grey"
                                                :align :bl
                                                :dims  [4 4 6]}
                                               {:color "grey"
                                                :align :br
                                                :dims  [4 4 6]}]]}
                                    {:layers [[{:color "blue"
                                                :align :tl
                                                :dims [36 36 48]}]]}
                                    {:layers [[{:color "red"
                                                :align :tl
                                                :dims [36 8 12]}]]}
                                    {:layers [[{:color "green"
                                                :align :tl
                                                :dims [18 12 12]}]]}

                                    {:layers [[{:color "grey"
                                                :align :tl
                                                :dims [4 4 4]}]]}

                                    ;; 8" x 12" x 36" step (sits on the top plane of the base)
                                    ]))

    (render-elements (create-stack [{:bounds [36 36 60]
                                     :layers [[{:color "red"
                                                :align :tl
                                                :dims  [4 4 6]}
                                               {:color "red"
                                                :align :tr
                                                :dims  [4 4 6]}
                                               {:color "red"
                                                :align :bl
                                                :dims  [4 4 6]}
                                               {:color "red"
                                                :align :br
                                                :dims  [4 4 6]}]]}
                                    {:layers [[{:color "yellow"
                                                :align :tl
                                                :dims [36 36 60]}]]}
                                    {:layers [[{:color "red"
                                                :align :tl
                                                :dims [36 6 28]}]]}
                                    {:layers [[{:color "white"
                                                :align :tl
                                                :dims [12 12 28]}]]}

                                    {:layers [[{:color "darkred"
                                                :align :tl
                                                :dims [7 7 7]}]]}

                                    ;; 8" x 12" x 36" step (sits on the top plane of the base)
                                    ]))

    ;; Squares all the way
    (render-elements (create-stack [{:bounds [36 36 60]
                                     :layers [[{:color "red"
                                                :align :tl
                                                :dims  [4 4 6]}
                                               {:color "red"
                                                :align :tr
                                                :dims  [4 4 6]}
                                               {:color "red"
                                                :align :bl
                                                :dims  [4 4 6]}
                                               {:color "red"
                                                :align :br
                                                :dims  [4 4 6]}]]}
                                    {:layers [[{:color "yellow"
                                                :align :tl
                                                :dims [36 36 60]}]]}
                                    {:layers [[{:color "red"
                                                :align :tl
                                                :dims [36 6 28]}]]}
                                    {:layers [[{:color "white"
                                                :align :tl
                                                :dims [12 12 28]}]]}

                                    {:layers [[{:color "darkred"
                                                :align :tl
                                                :dims [12 12 14]}]]}
                                    {:layers [[{:color "gold"
                                                :align :tl
                                                :dims [12 2 2]}]]}

                                    ;; 8" x 12" x 36" step (sits on the top plane of the base)
                                    ]))


    (render-elements (create-stack [{:bounds [20 1 20]
                                     :layers [[{:align :tl
                                                :color "red"
                                                :dims [5 1 5]}
                                               {:align :tr
                                                :color "yellow"
                                                :dims [5 1 5]}
                                               {:align :bl
                                                :color "blue"
                                                :dims [5 1 5]}
                                               {:align :br
                                                :color "green"
                                                :dims [5 1 5]}]]}
                                    {:bounds [20 2 20]
                                     :layers [[{:color "red"
                                                :dims [20 5 20]}]]}]))

    (render-elements (create-stack [{:bounds [72 6 72]
                                     :layers [[{:color "red"
                                                :dims [72 6 72]}]]}
                                    {:layers [[{:color "blue"
                                                :align :tl
                                                :dims [68 12 68]}]]}
                                    {:layers [[{:color "green"
                                                :align :tl
                                                :dims [56 18 56]}]]}
                                    {:layers [[{:color "red"
                                                :align :tl
                                                :dims [48 24 48]}]]}
                                    {:layers [[{:color "orange"
                                                :align :tl
                                                :dims [24 24 24]}]]}
                                    {:layers [[{:color "yellow"
                                                :align :center
                                                :dims [9 30 9]}]]}]))

    (render-elements [:object {:position [0 0 -4]}
                      [:ambient-light {:intensity 0.5}]
                      [:directional-light {:position [5 5 5] :intensity 1}]
                      [:box {:position [0 0 0]
                             :width 3.0
                             :height 1.0
                             :depth 2.0
                             :material {:color "red"}}]])

    (render-elements (-> (shift-upward [48 6 48] ["red" "blue" "green" "red" "blue"] :tl 9)
                         create-stack))


    (shift-upward [48 6 48] ["red" "blue" "green" "red" "blue"] :tl 9)
    [{:bounds [48 6 48], :layers [[{:color "red", :dims [48 6 48]}]]}
     {:layers [[{:color "blue", :align :tl, :dims [39 15 39]}]]}
     {:layers [[{:color "green", :align :tl, :dims [30 24 30]}]]}
     {:layers [[{:color "red", :align :tl, :dims [21 33 21]}]]}
     {:layers [[{:color "blue", :align :tl, :dims [12 42 12]}]]}]

    (shift-upward [72 6 72] ["red" "blue" "green" "red" "blue" "green"] :tl 6)

    (render-elements (create-stack [{:bounds [48 6 48], :layers [[{:color "red", :dims [48 2 48]}]]}
                                    {:layers [[{:color "blue", :align :tl, :dims [39 6 39]}]]}
                                    {:layers [[{:color "green", :align :tl, :dims [22 8 22]}]]}
                                    {:layers [[{:color "red", :align :tl, :dims [8 12 8]}]]}
                                    {:layers [[{:color "blue", :align :tl, :dims [3 12 3]}]]}]))


    (render-elements (create-stack (shift-upward [48 2 48] ["red" "blue" "green" "red" "blue"] :tl 10)))


    (let [squeeze 2]
      (render-elements (create-stack (shift-upward-v2 {:base-dimensions [48 2 48]
                                                       :row-colors ["white" "grey" "green" "red" "blue"]
                                                       :alignment :tl
                                                       :transform-width #(- (nth %1 0) (* squeeze %2 2.2))
                                                       :transform-height #(+ (nth %1 1) (* %2 (- squeeze 1)))
                                                       :transform-length #(- (nth %1 2) (* squeeze %2 2.2))}))))

    (shift-upward-v2 {:base-dimensions [48 2 48]
                      :row-colors ["red" "blue" "green" "red" "blue"]
                      :alignment :tl
                      :transform-width #(- (nth % 0) 2)
                      :transform-height #(+ (nth % 1) 2)
                      :transform-length #(- (nth % 2) 2)})



    (let [squeeze 3]
      (create-stack (shift-upward-v2 {:base-dimensions [48 2 48]
                                      :row-colors ["red" "blue" "green" "red" "blue"]
                                      :alignment :tl
                                      :transform-width #(- (nth %1 0) (* squeeze %2 2.2))
                                      :transform-height #(+ (nth %1 1) (* %2 (- squeeze 1)))
                                      :transform-length #(- (nth %1 2) (* squeeze %2 2.2))})))





    ;;Keep from folding
    )