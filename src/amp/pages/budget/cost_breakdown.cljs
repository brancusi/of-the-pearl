(ns amp.pages.budget.cost-breakdown
  (:require
   [amp.pages.budget.table :refer [budget-table]]
   [amp.ui.expandable-text :refer [expandable-text-area-2]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def cost-data
  [{:id :venue
    :title "Venue & Operations"
    :description
    "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational."
    :details
    [{:group "Base" :title "Base Rent" :amount 145600
      :description "Exclusive use of venue April–December 2026 for the full Biennale period."}
     {:group "Base" :title "Base Staff" :amount 50000
      :description "Exhibition staff during the opening period, including security and front-of-house personnel."}
     {:group "Base" :title "Curatorial Mediator" :amount 25000
      :description "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."}
     {:group "Base" :title "Cleaning" :amount 7000
      :description "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."}
     {:group "Permitting" :title "Permits & Signage" :amount 10000
      :description "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."}
     {:group "Permitting" :title "Fire Safety Cert." :amount 3500
      :description "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."}
     {:group "Permitting" :title "Liability Ins." :amount 2500
      :description "Public liability insurance covering visitors, staff, and third parties for the full exhibition period."}
     {:group "Construction" :title "Partitions & Walls" :amount 9500
      :description "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."}
     {:group "Construction" :title "Lighting" :amount 7500
      :description "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."}
     {:group "Taxes" :title "Signage Taxes" :amount 1500
      :description "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."}
     {:group "Taxes" :title "VAT 22%" :amount 55000
      :description "Italian value-added tax on applicable venue services."}
     {:group "Overhead" :title "Team Lodging" :amount 95000
      :description "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."}
     {:group "Overhead" :title "Per Diem" :amount 66000
      :description "Daily living expenses for the Venice-based team. $100/day per head during active operating months."}
     {:group "Overhead" :title "Project Insurance" :amount 50000
      :description "Project insurance coverage for the Venice operations period. 10 months at $5,000/month."}]}
   {:id :admin
    :title "Administration"
    :description
    "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle."
    :details
    [{:group "Staff" :title "Curators" :amount 90000
      :description "Curatorial leadership. 18 months at $5,000/month."}
     {:group "Staff" :title "Artist" :amount 45000
      :description "Artist fees. 18 months at $2,500/month."}
     {:group "Staff" :title "Project Coordinator" :amount 45000
      :description "Project coordination. 18 months at $2,500/month."}
     {:group "Travel & Overhead" :title "Team Travel" :amount 49000
      :description "International and regional travel for core team during scouting, installation, opening week, and milestones."}
     {:group "Travel & Overhead" :title "Team Lodging" :amount 7500
      :description "Accommodation for core team during opening week and critical on-site periods in Venice."}
     {:group "Travel & Overhead" :title "Misc" :amount 5500
      :description "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."}]}
   {:id :la-prod
    :title "LA Production"
    :description
    "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice."
    :details
    [{:group "Labor" :title "Lead Caster" :amount 37625
      :description "Lead caster. 5 months at $7,525/month."}
     {:group "Labor" :title "Caster" :amount 22500
      :description "Casting professional. 5 months at $4,500/month."}
     {:group "Labor" :title "General Assistant" :amount 21500
      :description "General production assistant. 5 months at $4,300/month."}
     {:group "Labor" :title "Mold Maker" :amount 15000
      :description "Specialist mold maker. 2 months at $7,500/month."}
     {:group "Labor" :title "Foam Sprayer" :amount 9000
      :description "Contract foam sprayer for structural cores. 2 months at $4,500/month."}
     {:group "Labor" :title "Casting Asst. ×3" :amount 9000
      :description "3 casting assistants. 2 months at $1,500/month each."}
     {:group "Labor" :title "Packers ×4" :amount 14000
      :description "4 packers for crating and shipping prep. 1 month at $3,500 each."}
     {:group "Labor" :title "Crate Makers ×2" :amount 10000
      :description "2 crate makers for custom shipping crates. 1 month at $5,000 each."}
     {:group "Overhead" :title "Studio Rental" :amount 22500
      :description "LA studio rent for fabrication. 5 months at $4,500/month."}
     {:group "Overhead" :title "Foam Space Rental" :amount 5500
      :description "Additional foam production space rental. 2 months at $2,750/month."}
     {:group "Overhead" :title "Utilities" :amount 3000
      :description "Utilities for the LA production facility. 2 months at $1,500/month."}
     {:group "Materials" :title "Pigment" :amount 11500
      :description "High-quality pigments integrated into plaster at casting."}
     {:group "Materials" :title "Honeycomb" :amount 1500
      :description "Structural honeycomb material for lightweight internal reinforcement."}
     {:group "Materials" :title "Polymers" :amount 1500
      :description "Binders and polymer materials used in finishing and protection."}
     {:group "Materials" :title "Foam Material" :amount 21000
      :description "Lightweight foam cores for structural integrity while minimizing shipping weight."}
     {:group "Materials" :title "Plaster" :amount 4500
      :description "Primary casting material for all sculptural units."}
     {:group "Materials" :title "Supplies" :amount 10500
      :description "Consumable supplies used during casting and finishing."}
     {:group "Materials" :title "Mold Supplies" :amount 17500
      :description "Custom mold materials, CNC mother units, and fabrication aids."}
     {:group "Materials" :title "Crate Materials" :amount 15000
      :description "Materials for constructing custom shipping crates."}
     {:group "Materials" :title "Packing Supplies" :amount 5000
      :description "Packing materials for securing artwork during international transit."}
     {:group "Materials" :title "Misc" :amount 7500
      :description "Miscellaneous production expenses. 5 months at $1,500/month."}]}
   {:id :the-studio
    :title "The Studio"
    :description
    "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale."
    :details
    [{:group "Staff" :title "Studio Asst. #1" :amount 54000
      :description "Full-time studio assistant. 9 months at $6,000/month."}
     {:group "Staff" :title "Studio Asst. #2" :amount 46500
      :description "Studio assistant. 6 months at $6,000 + 3 months at $3,500."}
     {:group "Staff" :title "Studio Asst. #3" :amount 23500
      :description "Studio assistant. 1 month at $6,000 + 5 months at $3,500."}
     {:group "Staff" :title "Studio Asst. #4" :amount 23500
      :description "Studio assistant. 1 month at $6,000 + 5 months at $3,500."}
     {:group "Staff" :title "Studio Asst. #5" :amount 6000
      :description "Temporary studio assistant. 1 month at $6,000."}
     {:group "Staff" :title "Studio Asst. #6" :amount 6000
      :description "Temporary studio assistant. 1 month at $6,000."}
     {:group "Install / Uninstall" :title "Installers ×4" :amount 32000
      :description "4 installers for install and uninstall. 2 engagements at $4,000 each."}
     {:group "Install / Uninstall" :title "Crate Makers ×2" :amount 11000
      :description "2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."}
     {:group "Materials" :title "Foam Material" :amount 11500
      :description "Venice-sourced foam materials for ongoing on-site fabrication."}
     {:group "Materials" :title "Pigment" :amount 6750
      :description "Pigments for on-site casting and finishing work."}
     {:group "Materials" :title "Plaster" :amount 4750
      :description "Plaster for on-site sculptural production."}
     {:group "Materials" :title "Supplies" :amount 4750
      :description "Consumable supplies for ongoing studio activity."}
     {:group "Materials" :title "Crate Materials" :amount 7500
      :description "Materials for crating artwork for return shipment."}
     {:group "Materials" :title "Packing Supplies" :amount 2500
      :description "Packing materials for securing artwork at close-out."}
     {:group "Materials" :title "Misc Materials" :amount 4250
      :description "Miscellaneous materials and expendables for studio operations."}]}
   {:id :logistics
    :title "Logistics & Transport"
    :description
    "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment."
    :details
    [{:group "International Freight" :title "Ship LA → Venice" :amount 30000
      :description "International freight from Los Angeles to Venice for all crated artwork and materials."}
     {:group "International Freight" :title "Ship Venice → LA" :amount 30000
      :description "Return international freight from Venice to Los Angeles after close-out."}
     {:group "International Freight" :title "Transit Insurance" :amount 12000
      :description "Insurance coverage for artwork during international transit."}
     {:group "Install / Uninstall" :title "Installers (Venice)" :amount 7200
      :description "Local Venice installation crew. 4 installers for on-site install."}
     {:group "Install / Uninstall" :title "Uninstallers (Venice)" :amount 9000
      :description "Local Venice de-installation crew. 5 uninstallers for close-out."}
     {:group "Local Transport" :title "Port Handling" :amount 2500
      :description "Offloading crates at Venice port; includes terminal fees and labor."}
     {:group "Local Transport" :title "Barge (Port → Stor.)" :amount 3000
      :description "Lagoon barge transport for crates from port to storage facility."}
     {:group "Local Transport" :title "Trucking (Stor. → Venue)" :amount 1200
      :description "Truck transport from storage depot to Biennale venue access point."}
     {:group "Local Transport" :title "Barge (Stor. → Venue)" :amount 3000
      :description "Barge shipping for crates/materials to venue area via Venice canals."}
     {:group "Local Transport" :title "Forklift & Operator" :amount 1300
      :description "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."}
     {:group "Local Transport" :title "Handling Crew" :amount 500
      :description "Movers for crate handling, navigation of canals and venue access."}
     {:group "Storage" :title "Short-Term Storage" :amount 1200
      :description "Storage of crates between arrival and installation. 60 crates for 20 days."}
     {:group "Storage" :title "Empty Crate Storage" :amount 2000
      :description "Storage of empty crates during the Biennale exhibition run. 200 days."}
     {:group "Storage" :title "Waste Removal" :amount 1000
      :description "Removal of packing material, foam waste, and install debris."}
     {:group "Reverse Logistics" :title "Reverse Barge" :amount 3000
      :description "Return transport of crates/materials after uninstall."}
     {:group "Reverse Logistics" :title "Reverse Trucking" :amount 1200
      :description "Transport of crates back to port for outbound shipping."}
     {:group "Reverse Logistics" :title "Reverse Port Handling" :amount 2500
      :description "Terminal fees + labor for reloading outbound container."}]}
   {:id :opening
    :title "Opening Week"
    :description
    "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period."
    :details
    [{:group "Hospitality" :title "Catering — Food" :amount 5250
      :description "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."}
     {:group "Hospitality" :title "Catering — Beverages" :amount 1500
      :description "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."}
     {:group "Hospitality" :title "Catering Staff" :amount 1500
      :description "3–6 servers + 1 event captain for opening night."}
     {:group "Hospitality" :title "Rentals" :amount 1500
      :description "Tables, linens, glassware; Venice incurs transport surcharges due to canals."}
     {:group "Event Ops" :title "Event Coordinator" :amount 1500
      :description "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."}
     {:group "Event Ops" :title "Security" :amount 800
      :description "Safe capacity management at openings per Biennale requirements."}
     {:group "Event Ops" :title "Audio, Light & Tech" :amount 1000
      :description "Small speaker system, microphone, ambient lighting reinforcement."}
     {:group "Event Ops" :title "Event Photography" :amount 500
      :description "Opening night event photography coverage."}
     {:group "Event Ops" :title "Invitations" :amount 500
      :description "Printing or premium digital distribution of invitations."}
     {:group "VIP Programs" :title "VIP Press Preview" :amount 1500
      :description "Staff + scheduling for VIP/press walkthroughs during opening week."}
     {:group "VIP Programs" :title "VIP Water Taxi" :amount 1500
      :description "Transport allowance for VIPs/officials. 8 rides at $120/ride."}]}
   {:id :marketing
    :title "Marketing & PR"
    :description
    "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse."
    :details
    [{:group "Design" :title "Visual Identity" :amount 2500
      :description "Design of pavilion identity, key visual and main poster."}
     {:group "Design" :title "Essentials Package" :amount 1500
      :description "Press kit, invitations, social templates, digital ads."}
     {:group "Design" :title "Website & Hosting" :amount 7500
      :description "Design and hosting of the pavilion website."}
     {:group "Design" :title "OOH Design" :amount 1500
      :description "Design for totems and out-of-home placements."}
     {:group "Design" :title "Exhibition Graphics" :amount 1500
      :description "Entrance graphics, wall texts, wayfinding signage."}
     {:group "Writing" :title "Social Copywriting" :amount 1500
      :description "Ongoing caption writing, messaging, narrative scripting."}
     {:group "Writing" :title "PR Writing" :amount 1500
      :description "Speeches, press releases, media statements."}
     {:group "Advertising" :title "Totem Placement" :amount 8500
      :description "Rental + printing + installation for Biennale duration."}
     {:group "Advertising" :title "Vaporetto Wraps" :amount 12500
      :description "Rental + production for 2–3 vaporetto lines over Biennale duration."}
     {:group "Advertising" :title "Poster Printing" :amount 5000
      :description "250 posters at $20 each for venue and city placements."}
     {:group "Advertising" :title "Outdoor Posters" :amount 3000
      :description "Secondary placements across Venice — 50 posters at $60 each."}
     {:group "Advertising" :title "Social Media Ads" :amount 2500
      :description "Instagram, Facebook, and TikTok ads for 7 months."}
     {:group "Advertising" :title "Social Campaign Mgmt" :amount 2500
      :description "Strategy, posting, optimization, reporting."}
     {:group "Advertising" :title "Digital Pub Ads" :amount 2500
      :description "Ads on e-flux, ArtNews, Hyperallergic, Frieze."}
     {:group "Advertising" :title "Print Pub Ads" :amount 5000
      :description "Artforum, Art Newspaper, and similar print publications."}
     {:group "PR" :title "PR — Pre-Opening" :amount 1500
      :description "Press relations, writing, pitching, coordination."}
     {:group "PR" :title "PR — Ongoing" :amount 1500
      :description "Sustained PR, press tracking, releases, interviews over 7 months."}
     {:group "PR" :title "Marketing Mgmt Fee" :amount 2500
      :description "Overall coordination of marketing and media buys."}]}
   {:id :publication
    :title "Publications"
    :description
    "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence."
    :details
    [{:group "Writing" :title "Curatorial Essay" :amount 2500
      :description "Primary curatorial essay for catalogue and website."}
     {:group "Writing" :title "Catalogue Essays" :amount 4000
      :description "Commissioned essays by 4 invited writers and scholars at $1,000 each."}
     {:group "Catalogue" :title "Design" :amount 7500
      :description "Design of exhibition catalogue (120 pages, soft cover)."}
     {:group "Catalogue" :title "Editing & Layout" :amount 2500
      :description "Editing and layout of copy, images, and inserts."}
     {:group "Catalogue" :title "Printing" :amount 12000
      :description "High-quality color printing, 120 pages. 150 copies at $80 each."}
     {:group "Catalogue" :title "Proofs & Shipping" :amount 1000
      :description "Proofs, shipping, and miscellaneous printing costs."}
     {:group "Tote" :title "Design" :amount 2500
      :description "Design of exhibition totes."}
     {:group "Tote" :title "Printing" :amount 4500
      :description "High-quality silkscreen run. 300 totes at $15 each."}
     {:group "Tote" :title "Proofs & Shipping" :amount 1000
      :description "Proofs, shipping, and miscellaneous costs for totes."}
     {:group "Stationery" :title "Design" :amount 1500
      :description "Cards, postcards, flyers design."}
     {:group "Stationery" :title "Printing" :amount 1500
      :description "300 pieces at $5 each."}
     {:group "Stationery" :title "Proofs & Shipping" :amount 250
      :description "Proofs, shipping, and miscellaneous stationery costs."}]}
   {:id :documentation
    :title "Documentation"
    :description
    "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy."
    :details
    [{:group "Production" :title "Camera & Lighting" :amount 10000
      :description "Rental package for cinema cameras, lenses, lighting, audio kits."}
     {:group "Production" :title "DPs ×2" :amount 20400
      :description "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."}
     {:group "Production" :title "Assistant / Gaffer" :amount 4500
      :description "Lighting and camera support during shoots. 10 days at $450/day."}
     {:group "Production" :title "Sound Recording" :amount 2800
      :description "Location audio capture, ambient sound, dialogue. 8 days at $350/day."}
     {:group "Production" :title "Photo — Install" :amount 1750
      :description "High-resolution documentation during installation. 5 days at $350/day."}
     {:group "Production" :title "Photo — Exhibition" :amount 1800
      :description "Final artwork + pavilion architecture photography. 3 days at $600/day."}
     {:group "Production" :title "Photo — Opening" :amount 1400
      :description "Coverage for VIP events, public programs, press preview. 2 days at $700/day."}
     {:group "Post" :title "Film Assembly" :amount 3000
      :description "Initial cut of installation and exhibition film. 6 days at $500/day."}
     {:group "Post" :title "Final Cut & Color" :amount 2400
      :description "Professional colorist and finishing for final delivery. 4 days at $600/day."}
     {:group "Post" :title "Sound Edit & Mix" :amount 1600
      :description "Cleanup, music integration, final audio polish. 4 days at $400/day."}
     {:group "Post" :title "Social Deliverables" :amount 6000
      :description "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."}
     {:group "Post" :title "Backup & Archive" :amount 750
      :description "Redundancy, hard drives, digital archiving of all materials."}]}])


(defn convert-amount
  [data rate]
  (mapv (fn [section]
          (assoc section :details (mapv (fn [detail]
                                          (assoc detail :amount (* (:amount detail) rate)))
                                        (:details section))))

        data))

(defnc preview
  [{:keys []}]
  (d/div {:class (s/cx s/body-lg "p-4")}
         (d/span {}
                 "The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—"
                 "structured to meet the standards of the most rigorous national presentations. ")
         (d/span {:class s/text-secondary} "With a total budget of approximately ")

         (d/span {:class s/text-secondary} " (")
         (d/span {:class s/value-currency} "$1,6M USD")
         (d/span {:class s/text-secondary} "), the financial framework covers the full scope of ")
         (d/span {:class s/em-strong} "production, installation, operations, communications,")
         (d/span {:class s/text-secondary} " and ")
         (d/span {:class s/em-strong} "documentation")
         (d/span {:class s/text-secondary} ". ")))

(defnc details
  [{:keys []}]
  (d/div {:class (s/cx s/body-lg "p-4")}
         (d/span {}
                 "The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—"
                 "structured to meet the standards of the most rigorous national presentations. ")
         (d/span {:class s/text-secondary} "With a total budget of approximately ")

         (d/span {:class s/text-secondary} " (")
         (d/span {:class s/value-currency} "$1,6M USD")
         (d/span {:class s/text-secondary} "), the financial framework covers the full scope of ")
         (d/span {:class s/em-strong} "production, installation, operations, communications,")
         (d/span {:class s/text-secondary} " and ")
         (d/span {:class s/em-strong} "documentation")
         (d/span {:class s/text-secondary} ". ")

         ;; Venue logic (non-permanent pavilion + cost comparison)
         (d/span {:class "block my-6"}
                 "As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—"
                 "as is customary for many smaller and non-permanent participating nations. ")
         (d/span {:class s/text-secondary}
                 "The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately ")
         (d/span {:class s/value-currency} "$145,600")
         (d/span {:class s/text-secondary} "—while remaining fully accredited and visible within the official Biennale structure. ")
         (d/span {:class s/text-secondary}
                 "By contrast, venues within the Giardini or Arsenale—when available—typically begin at ")
         (d/span {:class s/value-currency} "$450,000")
         (d/span {:class s/text-secondary}
                 " in base rent, before construction, staffing, utilities, logistics, and operating overhead. ")

         ;; Why this venue is essential to THE STUDIO
         (d/div {:class "mt-6"}
                (d/span {:class "mt-6"}
                        "Crucially, the nature of ")
                (d/span {:class s/em-strong} "THE STUDIO")
                (d/span {:class s/text-secondary}
                        " makes this venue choice not only strategic but essential. ")
                (d/span {:class s/text-secondary}
                        "The work is conceived to be produced, refined, and evolved ")
                (d/span {:class (s/cx s/weight-semibold s/em-italic s/text-primary)} "on site")
                (d/span {:class s/text-secondary}
                        ", allowing the Pavilion to function simultaneously as exhibition space and working studio. ")
                (d/span {:class s/text-secondary}
                        "This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—"
                        "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "))

         ;; Not a grand object (process over spectacle)
         (d/span {:class "block my-6"}
                 "Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. ")
         (d/span {:class s/text-secondary} "By producing the work on site, the Pavilion avoids the need for a pre-fabricated ")
         (d/span {:class (s/cx s/weight-semibold s/em-italic s/text-primary)} "\u201cgrand object\u201d")
         (d/span {:class s/text-secondary} " altogether. ")
         (d/span {:class s/text-secondary}
                 "This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: ")
         (d/span {:class s/em-strong} "process over spectacle, presence over monumentality,")
         (d/span {:class s/text-secondary} " and ")
         (d/span {:class s/em-strong} "sustained making over static display")
         (d/span {:class s/text-secondary} ". ")

         ;; Efficiency + rigor (mutually reinforcing)
         (d/div {:class "my-6"} (d/span {:class ""}
                                        "In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. ")
                (d/span {:class s/text-secondary}
                        "The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "))

         ;; Venice realities (why still expensive)
         (d/div {:class "block my-6"}
                (d/span {:class ""}
                        "Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. ")
                (d/span {:class s/text-secondary}
                        "Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. ")
                (d/span {:class s/text-secondary}
                        "These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "))

         ;; Seven-month commitment (keep from template, but integrated)
         (d/span {:class "mt-6"}
                 "Unlike projects that culminate at opening, this Pavilion is conceived as a")
         (d/span {:class (s/cx s/weight-semibold s/em-italic s/text-primary)} " seven-month operational commitment")
         (d/span {:class s/text-secondary}
                 ": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. ")

         ;; What the investment covers
         (d/span {:class "block mt-6"}
                 "Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. ")
         (d/span {:class "block mt-6"}
                 (d/span {:class s/em-strong} "THE STUDIO")
                 (d/span {:class s/text-secondary}
                         " is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "))

         ;; Visibility + legacy
         (d/span {:class "block mt-6"}
                 "Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. ")

         (d/span {:class (s/cx s/body-closing "block mt-6")}
                 "A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage.")))

(defnc footer
  [{:keys []}]
  (d/div {:class "mt-12"}
         ($ budget-table
            {:cost-data cost-data})))

(defnc cost-breakdown
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:idx 3
                                    :section-hint subtitle
                                    :title title
                                    :expand-button-label "Read more"
                                    :preview-text preview
                                    :full-text details
                                    :footer-text footer})))