/* ================= COLOUR DATA ================= */

const GROUPS = [
  { id: "neutral", label: "Whites & Neutrals", swatch: "#F2ECDA", shades: [
    { name: "Soft White", hex: "#F5F1E7", code: "10 B 15" }, { name: "Ivory", hex: "#F0E6C9", code: "10 C 31" },
    { name: "Magnolia", hex: "#F2E9CE", code: "08 B 15" }, { name: "Buttermilk", hex: "#F2E2B8", code: "08 C 31" },
    { name: "Vellum", hex: "#EDE4C8", code: "08 B 17" }, { name: "Full Moon", hex: "#F5F0DD" },
    { name: "Porcelain Bowl", hex: "#F3EFD9" }, { name: "Antique Cream", hex: "#EDE0BE" },
  ]},
  { id: "yellow", label: "Yellow", swatch: "#F0CB53", shades: [
    { name: "Mustard", hex: "#C99A3E", code: "10 C 35" }, { name: "Jasmine", hex: "#F2E27A", code: "10 E 49" },
    { name: "Just Yellow", hex: "#F2CB2B", code: "10 E 50" }, { name: "African Gold", hex: "#C08A2E", code: "10 D 45" },
    { name: "Yellow Canary", hex: "#F2D53C", code: "10 E 53" }, { name: "Golden Sun", hex: "#F0CB53" },
    { name: "Summer Yellow", hex: "#F0DE7E" }, { name: "Tivoli Gold", hex: "#E8A93A", code: "08 E 51" },
    { name: "Soleil", hex: "#F0D23C" },
  ]},
  { id: "orange", label: "Orange", swatch: "#E8862B", shades: [
    { name: "Tango", hex: "#E8862B", code: "06 E 51" }, { name: "Peach Melba", hex: "#F0B98A", code: "06 E 50" },
    { name: "Orange Tan", hex: "#D9631F", code: "06 E 56" }, { name: "Bokhara", hex: "#D9601F", code: "06 D 43" },
    { name: "Croquet Orange", hex: "#E8601F" }, { name: "Morroccan Sun", hex: "#E8862B" },
    { name: "Ginger Snap", hex: "#C4602F" }, { name: "Sundown", hex: "#E0A468" },
  ]},
  { id: "red", label: "Red & Pink", swatch: "#C4293A", shades: [
    { name: "Rusty Red", hex: "#B5342A", code: "04 D 44" }, { name: "Geranium", hex: "#C4293A", code: "04 E 53" },
    { name: "Brick Dust", hex: "#C4485A", code: "04 C 37" }, { name: "Deco Red", hex: "#A61F2E", code: "04 D 45" },
    { name: "Coral Pink", hex: "#D97C86", code: "04 E 49" }, { name: "Powder Pink", hex: "#EFC0CB", code: "02 C 33" },
    { name: "Dawn Pink", hex: "#EAC7BE", code: "04 C 33" }, { name: "Riva Red", hex: "#C21F26" },
    { name: "Sentry Red", hex: "#9E1B24" }, { name: "Amber Glow", hex: "#C0522A" },
    { name: "Orchestral Red", hex: "#8E1F2A" },
  ]},
  { id: "purple", label: "Purple & Lilac", swatch: "#8E7FC7", shades: [
    { name: "Mulberry", hex: "#4A1B33", code: "02 C 39" }, { name: "Spanish Violet", hex: "#5A2C82", code: "22 D 45" },
    { name: "Victoria Plum", hex: "#3D1A44", code: "02 C 40" }, { name: "Wild Lilac", hex: "#C9AFD1", code: "24 C 33" },
    { name: "Clover", hex: "#91237E", code: "02 C 37" }, { name: "Lilac", hex: "#8E7FC7" },
    { name: "Lavender", hex: "#7F8FD1" }, { name: "Light Lilac", hex: "#B7A8E0" },
    { name: "Lilac Haze", hex: "#E3D3E6" },
  ]},
  { id: "blue", label: "Blue", swatch: "#1F5FA8", shades: [
    { name: "Billberry", hex: "#5E6FB0", code: "22 C 37" }, { name: "Northern Sky", hex: "#5F92AC", code: "18 C 35" },
    { name: "Zircon", hex: "#A9CBD4", code: "16 C 33" }, { name: "Aqua", hex: "#4FA6A0", code: "14 C 35" },
    { name: "Cote D'Azur", hex: "#1E3A73", code: "18 D 43" }, { name: "Capri", hex: "#1B7A8C", code: "16 C 37" },
    { name: "Polar Blue", hex: "#7EC1E0", code: "18 E 50" }, { name: "Cosmos", hex: "#12123B", code: "18 C 39" },
    { name: "Cornflower", hex: "#1F5FA8", code: "18 E 53" }, { name: "True Blue", hex: "#1E6FBF", code: "20 E 51" },
    { name: "Malindi Blue", hex: "#2E6FC4" }, { name: "Summer Blue", hex: "#8FB9D6" },
  ]},
  { id: "green", label: "Green", swatch: "#1F8A4C", shades: [
    { name: "Emerald", hex: "#1A8C55", code: "14 E 53" }, { name: "Sage", hex: "#B7C89E", code: "12 B 17" },
    { name: "Willow", hex: "#A9C97E", code: "12 C 33" }, { name: "Lollipop", hex: "#A9D62E", code: "12 E 51" },
    { name: "Greengage", hex: "#4F8C1F", code: "12 D 43" }, { name: "Laurel", hex: "#1F5F2F", code: "12 D 45" },
    { name: "Beetle Green", hex: "#0F3D28", code: "14 C 39" }, { name: "Forest Green", hex: "#1C3B22", code: "12 C 39" },
    { name: "Safaricom Green", hex: "#3FAA35" }, { name: "Kenya Green", hex: "#1F8A4C" },
    { name: "Apple Mint", hex: "#A9D9B0" }, { name: "Mellow Sage", hex: "#7FA07A" },
  ]},
  { id: "brown", label: "Brown & Tan", swatch: "#A9662E", shades: [
    { name: "Rawhide", hex: "#A9662E", code: "08 C 37" }, { name: "Camouflage", hex: "#4A4326", code: "10 B 25" },
    { name: "Peanut Butter", hex: "#D9B87E", code: "06 C 33" }, { name: "Toadstool", hex: "#7A5A4A", code: "04 B 21" },
    { name: "Antique Bronze", hex: "#4A3222", code: "08 C 39" }, { name: "Catalan", hex: "#6E5B4A", code: "06 C 39" },
    { name: "Terracotta Sand", hex: "#C48A6E" }, { name: "Egyptian Sand", hex: "#D9A96E" },
    { name: "Biscuit", hex: "#D9C29A" }, { name: "Waffle", hex: "#C9A96E" },
    { name: "Cream Silk", hex: "#E0CE9E" }, { name: "Warm Apricot", hex: "#E0A97E" },
    { name: "Liqueur", hex: "#8A7565" },
  ]},
  { id: "grey", label: "Grey", swatch: "#7E8A8C", shades: [
    { name: "Pebble", hex: "#C6C9C3", code: "00 A 01" }, { name: "Seagull", hex: "#B7BDB3", code: "10 A 03" },
    { name: "Corvette", hex: "#9AA3A0", code: "00 A 05" }, { name: "Steel", hex: "#7E8A8C", code: "10 A 07" },
    { name: "Pigeon", hex: "#6E7C7C", code: "18 B 21" }, { name: "Granite", hex: "#6E7373", code: "00 A 09" },
    { name: "Slate Grey", hex: "#4A5C5C", code: "18 B 25" }, { name: "Seal Grey", hex: "#3E4A4A", code: "10 A 11" },
    { name: "Mouse Grey", hex: "#8C8377", code: "08 B 21" }, { name: "Ash", hex: "#B3B0A8", code: "22 B 15" },
    { name: "Moonlight", hex: "#D3D9D6", code: "18 C 31" }, { name: "Ice", hex: "#C9D3D1" },
  ]},
  { id: "black", label: "Black & Dark", swatch: "#1C2320", shades: [
    { name: "Velvet Grey", hex: "#1C2320", code: "00 A 13" }, { name: "Gun Metal", hex: "#16211E", code: "18 B 29" },
    { name: "Black", hex: "#0A0A0A" }, { name: "Lizard", hex: "#14140F", code: "10 B 29" },
    { name: "Panatella", hex: "#2A2419", code: "10 C 39" }, { name: "Midnight Blue", hex: "#12123B", code: "20 C 40" },
  ]},
];

