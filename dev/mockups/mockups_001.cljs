(ns mockups.mockups-001
  (:require
   [amp.services.firebase :refer [listen-to-path listen-to-edn set-edn]]))

(comment

  ;; Use this if you need to access fns in mockup-view
  amp.views.mockup-view/render-elements

  #_(set-edn "mockup-003"
             {:name "Corner Pyramid"
              :camera {:position [210 210 210]
                       :target [0 20 0]}
              :data [{:bounds [72 6 72]
                      :layers [[{:color "white"
                                 :align :tl
                                 :dims [72 6 72]}]]}
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [66 9 66]}]]}
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [57 12 57]}]]}
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [45 15 45]}]]}
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [30 18 30]}]]}
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [12 21 12]}]]}]})

  (set-edn "mockup-003"
           {:name "Corner Pyramid"
            :camera {:position [210 210 210]
                     :target [0 20 0]}
            :data [{:bounds [72 6 72]
                    :layers [[{:color "white"
                               :align :tl
                               :dims [72 6 72]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [66 10 66]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [56 14 56]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [42 18 42]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [24 14 24]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [2 12 2]}]]}]})



  (set-edn "mockup-004"
           {:name "Water Heater"
            :camera {:position [210 210 210]
                     :target [0 20 0]}
            :data [{:bounds [100 2 100]
                    :layers [[{:color "#e2e2e2"
                               :align :tl
                               :dims [100 2 100]
                               :layers [[{:bounds [50 2 50]
                                          :align :tr
                                          :layers [[{:color "#a62f13"
                                                     :align :tl
                                                     :dims [10 10 10]}]
                                                   [{:color "#a62f13"
                                                     :align :tr
                                                     :dims [10 10 10]}]
                                                   [{:color "#a62f13"
                                                     :align :bl
                                                     :dims [10 10 10]}]
                                                   [{:color "#a62f13"
                                                     :align :br
                                                     :dims [10 10 10]}]]}
                                         {:bounds [50 2 50]
                                          :align :tl
                                          :layers [[{:color "#a62f13"
                                                     :align :tl
                                                     :dims [10 10 10]}]
                                                   [{:color "#a62f13"
                                                     :align :tr
                                                     :dims [10 10 10]}]
                                                   [{:color "#a62f13"
                                                     :align :bl
                                                     :dims [10 10 10]}]
                                                   [{:color "#a62f13"
                                                     :align :br
                                                     :dims [10 10 10]}]]}]]}]]}]})






  ;;Keep from folding
  )