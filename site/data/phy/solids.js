NEET.ch("phy-solids", {
  intro: "Stress and strain · Hooke's law · Elastic moduli · Stress–strain curve · Elastic potential energy",
  given: "Take g = 10 m/s² unless stated otherwise.",
  secs: [
    ["Elasticity, Stress and Strain", [
      ["ul", ["<b>Elasticity:</b> the property of regaining original shape when the deforming force is removed. Quartz is nearly perfectly elastic; putty is nearly perfectly plastic.", "<b>Stress</b> = restoring force per unit area (N/m², same unit as pressure).", "<b>Strain</b> = change in dimension / original dimension (no unit)."]],
      ["tbl", ["Type", "Stress", "Strain"], [["Longitudinal", "F/A (normal)", "ΔL/L"], ["Shear", "F/A (tangential)", "Δx/L = tanθ ≈ θ"], ["Volume", "ΔP (hydraulic)", "ΔV/V"]]],
    ]],
    ["Hooke's Law and Elastic Moduli", [
      ["box", "Moduli of elasticity (within the elastic limit, stress ∝ strain)", [
        "Young's modulus Y = (F/A)/(ΔL/L) = FL / (AΔL)",
        "Shear modulus G = (F/A)/θ",
        "Bulk modulus B = −ΔP/(ΔV/V); compressibility = 1/B",
        "Poisson's ratio σ = lateral strain / longitudinal strain (theoretically −1 to 0.5)"]],
      ["ul", ["Y depends only on the material, not on the length or area of the wire.", "Steel is more elastic than rubber (larger Y).", "Solids have all three moduli; liquids and gases have only bulk modulus.", "For most metals, G ≈ Y/3."]],
      ["ex", "A 2 m wire of area 1 mm² stretches 1 mm under 100 N. Find Y.", "Y = FL/(AΔL) = 100 × 2 / (10⁻⁶ × 10⁻³) = <b>2 × 10¹¹ N/m²</b>."],
      ["ex", "Two wires of the same material have length ratio 1:2 and radius ratio 2:1. Find the ratio of extensions under equal force.", "ΔL ∝ L/r²: (1/4) / (2/1) = <b>1 : 8</b>."],
      ["tip", "If a wire is cut in half, each half stretches half as much under the same load, but Y is unchanged."],
    ]],
    ["Stress–Strain Curve", [
      ["ul", [
        "<b>Proportional limit:</b> stress ∝ strain (Hooke's law holds).",
        "<b>Elastic limit / yield point:</b> beyond it the body doesn't fully recover.",
        "<b>Ultimate tensile strength:</b> maximum stress the material can bear.",
        "<b>Fracture point:</b> the material breaks.",
        "Ductile materials (copper, aluminium) have a large plastic region; brittle materials (glass, cast iron) break soon after the elastic limit.",
        "Elastomers (rubber) have no proportional region but can be stretched a lot and recover.",
      ]],
    ]],
    ["Elastic Potential Energy", [
      ["box", "Energy stored in a stretched wire", ["U = ½ × F × ΔL = ½ × stress × strain × volume", "Energy per unit volume u = ½ × stress × strain = stress²/2Y"]],
      ["ex", "A wire stretches 2 mm under a load of 50 N. Find the energy stored.", "U = ½ × 50 × 0.002 = <b>0.05 J</b>."],
    ]],
  ],
  rev: [
    "Stress has the same unit as pressure; strain is dimensionless.",
    "Y is a material constant, independent of the wire's dimensions.",
    "ΔL = FL/AY; for the same material and load, ΔL ∝ L/r².",
    "Liquids and gases have only bulk modulus.",
    "Energy density = ½ stress × strain.",
    "Steel is more elastic than rubber.",
  ],
  mcq: [
    ["The SI unit of Young's modulus is the same as that of:", ["Force", "Strain", "Pressure", "Energy"], 2, "Y = stress/strain, and stress is N/m²."],
    ["A wire is cut to half its length. Its Young's modulus:", ["Halves", "Doubles", "Remains the same", "Becomes four times"], 2, "Y depends only on the material."],
    ["Which has only bulk modulus?", ["Steel", "Rubber", "Water", "Glass"], 2, "Fluids cannot sustain shear or longitudinal stress."],
    ["Two wires of the same material and length have radii in ratio 1 : 2. Under the same load, their extensions are in the ratio:", ["1 : 2", "2 : 1", "4 : 1", "1 : 4"], 2, "ΔL ∝ 1/r²: (2/1)² = 4 : 1."],
    ["The energy stored per unit volume of a stretched wire is:", ["stress × strain", "½ stress × strain", "stress/strain", "2 stress × strain"], 1, "u = ½ × stress × strain."],
    ["The theoretical range of Poisson's ratio is:", ["0 to 1", "−1 to 0.5", "0.5 to 1", "−1 to 1"], 1, "Standard limits: −1 < σ < 0.5."],
    ["Which material is more elastic?", ["Rubber", "Steel", "Putty", "Clay"], 1, "Steel has a much larger Young's modulus."],
    ["A wire of length 1 m and area 10⁻⁶ m² stretches by 0.5 mm under 100 N. Its Young's modulus is:", ["2 × 10¹¹ N/m²", "5 × 10¹⁰ N/m²", "2 × 10¹⁰ N/m²", "10¹¹ N/m²"], 0, "Y = 100 × 1 / (10⁻⁶ × 5 × 10⁻⁴) = 2 × 10¹¹."],
    ["Compressibility is the reciprocal of:", ["Young's modulus", "Shear modulus", "Bulk modulus", "Poisson's ratio"], 2, "Compressibility = 1/B."],
    ["The point beyond which a body does not regain its original shape is the:", ["Fracture point", "Elastic limit", "Proportional limit", "Breaking point"], 1, "Past the elastic limit deformation becomes permanent."],
  ],
});