const ALL_SHADES = GROUPS.flatMap(g => g.shades.map(s => ({ ...s, group: g.label })));

/* ================= CATALOGUE (single source of truth) ================= */
// tintable: true  -> appears in the colour mixer's product dropdown
// prices: {} means no confirmed price yet -> card shows "Contact us"

const CATALOGUE = [
  { id: "matt", name: "Acrylic Emulsion (Vinyl Matt)", tag: "Exterior", category: "Emulsion & Water-Based Paints", tintable: true, spec: { thinning: "Max 1L water to 4L paint", drying: "Touch dry 20 min max, recoatable after 1 hr", spreading: "14–15 sq.m per litre", finish: "Matt" }, image: "images/floating/acrylic-matt-white-hq.png",
    blurb: "Superior architectural paint on durable acrylic resin. Alkali-resistant, built for heavy rain, dry seasons and strong sun.",
    prep: "Surfaces clean, dry, free of oil, grease, wax or dust. Remove old flaky material. No priming needed on new smooth surfaces.",
    application: "Soft paintbrush or roller. One or two coats depending on porosity. Clean equipment with tap water immediately after use.",
    prices: { "1/2L": 260, "1L": 550, "4L": 1900, "10L": 4700, "20L": 8600 } },
  { id: "weathershieldSilicon", name: "Weathershield (Silicone Based)", tag: "Premium exterior", category: "Emulsion & Water-Based Paints", tintable: true, image: "images/floating/silicone-weathershield-babypink-hq.png",
    blurb: "Silicone-based formulation for maximum exterior weather resistance.",
    prep: "Surfaces clean, dry, free from contaminants and loose material. New surfaces need an alkali-resisting undercoat first.",
    application: "Brush, roller or spray. Two coats recommended. Allow full cure time between coats.",
    prices: { "1/2L": 350, "1L": 650, "4L": 2100, "10L": 5000, "20L": 10000 } },
  { id: "weathershield", name: "Weathershield", tag: "Exterior", category: "Emulsion & Water-Based Paints", tintable: true, image: null,
    blurb: "Heavy-duty exterior protection for facades exposed to harsh weather.",
    prep: "Surfaces clean, dry, free from contaminants and loose material. New surfaces need an alkali-resisting undercoat first.",
    application: "Brush, roller or spray. Two coats recommended for full protection.",
    prices: { "4L": 2000, "10L": 5000, "20L": 9500 } },
  { id: "silk", name: "Vinyl Wallsheen (Silk)", tag: "Interior", category: "Emulsion & Water-Based Paints", tintable: true, spec: { thinning: "Clean tap water", drying: "Touch dry 15–20 min, recoatable after 1 hr", spreading: "10–15 sq.m per litre depending on surface", finish: "Low sheen" }, image: "images/floating/silk-vinyl-white-hq.png",
    blurb: "High-performance interior paint, cool satin finish, high wet-scrub resistance.",
    prep: "Surfaces clean, free from grease, oil, wax, moisture and loose material. New surfaces need one coat of alkali-resisting undercoat first.",
    application: "Soft paintbrush, roller or spray. At least two coats after the undercoat. Clean equipment with tap water immediately.",
    prices: { "1/2L": 350, "1L": 650, "4L": 2100, "10L": 5500, "20L": 10000 } },
  { id: "supergloss", name: "Supergloss", tag: "High gloss", category: "Oil-Based Paints", tintable: true, pairsWith: ["glossUndercoat", "highGlossThinner"], spec: { thinning: "Max 1L white spirit to 4L paint", drying: "Touch dry 3–8 hrs", spreading: "15 sq.m per litre", finish: "Glossy" }, image: "images/floating/supergloss-white-hq.png",
    blurb: "Oil-modified alkyd enamel. Long-lasting, easy-clean coat for wood, metal, asbestos and concrete.",
    prep: "Clean, dry surfaces free of oil, grease, wax and old flaky paint. Fresh surfaces need a primer undercoat first.",
    application: "Soft brush, air spray or dipping. One or two coats over the undercoat. Clean equipment with terpentine or white spirit.",
    prices: { "1/2L": 330, "1L": 650, "4L": 2250, "10L": 5500, "20L": 10500 } },
  { id: "texstar", name: "Texstar Emulsion", tag: "Economy interior", category: "Economy Range", tintable: true, spec: { thinning: "1L water to 4L paint", drying: "Touch dry 20 min max, recoatable after 1 hr", spreading: "10–13 sq.m per litre", finish: "Matt (light shades only)" }, image: "images/floating/texstar-coat-white-hq.png",
    blurb: "Everyday-value emulsion for interior walls.",
    prep: "Surfaces clean, dry and free from dust or flaking material.",
    application: "Brush or roller. One to two coats depending on porosity.",
    prices: { "1/4L": 150, "1/2L": 250, "1L": 450, "4L": 550, "10L": 1300, "20L": 2200 } },
  { id: "plastic", name: "Plastic Emulsion", tag: "Economy interior", category: "Economy Range", tintable: true, image: "images/floating/plastic-matt-white-hq.png",
    blurb: "Economical plastic-based emulsion for interior walls and ceilings.",
    prep: "Surfaces clean, dry and free from dust or flaking material.",
    application: "Brush or roller. One to two coats depending on porosity.",
    prices: { "1/4L": 200, "1/2L": 360, "1L": 630, "4L": 390, "10L": 850, "20L": 1500 } },
  { id: "glossEnamel", name: "Gloss Enamel", tag: "Standard gloss", category: "Oil-Based Paints", tintable: true, pairsWith: ["glossUndercoat", "highGlossThinner"], image: "images/floating/gloss-enamel-two-sizes.png",
    blurb: "Standard alkyd gloss enamel for wood and metal.",
    prep: "Clean, dry surfaces free of oil, grease and flaking material. Fresh surfaces need a primer undercoat.",
    application: "Brush or spray. One to two coats over undercoat. Clean with white spirit.",
    prices: { "1/4L": 90, "1/2L": 160, "1L": 300, "4L": 900, "20L": 4500 } },
  { id: "glossTexstar", name: "Gloss Texstar", tag: "Economy gloss", category: "Economy Range", tintable: true, pairsWith: ["texstarUndercoat", "highGlossThinner"], spec: { thinning: "Max 1:4 white spirit", drying: "Touch dry 3–4 hrs", spreading: "11–13 sq.m per litre", finish: "Glossy" }, image: null,
    blurb: "Economy gloss finish for wood and metal surfaces.",
    prep: "Clean, dry surfaces free of oil, grease and flaking material.",
    application: "Brush or spray. One to two coats. Clean with white spirit.",
    prices: { "1/4L": 100, "1/2L": 180, "1L": 350, "4L": 1250, "20L": 4850 } },
  { id: "covermatt", name: "Covermatt", tag: "Economy interior", category: "Economy Range", tintable: true, image: null,
    blurb: "High-opacity economy matt emulsion for interior walls.",
    prep: "Surfaces clean, dry and free from dust or flaking material.",
    application: "Brush or roller. One to two coats.",
    prices: { "1/2L": 200, "1L": 380, "4L": 1030, "10L": 2300, "20L": 4000 } },

  { id: "varnish", name: "Synthetic Varnish", tag: "Clear finish", category: "Wood Finishes", tintable: false, image: "images/floating/synthetic-varnish.png",
    blurb: "Clear protective finish for wood surfaces, interior and exterior.",
    prep: "Wood surfaces sanded smooth, clean and dry.",
    application: "Soft brush. Apply thin, even coats, allowing full drying time between coats.",
    prices: { "1/4L": 95, "1/2L": 180, "1L": 360, "4L": 2000, "20L": 6000 } },
  { id: "ncWoodFinish", name: "NC Wood Finish (Cherry, Peach)", tag: "Lacquer", category: "Wood Finishes", tintable: false, image: "images/floating/nc-wood-finish-lacquer.png",
    blurb: "Nitrocellulose lacquer wood finish for a smooth, durable clear coat.",
    prep: "Wood surfaces sanded smooth, clean, dry and dust-free.",
    application: "Spray or brush. Thin with Apex Standard Thinner for best results.",
    prices: { "1/4L": 200, "1/2L": 400, "4L": 2400, "20L": 10000 } },

  { id: "glossUndercoat", name: "Premier Coat Gloss Undercoat", tag: "Undercoat", category: "Oil-Based Paints", tintable: false, image: null,
    blurb: "Alkali-resisting undercoat applied before Premier Coat Super Gloss Enamel, for a smoother, longer-lasting finish.",
    prep: "Surfaces clean, dry and free of oil, grease and old flaking paint. Sand glossy surfaces first.",
    application: "Brush or roller. One coat before the gloss topcoat. Allow to dry fully before top-coating.",
    prices: { "1L": 350, "4L": 1200, "20L": 5200 } },

  { id: "texstarUndercoat", name: "Texstar Coat Undercoat", tag: "Undercoat", category: "Economy Range", tintable: false, image: null,
    blurb: "High-opacity undercoat with a flat matt finish, giving an even key for the topcoat. Recommended for metal, wood and asbestos.",
    prep: "Surfaces clean, dry and oil-free. Remove loose or flaking material. Sand previously glossy finishes to a matt surface first.",
    application: "Soft brush or air spray. One coat is usually enough; two for maximum obliteration. Sand smooth before the topcoat. Clean equipment with Premier Coat white spirit.",
    spec: { thinning: "Max 2L white spirit to 4L paint", drying: "Touch dry 3–4 hrs, sandable after 12 hrs", spreading: "8 sq.m per litre", finish: "Matt", colour: "White; other light shades on request" },
    prices: { "1/2L": 200, "1L": 380, "4L": 1250, "20L": 4600 } },

  { id: "highGlossThinner", name: "High Gloss Thinner", tag: "Thinner", category: "Thinners", tintable: false, image: null,
    blurb: "Thinner formulated specifically for gloss enamel — for brushing consistency and equipment cleaning.",
    prep: "N/A — thinning and cleaning agent.",
    application: "Add gradually to gloss enamel until desired consistency is reached.",
    prices: { "1L": 240, "4L": 400, "10L": 1500, "20L": 5800 } },

  { id: "turpentine", name: "Turpentine", tag: "Thinner", category: "Thinners", tintable: false, image: "images/floating/turpentine.png",
    blurb: "General-purpose thinner for oil-based paints and brush cleaning.",
    prep: "N/A — thinning and cleaning agent.",
    application: "Add gradually to paint until desired consistency is reached.",
    prices: { "1/2L": 180, "1L": 300, "4L": 1200, "10L": 2700, "20L": 4000 } },
  { id: "stdThinner", name: "Standard Thinner", tag: "Thinner", category: "Thinners", tintable: false, image: "images/floating/thinner-green.png",
    blurb: "All-purpose thinner for standard enamel and gloss paints.",
    prep: "N/A — thinning and cleaning agent.",
    application: "Add gradually to paint until desired consistency is reached.",
    prices: { "1/2L": 180, "1L": 270, "4L": 1300, "20L": 5000 } },
  { id: "whiteSpirit", name: "Special White Spirit", tag: "Thinner", category: "Thinners", tintable: false, image: "images/floating/special-white-spirit-1.png",
    blurb: "Petroleum-based solvent for thinning and equipment cleaning.",
    prep: "N/A — thinning and cleaning agent.",
    application: "Add gradually to paint until desired consistency is reached.",
    prices: { "1/2L": 200, "1L": 350, "4L": 1250, "10L": 1400, "20L": 4200 } },

  { id: "serafric199Professional", name: "Serafric 199 Professional Wood Glue", tag: "Adhesive", category: "Adhesives", tintable: false, image: "images/floating/serafric-professional-wood-glue-hq.png",
    blurb: "Professional high-quality PVA wood adhesive. Quick setting, dries to a clear film. For high-quality furniture, wood bonding and joinery work.",
    prep: "Surfaces clean, dry and free of dust, deposits or excessive moisture for maximum adhesion.",
    application: "Apply an even film with a spreader, brush or roller. Join parts while wet and clamp until fully set. Clean equipment with clean tap water immediately after use.",
    spec: { colour: "Milk white", openTime: "~15 min (varies with humidity and temperature)", cure: "Full adhesion after 24 hours", specificGravity: "1.12 ± 0.02 kg/L" },
    prices: {} },
  { id: "serafric199Express", name: "Serafric 199 Express Wood Glue", tag: "Adhesive", category: "Adhesives", tintable: false, image: null,
    blurb: "Express PVA white wood adhesive for everyday wood bonding and joinery work.",
    prep: "Surfaces clean, dry and free of dust or old adhesive residue.",
    application: "Apply evenly with a brush or spreader. Join parts and clamp until set.",
    prices: {} },
  { id: "serafric101", name: "Serafric 101 Neoprene Contact Adhesive", tag: "Adhesive", category: "Adhesives", tintable: false, image: "images/floating/serafric-101-contact-cement.png",
    blurb: "High-quality solvent-based neoprene contact adhesive. For Formica to wood, PVC, rubber, leather and rexine.",
    prep: "Surfaces clean, dry and free of dust or grease.",
    application: "Apply by brush to both surfaces, allow to become touch-dry, then bond firmly. Not to be used near naked flame — highly flammable.",
    prices: {} },
  { id: "serafric103", name: "Serafric 103 Neoprene Contact Adhesive", tag: "Adhesive", category: "Adhesives", tintable: false, image: "images/floating/serafric-103-contact-cement.png",
    blurb: "Quality solvent-based neoprene contact adhesive. For leather, PVC, foamed polyurethane, mattresses and upholstery — including bags and ladies' handbags.",
    prep: "Surfaces clean, dry and free of dust or grease.",
    application: "Apply by brush to both surfaces, allow to become touch-dry, then bond firmly.",
    prices: {} },
  { id: "serafric104", name: "Serafric 104 Premier Neoprene Contact Adhesive", tag: "Adhesive", category: "Adhesives", tintable: false, image: null,
    blurb: "Premier-quality solvent-based neoprene contact adhesive for special jobs and difficult-to-bond materials — Formica to wood, PVC, rubber, leather.",
    prep: "Surfaces clean, dry and free of dust or grease.",
    application: "Apply by brush to both surfaces, allow to become touch-dry, then bond firmly.",
    prices: {} },
  { id: "serafric202", name: "Serafric 202 PVC Adhesive", tag: "Adhesive", category: "Adhesives", tintable: false, image: "images/floating/serafric-202-pvc-adhesive.png",
    blurb: "High-quality, fast-drying polyvinyl chloride adhesive. For PVC clean water pipes, waste water pipes, conduits, electrical fittings and PVC gutters.",
    prep: "Surfaces clean, dry and free of dust or moisture.",
    application: "Apply to both pipe and fitting surfaces, join immediately, hold firmly until set.",
    prices: {} },
  { id: "serafric915J", name: "Serafric 915J PVA Glue", tag: "Adhesive", category: "Adhesives", tintable: false, image: null,
    blurb: "PVA glue for plastic labelling — hand and machine application of paper labels to plastic bottles and containers.",
    prep: "Surfaces clean, dry and free of dust or residue.",
    application: "Apply by hand or machine per labelling equipment instructions.",
    prices: {} },

  { id: "floorPaintRed", name: "Gloss Enamel Floor Paint (Red)", tag: "Floor paint", category: "Oil-Based Paints", tintable: false, image: "images/floating/gloss-enamel-floor-paint-red.png",
    blurb: "Durable gloss enamel floor paint for concrete and cement floors, red oxide finish.",
    prep: "Surfaces clean, dry, free of oil, grease, dust and loose material. New concrete should be fully cured.",
    application: "Brush or roller. One to two coats. Clean equipment with white spirit.",
    prices: { "20L": 4700 } },

  { id: "epoxy2pack", name: "2-Pack Epoxy Paint (Main Colours)", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "Two-component epoxy coating for heavy-duty industrial floors and surfaces.",
    prep: "Surfaces clean, dry, free of oil, grease and laitance. Concrete should be fully cured.",
    application: "Mix base and hardener per ratio. Apply by brush, roller or spray within pot life.",
    prices: { "20L": 10000 } },
  { id: "epoxyHardener", name: "Epoxy Hardener", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "Curing agent for Apex 2-pack epoxy paint systems.",
    prep: "N/A — mixing component.",
    application: "Mix with epoxy base at the specified ratio immediately before use.",
    prices: { "20L": 2700 } },
  { id: "qadBlack", name: "QAD Black / Matt Black", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "Quick air-drying black enamel for industrial and structural steelwork.",
    prep: "Surfaces clean, dry and free of rust, oil and grease.",
    application: "Brush or spray. Quick-drying — recoat within a few hours.",
    prices: { "20L": 10000 } },
  { id: "qadAluminium", name: "QAD Aluminium", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "Quick air-drying aluminium finish for metal and structural surfaces.",
    prep: "Surfaces clean, dry and free of rust, oil and grease.",
    application: "Brush or spray. Quick-drying — recoat within a few hours.",
    prices: { "20L": 14500 } },
  { id: "chlorinatedRubber", name: "Chlorinated Rubber Paint", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "Chemical-resistant coating for swimming pools, tanks and industrial structures.",
    prep: "Surfaces clean, dry, free of laitance, oil and grease.",
    application: "Brush, roller or spray. Two coats recommended.",
    prices: {} },
  { id: "bituminousBlack", name: "Bituminous Black", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "Protective bitumen-based black coating for waterproofing and corrosion protection.",
    prep: "Surfaces clean, dry, and free of loose rust and scale.",
    application: "Brush or roller. Apply generously in even coats.",
    prices: { "20L": 6800 } },
  { id: "fastDry", name: "Fast Dry White/Black", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "Rapid-drying enamel for fast turnaround industrial jobs.",
    prep: "Surfaces clean, dry and free of oil, grease and rust.",
    application: "Brush or spray. Dries quickly — work in manageable sections.",
    prices: { "20L": 9500 } },
  { id: "fastDryAluminium", name: "Fast Dry Aluminium", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "Rapid-drying aluminium industrial finish.",
    prep: "Surfaces clean, dry and free of oil, grease and rust.",
    application: "Brush or spray. Dries quickly — work in manageable sections.",
    prices: { "20L": 9500 } },
  { id: "roadMarking", name: "Road Marking Paint", tag: "Industrial", category: "Industrial Range", tintable: false, image: null,
    blurb: "High-visibility, durable paint for road and pavement marking.",
    prep: "Road surface clean, dry and free of dust, oil and loose debris.",
    application: "Spray or brush per road-marking specification. Allow full cure before opening to traffic.",
    prices: {} },
];

