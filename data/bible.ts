export interface BibleBook {
  id: string;
  name: string;
  abbrev: string;
  chapters: number;
  testament: "vechi" | "nou" | "deuterocanonic";
  category: string;
}

export const bibleBooks: BibleBook[] = [
  // Vechiul Testament — Pentateuhul
  { id: "gen", name: "Facerea (Geneza)", abbrev: "Fac", chapters: 50, testament: "vechi", category: "Pentateuhul" },
  { id: "exod", name: "Ieșirea (Exodul)", abbrev: "Ieș", chapters: 40, testament: "vechi", category: "Pentateuhul" },
  { id: "lev", name: "Leviticul", abbrev: "Lev", chapters: 27, testament: "vechi", category: "Pentateuhul" },
  { id: "num", name: "Numerii", abbrev: "Num", chapters: 36, testament: "vechi", category: "Pentateuhul" },
  { id: "deut", name: "Deuteronomul", abbrev: "Deut", chapters: 34, testament: "vechi", category: "Pentateuhul" },
  // Cărți Istorice
  { id: "ios", name: "Iosua Navi", abbrev: "Ios", chapters: 24, testament: "vechi", category: "Cărți Istorice" },
  { id: "jud", name: "Judecătorii", abbrev: "Jud", chapters: 21, testament: "vechi", category: "Cărți Istorice" },
  { id: "rut", name: "Rut", abbrev: "Rut", chapters: 4, testament: "vechi", category: "Cărți Istorice" },
  { id: "1reg", name: "1 Regi (1 Samuel)", abbrev: "1Reg", chapters: 31, testament: "vechi", category: "Cărți Istorice" },
  { id: "2reg", name: "2 Regi (2 Samuel)", abbrev: "2Reg", chapters: 24, testament: "vechi", category: "Cărți Istorice" },
  { id: "3reg", name: "3 Regi (1 Împărați)", abbrev: "3Reg", chapters: 22, testament: "vechi", category: "Cărți Istorice" },
  { id: "4reg", name: "4 Regi (2 Împărați)", abbrev: "4Reg", chapters: 25, testament: "vechi", category: "Cărți Istorice" },
  { id: "1par", name: "1 Paralipomena (1 Cronici)", abbrev: "1Par", chapters: 29, testament: "vechi", category: "Cărți Istorice" },
  { id: "2par", name: "2 Paralipomena (2 Cronici)", abbrev: "2Par", chapters: 36, testament: "vechi", category: "Cărți Istorice" },
  { id: "ezra", name: "Ezdra", abbrev: "Ezd", chapters: 10, testament: "vechi", category: "Cărți Istorice" },
  { id: "neem", name: "Neemia", abbrev: "Neem", chapters: 13, testament: "vechi", category: "Cărți Istorice" },
  { id: "est", name: "Estera", abbrev: "Est", chapters: 10, testament: "vechi", category: "Cărți Istorice" },
  // Cărți Poetice & de Înțelepciune
  { id: "iov", name: "Iov", abbrev: "Iov", chapters: 42, testament: "vechi", category: "Cărți Poetice" },
  { id: "ps", name: "Psalmii", abbrev: "Ps", chapters: 150, testament: "vechi", category: "Cărți Poetice" },
  { id: "pild", name: "Proverbele (Pildele)", abbrev: "Pild", chapters: 31, testament: "vechi", category: "Cărți Poetice" },
  { id: "ecl", name: "Ecclesiastul", abbrev: "Ecl", chapters: 12, testament: "vechi", category: "Cărți Poetice" },
  { id: "cant", name: "Cântarea Cântărilor", abbrev: "Cânt", chapters: 8, testament: "vechi", category: "Cărți Poetice" },
  // Profeți Mari
  { id: "is", name: "Isaia", abbrev: "Is", chapters: 66, testament: "vechi", category: "Profeți Mari" },
  { id: "ier", name: "Ieremia", abbrev: "Ier", chapters: 52, testament: "vechi", category: "Profeți Mari" },
  { id: "plang", name: "Plângerile lui Ieremia", abbrev: "Plâng", chapters: 5, testament: "vechi", category: "Profeți Mari" },
  { id: "iez", name: "Iezechiel", abbrev: "Iez", chapters: 48, testament: "vechi", category: "Profeți Mari" },
  { id: "dan", name: "Daniel", abbrev: "Dan", chapters: 14, testament: "vechi", category: "Profeți Mari" },
  // Profeți Mici
  { id: "osea", name: "Osea", abbrev: "Os", chapters: 14, testament: "vechi", category: "Profeți Mici" },
  { id: "amos", name: "Amos", abbrev: "Am", chapters: 9, testament: "vechi", category: "Profeți Mici" },
  { id: "ioel", name: "Ioel", abbrev: "Ioel", chapters: 4, testament: "vechi", category: "Profeți Mici" },
  { id: "avd", name: "Avdie", abbrev: "Avd", chapters: 1, testament: "vechi", category: "Profeți Mici" },
  { id: "iona", name: "Iona", abbrev: "Iona", chapters: 4, testament: "vechi", category: "Profeți Mici" },
  { id: "mih", name: "Miheia", abbrev: "Mih", chapters: 7, testament: "vechi", category: "Profeți Mici" },
  { id: "naum", name: "Naum", abbrev: "Naum", chapters: 3, testament: "vechi", category: "Profeți Mici" },
  { id: "avac", name: "Avacum", abbrev: "Avac", chapters: 3, testament: "vechi", category: "Profeți Mici" },
  { id: "sof", name: "Sofonie", abbrev: "Sof", chapters: 3, testament: "vechi", category: "Profeți Mici" },
  { id: "ageu", name: "Agheu", abbrev: "Ag", chapters: 2, testament: "vechi", category: "Profeți Mici" },
  { id: "zah", name: "Zaharia", abbrev: "Zah", chapters: 14, testament: "vechi", category: "Profeți Mici" },
  { id: "mal", name: "Maleahi", abbrev: "Mal", chapters: 3, testament: "vechi", category: "Profeți Mici" },
  // Cărți Deuterocanonice (ORTODOXE)
  { id: "tobit", name: "Tobit", abbrev: "Tob", chapters: 14, testament: "deuterocanonic", category: "Deuterocanonice" },
  { id: "iudit", name: "Iudit", abbrev: "Iud", chapters: 16, testament: "deuterocanonic", category: "Deuterocanonice" },
  { id: "intsolomon", name: "Înțelepciunea lui Solomon", abbrev: "ÎnțSol", chapters: 19, testament: "deuterocanonic", category: "Deuterocanonice" },
  { id: "sirah", name: "Înțelepciunea lui Isus Sirah", abbrev: "Sir", chapters: 51, testament: "deuterocanonic", category: "Deuterocanonice" },
  { id: "baruh", name: "Baruh", abbrev: "Bar", chapters: 6, testament: "deuterocanonic", category: "Deuterocanonice" },
  { id: "1mac", name: "1 Macabei", abbrev: "1Mac", chapters: 16, testament: "deuterocanonic", category: "Deuterocanonice" },
  { id: "2mac", name: "2 Macabei", abbrev: "2Mac", chapters: 15, testament: "deuterocanonic", category: "Deuterocanonice" },
  { id: "3ezra", name: "3 Ezdra", abbrev: "3Ezd", chapters: 9, testament: "deuterocanonic", category: "Deuterocanonice" },
  // Noul Testament — Evanghelii
  { id: "mt", name: "Evanghelia după Matei", abbrev: "Mt", chapters: 28, testament: "nou", category: "Evanghelii" },
  { id: "mc", name: "Evanghelia după Marcu", abbrev: "Mc", chapters: 16, testament: "nou", category: "Evanghelii" },
  { id: "lc", name: "Evanghelia după Luca", abbrev: "Lc", chapters: 24, testament: "nou", category: "Evanghelii" },
  { id: "in", name: "Evanghelia după Ioan", abbrev: "In", chapters: 21, testament: "nou", category: "Evanghelii" },
  // Faptele Apostolilor
  { id: "fapte", name: "Faptele Apostolilor", abbrev: "Fapte", chapters: 28, testament: "nou", category: "Faptele Apostolilor" },
  // Epistolele Sf. Ap. Pavel
  { id: "rom", name: "Romani", abbrev: "Rom", chapters: 16, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "1cor", name: "1 Corinteni", abbrev: "1Cor", chapters: 16, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "2cor", name: "2 Corinteni", abbrev: "2Cor", chapters: 13, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "gal", name: "Galateni", abbrev: "Gal", chapters: 6, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "efes", name: "Efeseni", abbrev: "Efes", chapters: 6, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "filip", name: "Filipeni", abbrev: "Flp", chapters: 4, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "col", name: "Coloseni", abbrev: "Col", chapters: 4, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "1tes", name: "1 Tesaloniceni", abbrev: "1Tes", chapters: 5, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "2tes", name: "2 Tesaloniceni", abbrev: "2Tes", chapters: 3, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "1tim", name: "1 Timotei", abbrev: "1Tim", chapters: 6, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "2tim", name: "2 Timotei", abbrev: "2Tim", chapters: 4, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "tit", name: "Tit", abbrev: "Tit", chapters: 3, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "filim", name: "Filimon", abbrev: "Flm", chapters: 1, testament: "nou", category: "Epistolele lui Pavel" },
  { id: "evrei", name: "Evrei", abbrev: "Evr", chapters: 13, testament: "nou", category: "Epistolele lui Pavel" },
  // Epistolele Soborniceşti
  { id: "iac", name: "Iacob", abbrev: "Iac", chapters: 5, testament: "nou", category: "Epistole Soborniceşti" },
  { id: "1pet", name: "1 Petru", abbrev: "1Pt", chapters: 5, testament: "nou", category: "Epistole Soborniceşti" },
  { id: "2pet", name: "2 Petru", abbrev: "2Pt", chapters: 3, testament: "nou", category: "Epistole Soborniceşti" },
  { id: "1in", name: "1 Ioan", abbrev: "1In", chapters: 5, testament: "nou", category: "Epistole Soborniceşti" },
  { id: "2in", name: "2 Ioan", abbrev: "2In", chapters: 1, testament: "nou", category: "Epistole Soborniceşti" },
  { id: "3in", name: "3 Ioan", abbrev: "3In", chapters: 1, testament: "nou", category: "Epistole Soborniceşti" },
  { id: "iuda", name: "Iuda", abbrev: "Iuda", chapters: 1, testament: "nou", category: "Epistole Soborniceşti" },
  // Apocalipsa
  { id: "apoc", name: "Apocalipsa", abbrev: "Apoc", chapters: 22, testament: "nou", category: "Apocalipsa" },
];

