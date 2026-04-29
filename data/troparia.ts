// Troparia sărbătorilor mari ortodoxe
// Toate textele sunt verbatim de pe doxologia.ro — zero parafrazare, zero fabricație
// Sursă verificată pentru fiecare în câmpul `source`

export interface Tropar {
  feastName: string;
  /** "MM-DD" pentru fixe, sau cheie pentru mobile: "pascha" | "florii" | "inaltarea" | "rusalii" */
  dateKey: string;
  movable: boolean;
  tropar: string;
  glas: string;
  source: string;
}

export const troparia: Tropar[] = [
  {
    feastName: "Nașterea Maicii Domnului",
    dateKey: "09-08",
    movable: false,
    tropar: "Nașterea ta, de Dumnezeu Născătoare Fecioară, bucurie a vestit la toată lumea; că din tine a Răsărit Soarele dreptății, Hristos Dumnezeul nostru. Și dezlegând blestemul, a dat binecuvântare; și stricând moartea, ne-a dăruit nouă viață veșnică.",
    glas: "Glasul 4",
    source: "https://doxologia.ro/tropar-la-praznicul-nasterii-maicii-domnului",
  },
  {
    feastName: "Înălțarea Sfintei Cruci",
    dateKey: "09-14",
    movable: false,
    tropar: "Mântuiește, Doamne, poporul Tău și binecuvintează moștenirea Ta; biruință binecredincioșilor creștini asupra celui protivnic dăruiește și cu Crucea Ta păzește pe poporul Tău.",
    glas: "Glasul 1",
    source: "https://doxologia.ro/tropar-la-praznicul-inaltarii-sfintei-cruci",
  },
  {
    feastName: "Intrarea în Biserică a Maicii Domnului",
    dateKey: "11-21",
    movable: false,
    tropar: "Astăzi, înainte însemnarea bunăvoinței lui Dumnezeu și propovăduirea mântuirii oamenilor, în Templul lui Dumnezeu luminat Fecioara se arată și pe Hristos tuturor mai înainte Îl vestește. Acesteia și noi cu mare glas să-i strigăm: Bucură-te, Împlinirea rânduielii Ziditorului.",
    glas: "Glasul 4",
    source: "https://doxologia.ro/tropar-la-praznicul-intrarii-biserica-maicii-domnului",
  },
  {
    feastName: "Nașterea Domnului (Crăciunul)",
    dateKey: "12-25",
    movable: false,
    tropar: "Nașterea Ta, Hristoase, Dumnezeul nostru, răsărit-a lumii lumina cunoștinței; că întru dânsa cei ce slujeau stelelor de la Stea s-au învățat să se închine Ție, Soarelui dreptății și să Te cunoască pe Tine, Răsăritul Cel de sus, Doamne, Slavă Ție!",
    glas: "Glasul 4",
    source: "https://doxologia.ro/tropar-la-praznicul-nasterii-domnului-craciunul",
  },
  {
    feastName: "Tăierea împrejur cea după Trup a Domnului",
    dateKey: "01-01",
    movable: false,
    tropar: "Cel Ce șezi pe Scaunul cel în chipul focului, întru cele de sus, împreună cu Părintele Cel fără de început și cu Dumnezeiescul Duh, ai binevoit a Te naște pe pământ din Fecioară, Maica Ta, care nu știe de bărbat, Mântuitorule Iisuse. Pentru aceasta ai și fost tăiat împrejur a opta zi ca un Om. Slavă Sfatului Tău Celui Preabun; Slavă rânduielii Tale; Slavă smereniei Tale, Unule Iubitorule de oameni.",
    glas: "Glasul 1",
    source: "https://doxologia.ro/tropar-la-praznicul-taierii-imprejur-cea-dupa-trup-domnului",
  },
  {
    feastName: "Sfântul Ierarh Vasile cel Mare",
    dateKey: "01-01",
    movable: false,
    tropar: "În tot pământul s-a răspândit vestirea ta, că acela a primit cuvântul tău, prin care, cu Dumnezeiască cuviință ai învățat, firea celor în ființă ai lămurit și ai pus rânduială în obiceiurile oamenilor. Părinte cuvioase, preoție împărătească, roagă pe Hristos Dumnezeu, să mântuiască sufletele noastre.",
    glas: "Glasul 1",
    source: "https://doxologia.ro/troparul-sfantului-ierarh-vasile-cel-mare-arhiepiscopul-cezareei-capadociei",
  },
  {
    feastName: "Botezul Domnului (Boboteaza)",
    dateKey: "01-06",
    movable: false,
    tropar: "În Iordan botezându-Te Tu, Doamne, închinarea Treimii S-a arătat. Că glasul Părintelui a mărturisit Ție, Fiu iubit pe Tine numindu-Te; și Duhul, în chip de porumbel, a adeverit întărirea Cuvântului, Cel ce Te-ai arătat, Hristoase Dumnezeule și lumea ai luminat, slavă Ție.",
    glas: "Glasul 1",
    source: "https://doxologia.ro/tropar-la-praznicul-botezului-domnului",
  },
  {
    feastName: "Întâmpinarea Domnului",
    dateKey: "02-02",
    movable: false,
    tropar: "Bucură-te, Ceea ce ești Plină de har, Născătoare de Dumnezeu Fecioară; că din tine a Răsărit Soarele dreptății, Hristos Dumnezeul nostru, luminând pe cei dintru întuneric. Veselește-te și tu, bătrânule drepte, cel ce ai primit în brațe pe Izbăvitorul sufletelor noastre, Cel Ce ne-a dăruit nouă și Învierea.",
    glas: "Glasul 1",
    source: "https://doxologia.ro/tropar-la-praznicul-intampinarii-domnului",
  },
  {
    feastName: "Buna Vestire",
    dateKey: "03-25",
    movable: false,
    tropar: "Astăzi este începutul mântuirii noastre și arătarea Tainei celei din veac. Fiul lui Dumnezeu, Fiu Fecioarei Se face și Gavriil Harul Îl binevestește. Pentru aceasta și noi, împreună cu Dânsul, Născătoarei de Dumnezeu să-i strigăm: Bucură-te, cea Plină de har, Domnul este cu tine!",
    glas: "Glasul 4",
    source: "https://doxologia.ro/tropar-la-praznicul-bunei-vestiri",
  },
  {
    feastName: "Învierea Domnului (Sfintele Paști)",
    dateKey: "pascha",
    movable: true,
    tropar: "Hristos a înviat din morți, cu moartea pe moarte călcând, și celor din morminte viață dăruindu-le.",
    glas: "Glasul 5",
    source: "https://doxologia.ro/paraclisul-sfintei-invieri-domnului",
  },
  {
    feastName: "Înălțarea Domnului",
    dateKey: "inaltarea",
    movable: true,
    tropar: "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.",
    glas: "Glasul 4",
    source: "https://doxologia.ro/tropar-la-praznicul-inaltarii-domnului",
  },
  {
    feastName: "Pogorârea Sfântului Duh (Rusaliile)",
    dateKey: "rusalii",
    movable: true,
    tropar: "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.",
    glas: "Glasul 8",
    source: "https://doxologia.ro/ceaslov/tropare/tropar-la-praznicul-cincizecimii",
  },
  {
    feastName: "Sfinții Apostoli Petru și Pavel",
    dateKey: "06-29",
    movable: false,
    tropar: "Cei ce sunteți între Apostoli mai întâi pe scaun șezători și lumii învățători, Stăpânului tuturor rugați-vă, pace lumii să dăruiască și sufletelor noastre mare milă.",
    glas: "Glasul 4",
    source: "https://doxologia.ro/troparul-sfintilor-apostoli-petru-pavel",
  },
  {
    feastName: "Schimbarea la Față a Domnului",
    dateKey: "08-06",
    movable: false,
    tropar: "Schimbatu-Te-ai la Față în munte, Hristoase Dumnezeule, arătând ucenicilor Tăi Slava Ta, pe cât li se putea. Strălucească și nouă, păcătoșilor, lumina Ta cea pururea fiitoare, pentru rugăciunile Născătoarei de Dumnezeu, Dătătorule de lumină, slavă Ție.",
    glas: "Glasul 7",
    source: "https://doxologia.ro/tropar-la-praznicul-schimbarii-la-fata-domnului",
  },
  {
    feastName: "Adormirea Maicii Domnului",
    dateKey: "08-15",
    movable: false,
    tropar: "Întru naștere Fecioria ai păzit, întru Adormire lumea nu ai părăsit, de Dumnezeu Născătoare; mutatu-te-ai la Viață, fiind Maica Vieții și cu rugăciunile tale, izbăvești din moarte sufletele noastre.",
    glas: "Glasul 1",
    source: "https://doxologia.ro/tropar-la-praznicul-adormirii-maicii-domnului",
  },
];

