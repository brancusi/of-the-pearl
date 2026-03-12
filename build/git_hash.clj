(ns git-hash
  (:require [clojure.java.shell :as shell]
            [clojure.string]))

(defn get-git-hash []
  (let [{:keys [exit out]} (shell/sh "git" "rev-parse" "--short" "HEAD")]
    (if (zero? exit)
      (clojure.string/trim out)
      "unknown")))

(defn hook
  {:shadow.build/stage :configure}
  [build-state]
  (let [git-hash (get-git-hash)]
    (update-in build-state
               [:compiler-options :closure-defines]
               assoc 'amp.config/git-hash git-hash)))

(comment

  (get-git-hash)

  ;;Keep from folding
  )