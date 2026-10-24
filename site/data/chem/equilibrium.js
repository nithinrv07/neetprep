NEET.ch("chem-equilibrium", {
  intro: "Law of mass action · K<sub>c</sub> and K<sub>p</sub> · Le Chatelier's principle · Acids and bases · pH · Ionisation of weak acids · Buffers · Salt hydrolysis · Solubility product",
  given: "At 25 °C, K<sub>w</sub> = 1 × 10⁻¹⁴.",
  secs: [
    ["Chemical Equilibrium and K", [
      ["box", "Equilibrium constant", ["aA + bB ⇌ cC + dD:  K<sub>c</sub> = [C]<sup>c</sup>[D]<sup>d</sup> / [A]<sup>a</sup>[B]<sup>b</sup>", "K<sub>p</sub> = K<sub>c</sub>(RT)<sup>Δn</sup>", "Reverse reaction: K' = 1/K; equation × n: K' = Kⁿ", "Q < K → forward; Q > K → backward; Q = K → equilibrium"]],
      ["ul", ["Pure solids and liquids are left out of K.", "K changes only with temperature, not with concentration, pressure or catalyst.", "Equilibrium is dynamic: forward and reverse rates are equal."]],
      ["ex", "For N₂ + 3H₂ ⇌ 2NH₃, K = 64. Find K for NH₃ ⇌ ½N₂ + 3/2 H₂.", "Reverse and halve: K' = (1/64)<sup>1/2</sup> = <b>1/8</b>."],
    ]],
    ["Le Chatelier's Principle", [
      ["p", "If a system at equilibrium is disturbed, it shifts to reduce the effect of the change."],
      ["tbl", ["Change", "Effect"], [
        ["Add reactant / remove product", "Shifts forward"],
        ["Increase pressure", "Shifts to fewer gaseous moles"],
        ["Increase temperature", "Favours the endothermic direction (K changes)"],
        ["Add catalyst", "No shift; equilibrium reached faster"],
        ["Add inert gas at constant volume", "No shift"]]],
      ["ex", "In the Haber process (exothermic, 4 mol gas → 2 mol), what favours NH₃?", "<b>High pressure</b> and <b>low temperature</b> (a moderate 700 K is used for a good rate, with Fe catalyst)."],
    ]],
    ["Acids, Bases and pH", [
      ["ul", [
        "Arrhenius: acids give H⁺, bases give OH⁻ in water.",
        "Brønsted–Lowry: acids donate protons, bases accept them. Conjugate pairs differ by one H⁺. Stronger acid → weaker conjugate base.",
        "Lewis: acids accept an electron pair (BF₃, AlCl₃, Fe³⁺); bases donate one (NH₃, OH⁻).",
      ]],
      ["box", "pH relations (25 °C)", ["pH = −log[H⁺];  pH + pOH = 14", "K<sub>a</sub> × K<sub>b</sub> = K<sub>w</sub> for a conjugate pair", "Weak acid: α = √(K<sub>a</sub>/C), [H⁺] = √(K<sub>a</sub>C), pH = ½(pK<sub>a</sub> − log C)"]],
      ["ex", "Find the pH of 0.01 M NaOH.", "pOH = 2, so pH = <b>12</b>."],
      ["ex", "Find the pH of 0.1 M acetic acid (K<sub>a</sub> = 1.8 × 10⁻⁵).", "[H⁺] = √(1.8 × 10⁻⁶) ≈ 1.34 × 10⁻³ → pH ≈ <b>2.87</b>."],
      ["tip", "Very dilute acid: pH of 10⁻⁸ M HCl is not 8. Water's own H⁺ matters, so pH is just below 7 (about 6.98)."],
    ]],
    ["Buffers and Salt Hydrolysis", [
      ["box", "Buffers", ["Acidic buffer (weak acid + its salt): pH = pK<sub>a</sub> + log([salt]/[acid])", "Basic buffer: pOH = pK<sub>b</sub> + log([salt]/[base])", "Best buffering when [salt] = [acid], pH = pK<sub>a</sub>"]],
      ["tbl", ["Salt of", "Solution", "Example"], [["Strong acid + strong base", "Neutral, pH 7", "NaCl"], ["Weak acid + strong base", "Basic", "CH₃COONa"], ["Strong acid + weak base", "Acidic", "NH₄Cl"], ["Weak acid + weak base", "Depends on K<sub>a</sub> vs K<sub>b</sub>", "CH₃COONH₄ (≈ 7)"]]],
      ["ex", "A buffer has 0.1 M acetic acid and 0.1 M sodium acetate (pK<sub>a</sub> = 4.74). Find pH.", "log(1) = 0, so pH = <b>4.74</b>."],
    ]],
    ["Solubility Product", [
      ["box", "K<sub>sp</sub>", ["AB: K<sub>sp</sub> = s²;  AB₂: 4s³;  A₂B₃: 108s⁵", "Precipitation happens when ionic product > K<sub>sp</sub>", "Common ion effect lowers solubility"]],
      ["ex", "K<sub>sp</sub> of AgCl is 1.8 × 10⁻¹⁰. Find its solubility.", "s = √(1.8 × 10⁻¹⁰) ≈ <b>1.34 × 10⁻⁵ mol/L</b>."],
    ]],
  ],
  rev: [
    "K changes only with temperature.",
    "Catalyst doesn't shift equilibrium.",
    "Pressure ↑ → side with fewer gas moles.",
    "pH + pOH = 14; K<sub>a</sub>K<sub>b</sub> = K<sub>w</sub>.",
    "Buffer pH = pK<sub>a</sub> + log(salt/acid).",
    "NH₄Cl acidic; CH₃COONa basic.",
  ],
  mcq: [
    ["Adding a catalyst to a system at equilibrium:", ["Shifts it forward", "Shifts it backward", "Doesn't change the equilibrium position", "Changes K"], 2, "It speeds both directions equally."],
    ["The pH of 10⁻² M NaOH is:", ["2", "10", "12", "14"], 2, "pOH = 2 → pH = 12."],
    ["An aqueous solution of NH₄Cl is:", ["Neutral", "Acidic", "Basic", "Amphoteric"], 1, "Salt of strong acid and weak base."],
    ["BF₃ is a:", ["Lewis base", "Lewis acid", "Brønsted base", "Arrhenius base"], 1, "It accepts an electron pair."],
    ["The K<sub>sp</sub> expression for CaF₂ with solubility s is:", ["s²", "2s³", "4s³", "27s⁴"], 2, "[Ca²⁺][F⁻]² = s(2s)² = 4s³."],
    ["For an exothermic reaction, raising the temperature:", ["Increases K", "Decreases K", "Doesn't change K", "Makes K zero"], 1, "Equilibrium shifts backward."],
    ["The pH of a buffer with equal concentrations of weak acid and its salt equals:", ["7", "pK<sub>a</sub>", "pK<sub>b</sub>", "14 − pK<sub>a</sub>"], 1, "log(1) = 0."],
    ["The conjugate acid of NH₃ is:", ["NH₂⁻", "NH₄⁺", "N₂H₄", "NH₂OH"], 1, "Add one proton."],
    ["If K for A ⇌ B is 10, K for B ⇌ A is:", ["10", "0.1", "100", "1"], 1, "Reverse reaction: 1/K."],
    ["Solubility of AgCl in NaCl solution compared to water is:", ["Higher", "Lower", "Same", "Infinite"], 1, "Common ion effect."],
  ],
});
