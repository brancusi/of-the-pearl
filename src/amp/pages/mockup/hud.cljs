(ns amp.pages.mockup.hud
  "HUD overlay for the mockup viewer — title, dimensions, toggle buttons."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.ui.icons :refer [CollapseIcon ExpandIcon]]
            [amp.pages.mockup.geometry :as geometry]
            [helix.core :refer [$]]
            [helix.dom :as d]))

(defnc hud-header
  "Collapsible header row with title and expand/collapse icon."
  [{:keys [title on-toggle hud-open?]}]
  (d/div {:class "flex items-center cursor-pointer select-none"
          :on-click on-toggle}
         ($ (if hud-open? CollapseIcon ExpandIcon)
            {:class "w-5 h-5 text-slate-800 mr-4"})
         (d/p {:class "text-md font-mono font-bold"} title)))

(defnc mockup-hud
  "Top-left HUD panel with title, dimensions, and control buttons.
   Props:
     :title          - display name of the mockup
     :mockup-data    - full mockup data map (for dimension calculation)
     :hud-open?      - whether the HUD body is expanded
     :wireframe?     - current wireframe toggle state
     :ground-plane?  - current ground plane toggle state
     :on-toggle-hud  - callback to toggle HUD open/closed
     :on-toggle-wireframe   - callback to toggle wireframe mode
     :on-toggle-ground      - callback to toggle ground plane
     :on-toggle-parts-panel - callback to open parts panel"
  [{:keys [title mockup-data hud-open? wireframe? ground-plane?
           on-toggle-hud on-toggle-wireframe on-toggle-ground on-toggle-parts-panel]}]
  (d/div {:class "z-20 flex flex-col gap-2 absolute bg-white/40 px-4 py-2 border-slate-800 border-4 m-2"}
         ($ hud-header {:on-toggle on-toggle-hud
                        :title (or title "Untitled")
                        :hud-open? hud-open?})
         (when hud-open?
           (d/div {:class "flex flex-col gap-2"}
                  (when-let [{:keys [width height length]} (geometry/calculate-total-dimensions mockup-data)]
                    (d/p {:class "text-xs font-mono text-slate-700"}
                         (str (geometry/fmt-dim length) "\"(L) × " (geometry/fmt-dim width) "\"(W) × " (geometry/fmt-dim height) "\"(H)")))
                  (d/button {:class "px-3 py-1 bg-slate-800 text-white text-sm font-mono rounded hover:bg-slate-700 transition-colors"
                             :on-click on-toggle-wireframe}
                            (if wireframe? "Solid" "Lines"))
                  (d/button {:class "px-3 py-1 bg-slate-800 text-white text-sm font-mono rounded hover:bg-slate-700 transition-colors"
                             :on-click on-toggle-ground}
                            (if ground-plane? "Hide Ground" "Show Ground"))
                  (d/button {:class "px-3 py-1 bg-slate-800 text-white text-sm font-mono rounded hover:bg-slate-700 transition-colors"
                             :on-click on-toggle-parts-panel}
                            "Parts List")))))
