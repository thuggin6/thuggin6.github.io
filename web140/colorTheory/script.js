const palettes = {
  palette1: {
    name: "Complementary",
    primary: "#E8C399",
    secondary: "#A8A096",
    accent: "#778B93",
    background: "#99D1E8",
    surface: "#99bde7",
    text: "#695641"
  },
  palette2: {
    name: "Analogous",
    primary: "#B369A8",
    secondary: "#B3697C",
    accent: "#B37D69",
    background: "#B38A69",
    surface: "#CCB99B",
    text: "#B37169"
  },
  palette3: {
    name: "Triadic",
    primary: "#638187",
    secondary: "#878463",
    accent: "#A2D2DC",
    background: "#FFF491",
    surface: "#91fff4",
    text: "#876372"
  }
};


/* ========================================
   APPLY SELECTED PALETTE
======================================== */

function applyPalette(palette) {

    const root =
        document.documentElement;


    /* Apply palette colors */

    root.style.setProperty(
        "--primary",
        palette.primary
    );


    root.style.setProperty(
        "--secondary",
        palette.secondary
    );


    root.style.setProperty(
        "--accent",
        palette.accent
    );


    root.style.setProperty(
        "--background",
        palette.background
    );


    root.style.setProperty(
        "--surface",
        palette.surface
    );


    root.style.setProperty(
        "--text",
        palette.text
    );


    /* Update HEX values */

    document.getElementById("primaryHex").textContent =
        palette.primary;


    document.getElementById("secondaryHex").textContent =
        palette.secondary;


    document.getElementById("accentHex").textContent =
        palette.accent;


    document.getElementById("backgroundHex").textContent =
        palette.background;


    document.getElementById("textHex").textContent =
        palette.text;

}


/* ========================================
   PALETTE BUTTONS
======================================== */

const paletteButtons =
    document.querySelectorAll("[data-palette]");


paletteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const paletteName =
            button.dataset.palette;


        const selectedPalette =
            palettes[paletteName];


        applyPalette(selectedPalette);

    });

});


/* ========================================
   INITIAL PALETTE
======================================== */

applyPalette(palettes.palette1);

