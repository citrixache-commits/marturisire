// Calendar Ortodox 2026 — Biserica Ortodoxă Română
// Paștele 2026: Duminică, 12 Aprilie
// Triodul: 1 Februarie 2026 | Penticostar: 12 Aprilie - 31 Mai 2026

export type FeastType =
  | "praznic-imparatesc" // Cele 12 praznice împărătești
  | "sfant-mare" // Sfânt mare sărbătorit
  | "saptamana-mare" // Săptămâna Mare
  | "post-incepere" // Început de post
  | "post-sfarsit" // Sfârșit de post
  | "dezlegare"; // Dezlegare la pește/vin/untdelemn

export interface CalendarEvent {
  date: string; // YYYY-MM-DD
  name: string;
  type: FeastType;
  description?: string;
  icon: string;
}

export interface FastingPeriod {
  id: string;
  name: string;
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD
  description: string;
  icon: string;
}

// === PRAZNICELE ÎMPĂRĂTEȘTI 2026 ===
export const praznice: CalendarEvent[] = [
  {
    date: "2026-01-06",
    name: "Botezul Domnului (Boboteaza)",
    type: "praznic-imparatesc",
    description: "Arătarea Sfintei Treimi la Iordan",
    icon: "💧",
  },
  {
    date: "2026-02-02",
    name: "Întâmpinarea Domnului",
    type: "praznic-imparatesc",
    description: "Aducerea Pruncului Iisus la Templu",
    icon: "🕯️",
  },
  {
    date: "2026-03-25",
    name: "Buna Vestire",
    type: "praznic-imparatesc",
    description: "Îngerul Gavriil îi vestește Fecioarei Maria",
    icon: "🕊️",
  },
  {
    date: "2026-04-05",
    name: "Duminica Floriilor",
    type: "praznic-imparatesc",
    description: "Intrarea Domnului în Ierusalim",
    icon: "🌿",
  },
  {
    date: "2026-04-12",
    name: "Paștele — Învierea Domnului",
    type: "praznic-imparatesc",
    description: "Hristos a Înviat!",
    icon: "✝️",
  },
  {
    date: "2026-05-21",
    name: "Înălțarea Domnului",
    type: "praznic-imparatesc",
    description: "La 40 de zile de la Înviere · Ziua Eroilor",
    icon: "☁️",
  },
  {
    date: "2026-05-31",
    name: "Rusaliile — Pogorârea Sfântului Duh",
    type: "praznic-imparatesc",
    description: "La 50 de zile de la Înviere",
    icon: "🔥",
  },
  {
    date: "2026-08-06",
    name: "Schimbarea la Față",
    type: "praznic-imparatesc",
    description: "Pe Muntele Taborului",
    icon: "⛰️",
  },
  {
    date: "2026-08-15",
    name: "Adormirea Maicii Domnului",
    type: "praznic-imparatesc",
    description: "Sfânta Maria Mare",
    icon: "👑",
  },
  {
    date: "2026-09-08",
    name: "Nașterea Maicii Domnului",
    type: "praznic-imparatesc",
    description: "Sfânta Maria Mică",
    icon: "🌹",
  },
  {
    date: "2026-09-14",
    name: "Înălțarea Sfintei Cruci",
    type: "praznic-imparatesc",
    description: "Zi de post aspru",
    icon: "✝️",
  },
  {
    date: "2026-11-21",
    name: "Intrarea Maicii Domnului în Biserică",
    type: "praznic-imparatesc",
    description: "Vovidenia",
    icon: "⛪",
  },
  {
    date: "2026-12-25",
    name: "Nașterea Domnului — Crăciunul",
    type: "praznic-imparatesc",
    description: "Hristos Se naște, slăviți-L!",
    icon: "⭐",
  },
];

