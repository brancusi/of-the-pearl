(ns amp.pages.blog.registry
  "Post registry — maps slug strings to post metadata and render components.
   To add a new post:
   1. Create a namespace under amp.pages.blog.posts.*
   2. Export a `post-meta` map and a `post-content` defnc component.
   3. Require the namespace here and add an entry to `posts`."
  (:require
   [amp.pages.blog.posts.pavilion-construction-begins :as post-1]
   [amp.pages.blog.posts.blue-yellow-maquette :as post-byby]
   [amp.pages.blog.posts.venice-arrival :as post-2]))

(def posts
  "Ordered vector of post maps. Newest first.
   Each entry: {:slug :title :date :summary :cover-image :component}"
  [post-byby/post-meta])

(def posts-by-slug
  "Lookup map: slug string → post map."
  (into {} (map (juxt :slug identity) posts)))

