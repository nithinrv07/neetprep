NEET.ch("chem-haloalkanes", {
  intro: "Classification · Preparation · S<sub>N</sub>1 and S<sub>N</sub>2 · Elimination and Saytzeff rule · Haloarenes · Grignard reagent · Polyhalogen compounds",
  secs: [
    ["Classification and Preparation", [
      ["ul", [
        "Alkyl halides are 1°, 2° or 3°; allylic, benzylic, vinylic and aryl halides are special types.",
        "From alcohols: ROH + HX (ZnCl₂ for HCl, Lucas reagent); ROH + PCl₅/PCl₃; ROH + SOCl₂ (best, gaseous by-products SO₂ and HCl).",
        "<b>Finkelstein:</b> RCl/RBr + NaI (acetone) → RI. <b>Swarts:</b> RCl/RBr + AgF/Hg₂F₂ → RF.",
        "From arenes: halogenation with FeCl₃; <b>Sandmeyer:</b> ArN₂⁺Cl⁻ + CuCl/HCl → ArCl.",
      ]],
      ["ul", ["Boiling point: RI > RBr > RCl > RF; branching lowers it.", "Density increases with the mass of the halogen; CH₂Cl₂ and CHCl₃ are denser than water."]],
    ]],
    ["Nucleophilic Substitution", [
      ["tbl", ["", "S<sub>N</sub>2", "S<sub>N</sub>1"], [
        ["Steps", "One step, transition state", "Two steps, carbocation intermediate"],
        ["Rate law", "k[RX][Nu⁻] (second order)", "k[RX] (first order)"],
        ["Reactivity", "CH₃X > 1° > 2° > 3°", "3° > 2° > 1° > CH₃X"],
        ["Stereochemistry", "Inversion (Walden)", "Racemisation (mostly)"],
        ["Favoured by", "Strong nucleophile, polar aprotic solvent", "Polar protic solvent, stable carbocation"]]],
      ["ul", ["Leaving group ability: I⁻ > Br⁻ > Cl⁻ > F⁻ (so reactivity R–I > R–Br > R–Cl).", "KCN gives nitriles (RCN); AgCN gives isonitriles (RNC). KNO₂ gives nitrites (R–ONO); AgNO₂ gives nitroalkanes (R–NO₂)."]],
      ["ex", "Which reacts fastest by S<sub>N</sub>2: CH₃Br, (CH₃)₂CHBr or (CH₃)₃CBr?", "Least hindered: <b>CH₃Br</b>."],
      ["tip", "Benzyl and allyl halides react fast by both S<sub>N</sub>1 (resonance-stabilised carbocation) and S<sub>N</sub>2."],
    ]],
    ["Elimination and Organometallics", [
      ["ul", [
        "Alcoholic KOH causes β-elimination (dehydrohalogenation) to give alkenes; aqueous KOH gives alcohols (substitution).",
        "<b>Saytzeff rule:</b> the more substituted alkene is the major product.",
        "Grignard reagent RMgX (Mg in dry ether) is a strong nucleophile and base; it reacts with water to give alkane, so it must be kept dry.",
        "<b>Wurtz</b> (2RX + 2Na → R–R); <b>Wurtz–Fittig</b> (RX + ArX + Na → Ar–R); <b>Fittig</b> (2ArX + Na → Ar–Ar).",
      ]],
      ["ex", "2-Bromobutane with alcoholic KOH gives mainly?", "Saytzeff product: <b>but-2-ene</b>."],
    ]],
    ["Haloarenes", [
      ["ul", [
        "Less reactive to nucleophilic substitution than haloalkanes: C–X has partial double-bond character (resonance), sp² carbon, and the phenyl cation is unstable.",
        "Electron-withdrawing groups (−NO₂) at ortho/para increase reactivity: 2,4,6-trinitrochlorobenzene hydrolyses easily.",
        "Halogens are deactivating but o/p directing in electrophilic substitution.",
      ]],
    ]],
    ["Polyhalogen Compounds", [
      ["tbl", ["Compound", "Use / fact"], [
        ["CH₂Cl₂", "Paint remover, solvent"],
        ["CHCl₃", "Solvent; oxidised by air/light to toxic phosgene (COCl₂), so stored in dark bottles with a little ethanol"],
        ["CHI₃ (iodoform)", "Antiseptic (releases I₂)"],
        ["CCl₄", "Fire extinguisher (formerly); damages the ozone layer"],
        ["Freons (CFCs)", "Refrigerants; deplete ozone"],
        ["DDT", "Insecticide; non-biodegradable, accumulates in food chains"]]],
    ]],
  ],
  rev: [
    "SOCl₂ is the best reagent for ROH → RCl.",
    "S<sub>N</sub>2: CH₃X fastest, inversion. S<sub>N</sub>1: 3° fastest, racemisation.",
    "KCN → nitrile; AgCN → isonitrile.",
    "Alc. KOH → elimination (Saytzeff); aq. KOH → substitution.",
    "Haloarenes resist nucleophilic substitution.",
    "Chloroform forms phosgene in light and air.",
  ],
  mcq: [
    ["The S<sub>N</sub>2 reaction proceeds with:", ["Retention", "Racemisation", "Inversion of configuration", "No change"], 2, "Backside attack (Walden inversion)."],
    ["Which reacts fastest by S<sub>N</sub>1?", ["CH₃Cl", "CH₃CH₂Cl", "(CH₃)₂CHCl", "(CH₃)₃CCl"], 3, "Most stable tertiary carbocation."],
    ["Alkyl halide + AgCN gives mainly:", ["Nitrile", "Isonitrile", "Amine", "Alcohol"], 1, "AgCN is covalent; N attacks."],
    ["The Finkelstein reaction converts alkyl chlorides into:", ["Fluorides", "Iodides", "Bromides", "Alcohols"], 1, "NaI in acetone."],
    ["Chloroform is stored in dark bottles to prevent formation of:", ["CCl₄", "Phosgene", "HCl only", "CH₂Cl₂"], 1, "Light and air oxidise CHCl₃ to COCl₂."],
    ["Saytzeff's rule predicts the formation of the:", ["Less substituted alkene", "More substituted alkene", "Alkyne", "Alcohol"], 1, "More stable alkene."],
    ["Grignard reagent reacts with water to give:", ["Alcohol", "Alkane", "Aldehyde", "Ether"], 1, "RMgX + H₂O → RH + Mg(OH)X."],
    ["Chlorobenzene is less reactive than chloroethane towards nucleophiles because of:", ["Larger size", "Resonance giving C–Cl partial double bond", "Higher mass", "Weaker bond"], 1, "Also sp² carbon."],
    ["Wurtz–Fittig reaction gives:", ["Alkanes only", "Alkylbenzenes", "Biphenyl only", "Alkenes"], 1, "RX + ArX + Na → Ar–R."],
    ["Which is used as an antiseptic?", ["CHCl₃", "CHI₃", "CCl₄", "CH₂Cl₂"], 1, "Iodoform releases iodine."],
  ],
});
