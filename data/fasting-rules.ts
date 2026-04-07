export interface FastingRule {
  allowed: string[];
  forbidden: string[];
  description: string;
}

export const fastingTypes: Record<string, FastingRule> = {
  post: {
    forbidden: ["Carne", "Lactate", "Ouă", "Pește", "Vin"],
    allowed: ["Legume", "Fructe", "Cereale", "Ulei de masline"],
    description: "Post aspru — fără produse de origine animală",
  },
  "dezlegare-peste": {
    forbidden: ["Carne", "Lactate", "Ouă"],
    allowed: ["Pește", "Legume", "Fructe", "Vin", "Ulei"],
    description: "Dezlegare la pește",
  },
  "dezlegare-vin-ulei": {
    forbidden: ["Carne", "Lactate", "Ouă", "Pește"],
    allowed: ["Legume", "Fructe", "Vin", "Ulei de masline"],
    description: "Dezlegare la vin și ulei",
  },
  harti: {
    forbidden: [],
    allowed: ["Toate alimentele", "Bucurați-vă!"],
    description: "Harți (dezlegare completă) — sărbătoare!",
  },
  liber: {
    forbidden: [],
    allowed: ["Toate alimentele"],
    description: "Nu este zi de post",
  },
};

export interface Recipe {
  name: string;
  time: string;
  cal: string;
  emoji: string;
  ingredients: string[];
}

export const fastingRecipes: Recipe[] = [
  { name: "Sarmale de post cu ciuperci", time: "90 min", cal: "280 kcal", emoji: "\u{1F96C}", ingredients: ["varză", "ciuperci", "orez", "ceapă", "morcov"] },
  { name: "Fasole bătută cu ceapă călită", time: "45 min", cal: "320 kcal", emoji: "\u{1FAD8}", ingredients: ["fasole boabe", "ceapă", "ulei", "boia"] },
  { name: "Salată de vinete", time: "30 min", cal: "180 kcal", emoji: "\u{1F346}", ingredients: ["vinete", "ceapă", "ulei", "sare"] },
  { name: "Mâncare de cartofi cu mărar", time: "50 min", cal: "250 kcal", emoji: "\u{1F954}", ingredients: ["cartofi", "ceapă", "ulei", "mărar", "boia"] },
  { name: "Ciorbă de legume", time: "60 min", cal: "150 kcal", emoji: "\u{1F372}", ingredients: ["cartofi", "morcov", "țelină", "roșii", "leuștean"] },
  { name: "Plăcintă cu mere de post", time: "75 min", cal: "210 kcal", emoji: "\u{1F34E}", ingredients: ["făină", "mere", "zahăr", "scorțișoară", "ulei"] },
  { name: "Mâncare de spanac", time: "40 min", cal: "160 kcal", emoji: "\u{1F96C}", ingredients: ["spanac", "ceapă", "usturoi", "ulei"] },
  { name: "Zacuscă de vinete", time: "120 min", cal: "190 kcal", emoji: "\u{1FAD9}", ingredients: ["vinete", "ardei", "roșii", "ceapă", "ulei"] },
];