// === SĂPTĂMÂNA MARE 2026 (6-11 Aprilie) ===
export const saptamanaMare: CalendarEvent[] = [
  {
    date: "2026-04-06",
    name: "Lunea Mare",
    type: "saptamana-mare",
    description: "Iosif cel preafrumos · Smochinul neroditor",
    icon: "🕯️",
  },
  {
    date: "2026-04-07",
    name: "Marțea Mare",
    type: "saptamana-mare",
    description: "Pilda celor 10 fecioare",
    icon: "🕯️",
  },
  {
    date: "2026-04-08",
    name: "Miercurea Mare",
    type: "saptamana-mare",
    description: "Ungerea cu mir · Vânzarea lui Iuda · Denie",
    icon: "🕯️",
  },
  {
    date: "2026-04-09",
    name: "Joia Mare",
    type: "saptamana-mare",
    description: "Cina cea de Taină · Denia celor 12 Evanghelii",
    icon: "🍞",
  },
  {
    date: "2026-04-10",
    name: "Vinerea Mare — Răstignirea Domnului",
    type: "saptamana-mare",
    description: "Punerea în mormânt · Prohodul · Post aspru (ajun)",
    icon: "✝️",
  },
  {
    date: "2026-04-11",
    name: "Sâmbăta Mare",
    type: "saptamana-mare",
    description: "Pogorârea la iad · Așteptarea Învierii",
    icon: "🕯️",
  },
];

// === SFINȚI MARI 2026 ===
export const sfintiMari: CalendarEvent[] = [
  {
    date: "2026-01-01",
    name: "Sf. Vasile cel Mare",
    type: "sfant-mare",
    description: "Tăierea împrejur a Domnului · Anul Nou",
    icon: "✨",
  },
  {
    date: "2026-01-07",
    name: "Soborul Sf. Ioan Botezătorul",
    type: "sfant-mare",
    icon: "🕊️",
  },
  {
    date: "2026-01-30",
    name: "Sfinții Trei Ierarhi",
    type: "sfant-mare",
    description: "Vasile cel Mare, Grigorie Teologul, Ioan Gură de Aur",
    icon: "📖",
  },
  {
    date: "2026-03-09",
    name: "Sfinții 40 de Mucenici din Sevastia",
    type: "sfant-mare",
    icon: "⚔️",
  },
  {
    date: "2026-04-23",
    name: "Sf. Mare Mucenic Gheorghe",
    type: "sfant-mare",
    description: "Purtătorul de biruință",
    icon: "🐉",
  },
  {
    date: "2026-05-21",
    name: "Sf. Împărați Constantin și Elena",
    type: "sfant-mare",
    icon: "👑",
  },
  {
    date: "2026-06-29",
    name: "Sf. Apostoli Petru și Pavel",
    type: "sfant-mare",
    description: "Sfârșit Postul Sf. Apostoli",
    icon: "🗝️",
  },
  {
    date: "2026-07-20",
    name: "Sf. Prooroc Ilie Tesviteanul",
    type: "sfant-mare",
    icon: "🔥",
  },
  {
    date: "2026-08-29",
    name: "Tăierea Capului Sf. Ioan Botezătorul",
    type: "sfant-mare",
    description: "Zi de post aspru",
    icon: "🕊️",
  },
  {
    date: "2026-10-14",
    name: "Sf. Cuv. Parascheva de la Iași",
    type: "sfant-mare",
    description: "Ocrotitoarea Moldovei",
    icon: "🌟",
  },
  {
    date: "2026-10-26",
    name: "Sf. M. Mc. Dimitrie, Izvorâtorul de Mir",
    type: "sfant-mare",
    icon: "🌟",
  },
  {
    date: "2026-11-08",
    name: "Sf. Arhangheli Mihail și Gavriil",
    type: "sfant-mare",
    icon: "😇",
  },
  {
    date: "2026-11-30",
    name: "Sf. Apostol Andrei cel Întâi-chemat",
    type: "sfant-mare",
    description: "Ocrotitorul României",
    icon: "🇷🇴",
  },
  {
    date: "2026-12-06",
    name: "Sf. Ierarh Nicolae",
    type: "sfant-mare",
    description: "Făcătorul de minuni",
    icon: "🎁",
  },
];

