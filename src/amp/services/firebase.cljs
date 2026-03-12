(ns amp.services.firebase
  (:require ["firebase/app" :refer [initializeApp]]
            ["firebase/database" :refer [getDatabase ref onValue off get set]]
            [cljs.reader :as reader]))

;; Firebase configuration
(def firebase-config
  #js {:databaseURL "https://armenian-pavilion-default-rtdb.firebaseio.com/"})

;; Initialize Firebase app


(defonce app (initializeApp firebase-config))

;; Get database reference
(defonce db (getDatabase app))

(defn get-value
  "Fetch a value once from a specific path in the database.
    Returns a promise that resolves to the value (js->clj converted)."
  [path]
  (-> (get (ref db path))
      (.then (fn [snapshot]
               (let [val ^js (.val snapshot)]
                 (js->clj val :keywordize-keys true))))
      (.catch (fn [err]
                (js/console.error "Firebase get error:" err)
                (throw err)))))

(defn listen-to-path
  "Listen for changes at a specific path in the database.
    Returns an unsubscribe function that can be called to stop listening.
    
    Arguments:
    - path: string path in the database (e.g. \"users/123\" or \"config\")
    - on-value: callback function that receives the value (js->clj converted)
    - on-error: optional callback for errors"
  ([path on-value]
   (listen-to-path path on-value nil))
  ([path on-value on-error]
   (let [db-ref (ref db path)
         callback (fn [^js snapshot]
                    (let [val (.val snapshot)]
                      (on-value (js->clj val :keywordize-keys true))))]
     (if on-error
       (onValue db-ref callback on-error)
       (onValue db-ref callback))
     ;; Return unsubscribe function
     (fn [] (off db-ref)))))

;; EDN-based functions for preserving Clojure data types exactly

(defn set-edn
  "Store a Clojure value at the specified path as EDN string.
   Preserves keywords, vectors, and all Clojure data types.
   Returns a promise."
  [path value]
  (-> (set (ref db path) (pr-str value))
      (.catch (fn [err]
                (js/console.error "Firebase set-edn error:" err)
                (throw err)))))

(defn get-edn
  "Fetch an EDN value once from a specific path.
   Returns a promise that resolves to the parsed Clojure value."
  [path]
  (-> (get (ref db path))
      (.then (fn [^js snapshot]
               (let [val (.val snapshot)]
                 (when (string? val)
                   (reader/read-string val)))))
      (.catch (fn [err]
                (js/console.error "Firebase get-edn error:" err)
                (throw err)))))

(defn listen-to-edn
  "Listen for EDN changes at a specific path in the database.
   Returns an unsubscribe function.
   
   Arguments:
   - path: string path in the database
   - on-value: callback function that receives the parsed Clojure value
   - on-error: optional callback for errors"
  ([path on-value]
   (listen-to-edn path on-value nil))
  ([path on-value on-error]
   (let [db-ref (ref db path)
         callback (fn [^js snapshot]
                    (let [val (.val snapshot)]
                      (on-value (when (string? val) (reader/read-string val)))))]
     (if on-error
       (onValue db-ref callback on-error)
       (onValue db-ref callback))
     ;; Return unsubscribe function
     (fn [] (off db-ref)))))


(comment

  ;; Test one-time get
  (-> (get-value "hello")
      (.then #(tap> %))
      (.catch #(tap> {:error %})))

  (listen-to-path "hello" (fn [val] (tap> val)))

  ;; EDN examples - preserves keywords and vectors exactly
  (def test-data [{:bounds [36 36 60]
                   :layers [[{:color "red" :align :tl :dims [4 4 6]}]]}])

  ;; Save EDN
  (-> (set-edn "mockup/layers" {:obj 2})
      (.then #(tap> :saved))
      (.catch #(tap> {:error %})))

  ;; Load EDN once
  (-> (get-edn "mockup/layers")
      (.then #(tap> %))
      (.catch #(tap> {:error %})))
  ;;=> #object [Promise [object Promise]]

  ;; Listen for EDN changes
  (def unsub (listen-to-edn "mockup/layers" #(tap> {:what %})))
  (unsub) ;; call to stop listening

  (tap> "2")

  ;;Keep from folding
  )
