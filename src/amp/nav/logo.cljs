(ns amp.nav.logo
  (:require [amp.hooks.use-hover-animations :refer [use-hover-animations]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            [amp.hooks.use-toggle-animations :refer [use-toggle-animations]]
            [amp.ui.button :refer [main-button]]
            [amp.utils.window :as win-utils]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))



(defnc logo-nav
  []
  (let [comp-ref (hooks/use-ref "comp-ref")
        [visited? is-active?] (use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8)))
                                                  :end "1000000px"
                                                  :markers? false
                                                  :debug? false)]
    (use-hover-animations comp-ref
                          :over {:opacity 1}
                          :out {:opacity 0.7})

    (use-toggle-animations
     {:target comp-ref
      :on-to {:y 0}
      :off-to {:y -250}
      :is-on? is-active?})

    (d/div {:ref comp-ref
            :class "fixed
                    opacity-90
                    z-30
                    right-8
                    top-20
                    flex flex-col items-end gap-3"}

           (d/div {:class "w-28 lg:w-32"}
                  (d/div {:class "cursor-pointer"
                          :on-click #(js/window.open "https://www.labiennale.org/en/art/2026" "_blank")}
                         (d/img {:src "images/graphics/61_biennale_logo_line.svg"
                                 :class "invert dark:invert-0"}))

                  (d/div {:class "mt-4"}
                         ($ main-button
                            {:title "Donate Now"
                             :additional-classes "w-full justify-center"
                             :size :sm
                             :bg-opacity 0.8
                             :on-click #(js/window.open "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00" "_blank")}))))))
