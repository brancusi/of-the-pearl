(ns otp.nav.menu
  (:require [otp.lib.defnc :refer [defnc]]
            [otp.nav.pearl-logo :refer [pearl-logo]]
            [otp.state.provider :refer [use-main-state]]
            [otp.styles :as s]
            [otp.ui.icons :refer [ShoppingBagIcon]]
            [otp.ui.theme-toggle :refer [theme-toggle]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

;; ---------------------------------------------------------------------------
;; Animated hamburger / X icon — three bars that morph via CSS transitions.
;; ---------------------------------------------------------------------------

(defnc hamburger-icon [{:keys [open? class]}]
  (d/div {:class (s/cx "relative flex flex-col justify-center items-center"
                       (or class "w-6 h-6"))}
         ;; Top bar
         (d/span {:class (s/cx "block absolute h-[1.5px] w-5 bg-current"
                               "transition-all duration-300 ease-in-out"
                               (if open?
                                 "rotate-45 translate-y-0"
                                 "-translate-y-[5px]"))})
         ;; Middle bar
         (d/span {:class (s/cx "block absolute h-[1.5px] w-5 bg-current"
                               "transition-all duration-300 ease-in-out"
                               (if open?
                                 "opacity-0 scale-x-0"
                                 "opacity-100"))})
         ;; Bottom bar
         (d/span {:class (s/cx "block absolute h-[1.5px] w-5 bg-current"
                               "transition-all duration-300 ease-in-out"
                               (if open?
                                 "-rotate-45 translate-y-0"
                                 "translate-y-[5px]"))})))

(defnc menu
  "Site navigation menu. Collapsible hamburger on mobile, horizontal bar on desktop."
  [_props]
  (let [[state _] (use-main-state)
        [open? set-open!] (hooks/use-state false)

        nav-ref (hooks/use-ref nil)

        toggle! (hooks/use-callback
                 [open?]
                 (fn [_e]
                   (set-open! (not open?))))

        close! (hooks/use-callback
                :always
                (fn [_e]
                  (set-open! false)))]

    ;; Close menu when clicking outside the nav
    (hooks/use-effect
     [open?]
     (when open?
       (let [handler (fn [e]
                       (when-let [nav (.-current nav-ref)]
                         (when-not (.contains nav (.-target e))
                           (set-open! false))))]
         (.addEventListener js/document "pointerdown" handler)
         (fn [] (.removeEventListener js/document "pointerdown" handler)))))

    (<>
     (d/nav {:ref nav-ref
             :class "fixed top-0 left-0 right-0 z-40"}

            ;; ---- Top bar ----
            (d/div {:class (s/cx "relative flex items-center justify-between"
                                 "px-4 md:px-8 h-14"
                                 "bg-white"
                                 s/border-glass)}

                   ;; Left — logo
                   (d/div {:class "flex items-center gap-3"}
                          ;; Slate logo on mobile
                          (d/img {:src   "/images/graphics/logo_slate.svg"
                                  :alt   "Of The Pearl"
                                  :class "md:hidden h-8 w-auto"})
                          ;; Slate logo on desktop
                          (d/img {:src   "/images/graphics/logo_slate.svg"
                                  :alt   "Of The Pearl"
                                  :class "hidden md:block h-8 w-auto"}))

                   ;; Center — animated pearl logo (absolute centered)
                   (d/div {:class "absolute inset-0 flex items-center justify-center pointer-events-none px-32 md:px-48"}
                          (d/div {:class "w-full pointer-events-auto"}
                                 ($ pearl-logo {:should-play? true})))

                   ;; Right — shopping bag + theme toggle + mobile hamburger
                   (d/div {:class "flex items-center gap-4"}
                          ;; Shopping bag
                          (d/button {:class (s/cx "p-1" s/text-primary
                                                  "hover:text-pink-600 dark:hover:text-pink-300"
                                                  "transition-colors duration-200")
                                     :aria-label "Shop"}
                                    ($ ShoppingBagIcon {:class "w-5 h-5"}))

                          ;; Theme toggle (desktop)
                          (d/div {:class (s/cx "hidden md:flex items-center pl-4 border-l"
                                               s/border-subtle)}
                                 #_($ theme-toggle))

                          ;; Mobile hamburger button
                          (d/button {:class (s/cx "md:hidden p-2"
                                                  s/text-primary
                                                  "hover:text-pink-600 dark:hover:text-pink-300"
                                                  "transition-colors duration-200")
                                     :on-click toggle!
                                     :aria-label (if open? "Close menu" "Open menu")}
                                    ($ hamburger-icon {:open? open? :class "w-6 h-6"}))))

            ;; ---- Mobile slide-down panel (frosted glass) ----
            (d/div {:class (s/cx "md:hidden overflow-hidden"
                                 "transition-all duration-300 ease-in-out"
                                 (if open?
                                   "max-h-[500px] opacity-100"
                                   "max-h-0 opacity-0"))}
                   (d/div {:class (s/cx s/bg-glass
                                        "px-6 pb-6 pt-2"
                                        "border-t border-white/10")}
                          ;; Theme toggle in mobile panel
                          (d/div {:class (s/cx "mt-4 pt-4 border-t" s/border-subtle)}
                                 ($ theme-toggle))))))))