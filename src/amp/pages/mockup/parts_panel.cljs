(ns amp.pages.mockup.parts-panel
  "Slide-out panel listing all parts with dimensions and quantities."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.pages.mockup.geometry :as geometry]
            [helix.dom :as d]))

(defnc parts-panel
  "Right-side slide-out panel showing a parts list.
   Props:
     :open?       - whether the panel is visible
     :mockup-data - full mockup data map (for part extraction)
     :on-close    - callback to close the panel"
  [{:keys [open? mockup-data on-close]}]
  (d/div {:class (str "z-30 fixed top-0 right-0 h-full bg-white border-l-4 border-slate-800 shadow-lg "
                      "transition-transform duration-300 ease-in-out "
                      (if open? "translate-x-0" "translate-x-full"))
          :style {:width "360px"}}
         ;; Panel header
         (d/div {:class "flex justify-between items-center px-4 py-3 border-b-2 border-slate-300"}
                (d/h2 {:class "text-lg font-bold font-mono"} "Parts List")
                (d/button {:class "text-2xl font-bold text-slate-600 hover:text-slate-800"
                           :on-click on-close}
                          "×"))
         ;; Panel content
         (d/div {:class "p-4 overflow-y-auto" :style {:height "calc(100% - 60px)"}}
                (if-let [parts (geometry/extract-parts-list mockup-data)]
                  (d/ol {:class "list-decimal list-inside space-y-2 font-mono text-sm"}
                        (map-indexed
                         (fn [idx {:keys [dims qty]}]
                           (let [[w h d] dims]
                             (d/li {:key idx :class "py-1 border-b border-slate-200"}
                                   (d/span {:class "font-bold"} (str qty "x "))
                                   (d/span {} (str (geometry/fmt-dim d) "\"(L) × " (geometry/fmt-dim w) "\"(W) × " (geometry/fmt-dim h) "\"(H)")))))
                         parts))
                  (d/p {:class "text-slate-500 italic"} "No parts data available")))))
