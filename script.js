/* ================= DATA ================= */

const GROUPS = [
  { id: "neutral", label: "Whites & Neutrals", swatch: "#F2ECDA", shades: [
    { name: "Soft White", hex: "#F5F1E7" }, { name: "Ivory", hex: "#F0E6C9" },
    { name: "Magnolia", hex: "#F2E9CE" }, { name: "Buttermilk", hex: "#F2E2B8" },
    { name: "Vellum", hex: "#EDE4C8" }, { name: "Full Moon", hex: "#F5F0DD" },
    { name: "Porcelain Bowl", hex: "#F3EFD9" }, { name: "Antique Cream", hex: "#EDE0BE" },
  ]},
  { id: "yellow", label: "Yellow", swatch: "#F0CB53", shades: [
    { name: "Mustard", hex: "#C99A3E" }, { name: "Jasmine", hex: "#F2E27A" },
    { name: "Just Yellow", hex: "#F2CB2B" }, { name: "African Gold", hex: "#C08A2E" },
    { name: "Yellow Canary", hex: "#F2D53C" }, { name: "Golden Sun", hex: "#F0CB53" },
    { name: "Summer Yellow", hex: "#F0DE7E" }, { name: "Tivoli Gold", hex: "#E8A93A" },
    { name: "Soleil", hex: "#F0D23C" },
  ]},
  { id: "orange", label: "Orange", swatch: "#E8862B", shades: [
    { name: "Tango", hex: "#E8862B" }, { name: "Peach Melba", hex: "#F0B98A" },
    { name: "Orange Tan", hex: "#D9631F" }, { name: "Bokhara", hex: "#D9601F" },
    { name: "Croquet Orange", hex: "#E8601F" }, { name: "Morroccan Sun", hex: "#E8862B" },
    { name: "Ginger Snap", hex: "#C4602F" }, { name: "Sundown", hex: "#E0A468" },
  ]},
  { id: "red", label: "Red & Pink", swatch: "#C4293A", shades: [
    { name: "Rusty Red", hex: "#B5342A" }, { name: "Geranium", hex: "#C4293A" },
    { name: "Brick Dust", hex: "#C4485A" }, { name: "Deco Red", hex: "#A61F2E" },
    { name: "Coral Pink", hex: "#D97C86" }, { name: "Powder Pink", hex: "#EFC0CB" },
    { name: "Dawn Pink", hex: "#EAC7BE" }, { name: "Riva Red", hex: "#C21F26" },
    { name: "Sentry Red", hex: "#9E1B24" },
  ]},
  { id: "purple", label: "Purple & Lilac", swatch: "#8E7FC7", shades: [
    { name: "Mulberry", hex: "#4A1B33" }, { name: "Spanish Violet", hex: "#5A2C82" },
    { name: "Victoria Plum", hex: "#3D1A44" }, { name: "Wild Lilac", hex: "#C9AFD1" },
    { name: "Clover", hex: "#91237E" }, { name: "Lilac", hex: "#8E7FC7" },
    { name: "Lavender", hex: "#7F8FD1" }, { name: "Light Lilac", hex: "#B7A8E0" },
    { name: "Lilac Haze", hex: "#E3D3E6" },
  ]},
  { id: "blue", label: "Blue", swatch: "#1F5FA8", shades: [
    { name: "Billberry", hex: "#5E6FB0" }, { name: "Northern Sky", hex: "#5F92AC" },
    { name: "Zircon", hex: "#A9CBD4" }, { name: "Aqua", hex: "#4FA6A0" },
    { name: "Cote D'Azur", hex: "#1E3A73" }, { name: "Capri", hex: "#1B7A8C" },
    { name: "Polar Blue", hex: "#7EC1E0" }, { name: "Cosmos", hex: "#12123B" },
    { name: "Cornflower", hex: "#1F5FA8" }, { name: "True Blue", hex: "#1E6FBF" },
    { name: "Malindi Blue", hex: "#2E6FC4" }, { name: "Summer Blue", hex: "#8FB9D6" },
  ]},
  { id: "green", label: "Green", swatch: "#1F8A4C", shades: [
    { name: "Emerald", hex: "#1A8C55" }, { name: "Sage", hex: "#B7C89E" },
    { name: "Willow", hex: "#A9C97E" }, { name: "Lollipop", hex: "#A9D62E" },
    { name: "Greengage", hex: "#4F8C1F" }, { name: "Laurel", hex: "#1F5F2F" },
    { name: "Beetle Green", hex: "#0F3D28" }, { name: "Forest Green", hex: "#1C3B22" },
    { name: "Safaricom Green", hex: "#3FAA35" }, { name: "Kenya Green", hex: "#1F8A4C" },
    { name: "Apple Mint", hex: "#A9D9B0" }, { name: "Mellow Sage", hex: "#7FA07A" },
  ]},
  { id: "brown", label: "Brown & Tan", swatch: "#A9662E", shades: [
    { name: "Rawhide", hex: "#A9662E" }, { name: "Camouflage", hex: "#4A4326" },
    { name: "Peanut Butter", hex: "#D9B87E" }, { name: "Toadstool", hex: "#7A5A4A" },
    { name: "Antique Bronze", hex: "#4A3222" }, { name: "Catalan", hex: "#6E5B4A" },
    { name: "Terracotta Sand", hex: "#C48A6E" }, { name: "Egyptian Sand", hex: "#D9A96E" },
    { name: "Biscuit", hex: "#D9C29A" }, { name: "Waffle", hex: "#C9A96E" },
    { name: "Cream Silk", hex: "#E0CE9E" }, { name: "Warm Apricot", hex: "#E0A97E" },
  ]},
  { id: "grey", label: "Grey", swatch: "#7E8A8C", shades: [
    { name: "Pebble", hex: "#C6C9C3" }, { name: "Seagull", hex: "#B7BDB3" },
    { name: "Corvette", hex: "#9AA3A0" }, { name: "Steel", hex: "#7E8A8C" },
    { name: "Pigeon", hex: "#6E7C7C" }, { name: "Granite", hex: "#6E7373" },
    { name: "Slate Grey", hex: "#4A5C5C" }, { name: "Seal Grey", hex: "#3E4A4A" },
    { name: "Mouse Grey", hex: "#8C8377" }, { name: "Ash", hex: "#B3B0A8" },
    { name: "Moonlight", hex: "#D3D9D6" }, { name: "Ice", hex: "#C9D3D1" },
  ]},
  { id: "black", label: "Black & Dark", swatch: "#1C2320", shades: [
    { name: "Velvet Grey", hex: "#1C2320" }, { name: "Gun Metal", hex: "#16211E" },
    { name: "Black", hex: "#0A0A0A" }, { name: "Lizard", hex: "#14140F" },
    { name: "Panatella", hex: "#2A2419" }, { name: "Midnight Blue", hex: "#12123B" },
  ]},
];

