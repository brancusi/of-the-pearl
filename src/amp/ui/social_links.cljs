(ns amp.ui.social-links
  "Row of social-media profile links for the global footer.
   Renders as a horizontal icon row + heading label."
  (:require
   [amp.ui.social-icons :refer [InstagramIcon FacebookIcon XTwitterIcon YouTubeIcon]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def ^:private social-profiles
  "Armenian Pavilion 2026 social accounts."
  [{:platform "Instagram"
    :href     "https://www.instagram.com/armenia.pavilion.2026/"
    :icon     InstagramIcon}
   #_{:platform "Facebook"
      :href     "https://www.facebook.com/armenianpavilion2026"
      :icon     FacebookIcon}
   #_{:platform "X"
      :href     "https://x.com/ArmenianPav2026"
      :icon     XTwitterIcon}
   #_{:platform "YouTube"
      :href     "https://www.youtube.com/@armenia.pavilion.2026"
      :icon     YouTubeIcon}])

(def ^:private icon-link-class
  "Styling for a single social icon in the footer."
  (s/cx "inline-flex items-center justify-center"
        "w-9 h-9"
        s/text-muted
        "hover:text-pink-600 dark:hover:text-pink-300"
        "transition-colors duration-200"))

(defnc social-links
  "Social profile icons for the footer. Renders a heading + icon row."
  [_props]
  (d/div {:class "space-y-3"}
         (d/h3 {:class (s/cx s/footer-heading "mb-4")}
               "Follow Us")
         (d/div {:class "flex items-center gap-1"}
                (for [{:keys [platform href icon]} social-profiles]
                  (d/a {:key      platform
                        :href     href
                        :target   "_blank"
                        :rel      "noopener noreferrer"
                        :title    platform
                        :class    icon-link-class}
                       ($ icon {:class "w-[18px] h-[18px]"}))))))
