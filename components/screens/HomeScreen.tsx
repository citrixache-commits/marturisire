"use client";
import { useState, useEffect } from "react";
import { getTodaySaint, getWeekDays, getLocalDateKey } from "@/data/saints-calendar";
import { totalSectiuni } from "@/data/indreptar-spovedanie";

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

  const [pravilaDimDone, setPravilaDimDone] = useState(false);
  const [pravilaSearaDone, setPravilaSearaDone] = useState(false);
  const [indreptarProgress, setIndreptarProgress] = useState<IndreptarProgress>({ sectionIndex: 0, total: totalSectiuni, completed: false });

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
          background: "linear-gradient(135deg, #4A0E1Acc, #6B1D2A77 50%, #4A0E1Acc)",
          border: "1px solid #C5A55A33",
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

      {/* Daily Gospel */}
      <div className="glass-card gold-border-left p-5 mb-4 relative overflow-hidden">
        <p className="text-[13px] text-gold tracking-[3px] font-heading mb-2">EVANGHELIA ZILEI</p>
        <p className="text-[20px] text-ivory leading-[1.8] italic relative">
          &bdquo;{saint.gospel}&rdquo;
        </p>
        <div className="flex items-center gap-2 mt-3">
          <div className="h-px w-6" style={{ background: "#C5A55A44" }} />
          <p className="text-[14px] text-gold-light font-heading tracking-wider">
            {saint.gospelRef}
          </p>
        </div>
      </div>

      {/* Spovedanie CTA */}
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
