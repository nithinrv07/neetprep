NEET.ch("chem-carbonyl", {
  intro: "Preparation of aldehydes and ketones · Nucleophilic addition · Named reactions · Tests · Carboxylic acids: preparation, acidity and reactions",
  secs: [
    ["Preparation of Aldehydes and Ketones", [
      ["ul", [
        "Oxidation of 1° alcohols (PCC) → aldehydes; 2° → ketones.",
        "<b>Rosenmund reduction:</b> RCOCl + H₂ (Pd/BaSO₄) → RCHO.",
        "<b>Stephen reaction:</b> RCN + SnCl₂/HCl, then H₂O → RCHO. DIBAL-H also reduces nitriles/esters to aldehydes.",
        "<b>Etard reaction:</b> toluene + CrO₂Cl₂ → benzaldehyde.",
        "Gattermann–Koch: benzene + CO + HCl (AlCl₃/CuCl) → benzaldehyde.",
        "Ketones: nitrile + Grignard reagent; Friedel–Crafts acylation; ozonolysis of alkenes.",
      ]],
    ]],
    ["Nucleophilic Addition", [
      ["p", "The C=O carbon is electrophilic. Aldehydes are more reactive than ketones (less steric hindrance and less +I). HCHO is the most reactive."],
      ["tbl", ["Reagent", "Product"], [
        ["HCN", "Cyanohydrin"], ["NaHSO₃", "Bisulphite adduct (purification)"], ["Alcohol (dry HCl)", "Hemiacetal → acetal (ketal from ketones)"],
        ["NH₂OH", "Oxime"], ["NH₂NH₂", "Hydrazone"], ["2,4-DNP", "2,4-Dinitrophenylhydrazone (orange ppt, test for C=O)"], ["Semicarbazide", "Semicarbazone"]]],
    ]],
    ["Important Reactions and Tests", [
      ["tbl", ["Reaction", "What happens"], [
        ["Clemmensen reduction", "C=O → CH₂ with Zn-Hg/conc. HCl"],
        ["Wolff–Kishner reduction", "C=O → CH₂ with NH₂NH₂, KOH/ethylene glycol"],
        ["Aldol condensation", "Aldehydes/ketones with α-H + dilute NaOH → β-hydroxy carbonyl → α,β-unsaturated carbonyl"],
        ["Cannizzaro reaction", "Aldehydes without α-H (HCHO, C₆H₅CHO) + conc. NaOH → alcohol + carboxylate salt"],
        ["Haloform (iodoform) reaction", "CH₃CO– group (or CH₃CH(OH)–) + I₂/NaOH → yellow CHI₃"]]],
      ["tbl", ["Test", "Aldehydes", "Ketones"], [["Tollens' reagent (silver mirror)", "Positive", "Negative"], ["Fehling's / Benedict's (red Cu₂O)", "Aliphatic aldehydes positive; benzaldehyde negative", "Negative"]]],
      ["ex", "Which gives the iodoform test: propanal, propanone, pentan-3-one or methanol?", "Only the CH₃CO– compound: <b>propanone</b>."],
      ["tip", "Aldol needs an α-hydrogen; Cannizzaro needs no α-hydrogen. Check α-H first."],
    ]],
    ["Carboxylic Acids", [
      ["ul", [
        "Preparation: oxidation of 1° alcohols/aldehydes, hydrolysis of nitriles, Grignard + CO₂, oxidation of alkylbenzenes (KMnO₄) → benzoic acid.",
        "Exist as H-bonded dimers; high boiling points.",
        "Acidity: −I groups increase it; +I groups decrease it. HCOOH > CH₃COOH. F₃CCOOH is very strong.",
        "Carboxylic acids are stronger than phenols and react with NaHCO₃ (CO₂ effervescence); phenols generally don't.",
      ]],
      ["box", "Reactions", ["RCOOH + SOCl₂ → RCOCl", "Decarboxylation: RCOONa + NaOH/CaO → RH", "<b>HVZ reaction:</b> Cl₂/Br₂ + red P → α-halo acid", "LiAlH₄ reduces RCOOH to 1° alcohol (NaBH₄ doesn't)", "Benzoic acid is meta-directing; doesn't undergo Friedel–Crafts"]],
      ["ex", "Arrange in order of acid strength: CH₃COOH, ClCH₂COOH, FCH₂COOH, HCOOH.", "<b>FCH₂COOH > ClCH₂COOH > HCOOH > CH₃COOH</b>."],
    ]],
  ],
  rev: [
    "Rosenmund: acid chloride → aldehyde (Pd/BaSO₄).",
    "Aldehydes are more reactive than ketones.",
    "Clemmensen (Zn-Hg/HCl) and Wolff–Kishner (NH₂NH₂/KOH) give CH₂.",
    "Aldol needs α-H; Cannizzaro needs none.",
    "Tollens': aldehydes only. Iodoform: CH₃CO– group.",
    "HVZ gives α-halo acids; acids react with NaHCO₃.",
  ],
  mcq: [
    ["Which undergoes the Cannizzaro reaction?", ["CH₃CHO", "C₆H₅CHO", "CH₃COCH₃", "CH₃CH₂CHO"], 1, "Benzaldehyde has no α-hydrogen."],
    ["Rosenmund reduction converts acid chlorides into:", ["Alcohols", "Aldehydes", "Ketones", "Acids"], 1, "H₂ over poisoned Pd/BaSO₄."],
    ["Which reagent distinguishes aldehydes from ketones?", ["2,4-DNP", "Tollens' reagent", "NaHSO₃", "HCN"], 1, "Only aldehydes give a silver mirror."],
    ["Clemmensen reduction converts C=O into:", ["CH–OH", "CH₂", "COOH", "C=C"], 1, "Zn-Hg and conc. HCl."],
    ["Which gives a positive iodoform test?", ["Methanol", "Ethanol", "Propan-1-ol", "Benzaldehyde"], 1, "CH₃CH(OH)– is oxidised to CH₃CO–."],
    ["Aldol condensation requires:", ["No α-hydrogen", "At least one α-hydrogen", "A carboxyl group", "An aromatic ring"], 1, "Enolate forms at the α-carbon."],
    ["The strongest acid is:", ["CH₃COOH", "HCOOH", "ClCH₂COOH", "FCH₂COOH"], 3, "F has the strongest −I effect."],
    ["The HVZ reaction gives:", ["α-Halo acids", "Acid halides", "Esters", "Amides"], 0, "Halogen at the α-carbon with red P."],
    ["Toluene with CrO₂Cl₂ gives benzaldehyde. This is the:", ["Stephen reaction", "Etard reaction", "Gattermann–Koch reaction", "Rosenmund reduction"], 1, "Chromyl chloride oxidation."],
    ["Benzaldehyde does not respond to:", ["Tollens' test", "Fehling's test", "2,4-DNP test", "Cannizzaro reaction"], 1, "Aromatic aldehydes don't reduce Fehling's solution."],
  ],
});
