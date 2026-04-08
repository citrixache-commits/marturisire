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
  servings: string;
  emoji: string;
  ingredients: string[];
  steps: string[];
}

export const fastingRecipes: Recipe[] = [
  {
    name: "Sarmale de post cu ciuperci",
    time: "90 min",
    servings: "6 porții",
    emoji: "\u{1F96C}",
    ingredients: [
      "1 varză murată mare",
      "500g ciuperci champignon",
      "200g orez",
      "2 cepe mari",
      "2 morcovi",
      "3 linguri ulei de floarea-soarelui",
      "1 linguriță boia dulce",
      "sare, piper, cimbru după gust",
      "500ml bulion de roșii",
    ],
    steps: [
      "Spală varza murată și desparte foile cu grijă. Dacă e prea sărată, las-o la desărat 30 de minute în apă rece.",
      "Toacă ciupercile mărunt. Curăță și toacă ceapa și morcovii.",
      "Încinge uleiul într-o tigaie și călește ceapa 3-4 minute până devine sticloasă. Adaugă morcovii și ciupercile și călește încă 5 minute.",
      "Adaugă orezul spălat, boia, sare, piper și cimbru. Amestecă bine și lasă 2 minute pe foc.",
      "Pune câte o lingură de compoziție pe fiecare frunză de varză și rulează-le strâns, cu capetele îndoite înăuntru.",
      "Așază sarmalele în oală, una lângă alta, în straturi. Pune între ele foi de varză tocată.",
      "Toarnă bulionul de roșii și apă cât să le acopere. Pune un capac de farfurie deasupra ca să nu plutească.",
      "Lasă la fiert la foc mic 60 de minute. Servește calde, cu mămăliguță și ardei iute.",
    ],
  },
  {
    name: "Fasole bătută cu ceapă călită",
    time: "45 min",
    servings: "4 porții",
    emoji: "\u{1FAD8}",
    ingredients: [
      "500g fasole boabe (înmuiată de seara)",
      "2 cepe mari",
      "4 linguri ulei de floarea-soarelui",
      "1 linguriță boia dulce",
      "sare, piper după gust",
      "1 frunză de dafin",
    ],
    steps: [
      "Fierbe fasolea înmuiată în apă cu o frunză de dafin, la foc mic, 60-90 de minute, până se înmoaie bine. Schimbă apa o dată după primele 15 minute de fierbere.",
      "Scurge fasolea fiartă, păstrând puțină zeamă. Scoate frunza de dafin.",
      "Pasează fasolea cu un blender sau o furculiță. Adaugă zeamă câte puțin până obții o consistență cremoasă.",
      "Curăță ceapa, taie-o în jumătăți de rondele subțiri.",
      "Încinge uleiul într-o tigaie și călește ceapa la foc mediu 10-12 minute, până devine aurie și ușor caramelizată. Adaugă boia în ultimul minut.",
      "Întinde fasolea bătută pe farfurie și pune deasupra ceapa călită cu tot uleiul din tigaie. Servește cu pâine proaspătă și murături.",
    ],
  },
  {
    name: "Salată de vinete coapte",
    time: "40 min",
    servings: "4 porții",
    emoji: "\u{1F346}",
    ingredients: [
      "4 vinete mari",
      "1 ceapă mică (opțional)",
      "3-4 linguri ulei de floarea-soarelui",
      "sare după gust",
      "roșii pentru servit",
    ],
    steps: [
      "Spală vinetele și înțeapă-le cu furculița în câteva locuri ca să nu plesnească.",
      "Coace vinetele direct pe flacăra aragazului sau la grătar, întorcându-le din când în când, până pielea se carbonizează și miezul e moale (15-20 minute).",
      "Pune vinetele coapte imediat într-un castron cu apă rece și curăță pielea arsă.",
      "Lasă vinetele într-o strecurătoare 15-20 de minute cu coada în jos, apăsând ușor, ca să se scurgă tot licoarea amară.",
      "Toacă vinetele mărunt pe un tocător de lemn cu un cuțit care NU e de metal (cuțitul de metal le oxidează și le face amare). Sau folosește un cuțit de ceramică.",
      "Pune vinetele tocate într-un castron și adaugă uleiul treptat, amestecând continuu într-o singură direcție, ca la maioneză. Adaugă sare după gust și ceapa tocată fin dacă dorești.",
      "Servește rece, cu pâine prăjită și roșii feliate.",
    ],
  },
  {
    name: "Ciorbă de legume cu leuștean",
    time: "50 min",
    servings: "6 porții",
    emoji: "\u{1F372}",
    ingredients: [
      "2 cartofi mari",
      "2 morcovi",
      "1 rădăcină de pătrunjel",
      "1 rădăcină de țelină mică",
      "1 ceapă",
      "1 ardei gras",
      "200g fasole verde (sau conservă)",
      "3 roșii sau 2 linguri bulion",
      "2 litri apă",
      "borș sau lămâie pentru acrit",
      "leuștean proaspăt, sare, piper",
    ],
    steps: [
      "Curăță și taie toate legumele cubulețe: cartofi, morcovi, țelină, pătrunjel, ceapă, ardei.",
      "Pune apa la fiert. Când clocotește, adaugă morcovii, țelina și pătrunjelul — astea fierb mai greu.",
      "După 10 minute, adaugă cartofii, ceapa și ardeiul.",
      "După încă 10 minute, adaugă fasolea verde (dacă e proaspătă; dacă e din conservă, adaug-o la sfârșit).",
      "Adaugă roșiile rase pe răzătoare sau bulionul. Lasă să fiarbă încă 5 minute.",
      "Acritura: încălzește borșul separat (nu-l fierbe!) și adaugă-l în ciorbă. Sau stoarce o lămâie. Potrivește de sare și piper.",
      "La final, adaugă leușteanul tocat și oprește focul. Pune capac și lasă 5 minute să se infuzeze. Servește caldă cu ardei iute.",
    ],
  },
  {
    name: "Mâncare de cartofi cu mărar",
    time: "45 min",
    servings: "4 porții",
    emoji: "\u{1F954}",
    ingredients: [
      "1 kg cartofi",
      "1 ceapă mare",
      "3 linguri ulei",
      "2 linguri bulion de roșii",
      "1 legătură mare de mărar",
      "1 linguriță boia dulce",
      "sare, piper după gust",
    ],
    steps: [
      "Curăță cartofii și taie-i cuburi de 2-3 cm. Curăță și toacă ceapa mărunt.",
      "Încinge uleiul într-o oală și călește ceapa 3-4 minute la foc mediu.",
      "Adaugă boia, amestecă rapid (boia se arde ușor), apoi adaugă imediat bulionul de roșii și un pahar de apă.",
      "Adaugă cartofii și apă cât să-i acopere. Sare, piper.",
      "Lasă la fiert la foc mic, cu capac, 25-30 de minute, până cartofii sunt fragezi.",
      "La final, adaugă mărarul tocat din belșug. Servește caldă cu pâine sau mămăliguță.",
    ],
  },
  {
    name: "Plăcintă cu mere de post",
    time: "75 min",
    servings: "8 porții",
    emoji: "\u{1F34E}",
    ingredients: [
      "500g făină",
      "200ml apă călduță",
      "100ml ulei de floarea-soarelui",
      "1 plic praf de copt",
      "un praf de sare",
      "1 kg mere (ionathan sau golden)",
      "100g zahăr",
      "1 linguriță scorțișoară",
      "zahăr pudră pentru presărat",
    ],
    steps: [
      "Amestecă făina cu praful de copt și sarea. Adaugă uleiul și apa călduță treptat, frământând până obții un aluat moale și elastic. Lasă-l la odihnit 15 minute.",
      "Curăță merele, dă-le pe răzătoarea mare. Stoarce-le ușor de zeamă. Amestecă-le cu zahărul și scorțișoara.",
      "Împarte aluatul în 2 bucăți (una puțin mai mare pentru bază).",
      "Întinde prima foaie și așaz-o într-o tavă unsă cu ulei.",
      "Pune umplutura de mere uniform pe toată suprafața.",
      "Întinde a doua foaie și pune-o deasupra. Înțeapă-o cu furculița în câteva locuri.",
      "Dă la cuptor preîncălzit la 180°C, 35-40 de minute, până se rumenește frumos deasupra.",
      "Scoate din cuptor, lasă 10 minute să se răcorească, apoi presară zahăr pudră deasupra. Se taie în pătrate.",
    ],
  },
  {
    name: "Mâncare de spanac cu usturoi",
    time: "30 min",
    servings: "4 porții",
    emoji: "\u{1F96C}",
    ingredients: [
      "800g spanac proaspăt (sau 400g congelat)",
      "1 ceapă",
      "4-5 căței de usturoi",
      "3 linguri ulei",
      "1 lingură făină",
      "sare, piper după gust",
    ],
    steps: [
      "Spală spanacul proaspăt în mai multe ape. Dacă e congelat, lasă-l la decongelat.",
      "Fierbe spanacul 3-4 minute în apă cu sare. Scurge-l și toacă-l grosier.",
      "Într-o oală, călește ceapa tocată în ulei 3-4 minute.",
      "Adaugă făina, amestecă 1 minut, apoi adaugă un pahar de apă treptat, amestecând continuu ca să nu facă cocoloașe.",
      "Adaugă spanacul tocat, amestecă bine. Lasă 5 minute la foc mic.",
      "Adaugă usturoiul pisat, sare și piper. Amestecă și oprește focul. Servește cu mămăliguță.",
    ],
  },
  {
    name: "Zacuscă de vinete și ardei",
    time: "120 min",
    servings: "10 porții",
    emoji: "\u{1FAD9}",
    ingredients: [
      "2 kg vinete",
      "2 kg ardei copți (kapia)",
      "500g ceapă",
      "500g roșii sau bulion de roșii",
      "200ml ulei de floarea-soarelui",
      "3-4 foi de dafin",
      "sare, piper, boabe de piper",
    ],
    steps: [
      "Coace vinetele pe flacără sau la cuptor până pielea se carbonizează. Curăță-le și lasă-le la scurs 30 de minute.",
      "Coace ardeii la cuptor la 200°C, 25-30 de minute. Scoate-i în pungi de plastic, lasă-i 10 minute, apoi curăță-i de piele și semințe.",
      "Toacă vinetele și ardeii separat — manual cu cuțitul, nu la blender (textura e mai bună).",
      "Călește ceapa tocată în ulei 10 minute, până devine aurie.",
      "Adaugă roșiile rase (sau bulionul), amestecă și lasă 5 minute.",
      "Adaugă ardeii tocați. Amestecă și lasă la foc mic 20 de minute, amestecând din când în când.",
      "Adaugă vinetele. Amestecă bine, adaugă sare, piper, foile de dafin. Lasă la foc mic 30-40 de minute, amestecând des ca să nu se lipească.",
      "Scoate foile de dafin. Se poate servi rece pe pâine prăjită sau se pune în borcane sterile pentru iarnă.",
    ],
  },
];
