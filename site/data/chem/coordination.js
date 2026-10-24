NEET.ch("chem-coordination", {
  intro: "Werner's theory · Ligands and denticity · Coordination number · IUPAC naming · Isomerism · Valence bond theory · Crystal field theory · Colour and magnetism · Uses",
  secs: [
    ["Werner's Theory and Terms", [
      ["ul", [
        "Primary valency = oxidation state (ionisable); secondary valency = coordination number (non-ionisable, fixed geometry).",
        "<b>Ligand</b>: donor that gives electron pair(s) to the metal. Monodentate (Cl⁻, NH₃, H₂O, CN⁻), bidentate (en, ox²⁻), hexadentate (EDTA⁴⁻).",
        "<b>Ambidentate</b> ligands bind through either of two atoms: NO₂⁻ (N or O), SCN⁻ (S or N), CN⁻.",
        "<b>Chelate</b>: ring formed by a polydentate ligand; more stable than similar non-chelated complexes.",
        "Coordination number = number of donor atoms bound to the metal.",
      ]],
      ["ex", "How many ions does [Co(NH₃)₅Cl]Cl₂ give in water, and how much AgCl precipitates per mole?", "[Co(NH₃)₅Cl]²⁺ + 2Cl⁻: <b>3 ions</b>, and <b>2 mol AgCl</b> (only the ionisable Cl⁻)."],
    ]],
    ["IUPAC Naming", [
      ["ul", [
        "Cation named first. Inside the complex: ligands alphabetically, then metal.",
        "Anionic ligands end in -o: chlorido, cyanido, oxalato, hydroxido. Neutral: aqua (H₂O), ammine (NH₃), carbonyl (CO).",
        "Anionic complex: metal ends in -ate (ferrate, cuprate, argentate, aurate, plumbate).",
        "Oxidation state in Roman numerals.",
      ]],
      ["ex", "Name K₄[Fe(CN)₆].", "<b>Potassium hexacyanidoferrate(II)</b>."],
      ["ex", "Name [Co(NH₃)₄Cl₂]Cl.", "<b>Tetraamminedichloridocobalt(III) chloride</b>."],
    ]],
    ["Isomerism in Complexes", [
      ["tbl", ["Type", "Example"], [
        ["Ionisation", "[Co(NH₃)₅SO₄]Br and [Co(NH₃)₅Br]SO₄"],
        ["Linkage", "–NO₂ (nitrito-N) vs –ONO (nitrito-O)"],
        ["Coordination", "[Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆]"],
        ["Hydrate (solvate)", "[Cr(H₂O)₆]Cl₃ (violet) and [Cr(H₂O)₅Cl]Cl₂·H₂O (green)"],
        ["Geometrical", "cis/trans in MA₂B₂ square planar, MA₄B₂ octahedral; fac/mer in MA₃B₃"],
        ["Optical", "[Co(en)₃]³⁺, cis-[Co(en)₂Cl₂]⁺"]]],
      ["ul", ["Tetrahedral complexes don't show geometrical isomerism.", "trans-[Co(en)₂Cl₂]⁺ is optically inactive (has a mirror plane); the cis form is active."]],
    ]],
    ["Valence Bond Theory", [
      ["tbl", ["CN", "Hybridisation", "Shape", "Example"], [
        ["4", "sp³", "Tetrahedral", "[NiCl₄]²⁻ (para), [Ni(CO)₄] (dia)"],
        ["4", "dsp²", "Square planar", "[Ni(CN)₄]²⁻ (dia), [PtCl₄]²⁻"],
        ["6", "d²sp³ (inner orbital, low spin)", "Octahedral", "[Fe(CN)₆]³⁻, [Co(NH₃)₆]³⁺"],
        ["6", "sp³d² (outer orbital, high spin)", "Octahedral", "[CoF₆]³⁻, [FeF₆]³⁻"]]],
    ]],
    ["Crystal Field Theory", [
      ["ul", [
        "In an octahedral field, d orbitals split into t₂g (lower, 3) and e<sub>g</sub> (higher, 2) by Δ<sub>o</sub>. Tetrahedral: Δ<sub>t</sub> ≈ (4/9)Δ<sub>o</sub>, so tetrahedral complexes are almost always high spin.",
        "If Δ<sub>o</sub> > pairing energy → low spin (strong field); if smaller → high spin (weak field).",
        "<b>Spectrochemical series</b>: I⁻ < Br⁻ < SCN⁻ < Cl⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < NH₃ < en < NO₂⁻ < CN⁻ < CO.",
        "Colour comes from d–d transitions; the complex shows the complementary colour of light absorbed. [Ti(H₂O)₆]³⁺ is violet.",
      ]],
      ["box", "CFSE (octahedral)", ["CFSE = (−0.4 × t₂g electrons + 0.6 × e<sub>g</sub> electrons) Δ<sub>o</sub> (+ pairing energy terms)"]],
      ["ex", "Is [Fe(CN)₆]⁴⁻ high or low spin, and how many unpaired electrons?", "Fe²⁺ d⁶ with strong-field CN⁻: t₂g⁶ e<sub>g</sub>⁰ → <b>low spin, 0 unpaired</b> (diamagnetic)."],
      ["tip", "CO and CN⁻ are strong-field; halides are weak-field. Remember 'weak I, strong CO'."],
    ]],
    ["Applications", [
      ["ul", ["EDTA is used to estimate hardness of water (Ca²⁺, Mg²⁺) and to treat lead poisoning.", "Cisplatin cis-[Pt(NH₃)₂Cl₂] is an anticancer drug.", "Chlorophyll (Mg), haemoglobin (Fe), vitamin B₁₂ (Co) are coordination compounds.", "Metal carbonyls have synergic bonding: σ donation from CO and π back-donation from the metal."]],
    ]],
  ],
  rev: [
    "EDTA is hexadentate; NO₂⁻ and SCN⁻ are ambidentate.",
    "Anionic complexes: -ate ending.",
    "Tetrahedral complexes: no geometrical isomers.",
    "Strong-field ligands (CN⁻, CO) → low spin, inner-orbital.",
    "Δ<sub>t</sub> ≈ 4/9 Δ<sub>o</sub>.",
    "Cisplatin is the anticancer drug.",
  ],
  mcq: [
    ["EDTA is a:", ["Monodentate ligand", "Bidentate ligand", "Tetradentate ligand", "Hexadentate ligand"], 3, "Two N and four O donors."],
    ["Which is an ambidentate ligand?", ["NH₃", "SCN⁻", "H₂O", "en"], 1, "Binds through S or N."],
    ["The hybridisation in [Ni(CN)₄]²⁻ is:", ["sp³", "dsp²", "sp³d", "d²sp³"], 1, "Strong-field CN⁻ pairs electrons; square planar."],
    ["The IUPAC name of [Cu(NH₃)₄]SO₄ is:", ["Copper ammine sulphate", "Tetraamminecopper(II) sulphate", "Tetraamminecuprate(II) sulphate", "Copper(II) tetraammine sulphate"], 1, "Cationic complex, so no -ate."],
    ["Which ligand produces the strongest field?", ["F⁻", "H₂O", "NH₃", "CO"], 3, "End of the spectrochemical series."],
    ["The number of unpaired electrons in [CoF₆]³⁻ (high spin, Co³⁺ d⁶) is:", ["0", "2", "4", "6"], 2, "t₂g⁴ e<sub>g</sub>² → 4 unpaired."],
    ["Which complex shows optical isomerism?", ["trans-[Co(en)₂Cl₂]⁺", "[Co(en)₃]³⁺", "[Pt(NH₃)₄]²⁺", "[Ni(CO)₄]"], 1, "Non-superimposable mirror images."],
    ["[Co(NH₃)₅NO₂]Cl₂ and [Co(NH₃)₅ONO]Cl₂ show:", ["Ionisation isomerism", "Linkage isomerism", "Hydrate isomerism", "Coordination isomerism"], 1, "Different donor atom of NO₂⁻."],
    ["The anticancer drug cisplatin is:", ["trans-[Pt(NH₃)₂Cl₂]", "cis-[Pt(NH₃)₂Cl₂]", "[Pt(NH₃)₄]Cl₂", "K₂[PtCl₄]"], 1, "The cis isomer."],
    ["Moles of AgCl precipitated from 1 mol of [Co(NH₃)₆]Cl₃ with excess AgNO₃:", ["1", "2", "3", "0"], 2, "All three Cl⁻ are outside the sphere."],
  ],
});
