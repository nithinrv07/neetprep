NEET.ch("chem-periodic", {
  intro: "Modern periodic law · Long form of the table · s, p, d, f blocks · Atomic and ionic radius · Ionisation enthalpy · Electron gain enthalpy · Electronegativity · Valency",
  secs: [
    ["Modern Periodic Law and the Table", [
      ["ul", [
        "<b>Mendeleev:</b> properties are periodic functions of atomic mass; he left gaps and predicted eka-aluminium (Ga) and eka-silicon (Ge).",
        "<b>Modern periodic law (Moseley):</b> properties are periodic functions of <b>atomic number</b>.",
        "Long form: 18 groups, 7 periods. Period number = outermost shell n.",
        "IUPAC names for new elements use roots: 0 nil, 1 un, 2 bi, 3 tri, 4 quad, 5 pent, 6 hex, 7 sept, 8 oct, 9 enn + ium. Z = 120 → Unbinilium (Ubn).",
      ]],
      ["tbl", ["Block", "Groups", "General configuration", "Nature"], [
        ["s", "1, 2", "ns¹⁻²", "Reactive metals"],
        ["p", "13–18", "ns² np¹⁻⁶", "Metals, non-metals, metalloids, noble gases"],
        ["d", "3–12", "(n−1)d¹⁻¹⁰ ns⁰⁻²", "Transition metals, coloured ions, variable valency"],
        ["f", "Lanthanoids, actinoids", "(n−2)f¹⁻¹⁴ (n−1)d⁰⁻¹ ns²", "Inner transition elements"]]],
    ]],
    ["Atomic and Ionic Radius", [
      ["ul", [
        "Across a period: radius <b>decreases</b> (nuclear charge increases, same shell).",
        "Down a group: radius <b>increases</b> (new shells added).",
        "Cation < parent atom; anion > parent atom.",
        "Isoelectronic species: more nuclear charge → smaller. O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺.",
        "Noble gases have large (van der Waals) radii.",
      ]],
    ]],
    ["Ionisation Enthalpy", [
      ["p", "Energy needed to remove the outermost electron from an isolated gaseous atom. IE₁ < IE₂ < IE₃ always."],
      ["ul", [
        "Increases across a period, decreases down a group.",
        "Exceptions: <b>Be > B</b> and <b>N > O</b> (stable 2s² and half-filled 2p³).",
        "Noble gases have the highest IE in each period; alkali metals the lowest.",
        "A big jump between successive IEs shows a noble-gas core was reached (tells the valency).",
      ]],
      ["ex", "An element has IE₁ = 520, IE₂ = 7300 kJ/mol. Which group is it in?", "Huge jump after the first electron: <b>group 1</b> (it is Li)."],
    ]],
    ["Electron Gain Enthalpy and Electronegativity", [
      ["ul", [
        "Electron gain enthalpy (Δ<sub>eg</sub>H) becomes more negative across a period and less negative down a group.",
        "<b>Cl has the most negative</b> electron gain enthalpy, more than F, because F is very small and its electrons repel the incoming one.",
        "Noble gases and Be, Mg, N have positive or near-zero values.",
        "Electronegativity (Pauling): tendency to attract shared electrons. F (4.0) is the highest. Increases across, decreases down.",
      ]],
      ["tip", "Order to remember: electron gain enthalpy Cl > F > Br > I; electronegativity F > O > N ≈ Cl."],
    ]],
    ["Metallic Character and Oxides", [
      ["ul", [
        "Metallic character decreases across a period and increases down a group.",
        "Oxides: left side basic (Na₂O), middle amphoteric (Al₂O₃), right side acidic (Cl₂O₇).",
        "Diagonal relationship: Li–Mg, Be–Al, B–Si.",
        "Anomalous behaviour of the first element of each group: small size, high electronegativity, no d orbitals.",
      ]],
    ]],
  ],
  rev: [
    "Modern law is based on atomic number.",
    "Radius ↓ across, ↑ down; isoelectronic: more Z, smaller.",
    "IE exceptions: Be > B, N > O.",
    "Most negative Δ<sub>eg</sub>H: Cl; most electronegative: F.",
    "Oxides: basic → amphoteric → acidic across a period.",
    "Element 120: Unbinilium.",
  ],
  mcq: [
    ["Which has the largest ionic radius?", ["Na⁺", "Mg²⁺", "F⁻", "O²⁻"], 3, "Isoelectronic: least nuclear charge (O, Z = 8) → largest."],
    ["Which has higher first ionisation enthalpy?", ["B", "Be", "Li", "Na"], 1, "Be has a stable 2s² configuration; Be > B."],
    ["The element with the most negative electron gain enthalpy is:", ["F", "Cl", "Br", "O"], 1, "Small F repels the added electron, so Cl is more negative."],
    ["The modern periodic law is based on:", ["Atomic mass", "Atomic number", "Number of neutrons", "Density"], 1, "Moseley showed properties depend on atomic number."],
    ["The IUPAC name of element 104 is:", ["Unnilquadium", "Unniltrium", "Unnilpentium", "Ununbium"], 0, "1-0-4: un-nil-quad-ium."],
    ["Across a period from left to right, atomic radius generally:", ["Increases", "Decreases", "Stays the same", "First increases then decreases"], 1, "Higher nuclear charge pulls electrons closer."],
    ["Al₂O₃ is:", ["Acidic", "Basic", "Amphoteric", "Neutral"], 2, "It reacts with both acids and bases."],
    ["Which has higher ionisation enthalpy: N or O?", ["N", "O", "Equal", "Depends on temperature"], 0, "N has a stable half-filled 2p³ configuration."],
    ["The general electronic configuration of p-block elements is:", ["ns¹⁻²", "ns² np¹⁻⁶", "(n−1)d¹⁻¹⁰ ns¹⁻²", "(n−2)f ns²"], 1, "Groups 13–18."],
    ["Mendeleev's eka-silicon is now known as:", ["Gallium", "Germanium", "Scandium", "Tin"], 1, "He predicted germanium's properties."],
  ],
});
