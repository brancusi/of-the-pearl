(ns amp.pages.mockup.selection-info
  "Bottom-center bar showing the selected block's dimensions and note."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.pages.mockup.geometry :as geometry]
            [helix.dom :as d]))

(defnc selection-info-bar
  "Fixed bottom bar displaying selected block info (color swatch, dims, note).
   Only renders when selection is non-nil.
   Props:
     :selection - map with :dims [w h d], :color string, :note string (or nil)"
  [{:keys [selection]}]
  (when selection
    (d/div {:class "z-20 fixed bottom-8 left-1/2 bg-white/90 border-2 border-slate-800 px-4 py-2 rounded shadow-lg font-mono"
            :style {:transform "translateX(-50%)"
                    :max-width "calc(100vw - 1rem)"}}
           (d/div {:class "flex items-center gap-3 whitespace-nowrap"}
                  (d/div {:class "w-4 h-4 rounded-sm border border-slate-400 flex-shrink-0"
                          :style {:background-color (:color selection)}})
                  (d/span {:class "text-xs sm:text-sm font-bold"}
                          (let [[w h d] (:dims selection)]
                            (str (geometry/fmt-dim d) "\"(L) × " (geometry/fmt-dim w) "\"(W) × " (geometry/fmt-dim h) "\"(H)"))))
           (when-let [note (:note selection)]
             (d/span {:class "text-xs sm:text-sm text-slate-600 italic"}
                     (str "Notes: " note))))))
