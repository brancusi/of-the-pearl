(ns mockups.mockup-006
  (:require
   [amp.services.firebase :refer [set-edn]]))

(defn hex->hsl
  "Converts a hex color string to [h s l] where h is 0-360, s and l are 0-100."
  [hex]
  (let [hex (cond-> hex (= \# (first hex)) (subs 1))
        r (/ (js/parseInt (subs hex 0 2) 16) 255.0)
        g (/ (js/parseInt (subs hex 2 4) 16) 255.0)
        b (/ (js/parseInt (subs hex 4 6) 16) 255.0)
        mx (max r g b)
        mn (min r g b)
        l (/ (+ mx mn) 2.0)
        d (- mx mn)]
    (if (zero? d)
      [0 0 (* l 100)]
      (let [s (if (> l 0.5)
                (/ d (- 2.0 mx mn))
                (/ d (+ mx mn)))
            h (cond
                (= mx r) (/ (+ (/ (- g b) d) (if (< g b) 6 0)) 6.0)
                (= mx g) (/ (+ (/ (- b r) d) 2.0) 6.0)
                :else     (/ (+ (/ (- r g) d) 4.0) 6.0))]
        [(* h 360) (* s 100) (* l 100)]))))

(defn hsl->hex
  "Converts [h s l] (h: 0-360, s: 0-100, l: 0-100) to a hex color string."
  [[h s l]]
  (let [h (/ (mod h 360) 360.0)
        s (/ s 100.0)
        l (/ l 100.0)
        hue->rgb (fn [p q t]
                   (let [t (cond (< t 0) (+ t 1) (> t 1) (- t 1) :else t)]
                     (cond
                       (< t (/ 1.0 6)) (+ p (* (- q p) 6.0 t))
                       (< t 0.5)       q
                       (< t (/ 2.0 3)) (+ p (* (- q p) (- (/ 2.0 3) t) 6.0))
                       :else           p)))
        [r g b] (if (zero? s)
                  [l l l]
                  (let [q (if (< l 0.5) (* l (+ 1.0 s)) (- (+ l s) (* l s)))
                        p (- (* 2.0 l) q)]
                    [(hue->rgb p q (+ h (/ 1.0 3)))
                     (hue->rgb p q h)
                     (hue->rgb p q (- h (/ 1.0 3)))]))]
    (str "#"
         (.padStart (.toString (js/Math.round (* r 255)) 16) 2 "0")
         (.padStart (.toString (js/Math.round (* g 255)) 16) 2 "0")
         (.padStart (.toString (js/Math.round (* b 255)) 16) 2 "0"))))


(defn adjust-color
  "Takes a hex color and adjusts HSL components. Only provided keys are changed.
   Options:
     :hue - set hue (0-360)
     :sat - set saturation (0-100)
     :lit - set lightness (0-100)"
  [hex & {:keys [hue sat lit]}]
  (let [[h s l] (hex->hsl hex)]
    (hsl->hex [(or hue h)
               (or sat s)
               (or lit l)])))

(defn object-volume
  [dims]
  (apply * dims))

(defn normalize-volumes
  [volumes]
  [(apply min volumes) (apply max volumes)])

(defn remap
  "Remaps val from [start end] range to [0 1]. Clamped to 0-1."
  [val start end]
  (let [t (/ (- val start) (- end start))]
    (max 0.0 (min 1.0 t))))

(comment

  (object-volume [36 36 48])
  ;;=> 62208
  (object-volume [4 4 6])
  ;;=> 96

  (normalize-volumes [1 2 4 10])

  (adjust-color "#e2e2e2" {:sat 100})

  (adjust-color "#ff0000" {:sat 1})
  ;;=> "#d5d5d5"

  (let [base-color (adjust-color "#eb0000" {:sat 100})]
    (set-edn "mockup-006"
             {:name "Mockup 006"
              :camera {:position [150 150 150]
                       :target [0 50 0]}
              :data [{:bounds [36 36 48]
                      :layers [[{:color "#ffd2d2"
                                 :align :tl
                                 :dims  [4 4 6]}
                                {:color "#ffd2d2"
                                 :align :tr
                                 :dims  [4 4 6]}
                                {:color "#ffd2d2"
                                 :align :bl
                                 :dims  [4 4 6]}
                                {:color "#ffd2d2"
                                 :align :br
                                 :dims  [4 4 6]}]]}
                     {:layers [[{:color base-color
                                 :align :tl
                                 :dims [36 36 48]}]]}
                     {:layers [[{:color "#ff7d7d"
                                 :align :tl
                                 :dims [36 8 12]}]]}
                     {:layers [[{:color "#ff9f9f"
                                 :align :tl
                                 :dims [12 6 12]}]]}
                     {:layers [[{:color "#ffe1e1"
                                 :align :tl
                                 :dims [4 4 4]}]]}]}))

  (let [base-color (adjust-color "#ffd4d4" {:sat 100})]
    (set-edn "mockup-007"
             {:name "Mockup 007 - Reversed"
              :camera {:position [150 150 150]
                       :target [0 50 0]}
              :data [{:bounds [36 36 48]
                      :layers [[{:color "#eb0000"
                                 :align :tl
                                 :dims  [4 4 6]}
                                {:color "#eb0000"
                                 :align :tr
                                 :dims  [4 4 6]}
                                {:color "#eb0000"
                                 :align :bl
                                 :dims  [4 4 6]}
                                {:color "#eb0000"
                                 :align :br
                                 :dims  [4 4 6]}]]}
                     {:layers [[{:color base-color
                                 :align :tl
                                 :dims [36 36 48]}]]}
                     {:layers [[{:color "#ffb1b1"
                                 :align :tl
                                 :dims [36 8 12]}]]}
                     {:layers [[{:color "#ff9f9f"
                                 :align :tl
                                 :dims [12 6 12]}]]}
                     {:layers [[{:color "#eb0000"
                                 :align :tl
                                 :dims [4 4 4]}]]}]}))

  ;;Keep from folding
  )

