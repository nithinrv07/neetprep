NEET.ch("phy-nuclei", {
  intro: "Composition and size of nucleus · Mass defect and binding energy · Nuclear force · Radioactivity · Fission and fusion",
  given: "1 u = 931.5 MeV/c², R₀ ≈ 1.2 fm.",
  secs: [
    ["Composition and Size", [
      ["ul", ["A nucleus <sup>A</sup><sub>Z</sub>X has Z protons and N = A − Z neutrons.", "<b>Isotopes:</b> same Z (¹H, ²H). <b>Isobars:</b> same A (¹⁴C, ¹⁴N). <b>Isotones:</b> same N.", "1 u = 1/12 of the mass of a ¹²C atom = 1.66 × 10⁻²⁷ kg."]],
      ["box", "Nuclear size", ["R = R₀A<sup>1/3</sup>", "Nuclear density ≈ 2.3 × 10¹⁷ kg/m³, the same for all nuclei"]],
      ["ex", "Compare the radii of ²⁷Al and ⁶⁴Cu nuclei.", "R ∝ A<sup>1/3</sup>: 3 : 4."],
    ]],
    ["Mass Defect and Binding Energy", [
      ["box", "Binding energy", ["Mass defect Δm = [Zm<sub>p</sub> + (A − Z)m<sub>n</sub>] − M<sub>nucleus</sub>", "Binding energy E<sub>b</sub> = Δm c² = Δm(u) × 931.5 MeV", "BE per nucleon peaks near A = 56 (Fe), about 8.8 MeV"]],
      ["ul", ["Higher BE per nucleon means a more stable nucleus.", "Heavy nuclei release energy by splitting (fission); light nuclei by joining (fusion)."]],
      ["ex", "The mass defect of a nucleus is 0.1 u. Find its binding energy.", "0.1 × 931.5 ≈ <b>93 MeV</b>."],
    ]],
    ["Nuclear Force", [
      ["ul", ["Strongest force in nature, but very short range (a few fm).", "Charge independent: p–p, n–n and p–n forces are about equal.", "Attractive at ~1 fm, strongly repulsive below about 0.8 fm.", "Saturates: each nucleon interacts only with near neighbours."]],
    ]],
    ["Radioactivity", [
      ["box", "Decay law", ["N = N₀e<sup>−λt</sup>; activity R = λN", "Half-life T<sub>½</sub> = 0.693/λ", "Mean life τ = 1/λ = 1.44 T<sub>½</sub>", "After n half-lives: N = N₀(½)ⁿ", "1 Bq = 1 decay/s; 1 Ci = 3.7 × 10¹⁰ Bq"]],
      ["tbl", ["Decay", "Emitted", "Change in Z", "Change in A"], [["α", "⁴He nucleus", "−2", "−4"], ["β⁻", "electron + antineutrino", "+1", "0"], ["β⁺", "positron + neutrino", "−1", "0"], ["γ", "photon", "0", "0"]]],
      ["ul", ["Penetrating power: γ > β > α. Ionising power: α > β > γ.", "Radioactivity is a nuclear property: unaffected by temperature, pressure or chemical state."]],
      ["ex", "²³⁸U decays to ²⁰⁶Pb. How many α and β particles are emitted?", "α: (238 − 206)/4 = <b>8</b>. Z drops by 16 from α, but net drop is 92 − 82 = 10, so <b>6 β⁻</b>."],
      ["ex", "A sample's activity falls to 1/16 in 40 days. Find its half-life.", "1/16 = (½)⁴ → 4 half-lives in 40 days → <b>10 days</b>."],
    ]],
    ["Nuclear Fission and Fusion", [
      ["ul", ["<b>Fission:</b> ²³⁵U + n → Ba + Kr + 3n + ~200 MeV. Chain reaction controlled in reactors with moderators (heavy water, graphite) and control rods (cadmium, boron).", "<b>Fusion:</b> light nuclei join, e.g. hydrogen to helium in the Sun (proton–proton cycle). Needs very high temperature (~10⁷ K), so it is called thermonuclear.", "Fusion releases more energy per unit mass than fission."]],
      ["tip", "Moderators slow neutrons down; control rods absorb them. Don't mix them up."],
    ]],
  ],
  rev: [
    "R = R₀A<sup>1/3</sup>; nuclear density is constant.",
    "1 u = 931.5 MeV.",
    "BE per nucleon peaks at Fe-56.",
    "α: Z − 2, A − 4; β⁻: Z + 1.",
    "T<sub>½</sub> = 0.693/λ; τ = 1.44 T<sub>½</sub>.",
    "Moderator slows neutrons; control rods absorb them.",
  ],
  mcq: [
    ["A radioactive sample has a half-life of 10 days. The fraction left after 30 days is:", ["1/3", "1/4", "1/8", "1/16"], 2, "3 half-lives: (½)³."],
    ["The radius of a nucleus is proportional to:", ["A", "A²", "A<sup>1/3</sup>", "A<sup>2/3</sup>"], 2, "R = R₀A<sup>1/3</sup>."],
    ["In β⁻ decay, the atomic number:", ["Decreases by 1", "Increases by 1", "Decreases by 2", "Stays the same"], 1, "A neutron turns into a proton."],
    ["Binding energy per nucleon is maximum for:", ["Hydrogen", "Helium", "Iron", "Uranium"], 2, "Fe-56 is the most stable nucleus."],
    ["Energy equivalent of 1 u is:", ["9.31 MeV", "931.5 MeV", "1.6 MeV", "0.511 MeV"], 1, "Standard conversion."],
    ["Which has the highest penetrating power?", ["α", "β", "γ", "All equal"], 2, "Gamma rays are uncharged photons."],
    ["Nuclear forces are:", ["Long range", "Charge dependent", "Short range and charge independent", "Weakest forces"], 2, "They act only over a few femtometres."],
    ["The mean life of a radioactive substance with decay constant λ is:", ["0.693/λ", "1/λ", "λ", "2λ"], 1, "τ = 1/λ."],
    ["The function of a moderator in a nuclear reactor is to:", ["Absorb neutrons", "Slow down neutrons", "Speed up neutrons", "Cool the reactor"], 1, "Slow neutrons cause fission of U-235 efficiently."],
    ["Isotopes have the same:", ["Mass number", "Neutron number", "Atomic number", "Mass"], 2, "Same Z, different N."],
    ["Energy of the Sun comes mainly from:", ["Fission", "Fusion of hydrogen into helium", "Chemical burning", "Radioactive decay"], 1, "Thermonuclear fusion."],
    ["After emitting one α and two β⁻ particles, the atomic number of a nucleus:", ["Decreases by 2", "Stays the same", "Increases by 2", "Decreases by 4"], 1, "−2 + 2 = 0."],
  ],
});
