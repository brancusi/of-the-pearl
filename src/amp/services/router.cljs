(ns amp.services.router
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.state.provider :refer [use-main-state]]
            [helix.hooks :as hooks]
            [reitit.frontend :as rf]
            [amp.utils.lazy-loading :refer-macros [lazy-component]]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]))

;; ---------------------------------------------------------------------------
;; Scroll restoration — push navigations scroll to top, pop (back/forward)
;; restores the saved scroll position so the user lands where they left off.
;; ---------------------------------------------------------------------------

;; :push = user clicked a link  |  :pop = browser back/forward
(defonce ^:private nav-type (atom :push))

;; path → scroll-y, preserved across hot-reloads
(defonce ^:private scroll-positions (atom {}))

(defn log-fn [& params]
  (fn [_]
    (apply js/console.log params)))

(def site-map [{:id ::venue
                :path "visit"
                :title "Visit"
                :view (lazy-component amp.pages.venue.page/venue-view)}

               {:id ::artist
                :path "artist"
                :title "Artist"
                :view (lazy-component amp.pages.artist.page/artist-view)}

               {:id ::blog
                :path "blog"
                :title "Blog"
                :view (lazy-component amp.pages.blog.page/blog-view)}

               {:id ::press
                :path "press"
                :title "Press"
                :view (lazy-component amp.pages.press.page/press-view)}

               {:id ::budget
                :path "budget"
                :title "Budget"
                :view (lazy-component amp.pages.budget.page/budget-view)}

               {:id ::mockups
                :path "mockups"
                :title "Mockups"
                :hide-footer? true
                :view (lazy-component amp.pages.mockup.page/mockup-view)}])

(defn routes
  []
  (into ["/"
         [""
          {:name :home
           :view (lazy-component amp.pages.landing.page/landing-view)
           :controllers [{:start (log-fn "start" "landing controller")
                          :stop (log-fn "stop" "landing controller")}]}]]
        (mapcat (fn [{:keys [id path view hide-footer?]}]
                  (let [route-data {:name id
                                    :view view
                                    :hide-footer? hide-footer?
                                    :controllers [{:start (log-fn (str "start!!!" id))
                                                   :stop (log-fn (str "stop!!!" id))}]}]
                    (if (= id ::blog)
                      ;; Blog gets two routes: index + slug-parameterized post
                      [[path route-data]
                       [(str path "/:slug")
                        (assoc route-data :name ::blog-post)]]
                      [[path route-data]])))
                site-map)))

(comment

  (routes)

  ;;Keep from folding
  )

(defnc router
  [{:keys [children]}]

  (let [[state dispatch!] (use-main-state)
        [is-ready? set-is-ready!] (hooks/use-state false)

        route-change-callback (hooks/use-callback
                               [state]
                               (fn [new-route]
                                 (js/console.log new-route)
                                 (let [old-route (:current-route state)
                                       old-path  (:path old-route)]

                                   ;; Save scroll position for the page we're leaving
                                   (when old-path
                                     (swap! scroll-positions assoc old-path (.-scrollY js/window)))

                                   (rfc/apply-controllers old-route new-route)
                                   (dispatch! [:enter-route! new-route])

                                   ;; Scroll behaviour depends on navigation type
                                   (let [type @nav-type]
                                     (reset! nav-type :push) ;; reset for next navigation
                                     (if (= type :pop)
                                       ;; Back/forward → restore saved position (after view renders)
                                       (let [saved (get @scroll-positions (:path new-route) 0)]
                                         (js/requestAnimationFrame
                                          #(.scrollTo js/window 0 saved)))
                                       ;; Push (link click) → jump to top immediately
                                       (.scrollTo js/window 0 0))))))]

    (hooks/use-effect
     :once

     ;; Disable browser's automatic scroll restoration — we handle it
     (set! (.. js/history -scrollRestoration) "manual")

     ;; Detect browser back/forward *before* reitit's handler fires
     (let [on-pop (fn [_] (reset! nav-type :pop))]
       (.addEventListener js/window "popstate" on-pop)

       (rfe/start!
        (rf/router
         (routes)
         {:data {:controllers [{:start (log-fn "start" "root-controller")
                                :stop (log-fn "stop" "root controller")}]}})
        route-change-callback
        {:use-fragment false})

       (set-is-ready! true)

       ;; Cleanup
       (fn []
         (.removeEventListener js/window "popstate" on-pop))))

    (when is-ready?
      children)))
