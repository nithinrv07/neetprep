NEET.ch("chem-goc", {
  intro: "Hybridisation in carbon · IUPAC nomenclature · Isomerism · Bond fission · Electronic effects · Reactive intermediates · Purification and analysis",
  secs: [
    ["Tetravalence and Structure", [
      ["ul", [
        "Carbon is tetravalent. sp³ (single bonds, 109.5°), sp² (double, 120°), sp (triple, 180°).",
        "Structural formulas: complete, condensed and bond-line. In bond-line, each corner or end is a carbon.",
        "Degree of unsaturation = (2C + 2 + N − H − X)/2.",
      ]],
    ]],
    ["IUPAC Nomenclature", [
      ["ul", [
        "Pick the longest chain containing the principal functional group; number from the end giving it the lowest locant.",
        "Word roots: meth, eth, prop, but, pent, hex, hept, oct, non, dec.",
        "Priority of groups: carboxylic acid > sulphonic acid > ester > acid halide > amide > nitrile > aldehyde > ketone > alcohol > amine > alkene > alkyne.",
        "Substituents in alphabetical order (ignore di-, tri-).",
      ]],
      ["ex", "Name CH₃–CH(OH)–CH₂–CHO.", "Aldehyde gets C-1, OH on C-3: <b>3-hydroxybutanal</b>."],
      ["ex", "Name (CH₃)₃C–CH₂–CH₃.", "Longest chain 4 C, two methyls on C-2: <b>2,2-dimethylbutane</b>."],
    ]],
    ["Isomerism", [
      ["tbl", ["Type", "Difference", "Example"], [
        ["Chain", "Carbon skeleton", "Butane / 2-methylpropane"],
        ["Position", "Position of group", "Propan-1-ol / propan-2-ol"],
        ["Functional", "Functional group", "Ethanol / dimethyl ether"],
        ["Metamerism", "Alkyl groups on either side", "Diethyl ether / methyl propyl ether"],
        ["Tautomerism", "Proton shift (keto–enol)", "Acetone / prop-1-en-2-ol"],
        ["Geometrical (cis–trans)", "Arrangement around C=C", "cis- / trans-but-2-ene"],
        ["Optical", "Chiral centre, mirror images", "Lactic acid"]]],
    ]],
    ["Bond Fission and Reactive Intermediates", [
      ["ul", [
        "<b>Homolytic</b> fission gives free radicals; <b>heterolytic</b> gives carbocations and carbanions.",
        "<b>Electrophiles</b> are electron-seeking (H⁺, NO₂⁺, carbocations, BF₃). <b>Nucleophiles</b> are electron-rich (OH⁻, CN⁻, NH₃, H₂O).",
        "Carbocation stability: 3° > 2° > 1° > CH₃⁺; benzyl and allyl are resonance stabilised. Carbocations are sp² and planar.",
        "Carbanion stability is the reverse: CH₃⁻ > 1° > 2° > 3°. Free radical stability follows the carbocation order.",
      ]],
    ]],
    ["Electronic Effects", [
      ["tbl", ["Effect", "What it is", "Examples"], [
        ["Inductive (−I)", "Withdraws electrons through σ bonds, falls off with distance", "−NO₂ > −CN > −COOH > −F > −Cl > −Br > −I"],
        ["Inductive (+I)", "Donates through σ bonds", "(CH₃)₃C– > (CH₃)₂CH– > CH₃CH₂– > CH₃–"],
        ["Resonance (+R/+M)", "Donates π/lone-pair electrons", "−OH, −OR, −NH₂, halogens"],
        ["Resonance (−R/−M)", "Withdraws π electrons", "−NO₂, −CHO, −COOH, −CN"],
        ["Hyperconjugation", "σ (C–H) electrons delocalise with adjacent π or empty p orbital", "Explains alkene and carbocation stability"],
        ["Electromeric", "Temporary shift of π electrons when a reagent attacks", "Addition to C=C"]]],
      ["ex", "Which is the stronger acid: ClCH₂COOH or CH₃COOH?", "−I effect of Cl stabilises the anion: <b>ClCH₂COOH</b> is stronger."],
      ["tip", "Acid strength: more −I groups and closer to COOH → stronger acid. F₃CCOOH is much stronger than CH₃COOH."],
    ]],
    ["Purification and Analysis", [
      ["tbl", ["Method", "Used for"], [
        ["Crystallisation", "Solids with different solubility"],
        ["Sublimation", "Camphor, naphthalene, iodine"],
        ["Simple distillation", "Liquids with large boiling point difference"],
        ["Fractional distillation", "Liquids with close boiling points (crude oil)"],
        ["Distillation under reduced pressure", "Liquids that decompose at their boiling point (glycerol)"],
        ["Steam distillation", "Steam-volatile, water-immiscible (aniline)"],
        ["Chromatography", "Separating mixtures; R<sub>f</sub> = distance by compound / distance by solvent"]]],
      ["ul", ["Lassaigne's test detects N (Prussian blue), S (violet with sodium nitroprusside) and halogens (AgX precipitate).", "Kjeldahl's method for N can't be used for nitro, azo compounds or pyridine.", "Dumas method: N₂ gas measured. Carius method: halogens and S."]],
    ]],
  ],
  rev: [
    "DU = (2C + 2 + N − H − X)/2.",
    "Carbocation: 3° > 2° > 1°; carbanion is the reverse.",
    "−I groups increase acid strength.",
    "Electrophiles seek electrons; nucleophiles donate them.",
    "Steam distillation for aniline; reduced pressure for glycerol.",
    "Kjeldahl fails for nitro, azo and ring N.",
  ],
  mcq: [
    ["Which is an electrophile?", ["NH₃", "OH⁻", "NO₂⁺", "CN⁻"], 2, "Nitronium ion seeks electrons."],
    ["The hybridisation of the carbocation carbon is:", ["sp", "sp²", "sp³", "sp³d"], 1, "Planar with an empty p orbital."],
    ["The strongest acid among these is:", ["CH₃COOH", "ClCH₂COOH", "Cl₂CHCOOH", "Cl₃CCOOH"], 3, "Three −I chlorines."],
    ["Ethanol and dimethyl ether are:", ["Chain isomers", "Position isomers", "Functional isomers", "Metamers"], 2, "Alcohol vs ether."],
    ["Aniline is purified by:", ["Sublimation", "Steam distillation", "Crystallisation", "Simple distillation"], 1, "It is steam-volatile and immiscible with water."],
    ["The most stable free radical is:", ["CH₃•", "CH₃CH₂•", "(CH₃)₂CH•", "(CH₃)₃C•"], 3, "Tertiary radical, most hyperconjugation."],
    ["Kjeldahl's method is not suitable for:", ["Amines", "Amides", "Nitrobenzene", "Urea"], 2, "Nitro N is not converted to ammonium sulphate."],
    ["The IUPAC name of CH₂=CH–CH₂–OH is:", ["Prop-2-en-1-ol", "Prop-1-en-3-ol", "Allyl alcohol", "Propenol"], 0, "OH gets the lowest locant."],
    ["Which group shows +R effect?", ["−NO₂", "−CHO", "−OH", "−CN"], 2, "Lone pair on O is donated into the ring."],
    ["Optical isomerism requires:", ["A double bond", "A chiral carbon (or molecular asymmetry)", "A ring", "A functional group"], 1, "Non-superimposable mirror images."],
  ],
});
