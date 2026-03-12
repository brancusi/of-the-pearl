(ns amp.pages.mockup.copy-link
  "Button that copies a shareable link to the clipboard."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.ui.icons :refer [DocumentIcon]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defn- can-share? []
  (and (exists? js/navigator)
       (fn? (.-share js/navigator))))

(defnc copy-link-button
  "Top-right button that shares or copies a piece URL.
   On mobile (Web Share API available) launches the native share sheet;
   on desktop falls back to clipboard copy.
   Props:
     :piece-id - the piece identifier used to construct the URL"
  [{:keys [piece-id]}]
  (let [[copied? set-copied!] (hooks/use-state false)
        url (str "https://armenianpavilion2026.org/mockups?piece=" piece-id)]
    (d/button {:class (str "z-20 fixed top-0 right-0 m-2 p-2 rounded "
                           "bg-white/40 border-2 border-slate-800 "
                           "hover:bg-white/60 transition-colors")
               :title (if (can-share?) "Share link" "Copy link to clipboard")
               :on-click (fn []
                           (if (can-share?)
                             (-> (js/navigator.share
                                  #js {:title "Armenian Pavilion 2026"
                                       :url   url})
                                 (.catch (fn [_err] nil)))
                             (-> (js/navigator.clipboard.writeText url)
                                 (.then (fn []
                                          (set-copied! true)
                                          (js/setTimeout #(set-copied! false) 2000))))))}
              (if copied?
                (d/span {:class "text-xs font-mono text-slate-800"} "Copied!")
                ($ DocumentIcon {:class "w-5 h-5 text-slate-800"})))))
