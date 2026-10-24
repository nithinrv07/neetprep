NEET.ch("phy-thermal", {
  intro: "Temperature scales · Thermal expansion · Specific heat · Calorimetry · Latent heat · Conduction, convection, radiation · Newton's law of cooling",
  secs: [
    ["Temperature and Scales", [
      ["box", "Conversion", ["(C − 0)/100 = (F − 32)/180 = (K − 273.15)/100", "−40 °C = −40 °F", "A change of 1 °C = 1 K = 1.8 °F"]],
      ["ex", "At what temperature do the Fahrenheit reading and the Kelvin reading coincide?", "(F − 32)/180 = (K − 273)/100 with F = K = x: 100x − 3200 = 180x − 49140 → x ≈ <b>574.25</b>."],
    ]],
    ["Thermal Expansion", [
      ["box", "Expansion", ["Linear: ΔL = αLΔT", "Area: ΔA = βAΔT", "Volume: ΔV = γVΔT", "For isotropic solids: α : β : γ = 1 : 2 : 3"]],
      ["ul", ["Water contracts from 0 °C to 4 °C and is densest at 4 °C (anomalous expansion). That is why lakes freeze from the top and fish survive below.", "Gaps are left in railway tracks; bimetallic strips bend towards the metal with lower α when heated.", "A hole in a plate expands as if it were made of the plate's material."]],
      ["ex", "A 10 m steel rail (α = 1.2 × 10⁻⁵ /°C) is heated by 40 °C. Find its expansion.", "ΔL = 1.2 × 10⁻⁵ × 10 × 40 = 4.8 × 10⁻³ m = <b>4.8 mm</b>."],
    ]],
    ["Specific Heat and Calorimetry", [
      ["box", "Heat", ["Q = mcΔT (c = specific heat, J/kg K)", "Heat capacity = mc; molar heat capacity C = Q/(nΔT)", "Principle of calorimetry: heat lost = heat gained", "Water: c = 4186 J/kg K (1 cal/g °C) — very high, so it is a good coolant"]],
      ["ex", "200 g of water at 80 °C is mixed with 300 g of water at 20 °C. Find the final temperature.", "200(80 − T) = 300(T − 20) → 16000 + 6000 = 500T → <b>T = 44 °C</b>."],
    ]],
    ["Change of State and Latent Heat", [
      ["box", "Latent heat", ["Q = mL (temperature stays constant during change of state)", "Ice: L<sub>f</sub> = 3.36 × 10⁵ J/kg (80 cal/g)", "Steam: L<sub>v</sub> = 2.26 × 10⁶ J/kg (540 cal/g)"]],
      ["ul", ["Melting point of ice falls with pressure (regelation); boiling point rises with pressure (pressure cooker).", "Burns from steam are worse than from boiling water because steam releases latent heat too.", "Sublimation: solid to vapour directly (dry ice, camphor)."]],
      ["ex", "How much heat converts 10 g of ice at 0 °C into water at 20 °C? (L = 80 cal/g)", "Q = 10 × 80 + 10 × 1 × 20 = <b>1000 cal</b>."],
    ]],
    ["Heat Transfer", [
      ["box", "Conduction and radiation", ["Conduction: H = KA(T₁ − T₂)/L", "Thermal resistance R = L/KA; series R = R₁ + R₂, parallel 1/R = 1/R₁ + 1/R₂", "Stefan–Boltzmann: E = eσAT⁴ (σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴)", "Wien's law: λ<sub>m</sub>T = b = 2.9 × 10⁻³ m K"]],
      ["ul", ["Convection needs a fluid and gravity: sea and land breezes, trade winds.", "A good absorber is a good emitter (Kirchhoff's law). A perfect black body absorbs all radiation.", "Hotter stars look bluish (smaller λ<sub>m</sub>); cooler stars look reddish."]],
      ["ex", "A body's absolute temperature is doubled. By what factor does its radiated power increase?", "P ∝ T⁴, so <b>16 times</b>."],
    ]],
    ["Newton's Law of Cooling", [
      ["box", "Cooling", ["Rate of cooling −dT/dt = k(T − T<sub>s</sub>) for small temperature differences", "Average form: (T₁ − T₂)/t = k[(T₁ + T₂)/2 − T<sub>s</sub>]"]],
      ["ex", "A body cools from 80 °C to 60 °C in 5 min in a room at 20 °C. How long to cool from 60 °C to 40 °C?", "First: 20/5 = k(70 − 20) → k = 0.08. Second: 20/t = 0.08 × (50 − 20) = 2.4 → <b>t ≈ 8.33 min</b>."],
    ]],
  ],
  rev: [
    "−40 is the same on Celsius and Fahrenheit scales.",
    "α : β : γ = 1 : 2 : 3.",
    "Water is densest at 4 °C.",
    "Temperature is constant during melting or boiling.",
    "Radiated power ∝ T⁴; λ<sub>m</sub>T = constant.",
    "Newton's cooling: rate ∝ excess temperature.",
  ],
  mcq: [
    ["The temperature at which Celsius and Fahrenheit readings are equal is:", ["0°", "−40°", "40°", "−273°"], 1, "C = F = x: x/100 = (x − 32)/180 → x = −40."],
    ["For an isotropic solid, the ratio α : β : γ is:", ["1 : 2 : 3", "3 : 2 : 1", "1 : 3 : 2", "1 : 1 : 1"], 0, "β = 2α, γ = 3α."],
    ["Water has maximum density at:", ["0 °C", "4 °C", "100 °C", "−4 °C"], 1, "Anomalous expansion of water between 0 and 4 °C."],
    ["If the absolute temperature of a black body is doubled, the power radiated becomes:", ["2 times", "4 times", "8 times", "16 times"], 3, "P ∝ T⁴ = 2⁴ = 16."],
    ["Wien's displacement law relates:", ["λ<sub>m</sub> and T", "Power and T", "Emissivity and absorptivity", "Heat and work"], 0, "λ<sub>m</sub>T = constant."],
    ["100 g water at 90 °C is mixed with 100 g water at 30 °C. The final temperature is:", ["50 °C", "60 °C", "70 °C", "45 °C"], 1, "Equal masses: average = 60 °C."],
    ["Steam burns are more severe than boiling-water burns because steam:", ["Is hotter", "Has latent heat", "Has higher specific heat", "Moves faster"], 1, "Steam gives up 540 cal/g of latent heat on condensing."],
    ["Heat needed to melt 5 g of ice at 0 °C (L = 80 cal/g) is:", ["80 cal", "400 cal", "16 cal", "540 cal"], 1, "Q = mL = 5 × 80 = 400 cal."],
    ["Two rods of the same length and area with conductivities K and 2K are joined in series. The equivalent conductivity is:", ["3K/2", "4K/3", "3K", "2K/3"], 1, "Series: 2L/K<sub>eq</sub> = L/K + L/2K → K<sub>eq</sub> = 4K/3."],
    ["A hot star appears bluish because:", ["It is closer", "Its λ<sub>m</sub> is shorter", "It is larger", "It has more mass"], 1, "Higher T gives shorter λ<sub>m</sub> (Wien's law)."],
    ["Sea breeze is an example of heat transfer by:", ["Conduction", "Convection", "Radiation", "All three"], 1, "Bulk movement of air due to temperature difference."],
    ["A 1 m rod (α = 2 × 10⁻⁵ /K) is heated by 50 K. Its increase in length is:", ["0.1 mm", "1 mm", "10 mm", "0.01 mm"], 1, "ΔL = 2 × 10⁻⁵ × 1 × 50 = 10⁻³ m = 1 mm."],
  ],
});
