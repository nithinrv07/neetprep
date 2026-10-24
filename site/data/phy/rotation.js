NEET.ch("phy-rotation", {
  intro: "Centre of mass · Torque · Moment of inertia · Angular momentum · Rolling motion",
  given: "Take g = 10 m/s² unless stated otherwise.",
  secs: [
    ["Centre of Mass", [
      ["box", "Centre of mass", ["X<sub>cm</sub> = (m₁x₁ + m₂x₂ + …)/(m₁ + m₂ + …)", "Two particles: CM divides the line in inverse ratio of masses (closer to heavier)", "M a<sub>cm</sub> = F<sub>ext</sub>; with no external force, v<sub>cm</sub> stays constant"]],
      ["ul", ["CM can lie outside the body (ring, L-shape).", "In an explosion with no external force, the CM continues on its original path.", "Uniform rod: CM at the middle. Triangle: at the centroid."]],
      ["ex", "Masses 2 kg at x = 0 and 3 kg at x = 5 m. Find the CM.", "X = (0 + 15)/5 = <b>3 m</b>."],
    ]],
    ["Torque and Equilibrium", [
      ["box", "Torque", ["τ = r × F, |τ| = rF sinθ (N m)", "τ = Iα (rotational analogue of F = ma)", "Equilibrium: ΣF = 0 and Στ = 0", "Couple: two equal, opposite, non-collinear forces; τ = F × d"]],
      ["ex", "A 1 m uniform rod of 2 kg is pivoted at one end and held horizontal. Find the torque of its weight about the pivot.", "Weight acts at 0.5 m: τ = 20 × 0.5 = <b>10 N m</b>."],
    ]],
    ["Moment of Inertia", [
      ["p", "I = Σmr² measures rotational inertia. It depends on mass and how it is distributed about the axis. Radius of gyration K: I = MK²."],
      ["tbl", ["Body", "Axis", "I"], [
        ["Ring", "Central, ⊥ plane", "MR²"], ["Ring", "Diameter", "MR²/2"],
        ["Disc", "Central, ⊥ plane", "MR²/2"], ["Disc", "Diameter", "MR²/4"],
        ["Solid cylinder", "Own axis", "MR²/2"], ["Hollow cylinder", "Own axis", "MR²"],
        ["Solid sphere", "Diameter", "2MR²/5"], ["Hollow sphere", "Diameter", "2MR²/3"],
        ["Thin rod", "Centre, ⊥ length", "ML²/12"], ["Thin rod", "End, ⊥ length", "ML²/3"]]],
      ["box", "Theorems", ["Parallel axis: I = I<sub>cm</sub> + Md²", "Perpendicular axis (plane bodies only): I<sub>z</sub> = I<sub>x</sub> + I<sub>y</sub>"]],
      ["ex", "Find the MI of a solid sphere (M, R) about a tangent.", "I = 2MR²/5 + MR² = <b>7MR²/5</b>."],
    ]],
    ["Angular Momentum and its Conservation", [
      ["box", "Angular momentum", ["L = r × p = Iω", "τ = dL/dt", "If τ<sub>ext</sub> = 0: I₁ω₁ = I₂ω₂", "Rotational KE = ½Iω² = L²/2I", "Power P = τω"]],
      ["ul", ["A skater pulls in her arms: I decreases, ω increases.", "A diver tucks in to spin faster.", "If Earth shrank with the same mass, the day would become shorter."]],
      ["ex", "A disc rotating at 10 rad/s has I = 2 kg m². Its I becomes 4 kg m² without external torque. Find the new ω.", "2 × 10 = 4ω → ω = <b>5 rad/s</b>."],
    ]],
    ["Rolling Motion", [
      ["box", "Rolling without slipping", ["v<sub>cm</sub> = Rω", "Total KE = ½mv²(1 + K²/R²)", "Acceleration down incline: a = g sinθ / (1 + K²/R²)", "Speed at the bottom: v = √(2gh / (1 + K²/R²))"]],
      ["tbl", ["Body", "K²/R²", "Rotational KE / total KE"], [["Ring", "1", "1/2"], ["Disc / solid cylinder", "1/2", "1/3"], ["Solid sphere", "2/5", "2/7"], ["Hollow sphere", "2/3", "2/5"]]],
      ["tip", "Race down an incline: solid sphere > disc > hollow sphere > ring. Mass and radius don't matter."],
      ["ex", "A solid sphere rolls down a 7 m high incline from rest. Find its speed at the bottom.", "v = √(2 × 10 × 7 / (1 + 2/5)) = √(140/1.4) = √100 = <b>10 m/s</b>."],
    ]],
  ],
  rev: [
    "CM lies closer to the heavier mass and can be outside the body.",
    "τ = Iα and L = Iω are rotational versions of F = ma and p = mv.",
    "Parallel axis works for any body; perpendicular axis only for flat bodies.",
    "No external torque → Iω constant.",
    "Rolling: smaller K²/R² → faster down an incline.",
    "Point of contact of a rolling body is momentarily at rest; the top moves at 2v.",
  ],
  mcq: [
    ["The moment of inertia of a solid sphere about its diameter is:", ["MR²", "2MR²/5", "2MR²/3", "MR²/2"], 1, "Standard result: 2MR²/5."],
    ["A ring, a disc, a solid sphere and a hollow sphere roll down the same incline. Which reaches the bottom first?", ["Ring", "Disc", "Solid sphere", "Hollow sphere"], 2, "Solid sphere has the smallest K²/R² = 2/5."],
    ["A skater spinning with arms out pulls them in. Her angular velocity:", ["Decreases", "Increases", "Stays the same", "Becomes zero"], 1, "I decreases and Iω is conserved, so ω increases."],
    ["The MI of a thin rod of mass M and length L about an axis through one end, perpendicular to it, is:", ["ML²/12", "ML²/3", "ML²/2", "ML²"], 1, "I = ML²/12 + M(L/2)² = ML²/3."],
    ["For a disc rolling without slipping, the ratio of rotational KE to total KE is:", ["1/2", "1/3", "2/7", "2/5"], 1, "K²/R² = 1/2: rotational/total = (1/2)/(3/2) = 1/3."],
    ["Masses 1 kg and 3 kg are 4 m apart. The CM is at a distance from the 1 kg mass of:", ["1 m", "2 m", "3 m", "4/3 m"], 2, "x = 3 × 4 / 4 = 3 m from the 1 kg mass."],
    ["The MI of a ring about its diameter is:", ["MR²", "MR²/2", "2MR²", "MR²/4"], 1, "By the perpendicular axis theorem: 2I<sub>d</sub> = MR², so I<sub>d</sub> = MR²/2."],
    ["A torque of 20 N m acts on a wheel of MI 4 kg m². Its angular acceleration is:", ["2 rad/s²", "5 rad/s²", "80 rad/s²", "0.2 rad/s²"], 1, "α = τ/I = 20/4 = 5 rad/s²."],
    ["The angular momentum of a body is L and its MI is I. Its rotational KE is:", ["L²/2I", "L/2I", "2L²/I", "LI/2"], 0, "K = ½Iω² = L²/2I."],
    ["If Earth suddenly shrank to half its radius with the same mass, the length of the day would become:", ["24 h", "12 h", "6 h", "48 h"], 2, "I ∝ R², so I becomes 1/4. ω becomes 4 times, so T = 24/4 = 6 h."],
    ["The speed of the topmost point of a wheel rolling without slipping at speed v is:", ["0", "v", "2v", "√2 v"], 2, "v<sub>top</sub> = v<sub>cm</sub> + Rω = 2v."],
    ["The radius of gyration of a disc about its central perpendicular axis is:", ["R", "R/2", "R/√2", "√2 R"], 2, "MK² = MR²/2 → K = R/√2."],
  ],
});
