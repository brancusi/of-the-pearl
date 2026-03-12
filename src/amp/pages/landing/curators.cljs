(ns amp.pages.landing.curators
  (:require
   [amp.ui.image-overlay :refer [lazy-image-with-overlay]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def curators
  [{:name "Tony Shafrazi"
    :role "Curator"
    :img  "https://atd-722658831.imgix.net/committee/tony.png"
    :bio  "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."}
   {:name "Tina Chakarian"
    :role "Curator"
    :img  "https://atd-722658831.imgix.net/committee/tina.png"
    :bio  "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia\u2019s sustained presence on the global stage."}])

(defnc curator-card
  [{:keys [name role img bio visible?]}]
  (let [tag-bg "bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"
        tag-style {:boxDecorationBreak "clone"
                   :WebkitBoxDecorationBreak "clone"}]
    (d/div
     {:class "px-4 sm:flex sm:gap-8 sm:items-start"}

     ;; Portrait — floated left on mobile, flex child on desktop
     (d/div
      {:class "float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0
               w-20 aspect-square sm:w-36
               flex-shrink-0 rounded-sm overflow-hidden"}
      ($ lazy-image-with-overlay {:img-src img
                                  :fit "crop"
                                  :aspect-ratio 1
                                  :active? visible?}))

     ;; Text — wraps around image on mobile, flex child on desktop
     (d/div
      {:class "sm:flex-1 sm:min-w-0"}

      ;; Name — blocky bg treatment
      (d/p {:class (s/cx s/person-name "mb-1")}
           (d/span {:class tag-bg :style tag-style} name))

      ;; Role — amber label
      (d/p {:class (s/cx s/person-role "mb-3")} role)

      ;; Bio
      (d/p {:class s/body-base} bio)

      ;; Clear float (mobile only)
      (d/div {:class "clear-both sm:hidden"})))))

(defnc curators-section
  [{:keys [id title]}]
  (let [ref (hooks/use-ref "curators-ref")
        [_visited? visible?] (use-intersection-observer ref {:threshold 0.05})
        title-bg "bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"
        title-style {:boxDecorationBreak "clone"
                     :WebkitBoxDecorationBreak "clone"}]
    (d/section
     {:id id
      :ref ref
      :class (s/cx s/section-pt s/section-pb)}

     ;; Section heading — blocky teaser style
     (when title
       (d/h2 {:class (s/cx s/person-name-lg "mb-10 px-4")}
             (d/span {:class title-bg :style title-style} title)))

     ;; Curator cards
     (d/div
      {:class "space-y-8 sm:space-y-12
              divide-y divide-slate-200/50 dark:divide-white/10"}
      (for [{:keys [name] :as curator} curators]
        (d/div {:key name :class "pt-8 sm:pt-12 first:pt-0 first:border-t-0"}
               ($ curator-card {:visible? visible?
                                :& curator})))))))
