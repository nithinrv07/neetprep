NEET.ch("phy-emi", {
  intro: "Magnetic flux · Faraday's laws · Lenz's law · Motional EMF · Eddy currents · Self and mutual inductance · Energy in an inductor",
  secs: [
    ["Flux and Faraday's Laws", [
      ["box", "Faraday's law", ["Flux Φ = B·A = BA cosθ (weber)", "Induced EMF: ε = −N dΦ/dt", "Induced charge: q = NΔΦ/R (doesn't depend on how fast)"]],
      ["p", "<b>Lenz's law:</b> the induced current opposes the change that causes it. The minus sign in Faraday's law expresses this; it follows from conservation of energy."],
      ["ex", "A coil of 100 turns has its flux changed from 0.05 Wb to 0.01 Wb in 0.1 s. Find the induced EMF.", "ε = 100 × 0.04/0.1 = <b>40 V</b>."],
      ["tip", "A magnet falling through a copper ring falls with acceleration less than g because the induced current opposes its motion."],
    ]],
    ["Motional EMF", [
      ["box", "Motional EMF", ["Rod moving ⊥ to B: ε = Bvl", "Rod rotating about one end: ε = ½Bωl²", "Disc rotating: ε = ½BωR²", "Force needed to keep a rod moving: F = B²l²v/R"]],
      ["ex", "A 0.5 m rod moves at 4 m/s perpendicular to a 0.2 T field. Find the EMF.", "ε = 0.2 × 4 × 0.5 = <b>0.4 V</b>."],
      ["ex", "A 1 m rod rotates at 10 rad/s about one end in B = 0.5 T. Find the EMF between its ends.", "ε = ½ × 0.5 × 10 × 1 = <b>2.5 V</b>."],
    ]],
    ["Eddy Currents", [
      ["ul", ["Eddy currents are loops of induced current in bulk conductors in changing flux. They cause heating and damping.", "Reduced by using laminated cores (transformers).", "Uses: electromagnetic braking in trains, induction furnaces, dead-beat galvanometers, speedometers."]],
    ]],
    ["Self and Mutual Inductance", [
      ["box", "Inductance", ["Self: Φ = LI, ε = −L dI/dt (henry)", "Solenoid: L = μ₀n²Al = μ₀N²A/l", "Mutual: Φ₂ = MI₁, ε₂ = −M dI₁/dt", "Coupled coils: M = k√(L₁L₂), k ≤ 1", "Energy stored: U = ½LI²", "Series (no coupling): L = L₁ + L₂; parallel: 1/L = 1/L₁ + 1/L₂"]],
      ["ul", ["Inductance is the electrical analogue of mass (inertia): it opposes change in current.", "L ∝ N²: doubling turns (same length, area) makes L four times."]],
      ["ex", "Current in a 2 H coil changes from 5 A to 1 A in 0.2 s. Find the self-induced EMF.", "ε = 2 × 4/0.2 = <b>40 V</b>."],
      ["ex", "Find the energy stored in a 0.5 H inductor carrying 4 A.", "U = ½ × 0.5 × 16 = <b>4 J</b>."],
    ]],
    ["AC Generator", [
      ["box", "Generator", ["ε = NBAω sinωt", "Peak EMF ε₀ = NBAω"]],
      ["p", "It converts mechanical energy into electrical energy using the rotation of a coil in a magnetic field."],
    ]],
  ],
  rev: [
    "ε = −N dΦ/dt; Lenz's law follows from energy conservation.",
    "Induced charge = NΔΦ/R.",
    "Rod: Bvl; rotating rod: ½Bωl².",
    "Laminated cores reduce eddy currents.",
    "U = ½LI²; L ∝ N².",
    "Generator peak EMF = NBAω.",
  ],
  mcq: [
    ["Lenz's law is a consequence of conservation of:", ["Charge", "Momentum", "Energy", "Mass"], 2, "Otherwise energy could be created by the induced current."],
    ["A rod of length 1 m moves at 5 m/s perpendicular to B = 0.4 T. The induced EMF is:", ["0.2 V", "2 V", "20 V", "1.25 V"], 1, "Bvl = 0.4 × 5 × 1 = 2 V."],
    ["The energy stored in an inductor of 2 H carrying 3 A is:", ["3 J", "6 J", "9 J", "18 J"], 2, "½ × 2 × 9 = 9 J."],
    ["Eddy currents are reduced in transformer cores by:", ["Using thick iron", "Laminating the core", "Increasing frequency", "Using copper"], 1, "Laminations break the current loops."],
    ["If the number of turns of a solenoid is doubled (same length and area), its self-inductance becomes:", ["Double", "Half", "Four times", "Same"], 2, "L ∝ N²."],
    ["The SI unit of inductance is:", ["Weber", "Tesla", "Henry", "Farad"], 2, "1 H = 1 Wb/A."],
    ["A magnet is dropped through a vertical copper ring. Its acceleration is:", ["g", "More than g", "Less than g", "Zero"], 2, "Induced currents oppose its motion."],
    ["The flux through a coil changes by 0.4 Wb in 0.2 s for 50 turns. The induced EMF is:", ["100 V", "10 V", "4 V", "40 V"], 0, "50 × 0.4/0.2 = 100 V."],
    ["The peak EMF of an AC generator is:", ["NBA", "NBAω", "BAω", "NBω"], 1, "ε₀ = NBAω."],
    ["The coefficient of coupling k between two coils satisfies:", ["k > 1", "k ≤ 1", "k = 2", "k < 0"], 1, "M = k√(L₁L₂) with 0 ≤ k ≤ 1."],
    ["Electromagnetic braking in trains uses:", ["Static friction", "Eddy currents", "Superconductivity", "Hysteresis"], 1, "Eddy currents oppose motion."],
    ["The current in a 0.5 H coil drops uniformly from 10 A to 0 in 0.1 s. The induced EMF is:", ["5 V", "50 V", "0.5 V", "500 V"], 1, "0.5 × 10/0.1 = 50 V."],
  ],
});
