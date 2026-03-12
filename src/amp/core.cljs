(ns amp.core

  (:require ["gsap" :refer [gsap]]
            ["gsap/ScrollToPlugin" :refer [ScrollToPlugin]]
            ["gsap/ScrollTrigger" :refer [ScrollTrigger]]
            ["gsap/SplitText" :refer [SplitText]]
            ["react-dom/client" :as rdom]
            [amp.hooks.use-media-query :refer [use-touch-enabled]]

            [amp.ui.section-transitioner :refer [section-transitioner]]
            [amp.lib.defnc :refer [defnc]]
            [amp.state.provider :refer [MainProvider]]
            [amp.services.router :refer [router]]
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
