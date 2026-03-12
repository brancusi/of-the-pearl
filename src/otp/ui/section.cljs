(ns otp.ui.section
  (:require [otp.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(defnc section
  [{:keys [section-id children]}]

  (d/div
   {:id section-id
    :class (str "snap-start
                 min-h-screen 
                 w-full")}
   children))