// Tintable base products available in the mixer. Sizes/prices from the
// counter price list effective 1 July 2026 — confirm any marked approx.
const PRODUCTS = {
  matt: { name: "Acrylic Emulsion (Vinyl Matt)", tag: "Exterior",
    blurb: "Superior architectural paint on durable acrylic resin. Alkali-resistant, built for heavy rain, dry seasons and strong sun.",
    prep: "Surfaces clean, dry, free of oil, grease, wax or dust. Remove old flaky material. No priming needed on new smooth surfaces.",
    application: "Soft paintbrush or roller. One or two coats depending on porosity. Clean equipment with tap water immediately after use.",
    prices: { "1/2L": 260, "1L": 550, "4L": 1900, "10L": 4700, "20L": 8600 } },
  weathershieldSilicon: { name: "Weathershield (Silicone Based)", tag: "Premium exterior",
    blurb: "Silicone-based formulation for maximum exterior weather resistance.",
    prep: "Surfaces clean, dry, free from contaminants and loose material. New surfaces need an alkali-resisting undercoat first.",
    application: "Brush, roller or spray. Two coats recommended. Allow full cure time between coats.",
    prices: { "1/2L": 350, "1L": 650, "4L": 2100, "10L": 5000, "20L": 10000 } },
  weathershield: { name: "Weathershield", tag: "Exterior",
    blurb: "Heavy-duty exterior protection for facades exposed to harsh weather.",
    prep: "Surfaces clean, dry, free from contaminants and loose material. New surfaces need an alkali-resisting undercoat first.",
    application: "Brush, roller or spray. Two coats recommended for full protection.",
    prices: { "4L": 2000, "10L": 5000, "20L": 9500 } },
  silk: { name: "Vinyl Wallsheen (Silk)", tag: "Interior",
    blurb: "High-performance interior paint, cool satin finish, high wet-scrub resistance.",
    prep: "Surfaces clean, free from grease, oil, wax, moisture and loose material. New surfaces need one coat of alkali-resisting undercoat first.",
    application: "Soft paintbrush, roller or spray. At least two coats after the undercoat. Clean equipment with tap water immediately.",
    prices: { "1/2L": 350, "1L": 650, "4L": 2100, "10L": 5500, "20L": 10000 } },
  supergloss: { name: "Supergloss", tag: "High gloss",
    blurb: "Oil-modified alkyd enamel. Long-lasting, easy-clean coat for wood, metal, asbestos and concrete.",
    prep: "Clean, dry surfaces free of oil, grease, wax and old flaky paint. Fresh surfaces need a primer undercoat first.",
    application: "Soft brush, air spray or dipping. One or two coats over the undercoat. Clean equipment with terpentine or white spirit.",
    prices: { "1/2L": 330, "1L": 650, "4L": 2250, "10L": 5500, "20L": 10500 } },
  texstar: { name: "Texstar Emulsion", tag: "Economy interior",
    blurb: "Everyday-value emulsion for interior walls.",
    prep: "Surfaces clean, dry and free from dust or flaking material.",
    application: "Brush or roller. One to two coats depending on porosity.",
    prices: { "1/4L": 150, "1/2L": 250, "1L": 450, "4L": 550, "10L": 1300, "20L": 2200 } },
  plastic: { name: "Plastic Emulsion", tag: "Economy interior",
    blurb: "Economical plastic-based emulsion for interior walls and ceilings.",
    prep: "Surfaces clean, dry and free from dust or flaking material.",
    application: "Brush or roller. One to two coats depending on porosity.",
    prices: { "1/4L": 200, "1/2L": 360, "1L": 630, "4L": 390, "10L": 850, "20L": 1500 } },
  glossEnamel: { name: "Gloss Enamel", tag: "Standard gloss",
    blurb: "Standard alkyd gloss enamel for wood and metal.",
    prep: "Clean, dry surfaces free of oil, grease and flaking material. Fresh surfaces need a primer undercoat.",
    application: "Brush or spray. One to two coats over undercoat. Clean with white spirit.",
    prices: { "1/4L": 90, "1/2L": 160, "4L": 900, "20L": 4500 } },
  glossTexstar: { name: "Gloss Texstar", tag: "Economy gloss",
    blurb: "Economy gloss finish for wood and metal surfaces.",
    prep: "Clean, dry surfaces free of oil, grease and flaking material.",
    application: "Brush or spray. One to two coats. Clean with white spirit.",
    prices: { "1/4L": 100, "1/2L": 180, "1L": 350, "4L": 1250, "20L": 4850 } },
  covermatt: { name: "Covermatt", tag: "Economy interior",
    blurb: "High-opacity economy matt emulsion for interior walls.",
    prep: "Surfaces clean, dry and free from dust or flaking material.",
    application: "Brush or roller. One to two coats.",
    prices: { "1/2L": 200, "1L": 380, "4L": 1030, "10L": 2300, "20L": 4000 } },
};