// === POSTURI 2026 ===
export const posturi: FastingPeriod[] = [
  {
    id: "postul-mare",
    name: "Postul Mare (al Sfintelor Paști)",
    start: "2026-02-23",
    end: "2026-04-11",
    description:
      "Cel mai lung și mai aspru post al anului (48 zile). Pregătire pentru Învierea Domnului.",
    icon: "✝️",
  },
  {
    id: "postul-sf-apostoli",
    name: "Postul Sfinților Apostoli",
    start: "2026-06-08",
    end: "2026-06-28",
    description:
      "Începe a doua luni după Rusalii și ține până la Sf. Petru și Pavel (29 iunie).",
    icon: "🗝️",
  },
  {
    id: "postul-adormirii",
    name: "Postul Adormirii Maicii Domnului",
    start: "2026-08-01",
    end: "2026-08-14",
    description: "Două săptămâni de post aspru pentru Sfânta Maria Mare.",
    icon: "👑",
  },
  {
    id: "postul-craciunului",
    name: "Postul Nașterii Domnului (Crăciunului)",
    start: "2026-11-15",
    end: "2026-12-24",
    description: "40 de zile de pregătire pentru Nașterea Mântuitorului.",
    icon: "⭐",
  },
];

// === UTILITAȚI ===

export function getAllEvents(): CalendarEvent[] {
  return [...praznice, ...saptamanaMare, ...sfintiMari].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
}

export function getEventByDate(dateISO: string): CalendarEvent | undefined {
  return getAllEvents().find((e) => e.date === dateISO);
}

export function getUpcomingEvents(
  fromDate: string,
  count: number = 5
): CalendarEvent[] {
  return getAllEvents()
    .filter((e) => e.date >= fromDate)
    .slice(0, count);
}

export function isInFastingPeriod(dateISO: string): FastingPeriod | null {
  for (const post of posturi) {
    if (dateISO >= post.start && dateISO <= post.end) {
      return post;
    }
  }
  return null;
}

export function isWednesdayOrFriday(dateISO: string): boolean {
  const d = new Date(dateISO + "T00:00:00");
  const day = d.getDay(); // 0 = Sunday, 3 = Wednesday, 5 = Friday
  return day === 3 || day === 5;
}

export function getFastingStatus(dateISO: string): {
  isPost: boolean;
  reason: string;
  severity: "aspru" | "dezlegare" | "harți";
} {
  const period = isInFastingPeriod(dateISO);
  if (period) {
    return {
      isPost: true,
      reason: period.name,
      severity: "aspru",
    };
  }

  // Săptămâna Luminată (după Paște) și alte săptămâni de harți
  // Harți: 12-18 Aprilie 2026 (Săptămâna Luminată)
  if (dateISO >= "2026-04-12" && dateISO <= "2026-04-18") {
    return {
      isPost: false,
      reason: "Săptămâna Luminată — harți",
      severity: "harți",
    };
  }

  if (isWednesdayOrFriday(dateISO)) {
    return {
      isPost: true,
      reason: "Miercuri / Vineri",
      severity: "aspru",
    };
  }

  return {
    isPost: false,
    reason: "Zi fără post",
    severity: "dezlegare",
  };
}

export function formatDateRomanian(dateISO: string): string {
  const months = [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie",
  ];
  const weekdays = [
    "Duminică",
    "Luni",
    "Marți",
    "Miercuri",
    "Joi",
    "Vineri",
    "Sâmbătă",
  ];
  const d = new Date(dateISO + "T00:00:00");
  const weekday = weekdays[d.getDay()];
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${weekday}, ${day} ${month} ${year}`;
}

export function getDaysUntil(targetDateISO: string, fromDateISO: string): number {
  const target = new Date(targetDateISO + "T00:00:00");
  const from = new Date(fromDateISO + "T00:00:00");
  const diff = target.getTime() - from.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
