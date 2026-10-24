NEET.ch("phy-moving-charges", {
  intro: "Lorentz force · Motion in a magnetic field · Cyclotron · Biot–Savart law · Ampere's law · Solenoid · Force between currents · Galvanometer",
  given: "μ₀ = 4π × 10⁻⁷ T m/A.",
  secs: [
    ["Force on a Moving Charge", [
      ["box", "Lorentz force", ["F = q(E + v × B)", "Magnetic part: F = qvB sinθ, perpendicular to both v and B", "Magnetic force does no work; speed and KE don't change"]],
      ["box", "Motion in a uniform B", ["v ⊥ B: circle with r = mv/qB", "Period T = 2πm/qB (independent of speed)", "v at angle θ: helix with pitch = v cosθ × T"]],
      ["ex", "A proton and an alpha particle enter the same field with the same speed. Compare radii.", "r ∝ m/q: proton 1/1, alpha 4/2 = 2. So r<sub>α</sub> = <b>2 r<sub>p</sub></b>."],
      ["tip", "Same KE: r = √(2mK)/qB ∝ √m/q. Same momentum: r ∝ 1/q."],
    ]],
    ["Cyclotron", [
      ["box", "Cyclotron", ["Frequency f = qB/2πm (independent of speed and radius)", "Maximum KE = q²B²R²/2m"]],
      ["p", "It accelerates charged particles (not neutrons) using a high-frequency field across the dees and a magnetic field that bends them."],
    ]],
    ["Biot–Savart Law and its Uses", [
      ["box", "Magnetic field of currents", ["dB = (μ₀/4π) I dl sinθ / r²", "Long straight wire: B = μ₀I/2πr", "Centre of a circular loop: B = μ₀I/2R (N turns: μ₀NI/2R)", "Axis of a loop: B = μ₀IR²/2(R² + x²)<sup>3/2</sup>", "Arc of angle θ at the centre: B = μ₀Iθ/4πR"]],
      ["ex", "Find B at the centre of a loop of radius 10 cm carrying 5 A.", "B = 4π × 10⁻⁷ × 5 / 0.2 = π × 10⁻⁵ ≈ <b>3.14 × 10⁻⁵ T</b>."],
    ]],
    ["Ampere's Law, Solenoid and Toroid", [
      ["box", "Ampere's circuital law", ["∮B·dl = μ₀I<sub>enclosed</sub>", "Long solenoid (inside): B = μ₀nI (n = turns per metre)", "At the end of a solenoid: B = μ₀nI/2", "Toroid: B = μ₀NI/2πr (zero outside)"]],
    ]],
    ["Force Between Currents and Torque on a Loop", [
      ["box", "Forces and torque", ["Force on a wire: F = I L × B = BIL sinθ", "Parallel wires: F/L = μ₀I₁I₂/2πd (attract if same direction)", "Torque on a coil: τ = NIAB sinθ; magnetic moment m = NIA"]],
      ["ul", ["1 ampere is defined from the force between two parallel wires 1 m apart: 2 × 10⁻⁷ N/m.", "Antiparallel currents repel."]],
    ]],
    ["Moving Coil Galvanometer, Ammeter and Voltmeter", [
      ["box", "Conversions", ["Galvanometer deflection: NIAB = kφ, so I ∝ φ (radial field)", "Current sensitivity = φ/I = NAB/k", "To ammeter: small shunt in parallel, S = I<sub>g</sub>G/(I − I<sub>g</sub>)", "To voltmeter: large resistance in series, R = V/I<sub>g</sub> − G"]],
      ["ul", ["An ideal ammeter has zero resistance; an ideal voltmeter has infinite resistance.", "Increasing current sensitivity doesn't always increase voltage sensitivity (if resistance rises too)."]],
      ["ex", "A galvanometer of 50 Ω gives full deflection at 1 mA. Find the series resistance to make a 10 V voltmeter.", "R = 10/0.001 − 50 = <b>9950 Ω</b>."],
    ]],
  ],
  rev: [
    "Magnetic force does no work.",
    "r = mv/qB; period doesn't depend on speed.",
    "Wire: μ₀I/2πr; loop centre: μ₀I/2R; solenoid: μ₀nI.",
    "Like currents attract; unlike repel.",
    "Ammeter: shunt in parallel; voltmeter: high resistance in series.",
    "Cyclotron frequency qB/2πm.",
  ],
  mcq: [
    ["A charged particle moves perpendicular to a uniform magnetic field. If its speed is doubled, the radius of its path:", ["Halves", "Doubles", "Becomes 4 times", "Stays the same"], 1, "r = mv/qB ∝ v."],
    ["The work done by a magnetic force on a moving charge is:", ["qvB", "Positive", "Negative", "Zero"], 3, "Force is always perpendicular to velocity."],
    ["The magnetic field at the centre of a circular loop of radius R carrying current I is:", ["μ₀I/2πR", "μ₀I/2R", "μ₀I/4R", "μ₀IR"], 1, "Biot–Savart result."],
    ["Two parallel wires carry currents in the same direction. They:", ["Attract", "Repel", "Don't interact", "Rotate"], 0, "Like currents attract."],
    ["A galvanometer is converted into an ammeter by connecting:", ["High resistance in series", "Low resistance in parallel", "High resistance in parallel", "Low resistance in series"], 1, "The shunt carries most of the current."],
    ["The magnetic field inside a long solenoid is:", ["Zero", "μ₀nI", "μ₀nI/2", "μ₀I/2πr"], 1, "Uniform field μ₀nI."],
    ["The time period of a charged particle in a uniform magnetic field:", ["Increases with speed", "Decreases with speed", "Is independent of speed", "Depends on radius"], 2, "T = 2πm/qB."],
    ["A cyclotron cannot accelerate:", ["Protons", "Deuterons", "Alpha particles", "Neutrons"], 3, "Neutrons are uncharged."],
    ["The magnetic field at 10 cm from a long wire carrying 10 A is:", ["2 × 10⁻⁵ T", "2 × 10⁻⁴ T", "10⁻⁵ T", "4π × 10⁻⁵ T"], 0, "μ₀I/2πr = 2 × 10⁻⁷ × 10/0.1 = 2 × 10⁻⁵ T."],
    ["An ideal voltmeter should have:", ["Zero resistance", "Infinite resistance", "Equal to circuit resistance", "Small resistance"], 1, "It must draw no current."],
    ["A proton and an electron enter a magnetic field with equal momentum. Their radii are in the ratio:", ["1 : 1", "1836 : 1", "1 : 1836", "√1836 : 1"], 0, "r = p/qB; same p and same |q|."],
    ["The torque on a coil of N turns, area A, current I in field B at angle θ (normal to B) is:", ["NIAB cosθ", "NIAB sinθ", "NIAB", "Zero"], 1, "τ = m × B = NIAB sinθ."],
  ],
});
