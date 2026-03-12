(ns otp.pages.landing.page
  (:require
   [otp.nav.logo :refer [logo-nav]]
   [otp.ui.section :refer [section]]
   [otp.pages.landing.studio :refer [about-studio]]
   [otp.pages.landing.artist :refer [artist-section]]
   [otp.pages.landing.curators :refer [curators-section]]
   [otp.pages.landing.in-minor-keys :refer [in-minor-keys]]
   [otp.pages.landing.venue :refer [location-section]]
   [otp.pages.landing.hero :refer [mobile-hero-section]]
   [otp.pages.landing.press-release :refer [press-release]]
   [otp.pages.landing.teaser :refer [teaser-section]]
   [otp.hooks.use-media-query :refer [use-touch-enabled]]
   [otp.lib.defnc :refer [defnc]]
   [otp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc landing-view []
  (let [container-ref (hooks/use-ref "container-ref")
        is-desktop? (use-touch-enabled)]

    ($ :div {:ref container-ref
             :class (str "overflow-x-hidden grey-grad " s/text-primary)}
       #_(when is-desktop?
           ($ logo-nav))

       ($ section
          {:key "hero"
           :section-id "hero"}
          ($ mobile-hero-section))

       #_($ section
            {:key "teaser"
             :section-id "teaser"}
            ($ teaser-section))

       #_(d/div {:class s/content-column-container}

                (d/div {:class (str "flex flex-col " s/content-column)}
                       "OTP"
                       #_($ press-release {:id "press-release"
                                           :title "Press Release"})
                       #_($ about-studio {:id "about-studio"
                                          :title "The Studio"})

                       #_($ location-section {:id "venue"
                                              :title "The Venue"})
                       #_($ in-minor-keys {:id "in-minor-keys"
                                           :title "In Minor Keys"})
                       #_($ artist-section {:id "artist"
                                            :title "The Artist"})
                       #_($ curators-section {:id "curators"
                                              :title "Curators"}))))))
