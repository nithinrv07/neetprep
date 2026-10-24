NEET.ch("chem-amines", {
  intro: "Classification · Preparation · Basicity · Reactions · Tests for 1°, 2°, 3° amines · Diazonium salts and coupling",
  secs: [
    ["Classification and Preparation", [
      ["ul", [
        "1° RNH₂, 2° R₂NH, 3° R₃N. Amine N is sp³ and pyramidal.",
        "Reduction of nitro compounds: Sn/HCl or Fe/HCl (Fe preferred industrially) → aniline.",
        "Ammonolysis of alkyl halides gives a mixture of 1°, 2°, 3° amines and quaternary salt.",
        "Reduction of nitriles (LiAlH₄ or H₂/Ni) → 1° amines; reduction of amides (LiAlH₄) → amines.",
        "<b>Gabriel phthalimide synthesis</b> gives pure 1° aliphatic amines (not aryl amines, because aryl halides don't undergo S<sub>N</sub>2).",
        "<b>Hoffmann bromamide degradation:</b> RCONH₂ + Br₂ + 4NaOH → RNH₂ (one carbon less).",
      ]],
      ["ex", "Hoffmann bromamide degradation of propanamide gives?", "One carbon less: <b>ethanamine (CH₃CH₂NH₂)</b>."],
    ]],
    ["Basicity", [
      ["ul", [
        "Amines are basic due to the lone pair on N; they turn red litmus blue.",
        "In the gas phase: 3° > 2° > 1° > NH₃ (inductive effect only).",
        "In water (methyl series): (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃. Ethyl series: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃.",
        "Aniline is much weaker than NH₃: its lone pair is delocalised into the ring. Electron-donating groups (−CH₃, −OCH₃) at para increase basicity; −NO₂ decreases it.",
      ]],
      ["tip", "Basicity in water balances three things: +I effect, solvation of the ammonium ion (H-bonding), and steric hindrance. That's why 3° methylamine is not the strongest."],
    ]],
    ["Reactions of Amines", [
      ["tbl", ["Reaction", "Result"], [
        ["Acylation (RCOCl, pyridine)", "Amides; 1° and 2° react, 3° don't"],
        ["Carbylamine test (CHCl₃ + alc. KOH)", "1° amines only (aliphatic and aromatic) give foul-smelling isocyanide"],
        ["Nitrous acid with 1° aliphatic", "Alcohol + N₂ gas"],
        ["Nitrous acid with aniline (0–5 °C)", "Benzenediazonium chloride"],
        ["Bromine water with aniline", "2,4,6-Tribromoaniline (white ppt)"],
        ["Nitration of aniline", "Gives some meta product too (anilinium ion forms in acid); protect by acetylation first"]]],
      ["box", "Hinsberg test (benzenesulphonyl chloride)", ["1°: forms sulphonamide soluble in alkali", "2°: forms sulphonamide insoluble in alkali", "3°: no reaction"]],
      ["ul", ["Aniline doesn't undergo Friedel–Crafts reactions: it forms a salt with AlCl₃, which deactivates the ring."]],
    ]],
    ["Diazonium Salts", [
      ["ul", ["ArN₂⁺Cl⁻ is stable only at 0–5 °C (resonance with the ring). Aliphatic diazonium salts are unstable."]],
      ["tbl", ["Reagent", "Product"], [
        ["CuCl/HCl or CuBr/HBr (Sandmeyer)", "ArCl, ArBr"],
        ["Cu powder + HX (Gattermann)", "ArCl, ArBr"],
        ["KI", "ArI"],
        ["HBF₄, heat (Balz–Schiemann)", "ArF"],
        ["CuCN/KCN", "ArCN"],
        ["H₂O, warm", "Phenol"],
        ["H₃PO₂ or ethanol", "Benzene (replaces N₂ by H)"],
        ["Phenol (alkaline) or aniline (acidic)", "Azo dyes by coupling: p-hydroxyazobenzene (orange), p-aminoazobenzene (yellow)"]]],
    ]],
  ],
  rev: [
    "Gabriel synthesis: pure 1° aliphatic amines only.",
    "Hoffmann bromamide: one carbon less.",
    "In water: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃.",
    "Aniline is weaker than NH₃.",
    "Carbylamine test: 1° amines only.",
    "Diazonium salts: 0–5 °C; Sandmeyer with CuX.",
  ],
  mcq: [
    ["The carbylamine test is given by:", ["Primary amines", "Secondary amines", "Tertiary amines", "All amines"], 0, "Only RNH₂ forms isocyanides."],
    ["The most basic in water is:", ["NH₃", "CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N"], 2, "Best balance of +I, solvation and sterics."],
    ["Aniline is less basic than ammonia because:", ["It is heavier", "Its lone pair is delocalised into the ring", "It has no lone pair", "It is a gas"], 1, "Resonance makes the lone pair less available."],
    ["Gabriel phthalimide synthesis is used to prepare:", ["1° aromatic amines", "Pure 1° aliphatic amines", "2° amines", "3° amines"], 1, "Aryl halides don't undergo the needed substitution."],
    ["Benzenediazonium chloride with CuCN gives:", ["Benzonitrile", "Phenyl isocyanide", "Aniline", "Benzamide"], 0, "Sandmeyer-type cyanation."],
    ["Hoffmann bromamide degradation of acetamide gives:", ["Ethanamine", "Methanamine", "Acetic acid", "Methanol"], 1, "One carbon less than CH₃CONH₂."],
    ["Which amine does not react with benzenesulphonyl chloride?", ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "C₆H₅NH₂"], 2, "Tertiary amines have no N–H."],
    ["Diazotisation of aniline is carried out at:", ["0–5 °C", "50 °C", "100 °C", "Room temperature"], 0, "Diazonium salts decompose at higher temperatures."],
    ["Aniline with bromine water gives:", ["o-Bromoaniline", "p-Bromoaniline", "2,4,6-Tribromoaniline", "m-Bromoaniline"], 2, "−NH₂ strongly activates the ring."],
    ["Benzenediazonium chloride + H₃PO₂ gives:", ["Phenol", "Benzene", "Chlorobenzene", "Aniline"], 1, "N₂ is replaced by H."],
  ],
});
