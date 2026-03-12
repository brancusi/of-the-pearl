(ns amp.ui.theme-toggle
  "A sliding 3-position toggle: system / light / dark.
   Flat, borderless, square-cornered track with a sliding indicator.
   Reads & persists preference in localStorage.
   Toggles the `dark` class on <html>."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private ls-key "amp-theme")

(defn- system-prefers-dark? []
  (and (exists? js/window.matchMedia)
       (.-matches (.matchMedia js/window "(prefers-color-scheme: dark)"))))

(defn- read-preference
  "Return :dark, :light, or :system from localStorage, or nil."
  []
  (try
    (when-some [v (.getItem js/localStorage ls-key)]
      (keyword v))
    (catch :default _ nil)))

(defn- write-preference [theme]
  (try
    (.setItem js/localStorage ls-key (name theme))
    (catch :default _ nil)))

(defn- resolve-theme
  "Given a preference (:dark :light :system), return the effective :dark or :light."
  [pref]
  (if (= pref :system)
    (if (system-prefers-dark?) :dark :light)
    pref))

(defn- apply-theme! [pref]
  (let [effective (resolve-theme pref)
        cl (.-classList js/document.documentElement)]
    (if (= effective :dark)
      (.add cl "dark")
      (.remove cl "dark"))))

(defn- mode-index [mode]
  (case mode :system 0 :light 1 :dark 2 0))

(defnc theme-toggle
  "Sliding 3-position toggle: system(◐) | light(☀) | dark(☾).
   A flat track with a sliding thumb that moves between positions."
  [{:keys [class]}]
  (let [[mode set-mode!] (hooks/use-state
                          (fn []
                            (or (read-preference) :dark)))

        ;; Track the effective theme so we can style based on it
        ;; rather than relying on dark: CSS which can lag
        effective (resolve-theme mode)
        dark? (= effective :dark)

        select! (fn [m]
                  (set-mode! m)
                  (apply-theme! m)
                  (write-preference m))

        ;; Apply theme on mount for ALL modes
        _ (hooks/use-effect
           :once
           (apply-theme! mode))

        ;; Listen to OS theme changes when in :system mode
        _ (hooks/use-effect
           [mode]
           (when (= mode :system)
             (let [mql (.matchMedia js/window "(prefers-color-scheme: dark)")
                   handler (fn [_] (apply-theme! :system))]
               (.addEventListener mql "change" handler)
               (apply-theme! :system)
               (fn [] (.removeEventListener mql "change" handler)))))

        idx (mode-index mode)

        ;; Colors driven by React state, not CSS dark: prefix
        track-bg (if dark?
                   "bg-slate-800/80"
                   "bg-slate-200/80")
        thumb-bg (case mode
                   :system (if dark? "bg-slate-600/50" "bg-slate-400/30")
                   :light  "bg-amber-400/30"
                   :dark   "bg-indigo-500/30")
        inactive-text (if dark?
                        "text-slate-500 hover:text-slate-400"
                        "text-slate-400 hover:text-slate-500")]

    ;; Outer track
    (d/div
     {:class (s/cx
              "relative inline-flex items-center
               h-7 rounded-sm
               transition-colors duration-200"
              track-bg
              class)
      :style {:width "5.25rem"}}

     ;; Sliding thumb
     (d/div
      {:class (str "absolute rounded-sm
                    transition-all duration-200 ease-in-out "
                   thumb-bg)
       :style {:width  "calc(1.75rem - 2px)"
               :height "calc(1.75rem - 2px)"
               :top    "1px"
               :left   (str "calc(" idx " * 1.75rem + 1px)")}})

     ;; Three icon buttons
     (d/button
      {:on-click #(select! :system)
       :aria-label "System theme"
       :title "System"
       :class (s/cx
               "relative z-10 flex items-center justify-center
                w-7 h-7 text-xs cursor-pointer
                transition-colors duration-150
                focus:outline-none"
               (if (= mode :system)
                 (if dark? "text-slate-200" "text-slate-700")
                 inactive-text))}
      "◐")

     (d/button
      {:on-click #(select! :light)
       :aria-label "Light theme"
       :title "Light"
       :class (s/cx
               "relative z-10 flex items-center justify-center
                w-7 h-7 text-xs cursor-pointer
                transition-colors duration-150
                focus:outline-none"
               (if (= mode :light)
                 "text-amber-600"
                 inactive-text))}
      "☀︎")

     (d/button
      {:on-click #(select! :dark)
       :aria-label "Dark theme"
       :title "Dark"
       :class (s/cx
               "relative z-10 flex items-center justify-center
                w-7 h-7 text-xs cursor-pointer
                transition-colors duration-150
                focus:outline-none"
               (if (= mode :dark)
                 "text-indigo-300"
                 inactive-text))}
      "☾"))))
