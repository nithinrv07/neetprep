NEET.ch("phy-ray-optics", {
  intro: "Reflection · Spherical mirrors · Refraction · Total internal reflection · Lenses · Lens maker's formula · Prism and dispersion · Microscopes and telescopes",
  secs: [
    ["Spherical Mirrors", [
      ["box", "Mirror formulas (Cartesian sign convention)", ["f = R/2", "1/v + 1/u = 1/f", "Magnification m = −v/u = h<sub>i</sub>/h<sub>o</sub>", "Concave f negative; convex f positive", "Real images: m negative (inverted); virtual: m positive (erect)"]],
      ["ul", ["Convex mirror always gives a virtual, erect, diminished image (rear-view mirror, wide field of view).", "Concave mirror: object between F and P gives virtual, magnified image (shaving mirror)."]],
      ["ex", "An object is 30 cm in front of a concave mirror of focal length 20 cm. Find the image.", "1/v = −1/20 + 1/30 = −1/60 → v = <b>−60 cm</b> (real, in front). m = −(−60)/(−30) = <b>−2</b> (inverted, twice size)."],
    ]],
    ["Refraction and Total Internal Reflection", [
      ["box", "Refraction", ["Snell's law: n₁ sin i = n₂ sin r", "n = c/v; frequency stays the same, λ changes", "Apparent depth = real depth / n", "Critical angle: sin C = 1/n (denser to rarer)"]],
      ["ul", ["TIR needs light going from denser to rarer and i > C.", "Uses: optical fibres, sparkling diamonds (C ≈ 24°), mirages, totally reflecting prisms."]],
      ["ex", "A coin lies at the bottom of a 12 cm deep tank of water (n = 4/3). How deep does it appear?", "Apparent depth = 12 ÷ (4/3) = <b>9 cm</b>; it appears raised by 3 cm."],
      ["ex", "Find the critical angle for glass with n = √2.", "sin C = 1/√2 → <b>C = 45°</b>."],
    ]],
    ["Lenses", [
      ["box", "Lens formulas", ["1/v − 1/u = 1/f", "m = v/u", "Power P = 1/f (f in metres), dioptre", "Lens maker's formula: 1/f = (n − 1)(1/R₁ − 1/R₂)", "Lenses in contact: P = P₁ + P₂", "In a medium: f changes since (n<sub>lens</sub>/n<sub>medium</sub> − 1) changes"]],
      ["ul", ["A convex lens in a liquid of the same n behaves like a glass plate (f → ∞).", "A convex lens in a denser liquid behaves as a diverging lens.", "Cutting a lens in half along the axis: f same, image dimmer. Cutting across (perpendicular to axis): each half has f doubled."]],
      ["ex", "An object is 30 cm from a convex lens of focal length 20 cm. Find the image.", "1/v = 1/20 − 1/30 = 1/60 → v = <b>+60 cm</b>, real; m = −2."],
      ["ex", "A biconvex lens has R = 20 cm on both sides and n = 1.5. Find f.", "1/f = 0.5 × (1/20 + 1/20) = 1/20 → <b>f = 20 cm</b>."],
    ]],
    ["Prism and Dispersion", [
      ["box", "Prism", ["A = r₁ + r₂;  deviation δ = i + e − A", "Minimum deviation: n = sin((A + δ<sub>m</sub>)/2) / sin(A/2)", "Thin prism: δ = (n − 1)A", "Angular dispersion = (n<sub>v</sub> − n<sub>r</sub>)A"]],
      ["ul", ["Violet deviates most, red least (n<sub>v</sub> > n<sub>r</sub>).", "At minimum deviation, i = e and the ray passes symmetrically.", "Rainbow: dispersion + TIR in raindrops. Blue sky: Rayleigh scattering ∝ 1/λ⁴. Red sunset: blue scattered away along the long path."]],
      ["ex", "A thin prism of angle 5° has n = 1.6. Find the deviation.", "δ = 0.6 × 5° = <b>3°</b>."],
    ]],
    ["Optical Instruments", [
      ["box", "Instruments", ["Simple microscope: m = 1 + D/f (image at D = 25 cm); m = D/f (at infinity)", "Compound microscope: m ≈ (L/f<sub>o</sub>)(D/f<sub>e</sub>)", "Astronomical telescope (normal adjustment): m = f<sub>o</sub>/f<sub>e</sub>, length = f<sub>o</sub> + f<sub>e</sub>", "Telescope: large f<sub>o</sub> and aperture; microscope: small f<sub>o</sub> and f<sub>e</sub>"]],
      ["ul", ["Myopia (short sight): corrected with a concave lens. Hypermetropia: convex lens. Presbyopia: bifocals. Astigmatism: cylindrical lens.", "A larger telescope aperture gives better resolution and brighter images."]],
      ["ex", "A telescope has f<sub>o</sub> = 100 cm and f<sub>e</sub> = 5 cm. Find the magnification and tube length.", "m = 100/5 = <b>20</b>; length = <b>105 cm</b>."],
    ]],
  ],
  rev: [
    "Mirror: 1/v + 1/u = 1/f; lens: 1/v − 1/u = 1/f.",
    "Frequency doesn't change on refraction.",
    "TIR: denser → rarer and i > C, sin C = 1/n.",
    "P = 1/f (m); powers add for lenses in contact.",
    "Violet bends most; sky blue because scattering ∝ 1/λ⁴.",
    "Telescope m = f<sub>o</sub>/f<sub>e</sub>; length f<sub>o</sub> + f<sub>e</sub>.",
  ],
  mcq: [
    ["An object 30 cm in front of a convex lens of focal length 20 cm forms an image at:", ["12 cm, virtual", "60 cm, real", "60 cm, virtual", "15 cm, real"], 1, "1/v = 1/20 − 1/30 = 1/60."],
    ["Two lenses of +20 cm and −50 cm focal length are in contact. The power of the combination is:", ["+3 D", "+7 D", "−3 D", "+2 D"], 0, "5 − 2 = +3 D."],
    ["The critical angle for a medium of refractive index 2 is:", ["30°", "45°", "60°", "90°"], 0, "sin C = 1/2."],
    ["A rear-view mirror in a car is:", ["Concave", "Convex", "Plane", "Parabolic"], 1, "Wider field of view with erect images."],
    ["The sky looks blue because of:", ["Reflection", "Refraction", "Scattering", "Dispersion"], 2, "Rayleigh scattering ∝ 1/λ⁴."],
    ["When light goes from air into glass, which does not change?", ["Speed", "Wavelength", "Frequency", "Direction"], 2, "Frequency depends on the source."],
    ["A myopic person needs a:", ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], 1, "To diverge rays so the image forms on the retina."],
    ["The magnification of an astronomical telescope in normal adjustment is:", ["f<sub>e</sub>/f<sub>o</sub>", "f<sub>o</sub>/f<sub>e</sub>", "f<sub>o</sub> f<sub>e</sub>", "f<sub>o</sub> + f<sub>e</sub>"], 1, "m = f<sub>o</sub>/f<sub>e</sub>."],
    ["A convex lens (n = 1.5) is placed in a liquid of n = 1.5. It behaves like:", ["A convex lens", "A concave lens", "A plane glass sheet", "A prism"], 2, "(n<sub>lens</sub>/n<sub>medium</sub> − 1) = 0, so f → ∞."],
    ["A thin prism of angle 6° and n = 1.5 deviates light by:", ["3°", "6°", "9°", "1.5°"], 0, "(1.5 − 1) × 6° = 3°."],
    ["An object at 10 cm from a concave mirror of focal length 20 cm gives an image that is:", ["Real and inverted", "Virtual and magnified", "Virtual and diminished", "At infinity"], 1, "Object inside F of a concave mirror."],
    ["A fish 4 m below water (n = 4/3) appears to an observer above to be at a depth of:", ["3 m", "4 m", "5.33 m", "2 m"], 0, "4 ÷ (4/3) = 3 m."],
  ],
});
