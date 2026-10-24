NEET.ch("phy-atoms", {
  intro: "Rutherford's alpha scattering · Nuclear model · Bohr model · Energy levels · Hydrogen spectrum · de Broglie explanation",
  secs: [
    ["Rutherford's Alpha-Particle Scattering", [
      ["ul", ["Most α-particles passed straight through gold foil: the atom is mostly empty space.", "A few were deflected through large angles (about 1 in 8000 by more than 90°): positive charge and most of the mass are in a tiny nucleus.", "Nuclear size ~10⁻¹⁵ m; atomic size ~10⁻¹⁰ m."]],
      ["box", "Scattering", ["Number scattered N(θ) ∝ 1/sin⁴(θ/2)", "Distance of closest approach r₀ = 2kZe² / K (K = KE of α)", "Impact parameter b ∝ cot(θ/2); b = 0 for head-on (θ = 180°)"]],
      ["p", "Drawback: an orbiting electron should radiate energy and spiral into the nucleus, and the atom should give a continuous spectrum. Neither happens."],
    ]],
    ["Bohr Model of Hydrogen", [
      ["ul", ["Electrons move in certain stationary orbits without radiating.", "Angular momentum is quantised: mvr = nh/2π.", "Energy is emitted or absorbed only on jumping between orbits: hν = E<sub>i</sub> − E<sub>f</sub>."]],
      ["box", "Bohr results (hydrogen-like atom, atomic number Z)", ["Radius r<sub>n</sub> = 0.529 n²/Z Å", "Speed v<sub>n</sub> = 2.18 × 10⁶ Z/n m/s (∝ Z/n)", "Energy E<sub>n</sub> = −13.6 Z²/n² eV", "KE = −E, PE = 2E", "Frequency of revolution ∝ Z²/n³; period ∝ n³/Z²"]],
      ["ex", "Find the energy needed to ionise He⁺ from its ground state.", "E = 13.6 × 4/1 = <b>54.4 eV</b>."],
      ["ex", "Find the radius of the 3rd orbit of hydrogen.", "r = 0.529 × 9 = <b>4.76 Å</b>."],
      ["tip", "Ionisation energy of H = 13.6 eV; first excitation energy = 10.2 eV (n = 1 → 2)."],
    ]],
    ["Hydrogen Spectrum", [
      ["box", "Rydberg formula", ["1/λ = RZ²(1/n₁² − 1/n₂²), R = 1.097 × 10⁷ m⁻¹", "Lines from level n to ground: n(n − 1)/2"]],
      ["tbl", ["Series", "Lower level n₁", "Region"], [["Lyman", "1", "Ultraviolet"], ["Balmer", "2", "Visible"], ["Paschen", "3", "Infrared"], ["Brackett", "4", "Infrared"], ["Pfund", "5", "Infrared"]]],
      ["ul", ["Shortest λ of a series: n₂ = ∞ (series limit). Longest λ: n₂ = n₁ + 1.", "Lyman series limit = 91.2 nm; Balmer limit = 364.6 nm."]],
      ["ex", "Find the ratio of the longest wavelengths of the Lyman and Balmer series.", "Lyman: 1/λ = R(1 − 1/4) = 3R/4. Balmer: R(1/4 − 1/9) = 5R/36. λ<sub>L</sub>/λ<sub>B</sub> = (5/36)/(3/4) = <b>5/27</b>."],
    ]],
    ["de Broglie's Explanation of Bohr's Postulate", [
      ["box", "Standing waves", ["2πr<sub>n</sub> = nλ", "Only orbits whose circumference fits a whole number of electron wavelengths are allowed"]],
      ["p", "This gives mvr = nh/2π directly, explaining Bohr's quantisation. The Bohr model works only for one-electron systems (H, He⁺, Li²⁺)."],
    ]],
  ],
  rev: [
    "Most α-particles pass straight; atom is mostly empty.",
    "r ∝ n²/Z; v ∝ Z/n; E ∝ −Z²/n².",
    "KE = −E, PE = 2E.",
    "Lyman UV, Balmer visible, rest IR.",
    "Lines from n to ground: n(n − 1)/2.",
    "2πr = nλ explains quantisation.",
  ],
  mcq: [
    ["The energy needed to remove the electron from He⁺ in its ground state is:", ["13.6 eV", "27.2 eV", "54.4 eV", "3.4 eV"], 2, "13.6 × Z² = 54.4 eV."],
    ["The Balmer series of hydrogen lies in the:", ["UV region", "Visible region", "Infrared region", "X-ray region"], 1, "Transitions ending at n = 2."],
    ["The radius of the nth Bohr orbit is proportional to:", ["n", "n²", "1/n", "1/n²"], 1, "r = 0.529 n²/Z Å."],
    ["In a Bohr orbit, the ratio of kinetic energy to total energy is:", ["1", "−1", "2", "−2"], 1, "KE = −E."],
    ["Rutherford's experiment showed that:", ["Electrons are in shells", "Positive charge is concentrated in a tiny nucleus", "Atoms are indivisible", "Energy is quantised"], 1, "Large-angle scattering needs a small, massive, positive nucleus."],
    ["The number of spectral lines when an electron falls from n = 4 to the ground state is:", ["3", "4", "6", "10"], 2, "4 × 3/2 = 6."],
    ["The speed of an electron in a Bohr orbit is proportional to:", ["n", "1/n", "n²", "1/n²"], 1, "v ∝ Z/n."],
    ["The energy of hydrogen's electron in the n = 2 state is:", ["−13.6 eV", "−3.4 eV", "−1.51 eV", "−6.8 eV"], 1, "−13.6/4 = −3.4 eV."],
    ["Bohr's quantisation condition is:", ["mvr = nh", "mvr = nh/2π", "mv = nh/r", "E = nhν"], 1, "Angular momentum = nh/2π."],
    ["The first excitation energy of hydrogen is:", ["13.6 eV", "3.4 eV", "10.2 eV", "12.1 eV"], 2, "−3.4 − (−13.6) = 10.2 eV."],
    ["The Lyman series is obtained when electrons fall to:", ["n = 1", "n = 2", "n = 3", "n = ∞"], 0, "Lyman ends on the ground state."],
    ["The Bohr model works for:", ["All atoms", "Only hydrogen and hydrogen-like ions", "Only noble gases", "Only metals"], 1, "It fails for multi-electron atoms."],
  ],
});
