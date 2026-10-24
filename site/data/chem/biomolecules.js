NEET.ch("chem-biomolecules", {
  intro: "Carbohydrates · Glucose structure · Disaccharides and polysaccharides · Amino acids and proteins · Enzymes · Vitamins · Nucleic acids",
  secs: [
    ["Carbohydrates", [
      ["ul", [
        "Monosaccharides (glucose, fructose), oligosaccharides (sucrose, maltose, lactose), polysaccharides (starch, cellulose, glycogen).",
        "<b>Reducing sugars</b> have a free aldehyde/ketone group and reduce Tollens' and Fehling's reagents: all monosaccharides, maltose, lactose. <b>Sucrose is non-reducing.</b>",
        "Glucose: aldohexose. Evidence: HI gives n-hexane (straight chain), pentaacetate (5 OH), oxime (C=O), bromine water gives gluconic acid (CHO).",
        "Glucose doesn't give Schiff's test or react with NaHSO₃, which supports its cyclic (pyranose) structure. α and β forms are <b>anomers</b> differing at C-1.",
        "Fructose: ketohexose, forms a five-membered (furanose) ring.",
      ]],
      ["tbl", ["Disaccharide", "Units", "Linkage", "Reducing?"], [
        ["Sucrose", "α-glucose + β-fructose", "C1–C2", "No"],
        ["Maltose", "2 α-glucose", "C1–C4", "Yes"],
        ["Lactose", "β-galactose + β-glucose", "C1–C4", "Yes"]]],
      ["tbl", ["Polysaccharide", "Made of", "Notes"], [
        ["Starch", "Amylose (15–20%, unbranched, α-1,4) + amylopectin (80–85%, branched α-1,6)", "Plant food store"],
        ["Cellulose", "β-glucose, β-1,4 linkages", "Plant cell walls; humans can't digest it"],
        ["Glycogen", "Highly branched α-glucose", "Animal starch, in liver and muscles"]]],
      ["tip", "Hydrolysis of sucrose changes rotation from dextro to laevo, so the product is called <b>invert sugar</b>."],
    ]],
    ["Amino Acids and Proteins", [
      ["ul", [
        "α-Amino acids exist as <b>zwitterions</b>; all except glycine are optically active (L-form in nature).",
        "Essential amino acids must come from the diet (valine, leucine, lysine, etc.).",
        "Peptide bond: –CO–NH– between amino acids.",
        "Structure levels: <b>primary</b> (sequence), <b>secondary</b> (α-helix, β-pleated sheet by H-bonds), <b>tertiary</b> (folding: fibrous or globular), <b>quaternary</b> (subunits, e.g. haemoglobin).",
        "<b>Denaturation</b> (heat, pH change) destroys 2° and 3° structure but not the primary sequence: boiled egg white coagulates.",
      ]],
    ]],
    ["Enzymes and Vitamins", [
      ["ul", ["Enzymes are biological catalysts, mostly globular proteins, highly specific; names end in -ase (maltase, invertase)."]],
      ["tbl", ["Vitamin", "Soluble in", "Deficiency disease"], [
        ["A", "Fat", "Night blindness, xerophthalmia"],
        ["B₁ (thiamine)", "Water", "Beriberi"],
        ["B₂ (riboflavin)", "Water", "Cheilosis, digestive disorders"],
        ["B₆ (pyridoxine)", "Water", "Convulsions"],
        ["B₁₂ (cobalamin)", "Water", "Pernicious anaemia"],
        ["C (ascorbic acid)", "Water", "Scurvy"],
        ["D", "Fat", "Rickets, osteomalacia"],
        ["E", "Fat", "Fragile RBCs, muscle weakness"],
        ["K", "Fat", "Increased blood clotting time"]]],
      ["ul", ["Fat-soluble vitamins A, D, E, K are stored in the body; water-soluble B and C must be taken regularly (except B₁₂, stored in the liver)."]],
    ]],
    ["Nucleic Acids", [
      ["tbl", ["", "DNA", "RNA"], [["Sugar", "2-Deoxyribose", "Ribose"], ["Bases", "A, G, C, T", "A, G, C, U"], ["Structure", "Double helix", "Single strand"], ["Role", "Heredity", "Protein synthesis"]]],
      ["ul", ["Nucleoside = base + sugar; nucleotide = nucleoside + phosphate.", "Nucleotides join by 3′–5′ phosphodiester bonds.", "Base pairing: A=T (2 H-bonds), G≡C (3 H-bonds)."]],
    ]],
  ],
  rev: [
    "Sucrose is non-reducing; maltose and lactose are reducing.",
    "Anomers differ at C-1.",
    "Cellulose: β-1,4 glucose; starch: amylose + amylopectin.",
    "Denaturation keeps primary structure.",
    "Vitamin C → scurvy; D → rickets; B₁ → beriberi; B₁₂ → pernicious anaemia.",
    "RNA has ribose and uracil.",
  ],
  mcq: [
    ["Which is a non-reducing sugar?", ["Glucose", "Maltose", "Lactose", "Sucrose"], 3, "Both anomeric carbons are tied up in the glycosidic bond."],
    ["α-D-Glucose and β-D-glucose are:", ["Enantiomers", "Anomers", "Epimers at C-4", "Functional isomers"], 1, "They differ at C-1."],
    ["Deficiency of vitamin B₁₂ causes:", ["Scurvy", "Beriberi", "Pernicious anaemia", "Rickets"], 2, "Cobalamin deficiency."],
    ["Which amino acid is optically inactive?", ["Alanine", "Glycine", "Valine", "Leucine"], 1, "Its α-carbon has two H atoms."],
    ["The base present in RNA but not in DNA is:", ["Adenine", "Thymine", "Uracil", "Guanine"], 2, "RNA uses uracil instead of thymine."],
    ["Cellulose is a polymer of:", ["α-D-glucose", "β-D-glucose", "Fructose", "Galactose"], 1, "β-1,4 glycosidic linkages."],
    ["Denaturation of proteins affects:", ["Primary structure", "Secondary and tertiary structure", "Peptide bonds", "Amino acid sequence"], 1, "Sequence stays intact."],
    ["Which vitamin is fat-soluble?", ["B₁", "C", "D", "B₆"], 2, "A, D, E, K are fat-soluble."],
    ["The linkage in nucleic acids between nucleotides is:", ["Peptide", "Glycosidic", "Phosphodiester", "Hydrogen"], 2, "3′–5′ phosphodiester bonds."],
    ["Invert sugar is a mixture of:", ["Glucose and galactose", "Glucose and fructose", "Maltose and glucose", "Sucrose and glucose"], 1, "From hydrolysis of sucrose."],
  ],
});
