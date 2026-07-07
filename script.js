// script.js
// Paste all your GROUPS, PRODUCTS, SIZES, and helper functions here.

// Then build the page:
const root = document.getElementById('root');

function render() {
  root.innerHTML = `
    <header class="header">
      <div class="logo">
        <span>🎨</span> Apex Coating
      </div>
      <button class="theme-toggle">🌙</button>
    </header>
    <div class="container">
      <h1 class="display">Colour Centre</h1>
      <p>Pick a shade, add to your tray, preview the blend.</p>
      <div class="colour-grid" id="colourGrid"></div>
      <div class="pick-tray" id="pickTray">
        <h3>Your Tray</h3>
        <ul class="pick-list" id="pickList"></ul>
        <p id="blendPreview"></p>
      </div>
    </div>
  `;
}

render();