const CATEGORY_ORDER = ["Emulsion & Water-Based Paints", "Economy Range", "Oil-Based Paints", "Wood Finishes", "Thinners", "Adhesives", "Industrial Range"];
const SIZE_ORDER = ["1/4L", "1/2L", "1L", "4L", "10L", "20L"];

/* ================= STATE ================= */

let picks = [];
let cart = JSON.parse(sessionStorage.getItem("apexCart") || "[]");
let openGroupId = null;
let mixQty = 1;
let activeCategory = "All";
const cardQty = {}; // per-product-card quantity state, keyed by product id
const cardColor = {}; // per-product-card chosen shade, keyed by product id: {name, hex}
let colorPickerTargetId = null;
let colorPickerOpenGroup = null;

/* ================= HELPERS ================= */

function hexToRgb(hex) {
  const v = hex.replace("#", "");
  return [parseInt(v.substr(0,2),16), parseInt(v.substr(2,2),16), parseInt(v.substr(4,2),16)];
}
function rgbToHex([r,g,b]) {
  return "#" + [r,g,b].map(x => Math.round(x).toString(16).padStart(2,"0")).join("");
}
function blendHexes(hexes) {
  if (hexes.length === 0) return null;
  const sum = hexes.reduce((acc,h) => {
    const [r,g,b] = hexToRgb(h);
    return [acc[0]+r, acc[1]+g, acc[2]+b];
  }, [0,0,0]);
  return rgbToHex(sum.map(v => v / hexes.length));
}
function colorDistance(hexA, hexB) {
  const [r1,g1,b1] = hexToRgb(hexA);
  const [r2,g2,b2] = hexToRgb(hexB);
  return Math.sqrt((r1-r2)**2 + (g1-g2)**2 + (b1-b2)**2);
}
function findNearestShade(hex) {
  let best = null, bestDist = Infinity;
  ALL_SHADES.forEach(s => {
    const d = colorDistance(hex, s.hex);
    if (d < bestDist) { bestDist = d; best = s; }
  });
  return best;
}
function fmt(n) { return "KES " + n.toLocaleString(); }
function saveCart() { sessionStorage.setItem("apexCart", JSON.stringify(cart)); }
function productById(id) { return CATALOGUE.find(p => p.id === id); }

