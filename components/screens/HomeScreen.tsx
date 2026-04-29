"use client";
import { useState, useEffect } from "react";
import { getTodaySaint, getWeekDays, getLocalDateKey } from "@/data/saints-calendar";
import { totalSectiuni } from "@/data/indreptar-spovedanie";
import { getTroparForDate } from "@/data/troparia";
import { getApoftegmaForDate } from "@/data/pateric";
import { getCitiriForDate } from "@/data/citiri-zilnice";

const dayNamesRo = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];
const monthNamesRo = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

interface Props {
  onNavigate: (tab: string) => void;
  onOpenPravila: (type: "dimineata" | "seara") => void;
  pravilaRefresh?: number;
}

type IndreptarProgress = { sectionIndex: number; total: number; completed: boolean };

function getIndruptarProgress(): IndreptarProgress {
  if (typeof window === "undefined") return { sectionIndex: 0, total: totalSectiuni, completed: false };
  try {
    const saved = localStorage.getItem("lumina-spovedanie");
    if (saved) {
      const data = JSON.parse(saved);
      return {
        sectionIndex: data.sectionIndex || 0,
        total: totalSectiuni,
        completed: !!data.completed,
      };
    }
  } catch {}
  return { sectionIndex: 0, total: totalSectiuni, completed: false };
}

