NEET.ch("chem-solutions", {
  intro: "Types of solutions · Concentration · Henry's law · Raoult's law · Ideal and non-ideal solutions · Azeotropes · Colligative properties · van't Hoff factor",
  secs: [
    ["Solubility and Henry's Law", [
      ["box", "Henry's law", ["p = K<sub>H</sub> × x (partial pressure of gas ∝ its mole fraction in solution)", "Higher K<sub>H</sub> → lower solubility", "Gas solubility decreases as temperature rises"]],
      ["ul", ["Uses: soft drinks are bottled under high CO₂ pressure; scuba tanks use helium-diluted air to avoid the bends.", "At high altitude, low O₂ pressure causes anoxia."]],
    ]],
    ["Raoult's Law and Ideal Solutions", [
      ["box", "Raoult's law", ["Volatile components: p<sub>A</sub> = x<sub>A</sub>p°<sub>A</sub>; total P = x<sub>A</sub>p°<sub>A</sub> + x<sub>B</sub>p°<sub>B</sub>", "Non-volatile solute: relative lowering (p° − p)/p° = x<sub>solute</sub>"]],
      ["tbl", ["Type", "Δ<sub>mix</sub>H", "Δ<sub>mix</sub>V", "Example", "Azeotrope"], [
        ["Ideal", "0", "0", "Benzene + toluene; n-hexane + n-heptane", "—"],
        ["Positive deviation (A–B weaker)", "+", "+", "Ethanol + water; acetone + CS₂", "Minimum boiling"],
        ["Negative deviation (A–B stronger)", "−", "−", "Chloroform + acetone; HNO₃ + water", "Maximum boiling"]]],
      ["ex", "Benzene (p° = 75 torr) and toluene (p° = 22 torr) are mixed with x<sub>benzene</sub> = 0.4. Find the total vapour pressure.", "P = 0.4 × 75 + 0.6 × 22 = 30 + 13.2 = <b>43.2 torr</b>."],
      ["tip", "Azeotropes can't be separated by fractional distillation. 95% ethanol is a minimum-boiling azeotrope."],
    ]],
    ["Colligative Properties", [
      ["box", "Formulas (i = van't Hoff factor)", ["Relative lowering of vapour pressure = i × x<sub>solute</sub>", "Elevation of boiling point: ΔT<sub>b</sub> = iK<sub>b</sub>m", "Depression of freezing point: ΔT<sub>f</sub> = iK<sub>f</sub>m", "Osmotic pressure: π = iCRT", "Molar mass: M = (K<sub>b</sub> × w × 1000)/(ΔT<sub>b</sub> × W)"]],
      ["ul", ["Osmotic pressure is best for finding molar masses of proteins and polymers (measurable at room temperature, large values).", "Isotonic solutions have equal osmotic pressure (0.9% NaCl ≈ blood). Cells shrink in hypertonic and swell in hypotonic solutions.", "Reverse osmosis (pressure > π) desalinates sea water."]],
      ["ex", "Find the freezing point of a solution of 6 g urea (M = 60) in 500 g water. K<sub>f</sub> = 1.86 K kg/mol.", "m = 0.1/0.5 = 0.2. ΔT<sub>f</sub> = 1.86 × 0.2 = 0.372 K → <b>−0.372 °C</b>."],
    ]],
    ["van't Hoff Factor", [
      ["box", "i", ["i = observed colligative property / calculated value", "Dissociation: i = 1 + (n − 1)α", "Association: i = 1 − (1 − 1/n)α", "Complete dissociation: NaCl 2, CaCl₂ 3, K₂SO₄ 3, K₄[Fe(CN)₆] 5", "Acetic acid dimerises in benzene: i ≈ ½"]],
      ["ex", "Which has the lowest freezing point: 0.1 m glucose, NaCl, CaCl₂ or Al₂(SO₄)₃?", "Largest i × m: Al₂(SO₄)₃, i = 5 → <b>Al₂(SO₄)₃</b>."],
    ]],
  ],
  rev: [
    "Henry's law: p = K<sub>H</sub>x; high K<sub>H</sub>, low solubility.",
    "Positive deviation → minimum-boiling azeotrope.",
    "ΔT<sub>b</sub> = iK<sub>b</sub>m; ΔT<sub>f</sub> = iK<sub>f</sub>m; π = iCRT.",
    "Osmotic pressure is used for polymer molar masses.",
    "i: NaCl 2, CaCl₂ 3, K₄[Fe(CN)₆] 5.",
    "0.9% NaCl is isotonic with blood.",
  ],
  mcq: [
    ["Which solution shows positive deviation from Raoult's law?", ["Chloroform + acetone", "Ethanol + water", "Benzene + toluene", "HNO₃ + water"], 1, "Ethanol–water interactions are weaker than pure components'."],
    ["The best colligative property for finding the molar mass of a protein is:", ["Boiling point elevation", "Freezing point depression", "Osmotic pressure", "Lowering of vapour pressure"], 2, "Measurable at room temperature with large values."],
    ["The van't Hoff factor for K₄[Fe(CN)₆] (complete dissociation) is:", ["4", "5", "6", "11"], 1, "4K⁺ + [Fe(CN)₆]⁴⁻."],
    ["As temperature rises, the solubility of a gas in water:", ["Increases", "Decreases", "Stays the same", "First increases then decreases"], 1, "Gas dissolution is exothermic."],
    ["A solution of chloroform and acetone forms a:", ["Minimum-boiling azeotrope", "Maximum-boiling azeotrope", "Ideal solution", "Colloid"], 1, "Negative deviation due to H-bonding between them."],
    ["Molality of a solution with 0.5 mol solute in 250 g water is:", ["0.5 m", "1 m", "2 m", "0.125 m"], 2, "0.5/0.25 = 2 m."],
    ["Blood cells placed in pure water will:", ["Shrink", "Swell and may burst", "Stay unchanged", "Dissolve"], 1, "Water enters by osmosis (hypotonic medium)."],
    ["Desalination of sea water uses:", ["Osmosis", "Reverse osmosis", "Distillation only", "Electrolysis"], 1, "Pressure greater than osmotic pressure pushes water out."],
    ["Acetic acid in benzene has i close to:", ["1", "2", "0.5", "3"], 2, "It forms dimers."],
    ["For an ideal solution, Δ<sub>mix</sub>H is:", ["Positive", "Negative", "Zero", "Infinite"], 2, "No change in interactions."],
  ],
});