/* ================= NAV + THEME ================= */

const navBtns = document.querySelectorAll(".nav-btn[data-target]");
navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.target).scrollIntoView({ behavior: "smooth" });
  });
});
document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.scroll).scrollIntoView({ behavior: "smooth" });
  });
});

const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navBtns.forEach(b => b.classList.toggle("active", b.dataset.target === e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });
sections.forEach(s => sectionObserver.observe(s));

const themeToggle = document.getElementById("themeToggle");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  iconMoon.hidden = isDark;
  iconSun.hidden = !isDark;
});

/* ================= COLOUR GROUPS ================= */

const groupGrid = document.getElementById("groupGrid");
const shadePanel = document.getElementById("shadePanel");

function renderGroups() {
  groupGrid.innerHTML = "";
  GROUPS.forEach(g => {
    const tile = document.createElement("button");
    tile.className = "group-tile" + (openGroupId === g.id ? " active" : "");
    tile.innerHTML = `
      <div class="swatch" style="background:${g.swatch}"></div>
      <div class="label"><p>${g.label}</p><p>${g.shades.length} shades</p></div>
    `;
    tile.addEventListener("click", () => {
      openGroupId = openGroupId === g.id ? null : g.id;
      renderGroups();
      renderShadePanel();
    });
    groupGrid.appendChild(tile);
  });
}

