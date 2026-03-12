(ns amp.nav.back-up
  (:require [amp.hooks.use-hover-animations :refer [use-hover-animations]]
            [amp.hooks.use-media-query :refer [use-media-breakpoint]]
            [amp.hooks.use-scroll-threshold :refer [use-scroll-threshold]]
            [amp.hooks.use-scroll-to :refer [use-scroll-to-top]]
            [amp.hooks.use-toggle-animations :refer [use-toggle-animations]]
            [amp.utils.window :as win-utils]
            [amp.lib.defnc :refer [defnc]]
            [amp.ui.icons :refer [ArrowTurnRightUp]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc back-up-nav
  []
  (let [is-desktop? (use-media-breakpoint :md)
        container-ref (hooks/use-ref nil)
        button-ref (hooks/use-ref nil)
        scroll-to-top (use-scroll-to-top {:duration 1})
        is-active? (use-scroll-threshold
                    #(* 0.875 (win-utils/height)))]

    (use-hover-animations button-ref
                          :over {:opacity 1}
                          :out {:opacity 0.7})

    (use-toggle-animations
     {:target container-ref
      :on-to {:y 60
              :opacity 1}
      :off-to {:y -100
               :opacity 0}
      :is-on? (and is-active? (not is-desktop?))})

    (d/div {:ref container-ref
            :class "fixed top-0 right-0 cursor-pointer z-30 md:hidden"}
           (d/div {:ref button-ref
                   :class "flex items-center gap-1
                           bg-pink-300
                           text-slate-900
                           opacity-90
                           font-bold
                           text-xl
                           px-4 py-1
                           whitespace-nowrap"
                   :on-click scroll-to-top}
                  "To Top "
                  ($ ArrowTurnRightUp {})))))
