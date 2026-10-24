NEET.ch("chem-alcohols", {
  intro: "Preparation of alcohols and phenols · Acidity · Reactions · Lucas test · Named reactions of phenol · Ethers and Williamson synthesis",
  secs: [
    ["Preparation", [
      ["ul", [
        "Alcohols: acid-catalysed hydration of alkenes (Markovnikov); hydroboration–oxidation (anti-Markovnikov); reduction of aldehydes/ketones/acids (LiAlH₄, NaBH₄); Grignard reagent + carbonyl compound.",
        "Grignard: HCHO → 1° alcohol; other aldehydes → 2°; ketones → 3°.",
        "Phenol: from chlorobenzene (Dow, NaOH at 623 K, 300 atm), benzenesulphonic acid, diazonium salts (warm with water), and <b>cumene</b> (gives phenol + acetone).",
      ]],
      ["ex", "CH₃MgBr + CH₃CHO, then hydrolysis, gives?", "A 2° alcohol: <b>propan-2-ol</b>."],
    ]],
    ["Physical Properties and Acidity", [
      ["ul", [
        "Boiling points are high due to H-bonding: alcohols > ethers and hydrocarbons of similar mass.",
        "Acidity: <b>phenol > water > alcohols</b>. Phenoxide ion is resonance stabilised.",
        "Among alcohols: 1° > 2° > 3° (alkyl +I destabilises the alkoxide).",
        "Electron-withdrawing groups increase phenol acidity: p-nitrophenol > phenol > p-cresol. Picric acid (2,4,6-trinitrophenol) is strongly acidic.",
      ]],
    ]],
    ["Reactions of Alcohols", [
      ["box", "Key reactions", ["Dehydration (conc. H₂SO₄): 3° > 2° > 1°; intramolecular at 443 K gives alkene, at 413 K gives ether", "Oxidation: 1° → aldehyde (PCC) → acid (KMnO₄); 2° → ketone; 3° resist", "Cu at 573 K: 1° → aldehyde, 2° → ketone, 3° → alkene", "Esterification: RCOOH + R'OH (H⁺) ⇌ RCOOR' + H₂O"]],
      ["tbl", ["Lucas test (ZnCl₂ + conc. HCl)", "Result"], [["3° alcohol", "Turbidity immediately"], ["2° alcohol", "Turbidity in about 5 minutes"], ["1° alcohol", "No turbidity at room temperature"]]],
    ]],
    ["Reactions of Phenol", [
      ["tbl", ["Reaction", "Reagent", "Product"], [
        ["Bromination", "Bromine water", "2,4,6-Tribromophenol (white ppt)"],
        ["Bromination in CS₂ (low T)", "Br₂ in CS₂", "o- and p-bromophenol"],
        ["Nitration", "Dilute HNO₃", "o- and p-nitrophenol (separated by steam distillation; ortho is volatile)"],
        ["Kolbe reaction", "NaOH, CO₂, then H⁺", "Salicylic acid (o-hydroxybenzoic acid)"],
        ["Reimer–Tiemann", "CHCl₃ + NaOH", "Salicylaldehyde"],
        ["With Zn dust", "Heat", "Benzene"],
        ["Neutral FeCl₃", "—", "Violet colour (test for phenol)"]]],
      ["tip", "−OH strongly activates the ring, so phenol brominates even without a catalyst."],
    ]],
    ["Ethers", [
      ["ul", [
        "<b>Williamson synthesis:</b> RO⁻Na⁺ + R'X → ROR'. Use a 1° alkyl halide; 3° halides eliminate instead.",
        "Ethers are cleaved by HI: with a methyl group, methyl iodide forms; anisole + HI → phenol + CH₃I.",
        "The −OR group in anisole is o/p directing and activating.",
        "Diethyl ether was used as an anaesthetic.",
      ]],
      ["ex", "How would you make tert-butyl methyl ether by Williamson synthesis?", "Use <b>(CH₃)₃CO⁻Na⁺ + CH₃Br</b>. The reverse (CH₃O⁻ + tert-butyl bromide) would give an alkene."],
    ]],
  ],
  rev: [
    "Grignard: HCHO → 1°, RCHO → 2°, ketone → 3° alcohol.",
    "Acidity: phenol > water > ethanol.",
    "Lucas test: 3° instant, 2° 5 min, 1° none.",
    "Kolbe → salicylic acid; Reimer–Tiemann → salicylaldehyde.",
    "Cumene process gives phenol + acetone.",
    "Williamson: use 1° alkyl halide.",
  ],
  mcq: [
    ["Which is the most acidic?", ["Ethanol", "Phenol", "p-Nitrophenol", "p-Cresol"], 2, "−NO₂ stabilises the phenoxide by −R and −I."],
    ["The Lucas test gives immediate turbidity with:", ["Methanol", "Ethanol", "Propan-2-ol", "2-Methylpropan-2-ol"], 3, "Tertiary alcohol."],
    ["Phenol with bromine water gives:", ["o-Bromophenol", "p-Bromophenol", "2,4,6-Tribromophenol", "Bromobenzene"], 2, "Highly activated ring."],
    ["The Kolbe reaction of sodium phenoxide with CO₂ gives:", ["Benzoic acid", "Salicylic acid", "Phenyl acetate", "Salicylaldehyde"], 1, "o-Hydroxybenzoic acid."],
    ["The cumene process produces phenol and:", ["Ethanol", "Acetone", "Benzene", "Propene"], 1, "Cumene hydroperoxide splits into both."],
    ["Oxidation of a secondary alcohol gives:", ["Aldehyde", "Ketone", "Carboxylic acid", "Ether"], 1, "Only one H on the carbinol carbon."],
    ["Phenol gives a violet colour with:", ["Neutral FeCl₃", "Tollens' reagent", "Fehling's solution", "NaHCO₃"], 0, "Characteristic phenol test."],
    ["Anisole reacts with HI to give:", ["Iodobenzene + methanol", "Phenol + methyl iodide", "Benzene + CH₃OH", "Phenol + methanol"], 1, "Aryl–O bond doesn't break."],
    ["Reimer–Tiemann reaction uses:", ["CHCl₃ and NaOH", "CO₂ and NaOH", "Zn dust", "Br₂ water"], 0, "Introduces –CHO at the ortho position."],
    ["CH₃MgBr reacts with HCHO followed by hydrolysis to give:", ["Methanol", "Ethanol", "Propanol", "Acetone"], 1, "Primary alcohol with one extra carbon."],
  ],
});
