(ns otp.ui.written-by
  (:require
   [otp.lib.defnc :refer [defnc]]
   [otp.styles :as s]
   [helix.dom :as d]))

(defnc written-by
  [{:keys [author class]}]
  (d/div {:class (str "flex items-center gap-2 " class)}
         (d/span {:class s/written-by-label}
                 "By")
         (d/span {:class s/written-by-name}
                 author)))
