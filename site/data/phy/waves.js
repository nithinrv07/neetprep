NEET.ch("phy-waves", {
  intro: "Transverse and longitudinal waves · Wave equation · Speed of waves · Superposition · Standing waves in strings and pipes · Beats",
  secs: [
    ["Types of Waves and the Wave Equation", [
      ["ul", ["<b>Transverse:</b> particles vibrate ⊥ to wave direction (waves on strings, light). Need rigidity.", "<b>Longitudinal:</b> particles vibrate along the wave direction (sound in air). Form compressions and rarefactions.", "Mechanical waves need a medium; electromagnetic waves don't."]],
      ["box", "Progressive wave", ["y = A sin(kx − ωt) (moving in +x)", "k = 2π/λ, ω = 2πf, v = fλ = ω/k", "Phase difference = (2π/λ) × path difference"]],
      ["ex", "y = 0.05 sin(2πx − 100πt) (SI). Find λ, f and v.", "k = 2π → <b>λ = 1 m</b>. ω = 100π → <b>f = 50 Hz</b>. <b>v = 50 m/s</b>."],
    ]],
    ["Speed of Waves", [
      ["box", "Wave speeds", ["String: v = √(T/μ), μ = mass per unit length", "Sound in a gas (Laplace): v = √(γP/ρ)", "Newton's formula √(P/ρ) gave 280 m/s; Laplace corrected it with γ (adiabatic)", "v ∝ √T (absolute temperature) for a gas"]],
      ["ul", ["Speed of sound is unaffected by pressure changes at constant temperature.", "Sound is fastest in solids, slower in liquids, slowest in gases.", "Humidity increases the speed of sound (moist air is less dense)."]],
      ["ex", "The speed of sound at 27 °C is 340 m/s. Find it at 127 °C.", "v ∝ √T: 340 × √(400/300) ≈ <b>393 m/s</b>."],
    ]],
    ["Superposition and Standing Waves on Strings", [
      ["box", "String fixed at both ends", ["f<sub>n</sub> = n v / 2L (n = 1, 2, 3, …)", "All harmonics present; fundamental f₁ = (1/2L)√(T/μ)", "Distance between successive nodes = λ/2"]],
      ["ul", ["In a standing wave, nodes have zero amplitude and antinodes have maximum amplitude.", "Energy is not transported by a standing wave."]],
      ["ex", "A string 1 m long with wave speed 200 m/s. Find the fundamental frequency.", "f = 200/(2 × 1) = <b>100 Hz</b>."],
    ]],
    ["Organ Pipes", [
      ["tbl", ["Pipe", "Frequencies", "Harmonics present", "Ratio"], [
        ["Open at both ends", "f<sub>n</sub> = nv/2L", "All", "1 : 2 : 3 : …"],
        ["Closed at one end", "f<sub>n</sub> = (2n − 1)v/4L", "Only odd", "1 : 3 : 5 : …"]]],
      ["ul", ["A closed pipe's fundamental is half that of an open pipe of the same length.", "End correction: e ≈ 0.6r adds to the effective length."]],
      ["ex", "A pipe closed at one end is 85 cm long. Find its fundamental frequency (v = 340 m/s).", "f = v/4L = 340/3.4 = <b>100 Hz</b>."],
      ["tip", "Closed pipe: only odd harmonics. If a question lists 3 : 5 : 7 overtones, it is a closed pipe."],
    ]],
    ["Beats", [
      ["box", "Beats", ["Beat frequency = |f₁ − f₂|", "Heard when two waves of slightly different frequencies superpose", "Loading a tuning fork with wax lowers its frequency; filing raises it"]],
      ["ex", "Fork A (256 Hz) gives 4 beats/s with fork B. After waxing B, beats drop to 2/s. Find B's frequency.", "B is 252 or 260 Hz. Waxing lowers B's frequency and beats fall, so B was above 256: <b>260 Hz</b>."],
    ]],
  ],
  rev: [
    "v = fλ; k = 2π/λ.",
    "String speed √(T/μ); gas speed √(γP/ρ) ∝ √T.",
    "Open pipe: all harmonics; closed pipe: odd harmonics only.",
    "Node to node = λ/2.",
    "Beats = |f₁ − f₂|.",
    "Waxing lowers frequency; filing raises it.",
  ],
  mcq: [
    ["A pipe closed at one end produces:", ["All harmonics", "Only even harmonics", "Only odd harmonics", "No harmonics"], 2, "f<sub>n</sub> = (2n − 1)v/4L."],
    ["The speed of a wave on a string is proportional to:", ["T", "√T", "1/T", "T²"], 1, "v = √(T/μ)."],
    ["Two tuning forks of 256 Hz and 260 Hz sound together. The beat frequency is:", ["2 Hz", "4 Hz", "516 Hz", "258 Hz"], 1, "260 − 256 = 4 Hz."],
    ["The distance between two consecutive nodes in a standing wave is:", ["λ", "λ/2", "λ/4", "2λ"], 1, "Nodes are λ/2 apart."],
    ["The fundamental frequency of an open pipe is 200 Hz. A closed pipe of the same length has fundamental:", ["100 Hz", "200 Hz", "400 Hz", "50 Hz"], 0, "Closed: v/4L = half of v/2L."],
    ["Sound waves in air are:", ["Transverse", "Longitudinal", "Electromagnetic", "Both transverse and longitudinal"], 1, "Air has no rigidity, so only longitudinal waves travel."],
    ["Speed of sound in a gas is proportional to:", ["T", "√T", "1/√T", "T²"], 1, "v = √(γRT/M)."],
    ["If the tension in a string is made 4 times, the fundamental frequency becomes:", ["Half", "Double", "4 times", "Same"], 1, "f ∝ √T."],
    ["The wave y = 0.1 sin(4πx − 200πt) has a speed of:", ["50 m/s", "100 m/s", "200 m/s", "800 m/s"], 0, "v = ω/k = 200π/4π = 50 m/s."],
    ["Laplace's correction to Newton's formula for the speed of sound accounts for:", ["Humidity", "Adiabatic compressions", "Temperature", "Wind"], 1, "Sound compressions are adiabatic, so γP replaces P."],
    ["A string fixed at both ends vibrates in 3 loops. The number of nodes is:", ["2", "3", "4", "6"], 2, "n loops have n + 1 nodes."],
    ["The ratio of frequencies of the first three harmonics of a closed pipe is:", ["1 : 2 : 3", "1 : 3 : 5", "2 : 4 : 6", "1 : 4 : 9"], 1, "Only odd harmonics."],
  ],
});
