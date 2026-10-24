NEET.ch("phy-semiconductors", {
  intro: "Energy bands · Intrinsic and extrinsic semiconductors · p–n junction · Diode characteristics · Rectifiers · Special diodes · Logic gates",
  secs: [
    ["Energy Bands", [
      ["tbl", ["Material", "Band gap E<sub>g</sub>", "Example"], [["Conductor", "Bands overlap (no gap)", "Copper"], ["Semiconductor", "< 3 eV", "Si 1.1 eV, Ge 0.7 eV"], ["Insulator", "> 3 eV", "Diamond ≈ 5.4 eV"]]],
      ["ul", ["At 0 K a pure semiconductor behaves as an insulator.", "Resistance of a semiconductor decreases with rising temperature (negative temperature coefficient)."]],
    ]],
    ["Intrinsic and Extrinsic Semiconductors", [
      ["box", "Carrier concentrations", ["Intrinsic: n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub>", "Always (at equilibrium): n<sub>e</sub> × n<sub>h</sub> = n<sub>i</sub>²"]],
      ["tbl", ["Type", "Dopant", "Majority carriers", "Net charge"], [["n-type", "Pentavalent (P, As, Sb) — donor", "Electrons", "Neutral"], ["p-type", "Trivalent (B, Al, Ga, In) — acceptor", "Holes", "Neutral"]]],
      ["ex", "Si has n<sub>i</sub> = 1.5 × 10¹⁶ m⁻³. It is doped so that n<sub>e</sub> = 4.5 × 10²² m⁻³. Find the hole concentration.", "n<sub>h</sub> = n<sub>i</sub>²/n<sub>e</sub> = 2.25 × 10³²/4.5 × 10²² = <b>5 × 10⁹ m⁻³</b>."],
      ["tip", "Doped semiconductors are still electrically neutral overall. 'n-type is negatively charged' is a classic wrong option."],
    ]],
    ["p–n Junction Diode", [
      ["ul", ["Diffusion of carriers creates a <b>depletion layer</b> with immobile ions and a <b>barrier potential</b> (about 0.7 V for Si, 0.3 V for Ge).", "<b>Forward bias</b> (p to +): barrier and depletion width decrease; current flows (mA).", "<b>Reverse bias</b>: barrier and depletion width increase; tiny reverse current (μA) due to minority carriers, until breakdown.", "Diffusion current flows from p to n; drift current from n to p. At equilibrium they balance."]],
    ]],
    ["Rectifiers", [
      ["box", "Rectification (input frequency f)", ["Half-wave: one diode, output frequency f, uses only half the cycle", "Full-wave: two diodes (centre-tap) or four (bridge), output frequency 2f", "A capacitor filter smooths the ripple"]],
      ["ex", "Input to a full-wave rectifier is 50 Hz. Find the output ripple frequency.", "<b>100 Hz</b>."],
    ]],
    ["Special-Purpose Diodes", [
      ["tbl", ["Diode", "Bias", "Use"], [
        ["Zener diode", "Reverse (breakdown region)", "Voltage regulator"],
        ["Photodiode", "Reverse", "Light detector; current ∝ intensity"],
        ["LED", "Forward", "Emits light; colour depends on band gap"],
        ["Solar cell", "No external bias", "Converts light to electricity; uses Si, GaAs"]]],
      ["ul", ["For a photodiode to detect light of wavelength λ: hc/λ > E<sub>g</sub>.", "Zener diodes are heavily doped, so the depletion layer is thin and breakdown happens at a low, sharp voltage."]],
    ]],
    ["Logic Gates", [
      ["tbl", ["Gate", "Output Y", "Truth (A, B → Y): 00, 01, 10, 11"], [
        ["OR", "A + B", "0, 1, 1, 1"], ["AND", "A · B", "0, 0, 0, 1"], ["NOT", "Ā", "(A = 0 → 1, A = 1 → 0)"],
        ["NAND", "(A · B)′", "1, 1, 1, 0"], ["NOR", "(A + B)′", "1, 0, 0, 0"], ["XOR", "A ⊕ B", "0, 1, 1, 0"]]],
      ["ul", ["NAND and NOR are <b>universal gates</b>: any gate can be built from them.", "NAND with both inputs joined acts as NOT.", "De Morgan: (A + B)′ = A′·B′ and (A·B)′ = A′ + B′."]],
      ["ex", "The outputs of two NOT gates (inputs A and B) feed a NAND gate. What is the overall gate?", "Y = (A′·B′)′ = A + B: an <b>OR</b> gate."],
    ]],
  ],
  rev: [
    "Si E<sub>g</sub> ≈ 1.1 eV, Ge ≈ 0.7 eV.",
    "n<sub>e</sub>n<sub>h</sub> = n<sub>i</sub>²; doped crystals stay neutral.",
    "Forward bias narrows depletion; reverse widens it.",
    "Half-wave output f; full-wave output 2f.",
    "Zener: reverse bias regulator. Photodiode: reverse. LED: forward.",
    "NAND and NOR are universal gates.",
  ],
  mcq: [
    ["In an n-type semiconductor, the majority carriers are:", ["Holes", "Electrons", "Protons", "Ions"], 1, "Pentavalent donors add free electrons."],
    ["A p-type semiconductor is obtained by doping silicon with:", ["Arsenic", "Phosphorus", "Boron", "Antimony"], 2, "Boron is trivalent, creating holes."],
    ["In forward bias, the width of the depletion layer:", ["Increases", "Decreases", "Stays the same", "Becomes infinite"], 1, "The applied field opposes the barrier."],
    ["A Zener diode is used as a:", ["Rectifier", "Amplifier", "Voltage regulator", "Oscillator"], 2, "In breakdown its voltage stays nearly constant."],
    ["The output frequency of a full-wave rectifier with 60 Hz input is:", ["30 Hz", "60 Hz", "120 Hz", "240 Hz"], 2, "Both halves are rectified: 2f."],
    ["Which gate gives output 1 only when both inputs are 0?", ["OR", "AND", "NAND", "NOR"], 3, "NOR: (A + B)′."],
    ["The universal gates are:", ["AND and OR", "NAND and NOR", "NOT and OR", "XOR and AND"], 1, "Any logic function can be built from either."],
    ["With rising temperature, the resistance of a semiconductor:", ["Increases", "Decreases", "Stays the same", "First rises then falls"], 1, "More electron–hole pairs are created."],
    ["A photodiode is operated in:", ["Forward bias", "Reverse bias", "Zero bias only", "Breakdown"], 1, "Reverse current changes noticeably with light."],
    ["An n-type semiconductor is:", ["Negatively charged", "Positively charged", "Electrically neutral", "Charged depending on temperature"], 2, "Donor atoms are neutral when added."],
    ["The band gap of silicon is about:", ["0.3 eV", "0.7 eV", "1.1 eV", "5.4 eV"], 2, "Si ≈ 1.1 eV; Ge ≈ 0.7 eV."],
    ["The output of a NAND gate with inputs A = 1 and B = 1 is:", ["0", "1", "Undefined", "Same as A"], 0, "AND gives 1, NOT makes it 0."],
  ],
});
