NEET.ch("phy-charges-fields", {
  intro: "Charge and its properties · Coulomb's law · Electric field · Field lines · Dipole · Flux and Gauss's law",
  given: "k = 1/4πε₀ = 9 × 10⁹ N m²/C², ε₀ = 8.85 × 10⁻¹² C²/N m², e = 1.6 × 10⁻¹⁹ C.",
  secs: [
    ["Electric Charge", [
      ["ul", ["Charge is <b>quantised</b>: q = ne.", "Charge is <b>conserved</b> and <b>additive</b> (scalar).", "Charging by friction transfers electrons; the body losing electrons becomes positive.", "Mass increases slightly when a body gains electrons."]],
      ["ex", "How many electrons make up a charge of −1 C?", "n = 1/1.6 × 10⁻¹⁹ = <b>6.25 × 10¹⁸</b>."],
    ]],
    ["Coulomb's Law", [
      ["box", "Coulomb's law", ["F = kq₁q₂ / r²", "In a medium of dielectric constant K: F<sub>m</sub> = F/K", "Superposition: net force = vector sum of individual forces"]],
      ["ex", "Two charges each of 1 μC are 1 m apart. Find the force.", "F = 9 × 10⁹ × 10⁻¹² / 1 = <b>9 × 10⁻³ N</b>."],
      ["ex", "Two identical spheres carry +6 μC and −2 μC. They are touched and separated to the same distance. Find the ratio of new to old force.", "Each gets (6 − 2)/2 = 2 μC. F'/F = (2 × 2)/(6 × 2) = <b>1/3</b>, and it becomes repulsive."],
      ["tip", "Touching identical spheres shares the total charge equally. Do the algebraic sum first."],
    ]],
    ["Electric Field and Field Lines", [
      ["box", "Electric field", ["E = F/q₀ (N/C or V/m)", "Point charge: E = kq/r²", "Force on a charge: F = qE (electron goes opposite to E)"]],
      ["ul", ["Field lines start on + and end on − charges; they never cross.", "Lines are closer where the field is stronger.", "They are perpendicular to a conductor's surface; there is no field inside a conductor in electrostatics."]],
      ["ex", "Find the field midway between +4 μC and +4 μC placed 2 m apart.", "Equal and opposite fields cancel: <b>E = 0</b>."],
    ]],
    ["Electric Dipole", [
      ["box", "Dipole (charges ±q separated by 2a)", [
        "Dipole moment p = q × 2a, from −q to +q (C m)",
        "Axial point (r ≫ a): E = 2kp/r³",
        "Equatorial point: E = kp/r³ (opposite to p)",
        "Torque in uniform E: τ = pE sinθ",
        "Potential energy: U = −pE cosθ",
        "Net force in a uniform field = 0"]],
      ["ul", ["E<sub>axial</sub> = 2 × E<sub>equatorial</sub> at the same distance.", "Stable equilibrium at θ = 0°, unstable at θ = 180°.", "Dipole field falls as 1/r³; point charge field as 1/r²."]],
      ["ex", "A dipole of moment 2 × 10⁻⁸ C m is at 30° to a field of 10⁵ N/C. Find the torque.", "τ = 2 × 10⁻⁸ × 10⁵ × 0.5 = <b>10⁻³ N m</b>."],
    ]],
    ["Electric Flux and Gauss's Law", [
      ["box", "Gauss's law", ["Flux Φ = E·A = EA cosθ", "Total flux through a closed surface = q<sub>enclosed</sub>/ε₀", "Charge outside contributes zero net flux"]],
      ["tbl", ["Charge distribution", "Field"], [["Infinite line (λ)", "E = λ/2πε₀r"], ["Infinite plane sheet (σ)", "E = σ/2ε₀ (independent of distance)"], ["Charged conductor surface", "E = σ/ε₀"], ["Spherical shell, outside", "E = kq/r²"], ["Spherical shell, inside", "0"]]],
      ["ex", "A charge q sits at the centre of a cube. Find the flux through one face.", "Total flux q/ε₀ splits equally over 6 faces: <b>q/6ε₀</b>."],
    ]],
  ],
  rev: [
    "Charge is quantised, conserved and additive.",
    "F reduces by K in a medium.",
    "Field lines never cross; E = 0 inside a conductor.",
    "Dipole: E<sub>axial</sub> = 2E<sub>equatorial</sub>; τ = pE sinθ; net force in uniform E = 0.",
    "Gauss: Φ = q<sub>in</sub>/ε₀.",
    "Infinite sheet field σ/2ε₀ doesn't depend on distance.",
  ],
  mcq: [
    ["The number of electrons in 1 C of charge is:", ["1.6 × 10¹⁹", "6.25 × 10¹⁸", "9 × 10⁹", "6.02 × 10²³"], 1, "1/1.6 × 10⁻¹⁹ = 6.25 × 10¹⁸."],
    ["If the distance between two charges is halved, the force becomes:", ["Half", "Double", "Four times", "One-fourth"], 2, "F ∝ 1/r²."],
    ["A charge q is at the centre of a cube. The flux through each face is:", ["q/ε₀", "q/6ε₀", "6q/ε₀", "Zero"], 1, "Symmetric: total q/ε₀ shared by 6 faces."],
    ["The torque on a dipole in a uniform electric field is maximum when the angle is:", ["0°", "45°", "90°", "180°"], 2, "τ = pE sinθ."],
    ["The net force on a dipole in a uniform electric field is:", ["pE", "2pE", "Zero", "pE sinθ"], 2, "Forces on ±q are equal and opposite."],
    ["The electric field due to an infinite plane sheet of charge density σ is:", ["σ/ε₀", "σ/2ε₀", "σ/4πε₀", "Depends on distance"], 1, "Gauss's law gives σ/2ε₀."],
    ["Inside a hollow charged conducting sphere, the electric field is:", ["Maximum", "Zero", "kq/r²", "kq/R²"], 1, "Charge resides on the outer surface; E = 0 inside."],
    ["The ratio of electric field at an axial point to that at an equatorial point at the same large distance from a short dipole is:", ["1 : 1", "2 : 1", "1 : 2", "4 : 1"], 1, "2kp/r³ : kp/r³."],
    ["Two charges of +3 μC and −1 μC on identical spheres are touched and separated. Each now has:", ["+2 μC", "+1 μC", "−1 μC", "+4 μC"], 1, "(3 − 1)/2 = +1 μC."],
    ["The SI unit of electric flux is:", ["N/C", "N m²/C", "C/m²", "V/m"], 1, "Φ = EA → (N/C)(m²)."],
    ["The force between two charges in water (K = 80) compared to air is:", ["80 times", "1/80 times", "Same", "√80 times"], 1, "F<sub>medium</sub> = F/K."],
    ["Electric field lines:", ["Can cross", "Form closed loops", "Never cross", "Exist inside conductors"], 2, "Field has a unique direction at each point."],
  ],
});
