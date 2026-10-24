NEET.ch("phy-wave-optics", {
  intro: "Huygens' principle · Coherent sources · Young's double slit · Interference · Single-slit diffraction · Resolving power · Polarisation",
  secs: [
    ["Huygens' Principle and Coherence", [
      ["ul", ["Every point on a wavefront acts as a source of secondary wavelets; the new wavefront is their envelope.", "Point source → spherical wavefronts; distant source → plane wavefronts.", "<b>Coherent sources</b> have a constant phase difference and the same frequency. Two independent bulbs are not coherent."]],
    ]],
    ["Interference and Young's Double Slit", [
      ["box", "Interference", ["Path difference Δx ↔ phase difference φ = (2π/λ)Δx", "Constructive (bright): Δx = nλ", "Destructive (dark): Δx = (2n − 1)λ/2", "Resultant intensity: I = I₁ + I₂ + 2√(I₁I₂) cosφ", "I<sub>max</sub>/I<sub>min</sub> = (√I₁ + √I₂)² / (√I₁ − √I₂)²"]],
      ["box", "YDSE", ["Fringe width β = λD/d", "Position of nth bright fringe: y = nλD/d", "Angular fringe width = λ/d", "In a medium of index n: β' = β/n"]],
      ["ul", ["The central fringe is bright.", "With white light, the central fringe is white and others are coloured.", "A thin film of thickness t and index μ in front of one slit shifts the pattern by (μ − 1)tD/d towards that slit."]],
      ["ex", "In YDSE, d = 1 mm, D = 1 m, λ = 600 nm. Find the fringe width.", "β = 600 × 10⁻⁹ × 1 / 10⁻³ = <b>0.6 mm</b>."],
      ["ex", "Two waves have intensity ratio 9 : 1. Find I<sub>max</sub>/I<sub>min</sub>.", "Amplitude ratio 3 : 1. (3 + 1)²/(3 − 1)² = 16/4 = <b>4 : 1</b>."],
    ]],
    ["Diffraction at a Single Slit", [
      ["box", "Single slit of width a", ["Minima at a sinθ = nλ", "Width of central maximum = 2λD/a (angular 2λ/a)", "Central maximum is twice as wide as the others"]],
      ["ul", ["Diffraction is noticeable when the slit width is comparable to λ.", "Sound diffracts easily around doors because its wavelength is large."]],
      ["ex", "Light of 500 nm falls on a slit of 0.1 mm. Screen is 1 m away. Find the width of the central maximum.", "2λD/a = 2 × 5 × 10⁻⁷ × 1 / 10⁻⁴ = <b>1 cm</b>."],
    ]],
    ["Resolving Power", [
      ["box", "Resolution", ["Telescope: limit of resolution θ = 1.22λ/D", "Resolving power ∝ D/λ (larger aperture → better)", "Microscope resolving power ∝ 2n sinβ/λ (shorter λ → better)"]],
    ]],
    ["Polarisation", [
      ["box", "Polarisation", ["Malus's law: I = I₀ cos²θ", "Unpolarised light through a polaroid: I = I₀/2", "Brewster's law: tan i<sub>p</sub> = n; reflected and refracted rays are at 90°"]],
      ["ul", ["Only transverse waves can be polarised, so polarisation proves light is transverse.", "Sound cannot be polarised.", "Polaroids are used in sunglasses, 3D movies and LCDs."]],
      ["ex", "Unpolarised light of intensity I₀ passes two polaroids with axes at 60°. Find the final intensity.", "After the first: I₀/2. After the second: (I₀/2) cos²60° = <b>I₀/8</b>."],
    ]],
  ],
  rev: [
    "Coherent sources: constant phase difference.",
    "β = λD/d; β reduces by n in a medium.",
    "Bright: Δx = nλ; dark: Δx = (2n − 1)λ/2.",
    "Central diffraction maximum width 2λD/a.",
    "Malus: I = I₀cos²θ; unpolarised → half.",
    "Brewster: tan i<sub>p</sub> = n.",
  ],
  mcq: [
    ["In YDSE, if the slit separation is doubled, the fringe width becomes:", ["Double", "Half", "Same", "Four times"], 1, "β ∝ 1/d."],
    ["Polarisation shows that light is:", ["Longitudinal", "Transverse", "A particle", "Faster than sound"], 1, "Only transverse waves can be polarised."],
    ["Unpolarised light passes through one polaroid. The transmitted intensity is:", ["I₀", "I₀/2", "I₀/4", "Zero"], 1, "Average of cos²θ over all directions is ½."],
    ["Brewster's angle i<sub>p</sub> for a medium of index √3 is:", ["30°", "45°", "60°", "90°"], 2, "tan i<sub>p</sub> = √3."],
    ["The condition for a dark fringe is a path difference of:", ["nλ", "(2n − 1)λ/2", "nλ/4", "2nλ"], 1, "Waves meet in opposite phase."],
    ["When the YDSE apparatus is immersed in water (n = 4/3), the fringe width:", ["Increases", "Decreases to 3/4", "Stays the same", "Doubles"], 1, "λ in water = λ/n, so β' = 3β/4."],
    ["Two coherent waves of intensities I and 4I superpose. The maximum intensity is:", ["5I", "9I", "3I", "16I"], 1, "(√I + 2√I)² = 9I."],
    ["The width of the central maximum in single-slit diffraction is:", ["λD/a", "2λD/a", "λa/D", "λ/2a"], 1, "From −λ/a to +λ/a in angle."],
    ["The resolving power of a telescope increases with:", ["Smaller aperture", "Larger aperture", "Longer wavelength", "Shorter focal length of eyepiece"], 1, "θ = 1.22λ/D."],
    ["Light through two polaroids at 90° has intensity:", ["I₀/2", "I₀/4", "Zero", "I₀"], 2, "cos²90° = 0."],
    ["With white light in YDSE, the central fringe is:", ["Dark", "White", "Red", "Violet"], 1, "Zero path difference for all colours."],
    ["Coherent sources must have:", ["Same amplitude", "Constant phase difference", "Different frequencies", "Same intensity"], 1, "The defining property of coherence."],
  ],
});
