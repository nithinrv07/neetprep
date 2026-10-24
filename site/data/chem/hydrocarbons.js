NEET.ch("chem-hydrocarbons", {
  intro: "Alkanes · Conformations · Alkenes · Markovnikov and peroxide effect · Alkynes · Aromaticity · Electrophilic substitution in benzene",
  secs: [
    ["Alkanes", [
      ["ul", [
        "General formula C<sub>n</sub>H<sub>2n+2</sub>; sp³ carbon; undergo substitution (not addition).",
        "Preparation: hydrogenation of alkenes/alkynes (Ni or Pt/Pd), <b>Wurtz reaction</b> (2RX + 2Na → R–R, dry ether), Kolbe's electrolysis, decarboxylation (RCOONa + NaOH/CaO → RH).",
        "Halogenation is a free-radical chain reaction (initiation, propagation, termination). Reactivity F₂ > Cl₂ > Br₂ > I₂.",
        "Boiling point rises with chain length; branching lowers it (less surface area).",
      ]],
      ["box", "Conformations of ethane", ["Staggered: most stable (minimum torsional strain)", "Eclipsed: least stable", "Energy difference ≈ 12.5 kJ/mol; they interconvert freely"]],
      ["ex", "What does the Wurtz reaction of CH₃Br give?", "2CH₃Br + 2Na → <b>CH₃–CH₃ (ethane)</b> + 2NaBr."],
    ]],
    ["Alkenes", [
      ["ul", [
        "C<sub>n</sub>H<sub>2n</sub>; sp² carbon; show geometrical isomerism if each double-bond carbon has two different groups.",
        "Preparation: dehydration of alcohols (conc. H₂SO₄), dehydrohalogenation (alc. KOH), partial reduction of alkynes.",
        "<b>Markovnikov's rule:</b> in HX addition, H goes to the carbon with more H; X to the more substituted carbon (via the more stable carbocation).",
        "<b>Peroxide (Kharasch) effect:</b> HBr only, with peroxide, adds anti-Markovnikov by a free-radical route.",
        "Ozonolysis (O₃, then Zn/H₂O) cleaves C=C into carbonyls; used to locate the double bond.",
        "Baeyer's reagent (cold dilute alkaline KMnO₄) gives diols; its pink colour disappears, a test for unsaturation.",
      ]],
      ["ex", "Propene + HBr (no peroxide) gives?", "Markovnikov product: <b>2-bromopropane</b>. With peroxide: 1-bromopropane."],
      ["ex", "Ozonolysis of but-2-ene gives?", "Cleaving CH₃CH=CHCH₃ gives <b>2 molecules of ethanal (CH₃CHO)</b>."],
    ]],
    ["Alkynes", [
      ["ul", [
        "C<sub>n</sub>H<sub>2n−2</sub>; sp carbon; linear.",
        "Ethyne is made from calcium carbide: CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂.",
        "Terminal alkynes are acidic (sp C–H): they react with Na, NaNH₂ and ammoniacal AgNO₃.",
        "Acidity: HC≡CH > H₂C=CH₂ > CH₃–CH₃.",
        "Hydration (HgSO₄/H₂SO₄) of ethyne gives ethanal; of propyne gives acetone.",
        "Cyclic polymerisation: 3 HC≡CH → benzene (red-hot iron tube, 873 K).",
      ]],
      ["box", "Partial reduction", ["Lindlar's catalyst (Pd/BaSO₄ + quinoline) → cis-alkene", "Na in liquid NH₃ (dissolving-metal reduction) → trans-alkene"]],
    ]],
    ["Aromatic Hydrocarbons", [
      ["box", "Hückel's rule", ["Planar, cyclic, fully conjugated, with (4n + 2) π electrons → aromatic", "Benzene: 6 π electrons (n = 1); all C–C bonds equal (139 pm)"]],
      ["ul", [
        "Benzene prefers <b>electrophilic substitution</b> (keeps aromaticity) over addition.",
        "Nitration (conc. HNO₃ + H₂SO₄, electrophile NO₂⁺), halogenation (X₂ + FeX₃), sulphonation (fuming H₂SO₄, SO₃), Friedel–Crafts alkylation/acylation (RCl/RCOCl + anhydrous AlCl₃).",
        "<b>Ortho/para directors</b> (activating): −OH, −NH₂, −OR, −CH₃; halogens are o/p directing but deactivating.",
        "<b>Meta directors</b> (deactivating): −NO₂, −CN, −CHO, −COOH, −SO₃H.",
      ]],
      ["ex", "Nitration of toluene gives mainly?", "−CH₃ is o/p directing: <b>o- and p-nitrotoluene</b>."],
      ["tip", "Carcinogenic polynuclear hydrocarbons (like benzopyrene) form from incomplete burning of tobacco, coal and petroleum."],
    ]],
  ],
  rev: [
    "Alkanes: substitution; alkenes and alkynes: addition; benzene: electrophilic substitution.",
    "Staggered ethane is most stable.",
    "Markovnikov: X to the more substituted carbon. Peroxide effect: HBr only.",
    "Lindlar → cis; Na/NH₃ → trans.",
    "Terminal alkynes are acidic.",
    "Aromatic: (4n + 2) π electrons, planar, cyclic.",
  ],
  mcq: [
    ["The most stable conformation of ethane is:", ["Eclipsed", "Staggered", "Skew", "Boat"], 1, "Least torsional strain."],
    ["The peroxide effect is shown by:", ["HCl", "HBr", "HI", "HF"], 1, "Only HBr adds by the free-radical route."],
    ["Lindlar's catalyst converts an alkyne to a:", ["trans-alkene", "cis-alkene", "Alkane", "Alcohol"], 1, "Syn addition of H₂ on a poisoned Pd surface."],
    ["Which is most acidic?", ["Ethane", "Ethene", "Ethyne", "Methane"], 2, "sp carbon holds the electron pair tightly."],
    ["Hydration of propyne with HgSO₄/H₂SO₄ gives:", ["Propanal", "Acetone", "Propanol", "Propanoic acid"], 1, "Markovnikov addition then keto–enol tautomerism."],
    ["The electrophile in nitration of benzene is:", ["NO₂⁻", "NO₂⁺", "NO₃⁻", "HNO₃"], 1, "Nitronium ion from HNO₃ + H₂SO₄."],
    ["Which group is meta-directing?", ["−OH", "−CH₃", "−NO₂", "−Cl"], 2, "Strong electron-withdrawing group."],
    ["The Wurtz reaction uses:", ["Na in dry ether", "Zn/HCl", "NaOH/CaO", "H₂/Ni"], 0, "Couples two alkyl halides."],
    ["Ozonolysis of ethene gives:", ["Ethanal", "Methanal (2 molecules)", "Acetone", "Ethanol"], 1, "CH₂=CH₂ splits into 2 HCHO."],
    ["Benzene has how many π electrons?", ["2", "4", "6", "8"], 2, "Three double bonds: 4n + 2 with n = 1."],
  ],
});
