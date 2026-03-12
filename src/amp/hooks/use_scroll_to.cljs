(ns amp.hooks.use-scroll-to
  (:require
   [amp.utils.gsap :as gsap]

   ["gsap/ScrollToPlugin" :refer [ScrollToPlugin]]
   [helix.hooks :as hooks]))

(defn use-scroll-to-id
  []
  (hooks/use-callback
   :auto-deps
   (fn [id & [duration]]
     (let [id (if (.startsWith id "#")
                id
                (str "#" id))]
       (gsap/window-to
        {:duration (or duration 0.35)
         :scrollTo {:y id
                    :autoKill false}
         :ease "power2.inOut"})))))

(defn use-scroll-to-ref
  []
  (hooks/use-callback
   :auto-deps
   (fn [ref & [duration]]
     (when-let [el (.-current ref)]
       (gsap/window-to
        {:duration (or duration 0.35)
         :scrollTo {:y el
                    :autoKill false}
         :ease "power2.inOut"})))))

(defn use-scroll-to-top
  [& {:keys [duration]
      :or {duration 0.35}}]
  (hooks/use-callback
   []
   (fn [& _]
     (tap> {:type :scroll-to-top
            :duration duration})
     (gsap/window-to
      {:duration duration
       :scrollTo {:y 0
                  #_#_:autoKill false}
       :ease "power2.inOut"}))))

(comment

  (def hey (use-scroll-to-top {:duration 1}))
  (gsap/window-to
   {:duration 1
    :scrollTo {:y "#top"
               :autoKill false}
    :ease "power2.inOut"})


  (gsap/window-to
   {:duration 1
    :scrollTo {:y 0
               #_#_:autoKill false}
    :ease "power2.inOut"})

  (gsap/window-to

   {:duration 1
    :scrollTo {:y 0}
    :ease "power2.inOut"})



  ;;Keep from folding
  )
