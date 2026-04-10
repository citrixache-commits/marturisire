export interface SaintDay {
  name: string;
  fasting: "post" | "dezlegare-peste" | "dezlegare-vin-ulei" | "harti" | "liber";
  type?: string;
  gospel?: string;
  gospelRef?: string;
}

// Calendar ortodox aprilie 2026 — Săptămâna Mare + Paște
export const saintsCalendar: Record<string, SaintDay> = {
  "2026-04-01": { name: "Sf. Cuv. Maria Egipteanca", fasting: "post", type: "Postul Mare", gospel: "Și intrând Iisus în Ierusalim, s-a cutremurat toată cetatea.", gospelRef: "Matei 21:10" },
  "2026-04-02": { name: "Sf. Cuv. Tit, făcătorul de minuni", fasting: "post", type: "Postul Mare", gospel: "Cereți și vi se va da; căutați și veți afla.", gospelRef: "Matei 7:7" },
  "2026-04-03": { name: "Sf. Cuv. Nichita Mărturisitorul", fasting: "post", type: "Postul Mare", gospel: "Eu sunt Calea, Adevărul și Viața.", gospelRef: "Ioan 14:6" },
  "2026-04-04": { name: "Sf. Cuv. Iosif Imnograful", fasting: "post", type: "Postul Mare", gospel: "Veniți la Mine toți cei osteniți și împovărați și Eu vă voi odihni.", gospelRef: "Matei 11:28" },
  "2026-04-05": { name: "Sf. Mc. Claudia și Sf. Mc. Teodora", fasting: "post", type: "Duminica Floriilor", gospel: "Binecuvântat este Cel ce vine întru numele Domnului! Osana întru cei de sus!", gospelRef: "Matei 21:9" },
  "2026-04-06": { name: "Sf. Eutihie, Patriarhul Constantinopolului", fasting: "post", type: "Luni din Săptămâna Mare", gospel: "De la smochin învățați pilda: când ramura lui se face fragedă, știți că vara e aproape.", gospelRef: "Matei 24:32" },
  "2026-04-07": { name: "Sf. Calliopie Muceniț", fasting: "post", type: "Marți din Săptămâna Mare", gospel: "Privegheați deci, că nu știți ziua, nici ceasul.", gospelRef: "Matei 25:13" },
  "2026-04-08": { name: "Sf. Ap. Irodion, Agav, Ruf", fasting: "post", type: "Miercuri din Săptămâna Mare", gospel: "Una din femei a venit având un alabastru cu mir de nard de mare preț.", gospelRef: "Marcu 14:3" },
  "2026-04-09": { name: "Sf. Mc. Eupsihie din Cezareea", fasting: "post", type: "Joia Mare — Cina cea de Taină", gospel: "Luați, mâncați, acesta este Trupul Meu.", gospelRef: "Matei 26:26" },
  "2026-04-10": { name: "Sf. Mc. Terentie și Pompei", fasting: "post", type: "Vinerea Mare — Răstignirea", gospel: "Dumnezeul Meu, Dumnezeul Meu, pentru ce M-ai părăsit?", gospelRef: "Matei 27:46" },
  "2026-04-11": { name: "Sf. Mc. Antipa, episcopul Pergamului", fasting: "post", type: "Sâmbăta Mare", gospel: "Iosif, luând Trupul, L-a înfășurat în giulgiu curat.", gospelRef: "Matei 27:59" },
  "2026-04-12": { name: "Învierea Domnului — PAȘTELE", fasting: "harti", type: "PAȘTE", gospel: "Hristos a înviat din morți, cu moartea pe moarte călcând, și celor din morminte viață dăruindu-le!", gospelRef: "Troparul Învierii" },
  "2026-04-13": { name: "Lunea Luminată", fasting: "harti", type: "Săptămâna Luminată", gospel: "La început era Cuvântul și Cuvântul era la Dumnezeu și Dumnezeu era Cuvântul.", gospelRef: "Ioan 1:1" },
  "2026-04-14": { name: "Marțea Luminată", fasting: "harti", type: "Săptămâna Luminată", gospel: "Eu sunt Lumina lumii; cel ce Îmi urmează Mie nu va umbla în întuneric.", gospelRef: "Ioan 8:12" },
  "2026-04-15": { name: "Miercurea Luminată — Izvorul Tămăduirii", fasting: "harti", type: "Săptămâna Luminată", gospel: "Cine va bea din apa pe care i-o voi da Eu, nu va mai înseta în veac.", gospelRef: "Ioan 4:14" },
  "2026-04-16": { name: "Joia Luminată", fasting: "harti", type: "Săptămâna Luminată", gospel: "Eu sunt Păstorul cel bun. Păstorul cel bun își pune sufletul pentru oi.", gospelRef: "Ioan 10:11" },
  "2026-04-17": { name: "Vinerea Luminată", fasting: "harti", type: "Săptămâna Luminată", gospel: "Pace vouă! Precum M-a trimis pe Mine Tatăl, vă trimit și Eu pe voi.", gospelRef: "Ioan 20:21" },
  "2026-04-18": { name: "Sâmbăta Luminată", fasting: "harti", type: "Săptămâna Luminată", gospel: "Fericiți cei ce n-au văzut și au crezut.", gospelRef: "Ioan 20:29" },
  "2026-04-19": { name: "Duminica Tomii", fasting: "liber", type: "Duminica Tomii", gospel: "Domnul meu și Dumnezeul meu!", gospelRef: "Ioan 20:28" },
  "2026-04-20": { name: "Sf. Cuv. Teodor Trihina", fasting: "liber", gospel: "Și va fi o turmă și un Păstor.", gospelRef: "Ioan 10:16" },
  "2026-04-21": { name: "Sf. Mc. Alexandra Împărăteasa", fasting: "liber", gospel: "Nu vă temeți de cei ce ucid trupul, iar sufletul nu-l pot ucide.", gospelRef: "Matei 10:28" },
  "2026-04-22": { name: "Sf. Mc. Teodor Sikeotul", fasting: "post", gospel: "Străduiți-vă să intrați pe poarta cea strâmtă.", gospelRef: "Luca 13:24" },
  "2026-04-23": { name: "Sf. Mare Mucenic Gheorghe", fasting: "liber", type: "Sf. Gheorghe", gospel: "Cel ce va pierde sufletul său pentru Mine îl va afla.", gospelRef: "Matei 10:39" },
  "2026-04-24": { name: "Sf. Cuv. Elisabeta, făcătoarea de minuni", fasting: "post", gospel: "Bucurați-vă și vă veseliți, că plata voastră multă este în ceruri.", gospelRef: "Matei 5:12" },
  "2026-04-25": { name: "Sf. Ap. și Ev. Marcu", fasting: "post", gospel: "Mergeți în toată lumea și propovăduiți Evanghelia la toată făptura.", gospelRef: "Marcu 16:15" },
  "2026-04-26": { name: "Sf. Mc. Vasile, episcop", fasting: "liber", type: "Duminica Mironosițelor", gospel: "Nu vă temeți! Duceți-vă, vestiți fraților Mei să meargă în Galileea.", gospelRef: "Matei 28:10" },
  "2026-04-27": { name: "Sf. Mc. Simeon, rudenia Domnului", fasting: "liber", gospel: "Doamne, la cine vom merge? Tu ai cuvintele vieții veșnice.", gospelRef: "Ioan 6:68" },
  "2026-04-28": { name: "Sf. Ap. Iason și Sosipatru", fasting: "liber", gospel: "Iubiți-vă unii pe alții, precum v-am iubit Eu pe voi.", gospelRef: "Ioan 13:34" },
  "2026-04-29": { name: "Sf. 9 Mucenici din Cizic", fasting: "post", gospel: "Îndrăzniți! Eu am biruit lumea.", gospelRef: "Ioan 16:33" },
  "2026-04-30": { name: "Sf. Ap. Iacob al lui Zevedeu", fasting: "post", gospel: "Cine voiește să fie întâi, să fie slujitorul tuturor.", gospelRef: "Marcu 10:44" },
};

/**
 * Returns a YYYY-MM-DD key based on the LOCAL date of the user, not UTC.
 *
 * Bug fix: `new Date().toISOString().split("T")[0]` returns UTC date, which
 * causes the saint lookup to be off by one day for users in positive
 * timezones (e.g. Romania GMT+2/+3) during late-night hours, when local
 * time is already the next day but UTC is still the previous day.
 */
export function getLocalDateKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getTodaySaint(): SaintDay & { date: string } {
  const today = new Date();
  const key = getLocalDateKey(today);
  const saint = saintsCalendar[key] || {
    name: "Sf. Gheorghe Mărturisitorul",
    fasting: "liber" as const,
    gospel: "Eu sunt cu voi în toate zilele, până la sfârșitul veacului.",
    gospelRef: "Matei 28:20",
  };
  return { ...saint, date: key };
}

export function getWeekDays(centerDate?: Date): { date: Date; key: string; saint?: SaintDay }[] {
  const center = centerDate || new Date();
  const dayOfWeek = center.getDay();
  const monday = new Date(center);
  monday.setDate(center.getDate() - ((dayOfWeek + 6) % 7));

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = getLocalDateKey(d);
    return { date: d, key, saint: saintsCalendar[key] };
  });
}
