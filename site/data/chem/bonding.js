NEET.ch("chem-bonding", {
  intro: "Octet rule · Ionic and covalent bonds · Lewis structures and formal charge · Polarity and dipole moment · VSEPR · Hybridisation · Molecular orbital theory · Hydrogen bonding",
  secs: [
    ["Octet Rule, Ionic and Covalent Bonds", [
      ["ul", [
        "Atoms combine to get a stable noble-gas configuration (octet rule, Kössel–Lewis).",
        "Octet rule exceptions: incomplete octet (BeCl₂, BF₃), expanded octet (PCl₅, SF₆), odd-electron molecules (NO, NO₂).",
        "Ionic bond: transfer of electrons; favoured by low IE of the metal, high negative Δ<sub>eg</sub>H of the non-metal and high lattice enthalpy.",
        "Covalent bond: sharing of electrons. Sigma (σ) bonds form by head-on overlap; pi (π) bonds by sideways overlap. σ is stronger.",
      ]],
      ["box", "Formal charge", ["FC = valence electrons − non-bonding electrons − ½ bonding electrons", "The best Lewis structure has the smallest formal charges"]],
      ["ex", "Find the formal charge on the central O in O₃.", "Central O: 6 − 2 − ½(6) = <b>+1</b>."],
    ]],
    ["Bond Parameters and Polarity", [
      ["ul", [
        "Bond order ↑ → bond length ↓ and bond energy ↑.",
        "Resonance: the actual structure is a hybrid; it lowers energy and averages bond lengths (all C–O in CO₃²⁻ are equal).",
        "Dipole moment μ = q × d (debye). Polar bonds can give zero net μ in symmetric molecules.",
        "μ = 0: CO₂, BF₃, CH₄, CCl₄, BeCl₂. μ ≠ 0: H₂O, NH₃, CHCl₃.",
        "NH₃ (1.47 D) > NF₃ (0.23 D): in NF₃ the lone-pair moment opposes the bond moments.",
        "Fajans' rule: covalent character increases with a small, highly charged cation and a large anion. LiI is more covalent than LiF.",
      ]],
    ]],
    ["VSEPR Theory", [
      ["p", "Electron pairs around the central atom repel and arrange to be as far apart as possible. Repulsion order: lp–lp > lp–bp > bp–bp."],
      ["tbl", ["Pairs (bp + lp)", "Shape", "Example"], [
        ["2 + 0", "Linear", "BeCl₂, CO₂"], ["3 + 0", "Trigonal planar", "BF₃"], ["2 + 1", "Bent", "SO₂"],
        ["4 + 0", "Tetrahedral (109.5°)", "CH₄"], ["3 + 1", "Trigonal pyramidal (107°)", "NH₃"], ["2 + 2", "Bent (104.5°)", "H₂O"],
        ["5 + 0", "Trigonal bipyramidal", "PCl₅"], ["4 + 1", "See-saw", "SF₄"], ["3 + 2", "T-shaped", "ClF₃"], ["2 + 3", "Linear", "XeF₂, I₃⁻"],
        ["6 + 0", "Octahedral", "SF₆"], ["5 + 1", "Square pyramidal", "BrF₅"], ["4 + 2", "Square planar", "XeF₄"]]],
    ]],
    ["Hybridisation", [
      ["box", "Quick formula", ["H = ½(V + M − C + A)", "V = valence electrons of central atom, M = monovalent atoms, C = cation charge, A = anion charge", "2 sp · 3 sp² · 4 sp³ · 5 sp³d · 6 sp³d² · 7 sp³d³"]],
      ["ul", ["s-character: sp (50%) > sp² (33%) > sp³ (25%). More s-character → shorter bond, more electronegative carbon.", "In PCl₅, axial bonds are longer than equatorial bonds."]],
      ["ex", "Find the hybridisation of N in NH₄⁺.", "H = ½(5 + 4 − 1) = 4 → <b>sp³</b>."],
      ["ex", "Find the hybridisation of I in ICl₄⁻.", "H = ½(7 + 4 + 1) = 6 → <b>sp³d²</b>, square planar."],
    ]],
    ["Molecular Orbital Theory", [
      ["box", "MO results", ["Bond order = ½(N<sub>b</sub> − N<sub>a</sub>)", "Up to N₂ (≤ 14 e⁻): σ1s σ*1s σ2s σ*2s π2p π2p σ2p …", "O₂ and beyond: σ2p comes before π2p", "Unpaired electrons → paramagnetic"]],
      ["tbl", ["Species", "Electrons", "Bond order", "Magnetic"], [
        ["H₂", "2", "1", "Dia"], ["He₂", "4", "0 (doesn't exist)", "—"], ["B₂", "10", "1", "Para"], ["C₂", "12", "2", "Dia"],
        ["N₂", "14", "3", "Dia"], ["O₂", "16", "2", "Para"], ["O₂⁻", "17", "1.5", "Para"], ["O₂²⁻", "18", "1", "Dia"], ["F₂", "18", "1", "Dia"]]],
      ["tip", "Bond length order for oxygen species: O₂⁺ < O₂ < O₂⁻ < O₂²⁻ (bond order 2.5, 2, 1.5, 1)."],
    ]],
    ["Hydrogen Bonding", [
      ["ul", [
        "Forms when H is bonded to F, O or N and attracted to another such atom.",
        "Intermolecular H-bonding raises boiling point (H₂O > H₂S; HF > HCl) and solubility.",
        "Intramolecular H-bonding (o-nitrophenol) lowers boiling point compared with the para isomer, which bonds intermolecularly.",
        "Ice has an open cage structure due to H-bonds, so it is less dense than water.",
      ]],
    ]],
  ],
  rev: [
    "BF₃ incomplete octet; SF₆ expanded octet; NO odd electron.",
    "Higher bond order → shorter, stronger bond.",
    "Symmetric molecules (CO₂, BF₃, CCl₄) have zero dipole moment.",
    "lp–lp > lp–bp > bp–bp repulsion.",
    "O₂ is paramagnetic; N₂ has bond order 3.",
    "H-bonding needs H on F, O or N.",
  ],
  mcq: [
    ["The shape of ClF₃ is:", ["Trigonal planar", "T-shaped", "Pyramidal", "See-saw"], 1, "3 bond pairs + 2 lone pairs (sp³d)."],
    ["Which molecule has zero dipole moment?", ["NH₃", "H₂O", "BF₃", "CHCl₃"], 2, "Trigonal planar symmetry cancels bond moments."],
    ["The hybridisation of carbon in ethyne is:", ["sp", "sp²", "sp³", "dsp²"], 0, "Triple bond: linear, sp."],
    ["Bond order of N₂ is:", ["1", "2", "2.5", "3"], 3, "(10 − 4)/2 = 3."],
    ["Which species has the shortest bond length?", ["O₂", "O₂⁺", "O₂⁻", "O₂²⁻"], 1, "Highest bond order (2.5)."],
    ["The H–O–H bond angle in water is about:", ["109.5°", "107°", "104.5°", "120°"], 2, "Two lone pairs squeeze the bond angle."],
    ["Which compound has the most covalent character?", ["LiF", "LiCl", "LiBr", "LiI"], 3, "Largest anion is most polarised (Fajans' rule)."],
    ["The shape of SF₄ is:", ["Tetrahedral", "Square planar", "See-saw", "Octahedral"], 2, "4 bp + 1 lp, sp³d."],
    ["o-Nitrophenol has a lower boiling point than p-nitrophenol because of:", ["Intramolecular H-bonding", "Intermolecular H-bonding", "Higher mass", "Ionic bonding"], 0, "Intramolecular H-bonds don't link molecules together."],
    ["Which molecule does not obey the octet rule?", ["CH₄", "BF₃", "NH₃", "H₂O"], 1, "Boron has only 6 electrons in BF₃."],
  ],
});
