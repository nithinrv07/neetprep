NEET.ch("phy-kinetic", {
  intro: "Ideal gas · Pressure from kinetic theory · Molecular speeds · Equipartition of energy · Degrees of freedom · Mean free path",
  secs: [
    ["Ideal Gas Equation", [
      ["box", "Ideal gas", ["PV = nRT = Nk<sub>B</sub>T", "R = 8.314 J/mol K, k<sub>B</sub> = R/N<sub>A</sub> = 1.38 × 10⁻²³ J/K", "Boyle: PV = const (T const); Charles: V ∝ T (P const)", "Dalton: total pressure = sum of partial pressures"]],
      ["ul", ["Real gases behave ideally at low pressure and high temperature.", "Avogadro's law: equal volumes at the same T and P contain equal numbers of molecules."]],
    ]],
    ["Kinetic Theory of Pressure", [
      ["box", "Pressure and temperature", ["P = ⅓ ρ v<sub>rms</sub>² = ⅓ (N/V) m v<sub>rms</sub>²", "Average KE per molecule = (3/2)k<sub>B</sub>T", "Pressure = ⅔ × KE per unit volume"]],
      ["p", "Temperature is a measure of the average translational kinetic energy of molecules. At absolute zero this would be zero (classically)."],
    ]],
    ["Molecular Speeds", [
      ["box", "Three speeds", ["v<sub>rms</sub> = √(3RT/M)", "v<sub>avg</sub> = √(8RT/πM)", "v<sub>mp</sub> = √(2RT/M)", "v<sub>rms</sub> > v<sub>avg</sub> > v<sub>mp</sub> (ratio √3 : √(8/π) : √2 ≈ 1.22 : 1.13 : 1)"]],
      ["ul", ["v<sub>rms</sub> ∝ √T and ∝ 1/√M.", "Hydrogen molecules move 4 times faster than oxygen at the same temperature (√32/√2 = 4)."]],
      ["ex", "At what temperature is the rms speed of a gas double its value at 27 °C?", "v ∝ √T: T = 4 × 300 = 1200 K = <b>927 °C</b>."],
      ["tip", "Always use kelvin. Doubling 27 °C to 54 °C does not double anything."],
    ]],
    ["Degrees of Freedom and Equipartition", [
      ["box", "Equipartition", ["Each degree of freedom gets ½k<sub>B</sub>T per molecule (½RT per mole)", "U = (f/2) nRT;  C<sub>v</sub> = (f/2)R;  γ = 1 + 2/f"]],
      ["tbl", ["Gas", "f (normal T)", "C<sub>v</sub>", "γ"], [["Monoatomic (He, Ar)", "3", "3R/2", "5/3 ≈ 1.67"], ["Diatomic (O₂, N₂)", "5", "5R/2", "7/5 = 1.4"], ["Diatomic with vibration", "7", "7R/2", "9/7"], ["Non-linear polyatomic", "6", "3R", "4/3"]]],
      ["ex", "Find γ for a mixture of 1 mole of He and 1 mole of O₂.", "C<sub>v</sub> = (1.5R + 2.5R)/2 = 2R; C<sub>p</sub> = 3R; γ = <b>1.5</b>."],
    ]],
    ["Mean Free Path", [
      ["box", "Mean free path", ["λ = 1 / (√2 π d² n), n = number per unit volume", "λ ∝ T/P at fixed d"]],
      ["p", "It is the average distance a molecule travels between collisions. It increases when the gas is less dense (lower pressure or higher temperature)."],
    ]],
  ],
  rev: [
    "P = ⅓ρv<sub>rms</sub>².",
    "Average KE per molecule = (3/2)k<sub>B</sub>T, independent of the gas.",
    "v<sub>rms</sub> > v<sub>avg</sub> > v<sub>mp</sub>; all ∝ √(T/M).",
    "Each degree of freedom: ½k<sub>B</sub>T.",
    "γ = 1 + 2/f.",
    "Mean free path ∝ 1/(nd²).",
  ],
  mcq: [
    ["The rms speed of gas molecules is proportional to:", ["T", "√T", "T²", "1/T"], 1, "v<sub>rms</sub> = √(3RT/M)."],
    ["The average kinetic energy of a gas molecule at temperature T is:", ["k<sub>B</sub>T/2", "k<sub>B</sub>T", "3k<sub>B</sub>T/2", "2k<sub>B</sub>T"], 2, "Three translational degrees of freedom × ½k<sub>B</sub>T."],
    ["The ratio of rms speeds of H₂ and O₂ at the same temperature is:", ["1 : 4", "4 : 1", "1 : 16", "16 : 1"], 1, "v ∝ 1/√M: √(32/2) = 4."],
    ["The degrees of freedom of a diatomic gas at room temperature are:", ["3", "5", "6", "7"], 1, "3 translational + 2 rotational."],
    ["For a gas with f degrees of freedom, γ equals:", ["1 + f/2", "1 + 2/f", "2/f", "f/2"], 1, "γ = C<sub>p</sub>/C<sub>v</sub> = (f + 2)/f."],
    ["The temperature at which rms speed of a gas becomes double its value at 0 °C is:", ["546 °C", "819 °C", "273 °C", "1092 °C"], 1, "T = 4 × 273 = 1092 K = 819 °C."],
    ["Pressure exerted by an ideal gas in terms of its density ρ is:", ["ρv²", "⅓ρv<sub>rms</sub>²", "½ρv²", "⅔ρv²"], 1, "Kinetic theory result."],
    ["The correct order of molecular speeds is:", ["v<sub>mp</sub> > v<sub>avg</sub> > v<sub>rms</sub>", "v<sub>rms</sub> > v<sub>avg</sub> > v<sub>mp</sub>", "v<sub>avg</sub> > v<sub>rms</sub> > v<sub>mp</sub>", "All equal"], 1, "√3 > √(8/π) > √2."],
    ["Mean free path of gas molecules increases when:", ["Pressure increases", "Number density increases", "Pressure decreases", "Molecular diameter increases"], 2, "λ ∝ 1/n, and n ∝ P at fixed T."],
    ["The internal energy of 1 mole of a monoatomic ideal gas is:", ["RT/2", "RT", "3RT/2", "5RT/2"], 2, "U = (3/2)RT."],
  ],
});