const SIZE_ORDER = ["1/4L", "1/2L", "1L", "4L", "10L", "20L"];

/* ================= STATE ================= */

let picks = [];               // shades currently in the mixer
let cart = JSON.parse(sessionStorage.getItem("apexCart") || "[]");
let openGroupId = null;
let qty = 1;

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
function fmt(n) { return "KES " + n.toLocaleString(); }
function saveCart() { sessionStorage.setItem("apexCart", JSON.stringify(cart)); }

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
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navBtns.forEach(b => b.classList.toggle("active", b.dataset.target === e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });
sections.forEach(s => observer.observe(s));

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
const mixComponents = document.getElementById("mixComponents");
const pickTray = document.getElementById("pickTray");
const productSelect = document.getElementById("productSelect");
const sizeSelect = document.getElementById("sizeSelect");
const qtyValue = document.getElementById("qtyValue");
const unitPriceEl = document.getElementById("unitPrice");
const addToCartBtn = document.getElementById("addToCartBtn");
const clearMixBtn = document.getElementById("clearMixBtn");

// populate product dropdown once
Object.entries(PRODUCTS).forEach(([key, p]) => {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = p.name;
  productSelect.appendChild(opt);
});

function currentProductKey() { return productSelect.value; }

function populateSizes() {
  const product = PRODUCTS[currentProductKey()];
  const available = SIZE_ORDER.filter(s => product.prices[s] !== undefined);
  sizeSelect.innerHTML = available.map(s => `<option value="${s}">${s}</option>`).join("");
}

