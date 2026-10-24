NEET.ch("chem-redox", {
  intro: "Oxidation and reduction · Oxidation number · Types of redox reactions · Balancing redox equations · Electrode potential basics",
  secs: [
    ["Oxidation and Reduction", [
      ["tbl", ["Concept", "Oxidation", "Reduction"], [
        ["Classical", "Gain of oxygen / loss of hydrogen", "Loss of oxygen / gain of hydrogen"],
        ["Electronic", "Loss of electrons", "Gain of electrons"],
        ["Oxidation number", "Increases", "Decreases"]]],
      ["ul", ["<b>OIL RIG</b>: Oxidation Is Loss, Reduction Is Gain (of electrons).", "An <b>oxidising agent</b> gets reduced; a <b>reducing agent</b> gets oxidised."]],
    ]],
    ["Rules for Oxidation Number", [
      ["ul", [
        "Free element: 0 (O₂, Na, P₄).",
        "Monatomic ion: equals its charge.",
        "O is −2, except peroxides (−1), superoxides (−½), OF₂ (+2).",
        "H is +1, except metal hydrides like NaH (−1).",
        "F is always −1. Group 1 metals +1, group 2 metals +2.",
        "Sum of oxidation numbers = 0 for a molecule, = charge for an ion.",
      ]],
      ["ex", "Find the oxidation number of Mn in KMnO₄.", "+1 + x + 4(−2) = 0 → <b>x = +7</b>."],
      ["ex", "Find the oxidation number of S in Na₂S₂O₃.", "2(+1) + 2x + 3(−2) = 0 → <b>x = +2</b> (average)."],
      ["ex", "Find the oxidation number of Cr in CrO₅.", "CrO₅ has one oxide O and two peroxide groups: x − 2 + 4(−1) = 0 → <b>x = +6</b>."],
      ["tip", "Average oxidation numbers can be fractions (Fe₃O₄: +8/3). Structure tells the real values."],
    ]],
    ["Types of Redox Reactions", [
      ["tbl", ["Type", "Example"], [
        ["Combination", "C + O₂ → CO₂"],
        ["Decomposition", "2KClO₃ → 2KCl + 3O₂"],
        ["Displacement", "Zn + CuSO₄ → ZnSO₄ + Cu"],
        ["Disproportionation (same element oxidised and reduced)", "2H₂O₂ → 2H₂O + O₂; Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O"],
        ["Comproportionation", "Reverse of disproportionation"]]],
      ["ul", ["An element in its highest oxidation state (Mn in MnO₄⁻) can only be reduced; in its lowest state only oxidised; in between it can disproportionate.", "F₂ cannot disproportionate since F has no positive oxidation state."]],
    ]],
    ["Balancing Redox Equations", [
      ["box", "Ion-electron (half-reaction) method", ["1. Split into oxidation and reduction halves", "2. Balance atoms other than O and H", "3. Balance O with H₂O, H with H⁺ (acidic). In basic medium, then add OH⁻ to both sides", "4. Balance charge with electrons", "5. Equalise electrons and add"]],
      ["box", "Common n-factors", ["KMnO₄: acidic 5 (→ Mn²⁺), neutral 3 (→ MnO₂), strongly basic 1 (→ MnO₄²⁻)", "K₂Cr₂O₇ (acidic, → Cr³⁺): 6"]],
      ["ex", "Balance MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (acidic).", "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O; Fe²⁺ → Fe³⁺ + e⁻ (×5). Sum: <b>MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</b>."],
    ]],
    ["Redox and Electrode Potentials", [
      ["ul", [
        "Higher (more positive) standard reduction potential → stronger oxidising agent (F₂ strongest).",
        "Lower (more negative) → stronger reducing agent (Li strongest in water).",
        "A metal higher in the activity series displaces a lower one from its salt solution: Zn displaces Cu, but Cu doesn't displace Zn.",
      ]],
    ]],
  ],
  rev: [
    "OIL RIG.",
    "Oxidising agent is itself reduced.",
    "O is −1 in peroxides; H is −1 in metal hydrides.",
    "Mn in KMnO₄ is +7; Cr in K₂Cr₂O₇ is +6.",
    "Disproportionation: one element both oxidised and reduced.",
    "KMnO₄ n-factor: 5 acidic, 3 neutral, 1 strongly basic.",
  ],
  mcq: [
    ["The oxidation number of oxygen in H₂O₂ is:", ["−2", "−1", "+1", "0"], 1, "Peroxide oxygen is −1."],
    ["In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, zinc acts as:", ["Oxidising agent", "Reducing agent", "Catalyst", "Both"], 1, "Zn loses electrons."],
    ["The oxidation number of N in HNO₃ is:", ["+3", "+4", "+5", "−3"], 2, "1 + x − 6 = 0."],
    ["Which reaction is a disproportionation?", ["2H₂O₂ → 2H₂O + O₂", "Zn + CuSO₄ → ZnSO₄ + Cu", "C + O₂ → CO₂", "NaCl + AgNO₃ → AgCl + NaNO₃"], 0, "Oxygen goes from −1 to −2 and 0."],
    ["The oxidation number of H in NaH is:", ["+1", "−1", "0", "+2"], 1, "In metal hydrides H is −1."],
    ["The n-factor of KMnO₄ in acidic medium is:", ["1", "3", "5", "7"], 2, "Mn goes from +7 to +2."],
    ["Which cannot act as a reducing agent?", ["Fe²⁺", "Sn²⁺", "MnO₄⁻", "I⁻"], 2, "Mn is already +7, its highest state."],
    ["The oxidation number of Fe in Fe₃O₄ is (average):", ["+2", "+3", "+8/3", "+4"], 2, "3x = 8."],
    ["The strongest oxidising agent among the halogens is:", ["F₂", "Cl₂", "Br₂", "I₂"], 0, "Highest standard reduction potential."],
    ["The oxidation number of S in H₂SO₄ is:", ["+4", "+6", "−2", "+2"], 1, "2 + x − 8 = 0."],
  ],
});
