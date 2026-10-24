NEET.ch("phy-em-waves", {
  intro: "Displacement current · Properties of EM waves · Energy and momentum · Electromagnetic spectrum and uses",
  secs: [
    ["Displacement Current", [
      ["box", "Maxwell's correction", ["Displacement current I<sub>d</sub> = ε₀ dΦ<sub>E</sub>/dt", "Ampere–Maxwell law: ∮B·dl = μ₀(I<sub>c</sub> + I<sub>d</sub>)", "Between capacitor plates while charging, I<sub>d</sub> equals the conduction current in the wires"]],
      ["p", "A changing electric field produces a magnetic field, just as a changing magnetic field produces an electric field. This symmetry predicts EM waves."],
    ]],
    ["Properties of EM Waves", [
      ["box", "EM waves", ["Speed in vacuum c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s", "E₀/B₀ = c", "Speed in a medium v = 1/√(με)", "E, B and direction of travel are mutually perpendicular (transverse)", "Average energy density: u = ½ε₀E₀² (shared equally by E and B)", "Intensity I = ½cε₀E₀²; momentum p = U/c"]],
      ["ul", ["EM waves need no medium.", "They are produced by accelerated charges.", "E and B oscillate in phase.", "They exert radiation pressure."]],
      ["ex", "The peak E of an EM wave is 6 V/m. Find the peak B.", "B₀ = E₀/c = 6/(3 × 10⁸) = <b>2 × 10⁻⁸ T</b>."],
    ]],
    ["Electromagnetic Spectrum", [
      ["tbl", ["Wave", "Wavelength (approx.)", "Source / production", "Uses"], [
        ["Radio", "> 0.1 m", "Oscillating circuits", "Radio, TV broadcast"],
        ["Microwaves", "0.1 m – 1 mm", "Klystron, magnetron", "Radar, microwave ovens"],
        ["Infrared", "1 mm – 700 nm", "Hot bodies", "Remote controls, night vision, physiotherapy, greenhouse effect"],
        ["Visible", "700 – 400 nm", "Electron transitions", "Vision"],
        ["Ultraviolet", "400 nm – 1 nm", "Sun, arc lamps", "Sterilisation, LASIK eye surgery; absorbed by ozone"],
        ["X-rays", "1 nm – 10⁻³ nm", "Electrons striking metal targets", "Medical imaging, crystal study"],
        ["Gamma rays", "< 10⁻³ nm", "Nuclear decay", "Cancer treatment"]]],
      ["tip", "Order by increasing frequency: <b>R</b>adio, <b>M</b>icro, <b>I</b>nfrared, <b>V</b>isible, <b>U</b>V, <b>X</b>-ray, <b>G</b>amma. Mnemonic: <b>R</b>aman <b>M</b>et <b>I</b>ndia's <b>V</b>ery <b>U</b>nusual e<b>X</b>pert <b>G</b>uru."],
    ]],
  ],
  rev: [
    "Displacement current I<sub>d</sub> = ε₀ dΦ<sub>E</sub>/dt.",
    "c = 1/√(μ₀ε₀); E₀ = cB₀.",
    "EM waves are transverse and need no medium.",
    "Energy is shared equally between E and B fields.",
    "Spectrum order: radio → micro → IR → visible → UV → X → gamma.",
    "Ozone absorbs UV; infrared causes the greenhouse effect.",
  ],
  mcq: [
    ["The speed of EM waves in vacuum is given by:", ["√(μ₀ε₀)", "1/√(μ₀ε₀)", "μ₀ε₀", "√(μ₀/ε₀)"], 1, "c = 1/√(μ₀ε₀)."],
    ["The waves used in radar are:", ["Infrared", "Microwaves", "UV", "X-rays"], 1, "Microwaves have suitable wavelengths and directionality."],
    ["Which radiation has the highest frequency?", ["X-rays", "UV", "Gamma rays", "Microwaves"], 2, "Gamma rays have the shortest wavelength."],
    ["In an EM wave, the phase difference between E and B is:", ["0", "π/2", "π", "π/4"], 0, "They oscillate in phase."],
    ["The ozone layer absorbs mainly:", ["Infrared", "Ultraviolet", "Visible", "Radio"], 1, "It protects life from harmful UV."],
    ["If E₀ = 300 V/m in an EM wave, B₀ is:", ["10⁻⁶ T", "10⁻⁸ T", "9 × 10¹⁰ T", "10⁻⁴ T"], 0, "300/(3 × 10⁸) = 10⁻⁶ T."],
    ["Displacement current arises due to:", ["Flow of electrons", "Changing electric field", "Changing magnetic field", "Steady current"], 1, "I<sub>d</sub> = ε₀ dΦ<sub>E</sub>/dt."],
    ["Infrared radiation is used in:", ["Sterilising water", "Remote controls", "Bone imaging", "Cancer treatment"], 1, "TV remotes use IR LEDs."],
    ["EM waves are:", ["Longitudinal", "Transverse", "Both", "Neither"], 1, "E and B are perpendicular to the direction of propagation."],
    ["EM waves are produced by:", ["Charges at rest", "Charges moving uniformly", "Accelerated charges", "Neutral particles"], 2, "Only accelerated charges radiate."],
  ],
});
