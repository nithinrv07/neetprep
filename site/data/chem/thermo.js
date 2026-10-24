NEET.ch("chem-thermo", {
  intro: "System and surroundings · State functions · First law · Enthalpy · Hess's law · Enthalpies of reaction · Entropy · Gibbs energy and spontaneity",
  given: "R = 8.314 J/mol K. Sign convention (NCERT): work done on the system is positive.",
  secs: [
    ["Basic Terms", [
      ["ul", [
        "<b>Open</b> system exchanges matter and energy; <b>closed</b> only energy; <b>isolated</b> neither.",
        "<b>State functions</b> depend only on the state: U, H, S, G, P, V, T. <b>Path functions</b>: q and w.",
        "<b>Extensive</b> properties depend on amount (mass, volume, U, H, S); <b>intensive</b> don't (T, P, density, molar quantities).",
      ]],
    ]],
    ["First Law and Enthalpy", [
      ["box", "First law (NCERT convention)", ["ΔU = q + w", "Expansion against constant pressure: w = −P<sub>ext</sub>ΔV", "Free expansion (P<sub>ext</sub> = 0): w = 0", "Reversible isothermal: w = −2.303 nRT log(V₂/V₁)", "ΔH = ΔU + Δn<sub>g</sub>RT;  q<sub>p</sub> = ΔH, q<sub>v</sub> = ΔU"]],
      ["ul", ["For an ideal gas in an isothermal process, ΔU = 0.", "C<sub>p</sub> − C<sub>v</sub> = R; ΔH = nC<sub>p</sub>ΔT; ΔU = nC<sub>v</sub>ΔT."]],
      ["ex", "For C(s) + O₂(g) → CO₂(g), compare ΔH and ΔU.", "Δn<sub>g</sub> = 1 − 1 = 0, so <b>ΔH = ΔU</b>."],
      ["ex", "A gas expands from 1 L to 5 L against 2 atm. Find the work.", "w = −2 × 4 = <b>−8 L atm</b> ≈ −810 J (work done by the system)."],
    ]],
    ["Enthalpies of Reaction and Hess's Law", [
      ["tbl", ["Enthalpy", "Meaning"], [
        ["Formation Δ<sub>f</sub>H°", "1 mol of compound from elements in standard states (elements = 0)"],
        ["Combustion Δ<sub>c</sub>H°", "Complete burning of 1 mol in O₂ (always negative)"],
        ["Atomisation", "Breaking 1 mol of substance into gaseous atoms"],
        ["Neutralisation", "Strong acid + strong base: −57.1 kJ per mol of water"],
        ["Bond enthalpy", "Breaking 1 mol of bonds in the gas phase"]]],
      ["box", "Calculations", ["Δ<sub>r</sub>H = ΣΔ<sub>f</sub>H(products) − ΣΔ<sub>f</sub>H(reactants)", "Δ<sub>r</sub>H = Σ bond energies (reactants) − Σ bond energies (products)", "Hess's law: total ΔH is the same whatever the path"]],
      ["ex", "Δ<sub>f</sub>H of CO₂ = −393.5 and of CO = −110.5 kJ/mol. Find ΔH for CO + ½O₂ → CO₂.", "ΔH = −393.5 − (−110.5) = <b>−283 kJ/mol</b>."],
      ["tip", "Weak acid or weak base neutralisation releases less than 57.1 kJ, because some energy is used to ionise the weak electrolyte."],
    ]],
    ["Entropy and Gibbs Energy", [
      ["box", "Spontaneity", ["ΔS = q<sub>rev</sub>/T;  ΔS<sub>total</sub> > 0 for spontaneous change", "ΔG = ΔH − TΔS", "ΔG < 0 spontaneous; ΔG = 0 equilibrium; ΔG > 0 non-spontaneous", "ΔG° = −2.303 RT log K = −nFE°"]],
      ["tbl", ["ΔH", "ΔS", "Spontaneous?"], [["−", "+", "Always"], ["+", "−", "Never"], ["−", "−", "At low T"], ["+", "+", "At high T"]]],
      ["ul", ["Entropy increases: solid → liquid → gas, dissolving, increase in gaseous moles, rising temperature.", "Third law: entropy of a perfect crystal at 0 K is zero."]],
      ["ex", "For a reaction, ΔH = +40 kJ/mol and ΔS = +100 J/mol K. Above what temperature is it spontaneous?", "T > ΔH/ΔS = 40000/100 = <b>400 K</b>."],
    ]],
  ],
  rev: [
    "U, H, S, G are state functions; q and w are not.",
    "ΔH = ΔU + Δn<sub>g</sub>RT.",
    "Δ<sub>f</sub>H of elements in standard states = 0.",
    "Strong acid–strong base neutralisation: −57.1 kJ/mol.",
    "ΔG = ΔH − TΔS; negative means spontaneous.",
    "Endothermic + entropy increase: spontaneous at high T.",
  ],
  mcq: [
    ["Which is not a state function?", ["Enthalpy", "Entropy", "Work", "Internal energy"], 2, "Work depends on the path."],
    ["For an isolated system, ΔU is:", ["Positive", "Negative", "Zero", "Depends on the process"], 2, "No exchange of heat or work."],
    ["A reaction with ΔH > 0 and ΔS > 0 is spontaneous:", ["At all temperatures", "At high temperatures", "At low temperatures", "Never"], 1, "TΔS must outweigh ΔH."],
    ["The enthalpy of neutralisation of HCl with NaOH is about:", ["−57.1 kJ/mol", "−13.7 kJ/mol", "+57.1 kJ/mol", "−100 kJ/mol"], 0, "H⁺ + OH⁻ → H₂O."],
    ["The standard enthalpy of formation of O₂(g) is:", ["−393 kJ/mol", "Zero", "+249 kJ/mol", "−286 kJ/mol"], 1, "Elements in standard states have Δ<sub>f</sub>H° = 0."],
    ["Which is an intensive property?", ["Volume", "Mass", "Temperature", "Enthalpy"], 2, "It doesn't depend on amount."],
    ["Entropy decreases when:", ["Ice melts", "Water evaporates", "A gas condenses", "Salt dissolves"], 2, "Gas → liquid is more ordered."],
    ["At equilibrium, ΔG equals:", ["Positive", "Negative", "Zero", "ΔH"], 2, "No net driving force."],
    ["Hess's law is based on:", ["Conservation of mass", "Enthalpy being a state function", "Second law", "Third law"], 1, "ΔH depends only on initial and final states."],
    ["For H₂(g) + I₂(g) → 2HI(g), ΔH − ΔU is:", ["RT", "2RT", "Zero", "−RT"], 2, "Δn<sub>g</sub> = 2 − 2 = 0."],
  ],
});
