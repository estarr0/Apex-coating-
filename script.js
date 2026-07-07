// DATA
const PRODUCTS = {
  matt: { name: "Acrylic Emulsion (Vinyl Matt)", tag: "Exterior", prices: { "1L": 550, "4L": 1900, "10L": 4700, "20L": 8600 } },
  weathershield: { name: "Weathershield", tag: "Premium exterior", prices: { "1L": 650, "4L": 2000, "10L": 5000, "20L": 9500 } },
  silk: { name: "Vinyl Wallsheen (Silk)", tag: "Interior", prices: { "1L": 650, "4L": 2100, "10L": 5500, "20L": 10000 } },
  gloss: { name: "Supergloss", tag: "High gloss", prices: { "1L": 650, "4L": 2250, "10L": 5500, "20L": 10500 } },
};

const GROUPS = [
  { id: "neutral", label: "Whites & Neutrals", swatch: "#F2ECDA", product: "silk", shades: [
    { name: "Soft White", hex: "#F5F1E7" }, { name: "Ivory", hex: "#F0E6C9" }, { name: "Magnolia", hex: "#F2E9CE" }, { name: "Buttermilk", hex: "#F2E2B8" }, { name: "Vellum", hex: "#EDE4C8" }, { name: "Full Moon", hex: "#F5F0DD" }, { name: "Porcelain Bowl", hex: "#F3EFD9" }, { name: "Antique Cream", hex: "#EDE0BE" }
  ] },
  { id: "yellow", label: "Yellow", swatch: "#F0CB53", product: "matt", shades: [
    { name: "Mustard", hex: "#C99A3E" }, { name: "Jasmine", hex: "#F2E27A" }, { name: "Just Yellow", hex: "#F2CB2B" }, { name: "African Gold", hex: "#C08A2E" }, { name: "Yellow Canary", hex: "#F2D53C" }, { name: "Golden Sun", hex: "#F0CB53" }, { name: "Summer Yellow", hex: "#F0DE7E" }, { name: "Tivoli Gold", hex: "#E8A93A" }, { name: "Soleil", hex: "#F0D23C" }
  ] },
  { id: "orange", label: "Orange", swatch: "#E8862B", product: "gloss", shades: [
    { name: "Tango", hex: "#E8862B" }, { name: "Peach Melba", hex: "#F0B98A" }, { name: "Orange Tan", hex: "#D9631F" }, { name: "Bokhara", hex: "#D9601F" }, { name: "Croquet Orange", hex: "#E8601F" }, { name: "Morroccan Sun", hex: "#E8862B" }, { name: "Ginger Snap", hex: "#C4602F" }, { name: "Sundown", hex: "#E0A468" }
  ] },
  { id: "red", label: "Red & Pink", swatch: "#C4293A", product: "gloss", shades: [
    { name: "Rusty Red", hex: "#B5342A" }, { name: "Geranium", hex: "#C4293A" }, { name: "Brick Dust", hex: "#C4485A" }, { name: "Deco Red", hex: "#A61F2E" }, { name: "Coral Pink", hex: "#D97C86" }, { name: "Powder Pink", hex: "#EFC0CB" }, { name: "Dawn Pink", hex: "#EAC7BE" }, { name: "Riva Red", hex: "#C21F26" }, { name: "Sentry Red", hex: "#9E1B24" }
  ] },
  { id: "purple", label: "Purple & Lilac", swatch: "#8E7FC7", product: "silk", shades: [
    { name: "Mulberry", hex: "#4A1B33" }, { name: "Spanish Violet", hex: "#5A2C82" }, { name: "Victoria Plum", hex: "#3D1A44" }, { name: "Wild Lilac", hex: "#C9AFD1" }, { name: "Clover", hex: "#91237E" }, { name: "Lilac", hex: "#8E7FC7" }, { name: "Lavender", hex: "#7F8FD1" }, { name: "Light Lilac", hex: "#B7A8E0" }, { name: "Lilac Haze", hex: "#E3D3E6" }
  ] },
  { id: "blue", label: "Blue", swatch: "#1F5FA8", product: "weathershield", shades: [
    { name: "Billberry", hex: "#5E6FB0" }, { name: "Northern Sky", hex: "#5F92AC" }, { name: "Zircon", hex: "#A9CBD4" }, { name: "Aqua", hex: "#4FA6A0" }, { name: "Cote D'Azur", hex: "#1E3A73" }, { name: "Capri", hex: "#1B7A8C" }, { name: "Polar Blue", hex: "#7EC1E0" }, { name: "Cosmos", hex: "#12123B" }, { name: "Cornflower", hex: "#1F5FA8" }, { name: "True Blue", hex: "#1E6FBF" }, { name: "Malindi Blue", hex: "#2E6FC4" }, { name: "Summer Blue", hex: "#8FB9D6" }
  ] },
  { id: "green", label: "Green", swatch: "#1F8A4C", product: "matt", shades: [
    { name: "Emerald", hex: "#1A8C55" }, { name: "Sage", hex: "#B7C89E" }, { name: "Willow", hex: "#A9C97E" }, { name: "Lollipop", hex: "#A9D62E" }, { name: "Greengage", hex: "#4F8C1F" }, { name: "Laurel", hex: "#1F5F2F" }, { name: "Beetle Green", hex: "#0F3D28" }, { name: "Forest Green", hex: "#1C3B22" }, { name: "Safaricom Green", hex: "#3FAA35" }, { name: "Kenya Green", hex: "#1F8A4C" }, { name: "Apple Mint", hex: "#A9D9B0" }, { name: "Mellow Sage", hex: "#7FA07A" }
  ] },
  { id: "brown", label: "Brown & Tan", swatch: "#A9662E", product: "silk", shades: [
    { name: "Rawhide", hex: "#A9662E" }, { name: "Camouflage", hex: "#4A4326" }, { name: "Peanut Butter", hex: "#D9B87E" }, { name: "Toadstool", hex: "#7A5A4A" }, { name: "Antique Bronze", hex: "#4A3222" }, { name: "Catalan", hex: "#6E5B4A" }, { name: "Terracotta Sand", hex: "#C48A6E" }, { name: "Egyptian Sand", hex: "#D9A96E" }, { name: "Biscuit", hex: "#D9C29A" }, { name: "Waffle", hex: "#C9A96E" }, { name: "Cream Silk", hex: "#E0CE9E" }, { name: "Warm Apricot", hex: "#E0A97E" }
  ] },
  { id: "grey", label: "Grey", swatch: "#7E8A8C", product: "gloss", shades: [
    { name: "Pebble", hex: "#C6C9C3" }, { name: "Seagull", hex: "#B7BDB3" }, { name: "Corvette", hex: "#9AA3A0" }, { name: "Steel", hex: "#7E8A8C" }, { name: "Pigeon", hex: "#6E7C7C" }, { name: "Granite", hex: "#6E7373" }, { name: "Slate Grey", hex: "#4A5C5C" }, { name: "Seal Grey", hex: "#3E4A4A" }, { name: "Mouse Grey", hex: "#8C8377" }, { name: "Ash", hex: "#B3B0A8" }, { name: "Moonlight", hex: "#D3D9D6" }, { name: "Ice", hex: "#C9D3D1" }
  ] },
  { id: "black", label: "Black & Dark", swatch: "#1C2320", product: "gloss", shades: [
    { name: "Velvet Grey", hex: "#1C2320" }, { name: "Gun Metal", hex: "#16211E" }, { name: "Black", hex: "#0A0A0A" }, { name: "Lizard", hex: "#14140F" }, { name: "Panatella", hex: "#2A2419" }, { name: "Midnight Blue", hex: "#12123B" }
  ] },
];

