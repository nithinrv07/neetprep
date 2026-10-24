NEET.ch("phy-current", {
  intro: "Current and drift velocity · Ohm's law · Resistivity · Combinations · EMF and internal resistance · Kirchhoff's laws · Wheatstone bridge · Meter bridge and potentiometer",
  secs: [
    ["Current, Drift Velocity and Ohm's Law", [
      ["box", "Basics", ["I = dq/dt (ampere)", "I = neAv<sub>d</sub>", "Ohm's law: V = IR", "R = ρL/A; conductivity σ = 1/ρ", "J = I/A = σE;  mobility μ = v<sub>d</sub>/E"]],
      ["ul", ["Drift velocity is tiny (~10⁻⁴ m/s), but the field travels at nearly light speed, so bulbs light instantly.", "Metals: ρ increases with T. Semiconductors: ρ decreases with T. Alloys (nichrome, manganin) change very little.", "Colour code: B B R O Y G B V G W = 0–9 (Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White); gold ±5%, silver ±10%."]],
      ["ex", "A wire is stretched to twice its length. Find its new resistance.", "Volume is constant: R ∝ L², so R' = <b>4R</b>."],
      ["ex", "A 1 m wire of area 1 mm² has ρ = 1.7 × 10⁻⁸ Ω m. Find R.", "R = 1.7 × 10⁻⁸ × 1/10⁻⁶ = <b>0.017 Ω</b>."],
    ]],
    ["Combinations of Resistors", [
      ["box", "Combinations", ["Series: R = R₁ + R₂ + … (same current)", "Parallel: 1/R = 1/R₁ + 1/R₂ + … (same voltage)", "Two in parallel: R₁R₂/(R₁ + R₂); n equal in parallel: R/n"]],
      ["ex", "A wire of resistance 12 Ω is bent into a circle. Find the resistance between two diametrically opposite points.", "Two 6 Ω halves in parallel: <b>3 Ω</b>."],
    ]],
    ["EMF, Internal Resistance and Cells", [
      ["box", "Cells", ["Terminal voltage: V = E − Ir (discharging); V = E + Ir (charging)", "Current: I = E/(R + r)", "n cells in series: I = nE/(R + nr)", "m cells in parallel: I = E/(R + r/m)", "Maximum power to load when R = r: P<sub>max</sub> = E²/4r"]],
      ["ex", "A 12 V battery with internal resistance 1 Ω is connected to a 5 Ω resistor. Find the current and terminal voltage.", "I = 12/6 = <b>2 A</b>; V = 12 − 2 × 1 = <b>10 V</b>."],
    ]],
    ["Kirchhoff's Laws and Wheatstone Bridge", [
      ["ul", ["<b>Junction rule</b> (conservation of charge): sum of currents in = sum out.", "<b>Loop rule</b> (conservation of energy): sum of potential changes around a loop = 0."]],
      ["box", "Wheatstone bridge", ["Balanced when P/Q = R/S", "At balance, no current flows through the galvanometer; the middle resistor can be removed"]],
      ["ex", "In a bridge P = 10 Ω, Q = 20 Ω, R = 15 Ω. Find S for balance.", "S = QR/P = 20 × 15/10 = <b>30 Ω</b>."],
    ]],
    ["Electrical Power, Meter Bridge and Potentiometer", [
      ["box", "Power and instruments", ["P = VI = I²R = V²/R; energy in kWh", "Meter bridge: X/R = l/(100 − l)", "Potentiometer: E₁/E₂ = l₁/l₂; internal resistance r = R(l₁ − l₂)/l₂"]],
      ["ul", ["Bulbs in series: the one with higher R (lower wattage rating) glows brighter.", "Bulbs in parallel: the one with lower R (higher wattage) glows brighter.", "A potentiometer measures EMF accurately because no current is drawn at balance. Its sensitivity increases with a longer wire."]],
      ["ex", "A 100 W, 220 V bulb. Find its resistance and current.", "R = V²/P = 48400/100 = <b>484 Ω</b>; I = P/V ≈ <b>0.45 A</b>."],
      ["tip", "In series, the lower-wattage bulb glows brighter. NEET loves this."],
    ]],
  ],
  rev: [
    "I = neAv<sub>d</sub>; v<sub>d</sub> is very small.",
    "Stretching to n times length: R becomes n²R.",
    "Metal ρ ↑ with T; semiconductor ρ ↓ with T.",
    "Maximum power transfer when R = r.",
    "Balanced bridge: P/Q = R/S, middle branch carries no current.",
    "Series bulbs: lower wattage glows brighter.",
  ],
  mcq: [
    ["A wire of resistance R is stretched to double its length. Its new resistance is:", ["R/2", "2R", "4R", "R/4"], 2, "R' = n²R = 4R."],
    ["Three 6 Ω resistors are in parallel. The equivalent resistance is:", ["18 Ω", "2 Ω", "3 Ω", "6 Ω"], 1, "6/3 = 2 Ω."],
    ["A cell of EMF 2 V and internal resistance 0.5 Ω is connected to 3.5 Ω. The current is:", ["0.5 A", "0.57 A", "4 A", "1 A"], 0, "I = 2/(3.5 + 0.5) = 0.5 A."],
    ["The resistance of a metal conductor with rise in temperature:", ["Decreases", "Increases", "Stays the same", "Becomes zero"], 1, "More lattice vibrations, more collisions."],
    ["In a balanced Wheatstone bridge, the current through the galvanometer is:", ["Maximum", "Zero", "Equal to the main current", "Half the main current"], 1, "Both ends are at the same potential."],
    ["Kirchhoff's junction rule is based on conservation of:", ["Energy", "Charge", "Momentum", "Mass"], 1, "Charge cannot pile up at a junction."],
    ["A 60 W and a 100 W bulb (both 220 V) are in series across 220 V. Which glows brighter?", ["60 W", "100 W", "Both equally", "Neither"], 0, "Same current; the 60 W bulb has larger R, so I²R is larger."],
    ["The resistance of a 220 V, 100 W bulb is:", ["220 Ω", "484 Ω", "2.2 Ω", "48.4 Ω"], 1, "V²/P = 48400/100."],
    ["Maximum power is delivered to an external resistor R from a cell of internal resistance r when:", ["R = 0", "R = r", "R = 2r", "R → ∞"], 1, "Maximum power transfer theorem."],
    ["The colour code of a 47 kΩ resistor's first three bands is:", ["Yellow Violet Orange", "Yellow Violet Red", "Orange Violet Yellow", "Violet Yellow Orange"], 0, "4 = Yellow, 7 = Violet, ×10³ = Orange."],
    ["A potentiometer is preferred over a voltmeter for measuring EMF because it:", ["Is cheaper", "Draws no current at balance", "Has low resistance", "Is portable"], 1, "At the null point, no current flows from the cell."],
    ["A 10 Ω wire is bent into a circle. The resistance between the ends of a diameter is:", ["10 Ω", "5 Ω", "2.5 Ω", "20 Ω"], 2, "Two 5 Ω halves in parallel = 2.5 Ω."],
  ],
});
