(ns amp.ui.skeleton
  "Shimmer placeholder component for media that hasn't loaded yet.
   Shows a pulsing animated rectangle with configurable aspect ratio.
   Used in blog posts as the fallback while images decode."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.dom :as d]))

(defnc skeleton-box
  "A shimmering placeholder box.
   Props:
     :aspect-ratio — e.g. \"16/9\", \"4/3\", \"1/1\" (default \"16/9\")
     :class        — additional Tailwind classes"
  [{:keys [aspect-ratio class]}]
  (d/div {:class (s/cx "w-full animate-pulse"
                       "bg-slate-200 dark:bg-slate-800"
                       class)
          :style {:aspectRatio (or aspect-ratio "16/9")}}))