function renderShadePanel() {
  const group = GROUPS.find(g => g.id === openGroupId);
  if (!group) { shadePanel.hidden = true; shadePanel.innerHTML = ""; return; }
  shadePanel.hidden = false;
  const isFull = picks.length >= 5;
  shadePanel.innerHTML = `
    <div class="shade-panel-header"><h3>${group.label} shades</h3><button id="closeShadePanel">✕</button></div>
    <div class="shade-grid">
      ${group.shades.map(s => {
        const picked = picks.some(p => p.name === s.name);
        const disabled = !picked && isFull;
        return `
          <div class="shade-card">
            <div class="swatch" style="background:${s.hex}"></div>
            <div class="info">
              <p>${s.name}</p>
              ${s.code ? `<p class="shade-code">BS 4800 · ${s.code}</p>` : ""}
              <button data-shade="${s.name}" class="${picked ? "added" : disabled ? "disabled" : ""}" ${disabled ? "disabled" : ""}>
                ${picked ? "✓ Added" : "+ Add to mix"}
              </button>
            </div>
          </div>`;
      }).join("")}
    </div>
  `;
  shadePanel.querySelector("#closeShadePanel").addEventListener("click", () => {
    openGroupId = null; renderGroups(); renderShadePanel();
  });
  shadePanel.querySelectorAll("[data-shade]").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.shade;
      const shade = group.shades.find(s => s.name === name);
      const already = picks.some(p => p.name === name);
      if (already) {
        picks = picks.filter(p => p.name !== name);
      } else if (picks.length < 5) {
        picks.push(shade);
      }
      renderShadePanel();
      renderMixer();
    });
  });
}

