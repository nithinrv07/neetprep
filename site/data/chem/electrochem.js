NEET.ch("chem-electrochem", {
  intro: "Galvanic cells · Electrode potential · Nernst equation · ΔG and E · Conductance · Kohlrausch's law · Electrolysis and Faraday's laws · Batteries · Corrosion",
  given: "F = 96500 C/mol, 2.303RT/F = 0.059 V at 298 K.",
  secs: [
    ["Galvanic Cells and Electrode Potential", [
      ["ul", [
        "Galvanic (voltaic) cell converts chemical energy to electrical energy. Daniell cell: Zn | Zn²⁺ || Cu²⁺ | Cu, E° = 1.10 V.",
        "<b>Anode</b>: oxidation, negative in a galvanic cell. <b>Cathode</b>: reduction, positive.",
        "Salt bridge completes the circuit and keeps solutions neutral.",
        "Standard hydrogen electrode (SHE) is the reference: E° = 0.",
      ]],
      ["box", "Cell EMF", ["E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub> (both as reduction potentials)", "Positive E°<sub>cell</sub> → spontaneous"]],
      ["ex", "E°(Zn²⁺/Zn) = −0.76 V and E°(Cu²⁺/Cu) = +0.34 V. Find E° of the Daniell cell.", "0.34 − (−0.76) = <b>1.10 V</b>."],
    ]],
    ["Nernst Equation and Thermodynamics", [
      ["box", "Nernst", ["E = E° − (0.059/n) log Q (298 K)", "At equilibrium E = 0: E° = (0.059/n) log K", "ΔG° = −nFE°;  ΔG° = −2.303RT log K"]],
      ["ex", "Find E for Zn | Zn²⁺(0.1 M) || Cu²⁺(1 M) | Cu.", "Q = 0.1/1. E = 1.10 − (0.059/2) log 0.1 = 1.10 + 0.0295 ≈ <b>1.13 V</b>."],
      ["ex", "Find the pH-dependent potential of a hydrogen electrode at pH 3.", "E = −0.059 × pH = <b>−0.177 V</b>."],
    ]],
    ["Conductance", [
      ["box", "Conductivity", ["R = ρl/A; conductance G = 1/R (S)", "Conductivity κ = G × (l/A) = G × cell constant (S/m)", "Molar conductivity Λ<sub>m</sub> = κ × 1000 / M (S cm² mol⁻¹, κ in S/cm)"]],
      ["ul", [
        "On dilution, κ <b>decreases</b> (fewer ions per volume) but Λ<sub>m</sub> <b>increases</b>.",
        "Strong electrolytes: Λ<sub>m</sub> = Λ°<sub>m</sub> − A√C (Debye–Hückel–Onsager), nearly linear.",
        "Weak electrolytes: Λ<sub>m</sub> rises steeply at high dilution; Λ° found from Kohlrausch's law.",
        "<b>Kohlrausch's law:</b> Λ°<sub>m</sub> = ν₊λ°₊ + ν₋λ°₋. Degree of dissociation α = Λ<sub>m</sub>/Λ°<sub>m</sub>.",
      ]],
      ["ex", "Find Λ° of CH₃COOH given Λ°(HCl) = 426, Λ°(CH₃COONa) = 91, Λ°(NaCl) = 126 S cm²/mol.", "Λ° = 426 + 91 − 126 = <b>391 S cm²/mol</b>."],
    ]],
    ["Electrolysis", [
      ["box", "Faraday's laws", ["First law: w = ZIt = (M/nF) × I × t", "Second law: w₁/w₂ = E₁/E₂ (equivalent masses) for the same charge", "1 F = charge of 1 mol of electrons"]],
      ["tbl", ["Electrolyte", "Cathode", "Anode"], [
        ["Molten NaCl", "Na", "Cl₂"],
        ["Aqueous NaCl (concentrated)", "H₂", "Cl₂"],
        ["Aqueous CuSO₄ (Pt electrodes)", "Cu", "O₂"],
        ["Dilute H₂SO₄", "H₂", "O₂"]]],
      ["ex", "How long does 2 A take to deposit 0.635 g of Cu from Cu²⁺?", "Moles Cu = 0.01; charge = 0.02 × 96500 = 1930 C; t = 1930/2 = <b>965 s</b>."],
    ]],
    ["Batteries, Fuel Cells and Corrosion", [
      ["ul", [
        "Primary (not rechargeable): dry (Leclanché) cell 1.5 V; mercury cell 1.35 V (constant voltage).",
        "Secondary (rechargeable): lead storage battery (Pb anode, PbO₂ cathode, H₂SO₄); Ni–Cd.",
        "H₂–O₂ fuel cell: 2H₂ + O₂ → 2H₂O, high efficiency, used in Apollo missions.",
        "Corrosion (rusting) is electrochemical: Fe is oxidised at anodic spots; rust is Fe₂O₃·xH₂O. Prevented by painting, galvanising (Zn coating), sacrificial anodes (Mg, Zn).",
      ]],
    ]],
  ],
  rev: [
    "Galvanic anode: oxidation, negative.",
    "E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>.",
    "ΔG° = −nFE°; E° = (0.059/n) log K.",
    "Dilution: κ ↓, Λ<sub>m</sub> ↑.",
    "Kohlrausch's law gives Λ° of weak electrolytes.",
    "w = ZIt; 1 F = 96500 C.",
  ],
  mcq: [
    ["In a galvanic cell, oxidation occurs at the:", ["Cathode", "Anode", "Salt bridge", "Both electrodes"], 1, "Anode is where electrons are lost."],
    ["On dilution, the molar conductivity of a strong electrolyte:", ["Decreases", "Increases slightly", "Stays the same", "Becomes zero"], 1, "Interionic attraction falls."],
    ["The standard electrode potential of SHE is:", ["1 V", "0 V", "−1 V", "0.059 V"], 1, "It is the reference by definition."],
    ["Electrolysis of aqueous NaCl gives at the cathode:", ["Na", "Cl₂", "H₂", "O₂"], 2, "Water is reduced more easily than Na⁺."],
    ["The charge on 1 mol of electrons is about:", ["1.6 × 10⁻¹⁹ C", "96500 C", "6.022 × 10²³ C", "1 C"], 1, "1 faraday."],
    ["Which battery is rechargeable?", ["Dry cell", "Mercury cell", "Lead storage battery", "Leclanché cell"], 2, "Lead–acid is a secondary cell."],
    ["Kohlrausch's law is used to find:", ["E° of a cell", "Λ° of a weak electrolyte", "Rate constant", "K<sub>sp</sub> only"], 1, "Limiting molar conductivity from ionic contributions."],
    ["Galvanising iron means coating it with:", ["Tin", "Zinc", "Copper", "Nickel"], 1, "Zn acts as a sacrificial metal."],
    ["If E°<sub>cell</sub> is positive, ΔG° is:", ["Positive", "Negative", "Zero", "Infinite"], 1, "ΔG° = −nFE°."],
    ["Conductivity of a solution on dilution:", ["Increases", "Decreases", "Stays constant", "Doubles"], 1, "Fewer ions per unit volume."],
  ],
});
