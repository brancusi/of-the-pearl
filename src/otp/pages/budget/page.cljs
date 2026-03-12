(ns otp.pages.budget.page
  (:require [otp.lib.defnc :refer [defnc]]
            [otp.pages.budget.section :refer [budget-section]]
            [helix.core :refer [$]]
            [helix.dom :as d]))

(defnc budget-view
  [_props]
  (d/div
   ($ budget-section)))