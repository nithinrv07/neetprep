NEET.ch("chem-atom", {
  intro: "Subatomic particles · Atomic models · Electromagnetic radiation · Bohr model · Dual nature · Uncertainty principle · Quantum numbers · Orbitals · Electronic configuration",
  given: "h = 6.626 × 10⁻³⁴ J s, c = 3 × 10⁸ m/s, R<sub>H</sub> = 1.097 × 10⁷ m⁻¹.",
  secs: [
    ["Subatomic Particles and Early Models", [
      ["ul", [
        "Electron discovered by J.J. Thomson (cathode rays), charge measured by Millikan (oil drop): e = 1.6 × 10⁻¹⁹ C, m = 9.1 × 10⁻³¹ kg.",
        "Proton discovered from anode rays (Goldstein); neutron by Chadwick (1932).",
        "Thomson's plum-pudding model; Rutherford's α-scattering showed a small, dense, positive nucleus.",
        "Rutherford's model failed to explain atomic stability and line spectra.",
        "Isotopes: same Z; isobars: same A; isotones: same number of neutrons; isoelectronic: same number of electrons.",
      ]],
    ]],
    ["Electromagnetic Radiation and Photons", [
      ["box", "Wave and photon relations", ["c = νλ;  wave number ν̄ = 1/λ", "Photon energy E = hν = hc/λ", "Photoelectric effect: hν = hν₀ + ½mv²"]],
      ["ex", "Find the energy of a photon of wavelength 400 nm.", "E = 6.626 × 10⁻³⁴ × 3 × 10⁸ / 4 × 10⁻⁷ ≈ <b>4.97 × 10⁻¹⁹ J</b>."],
    ]],
    ["Bohr Model and Hydrogen Spectrum", [
      ["box", "Bohr model (H-like species)", ["E<sub>n</sub> = −13.6 Z²/n² eV = −2.18 × 10⁻¹⁸ Z²/n² J", "r<sub>n</sub> = 0.529 n²/Z Å", "Angular momentum mvr = nh/2π", "1/λ = R<sub>H</sub>Z²(1/n₁² − 1/n₂²)", "Spectral lines from n to 1: n(n − 1)/2"]],
      ["tbl", ["Series", "n₁", "Region"], [["Lyman", "1", "UV"], ["Balmer", "2", "Visible"], ["Paschen", "3", "IR"], ["Brackett", "4", "IR"], ["Pfund", "5", "IR"]]],
      ["ul", ["Bohr's model works only for one-electron species (H, He⁺, Li²⁺).", "It couldn't explain fine spectra, Zeeman/Stark effects or the dual nature of electrons."]],
      ["ex", "Find the radius of the first orbit of Li²⁺.", "r = 0.529 × 1²/3 ≈ <b>0.176 Å</b>."],
    ]],
    ["Dual Nature and Uncertainty", [
      ["box", "Quantum ideas", ["de Broglie: λ = h/mv = h/p", "Heisenberg: Δx · Δp ≥ h/4π"]],
      ["p", "The uncertainty principle rules out fixed electron orbits. It leads to the idea of orbitals, regions of high probability of finding the electron."],
      ["ex", "Find λ of an electron moving at 10⁶ m/s.", "λ = 6.626 × 10⁻³⁴ / (9.1 × 10⁻³¹ × 10⁶) ≈ <b>7.3 × 10⁻¹⁰ m</b>."],
    ]],
    ["Quantum Numbers and Orbitals", [
      ["tbl", ["Quantum number", "Symbol", "Values", "Tells us"], [
        ["Principal", "n", "1, 2, 3 …", "Shell, size and energy"],
        ["Azimuthal", "l", "0 to n − 1", "Subshell, shape (s, p, d, f)"],
        ["Magnetic", "m<sub>l</sub>", "−l to +l", "Orientation; 2l + 1 orbitals"],
        ["Spin", "m<sub>s</sub>", "+½, −½", "Spin of electron"]]],
      ["box", "Counting", ["Orbitals in shell n: n²;  electrons: 2n²", "Electrons in subshell: 2(2l + 1)", "Radial nodes = n − l − 1; angular nodes = l; total nodes = n − 1"]],
      ["ul", ["s: spherical; p: dumbbell; d: double dumbbell (d<sub>z²</sub> has a ring).", "Orbital angular momentum = √(l(l+1)) h/2π."]],
      ["ex", "How many radial and angular nodes does a 3p orbital have?", "Radial = 3 − 1 − 1 = <b>1</b>; angular = l = <b>1</b>."],
    ]],
    ["Electronic Configuration", [
      ["ul", [
        "<b>Aufbau principle:</b> fill orbitals in increasing order of (n + l); if equal, lower n first. Order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p…",
        "<b>Pauli exclusion principle:</b> no two electrons in an atom have all four quantum numbers the same; an orbital holds at most 2 electrons with opposite spins.",
        "<b>Hund's rule:</b> in degenerate orbitals, electrons occupy singly with parallel spins before pairing.",
        "Exceptions: Cr = [Ar] 3d⁵ 4s¹ and Cu = [Ar] 3d¹⁰ 4s¹ (half-filled and full d subshells are extra stable).",
      ]],
      ["ex", "How many unpaired electrons does Fe (Z = 26) have?", "[Ar] 3d⁶ 4s²: 3d⁶ has <b>4</b> unpaired electrons."],
      ["tip", "For ions, remove electrons from the highest n first: Fe²⁺ is [Ar] 3d⁶ (4s electrons leave before 3d)."],
    ]],
  ],
  rev: [
    "E<sub>n</sub> = −13.6 Z²/n² eV; r ∝ n²/Z.",
    "Lyman UV, Balmer visible.",
    "λ = h/mv; Δx·Δp ≥ h/4π.",
    "Nodes: radial n − l − 1, angular l.",
    "Shell holds 2n² electrons; subshell 2(2l + 1).",
    "Cr and Cu are exceptions: 3d⁵4s¹ and 3d¹⁰4s¹.",
  ],
  mcq: [
    ["The number of angular nodes in a 4d orbital is:", ["1", "2", "3", "0"], 1, "Angular nodes = l = 2."],
    ["The electronic configuration of Cr (Z = 24) is:", ["[Ar] 3d⁴ 4s²", "[Ar] 3d⁵ 4s¹", "[Ar] 3d⁶", "[Ar] 4s² 4p⁴"], 1, "Half-filled d subshell is more stable."],
    ["The maximum number of electrons in the n = 3 shell is:", ["8", "9", "18", "32"], 2, "2n² = 18."],
    ["The Balmer series of hydrogen lies in the:", ["UV region", "Visible region", "IR region", "Microwave region"], 1, "Transitions ending at n = 2."],
    ["Which principle states that no two electrons can have the same four quantum numbers?", ["Aufbau", "Hund's rule", "Pauli exclusion", "Heisenberg"], 2, "Pauli exclusion principle."],
    ["The energy of the electron in the second orbit of hydrogen is:", ["−13.6 eV", "−3.4 eV", "−1.51 eV", "−6.8 eV"], 1, "−13.6/4."],
    ["The shape of a p orbital is:", ["Spherical", "Dumbbell", "Double dumbbell", "Ring"], 1, "p orbitals are dumbbell shaped."],
    ["Which orbital fills first according to the (n + l) rule?", ["3d", "4s", "4p", "4d"], 1, "4s has n + l = 4; 3d has 5."],
    ["The number of unpaired electrons in N (Z = 7) is:", ["1", "2", "3", "5"], 2, "2p³ with Hund's rule: three singly filled orbitals."],
    ["Isoelectronic species among these are:", ["Na⁺, Mg²⁺, Ne", "Na, Mg, Ne", "F, Cl, Br", "O, S, Se"], 0, "All have 10 electrons."],
  ],
});
