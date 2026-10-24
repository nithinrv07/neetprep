NEET.ch("phy-wep", {
  intro: "Work · Kinetic energy · Work–energy theorem · Potential energy · Power · Collisions · Vertical circle",
  given: "Take g = 10 m/s² unless stated otherwise.",
  secs: [
    ["Work", [
      ["box", "Work done", ["Constant force: W = F·s = Fs cosθ", "Variable force: W = ∫F dx = area under the F–x graph", "Unit: joule (J); 1 J = 1 N m = 10⁷ erg"]],
      ["ul", [
        "Work is positive for θ < 90°, zero at 90°, negative for θ > 90°.",
        "Zero work: centripetal force, a coolie carrying a load on a level road, the normal reaction on a body sliding on a fixed surface.",
        "Friction usually does negative work. Gravity does negative work on a body going up.",
      ]],
      ["ex", "F = (3î + 4ĵ) N moves a body by s = (2î + ĵ) m. Find the work.", "W = 3 × 2 + 4 × 1 = <b>10 J</b>."],
      ["ex", "A spring (k = 200 N/m) is stretched by 10 cm. Find the work done.", "W = ½kx² = ½ × 200 × 0.01 = <b>1 J</b>."],
    ]],
    ["Kinetic Energy and the Work–Energy Theorem", [
      ["box", "Kinetic energy", ["K = ½mv² = p²/2m", "p = √(2mK)", "Work–energy theorem: W<sub>net</sub> = ΔK = K<sub>f</sub> − K<sub>i</sub>"]],
      ["ul", ["For equal momentum, the lighter body has more KE (K ∝ 1/m).", "For equal KE, the heavier body has more momentum (p ∝ √m).", "If KE increases by n times, momentum becomes √n times."]],
      ["ex", "The KE of a body increases by 300%. By what percentage does its momentum increase?", "KE becomes 4 times, so p becomes √4 = 2 times: an increase of <b>100%</b>."],
      ["ex", "A 2 kg block moving at 10 m/s on a rough floor stops after 10 m. Find the friction force.", "Work by friction = −ΔK = −100 J. f × 10 = 100 → f = <b>10 N</b>."],
    ]],
    ["Potential Energy and Conservation of Energy", [
      ["box", "Potential energy", ["Gravitational (near Earth): U = mgh", "Spring: U = ½kx²", "Conservative force: F = −dU/dx", "Mechanical energy K + U is constant if only conservative forces act"]],
      ["ul", ["Conservative forces: gravity, spring, electrostatic. Work is path-independent and zero over a closed path.", "Non-conservative: friction, air drag. They convert mechanical energy into heat.", "Stable equilibrium where U is minimum (d²U/dx² > 0); unstable where U is maximum."]],
      ["ex", "A ball is dropped from 20 m. Find its speed just before hitting the ground.", "mgh = ½mv² → v = √(2 × 10 × 20) = <b>20 m/s</b>."],
    ]],
    ["Power", [
      ["box", "Power", ["Average P = W/t;  instantaneous P = F·v", "1 W = 1 J/s;  1 hp = 746 W", "1 kWh = 3.6 × 10⁶ J (unit of energy)"]],
      ["ex", "A pump lifts 600 kg of water to 10 m in 1 minute. Find its power.", "P = mgh/t = 600 × 10 × 10 / 60 = <b>1000 W</b>."],
      ["ex", "A car moves at a constant 20 m/s against a resistive force of 500 N. Find the engine power.", "P = Fv = 500 × 20 = <b>10 kW</b>."],
    ]],
    ["Collisions", [
      ["box", "Collisions in one dimension", [
        "Momentum is conserved in all collisions.",
        "Elastic: KE also conserved. Perfectly inelastic: bodies stick together.",
        "Coefficient of restitution e = (v₂ − v₁)/(u₁ − u₂);  e = 1 elastic, e = 0 perfectly inelastic",
        "Elastic, m₂ at rest: v₁ = (m₁ − m₂)u₁/(m₁ + m₂), v₂ = 2m₁u₁/(m₁ + m₂)",
        "Perfectly inelastic: v = (m₁u₁ + m₂u₂)/(m₁ + m₂)"]],
      ["ul", ["Equal masses in an elastic head-on collision exchange velocities.", "A heavy body hitting a light one at rest: light one moves at about 2u.", "Ball dropped from h with restitution e rebounds to e²h."]],
      ["ex", "A 2 kg ball at 3 m/s collides and sticks to a 1 kg ball at rest. Find the common velocity and KE lost.", "v = 6/3 = <b>2 m/s</b>. KE before = 9 J, after = 6 J, lost = <b>3 J</b>."],
    ]],
    ["Motion in a Vertical Circle", [
      ["box", "Body on a string, radius r", ["Minimum speed at top: √(gr)", "Minimum speed at bottom to complete the circle: √(5gr)", "T<sub>bottom</sub> − T<sub>top</sub> = 6mg (for minimum condition)"]],
      ["ex", "Find the minimum speed at the bottom for a stone on a 2 m string to complete a vertical circle.", "v = √(5 × 10 × 2) = √100 = <b>10 m/s</b>."],
    ]],
  ],
  rev: [
    "W = Fs cosθ; zero for perpendicular force.",
    "W<sub>net</sub> = ΔK, including work by all forces.",
    "K = p²/2m; KE × n → momentum × √n.",
    "Momentum is always conserved in collisions; KE only in elastic ones.",
    "Equal masses, elastic, head-on: velocities exchange.",
    "Vertical circle: √(5gr) at the bottom, √(gr) at the top.",
  ],
  mcq: [
    ["The work done by the centripetal force in uniform circular motion is:", ["Positive", "Negative", "Zero", "mv²"], 2, "Force is perpendicular to displacement at every instant."],
    ["If the momentum of a body is doubled, its kinetic energy becomes:", ["Double", "Four times", "Half", "Same"], 1, "K = p²/2m, so K ∝ p²."],
    ["A 1 kg body falls from 5 m. Its kinetic energy just before hitting the ground is:", ["5 J", "25 J", "50 J", "100 J"], 2, "K = mgh = 1 × 10 × 5 = 50 J."],
    ["Two bodies of masses 1 kg and 4 kg have equal kinetic energy. The ratio of their momenta is:", ["1 : 2", "1 : 4", "2 : 1", "1 : 16"], 0, "p = √(2mK), so p ∝ √m: √1 : √4 = 1 : 2."],
    ["In a perfectly elastic head-on collision of two equal masses with one at rest:", ["Both stop", "They move together", "They exchange velocities", "The first rebounds"], 2, "Equal masses exchange velocities in an elastic collision."],
    ["The work done in stretching a spring of k = 400 N/m by 5 cm is:", ["0.5 J", "1 J", "5 J", "10 J"], 0, "½ × 400 × 0.0025 = 0.5 J."],
    ["A motor lifts 100 kg to 20 m in 10 s. Its power is:", ["200 W", "2 kW", "20 kW", "1 kW"], 1, "P = 100 × 10 × 20 / 10 = 2000 W."],
    ["Coefficient of restitution for a perfectly inelastic collision is:", ["1", "0", "0.5", "∞"], 1, "Bodies stick together, so relative velocity of separation is zero."],
    ["The minimum speed at the lowest point for a stone on a 0.9 m string to complete a vertical circle is:", ["3 m/s", "√45 m/s", "9 m/s", "√90 m/s"], 1, "√(5gr) = √(5 × 10 × 0.9) = √45 ≈ 6.7 m/s."],
    ["A force F = 5x N acts on a body. The work done in moving it from x = 0 to x = 2 m is:", ["5 J", "10 J", "20 J", "2.5 J"], 1, "∫5x dx from 0 to 2 = 5 × 4/2 = 10 J."],
    ["A 3 kg ball at 4 m/s sticks to a 1 kg ball at rest. The common velocity is:", ["1 m/s", "2 m/s", "3 m/s", "4 m/s"], 2, "v = 12/4 = 3 m/s."],
    ["If the kinetic energy of a body increases by 44%, its momentum increases by:", ["20%", "22%", "44%", "12%"], 0, "p ∝ √K: √1.44 = 1.2, a 20% increase."],
  ],
});
