NEET.ch("phy-ac", {
  intro: "RMS values · AC through R, L and C · Reactance and impedance · LCR series circuit · Resonance · Power factor · LC oscillations · Transformer",
  secs: [
    ["AC Voltage and RMS Values", [
      ["box", "Alternating current", ["v = V₀ sinωt, i = I₀ sin(ωt + φ)", "RMS: V<sub>rms</sub> = V₀/√2, I<sub>rms</sub> = I₀/√2", "Average over a full cycle = 0; over a half cycle = 2I₀/π"]],
      ["ul", ["Household 220 V is the rms value; peak is 220√2 ≈ 311 V.", "AC meters read rms values."]],
    ]],
    ["AC through R, L and C", [
      ["tbl", ["Element", "Opposition", "Phase of current vs voltage", "Power"], [
        ["Resistor R", "R", "In phase", "I²<sub>rms</sub>R"],
        ["Inductor L", "X<sub>L</sub> = ωL", "Lags by 90°", "0"],
        ["Capacitor C", "X<sub>C</sub> = 1/ωC", "Leads by 90°", "0"]]],
      ["ul", ["An inductor blocks high frequency (X<sub>L</sub> ∝ f); a capacitor blocks DC and low frequency (X<sub>C</sub> ∝ 1/f).", "Memory aid: <b>ELI the ICE man</b> — in L, E leads I; in C, I leads E."]],
      ["ex", "Find the reactance of a 1/π H inductor at 50 Hz.", "X<sub>L</sub> = 2π × 50 × (1/π) = <b>100 Ω</b>."],
    ]],
    ["Series LCR Circuit and Resonance", [
      ["box", "LCR circuit", ["Impedance Z = √(R² + (X<sub>L</sub> − X<sub>C</sub>)²)", "Phase: tanφ = (X<sub>L</sub> − X<sub>C</sub>)/R", "Resonance: X<sub>L</sub> = X<sub>C</sub>, ω₀ = 1/√(LC), f₀ = 1/2π√(LC)", "At resonance: Z = R (minimum), current maximum, φ = 0", "Quality factor Q = ω₀L/R = (1/R)√(L/C); bandwidth = R/L"]],
      ["ex", "R = 30 Ω, X<sub>L</sub> = 80 Ω, X<sub>C</sub> = 40 Ω are in series across 200 V rms. Find Z and I.", "Z = √(900 + 1600) = <b>50 Ω</b>; I = 200/50 = <b>4 A</b>."],
      ["ex", "Find the resonant frequency for L = 1 mH and C = 10 μF.", "ω₀ = 1/√(10⁻³ × 10⁻⁵) = 10⁴ rad/s; f₀ = 10⁴/2π ≈ <b>1.6 kHz</b>."],
      ["tip", "At resonance, voltages across L and C can each be much larger than the supply voltage, but they cancel."],
    ]],
    ["Power in AC Circuits", [
      ["box", "Power", ["P<sub>avg</sub> = V<sub>rms</sub>I<sub>rms</sub> cosφ", "Power factor cosφ = R/Z", "Pure L or C: cosφ = 0 (wattless current)", "Pure R or resonance: cosφ = 1"]],
      ["ex", "In the circuit above (Z = 50 Ω, R = 30 Ω), find the power factor and power.", "cosφ = 30/50 = <b>0.6</b>; P = 200 × 4 × 0.6 = <b>480 W</b>."],
    ]],
    ["LC Oscillations and Transformer", [
      ["box", "LC oscillations", ["Charge oscillates: q = q₀ cosωt, ω = 1/√(LC)", "Energy swaps between capacitor (electric) and inductor (magnetic)"]],
      ["box", "Transformer", ["V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub> = I<sub>p</sub>/I<sub>s</sub> (ideal)", "Step-up: N<sub>s</sub> > N<sub>p</sub>; voltage up, current down", "Works only with AC; based on mutual induction"]],
      ["ul", ["Losses: copper (I²R), eddy currents (laminated core), hysteresis (soft iron), flux leakage.", "Power is transmitted at high voltage to reduce I²R losses."]],
      ["ex", "A transformer steps 220 V to 11 V. The primary has 2000 turns. Find the secondary turns.", "N<sub>s</sub> = 2000 × 11/220 = <b>100</b>."],
    ]],
  ],
  rev: [
    "V<sub>rms</sub> = V₀/√2.",
    "X<sub>L</sub> = ωL; X<sub>C</sub> = 1/ωC.",
    "ELI the ICE man.",
    "Resonance: f₀ = 1/2π√(LC), Z = R, current maximum.",
    "Power factor = R/Z; pure L or C uses no power.",
    "Transformers need AC; V ∝ N.",
  ],
  mcq: [
    ["The rms value of an AC of peak 10 A is:", ["10 A", "7.07 A", "14.1 A", "5 A"], 1, "10/√2 ≈ 7.07 A."],
    ["In a purely inductive circuit, current:", ["Leads voltage by 90°", "Lags voltage by 90°", "Is in phase", "Lags by 180°"], 1, "ELI: voltage leads current in an inductor."],
    ["At resonance in a series LCR circuit, the impedance is:", ["Maximum", "Zero", "Equal to R", "Equal to X<sub>L</sub>"], 2, "X<sub>L</sub> = X<sub>C</sub> cancel."],
    ["The power factor of a purely capacitive circuit is:", ["1", "0", "0.5", "1/√2"], 1, "φ = 90°, cos 90° = 0."],
    ["Resonant frequency of an LC circuit is:", ["1/2π√(LC)", "2π√(LC)", "√(LC)/2π", "1/√(LC)"], 0, "f₀ = 1/2π√(LC)."],
    ["A capacitor in an AC circuit offers:", ["Infinite resistance to AC", "Lower reactance at higher frequency", "Higher reactance at higher frequency", "Zero reactance to DC"], 1, "X<sub>C</sub> = 1/ωC falls as frequency rises."],
    ["R = 6 Ω and X<sub>L</sub> = 8 Ω are in series. The impedance is:", ["14 Ω", "2 Ω", "10 Ω", "48 Ω"], 2, "√(36 + 64) = 10 Ω."],
    ["A transformer works on the principle of:", ["Self induction", "Mutual induction", "Eddy currents", "Electrostatic induction"], 1, "Changing primary flux induces EMF in the secondary."],
    ["A step-up transformer increases:", ["Current", "Voltage", "Power", "Frequency"], 1, "It raises voltage and lowers current; power stays the same (ideal)."],
    ["Wattless current flows in a circuit that is:", ["Purely resistive", "Purely inductive", "At resonance", "Mostly resistive"], 1, "P = VI cos90° = 0."],
    ["The peak value of 220 V rms mains is about:", ["220 V", "311 V", "156 V", "440 V"], 1, "220 × √2 ≈ 311 V."],
    ["If L and C both double, the resonant frequency becomes:", ["Double", "Half", "Four times", "Same"], 1, "f ∝ 1/√(LC) = 1/√4 = 1/2."],
  ],
});