export default function HomeScreen({ onNavigate, onOpenPravila, pravilaRefresh }: Props) {
  const today = new Date();
  const saint = getTodaySaint();
  const week = getWeekDays();
  const todayKey = getLocalDateKey(today);
  const hour = today.getHours();

  // Pascha detection — the day feels like the most important day of the year
  const isPaschaDay = saint.type === "PAȘTE";

  // Săptămâna Mare — Holy Week of the Passion (verified liturgical texts per day)
  const holyWeekTexts: Record<string, { dayName: string; quote: string; attr: string }> = {
    "2026-04-06": {
      dayName: "LUNEA MARE",
      quote: "Iată, Mirele vine în miezul nopții și fericită este sluga pe care o va afla priveghind.",
      attr: "Troparul Deniilor",
    },
    "2026-04-07": {
      dayName: "MARȚEA MARE",
      quote: "Iată, Mirele vine în miezul nopții și fericită este sluga pe care o va afla priveghind.",
      attr: "Troparul Deniilor",
    },
    "2026-04-08": {
      dayName: "MIERCUREA MARE",
      quote: "Cămara Ta, Mântuitorule, o văd împodobită și îmbrăcăminte nu am, ca să intru într-însa.",
      attr: "Luminânda Deniilor",
    },
    "2026-04-09": {
      dayName: "JOIA MARE",
      quote: "Cinei Tale celei de taină, astăzi, Fiul lui Dumnezeu, părtaș mă primește.",
      attr: "Chinonicul Joii celei Mari",
    },
    "2026-04-10": {
      dayName: "VINEREA MARE",
      quote: "Astăzi S-a spânzurat pe lemn, Cel ce a spânzurat pământul pe ape.",
      attr: "Antifonul al XV-lea",
    },
    "2026-04-11": {
      dayName: "SÂMBĂTA MARE",
      quote: "Să tacă tot trupul omenesc și să stea cu frică și cu cutremur.",
      attr: "Heruvicul Sâmbetei celei Mari",
    },
  };
  const holyWeekEntry = holyWeekTexts[todayKey];
  const isSaptamanaMare = !isPaschaDay && !!holyWeekEntry;

  // Săptămâna Luminată — Bright Week, joyful continuation of Pascha
  const brightWeekLabels: Record<string, string> = {
    "2026-04-13": "Lunea Luminată",
    "2026-04-14": "Marțea Luminată",
    "2026-04-15": "Miercurea Luminată",
    "2026-04-16": "Joia Luminată",
    "2026-04-17": "Vinerea Luminată",
    "2026-04-18": "Sâmbăta Luminată",
  };
  const saptamanaLuminataLabel = brightWeekLabels[todayKey];
  const isSaptamanaLuminata =
    !isPaschaDay && (saint.type === "Săptămâna Luminată" || !!saptamanaLuminataLabel);

  // Overall "bright mood" — Pascha day or any day of Bright Week
  const isBrightWeek = isPaschaDay || isSaptamanaLuminata;

  // Daily Tropar (verified canonical text only — for major feasts) and Pateric apoftegma
  const dailyTropar = getTroparForDate(today);
  const dailyApoftegma = getApoftegmaForDate(today);
  const dailyCitiri = getCitiriForDate(today);
  // Hide major-feast tropar during Bright Week (Pascha tropar already shown separately)
  // and during Holy Week (banner already dominant)
  const showMajorTropar = !isBrightWeek && !isSaptamanaMare && !!dailyTropar;

  const [pravilaDimDone, setPravilaDimDone] = useState(false);
  const [pravilaSearaDone, setPravilaSearaDone] = useState(false);
  const [indreptarProgress, setIndreptarProgress] = useState<IndreptarProgress>({ sectionIndex: 0, total: totalSectiuni, completed: false });
  const [othersOpen, setOthersOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setPravilaDimDone(
      localStorage.getItem(`lumina-pravila-dimineata-${todayKey}`) === "done"
    );
    setPravilaSearaDone(
      localStorage.getItem(`lumina-pravila-seara-${todayKey}`) === "done"
    );
    setIndreptarProgress(getIndruptarProgress());
  }, [todayKey, pravilaRefresh]);

  // Determine main CTA
  const mainCTA = (() => {
    if (hour < 15 && !pravilaDimDone) {
      return { label: "Începe Pravila Dimineții", action: () => onOpenPravila("dimineata"), icon: "\u{2600}\u{FE0F}" };
    }
    if (!pravilaSearaDone) {
      return { label: "Începe Pravila Serii", action: () => onOpenPravila("seara"), icon: "\u{1F319}" };
    }
    if (indreptarProgress.sectionIndex > 0 && !indreptarProgress.completed) {
      return { label: "Continuă Îndreptarul", action: () => onNavigate("spovedanie"), icon: "\u{1F4DC}" };
    }
    if (!indreptarProgress.completed && indreptarProgress.sectionIndex === 0) {
      return { label: "Începe Îndreptarul", action: () => onNavigate("spovedanie"), icon: "\u{1F4DC}" };
    }
    return { label: "Citește Rugăciunile", action: () => onNavigate("prayers"), icon: "\u{1F64F}" };
  })();

  return (
    <div className="px-4 py-5 stagger-children lg:py-8">

      {/* PASCHAL BANNER — only on Easter Sunday itself */}
      {isPaschaDay && (
        <div className="relative rounded-3xl mb-5 overflow-hidden animate-pascha-glow"
          style={{
            background: "linear-gradient(135deg, #4A0E1A 0%, #C5A55A 50%, #4A0E1A 100%)",
            border: "2px solid #E8D5A3",
          }}>
          {/* Rotating light rays */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="520" height="520" viewBox="0 0 200 200"
              className="animate-ray-rotate opacity-35"
              style={{ filter: "blur(1px)" }}>
              <defs>
                <radialGradient id="paschalRayGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F5F0E8" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#F5F0E8" stopOpacity="0" />
                </radialGradient>
              </defs>
              {Array.from({ length: 24 }).map((_, i) => (
                <rect key={i} x="99.5" y="5" width="1" height="90"
                  fill="url(#paschalRayGrad)"
                  transform={`rotate(${i * 15} 100 100)`} />
              ))}
            </svg>
          </div>

          {/* Soft pulsing halo behind the text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none animate-pulse-gentle"
            style={{ background: "radial-gradient(circle, rgba(255, 240, 200, 0.22) 0%, transparent 70%)" }} />

          <div className="relative px-6 py-9 text-center">
            <p className="text-[10px] text-ivory/75 tracking-[6px] font-heading uppercase mb-4"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
              ZIUA ÎNVIERII DOMNULUI
            </p>

            <h1 className="text-[30px] font-heading font-bold text-ivory leading-tight tracking-[2px]"
              style={{ textShadow: "0 2px 16px rgba(26, 20, 16, 0.7), 0 0 28px rgba(255, 240, 200, 0.3)" }}>
              HRISTOS
            </h1>
            <h1 className="text-[48px] font-heading font-black leading-none tracking-[3px] mt-1 text-ivory animate-pascha-shimmer">
              A ÎNVIAT!
            </h1>

            <div className="flex items-center gap-3 my-4 justify-center">
              <div className="h-px w-14" style={{ background: "linear-gradient(90deg, transparent, #F5F0E8)" }} />
              <span className="text-ivory text-base">&#10022;</span>
              <div className="h-px w-14" style={{ background: "linear-gradient(90deg, #F5F0E8, transparent)" }} />
            </div>

            <p className="text-[16px] text-ivory italic font-body"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
              Adevărat a înviat!
            </p>
            <p className="text-[11px] text-ivory/55 italic font-body mt-2.5 tracking-[2px]">
              Χριστὸς Ἀνέστη! &middot; Христóсъ воскрéсе!
            </p>
          </div>
        </div>
      )}

      {/* HOLY WEEK BANNER — Săptămâna Sfintelor Patimi (somber, reverent) */}
      {isSaptamanaMare && holyWeekEntry && (
        <div className="relative rounded-3xl mb-5 overflow-hidden animate-fade-in"
          style={{
            background: "linear-gradient(180deg, #0A0706 0%, #1A1410 50%, #0A0706 100%)",
            border: "1px solid #C5A55A22",
            boxShadow: "inset 0 2px 24px rgba(0, 0, 0, 0.6), 0 8px 32px rgba(0, 0, 0, 0.4)",
          }}>
          <div className="relative px-6 py-8 text-center">
            <p
              className="text-[13px] font-heading uppercase mb-5"
              style={{
                background: "linear-gradient(180deg, #E8D5A3 0%, #C5A55A 55%, #9A7F3C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "4px",
                fontWeight: 600,
                filter: "drop-shadow(0 0 10px rgba(197, 165, 90, 0.35))",
              }}
            >
              Săptămâna Sfintelor Patimi
            </p>

            {/* Orthodox three-bar cross silhouette */}
            <div className="flex justify-center mb-5">
              <svg width="38" height="56" viewBox="0 0 38 56" fill="none">
                <g stroke="#C5A55A" strokeWidth="1.2" opacity="0.6" strokeLinecap="round">
                  <line x1="19" y1="3" x2="19" y2="53" />
                  <line x1="12" y1="10" x2="26" y2="10" />
                  <line x1="5" y1="20" x2="33" y2="20" />
                  <line x1="8" y1="36" x2="30" y2="32" />
                </g>
              </svg>
            </div>

            <h2 className="text-[24px] font-heading text-ivory tracking-[4px] font-light mb-1">
              {holyWeekEntry.dayName}
            </h2>

            <div className="flex items-center gap-2 my-4 justify-center opacity-55">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #C5A55A)" }} />
              <span className="text-gold-dim text-[10px]">&#10022;</span>
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #C5A55A, transparent)" }} />
            </div>

            <p className="text-[17px] text-ivory/90 italic leading-[1.75] font-body max-w-sm mx-auto">
              &bdquo;{holyWeekEntry.quote}&rdquo;
            </p>
            <p className="text-[11px] text-gold-light/60 font-heading tracking-[2px] mt-4 uppercase">
              &mdash; {holyWeekEntry.attr}
            </p>
          </div>
        </div>
      )}

      {/* BRIGHT WEEK MINI-BANNER — Săptămâna Luminată (joyful continuation) */}
      {isSaptamanaLuminata && (
        <div className="relative rounded-2xl mb-5 overflow-hidden animate-fade-in"
          style={{
            background: "linear-gradient(135deg, #4A0E1A 0%, #C5A55A44 50%, #4A0E1A 100%)",
            border: "1px solid #C5A55A66",
            boxShadow: "0 6px 24px rgba(197, 165, 90, 0.2)",
          }}>
          <div className="relative px-5 py-5 text-center">
            <p className="text-[9px] text-ivory/60 tracking-[5px] font-heading uppercase">
              SĂPTĂMÂNA LUMINATĂ{saptamanaLuminataLabel ? ` · ${saptamanaLuminataLabel.toUpperCase()}` : ""}
            </p>
            <h2 className="text-[26px] font-heading font-bold text-ivory tracking-[3px] leading-none mt-2.5"
              style={{ textShadow: "0 0 18px rgba(255, 240, 200, 0.4)" }}>
              HRISTOS A ÎNVIAT!
            </h2>
            <p className="text-[13px] text-ivory/75 italic mt-2 font-body">
              Adevărat a înviat!
            </p>
          </div>
        </div>
      )}

      {/* Main CTA — single dominant action */}
      <button onClick={mainCTA.action}
        className="w-full rounded-2xl p-6 mb-5 flex items-center gap-4 active:scale-[0.98] transition-transform"
        style={{
          background: "linear-gradient(135deg, #4A0E1Add, #6B1D2A99)",
          border: "1px solid #C5A55A44",
          boxShadow: "0 4px 24px rgba(74, 14, 26, 0.3)",
        }}>
        <span className="text-4xl">{mainCTA.icon}</span>
        <div className="flex-1 text-left">
          <p className="text-[22px] font-heading text-ivory font-bold tracking-wider">
            {mainCTA.label}
          </p>
          <p className="text-[14px] text-gold-light mt-1">
            {pravilaDimDone && pravilaSearaDone
              ? "Ai terminat pravilele de azi"
              : pravilaDimDone
              ? "Pravila dimineții — terminată"
              : "Acțiunea ta de azi"}
          </p>
        </div>
        <span className="text-gold text-2xl">&#8594;</span>
      </button>

      {/* Today's status — compact */}
      <div className="flex gap-3 mb-5">
        {[
          { done: pravilaDimDone, label: "Dimineața", icon: "\u{2600}\u{FE0F}", action: () => onOpenPravila("dimineata") },
          { done: pravilaSearaDone, label: "Seara", icon: "\u{1F319}", action: () => onOpenPravila("seara") },
        ].map((item, i) => (
          <button key={i} onClick={item.action}
            className="flex-1 rounded-xl p-3 flex items-center gap-2.5 transition-all active:scale-[0.97]"
            style={{
              background: item.done ? "#3A6B3A18" : "#1A141066",
              border: item.done ? "1px solid #3A6B3A44" : "1px solid #C5A55A15",
            }}>
            <span className="text-xl">{item.icon}</span>
            <div className="flex-1 text-left">
              <p className="text-[14px] text-ivory">{item.label}</p>
            </div>
            {item.done && (
              <span className="text-[12px] text-[#5A9B5A] font-bold">&#10003;</span>
            )}
          </button>
        ))}
      </div>

      {/* Îndreptar progress — only if in progress */}
      {indreptarProgress.sectionIndex > 0 && !indreptarProgress.completed && (
        <button onClick={() => onNavigate("spovedanie")}
          className="w-full rounded-xl p-4 mb-5 flex items-center gap-3 active:scale-[0.98] transition-transform"
          style={{ background: "#1A141066", border: "1px solid #C5A55A15" }}>
          <span className="text-xl">{"\u{1F4DC}"}</span>
          <div className="flex-1 text-left">
            <p className="text-[14px] text-ivory">
              Îndreptar &mdash; secțiunea {indreptarProgress.sectionIndex + 1} din {indreptarProgress.total}
            </p>
            <div className="w-full h-1 rounded-full mt-1.5" style={{ background: "#F5F0E815" }}>
              <div className="h-full rounded-full" style={{
                width: `${Math.round(((indreptarProgress.sectionIndex + 1) / indreptarProgress.total) * 100)}%`,
                background: "linear-gradient(90deg, #C5A55A, #6B1D2A)",
              }} />
            </div>
          </div>
        </button>
      )}
      {indreptarProgress.completed && (
        <div className="w-full rounded-xl p-4 mb-5 flex items-center gap-3"
          style={{ background: "#3A6B3A18", border: "1px solid #3A6B3A44" }}>
          <span className="text-xl">&#10003;</span>
          <div className="flex-1 text-left">
            <p className="text-[14px] text-[#C5E5A0]">Îndreptar &mdash; reflecție parcursă</p>
          </div>
        </div>
      )}

      {/* Date & Saint Card */}
      <div className="relative overflow-hidden rounded-2xl p-6 mb-4"
        style={{
          background: isBrightWeek
            ? "linear-gradient(135deg, #4A0E1Add, #C5A55A33 50%, #4A0E1Add)"
            : "linear-gradient(135deg, #4A0E1Acc, #6B1D2A77 50%, #4A0E1Acc)",
          border: isBrightWeek ? "1px solid #C5A55A77" : "1px solid #C5A55A33",
          boxShadow: isBrightWeek ? "0 0 30px rgba(197, 165, 90, 0.12)" : undefined,
        }}>
        <div className="relative">
          <p className="text-[13px] tracking-[3px] mb-1 font-heading text-gold-light uppercase">
            {dayNamesRo[today.getDay()]}
          </p>
          <h2 className="text-[44px] font-light mb-1 text-ivory leading-none font-heading tracking-tight">
            {today.getDate()} <span className="text-[28px] text-gold-light font-light">{monthNamesRo[today.getMonth()]}</span>
          </h2>
          {saint.type && (
            <div className="flex items-center gap-3 mt-3 mb-1">
              <span className="inline-block h-px w-6" style={{ background: "#C5A55A55" }} />
              <p className="text-[12px] font-heading text-gold-light uppercase tracking-[3px]">
                {saint.type}
              </p>
              <span className="inline-block h-px flex-1 max-w-[40px]" style={{ background: "#C5A55A55" }} />
            </div>
          )}
          <p className="text-[20px] italic text-ivory leading-relaxed mt-2">{saint.name}</p>
          {saint.others && saint.others.length > 0 && (
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setOthersOpen((v) => !v)}
                className="text-[12px] text-gold-light tracking-[1px] font-heading uppercase active:opacity-70 transition-opacity"
                style={{
                  borderBottom: "1px dashed #C5A55A55",
                  paddingBottom: "1px",
                }}
              >
                {othersOpen
                  ? "ascunde"
                  : `+ ${saint.others.length} ${saint.others.length === 1 ? "alt sfânt" : "alți sfinți"}`}
              </button>
              {othersOpen && (
                <ul className="mt-2 space-y-1 animate-fade-in">
                  {saint.others.map((o, i) => (
                    <li
                      key={i}
                      className="text-[13px] text-ivory/80 leading-snug flex gap-2"
                    >
                      <span className="text-gold-light mt-0.5">&#10022;</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <div className="flex items-center gap-2.5 mt-3">
            <span
              className="inline-block w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background:
                  saint.fasting === "post"
                    ? "#C06878"
                    : saint.fasting === "harti"
                    ? "#E8D5A3"
                    : "#7FAE7F",
                boxShadow:
                  saint.fasting === "post"
                    ? "0 0 6px #C0687877"
                    : saint.fasting === "harti"
                    ? "0 0 6px #E8D5A377"
                    : "0 0 6px #7FAE7F77",
              }}
            />
            <span className="text-[14px] text-ivory/80 font-medium">
              {saint.fasting === "post" ? "Zi de Post" : saint.fasting === "harti" ? "Harți — Sărbătoare" : "Dezlegare"}
            </span>
          </div>
        </div>
      </div>

      {/* Daily Tropar — major feasts only (verified canonical text from doxologia.ro) */}
      {showMajorTropar && dailyTropar && (
        <div
          className="p-5 mb-4 relative overflow-hidden rounded-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(197, 165, 90, 0.10), rgba(26, 20, 16, 0.5))",
            border: "1px solid #C5A55A44",
            boxShadow: "0 0 18px rgba(197, 165, 90, 0.08)",
          }}
        >
          <p className="text-[12px] text-gold tracking-[3px] font-heading uppercase">
            Tropar &middot; {dailyTropar.glas}
          </p>
          <p className="text-[13px] text-gold-light/80 font-heading mt-0.5 mb-3">
            {dailyTropar.feastName}
          </p>
          <p className="text-[17px] text-ivory leading-[1.75] italic font-body">
            &bdquo;{dailyTropar.tropar}&rdquo;
          </p>
        </div>
      )}

      {/* Cuvânt din Pateric — rotating daily (hidden during Bright Week — joy focus) */}
      {!isBrightWeek && dailyApoftegma && (
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[3px] font-heading uppercase mb-2">
            Cuvânt din Pateric
          </p>
          <p className="text-[16px] text-ivory leading-[1.75] italic font-body">
            &bdquo;{dailyApoftegma.text}&rdquo;
          </p>
          <div className="flex items-center gap-2 mt-3">
            <div className="h-px w-6" style={{ background: "#C5A55A44" }} />
            <p className="text-[13px] text-gold-light font-heading tracking-[1px]">
              &mdash; {dailyApoftegma.speaker}
            </p>
          </div>
        </div>
      )}

      {/* Troparion — shown on Pascha and throughout Bright Week */}
      {isBrightWeek && (
        <div
          className="p-5 mb-4 relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(197, 165, 90, 0.14), rgba(26, 20, 16, 0.6))",
            border: "1px solid #C5A55A66",
            borderRadius: "16px",
            boxShadow: "0 0 24px rgba(197, 165, 90, 0.12)",
          }}
        >
          <p className="text-[13px] text-gold tracking-[3px] font-heading mb-2">
            TROPARUL ÎNVIERII
          </p>
          <p className="text-[20px] text-ivory leading-[1.8] italic relative">
            &bdquo;Hristos a înviat din morți, cu moartea pe moarte călcând, și celor din morminte viață dăruindu-le!&rdquo;
          </p>
        </div>
      )}

      {/* Daily Apostol + Evanghelia — verbatim BOR, hidden during Bright Week */}
      {!isBrightWeek && dailyCitiri?.apostol && (
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[3px] font-heading uppercase mb-2">
            Apostolul zilei
          </p>
          <p className="text-[16px] text-ivory leading-[1.75] italic font-body">
            &bdquo;{dailyCitiri.apostol.text}&rdquo;
          </p>
          <div className="flex items-center gap-2 mt-3">
            <div className="h-px w-6" style={{ background: "#C5A55A44" }} />
            <p className="text-[13px] text-gold-light font-heading tracking-[1px]">
              {dailyCitiri.apostol.ref}
            </p>
          </div>
        </div>
      )}

      {!isBrightWeek && dailyCitiri?.evanghelie && (
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[3px] font-heading uppercase mb-2">
            Evanghelia zilei
          </p>
          <p className="text-[16px] text-ivory leading-[1.75] italic font-body">
            &bdquo;{dailyCitiri.evanghelie.text}&rdquo;
          </p>
          <div className="flex items-center gap-2 mt-3">
            <div className="h-px w-6" style={{ background: "#C5A55A44" }} />
            <p className="text-[13px] text-gold-light font-heading tracking-[1px]">
              {dailyCitiri.evanghelie.ref}
            </p>
          </div>
        </div>
      )}

      {/* Spovedanie CTA — hidden all Bright Week (joy, not examination of conscience) */}
      {!isBrightWeek && (
        <button onClick={() => onNavigate("spovedanie")}
          className="w-full rounded-2xl p-5 mb-4 flex items-center justify-between active:scale-[0.98] transition-transform"
          style={{
            background: "linear-gradient(135deg, #4A0E1Acc, #1B3A5Ccc)",
            border: "1px solid #C5A55A33",
          }}>
          <div className="text-left flex-1">
            <p className="text-[13px] text-gold-light tracking-[3px] font-heading uppercase mb-1">
              Îndreptar Valeriu Gafencu
            </p>
            <p className="text-[20px] font-bold text-ivory font-heading tracking-wider">
              EXAMEN DE CONȘTIINȚĂ
            </p>
          </div>
          <span className="text-gold text-xl ml-2">&#8594;</span>
        </button>
      )}

      {/* Week Calendar */}
      <div className="glass-card p-4 mb-4" style={{ border: "1px solid #C5A55A15" }}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] text-gold tracking-[2px] font-heading">SĂPTĂMÂNA</p>
        </div>
        <div className="flex gap-1.5 justify-between">
          {week.map((d, i) => {
            const isToday = d.key === todayKey;
            const isFasting = d.saint?.fasting === "post";
            return (
              <div key={i} className="flex-1 text-center rounded-xl py-2 px-0.5"
                style={{
                  background: isToday
                    ? "#C5A55A18"
                    : isFasting
                    ? "#6B1D2A22"
                    : "#6B1D2A0a",
                  border: isToday
                    ? "1px solid #C5A55A55"
                    : "1px solid transparent",
                }}>
                <p className="text-[13px] text-warm-gray mb-1 font-heading">{dayLetters[i]}</p>
                <p className={`text-[16px] mb-0.5 ${isToday ? "text-gold font-bold" : "text-ivory"}`}>
                  {d.date.getDate()}
                </p>
                <p className={`text-[11px] ${isFasting ? "text-[#C08080]" : "text-warm-gray"} font-heading tracking-wider uppercase`}>
                  {d.saint?.fasting === "post" ? "post" : d.saint?.fasting === "harti" ? "harți" : "liber"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
