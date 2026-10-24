NEET.ch("chem-basic", {
  intro: "Laws of chemical combination · Atomic and molecular mass · Mole concept · Percentage composition · Empirical formula · Stoichiometry · Limiting reagent · Concentration terms",
  given: "N<sub>A</sub> = 6.022 × 10²³ mol⁻¹. Molar volume at STP (273 K, 1 bar) = 22.7 L; at 273 K, 1 atm = 22.4 L.",
  secs: [
    ["Laws of Chemical Combination", [
      ["tbl", ["Law", "Statement", "Given by"], [
        ["Conservation of mass", "Mass is neither created nor destroyed in a reaction", "Lavoisier"],
        ["Definite proportions", "A compound always contains the same elements in the same mass ratio", "Proust"],
        ["Multiple proportions", "When two elements form more than one compound, masses of one combining with a fixed mass of the other are in simple whole-number ratio", "Dalton"],
        ["Gaseous volumes", "Gases combine in simple volume ratios (same T and P)", "Gay-Lussac"],
        ["Avogadro's law", "Equal volumes of gases at the same T and P contain equal numbers of molecules", "Avogadro"]]],
      ["ex", "H₂O and H₂O₂ contain 16 g and 32 g of oxygen per 2 g of hydrogen. Which law is shown?", "Ratio of oxygen masses 16 : 32 = 1 : 2, a simple whole-number ratio: <b>law of multiple proportions</b>."],
    ]],
    ["Atomic Mass, Molecular Mass and the Mole", [
      ["box", "Key relations", ["1 amu (u) = 1/12 of the mass of a ¹²C atom = 1.66 × 10⁻²⁴ g", "Moles n = mass / molar mass = number of particles / N<sub>A</sub> = V (L at STP) / 22.7", "Average atomic mass = Σ(isotope mass × fractional abundance)"]],
      ["ul", ["Gram atomic mass of an element = mass of 1 mole of its atoms.", "Molar mass in g/mol is numerically equal to the molecular mass in u.", "Number of atoms = moles × N<sub>A</sub> × atoms per molecule."]],
      ["ex", "Chlorine is 75% ³⁵Cl and 25% ³⁷Cl. Find its average atomic mass.", "0.75 × 35 + 0.25 × 37 = <b>35.5 u</b>."],
      ["ex", "How many atoms are in 9 g of water?", "n = 9/18 = 0.5 mol of molecules. Atoms = 0.5 × 3 × 6.022 × 10²³ ≈ <b>9.03 × 10²³</b>."],
    ]],
    ["Percentage Composition and Formulas", [
      ["box", "Finding formulas", ["% of element = (mass of element in 1 mol / molar mass) × 100", "Empirical formula: divide % by atomic mass → divide by smallest → whole numbers", "Molecular formula = n × empirical formula; n = molar mass / empirical formula mass"]],
      ["ex", "A compound has C 40%, H 6.67%, O 53.3%. Molar mass is 180 g/mol. Find the molecular formula.", "Moles: C 3.33, H 6.67, O 3.33 → ratio 1 : 2 : 1 → CH₂O (mass 30). n = 180/30 = 6 → <b>C₆H₁₂O₆</b>."],
    ]],
    ["Stoichiometry and Limiting Reagent", [
      ["p", "A balanced equation gives the mole ratio of reactants and products. The <b>limiting reagent</b> is used up first and decides how much product forms."],
      ["ex", "3 mol of H₂ react with 2 mol of N₂ (N₂ + 3H₂ → 2NH₃). Find the limiting reagent and NH₃ formed.", "3 mol H₂ needs only 1 mol N₂, so <b>H₂ is limiting</b>. NH₃ formed = <b>2 mol</b>; 1 mol N₂ is left over."],
      ["ex", "How many grams of CO₂ form when 12 g of carbon burns completely?", "C + O₂ → CO₂: 1 mol C (12 g) gives 1 mol CO₂ = <b>44 g</b>."],
      ["tip", "Always divide each reactant's moles by its coefficient. The smallest value marks the limiting reagent."],
    ]],
    ["Concentration Terms", [
      ["tbl", ["Term", "Formula", "Depends on temperature?"], [
        ["Mass percent", "(mass solute / mass solution) × 100", "No"],
        ["Mole fraction x", "n<sub>A</sub> / (n<sub>A</sub> + n<sub>B</sub>); sum = 1", "No"],
        ["Molarity M", "mol solute / L solution", "Yes (volume changes)"],
        ["Molality m", "mol solute / kg solvent", "No"],
        ["ppm", "(mass solute / mass solution) × 10⁶", "No"]]],
      ["box", "Useful conversions", ["Dilution: M₁V₁ = M₂V₂", "Mixing: M = (M₁V₁ + M₂V₂)/(V₁ + V₂)", "Molarity from % w/w and density d (g/mL): M = (10 × % × d) / molar mass"]],
      ["ex", "Find the molarity of 98% (w/w) H₂SO₄ of density 1.84 g/mL.", "M = 10 × 98 × 1.84 / 98 = <b>18.4 M</b>."],
    ]],
  ],
  rev: [
    "Multiple proportions: simple whole-number mass ratio of one element.",
    "1 mol = 6.022 × 10²³ particles = molar mass in grams.",
    "Molecular formula = n × empirical formula.",
    "Limiting reagent decides the amount of product.",
    "Molality, mole fraction and mass % don't change with temperature; molarity does.",
    "M = 10 × % × d / molar mass.",
  ],
  mcq: [
    ["The number of molecules in 4.4 g of CO₂ is:", ["6.022 × 10²³", "6.022 × 10²²", "3.011 × 10²³", "1.2 × 10²³"], 1, "n = 4.4/44 = 0.1 mol → 6.022 × 10²² molecules."],
    ["The law of multiple proportions was given by:", ["Lavoisier", "Proust", "Dalton", "Gay-Lussac"], 2, "Dalton proposed it with his atomic theory."],
    ["The empirical formula of a compound with molecular formula C₆H₆ is:", ["CH", "C₂H₂", "C₃H₃", "C₆H₆"], 0, "Divide by 6."],
    ["The mass of 0.5 mol of O₂ is:", ["8 g", "16 g", "32 g", "64 g"], 1, "0.5 × 32 = 16 g."],
    ["2 mol of H₂ react with 2 mol of O₂ to form water. The limiting reagent is:", ["H₂", "O₂", "Both", "Neither"], 0, "2H₂ + O₂ → 2H₂O: 2 mol H₂ needs only 1 mol O₂."],
    ["The mole fraction of solute in a solution of 1 mol solute in 9 mol water is:", ["0.1", "0.9", "0.11", "1"], 0, "1/(1 + 9) = 0.1."],
    ["Which concentration term depends on temperature?", ["Molality", "Mole fraction", "Molarity", "Mass percent"], 2, "Molarity uses volume, which changes with temperature."],
    ["The percentage of oxygen in H₂O is about:", ["11.1%", "88.9%", "50%", "33.3%"], 1, "16/18 × 100 ≈ 88.9%."],
    ["100 mL of 0.5 M NaCl is diluted to 500 mL. The new molarity is:", ["0.1 M", "0.25 M", "2.5 M", "0.05 M"], 0, "M₂ = 0.5 × 100/500 = 0.1 M."],
    ["One atomic mass unit is defined as:", ["Mass of a hydrogen atom", "1/12 the mass of a ¹²C atom", "1/16 the mass of an oxygen atom", "Mass of a proton"], 1, "Current standard based on carbon-12."],
  ],
});
