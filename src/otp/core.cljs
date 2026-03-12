(ns otp.core

  (:require ["gsap" :refer [gsap]]
            ["gsap/ScrollToPlugin" :refer [ScrollToPlugin]]
            ["gsap/ScrollTrigger" :refer [ScrollTrigger]]
            ["gsap/SplitText" :refer [SplitText]]
            ["react-dom/client" :as rdom]
            [otp.hooks.use-media-query :refer [use-touch-enabled]]

            [otp.ui.section-transitioner :refer [section-transitioner]]
            [otp.lib.defnc :refer [defnc]]
            [otp.state.provider :refer [MainProvider]]
            [otp.services.router :refer [router]]
            [helix.core :refer [$]]))

(defnc app []
  (let [is-desktop? (use-touch-enabled)]
    ($ MainProvider {:default-state {}}
       ($ router
          ($ section-transitioner)))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn start
  []
  ;; Register all gsap plugins
  (.registerPlugin gsap ScrollToPlugin)
  (.registerPlugin gsap ScrollTrigger)
  (.registerPlugin gsap SplitText)

  (.render root ($ app)))

(defn init!
  []
  (start))
