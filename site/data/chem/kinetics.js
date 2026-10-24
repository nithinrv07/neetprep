NEET.ch("chem-kinetics", {
  intro: "Rate of reaction · Rate law and order · Molecularity · Integrated rate equations · Half-life · Pseudo first order · Arrhenius equation · Collision theory · Catalysts",
  secs: [
    ["Rate of Reaction", [
      ["box", "Rate", ["For aA + bB → cC: rate = −(1/a) d[A]/dt = (1/c) d[C]/dt", "Average rate = Δ[ ]/Δt; instantaneous rate = slope of the tangent"]],
      ["ul", ["Factors: concentration, temperature, catalyst, surface area, nature of reactants, light (photochemical)."]],
      ["ex", "For 2N₂O₅ → 4NO₂ + O₂, if −d[N₂O₅]/dt = 0.02 M/s, find d[NO₂]/dt.", "Rate = ½(0.02) = 0.01; d[NO₂]/dt = 4 × 0.01 = <b>0.04 M/s</b>."],
    ]],
    ["Rate Law, Order and Molecularity", [
      ["box", "Rate law", ["Rate = k[A]<sup>x</sup>[B]<sup>y</sup>; order = x + y (found by experiment)", "Units of k: (mol/L)<sup>1−n</sup> s⁻¹ → zero: mol L⁻¹ s⁻¹; first: s⁻¹; second: L mol⁻¹ s⁻¹"]],
      ["tbl", ["Order", "Molecularity"], [
        ["Experimental", "Theoretical (from the elementary step)"],
        ["Can be 0, fraction or negative", "Always a whole number (1, 2, 3)"],
        ["Applies to the overall reaction", "Applies to elementary steps only"]]],
      ["ul", ["The slowest step decides the rate (rate-determining step).", "<b>Pseudo first order:</b> one reactant in large excess, e.g. acid hydrolysis of ester or inversion of cane sugar."]],
      ["ex", "Doubling [A] makes the rate 4 times. What is the order in A?", "2ˣ = 4 → <b>second order</b>."],
    ]],
    ["Integrated Rate Equations", [
      ["tbl", ["", "Zero order", "First order"], [
        ["Integrated form", "[A] = [A]₀ − kt", "k = (2.303/t) log([A]₀/[A])"],
        ["Half-life", "t½ = [A]₀/2k (∝ [A]₀)", "t½ = 0.693/k (independent of [A]₀)"],
        ["Linear plot", "[A] vs t (slope −k)", "log[A] vs t (slope −k/2.303)"],
        ["Examples", "Decomposition of NH₃ on hot Pt; photochemical H₂ + Cl₂", "Radioactive decay; N₂O₅ decomposition"]]],
      ["box", "First-order shortcuts", ["t<sub>75%</sub> = 2 t½;  t<sub>87.5%</sub> = 3 t½", "t<sub>99%</sub> ≈ 6.64 t½;  t<sub>99.9%</sub> ≈ 10 t½", "Amount left after n half-lives = [A]₀/2ⁿ"]],
      ["ex", "A first-order reaction is 50% complete in 30 min. How long for 87.5%?", "87.5% = 3 half-lives → <b>90 min</b>."],
    ]],
    ["Temperature and Arrhenius Equation", [
      ["box", "Arrhenius", ["k = A e<sup>−Ea/RT</sup>", "log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂)", "Plot ln k vs 1/T: slope = −Ea/R", "Rate roughly doubles for every 10 °C rise (temperature coefficient ≈ 2–3)"]],
      ["ul", ["Collision theory: only collisions with energy ≥ threshold and proper orientation are effective.", "A catalyst lowers activation energy by giving an alternate path; it does not change ΔH, ΔG or the equilibrium constant."]],
      ["ex", "Rate doubles from 300 K to 310 K. Estimate Ea.", "log 2 = Ea/(2.303 × 8.314) × (10/(300 × 310)) → Ea ≈ <b>53.6 kJ/mol</b>."],
    ]],
  ],
  rev: [
    "Order is experimental; molecularity is theoretical and whole-number.",
    "k units tell the order.",
    "First-order t½ = 0.693/k, independent of concentration.",
    "Zero-order t½ ∝ [A]₀.",
    "99.9% completion ≈ 10 half-lives.",
    "Catalysts lower Ea but don't change ΔH or K.",
  ],
  mcq: [
    ["The unit of rate constant for a first-order reaction is:", ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"], 1, "(mol/L)⁰ s⁻¹."],
    ["The half-life of a zero-order reaction is:", ["Independent of [A]₀", "Proportional to [A]₀", "Inversely proportional to [A]₀", "Proportional to [A]₀²"], 1, "t½ = [A]₀/2k."],
    ["Inversion of cane sugar is an example of:", ["Zero order", "Pseudo first order", "Second order", "Third order"], 1, "Water is in large excess."],
    ["Molecularity of a reaction can be:", ["Zero", "Fractional", "A whole number", "Negative"], 2, "It counts molecules in an elementary step."],
    ["A catalyst increases the rate by:", ["Increasing ΔH", "Lowering activation energy", "Increasing equilibrium constant", "Increasing temperature"], 1, "Alternate pathway with lower Ea."],
    ["A first-order reaction has k = 0.693 min⁻¹. Its half-life is:", ["1 min", "0.693 min", "10 min", "0.1 min"], 0, "0.693/0.693."],
    ["The slope of a ln k vs 1/T plot is:", ["Ea/R", "−Ea/R", "−Ea/2.303R", "A"], 1, "ln k = ln A − Ea/RT."],
    ["Time for 75% completion of a first-order reaction equals:", ["t½", "2 t½", "3 t½", "1.5 t½"], 1, "Two half-lives: 100 → 50 → 25."],
    ["If rate = k[A]²[B] and [A] is doubled, the rate becomes:", ["2 times", "4 times", "8 times", "Same"], 1, "2² = 4."],
    ["Radioactive decay follows:", ["Zero-order kinetics", "First-order kinetics", "Second-order kinetics", "Third-order kinetics"], 1, "Rate ∝ number of nuclei."],
  ],
});