function blendHexes(hexes) {
  if (hexes.length === 0) return "#FFFFFF";
  const sum = hexes.reduce((acc, h) => {
    const v = h.replace("#", "");
    return [acc[0] + parseInt(v.substring(0, 2), 16), acc[1] + parseInt(v.substring(2, 4), 16), acc[2] + parseInt(v.substring(4, 6), 16)];
  }, [0, 0, 0]);
  const avg = sum.map((v) => Math.round(v / hexes.length));
  return "#" + avg.map((x) => x.toString(16).padStart(2, "0")).join("");
}
function fmt(n) { return "KES " + n.toLocaleString(); }

let picks = [];
let activeGroupId = null;
let theme = "light";
const root = document.getElementById("root");

function render() {
  const isDark = theme === "dark";
  const bg = isDark ? "#14181F" : "#FAF8F3";
  const ink = isDark ? "#EDEAE2" : "#1B2A3D";
  const activeGroup = GROUPS.find((g) => g.id === activeGroupId);
  const blend = blendHexes(picks.map((p) => p.hex));
  const isFull = picks.length >= 5;

  let shadeHtml = "";
  if (activeGroup) {
    shadeHtml = activeGroup.shades.map((s) => {
      const picked = picks.some((p) => p.name === s.name);
      const disabled = !picked && isFull;
      return `<div class="shade-card ${picked ? "picked" : ""} ${disabled ? "disabled" : ""}" data-name="${s.name}" data-hex="${s.hex}" data-product="${activeGroup.product}" style="${disabled ? "" : "cursor:pointer;"}">
        <div class="shade-swatch" style="background:${s.hex};"></div>
        <div class="shade-info"><div class="shade-name">${s.name}</div><div class="shade-hex">${s.hex}</div></div>
      </div>`;
    }).join("");
  }

  let trayHtml = "";
  if (picks.length === 0) {
    trayHtml = `<div class="empty-state">No shades added yet. Tap a shade to add it.</div>`;
  } else {
    trayHtml = `
      <ul class="tray-picks">${picks.map((p) =>
        `<li class="tray-pick"><span style="display:inline-block;width:12px;height:12px;border-radius:4px;background:${p.hex};"></span> ${p.name} <span class="remove" data-name="${p.name}">✕</span></li>`
      ).join("")}</ul>
      <div class="tray-blend">
        <div class="blend-swatch" style="background:${blend};"></div>
        <span>Blend: <strong>${blend}</strong></span>
        <span style="opacity:0.5;">|</span>
        <span>${picks.length} / 5</span>
        <span style="opacity:0.5;">|</span>
        <span>Total: ${fmt(picks.reduce((sum, p) => sum + PRODUCTS[p.product]?.prices[p.size] || 0, 0))}</span>
      </div>
    `;
  }

  root.innerHTML = `
    <div style="background:${bg};color:${ink};min-height:100vh;transition:background 0.2s;">
      <header class="header" style="background:${isDark ? "#0D1116" : "#1B2A3D"};color:#F1ECE0;">
        <div class="logo">🎨 Apex Coating</div>
        <button class="theme-toggle" id="themeBtn">${isDark ? "☀️" : "🌙"}</button>
      </header>
      <div class="container">
        <h1 class="section-title display">Colour Centre</h1>
        <p class="section-sub">Pick a colour family, then tap any shade to add it to your tray.</p>
        <div class="group-grid">${GROUPS.map((g) =>
          `<button class="group-btn ${activeGroupId === g.id ? "active" : ""}" data-id="${g.id}" style="border-color:${activeGroupId === g.id ? "#C98A1D" : "transparent"}">
            <div class="group-swatch" style="background:${g.swatch};"></div>
            <div class="group-label">${g.label} <span class="group-count">${g.shades.length}</span></div>
          </button>`
        ).join("")}</div>
        ${activeGroup ? `
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-top:1.5rem;">
            <h2 style="font-weight:600;font-size:1.15rem;">${activeGroup.label}</h2>
            <button class="back-btn" id="closeGroup">← Close</button>
          </div>
          <div class="shade-grid">${shadeHtml}</div>
        ` : `<div style="opacity:0.4;text-align:center;padding:2rem 0;font-size:0.95rem;">Tap a colour family above to see its shades.</div>`}
        <hr />
        <div class="tray">
          <div class="tray-header"><span class="tray-title">🧪 Your Tray</span>${picks.length > 0 ? `<button class="back-btn" id="clearTray">Clear all</button>` : ""}</div>
          ${trayHtml}
        </div>
        <div style="opacity:0.4;font-size:0.75rem;text-align:center;margin:2rem 0 1rem 0;">Apex Coating (EA) Ltd — Colour Centre</div>
      </div>
    </div>
  `;

  document.querySelectorAll(".group-btn").forEach((btn) => {
    btn.onclick = () => { activeGroupId = btn.dataset.id; render(); };
  });
  const closeBtn = document.getElementById("closeGroup");
  if (closeBtn) closeBtn.onclick = () => { activeGroupId = null; render(); };
  document.querySelectorAll(".shade-card:not(.disabled)").forEach((el) => {
    el.onclick = () => {
      if (picks.some((p) => p.name === el.dataset.name)) return;
      if (picks.length >= 5) return;
      const group = GROUPS.find((g) => g.id === activeGroupId);
      if (!group) return;
      const shade = group.shades.find((s) => s.name === el.dataset.name);
      if (!shade) return;
      picks.push({ ...shade, product: group.product, size: "4L" });
      render();
    };
  });
  document.querySelectorAll(".tray-pick .remove").forEach((el) => {
    el.onclick = (e) => { e.stopPropagation(); picks = picks.filter((p) => p.name !== el.dataset.name); render(); };
  });
  const clearBtn = document.getElementById("clearTray");
  if (clearBtn) clearBtn.onclick = () => { picks = []; render(); };
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) themeBtn.onclick = () => { theme = theme === "light" ? "dark" : "light"; render(); };
}

render();
