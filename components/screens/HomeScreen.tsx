"use client";
import { useState, useEffect } from "react";
import { getTodaySaint, getWeekDays } from "@/data/saints-calendar";
import ByzantineDivider from "@/components/ui/ByzantineDivider";

const dayNamesRo = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];
const monthNamesRo = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

interface Props {
  onNavigate: (tab: string) => void;
  onShowPremium: () => void;
  onOpenPravila: (type: "dimineata" | "seara") => void;
  pravilaRefresh?: number;
}

export default function HomeScreen({ onNavigate, onShowPremium, onOpenPravila, pravilaRefresh }: Props) {
  const today = new Date();
  const saint = getTodaySaint();
  const week = getWeekDays();
  const todayKey = today.toISOString().split("T")[0];

  const [pravilaDimDone, setPravilaDimDone] = useState(false);
  const [pravilaSearaDone, setPravilaSearaDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setPravilaDimDone(
      localStorage.getItem(`lumina-pravila-dimineata-${todayKey}`) === "done"
    );
    setPravilaSearaDone(
      localStorage.getItem(`lumina-pravila-seara-${todayKey}`) === "done"
    );
  }, [todayKey, pravilaRefresh]);

  return (
    <div className="px-4 py-5 stagger-children">
      {/* Date & Saint Card */}
      <div className="relative overflow-hidden rounded-2xl p-6 mb-4"
        style={{
          background: "linear-gradient(135deg, #4A0E1Add, #6B1D2A99 50%, #4A0E1Add)",
          border: "1px solid #C5A55A44",
          boxShadow: "0 8px 32px rgba(74, 14, 26, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}>
        {/* Large watermark cross */}
        <div className="absolute -top-6 -right-6 text-[140px] opacity-[0.05] leading-none select-none pointer-events-none">&#10013;&#65039;</div>
        {/* Subtle gold accent in corner */}
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
          style={{ background: "radial-gradient(circle at top right, rgba(197, 165, 90, 0.15) 0%, transparent 70%)" }} />

        <div className="relative">
          <p className="text-[12px] tracking-[3px] mb-1 font-heading text-gold-light uppercase">
            {dayNamesRo[today.getDay()]}
          </p>
          <h2 className="text-[44px] font-light mb-1 text-ivory leading-none font-heading tracking-tight">
            {today.getDate()} <span className="text-[28px] text-gold-light font-light">{monthNamesRo[today.getMonth()]}</span>
          </h2>
          {saint.type && (
            <span className="inline-block text-[12px] font-semibold font-heading text-gold-light px-3 py-1 rounded-lg mb-2 mt-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #C5A55A33, #C5A55A11)",
                border: "1px solid #C5A55A66",
                boxShadow: "0 2px 8px rgba(197, 165, 90, 0.15)",
              }}>
              {saint.type}
            </span>
          )}
          <p className="text-[18px] italic text-ivory leading-relaxed mt-2">{saint.name}</p>
          <div className="flex items-center gap-2 mt-3 w-fit rounded-lg px-3 py-1.5"
            style={{
              background: saint.fasting === "post"
                ? "linear-gradient(135deg, #6B1D2A88, #6B1D2A44)"
                : saint.fasting === "harti"
                ? "linear-gradient(135deg, #C5A55A33, #C5A55A11)"
                : "linear-gradient(135deg, #3A6B3A55, #3A6B3A22)",
              border: `1px solid ${saint.fasting === "post" ? "#C5A55A33" : saint.fasting === "harti" ? "#C5A55A66" : "#3A6B3A66"}`,
            }}>
            <span className="text-sm">{saint.fasting === "post" ? "\u{1F7E3}" : saint.fasting === "harti" ? "\u{2728}" : "\u{1F7E2}"}</span>
            <span className="text-[13px] text-ivory font-medium">
              {saint.fasting === "post" ? "Zi de Post" : saint.fasting === "harti" ? "Harți — Sărbătoare!" : "Dezlegare"}
            </span>
          </div>
        </div>
      </div>

      {/* Daily Gospel */}
      <div className="glass-card gold-border-left p-5 mb-4 relative overflow-hidden">
        <div className="absolute top-2 right-2 text-[60px] opacity-[0.04] leading-none select-none pointer-events-none font-heading text-gold">"</div>
        <p className="text-[12px] text-gold tracking-[3px] font-heading mb-2">EVANGHELIA ZILEI</p>
        <p className="text-[18px] text-ivory leading-[1.75] italic relative">
          &bdquo;{saint.gospel}&rdquo;
        </p>
        <div className="flex items-center gap-2 mt-3">
          <div className="h-px w-6" style={{ background: "#C5A55A66" }} />
          <p className="text-[13px] text-gold-light font-heading tracking-wider">
            {saint.gospelRef}
          </p>
        </div>
      </div>

      {/* Spovedanie CTA — Killer Feature */}
      <button onClick={() => onNavigate("spovedanie")}
        className="w-full rounded-2xl p-5 mb-4 flex items-center justify-between active:scale-[0.98] transition-transform relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #4A0E1Add, #1B3A5Cdd)",
          border: "1px solid #C5A55A44",
          boxShadow: "0 4px 16px rgba(27, 58, 92, 0.25)",
        }}>
        <div className="text-left flex-1">
          <p className="text-[12px] text-gold-light tracking-[3px] font-heading uppercase mb-1">
            Îndreptar Valeriu Gafencu
          </p>
          <p className="text-[18px] font-bold text-ivory font-heading tracking-wider">
            EXAMEN DE CONȘTIINȚĂ
          </p>
          <p className="text-[14px] text-ivory/85 mt-1 italic">
            Pregătește-te pentru spovedanie
          </p>
        </div>
        <div className="ml-2 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #C5A55A22, #C5A55A0a)",
            border: "1px solid #C5A55A44",
          }}>
          <span className="text-xl">&#10013;&#65039;</span>
        </div>
      </button>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { icon: "\u{2600}\u{FE0F}", label: "Pravila\nDimineții", action: () => onOpenPravila("dimineata"), color: "#C5A55A", done: pravilaDimDone },
          { icon: "\u{1F319}", label: "Pravila\nSerii", action: () => onOpenPravila("seara"), color: "#1B3A5C", done: pravilaSearaDone },
          { icon: "\u{1F957}", label: "Post\nAzi", action: () => onNavigate("fasting"), color: "#8B3A62", done: false },
          { icon: "\u{1F4DC}", label: "Citește\nÎndreptarul", action: () => onNavigate("spovedanie"), color: "#6B1D2A", done: false },
        ].map((item, i) => (
          <button key={i} onClick={item.action}
            className="rounded-2xl p-5 flex flex-col items-center gap-2 transition-all active:scale-95 relative"
            style={{
              background: item.done
                ? `linear-gradient(180deg, ${item.color}22, ${item.color}0a)`
                : `linear-gradient(180deg, ${item.color}15, ${item.color}08)`,
              border: `1px solid ${item.color}${item.done ? "55" : "28"}`,
            }}>
            {item.done && (
              <span className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold done-badge"
                style={{ background: "#C5A55A", color: "#1A1410" }}>
                ✓
              </span>
            )}
            <span className="text-3xl">{item.icon}</span>
            <span className="text-[13px] text-ivory text-center whitespace-pre-line leading-tight font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Ce vine — discret */}
      <button onClick={onShowPremium}
        className="w-full py-3 mb-4 active:scale-[0.98] transition-transform text-center">
        <p className="text-[13px] text-warm-gray italic">
          Vezi ce pregătim <span className="text-gold-dim">&rarr;</span>
        </p>
      </button>

      {/* Week Calendar */}
      <div className="glass-card-elevated p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] text-gold tracking-[2px] font-heading">
            {saint.type?.includes("Săptămâna") || saint.type?.includes("Luminată")
              ? saint.type?.toUpperCase()
              : "CALENDAR SĂPTĂMÂNAL"}
          </p>
          <div className="h-px flex-1 mx-3" style={{ background: "linear-gradient(90deg, #C5A55A55, transparent)" }} />
          <span className="text-[11px] text-warm-gray font-heading tracking-wider">LUN – DUM</span>
        </div>
        <div className="flex gap-1.5 justify-between">
          {week.map((d, i) => {
            const isToday = d.key === todayKey;
            const isSpecial = d.saint?.type === "PAȘTE";
            const isFasting = d.saint?.fasting === "post";
            return (
              <div key={i} className="flex-1 text-center rounded-xl py-2 px-0.5 transition-all"
                style={{
                  background: isSpecial
                    ? "linear-gradient(180deg, #C5A55A44, #C5A55A22)"
                    : isToday
                    ? "linear-gradient(180deg, #C5A55A28, #C5A55A12)"
                    : isFasting
                    ? "linear-gradient(180deg, #6B1D2A44, #6B1D2A22)"
                    : "linear-gradient(180deg, #6B1D2A22, #6B1D2A08)",
                  border: isToday
                    ? "1px solid #C5A55A88"
                    : isSpecial
                    ? "1px solid #C5A55A66"
                    : "1px solid transparent",
                  boxShadow: isToday ? "0 0 12px rgba(197, 165, 90, 0.25)" : "none",
                }}>
                <p className="text-[12px] text-warm-gray mb-1 font-heading">{dayLetters[i]}</p>
                <p className={`text-[15px] mb-0.5 ${isSpecial ? "text-gold font-bold" : isToday ? "text-gold font-bold" : "text-ivory"}`}>
                  {d.date.getDate()}
                </p>
                <p className={`text-[10px] ${isSpecial ? "text-gold" : isFasting ? "text-[#C08080]" : "text-warm-gray"} font-heading tracking-wider uppercase`}>
                  {isSpecial ? "Paște" : d.saint?.fasting === "post" ? "post" : d.saint?.fasting === "harti" ? "harți" : "liber"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
