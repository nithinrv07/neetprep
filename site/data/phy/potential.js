NEET.ch("phy-potential", {
  intro: "Electric potential · Equipotential surfaces · Potential energy · Conductors · Capacitors · Combinations · Dielectrics · Energy stored",
  given: "k = 9 × 10⁹ N m²/C², ε₀ = 8.85 × 10⁻¹² F/m.",
  secs: [
    ["Electric Potential", [
      ["box", "Potential", ["V = W/q₀ (volt = J/C)", "Point charge: V = kq/r (scalar)", "E = −dV/dr; in a uniform field V = Ed", "Dipole: V = kp cosθ / r²; zero on the equatorial line"]],
      ["ul", ["Potential is a scalar: just add algebraically.", "Positive charges move from high to low potential; electrons move from low to high.", "1 eV = 1.6 × 10⁻¹⁹ J (energy gained by an electron through 1 V)."]],
      ["ex", "Charges +2 μC and −2 μC are 2 m apart. Find the potential at the midpoint.", "V = k(2 − 2)μC/1 = <b>0</b> (but E there is not zero)."],
    ]],
    ["Equipotential Surfaces and Potential Energy", [
      ["ul", ["No work is done moving a charge along an equipotential surface.", "E is always perpendicular to equipotential surfaces.", "Point charge: concentric spheres. Uniform field: parallel planes ⊥ to E."]],
      ["box", "Potential energy", ["Two charges: U = kq₁q₂/r", "System of charges: sum over every pair", "Work = qΔV"]],
      ["ex", "Find the work to bring three charges of 1 μC each from infinity to the corners of an equilateral triangle of side 1 m.", "Three pairs: U = 3 × 9 × 10⁹ × 10⁻¹² = <b>2.7 × 10⁻² J</b>."],
    ]],
    ["Conductors in Electrostatics", [
      ["ul", ["E = 0 inside a conductor; the whole conductor is at one potential.", "Charge sits on the outer surface, more where curvature is greater (sharp points). This is why lightning conductors are pointed.", "A hollow conductor shields its inside from external fields (electrostatic shielding, Faraday cage)."]],
    ]],
    ["Capacitors and their Combinations", [
      ["box", "Capacitance", ["C = Q/V (farad)", "Parallel plate: C = ε₀A/d; with dielectric K: C = Kε₀A/d", "Isolated sphere: C = 4πε₀R", "Series: 1/C = 1/C₁ + 1/C₂ (same Q)", "Parallel: C = C₁ + C₂ (same V)"]],
      ["ex", "Capacitors of 2 μF, 3 μF and 6 μF are in series. Find the equivalent.", "1/C = 1/2 + 1/3 + 1/6 = 1 → <b>C = 1 μF</b>."],
      ["ex", "A slab of thickness t and dielectric K partly fills a capacitor gap d. Find C.", "C = ε₀A / (d − t + t/K). With a metal slab (K → ∞): C = ε₀A/(d − t)."],
    ]],
    ["Energy Stored and Dielectrics", [
      ["box", "Energy", ["U = ½CV² = Q²/2C = ½QV", "Energy density u = ½ε₀E²", "Connecting two capacitors: common V = (C₁V₁ + C₂V₂)/(C₁ + C₂); energy is always lost"]],
      ["tbl", ["Dielectric inserted…", "Battery connected (V fixed)", "Battery removed (Q fixed)"], [["C", "×K", "×K"], ["Q", "×K", "same"], ["V", "same", "÷K"], ["E", "same", "÷K"], ["U", "×K", "÷K"]]],
      ["ex", "A 10 μF capacitor is charged to 100 V. Find the energy stored.", "U = ½ × 10⁻⁵ × 10⁴ = <b>0.05 J</b>."],
      ["tip", "Decide first whether the battery stays connected. That one fact decides which quantity stays constant."],
    ]],
  ],
  rev: [
    "V = kq/r is a scalar; E = −dV/dr.",
    "E ⊥ equipotential surfaces; no work along them.",
    "Charge crowds at sharp points of a conductor.",
    "C = Kε₀A/d; series → same Q, parallel → same V.",
    "U = ½CV² = Q²/2C.",
    "Battery connected: V constant. Battery removed: Q constant.",
  ],
  mcq: [
    ["Capacitors of 2 μF and 3 μF are connected in series. The equivalent capacitance is:", ["5 μF", "1.2 μF", "6 μF", "0.83 μF"], 1, "C = 6/5 = 1.2 μF."],
    ["The energy stored in a capacitor of capacitance C at potential V is:", ["CV", "½CV²", "CV²", "½C²V"], 1, "U = ½CV²."],
    ["The electric potential at the midpoint between equal and opposite charges is:", ["Maximum", "Zero", "Infinite", "kq/r"], 1, "Contributions cancel since potential is a scalar."],
    ["A dielectric (K) is inserted in a charged capacitor after disconnecting the battery. The energy stored:", ["Increases K times", "Decreases K times", "Stays the same", "Becomes zero"], 1, "Q fixed, C → KC, U = Q²/2C falls by K."],
    ["The work done in moving a charge along an equipotential surface is:", ["Maximum", "Positive", "Zero", "Negative"], 2, "ΔV = 0 so W = qΔV = 0."],
    ["Capacitance of a parallel-plate capacitor depends on:", ["Charge", "Potential difference", "Area and plate separation", "Battery used"], 2, "C = ε₀A/d."],
    ["Three 3 μF capacitors are in parallel. The equivalent capacitance is:", ["1 μF", "3 μF", "9 μF", "6 μF"], 2, "C = 3 + 3 + 3 = 9 μF."],
    ["The electric field inside a charged conductor is:", ["Maximum", "Zero", "σ/ε₀", "Uniform but non-zero"], 1, "Electrostatic shielding."],
    ["A 4 μF capacitor is charged to 50 V. The charge on it is:", ["200 μC", "12.5 μC", "0.08 μC", "54 μC"], 0, "Q = CV = 4 × 50 = 200 μC."],
    ["An electron is accelerated through 100 V. Its kinetic energy is:", ["100 J", "100 eV", "1.6 × 10⁻¹⁹ J", "10 eV"], 1, "KE = eV = 100 eV."],
    ["Two charged spheres are connected by a wire. Charge flows until they have equal:", ["Charge", "Potential", "Capacitance", "Charge density"], 1, "Charge flows until there's no potential difference."],
    ["The energy density of an electric field E in vacuum is:", ["ε₀E", "½ε₀E²", "ε₀E²", "E²/2ε₀"], 1, "u = ½ε₀E²."],
  ],
});
