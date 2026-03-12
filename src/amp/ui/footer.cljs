(ns amp.ui.footer
  "Site-wide footer rendered by the layout shell (section-transitioner).
   Quick Links adapt based on the current route: scroll-to-id on the landing
   page, site navigation links on all other pages."
  (:require
   [amp.ui.button :refer [main-button]]
   [amp.ui.social-links :refer [social-links]]
   [amp.config]
   [amp.hooks.use-scroll-to :refer [use-scroll-to-id]]
   [amp.lib.defnc :refer [defnc]]
   [amp.state.provider :refer [use-main-state]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; ---------------------------------------------------------------------------
;; Quick Links — route-aware
;; ---------------------------------------------------------------------------

(def ^:private landing-links
  "Scroll targets for the landing page."
  [{:label "The Film"       :id "video"}
   {:label "Press Release"  :id "press-release"}
   {:label "The Studio"     :id "about-studio"}])

(def ^:private site-links
  "Navigation links shown on non-landing pages."
  [{:label "Home"    :href "/"}
   {:label "Visit"   :href "/visit"}
   {:label "Artist"  :href "/artist"}
   {:label "Blog"    :href "/blog"}
   {:label "Press"   :href "/press"}])

(def ^:private link-class
  (str "block transition-colors text-left "
       s/text-secondary
       " hover:text-pink-600 dark:hover:text-pink-300"))

(defnc quick-links-landing
  "Scroll-to-id links for the landing page."
  [_props]
  (let [scroll-to-id (use-scroll-to-id)]
    (d/div {:class "space-y-3"}
           (d/h3 {:class (s/cx s/footer-heading "mb-4")}
                 "Quick Links")
           (for [{:keys [label id]} landing-links]
             (d/button {:key id
                        :class link-class
                        :on-click #(scroll-to-id id)}
                       label)))))

(defnc quick-links-site
  "Navigation links for non-landing pages."
  [_props]
  (d/div {:class "space-y-3"}
         (d/h3 {:class (s/cx s/footer-heading "mb-4")}
               "Quick Links")
         (for [{:keys [label href]} site-links]
           (d/a {:key href
                 :href href
                 :class link-class}
                label))))

;; ---------------------------------------------------------------------------
;; Site Footer
;; ---------------------------------------------------------------------------

(defnc site-footer
  "Shared site-wide footer. Reads current route from app state to decide
   which Quick Links variant to render."
  [_props]
  (let [[state _] (use-main-state)
        route-name (-> state :current-route :data :name)
        on-landing? (= route-name :home)]

    (d/footer
     {:class (s/cx "relative w-full" s/font-display
                   s/bg-footer)}

     ;; ── Divider ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"})

     ;; ── Pull quote ──
     (d/div {:class (s/cx s/content-column-container "py-16 lg:py-24 px-4")}
            (d/blockquote
             {:class (s/cx s/content-column "text-center")}
             (d/p {:class (s/cx s/font-display "text-xl lg:text-2xl italic" s/weight-normal "leading-relaxed"
                                s/text-muted)}
                  "\u201CThe way you do anything is the way you do everything.\u201D")))

     ;; ── Divider ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"})

     ;; ── CTA + Contact grid ──
     (d/div {:class (s/cx s/content-column-container "py-16 lg:py-20 px-4")}
            (d/div {:class (s/cx s/content-column)}

                   ;; Primary CTA
                   (d/div {:class "text-center mb-16"}
                          (d/h2 {:class (s/cx s/font-display "text-2xl lg:text-3xl" s/weight-semibold
                                              "uppercase tracking-wider mb-3" s/text-primary)}
                                "Support the Pavilion")
                          (d/p {:class (s/cx s/body-sm "max-w-xl mx-auto mb-8 text-center")}
                               "Your contribution directly supports Armenia\u2019s national presentation at the 61st Venice Biennale.")
                          (d/div {:class "flex justify-center"}
                                 ($ main-button
                                    {:title "Donate Now"
                                     :on-click #(js/window.open
                                                 "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00"
                                                 "_blank")})))

                   ;; Four-column info
                   (d/div {:class "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 text-sm"}

                          ;; Contact
                          (d/div {:class "space-y-3"}
                                 (d/h3 {:class (s/cx s/footer-heading "mb-4")}
                                       "Get in Touch")
                                 (d/a {:href "mailto:hello@armenianpavilion2026.org?subject=Let's%20connect"
                                       :class (s/cx "block transition-colors"
                                                    s/text-secondary
                                                    s/link-hover-accent)}
                                      "hello@armenianpavilion2026.org")
                                 (d/a {:href "tel:+13234041152"
                                       :class (s/cx "block transition-colors"
                                                    s/text-secondary
                                                    s/link-hover-accent)}
                                      "+1 323-404-1152"))

                          ;; Organization
                          (d/div {:class "space-y-3"}
                                 (d/h3 {:class (s/cx s/footer-heading "mb-4")}
                                       "501(c)(3) Non-Profit")
                                 (d/p {:class s/text-secondary} "Fallen Angels Inc.")
                                 (d/p {:class s/text-muted} "EIN: 92-2395513")
                                 (d/p {:class s/text-muted} "Los Angeles, CA"))

                          ;; Quick links — route-aware
                          (if on-landing?
                            ($ quick-links-landing)
                            ($ quick-links-site))

                          ;; Social links
                          ($ social-links))))

     ;; ── Bottom bar ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"})

     (d/div {:class (s/cx s/content-column-container "py-6 px-4")}
            (d/div {:class (s/cx s/content-column
                                 "flex flex-col sm:flex-row justify-between items-center gap-3")}
                   (d/div {:class "flex items-center gap-4"}
                          (d/img {:src "/images/graphics/61_biennale_logo_line.svg"
                                  :class "h-6 opacity-40 invert dark:invert-0"})
                          (d/span {:class (s/cx "text-[10px] uppercase tracking-[0.15em] whitespace-nowrap"
                                                s/text-muted)}
                                  "Armenia Pavilion \u00B7 61st Venice Biennale"))
                   (d/div {:class "flex items-center gap-4"}
                          (d/span {:class (s/cx "text-[10px]" s/text-muted)}
                                  "\u00A9 2026 AZ Studios Inc.")
                          (d/span {:class (s/cx "text-[10px]" s/text-ghost)}
                                  (str "v" amp.config/git-hash))))))))
