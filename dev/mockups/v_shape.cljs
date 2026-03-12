(ns mockups.v-shape
  (:require
   [amp.services.firebase :refer [set-edn]]))

(comment

  ;; Use this if you need to access fns in mockup-view
  amp.views.mockup-view/render-elements

  (set-edn "v-shape-001" {:name "V Shape"
                          :lighting [[:ambient-light {:intensity 0.7}]
                                     [:directional-light {:cast-shadow true
                                                          :position [-100 120 60]
                                                          :intensity 1.5}]]
                          :camera {:position [250 250 250]
                                   :target [10 60 0]}
                          :data [{:bounds [36 24 54]
                                  :layers [[{:align :tr
                                             :color "grey"
                                             :dims [36 24 54]}

                                            {:position [20 0 20]
                                             :color "grey"
                                             :dims [36 24 54]}]]}]})

  ;;Keep from folding
  )