(ns mockups.big-red
  (:require
   [amp.services.firebase :refer [set-edn]]))

(comment

  ;; Use this if you need to access fns in mockup-view
  amp.views.mockup-view/render-elements

  (set-edn "big-red-001" {:name "Big Red - 001"
                          :lighting [[:ambient-light {:intensity 0.7}]
                                     [:directional-light {:cast-shadow true
                                                          :position [-100 120 60]
                                                          :intensity 1.5}]]
                          :camera {:position [250 250 250]
                                   :target [10 60 0]}
                          :data [{:bounds [144 36 72]
                                  :layers [[{:align :tr
                                             :color "#1ebe3a"
                                             :dims [9 6 9]}
                                            {:align :tl
                                             :color "#0b080c"
                                             :dims [24 6 12]}
                                            {:align :br
                                             :color "#0b080c"
                                             :dims [36 6 12]}
                                            {:align :bl
                                             :color "#ec9c3b"
                                             :dims [6 6 12]}]
                                           [{:dims [144 36 72]
                                             :color "#ef3548"}]
                                           [{:dims [36 9 36]
                                             :align :tr
                                             :color "#0070df"}]
                                           [{:dims [18 9 18]
                                             :align :tr
                                             :color "#f1afed"}]
                                           [{:dims [9 4.5 9]
                                             :align :tr
                                             :color "#0b080c"}]
                                           [{:dims [4.5 9 4.5]
                                             :align :tr
                                             :color "#ec9c3b"}]]}]})


  (set-edn "big-red-002" {:name "Big Red - 002"
                          :lighting [[:ambient-light {:intensity 0.7}]
                                     [:directional-light {:cast-shadow true
                                                          :position [-100 120 60]
                                                          :intensity 1.5}]]
                          :camera {:position [250 250 250]
                                   :target [10 60 0]}
                          :data [{:bounds [144 36 72]
                                  :layers [[{:align :tr
                                             :color "#1ebe3a"
                                             :dims [9 6 9]}
                                            {:align :tl
                                             :color "#0b080c"
                                             :dims [24 6 12]}
                                            {:align :br
                                             :color "#0b080c"
                                             :dims [36 6 12]}
                                            {:align :bl
                                             :color "#ec9c3b"
                                             :dims [6 6 12]}]
                                           [{:dims [144 36 72]
                                             :color "#ef3548"}]
                                           [{:dims [36 9 36]
                                             :align :tr
                                             :color "#0070df"}]
                                           [{:dims [18 9 18]
                                             :align :tr
                                             :color "#f1afed"}]
                                           [{:dims [9 4.5 9]
                                             :align :tr
                                             :color "#0b080c"}]
                                           [{:dims [4.5 9 4.5]
                                             :align :tr
                                             :color "#ec9c3b"}]]}]})



  (set-edn "big-red-003" {:name "Big Red - 003"
                          :lighting [[:ambient-light {:intensity 0.7}]
                                     [:directional-light {:cast-shadow true
                                                          :position [-100 120 60]
                                                          :intensity 1.5}]]
                          :camera {:position [250 250 250]
                                   :target [10 60 0]}
                          :data [{:bounds [144 36 72]
                                  :layers [[{:align :tr
                                             :color "#1ebe3a"
                                             :dims [9 6 9]}
                                            {:align :tl
                                             :color "#0b080c"
                                             :dims [24 6 12]}
                                            {:align :br
                                             :color "#0b080c"
                                             :dims [36 6 12]}
                                            {:align :bl
                                             :color "#ec9c3b"
                                             :dims [6 6 12]}]
                                           [{:dims [144 36 72]
                                             :color "#800411"}]
                                           [{:dims [36 9 36]
                                             :align :tr
                                             :color "#0070df"}]
                                           [{:dims [18 9 18]
                                             :align :tr
                                             :color "#f1afed"}]
                                           [{:dims [9 4.5 9]
                                             :align :tr
                                             :color "#0b080c"}]
                                           [{:dims [4.5 9 4.5]
                                             :align :tr
                                             :color "#ec9c3b"}]]}]})

  ;;Keep from folding
  )