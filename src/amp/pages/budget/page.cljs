(ns amp.pages.budget.page
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.pages.budget.section :refer [budget-section]]
            [helix.core :refer [$]]
            [helix.dom :as d]))

(defnc budget-view
  [_props]
  (d/div
   ($ budget-section)))