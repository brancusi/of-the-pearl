(ns otp.services.shopify
  (:require ["@shopify/storefront-api-client" :refer [createStorefrontApiClient]]
            [otp.config :as config]))

(defonce client
  (createStorefrontApiClient
   #js {:storeDomain config/shopify-store-domain
        :publicAccessToken config/shopify-storefront-token
        :apiVersion "2026-04"}))

;; ---- Data helpers ----

(defn- edges->nodes
  "Unwrap a Relay connection: {:edges [{:node {...}} ...]} → [{...} ...]"
  [connection]
  (mapv :node (:edges connection)))

(defn- flatten-connections
  "Recursively walk a map and replace any value that looks like a Relay
   connection ({:edges [{:node ...}]}) with a flat vector of nodes."
  [m]
  (cond
    (map? m)
    (let [flat (if (contains? m :edges)
                 (edges->nodes m)
                 m)]
      (if (map? flat)
        (persistent!
         (reduce-kv (fn [acc k v] (assoc! acc k (flatten-connections v)))
                    (transient {})
                    flat))
        (mapv flatten-connections flat)))

    (vector? m)
    (mapv flatten-connections m)

    :else m))

(defn- parse-price
  "Convert Shopify price string to a number."
  [price-str]
  (when price-str
    (js/parseFloat price-str)))

(defn- normalize-product
  "Transform a raw Shopify product map into a clean structure."
  [product]
  (let [flat (flatten-connections product)]
    (-> flat
        (update-in [:priceRange :minVariantPrice :amount] parse-price))))

;; ---- API ----

(defn query
  "Execute a GraphQL query against the Shopify Storefront API.
   Returns a Promise resolving to the parsed response data (as a Clojure map).
   
   - gql: GraphQL query string
   - variables: optional Clojure map of variables"
  ([gql]
   (query gql nil))
  ([gql variables]
   (-> (.request client
                 gql
                 (when variables
                   #js {:variables (clj->js variables)}))
       (.then (fn [response]
                (js->clj (.-data response) :keywordize-keys true))))))

(defn product-by-handle
  "Fetch a product by its handle. Returns a Promise resolving to a normalized product map."
  [handle]
  (-> (query
       "query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }"
       {:handle handle})
      (.then (fn [data] (normalize-product (:product data))))))

(defn get-products
  "Fetch all products (first page). Returns a Promise resolving to a vector of normalized product maps."
  ([]
   (get-products 10))
  ([n]
   (-> (query
        "query GetProducts($first: Int!) {
       products(first: $first) {
         edges {
           node {
             id
             title
             handle
             description
             priceRange {
               minVariantPrice {
                 amount
                 currencyCode
               }
             }
             images(first: 1) {
               edges {
                 node {
                   url
                   altText
                 }
               }
             }
           }
         }
       }
     }"
        {:first n})
       (.then (fn [data] (mapv normalize-product (edges->nodes (:products data))))))))

(comment
  ;; Fetch all products — returns normalized flat maps
  ;; e.g. [{:id "gid://..." :title "Bent 207" :handle "bent-207"
  ;;        :description "..."
  ;;        :priceRange {:minVariantPrice {:amount 1000.0 :currencyCode "USD"}}
  ;;        :images [{:url "https://cdn.shopify.com/..." :altText nil}]}]
  (-> (get-products)
      (.then (fn [products] (tap> products)))
      (.catch (fn [err] (js/console.error "error:" err))))

  ;; Fetch single product by handle
  (-> (product-by-handle "bent-207")
      (.then (fn [product] (tap> product)))
      (.catch (fn [err] (js/console.error "error:" err))))

  ;;Keep from folding
  )
