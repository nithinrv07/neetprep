NEET.ch("phy-gravitation", {
  intro: "Kepler's laws · Newton's law of gravitation · Variation of g · Potential energy · Escape and orbital velocity · Satellites",
  given: "G = 6.67 × 10⁻¹¹ N m²/kg², R<sub>E</sub> ≈ 6400 km, g = 10 m/s² unless stated otherwise.",
  secs: [
    ["Kepler's Laws", [
      ["ul", [
        "<b>Law of orbits:</b> planets move in ellipses with the Sun at one focus.",
        "<b>Law of areas:</b> the line from the Sun to a planet sweeps equal areas in equal times. This follows from conservation of angular momentum, so the planet is fastest at perihelion.",
        "<b>Law of periods:</b> T² ∝ a³ (a = semi-major axis).",
      ]],
      ["box", "Useful results", ["v<sub>perihelion</sub> × r<sub>p</sub> = v<sub>aphelion</sub> × r<sub>a</sub>", "Areal velocity dA/dt = L/2m (constant)"]],
      ["ex", "A planet is 4 times as far from the Sun as Earth. Find its year.", "T² ∝ r³: T = (4)<sup>3/2</sup> = <b>8 Earth years</b>."],
    ]],
    ["Newton's Law of Gravitation", [
      ["box", "Gravitational force", ["F = G m₁m₂ / r²", "Always attractive, acts along the line joining the centres", "Independent of the medium in between"]],
      ["ul", ["Gravity is the weakest fundamental force but has infinite range.", "A uniform spherical shell exerts no force on a mass inside it."]],
    ]],
    ["Acceleration due to Gravity and its Variation", [
      ["box", "Variation of g", ["At the surface: g = GM/R²", "Height h: g<sub>h</sub> = g(R/(R + h))² ≈ g(1 − 2h/R) for h ≪ R", "Depth d: g<sub>d</sub> = g(1 − d/R); zero at the centre", "Latitude: g decreases from pole to equator due to rotation and shape"]],
      ["ul", ["g is maximum at the poles and minimum at the equator.", "If Earth stopped rotating, g at the equator would increase."]],
      ["ex", "At what height above Earth does g become g/4?", "(R/(R + h))² = 1/4 → R + h = 2R → <b>h = R = 6400 km</b>."],
      ["ex", "Find g at a depth of R/2.", "g<sub>d</sub> = g(1 − 1/2) = <b>g/2</b>."],
      ["tip", "g decreases faster going up than going down for small distances: at small h it falls as 2h/R, at depth d as d/R."],
    ]],
    ["Gravitational Potential and Potential Energy", [
      ["box", "Potential", ["Potential at distance r: V = −GM/r", "Potential energy of two masses: U = −Gm₁m₂/r", "Work to raise m from surface to height h: ΔU = mgh/(1 + h/R)", "Gravitational field E = −dV/dr = GM/r²"]],
      ["ex", "Find the work needed to take a 1 kg mass from Earth's surface to a height R.", "ΔU = mgR/(1 + 1) = mgR/2 = 10 × 6.4 × 10⁶ / 2 = <b>3.2 × 10⁷ J</b>."],
    ]],
    ["Escape Velocity", [
      ["box", "Escape velocity", ["v<sub>e</sub> = √(2GM/R) = √(2gR)", "For Earth ≈ 11.2 km/s", "Independent of the mass of the body and the direction of projection"]],
      ["ex", "A planet has twice Earth's radius and the same density. Find its escape velocity.", "v<sub>e</sub> ∝ R√ρ, so it doubles: <b>22.4 km/s</b>."],
    ]],
    ["Satellites", [
      ["box", "Satellite at height h (r = R + h)", ["Orbital speed v<sub>o</sub> = √(GM/r); near the surface √(gR) ≈ 7.9 km/s", "Period T = 2π√(r³/GM); near the surface ≈ 84 min", "KE = GMm/2r, PE = −GMm/r, total E = −GMm/2r", "Binding energy = GMm/2r", "v<sub>e</sub> = √2 v<sub>o</sub> (near the surface)"]],
      ["ul", ["Geostationary satellite: period 24 h, orbit in the equatorial plane, height ≈ 36,000 km, moves west to east. Used for communication.", "Polar satellites: low altitude (≈ 500–800 km), pass over the poles. Used for weather and remote sensing.", "Astronauts feel weightless because they and the craft are both in free fall."]],
      ["ex", "Find the speed needed to escape for a satellite already orbiting close to Earth.", "Extra speed = v<sub>e</sub> − v<sub>o</sub> = 11.2 − 7.9 = <b>3.3 km/s</b>."],
    ]],
  ],
  rev: [
    "Kepler's 2nd law = conservation of angular momentum.",
    "T² ∝ r³ for orbits.",
    "g at height falls as 2h/R; at depth as d/R; zero at the centre.",
    "Escape speed doesn't depend on the body's mass or angle of projection.",
    "Satellite: KE = −E, PE = 2E.",
    "Geostationary orbit: 24 h, equatorial, ≈ 36,000 km.",
  ],
  mcq: [
    ["Escape velocity from Earth is 11.2 km/s. The orbital velocity of a satellite close to the surface is about:", ["5.6 km/s", "7.9 km/s", "15.8 km/s", "22.4 km/s"], 1, "v<sub>o</sub> = v<sub>e</sub>/√2 ≈ 7.9 km/s."],
    ["Kepler's second law is a consequence of conservation of:", ["Energy", "Linear momentum", "Angular momentum", "Mass"], 2, "Constant areal velocity means L is constant."],
    ["The value of g at the centre of Earth is:", ["g", "g/2", "Zero", "Infinite"], 2, "g<sub>d</sub> = g(1 − d/R) = 0 at d = R."],
    ["At what height above Earth's surface does g become 25% of its surface value?", ["R/2", "R", "2R", "3R"], 1, "(R/(R + h))² = 1/4 → h = R."],
    ["The total energy of a satellite in orbit is:", ["Positive", "Zero", "Negative", "Infinite"], 2, "E = −GMm/2r; a bound system has negative total energy."],
    ["If the distance between two masses is doubled, the gravitational force becomes:", ["Double", "Half", "One-fourth", "Four times"], 2, "F ∝ 1/r²."],
    ["The period of a geostationary satellite is:", ["12 h", "24 h", "84 min", "365 days"], 1, "It matches Earth's rotation period."],
    ["A planet's distance from the Sun is 9 times Earth's. Its period is:", ["9 years", "27 years", "81 years", "3 years"], 1, "T ∝ r<sup>3/2</sup> = 9<sup>3/2</sup> = 27 years."],
    ["Escape velocity depends on:", ["Mass of the body", "Angle of projection", "Mass and radius of the planet", "All of these"], 2, "v<sub>e</sub> = √(2GM/R) depends only on the planet."],
    ["The ratio of kinetic energy to total energy of an orbiting satellite is:", ["1", "−1", "2", "−2"], 1, "KE = GMm/2r, E = −GMm/2r, ratio −1."],
    ["Where is g maximum on Earth's surface?", ["Equator", "Poles", "45° latitude", "Same everywhere"], 1, "Poles: smaller radius and no rotational reduction."],
    ["The gravitational potential at a distance r from mass M is:", ["GM/r", "−GM/r", "−GM/r²", "GM/r²"], 1, "V = −GM/r, zero at infinity."],
  ],
});
