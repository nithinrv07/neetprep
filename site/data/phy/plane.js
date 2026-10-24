NEET.ch("phy-plane", {
  intro: "Vectors · Resolution · Products · Projectile motion · Relative velocity in 2D · Uniform circular motion",
  given: "Take g = 10 m/s² unless stated otherwise.",
  secs: [
    ["Vectors and their Addition", [
      ["box", "Resultant of two vectors A and B at angle θ", [
        "R = √(A² + B² + 2AB cosθ)",
        "Direction from A: tanα = B sinθ / (A + B cosθ)",
        "R<sub>max</sub> = A + B (θ = 0°);  R<sub>min</sub> = |A − B| (θ = 180°)"]],
      ["ul", [
        "Two equal vectors at 120° give a resultant equal to each of them.",
        "Three vectors can give zero resultant only if they can form a closed triangle.",
        "Unit vector: Â = A/|A|. Rectangular components: A<sub>x</sub> = A cosθ, A<sub>y</sub> = A sinθ.",
      ]],
      ["ex", "Two forces of 3 N and 4 N act at right angles. Find the resultant.", "R = √(9 + 16) = <b>5 N</b>, at tan⁻¹(4/3) ≈ 53° to the 3 N force."],
      ["ex", "Two equal forces F act at 120°. Find the resultant.", "R = √(F² + F² + 2F² cos120°) = √(F²) = <b>F</b>."],
    ]],
    ["Scalar and Vector Products", [
      ["box", "Products", [
        "A·B = AB cosθ = A<sub>x</sub>B<sub>x</sub> + A<sub>y</sub>B<sub>y</sub> + A<sub>z</sub>B<sub>z</sub>  (scalar)",
        "|A × B| = AB sinθ, direction by right-hand rule  (vector)",
        "A · B = 0 → perpendicular;  A × B = 0 → parallel",
        "î × ĵ = k̂,  ĵ × k̂ = î,  k̂ × î = ĵ"]],
      ["ul", ["Work W = F·s is a dot product. Torque τ = r × F and angular momentum L = r × p are cross products.", "A × B = −(B × A): the cross product is not commutative."]],
      ["ex", "Find the angle between A = î + ĵ and B = î − ĵ.", "A·B = 1 − 1 = 0, so they are <b>perpendicular (90°)</b>."],
    ]],
    ["Projectile Motion", [
      ["p", "A projectile has constant horizontal velocity u cosθ and vertical acceleration g downward. Its path is a parabola."],
      ["box", "Ground-to-ground projectile (speed u, angle θ)", [
        "Time of flight T = 2u sinθ / g",
        "Maximum height H = u² sin²θ / 2g",
        "Horizontal range R = u² sin2θ / g;  R<sub>max</sub> = u²/g at θ = 45°",
        "Equation of path: y = x tanθ − g x² / (2u² cos²θ)"]],
      ["ul", [
        "Angles θ and (90° − θ) give the <b>same range</b>.",
        "At the top, velocity = u cosθ (horizontal) and acceleration = g.",
        "R = 4H cotθ, so R = H when tanθ = 4.",
        "Horizontal projection from height h with speed u: t = √(2h/g), range = u√(2h/g).",
      ]],
      ["ex", "A ball is thrown at 20 m/s at 30° to the horizontal. Find T, H and R.", "T = 2 × 20 × 0.5 / 10 = <b>2 s</b>. H = 400 × 0.25/20 = <b>5 m</b>. R = 400 × sin60°/10 = 40 × 0.866 ≈ <b>34.6 m</b>."],
      ["ex", "A stone is thrown horizontally at 15 m/s from a 45 m cliff. How far from the base does it land?", "t = √(2 × 45/10) = 3 s. Range = 15 × 3 = <b>45 m</b>."],
      ["tip", "Maximum range needs θ = 45°; maximum height needs θ = 90°. Time of flight is greatest at 90° too."],
    ]],
    ["Relative Velocity in Two Dimensions", [
      ["box", "River crossing (boat speed v in still water, river speed u, width d)", [
        "Shortest time: head straight across. t = d/v, drift = u d / v",
        "Shortest path (zero drift, needs v > u): head upstream at sinθ = u/v from the normal; t = d / √(v² − u²)"]],
      ["ex", "A river 100 m wide flows at 3 m/s. A swimmer can swim at 5 m/s. Find the time to cross straight across (no drift).", "Effective speed across = √(25 − 9) = 4 m/s. t = 100/4 = <b>25 s</b>."],
      ["ex", "Rain falls vertically at 3 m/s. A man walks at 4 m/s. At what speed does rain appear to fall on him?", "Relative velocity = √(9 + 16) = <b>5 m/s</b>, so he should tilt his umbrella forward at tan⁻¹(4/3) from the vertical."],
    ]],
    ["Uniform Circular Motion", [
      ["box", "Circular motion", [
        "ω = 2π/T = 2πf;  v = ωr",
        "Centripetal acceleration a<sub>c</sub> = v²/r = ω²r, directed towards the centre",
        "In non-uniform circular motion: a = √(a<sub>c</sub>² + a<sub>t</sub>²)"]],
      ["ul", ["Speed is constant but velocity changes, so the body is accelerated.", "Work done by centripetal force is zero (force ⊥ velocity)."]],
      ["ex", "A stone tied to a 0.5 m string makes 2 revolutions per second. Find its centripetal acceleration.", "ω = 2π × 2 = 4π rad/s. a = ω²r = 16π² × 0.5 = 8π² ≈ <b>79 m/s²</b>."],
    ]],
  ],
  rev: [
    "|A − B| ≤ R ≤ A + B.",
    "Dot product zero → perpendicular; cross product zero → parallel.",
    "Same range for θ and 90° − θ; R<sub>max</sub> at 45°.",
    "At the top of a projectile: v = u cosθ, a = g.",
    "Shortest time across a river: head perpendicular to the flow.",
    "Uniform circular motion has constant speed but changing velocity.",
  ],
  mcq: [
    ["At what angle of projection is the horizontal range equal to the maximum height?", ["45°", "tan⁻¹(4)", "tan⁻¹(1/4)", "60°"], 1, "R = 4H cotθ. R = H gives tanθ = 4."],
    ["Two forces of 6 N and 8 N act at 90°. The resultant is:", ["14 N", "2 N", "10 N", "48 N"], 2, "√(36 + 64) = 10 N."],
    ["The angle between A = 2î + 3ĵ and B = 3î − 2ĵ is:", ["0°", "45°", "90°", "180°"], 2, "A·B = 6 − 6 = 0, so they are perpendicular."],
    ["A projectile is fired at 45° with speed 20 m/s. The range is:", ["20 m", "40 m", "80 m", "10 m"], 1, "R = u²/g = 400/10 = 40 m."],
    ["At the highest point of a projectile's path, which is zero?", ["Speed", "Horizontal velocity", "Vertical velocity", "Acceleration"], 2, "Only the vertical component of velocity is zero; horizontal velocity and g remain."],
    ["Two projectiles have the same speed and the same range. If one is thrown at 30°, the other is thrown at:", ["45°", "60°", "75°", "15°"], 1, "Complementary angles give equal range: 90° − 30° = 60°."],
    ["A ball is thrown horizontally from 20 m height at 10 m/s. It lands at a horizontal distance of:", ["10 m", "20 m", "40 m", "5 m"], 1, "t = √(2 × 20/10) = 2 s; x = 10 × 2 = 20 m."],
    ["The magnitude of the resultant of two equal vectors equals either vector. The angle between them is:", ["60°", "90°", "120°", "180°"], 2, "R² = 2A²(1 + cosθ) = A² → cosθ = −½ → 120°."],
    ["A particle moves in a circle of radius 2 m with speed 4 m/s. Its centripetal acceleration is:", ["2 m/s²", "4 m/s²", "8 m/s²", "16 m/s²"], 2, "v²/r = 16/2 = 8 m/s²."],
    ["A boat crosses a river of width 200 m in the shortest time, at 5 m/s relative to water. River speed is 2 m/s. The drift downstream is:", ["40 m", "80 m", "100 m", "200 m"], 1, "t = 200/5 = 40 s; drift = 2 × 40 = 80 m."],
    ["î × ĵ equals:", ["k̂", "−k̂", "0", "1"], 0, "Cyclic order î → ĵ → k̂ gives î × ĵ = k̂."],
    ["The maximum height of a projectile is 10 m when thrown at 30°. If thrown at 60° with the same speed, the maximum height is:", ["10 m", "20 m", "30 m", "40 m"], 2, "H ∝ sin²θ: sin²60°/sin²30° = (3/4)/(1/4) = 3, so H = 30 m."],
  ],
});
