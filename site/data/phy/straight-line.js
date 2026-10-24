NEET.ch("phy-straight-line", {
  intro: "Displacement · Velocity · Acceleration · Equations of motion · Free fall · Graphs · Relative velocity",
  given: "Take g = 10 m/s² unless stated otherwise.",
  secs: [
    ["Distance, Displacement, Speed and Velocity", [
      ["ul", [
        "<b>Distance</b> is the total path length (scalar, never negative). <b>Displacement</b> is the change in position (vector).",
        "|Displacement| ≤ distance. They are equal only for motion in one direction along a straight line.",
        "Average speed = total distance / total time. Average velocity = total displacement / total time.",
        "Instantaneous velocity v = dx/dt (slope of x–t graph). Instantaneous speed = |v|.",
      ]],
      ["box", "Average speed shortcuts", [
        "Equal distances at speeds v₁ and v₂:  v<sub>avg</sub> = 2v₁v₂ / (v₁ + v₂)  (harmonic mean)",
        "Equal times at speeds v₁ and v₂:  v<sub>avg</sub> = (v₁ + v₂) / 2  (arithmetic mean)"]],
      ["ex", "A car goes from A to B at 40 km/h and returns at 60 km/h. Find the average speed and average velocity for the round trip.", "Average speed = 2 × 40 × 60 / (40 + 60) = <b>48 km/h</b>. Displacement is zero, so average velocity = <b>0</b>."],
    ]],
    ["Acceleration and Equations of Motion", [
      ["p", "Acceleration a = dv/dt = v dv/dx. For <b>uniform acceleration</b> along a straight line:"],
      ["box", "Kinematic equations", [
        "v = u + at",
        "s = ut + ½at²",
        "v² = u² + 2as",
        "s = (u + v)t / 2",
        "Distance in the nth second: s<sub>n</sub> = u + (a/2)(2n − 1)"]],
      ["ul", [
        "Sign convention: choose one direction as positive and keep it for u, v, a and s.",
        "Retardation means acceleration opposite to velocity, not necessarily negative a.",
        "Stopping distance from speed u with retardation a: s = u²/2a, so s ∝ u².",
      ]],
      ["ex", "A car moving at 20 m/s brakes with a uniform retardation of 5 m/s². Find the stopping distance and time.", "s = u²/2a = 400/10 = <b>40 m</b>; t = u/a = <b>4 s</b>."],
      ["ex", "A body starts from rest with a = 4 m/s². Find the distance covered in the 5th second.", "s₅ = 0 + (4/2)(2 × 5 − 1) = 2 × 9 = <b>18 m</b>."],
      ["tip", "If the speed doubles, stopping distance becomes 4 times (s ∝ u²)."],
    ]],
    ["Free Fall and Vertical Motion", [
      ["box", "Under gravity (take upward positive, a = −g)", [
        "Dropped from height h: t = √(2h/g), v = √(2gh)",
        "Thrown up with speed u: max height H = u²/2g, time to top = u/g, total time = 2u/g",
        "Speed on return to the launch point = u (no air resistance)"]],
      ["ul", [
        "From rest, distances fallen in successive equal seconds are 1 : 3 : 5 : 7 (Galileo's law of odd numbers).",
        "Total distances after 1 s, 2 s, 3 s are in the ratio 1 : 4 : 9.",
        "At the highest point velocity is zero but acceleration is still g downward.",
      ]],
      ["ex", "A ball is thrown up at 20 m/s. Find the maximum height and total time in the air.", "H = 400/20 = <b>20 m</b>. Total time = 2 × 20/10 = <b>4 s</b>."],
      ["ex", "A stone dropped from a tower reaches the ground in 3 s. Find the height and the final speed.", "h = ½ × 10 × 9 = <b>45 m</b>; v = 10 × 3 = <b>30 m/s</b>."],
      ["ex", "A ball is thrown up at 10 m/s from the top of a 15 m tower. When does it hit the ground?", "Upward positive: −15 = 10t − 5t² → t² − 2t − 3 = 0 → (t − 3)(t + 1) = 0, so <b>t = 3 s</b>."],
    ]],
    ["Motion Graphs", [
      ["tbl", ["Graph", "Slope gives", "Area gives"], [
        ["x–t", "velocity", "—"], ["v–t", "acceleration", "displacement"], ["a–t", "rate of change of a", "change in velocity"]]],
      ["ul", [
        "Straight x–t line: uniform velocity. Parabola: uniform acceleration.",
        "x–t graph can never be vertical (infinite velocity) or turn back in time.",
        "Area under the speed–time graph gives distance; area under v–t (with sign) gives displacement.",
      ]],
      ["ex", "A v–t graph rises linearly from 0 to 20 m/s in 4 s, stays constant for 6 s, and falls to 0 in 2 s. Find the total distance.", "Area = ½ × 4 × 20 + 6 × 20 + ½ × 2 × 20 = 40 + 120 + 20 = <b>180 m</b>."],
    ]],
    ["Relative Velocity in One Dimension", [
      ["box", "Relative velocity", ["v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub> (velocity of A as seen from B)", "Same direction: relative speed = |v<sub>A</sub> − v<sub>B</sub>|", "Opposite directions: relative speed = v<sub>A</sub> + v<sub>B</sub>"]],
      ["ex", "Two trains, each 100 m long, move in opposite directions at 15 m/s and 25 m/s. How long do they take to cross each other?", "Relative speed = 40 m/s, distance = 200 m, so t = <b>5 s</b>."],
      ["ex", "A 150 m train at 20 m/s overtakes a 100 m train at 10 m/s on a parallel track. How long does overtaking take?", "Relative speed = 10 m/s, distance = 250 m, so t = <b>25 s</b>."],
    ]],
  ],
  rev: [
    "Displacement can be zero when distance is not; average velocity can be zero when average speed is not.",
    "Equal distances → harmonic mean; equal times → arithmetic mean.",
    "Stopping distance ∝ u².",
    "Free fall from rest: distances in successive seconds 1 : 3 : 5.",
    "Slope of v–t = acceleration; area of v–t = displacement.",
    "At the top of a vertical throw, v = 0 but a = g.",
  ],
  mcq: [
    ["A body falls freely from rest. The ratio of distances covered in the 1st, 2nd and 3rd second is:", ["1 : 2 : 3", "1 : 4 : 9", "1 : 3 : 5", "1 : 5 : 9"], 2, "s<sub>n</sub> = (g/2)(2n − 1) gives 1 : 3 : 5. 1 : 4 : 9 is for total distance."],
    ["A car covers half a distance at 30 km/h and the other half at 60 km/h. Its average speed is:", ["45 km/h", "40 km/h", "50 km/h", "35 km/h"], 1, "2 × 30 × 60 / 90 = 40 km/h."],
    ["A ball is thrown vertically up with 30 m/s. The maximum height reached is:", ["30 m", "45 m", "60 m", "90 m"], 1, "H = u²/2g = 900/20 = 45 m."],
    ["The area under a velocity–time graph gives:", ["Acceleration", "Displacement", "Speed", "Force"], 1, "∫v dt = displacement."],
    ["A car's speed is doubled. Its minimum stopping distance under the same braking force becomes:", ["Same", "Double", "Four times", "Half"], 2, "s = u²/2a, so s ∝ u²."],
    ["A body starts from rest with acceleration 2 m/s². The distance travelled in the 3rd second is:", ["9 m", "5 m", "4 m", "6 m"], 1, "s₃ = (2/2)(2 × 3 − 1) = 5 m."],
    ["The slope of a position–time graph gives:", ["Acceleration", "Velocity", "Displacement", "Jerk"], 1, "dx/dt = velocity."],
    ["A stone is dropped from the top of a tower and reaches the ground in 4 s. The height of the tower is:", ["40 m", "60 m", "80 m", "160 m"], 2, "h = ½gt² = ½ × 10 × 16 = 80 m."],
    ["At the highest point of a vertical throw, the velocity and acceleration are:", ["0 and 0", "0 and g downward", "u and 0", "0 and g upward"], 1, "Velocity becomes zero, but gravity still acts downward."],
    ["Two trains 120 m and 80 m long move in opposite directions at 10 m/s and 15 m/s. Time to cross each other:", ["8 s", "10 s", "20 s", "4 s"], 0, "Total length 200 m / relative speed 25 m/s = 8 s."],
    ["The position of a particle is x = 3t² − 2t + 5 (SI). Its acceleration is:", ["3 m/s²", "6 m/s²", "−2 m/s²", "6t m/s²"], 1, "v = 6t − 2, a = 6 m/s²."],
    ["A ball thrown up returns to the thrower after 6 s. The speed with which it was thrown is:", ["10 m/s", "20 m/s", "30 m/s", "60 m/s"], 2, "Total time 2u/g = 6, so u = 30 m/s."],
  ],
});