export function getBooksByCategory(): { category: string; books: BibleBook[] }[] {
  const categories: { category: string; books: BibleBook[] }[] = [];
  const seen = new Set<string>();
  for (const book of bibleBooks) {
    if (!seen.has(book.category)) {
      seen.add(book.category);
      categories.push({ category: book.category, books: [] });
    }
    categories.find((c) => c.category === book.category)!.books.push(book);
  }
  return categories;
}

// Sample verses for MVP — Matei 1 (will be expanded with full Bible API later)
export const sampleVerses: Record<string, string[]> = {
  "mt-1": [
    "Cartea neamului lui Iisus Hristos, fiul lui David, fiul lui Avraam.",
    "Avraam a născut pe Isaac, Isaac a născut pe Iacob, iar Iacob a născut pe Iuda și pe frații lui.",
    "Iuda a născut pe Fares și pe Zara, din Tamar; Fares a născut pe Esrom, iar Esrom a născut pe Aram.",
    "Aram a născut pe Aminadav, Aminadav a născut pe Naason, iar Naason a născut pe Salmon.",
    "Salmon a născut pe Booz, din Rahav; Booz a născut pe Oved, din Rut; iar Oved a născut pe Iesei.",
    "Iesei a născut pe David împăratul. David împăratul a născut pe Solomon, din femeia lui Urie.",
    "Solomon a născut pe Roboam, Roboam a născut pe Abia, iar Abia a născut pe Asa.",
    "Asa a născut pe Iosafat, Iosafat a născut pe Ioram, iar Ioram a născut pe Ozia.",
    "Ozia a născut pe Ioatam, Ioatam a născut pe Ahaz, iar Ahaz a născut pe Iezechia.",
    "Iezechia a născut pe Manase, Manase a născut pe Amon, iar Amon a născut pe Iosia.",
    "Iosia a născut pe Iehonia și pe frații lui, la strămutarea în Babilon.",
    "Iar după strămutarea în Babilon, Iehonia a născut pe Salatiel, iar Salatiel a născut pe Zorobabel.",
    "Zorobabel a născut pe Abiud, Abiud a născut pe Eliachim, iar Eliachim a născut pe Azor.",
    "Azor a născut pe Sadoc, Sadoc a născut pe Ahim, iar Ahim a născut pe Eliud.",
    "Eliud a născut pe Eleazar, Eleazar a născut pe Matan, iar Matan a născut pe Iacob.",
    "Iacob a născut pe Iosif, logodnicul Mariei, din care S-a născut Iisus, Care Se cheamă Hristos.",
    "Deci toate neamurile de la Avraam până la David sunt paisprezece neamuri; și de la David până la strămutarea în Babilon sunt paisprezece neamuri; și de la strămutarea în Babilon până la Hristos sunt paisprezece neamuri.",
    "Iar nașterea lui Iisus Hristos așa a fost: Maria, mama Lui, fiind logodită cu Iosif, fără să fi fost ei împreună, s-a aflat având în pântece de la Duhul Sfânt.",
    "Iosif, logodnicul ei, drept fiind și nevrând s-o vădească, a voit s-o lase în ascuns.",
    "Și cugetând el acestea, iată îngerul Domnului i s-a arătat în vis, grăind: Iosife, fiul lui David, nu te teme a lua pe Maria, logodnica ta, că ce s-a zămislit într-însa este de la Duhul Sfânt.",
    "Ea va naște Fiu și vei chema numele Lui Iisus, căci El va mântui pe poporul Său de păcatele lor.",
    "Acestea toate s-au făcut ca să se împlinească ceea ce s-a zis de Domnul prin proorocul care zice:",
    "\u201EIată, Fecioara va avea în pântece și va naște Fiu și vor chema numele Lui Emanuel, care se tâlcuiește: Cu noi este Dumnezeu\u201D.",
    "Și deșteptându-se din somn, Iosif a făcut așa precum i-a poruncit îngerul Domnului și a luat la el pe logodnica sa.",
    "Și n-a cunoscut-o pe ea până ce a născut pe Fiul său Cel Întâi-Născut și a chemat numele Lui Iisus.",
  ],
  "ps-1": [
    "Fericit bărbatul care n-a umblat în sfatul necredincioșilor și în calea păcătoșilor nu a stat și pe scaunul hulitorilor n-a șezut,",
    "Ci în legea Domnului e voia lui și la legea Lui va cugeta ziua și noaptea.",
    "Și va fi ca un pom răsădit lângă izvoarele apelor, care rodul său va da la vremea sa și frunza lui nu va cădea și toate câte va face vor spori.",
    "Nu sunt așa necredincioșii, nu sunt așa! Ci ca praful pe care-l spulberă vântul de pe fața pământului.",
    "De aceea nu se vor ridica necredincioșii la judecată, nici păcătoșii în sfatul drepților.",
    "Că știe Domnul calea drepților, iar calea necredincioșilor va pieri.",
  ],
  "in-1": [
    "La început era Cuvântul și Cuvântul era la Dumnezeu și Dumnezeu era Cuvântul.",
    "Acesta era întru început la Dumnezeu.",
    "Toate prin El s-au făcut; și fără El nimic nu s-a făcut din ce s-a făcut.",
    "Întru El era viață și viața era lumina oamenilor.",
    "Și lumina luminează în întuneric și întunericul nu a cuprins-o.",
    "Fost-a om trimis de la Dumnezeu, numele lui era Ioan.",
    "Acesta a venit spre mărturie, ca să mărturisească despre Lumină, ca toți să creadă prin el.",
    "Nu era el Lumina, ci a venit ca să mărturisească despre Lumină.",
    "Cuvântul era Lumina cea adevărată care luminează pe tot omul, care vine în lume.",
    "În lume era și lumea prin El s-a făcut, dar lumea nu L-a cunoscut.",
    "Întru ale Sale a venit, dar ai Săi nu L-a primit.",
    "Și celor câți L-au primit, care cred în numele Lui, le-a dat putere ca să se facă fii ai lui Dumnezeu,",
    "Care nu din sânge, nici din poftă trupească, nici din poftă bărbătească, ci de la Dumnezeu s-au născut.",
    "Și Cuvântul S-a făcut trup și S-a sălășluit între noi și am văzut slava Lui, slavă ca a Unuia-Născut din Tatăl, plin de har și de adevăr.",
  ],
};