function renderMixer() {
  const hexes = picks.map(p => p.hex);
  const blend = blendHexes(hexes);
  blendSwatch.style.background = blend || "";
  mixComponents.textContent = picks.length
    ? picks.map(p => p.name).join(" + ")
    : "Add up to 5 shades to preview your blend";

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
  const product = PRODUCTS[currentProductKey()];
  const size = sizeSelect.value;
  const price = product.prices[size];
  unitPriceEl.textContent = price ? fmt(price) : "—";
}

productSelect.addEventListener("change", () => { populateSizes(); updatePrice(); });
sizeSelect.addEventListener("change", updatePrice);

document.getElementById("qtyMinus").addEventListener("click", () => {
  qty = Math.max(1, qty - 1);
  qtyValue.textContent = qty;
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  qty = Math.min(99, qty + 1);
  qtyValue.textContent = qty;
});

clearMixBtn.addEventListener("click", () => {
  picks = [];
  qty = 1;
  qtyValue.textContent = "1";
  renderMixer();
  renderShadePanel();
});

addToCartBtn.addEventListener("click", () => {
  if (picks.length === 0) return;
  const product = PRODUCTS[currentProductKey()];
  const size = sizeSelect.value;
  const unitPrice = product.prices[size];
  cart.push({
    id: Date.now(),
    shadeNames: picks.map(p => p.name),
    blend: blendHexes(picks.map(p => p.hex)),
    productKey: currentProductKey(),
    productName: product.name,
    size, qty, unitPrice,
  });
  saveCart();
  picks = [];
  qty = 1;
  qtyValue.textContent = "1";
  renderMixer();
  renderShadePanel();
  renderCart();
  flashCart();
});

/* ================= PRODUCT CARDS ================= */

const productGrid = document.getElementById("productGrid");

function renderProductCards() {
  productGrid.innerHTML = Object.values(PRODUCTS).map((p, i) => `
    <div class="product-card">
      <h3>${p.name}</h3>
      <span class="product-tag">${p.tag}</span>
      <p class="blurb">${p.blurb}</p>
      <div class="price-grid">
        ${Object.entries(p.prices).map(([size, price]) => `
          <div class="price-pill"><div class="size">${size}</div><div class="price">${fmt(price)}</div></div>
        `).join("")}
      </div>
      <button class="prep-toggle" data-prep="${i}">Application &amp; surface prep ▾</button>
      <div class="prep-content" id="prep-${i}">
        <p><b>Surface prep:</b> ${p.prep}</p>
        <p><b>Application:</b> ${p.application}</p>
      </div>
    </div>
  `).join("");

  productGrid.querySelectorAll("[data-prep]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("prep-" + btn.dataset.prep).classList.toggle("open");
    });
  });
}

/* ================= CART ================= */

const cartToggle = document.getElementById("cartToggle");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartClose = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartBadge = document.getElementById("cartBadge");
const cartQuoteBtn = document.getElementById("cartQuoteBtn");

function openCart() { cartOverlay.hidden = false; cartDrawer.hidden = false; }
function closeCart() { cartOverlay.hidden = true; cartDrawer.hidden = true; }
cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function flashCart() {
  cartBadge.style.transform = "scale(1.3)";
  setTimeout(() => cartBadge.style.transform = "scale(1)", 150);
}

function renderCart() {
  cartBadge.hidden = cart.length === 0;
  cartBadge.textContent = cart.length;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Your cart is empty. Build a mix and add it here.</p>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <span class="dot" style="background:${item.blend}"></span>
        <div class="cart-item-info">
          <p class="name">${item.productName}</p>
          <p class="meta">${item.shadeNames.join(" + ")} · ${item.size} × ${item.qty}</p>
          <div class="row">
            <span class="price">${fmt(item.unitPrice * item.qty)}</span>
            <button data-cart-remove="${item.id}">Remove</button>
          </div>
        </div>
      </div>
    `).join("");
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

  const body = encodeURIComponent(
    "Hello Apex Coating,\n\nI'd like a quote for the following custom mixes:\n" +
    cart.map(i => `- ${i.productName}, ${i.size} × ${i.qty} — mix of ${i.shadeNames.join(", ")} — ${fmt(i.unitPrice * i.qty)}`).join("\n") +
    `\n\nEstimated total: ${fmt(total)}\n\nThank you.`
  );
  cartQuoteBtn.href = cart.length ? `mailto:apex@apexcoating.com?subject=Custom%20mix%20quote%20request&body=${body}` : "#";
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
renderProductCards();
renderCart();
updateFbButton();
