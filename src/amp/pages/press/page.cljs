(ns amp.pages.press.page
  (:require [amp.ui.page-shell :refer [page-shell]]
            [amp.lib.defnc :refer [defnc]]
            [amp.styles :as s]
            [helix.core :refer [$]]
            [helix.dom :as d]))

(defnc press-view
  [_props]
  ($ page-shell {:show-back-up? false}
     (d/div {:class "flex flex-1 flex-col items-center justify-center px-4"}
            (d/div {:class "max-w-2xl w-full text-center"}
                   (d/p {:class (s/cx s/eyebrow s/text-faint "mb-6")}
                        "Media")
                   (d/h1 {:class (s/cx s/heading-display "mb-8")}
                         "Press Kit")
                   (d/p {:class (s/cx s/body-lg s/text-secondary)}
                        "Press materials and social links — coming soon.")))))
