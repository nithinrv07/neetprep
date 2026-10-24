NEET.ch("phy-thermodynamics", {
  intro: "Zeroth and first law · Internal energy · Work in processes · Specific heats · Second law · Heat engines and refrigerators",
  secs: [
    ["Zeroth and First Law", [
      ["ul", ["<b>Zeroth law:</b> if A and B are each in thermal equilibrium with C, they are in equilibrium with each other. It defines temperature.", "<b>Internal energy U</b> is a state function; for an ideal gas it depends only on temperature."]],
      ["box", "First law (conservation of energy)", ["ΔQ = ΔU + ΔW", "ΔQ > 0: heat given to the system; ΔW > 0: work done by the system", "Work by a gas: W = ∫P dV = area under the P–V curve", "Cyclic process: ΔU = 0, so Q = W = area enclosed by the loop (clockwise → positive work)"]],
      ["ex", "A gas absorbs 500 J of heat and does 200 J of work. Find the change in internal energy.", "ΔU = 500 − 200 = <b>300 J</b>."],
    ]],
    ["Thermodynamic Processes", [
      ["tbl", ["Process", "Condition", "Equation", "Work done", "Key point"], [
        ["Isothermal", "T constant", "PV = const", "nRT ln(V₂/V₁)", "ΔU = 0, Q = W"],
        ["Adiabatic", "Q = 0", "PV<sup>γ</sup> = const", "(P₁V₁ − P₂V₂)/(γ − 1)", "W = −ΔU"],
        ["Isobaric", "P constant", "V/T = const", "PΔV = nRΔT", "Q = nC<sub>p</sub>ΔT"],
        ["Isochoric", "V constant", "P/T = const", "0", "Q = ΔU = nC<sub>v</sub>ΔT"]]],
      ["ul", ["On a P–V diagram, the adiabatic curve is steeper than the isothermal curve (slope ratio γ).", "Isothermal processes are slow (good thermal contact); adiabatic ones are fast or insulated.", "Adiabatic expansion cools a gas; adiabatic compression heats it (bicycle pump, diesel engine)."]],
      ["ex", "1 mole of ideal gas expands isobarically, its temperature rising by 10 K. Find the work done (R = 8.3 J/mol K).", "W = nRΔT = 1 × 8.3 × 10 = <b>83 J</b>."],
    ]],
    ["Specific Heats of Gases", [
      ["box", "Molar specific heats", ["Mayer's relation: C<sub>p</sub> − C<sub>v</sub> = R", "γ = C<sub>p</sub>/C<sub>v</sub>", "Monoatomic: C<sub>v</sub> = 3R/2, γ = 5/3", "Diatomic: C<sub>v</sub> = 5R/2, γ = 7/5", "Polyatomic (non-linear): C<sub>v</sub> = 3R, γ = 4/3"]],
      ["ex", "In an isobaric process on a diatomic gas, what fraction of the heat supplied does work?", "W/Q = nRΔT / nC<sub>p</sub>ΔT = R/(7R/2) = <b>2/7</b>; 5/7 goes into internal energy."],
    ]],
    ["Second Law and Heat Engines", [
      ["ul", ["<b>Kelvin–Planck:</b> no engine can convert all heat into work in a cycle.", "<b>Clausius:</b> heat cannot flow from a cold body to a hot body by itself.", "Reversible processes are ideal and quasi-static; all real processes are irreversible."]],
      ["box", "Engines and refrigerators", ["Engine efficiency η = W/Q₁ = 1 − Q₂/Q₁", "Carnot engine: η = 1 − T₂/T₁ (temperatures in kelvin)", "Refrigerator COP β = Q₂/W = T₂/(T₁ − T₂)", "Relation: β = (1 − η)/η"]],
      ["ul", ["A Carnot engine has two isothermal and two adiabatic steps.", "No engine working between two temperatures is more efficient than a Carnot engine.", "100% efficiency would need T₂ = 0 K, which is impossible."]],
      ["ex", "A Carnot engine works between 127 °C and 27 °C. Find its efficiency.", "η = 1 − 300/400 = <b>25%</b>."],
      ["ex", "A refrigerator keeps its inside at 0 °C in a room at 27 °C. Find its ideal COP.", "β = 273/(300 − 273) = 273/27 ≈ <b>10.1</b>."],
      ["tip", "Always convert to kelvin before using Carnot formulas. Using Celsius is the most common mistake."],
    ]],
  ],
  rev: [
    "ΔQ = ΔU + ΔW; U depends only on T for an ideal gas.",
    "Isothermal: ΔU = 0. Adiabatic: Q = 0. Isochoric: W = 0.",
    "Adiabatic curve is γ times steeper than isothermal.",
    "C<sub>p</sub> − C<sub>v</sub> = R; γ = 5/3, 7/5, 4/3.",
    "Carnot η = 1 − T₂/T₁ in kelvin.",
    "Cyclic process: net work = area enclosed.",
  ],
  mcq: [
    ["In an isothermal process for an ideal gas, the change in internal energy is:", ["Positive", "Negative", "Zero", "Equal to work"], 2, "U depends only on T, which is constant."],
    ["A Carnot engine works between 500 K and 300 K. Its efficiency is:", ["40%", "60%", "25%", "50%"], 0, "1 − 300/500 = 0.4."],
    ["For a monoatomic gas, γ is:", ["7/5", "5/3", "4/3", "9/7"], 1, "C<sub>p</sub>/C<sub>v</sub> = (5R/2)/(3R/2) = 5/3."],
    ["In an adiabatic process:", ["ΔU = 0", "Q = 0", "W = 0", "ΔT = 0"], 1, "No heat exchange with the surroundings."],
    ["A gas absorbs 300 J of heat and its internal energy increases by 100 J. The work done by the gas is:", ["400 J", "200 J", "100 J", "300 J"], 1, "W = Q − ΔU = 200 J."],
    ["The work done in an isochoric process is:", ["PΔV", "nRΔT", "Zero", "nC<sub>v</sub>ΔT"], 2, "Volume doesn't change."],
    ["Mayer's relation is:", ["C<sub>p</sub> + C<sub>v</sub> = R", "C<sub>p</sub> − C<sub>v</sub> = R", "C<sub>p</sub>/C<sub>v</sub> = R", "C<sub>p</sub>C<sub>v</sub> = R"], 1, "Difference of molar heats equals R."],
    ["The efficiency of a heat engine is 25%. The COP of a refrigerator working on the reverse cycle is:", ["3", "4", "0.75", "1.33"], 0, "β = (1 − η)/η = 0.75/0.25 = 3."],
    ["In a cyclic process, the net work done equals:", ["Zero always", "Area enclosed by the P–V loop", "Change in internal energy", "Heat rejected"], 1, "ΔU = 0 over a cycle, so Q = W = loop area."],
    ["Which law says heat cannot flow by itself from a colder to a hotter body?", ["Zeroth law", "First law", "Clausius statement of the second law", "Third law"], 2, "That is the Clausius statement."],
    ["When a gas is compressed adiabatically, its temperature:", ["Falls", "Rises", "Stays the same", "Becomes zero"], 1, "Work done on the gas raises its internal energy."],
    ["One mole of a gas is heated at constant pressure by 20 K. Work done by the gas is (R = 8.3 J/mol K):", ["83 J", "166 J", "332 J", "41.5 J"], 1, "W = nRΔT = 8.3 × 20 = 166 J."],
  ],
});