/* ================= MIXER ================= */

const blendSwatch = document.getElementById("blendSwatch");
const matchSwatch = document.getElementById("matchSwatch");
const mixMatch = document.getElementById("mixMatch");
const mixComponents = document.getElementById("mixComponents");
const pickTray = document.getElementById("pickTray");
const productSelect = document.getElementById("productSelect");
const sizeSelect = document.getElementById("sizeSelect");
const qtyValue = document.getElementById("qtyValue");
const unitPriceEl = document.getElementById("unitPrice");
const addToCartBtn = document.getElementById("addToCartBtn");
const clearMixBtn = document.getElementById("clearMixBtn");

const MIXER_PRODUCTS = CATALOGUE.filter(p => p.tintable);
MIXER_PRODUCTS.forEach(p => {
  const opt = document.createElement("option");
  opt.value = p.id;
  opt.textContent = p.name;
  productSelect.appendChild(opt);
});

function currentProduct() { return productById(productSelect.value); }

function populateSizes() {
  const product = currentProduct();
  const available = SIZE_ORDER.filter(s => product.prices[s] !== undefined);
  sizeSelect.innerHTML = available.map(s => `<option value="${s}">${s}</option>`).join("");
}

function selectProductForMixer(id) {
  productSelect.value = id;
  populateSizes();
  updatePrice();
  document.getElementById("colors").scrollIntoView({ behavior: "smooth" });
}

function renderMixer() {
  const hexes = picks.map(p => p.hex);
  const blend = blendHexes(hexes);
  blendSwatch.style.background = blend || "";

  if (picks.length === 0) {
    matchSwatch.style.background = "";
    mixMatch.textContent = "Add up to 5 shades to preview your blend";
    mixComponents.textContent = "";
  } else {
    const nearest = findNearestShade(blend);
    matchSwatch.style.background = nearest.hex;
    mixMatch.innerHTML = `Closest to <b>${nearest.name}</b>`;
    mixComponents.textContent = "Mixed from: " + picks.map(p => p.name).join(" + ");
  }

  pickTray.innerHTML = picks.map(p => `
    <div class="pick-chip">
      <span class="dot" style="background:${p.hex}"></span>
      <span>${p.name}</span>
      <button data-remove="${p.name}">✕</button>
    </div>
  `).join("");
  pickTray.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      picks = picks.filter(p => p.name !== btn.dataset.remove);
      renderMixer();
      renderShadePanel();
    });
  });

  updatePrice();
  addToCartBtn.disabled = picks.length === 0;
}

function updatePrice() {
  const product = currentProduct();
  const size = sizeSelect.value;
  const price = product.prices[size];
  unitPriceEl.textContent = price ? fmt(price) : "—";
}

productSelect.addEventListener("change", () => { populateSizes(); updatePrice(); });
sizeSelect.addEventListener("change", updatePrice);

document.getElementById("qtyMinus").addEventListener("click", () => {
  mixQty = Math.max(1, mixQty - 1);
  qtyValue.textContent = mixQty;
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  mixQty = Math.min(99, mixQty + 1);
  qtyValue.textContent = mixQty;
});

clearMixBtn.addEventListener("click", () => {
  picks = [];
  mixQty = 1;
  qtyValue.textContent = "1";
  renderMixer();
  renderShadePanel();
});

addToCartBtn.addEventListener("click", () => {
  if (picks.length === 0) return;
  const product = currentProduct();
  const size = sizeSelect.value;
  const unitPrice = product.prices[size];
  const blend = blendHexes(picks.map(p => p.hex));
  const nearest = findNearestShade(blend);
  cart.push({
    id: Date.now(),
    type: "mix",
    shadeNames: picks.map(p => p.name),
    matchedName: nearest.name,
    blend,
    productName: product.name,
    size, qty: mixQty, unitPrice,
  });
  saveCart();
  picks = [];
  mixQty = 1;
  qtyValue.textContent = "1";
  renderMixer();
  renderShadePanel();
  renderCart();
  flashCart();
});

/* ================= PRODUCT CATALOGUE / SHOP ================= */

const categoryTabsEl = document.getElementById("categoryTabs");
const productGrid = document.getElementById("productGrid");

function renderCategoryTabs() {
  const cats = ["All", ...CATEGORY_ORDER];
  categoryTabsEl.innerHTML = cats.map(c => `
    <button class="cat-tab ${activeCategory === c ? "active" : ""}" data-cat="${c}">${c}</button>
  `).join("");
  categoryTabsEl.querySelectorAll("[data-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderCategoryTabs();
      renderProductCards();
    });
  });
}