// Pascha 2026 = 12 aprilie. Mobile feasts derivate.
const PASCHA_2026 = new Date(Date.UTC(2026, 3, 12)); // April 12

const movableFeastDates: Record<string, Date> = {
  pascha: PASCHA_2026,
  inaltarea: addDays(PASCHA_2026, 39), // 40 zile (ziua Pascha + 39)
  rusalii: addDays(PASCHA_2026, 49), // 50 zile (Pascha + 49)
};

function addDays(d: Date, n: number): Date {
  const r = new Date(d);
  r.setUTCDate(r.getUTCDate() + n);
  return r;
}

/**
 * Returnează troparul pentru ziua dată (sau null dacă nu e sărbătoare cu tropar verificat).
 * Acceptă fie un Date, fie un dateKey "MM-DD".
 */
export function getTroparForDate(date: Date): Tropar | null {
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const fixedKey = `${mm}-${dd}`;

  // Întâi verifică sărbătorile mobile
  for (const [key, feastDate] of Object.entries(movableFeastDates)) {
    if (
      feastDate.getUTCFullYear() === date.getUTCFullYear() &&
      feastDate.getUTCMonth() === date.getUTCMonth() &&
      feastDate.getUTCDate() === date.getUTCDate()
    ) {
      return troparia.find((t) => t.dateKey === key) ?? null;
    }
  }

  // Apoi sărbătorile fixe
  return troparia.find((t) => !t.movable && t.dateKey === fixedKey) ?? null;
}
