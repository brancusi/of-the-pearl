(ns amp.pages.landing.page
  (:require
   [amp.nav.logo :refer [logo-nav]]
   [amp.ui.section :refer [section]]
   [amp.pages.landing.studio :refer [about-studio]]
   [amp.pages.landing.artist :refer [artist-section]]
   [amp.pages.landing.curators :refer [curators-section]]
   [amp.pages.landing.in-minor-keys :refer [in-minor-keys]]
   [amp.pages.landing.venue :refer [location-section]]
   [amp.pages.landing.hero :refer [mobile-hero-section]]
   [amp.pages.landing.press-release :refer [press-release]]
   [amp.pages.landing.teaser :refer [teaser-section]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc landing-view []
  (let [container-ref (hooks/use-ref "container-ref")
        is-desktop? (use-touch-enabled)]

    ($ :div {:ref container-ref
             :class (str "overflow-x-hidden grey-grad " s/text-primary)}
       (when is-desktop?
         ($ logo-nav))

       ($ section
          {:key "hero"
           :section-id "hero"}
          ($ mobile-hero-section))

       ($ section
          {:key "teaser"
           :section-id "teaser"}
          ($ teaser-section))

       (d/div {:class s/content-column-container}

              (d/div {:class (str "flex flex-col " s/content-column)}
                     ($ press-release {:id "press-release"
                                       :title "Press Release"})
                     ($ about-studio {:id "about-studio"
                                      :title "The Studio"})

                     ($ location-section {:id "venue"
                                          :title "The Venue"})
                     ($ in-minor-keys {:id "in-minor-keys"
                                       :title "In Minor Keys"})
                     ($ artist-section {:id "artist"
                                        :title "The Artist"})
                     ($ curators-section {:id "curators"
                                          :title "Curators"}))))))