function productCardHtml(p) {
  const priceEntries = Object.entries(p.prices || {});
  const hasPrices = priceEntries.length > 0;
  const availableSizes = SIZE_ORDER.filter(s => p.prices[s] !== undefined);
  if (cardQty[p.id] === undefined) cardQty[p.id] = 1;
  const chosen = cardColor[p.id];

  const colorButtonHtml = p.tintable ? `
    <button class="choose-color-btn ${chosen ? "" : "unset"}" data-choose-color="${p.id}">
      <span class="swatch-dot" style="${chosen ? `background:${chosen.hex}` : ""}"></span>
      ${chosen ? `Colour: ${chosen.name}` : "Choose a colour"}
    </button>
  ` : "";

  const canAdd = hasPrices && (!p.tintable || chosen);

  return `
    <div class="product-card">
      <div class="product-image">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name} container" />`
          : `<div class="image-placeholder"><span class="ph-icon">🪣</span><span>Photo coming soon</span></div>`}
      </div>
      <h3>${p.name}</h3>
      <span class="product-tag">${p.tag}</span>
      <p class="blurb">${p.blurb}</p>
      ${hasPrices ? `
        <div class="price-grid">
          ${priceEntries.map(([size, price]) => `<div class="price-pill"><div class="size">${size}</div><div class="price">${fmt(price)}</div></div>`).join("")}
        </div>
        ${colorButtonHtml}
        <div class="buy-row">
          <select class="buy-size" data-buy-size="${p.id}">
            ${availableSizes.map(s => `<option value="${s}">${s}</option>`).join("")}
          </select>
          <div class="qty-stepper small">
            <button data-buy-minus="${p.id}" type="button">−</button>
            <span id="buyQty-${p.id}">${cardQty[p.id]}</span>
            <button data-buy-plus="${p.id}" type="button">+</button>
          </div>
          <button class="btn btn-primary btn-sm" data-buy-add="${p.id}" ${canAdd ? "" : "disabled"}>Add to cart</button>
        </div>
        ${p.tintable && !chosen ? `<p class="feedback-note">Pick a colour above to add this to your cart.</p>` : ""}
      ` : `
        <p class="contact-price">Contact us for pricing</p>
        <a class="btn btn-outline btn-sm btn-block" href="mailto:apex@apexcoating.com?subject=Price%20enquiry:%20${encodeURIComponent(p.name)}">Enquire</a>
      `}
      ${p.tintable ? `<button class="mix-link" data-mix-product="${p.id}">Or mix a custom colour →</button>` : ""}
      ${p.pairsWith && p.pairsWith.length ? `
        <div class="pairs-with">
          <p class="pairs-with-label">Use together with:</p>
          ${p.pairsWith.map(pid => {
            const companion = productById(pid);
            if (!companion) return "";
            const cPrice = Object.values(companion.prices)[0];
            return `<span class="pairs-with-chip" data-goto-category="${companion.category}">${companion.name}${cPrice ? ` · from ${fmt(Math.min(...Object.values(companion.prices)))}` : ""}</span>`;
          }).join("")}
        </div>
      ` : ""}
      <button class="prep-toggle" data-prep="${p.id}">Application &amp; surface prep ▾</button>
      <div class="prep-content" id="prep-${p.id}">
        <p><b>Surface prep:</b> ${p.prep}</p>
        <p><b>Application:</b> ${p.application}</p>
        ${p.spec ? Object.entries(p.spec).map(([key, val]) => {
          const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
          return `<p><b>${label}:</b> ${val}</p>`;
        }).join("") : ""}
      </div>
    </div>
  `;
}

function renderProductCards() {
  let html = "";
  if (activeCategory === "All") {
    CATEGORY_ORDER.forEach(cat => {
      const items = CATALOGUE.filter(p => p.category === cat);
      if (!items.length) return;
      html += `<h3 class="category-heading display">${cat}</h3>`;
      html += `<div class="product-grid">${items.map(productCardHtml).join("")}</div>`;
    });
  } else {
    const items = CATALOGUE.filter(p => p.category === activeCategory);
    html += `<div class="product-grid">${items.map(productCardHtml).join("")}</div>`;
  }
  productGrid.innerHTML = html;
  wireProductCardEvents();
}

function wireProductCardEvents() {
  productGrid.querySelectorAll("[data-prep]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("prep-" + btn.dataset.prep).classList.toggle("open");
    });
  });
  productGrid.querySelectorAll("[data-mix-product]").forEach(btn => {
    btn.addEventListener("click", () => selectProductForMixer(btn.dataset.mixProduct));
  });
  productGrid.querySelectorAll("[data-choose-color]").forEach(btn => {
    btn.addEventListener("click", () => openColorPicker(btn.dataset.chooseColor));
  });
  productGrid.querySelectorAll("[data-goto-category]").forEach(chip => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.gotoCategory;
      renderCategoryTabs();
      renderProductCards();
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });
  productGrid.querySelectorAll("[data-buy-minus]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.buyMinus;
      cardQty[id] = Math.max(1, cardQty[id] - 1);
      document.getElementById("buyQty-" + id).textContent = cardQty[id];
    });
  });
  productGrid.querySelectorAll("[data-buy-plus]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.buyPlus;
      cardQty[id] = Math.min(99, cardQty[id] + 1);
      document.getElementById("buyQty-" + id).textContent = cardQty[id];
    });
  });
  productGrid.querySelectorAll("[data-buy-add]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.buyAdd;
      const p = productById(id);
      const sizeSel = productGrid.querySelector(`[data-buy-size="${id}"]`);
      const size = sizeSel.value;
      const qty = cardQty[id] || 1;
      const color = cardColor[id] || null;
      cart.push({
        id: Date.now(),
        type: "product",
        productName: p.name,
        image: p.image,
        color: color ? color.name : null,
        colorHex: color ? color.hex : null,
        size, qty,
        unitPrice: p.prices[size],
      });
      saveCart();
      // reset this card's colour choice so the next purchase starts fresh
      delete cardColor[id];
      renderProductCards();
      renderCart();
      flashCart();
    });
  });
}

/* ================= COLOUR PICKER MODAL ================= */

const colorPickerModal = document.getElementById("colorPickerModal");
const colorPickerBody = document.getElementById("colorPickerBody");
const colorPickerClose = document.getElementById("colorPickerClose");

function openColorPicker(productId) {
  colorPickerTargetId = productId;
  colorPickerOpenGroup = null;
  colorPickerModal.hidden = false;
  renderColorPickerModal();
}
function closeColorPicker() {
  colorPickerModal.hidden = true;
  colorPickerTargetId = null;
}
colorPickerClose.addEventListener("click", closeColorPicker);
colorPickerModal.addEventListener("click", (e) => {
  if (e.target === colorPickerModal) closeColorPicker();
});

function renderColorPickerModal() {
  if (!colorPickerOpenGroup) {
    colorPickerBody.innerHTML = `
      <p class="section-sub" style="margin-bottom:16px;">Pick a colour family, then choose your shade.</p>
      <div class="picker-group-grid">
        ${GROUPS.map(g => `
          <button class="picker-group-tile" data-picker-group="${g.id}">
            <div class="swatch" style="background:${g.swatch}"></div>
            <div class="label">${g.label}</div>
          </button>
        `).join("")}
      </div>
    `;
    colorPickerBody.querySelectorAll("[data-picker-group]").forEach(btn => {
      btn.addEventListener("click", () => {
        colorPickerOpenGroup = btn.dataset.pickerGroup;
        renderColorPickerModal();
      });
    });
  } else {
    const group = GROUPS.find(g => g.id === colorPickerOpenGroup);
    colorPickerBody.innerHTML = `
      <div class="picker-crumb" id="pickerBack">← All colour families</div>
      <div class="picker-shade-grid">
        ${group.shades.map(s => `
          <button class="picker-shade-tile" data-picker-shade="${s.name}">
            <div class="swatch" style="background:${s.hex}"></div>
            <div class="label">${s.name}</div>
          </button>
        `).join("")}
      </div>
    `;
    colorPickerBody.querySelector("#pickerBack").addEventListener("click", () => {
      colorPickerOpenGroup = null;
      renderColorPickerModal();
    });
    colorPickerBody.querySelectorAll("[data-picker-shade]").forEach(btn => {
      btn.addEventListener("click", () => {
        const shade = group.shades.find(s => s.name === btn.dataset.pickerShade);
        cardColor[colorPickerTargetId] = shade;
        closeColorPicker();
        renderProductCards();
      });
    });
  }
}

/* ================= CART ================= */

const cartBadge = document.getElementById("cartBadge");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartQuoteBtn = document.getElementById("cartQuoteBtn");
const cartWhatsappBtn = document.getElementById("cartWhatsappBtn");
const APEX_WHATSAPP_NUMBER = "254722252134"; // placeholder — swap for the real WhatsApp business number

function flashCart() {
  cartBadge.style.transform = "scale(1.3)";
  setTimeout(() => cartBadge.style.transform = "scale(1)", 150);
}

function renderCart() {
  cartBadge.hidden = cart.length === 0;
  cartBadge.textContent = cart.length;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Your cart is empty. Mix a custom colour or shop the range above.</p>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => {
      const visual = item.type === "mix"
        ? `<span class="dot" style="background:${item.blend}"></span>`
        : item.colorHex
          ? `<span class="dot" style="background:${item.colorHex}"></span>`
          : item.image
            ? `<img class="cart-thumb" src="${item.image}" alt="${item.productName}" />`
            : `<span class="dot cart-thumb-placeholder">🪣</span>`;
      const meta = item.type === "mix"
        ? `${item.productName} · closest to ${item.matchedName} · mixed from ${item.shadeNames.join(", ")} · ${item.size} × ${item.qty}`
        : `${item.productName}${item.color ? " · " + item.color : ""} · ${item.size} × ${item.qty}`;
      return `
        <div class="cart-item">
          ${visual}
          <div class="cart-item-info">
            <p class="name">${item.productName}${item.color ? ` — ${item.color}` : ""}</p>
            <p class="meta">${meta}</p>
            <div class="row">
              <span class="price">${fmt(item.unitPrice * item.qty)}</span>
              <button data-cart-remove="${item.id}">Remove</button>
            </div>
          </div>
        </div>`;
    }).join("");
    cartItemsEl.querySelectorAll("[data-cart-remove]").forEach(btn => {
      btn.addEventListener("click", () => {
        cart = cart.filter(i => i.id !== Number(btn.dataset.cartRemove));
        saveCart();
        renderCart();
      });
    });
  }

  const total = cart.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
  cartTotalEl.textContent = fmt(total);

  const lines = cart.map(i => i.type === "mix"
    ? `- ${i.productName}, ${i.size} × ${i.qty} — custom mix (closest to ${i.matchedName}, blended from ${i.shadeNames.join(", ")}) — ${fmt(i.unitPrice * i.qty)}`
    : `- ${i.productName}${i.color ? " — " + i.color : ""}, ${i.size} × ${i.qty} — ${fmt(i.unitPrice * i.qty)}`
  );

  // Email quote
  const emailBody = encodeURIComponent(
    "Hello Apex Coating,\n\nI'd like a quote for the following:\n" + lines.join("\n") +
    `\n\nEstimated total: ${fmt(total)}\n\nThank you.`
  );
  cartQuoteBtn.href = cart.length ? `mailto:apex@apexcoating.com?subject=Quote%20request&body=${emailBody}` : "#";

  // WhatsApp order
  const waText = encodeURIComponent(
    "Hi Apex Coating! I'd like to order:\n\n" + lines.join("\n") +
    `\n\nTotal: ${fmt(total)}`
  );
  cartWhatsappBtn.href = cart.length
    ? `https://wa.me/${APEX_WHATSAPP_NUMBER}?text=${waText}`
    : "#";
  cartWhatsappBtn.classList.toggle("btn-disabled", cart.length === 0);
}

/* ================= FEEDBACK FORM ================= */

const fbName = document.getElementById("fbName");
const fbMessage = document.getElementById("fbMessage");
const fbSend = document.getElementById("fbSend");

function updateFbButton() {
  fbSend.disabled = fbMessage.value.trim().length === 0;
}
fbMessage.addEventListener("input", updateFbButton);
fbSend.addEventListener("click", () => {
  const body = encodeURIComponent(`Name: ${fbName.value}\n\n${fbMessage.value}`);
  window.location.href = `mailto:apex@apexcoating.com?subject=Website%20Feedback&body=${body}`;
});

/* ================= INIT ================= */

renderGroups();
renderShadePanel();
populateSizes();
renderMixer();
renderCategoryTabs();
renderProductCards();
renderCart();
updateFbButton();
