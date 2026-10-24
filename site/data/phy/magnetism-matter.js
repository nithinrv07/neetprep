NEET.ch("phy-magnetism-matter", {
  intro: "Bar magnet · Magnetic dipole · Gauss's law in magnetism · Magnetisation and susceptibility · Dia-, para- and ferromagnetism · Hysteresis",
  secs: [
    ["Bar Magnet as a Dipole", [
      ["box", "Magnetic dipole", ["Magnetic moment m (A m²), from S to N", "Axial field: B = (μ₀/4π) 2m/r³", "Equatorial field: B = (μ₀/4π) m/r³", "Torque: τ = mB sinθ; energy U = −mB cosθ", "Period of oscillation in a field: T = 2π√(I/mB)"]],
      ["ul", ["Magnetic poles always exist in pairs; there are no magnetic monopoles.", "Field lines are closed loops: outside from N to S, inside from S to N.", "A current loop behaves as a magnetic dipole with m = IA."]],
      ["ex", "A bar magnet is cut into two equal halves by a cut perpendicular to its axis. What is the magnetic moment of each half?", "Pole strength stays, length halves: m becomes <b>m/2</b> for each."],
    ]],
    ["Gauss's Law for Magnetism", [
      ["box", "Gauss's law", ["∮B·dA = 0", "Net magnetic flux through any closed surface is zero (no monopoles)"]],
    ]],
    ["Magnetisation and Material Properties", [
      ["box", "Definitions", ["Magnetisation M = magnetic moment per unit volume", "Magnetic intensity H = B/μ₀ − M", "Susceptibility χ = M/H", "Relative permeability μ<sub>r</sub> = 1 + χ;  μ = μ₀μ<sub>r</sub>"]],
    ]],
    ["Diamagnetic, Paramagnetic and Ferromagnetic Substances", [
      ["tbl", ["Property", "Diamagnetic", "Paramagnetic", "Ferromagnetic"], [
        ["χ", "Small, negative", "Small, positive", "Large, positive"],
        ["μ<sub>r</sub>", "Slightly < 1", "Slightly > 1", "≫ 1"],
        ["In a non-uniform field", "Moves to weaker region", "Moves to stronger region", "Strongly attracted"],
        ["Temperature dependence", "Independent", "χ ∝ 1/T (Curie's law)", "Becomes paramagnetic above Curie temperature"],
        ["Examples", "Bi, Cu, Ag, water, N₂, superconductors", "Al, Na, Pt, O₂", "Fe, Co, Ni, Gd"]]],
      ["ul", ["Superconductors are perfect diamagnets (χ = −1): Meissner effect.", "Ferromagnetism comes from domains, regions of aligned atomic moments."]],
      ["tip", "Liquid oxygen sticks between magnet poles (paramagnetic); a diamagnetic liquid is pushed away and its level dips."],
    ]],
    ["Hysteresis and Magnet Materials", [
      ["ul", ["<b>Retentivity</b>: B left when H is reduced to zero. <b>Coercivity</b>: reverse H needed to bring B to zero.", "Area of the hysteresis loop = energy lost per cycle per unit volume.", "Permanent magnets (steel, alnico): high retentivity and high coercivity.", "Electromagnet and transformer cores (soft iron): high permeability, low coercivity, thin loop (low loss)."]],
    ]],
  ],
  rev: [
    "No magnetic monopoles; ∮B·dA = 0.",
    "Axial field = 2 × equatorial field.",
    "χ: dia negative, para small positive, ferro large positive.",
    "Curie's law for paramagnets: χ ∝ 1/T.",
    "Soft iron for transformer cores; steel for permanent magnets.",
    "Superconductors are perfect diamagnets.",
  ],
  mcq: [
    ["Which is diamagnetic?", ["Aluminium", "Iron", "Bismuth", "Nickel"], 2, "Bismuth has negative susceptibility."],
    ["The susceptibility of a paramagnetic substance varies with absolute temperature as:", ["T", "1/T", "T²", "Independent"], 1, "Curie's law: χ = C/T."],
    ["The material best suited for the core of a transformer is:", ["Steel", "Soft iron", "Copper", "Alnico"], 1, "Low hysteresis loss and high permeability."],
    ["The net magnetic flux through a closed surface is:", ["μ₀I", "Infinite", "Zero", "Depends on the magnet"], 2, "Gauss's law for magnetism."],
    ["Above the Curie temperature, a ferromagnetic substance becomes:", ["Diamagnetic", "Paramagnetic", "Superconducting", "More ferromagnetic"], 1, "Thermal agitation destroys domain alignment."],
    ["The relative permeability of a diamagnetic substance is:", ["Slightly less than 1", "Slightly more than 1", "Much more than 1", "Zero"], 0, "χ < 0, so μ<sub>r</sub> = 1 + χ < 1."],
    ["Permanent magnets are made of materials with:", ["Low retentivity, low coercivity", "High retentivity, high coercivity", "Low retentivity, high coercivity", "High permeability only"], 1, "They must keep magnetism and resist demagnetisation."],
    ["Magnetic field lines of a bar magnet:", ["Start at N and end at S", "Are closed loops", "Cross each other", "Exist only outside"], 1, "Inside the magnet they go from S to N."],
    ["A superconductor shows:", ["Ferromagnetism", "Paramagnetism", "Perfect diamagnetism", "No magnetism"], 2, "Meissner effect, χ = −1."],
    ["The area of the hysteresis loop represents:", ["Retentivity", "Coercivity", "Energy loss per cycle per unit volume", "Permeability"], 2, "Energy dissipated as heat each cycle."],
  ],
});
