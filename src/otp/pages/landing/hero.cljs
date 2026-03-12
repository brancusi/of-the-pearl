(ns otp.pages.landing.hero
  (:require
   [otp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [otp.ui.image-overlay :refer [lazy-image-with-overlay]]
   [otp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))


(defnc mobile-hero-section
  []
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        [_visited? is-active?] (use-scroll-trigger outer-ctx {:end "bottom"})]

    (d/div
     {:class "w-full h-screen bg-black"}

     ($ lazy-image-with-overlay {:img-src "https://otp-media.imgix.net/jewelry/DSC02716.jpg"
                                 :active? is-active?}


        (d/div {:class "absolute inset-0 flex items-center overflow-hidden"}
               (d/p {:class "font-ocr font-normal 
                             ml-[15%] sm:ml-[40%] md:ml-[30%] lg:ml-[25%]
                             text-8xl md:text-11xl 
                             leading-[1em]
                             text-amber-100/90 
                             lowercase whitespace-nowrap"}
                    (d/span {:class "line-through decoration-24"} "rejection")
                    (d/br)
                    "of"
                    (d/br)
                    "that"
                    (d/br)
                    (d/span {:class "mix-blend-overlay"} "which")))))))
