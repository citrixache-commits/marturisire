"use client";
import { useState, useRef, useEffect } from "react";
import {
  praznice,
  saptamanaMare,
  posturi,
  getUpcomingEvents,
  formatDateRomanian,
  getDaysUntil,
  getFastingStatus,
} from "@/data/calendar";
import { saintsCalendar, getWeekDays, getTodaySaint, getLocalDateKey } from "@/data/saints-calendar";
import { fastingTypes, fastingRecipes } from "@/data/fasting-rules";

export default function CalendarScreen() {
  const [tab, setTab] = useState<"azi" | "praznice" | "posturi" | "retete">("azi");
  const [openRecipe, setOpenRecipe] = useState<number | null>(null);
  const [selectedDayKey, setSelectedDayKey] = useState<string | null>(null);
  const recipeRef = useRef<HTMLDivElement | null>(null);

  const today = new Date();
  const todayISO = getLocalDateKey(today);
  const todaySaint = saintsCalendar[todayISO];
  const saint = getTodaySaint();
  const fastingStatus = getFastingStatus(todayISO);
  const rules = fastingTypes[saint.fasting] || fastingTypes.liber;
  const weekDays = getWeekDays(today);
  const upcomingEvents = getUpcomingEvents(todayISO, 4);
  const daysToPascha = getDaysUntil("2026-04-12", todayISO);

  useEffect(() => {
    if (openRecipe !== null && recipeRef.current) {
      setTimeout(() => {
        recipeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [openRecipe]);

  const tabItems = [
    { id: "azi" as const, label: "ASTĂZI" },
    { id: "praznice" as const, label: "PRAZNICE" },
    { id: "posturi" as const, label: "POST" },
    { id: "retete" as const, label: "REȚETE" },
  ];

  return (
    <div className="px-4 py-5 stagger-children lg:py-8">
      <h2 className="text-[26px] font-heading text-gold tracking-wider mb-0.5">Calendar Ortodox</h2>
      <p className="text-[15px] text-warm-gray mb-5">Sărbători, sfinți, posturi · 2026</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        {tabItems.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="flex-1 text-[13px] py-2 rounded-lg font-heading tracking-[1.5px] transition-all"
            style={{
              background: tab === t.id ? "#C5A55A22" : "#1A141066",
              border: tab === t.id ? "1px solid #C5A55A55" : "1px solid #C5A55A11",
              color: tab === t.id ? "#C5A55A" : "#A89E92",
              fontWeight: tab === t.id ? 600 : 400,
            }}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "azi" && (
        <>
          {/* Today's banner */}
          <div className="rounded-2xl p-5 mb-5"
            style={{ background: "linear-gradient(135deg, #4A0E1A, #6B1D2A)", border: "1px solid #C5A55A33" }}>
            <p className="text-[12px] text-gold-light tracking-[2px] font-heading mb-2">ASTĂZI</p>
            <p className="text-[20px] text-ivory font-medium mb-1">{formatDateRomanian(todayISO)}</p>
            {todaySaint?.type && <p className="text-[16px] text-gold mb-1">{todaySaint.type}</p>}
            {todaySaint && <p className="text-[15px] text-ivory mb-2">{todaySaint.name}</p>}
            {todaySaint?.others && todaySaint.others.length > 0 && (
              <ul className="mt-2 space-y-1">
                {todaySaint.others.map((o, i) => (
                  <li key={i} className="text-[13px] text-ivory/75 leading-snug flex gap-2">
                    <span className="text-gold-light mt-0.5">&#10022;</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            )}
            {todaySaint?.gospel && (
              <div className="mt-3 p-3 rounded-xl" style={{ background: "#1A141055", border: "1px solid #C5A55A15" }}>
                <p className="text-[16px] text-ivory/90 italic leading-[1.8]">&bdquo;{todaySaint.gospel}&rdquo;</p>
                {todaySaint.gospelRef && <p className="text-[12px] text-gold-light mt-2">— {todaySaint.gospelRef}</p>}
              </div>
            )}
          </div>

          {/* Fasting status + rules */}
          <div className="rounded-xl p-4 mb-5" style={{
            background: fastingStatus.isPost ? "#6B1D2A22" : "#C5A55A0a",
            border: `1px solid ${fastingStatus.isPost ? "#6B1D2A44" : "#C5A55A22"}`,
          }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{fastingStatus.isPost ? "\u{1F56F}\u{FE0F}" : "\u{1F377}"}</span>
              <div>
                <p className="text-[14px] font-medium" style={{ color: fastingStatus.isPost ? "#E8A0A0" : "#C5A55A" }}>
                  {fastingStatus.isPost ? "Zi de post" : "Fără post"}
                </p>
                <p className="text-[12px] text-warm-gray">{fastingStatus.reason}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {rules.forbidden.map((r, i) => (
                <span key={i} className="text-xs rounded-lg px-2.5 py-1 text-[#E8A0A0]"
                  style={{ background: "#6B1D2A33", border: "1px solid #6B1D2A44" }}>
                  &#10060; {r}
                </span>
              ))}
              {rules.allowed.map((r, i) => (
                <span key={`a-${i}`} className="text-xs rounded-lg px-2.5 py-1 text-gold"
                  style={{ background: "#C5A55A15", border: "1px solid #C5A55A22" }}>
                  &#9989; {r}
                </span>
              ))}
            </div>
          </div>

          {/* Pascha countdown */}
          {daysToPascha > 0 && daysToPascha <= 50 && (
            <div className="rounded-2xl p-4 mb-5 flex items-center gap-4"
              style={{ background: "#C5A55A0a", border: "1px solid #C5A55A33" }}>
              <div className="w-14 h-14 rounded-full flex flex-col items-center justify-center shrink-0"
                style={{ border: "2px solid #C5A55A", background: "#1A1410" }}>
                <span className="text-xl font-bold text-gold leading-none">{daysToPascha}</span>
                <span className="text-[9px] text-gold-light tracking-wider mt-0.5">ZILE</span>
              </div>
              <div>
                <p className="text-[18px] text-ivory font-medium">Până la Paște</p>
                <p className="text-[12px] text-warm-gray">Duminică, 12 aprilie 2026</p>
              </div>
            </div>
          )}

          {daysToPascha === 0 && (
            <div className="rounded-2xl p-5 mb-5 text-center"
              style={{ background: "linear-gradient(135deg, #C5A55A33, #6B1D2A44)", border: "1px solid #C5A55A55" }}>
              <p className="text-2xl text-gold font-heading font-bold mb-1">HRISTOS A ÎNVIAT!</p>
              <p className="text-[14px] text-ivory/90">Adevărat a înviat!</p>
            </div>
          )}

          {/* Week view — tap a day to see its saints */}
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">SĂPTĂMÂNA ACEASTA</p>
          <div className="grid grid-cols-7 gap-1 mb-3">
            {weekDays.map(({ date, key, saint: daySaint }) => {
              const isToday = key === todayISO;
              const isSelected = selectedDayKey === key;
              const dayNames = ["D", "L", "M", "M", "J", "V", "S"];
              const dow = date.getDay();
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDayKey(isSelected ? null : key)}
                  className="rounded-lg p-2 text-center active:scale-[0.97] transition-transform"
                  style={{
                    background: isSelected
                      ? "#C5A55A33"
                      : isToday
                      ? "#C5A55A18"
                      : "#1A141033",
                    border: isSelected
                      ? "1px solid #C5A55A"
                      : isToday
                      ? "1px solid #C5A55A55"
                      : "1px solid transparent",
                  }}>
                  <p className="text-[12px] font-heading tracking-wider mb-1" style={{ color: isToday || isSelected ? "#C5A55A" : "#A89E92" }}>
                    {dayNames[dow]}
                  </p>
                  <p className="text-[15px] font-bold" style={{ color: isToday || isSelected ? "#C5A55A" : "#F5F0E8" }}>
                    {date.getDate()}
                  </p>
                  {daySaint?.fasting === "post" && <span className="text-[9px] text-[#E8A0A0]">&#9675;</span>}
                  {daySaint?.fasting === "harti" && <span className="text-[9px] text-gold">&#10022;</span>}
                </button>
              );
            })}
          </div>

          {/* Expanded day view */}
          {selectedDayKey && (() => {
            const selected = saintsCalendar[selectedDayKey];
            if (!selected) return null;
            return (
              <div className="rounded-xl p-4 mb-5 animate-fade-in"
                style={{ background: "#1A141066", border: "1px solid #C5A55A33" }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[12px] text-gold-light tracking-[2px] font-heading">
                    {formatDateRomanian(selectedDayKey)}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedDayKey(null)}
                    className="text-[12px] text-warm-gray active:opacity-70">
                    &#10005;
                  </button>
                </div>
                {selected.type && (
                  <p className="text-[13px] text-gold mb-1 font-heading tracking-wider uppercase">{selected.type}</p>
                )}
                <p className="text-[16px] text-ivory italic mb-2">{selected.name}</p>
                {selected.others && selected.others.length > 0 && (
                  <ul className="space-y-1">
                    {selected.others.map((o, i) => (
                      <li key={i} className="text-[13px] text-ivory/75 leading-snug flex gap-2">
                        <span className="text-gold-light mt-0.5">&#10022;</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })()}

          {/* Upcoming */}
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">URMEAZĂ</p>
          <div className="space-y-2">
            {upcomingEvents.map((event) => {
              const days = getDaysUntil(event.date, todayISO);
              return (
                <div key={event.date} className="rounded-xl p-3 flex items-center gap-3"
                  style={{ background: "#1A141044", border: "1px solid #C5A55A11" }}>
                  <span className="text-2xl">{event.icon}</span>
                  <div className="flex-1">
                    <p className="text-[14px] text-ivory font-medium">{event.name}</p>
                    {event.description && <p className="text-[12px] text-warm-gray mt-0.5">{event.description}</p>}
                  </div>
                  <p className="text-[12px] text-gold font-semibold">
                    {days === 0 ? "azi" : days === 1 ? "mâine" : `${days} zile`}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}

      {tab === "praznice" && (
        <>
          {/* Săptămâna Mare */}
          <div className="rounded-2xl p-4 mb-5"
            style={{ background: "linear-gradient(135deg, #4A0E1A, #6B1D2A)", border: "1px solid #C5A55A33" }}>
            <p className="text-[12px] text-gold-light tracking-[2px] font-heading mb-2">SĂPTĂMÂNA MARE</p>
            <p className="text-[16px] text-ivory font-medium mb-3">6 — 11 aprilie 2026</p>
            <div className="space-y-1.5">
              {saptamanaMare.map((day) => {
                const isToday = day.date === todayISO;
                return (
                  <div key={day.date} className="flex items-center gap-2.5 py-1"
                    style={{ borderLeft: `2px solid ${isToday ? "#C5A55A" : "#C5A55A22"}`, paddingLeft: "10px" }}>
                    <span className="text-base">{day.icon}</span>
                    <div className="flex-1">
                      <p className="text-[15px] font-medium" style={{ color: isToday ? "#C5A55A" : "#F5F0E8" }}>{day.name}</p>
                      {day.description && <p className="text-[12px] text-warm-gray">{day.description}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">PRAZNICELE ÎMPĂRĂTEȘTI</p>
          <div className="space-y-2">
            {praznice.map((feast) => {
              const days = getDaysUntil(feast.date, todayISO);
              const isPast = days < 0;
              return (
                <div key={feast.date} className="rounded-xl p-3 flex items-center gap-3"
                  style={{ background: "#1A141044", border: "1px solid #C5A55A11", opacity: isPast ? 0.5 : 1 }}>
                  <span className="text-2xl">{feast.icon}</span>
                  <div className="flex-1">
                    <p className="text-[14px] text-ivory font-medium">{feast.name}</p>
                    <p className="text-[12px] text-warm-gray">{formatDateRomanian(feast.date)}</p>
                  </div>
                  {!isPast && days <= 60 && (
                    <span className="text-[10px] text-gold font-semibold">{days === 0 ? "azi" : `${days}z`}</span>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {tab === "posturi" && (
        <div className="space-y-3">
          {/* Today's fasting rules at top */}
          <div className="rounded-xl p-4 mb-2" style={{
            background: fastingStatus.isPost ? "#6B1D2A22" : "#C5A55A0a",
            border: `1px solid ${fastingStatus.isPost ? "#6B1D2A44" : "#C5A55A22"}`,
          }}>
            <p className="text-[11px] text-gold tracking-[2px] font-heading mb-2">REGULI DE POST AZI</p>
            <p className="text-[15px] text-ivory/85 mb-2">{rules.description}</p>
            <div className="flex flex-wrap gap-2">
              {rules.forbidden.map((r, i) => (
                <span key={i} className="text-xs rounded-lg px-2.5 py-1 text-[#E8A0A0]"
                  style={{ background: "#6B1D2A33", border: "1px solid #6B1D2A44" }}>&#10060; {r}</span>
              ))}
              {rules.allowed.map((r, i) => (
                <span key={`a-${i}`} className="text-xs rounded-lg px-2.5 py-1 text-gold"
                  style={{ background: "#C5A55A15", border: "1px solid #C5A55A22" }}>&#9989; {r}</span>
              ))}
            </div>
          </div>

          {posturi.map((post) => {
            const daysToStart = getDaysUntil(post.start, todayISO);
            const daysToEnd = getDaysUntil(post.end, todayISO);
            const isActive = daysToStart <= 0 && daysToEnd >= 0;
            const isPast = daysToEnd < 0;
            return (
              <div key={post.id} className="rounded-2xl p-4"
                style={{
                  background: isActive ? "linear-gradient(135deg, #4A0E1A, #6B1D2A)" : "#1A141044",
                  border: isActive ? "1px solid #C5A55A55" : "1px solid #C5A55A15",
                  opacity: isPast ? 0.5 : 1,
                }}>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{post.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[16px] text-ivory font-medium">{post.name}</p>
                      {isActive && (
                        <span className="text-[9px] text-gold px-1.5 py-0.5 rounded font-heading tracking-wider"
                          style={{ background: "#C5A55A15" }}>ACUM</span>
                      )}
                    </div>
                    <p className="text-[12px] text-gold-light mb-2">
                      {formatDateRomanian(post.start).split(",")[1]?.trim()} — {formatDateRomanian(post.end).split(",")[1]?.trim()}
                    </p>
                    <p className="text-[12px] text-warm-gray leading-relaxed">{post.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "retete" && (
        <div className="space-y-2 stagger-children">
          {fastingRecipes.map((recipe, i) => {
            const isOpen = openRecipe === i;
            return (
              <div key={i} ref={isOpen ? recipeRef : null}>
                <button onClick={() => setOpenRecipe(isOpen ? null : i)}
                  className="w-full text-left p-3.5 flex items-center gap-3.5 transition-all active:scale-[0.98]"
                  style={{
                    background: isOpen ? "#C5A55A15" : "#1A141044",
                    border: isOpen ? "1px solid #C5A55A33" : "1px solid #C5A55A11",
                    borderRadius: isOpen ? "12px 12px 0 0" : "12px",
                  }}>
                  <span className="text-3xl">{recipe.emoji}</span>
                  <div className="flex-1">
                    <p className="text-[18px] text-ivory font-medium">{recipe.name}</p>
                    <p className="text-[14px] text-warm-gray mt-0.5">{recipe.time} &middot; {recipe.servings}</p>
                  </div>
                  <span className="text-gold text-base transition-transform" style={{ transform: isOpen ? "rotate(90deg)" : "none" }}>&#9654;</span>
                </button>
                {isOpen && (
                  <div className="rounded-b-xl p-5 animate-fade-in"
                    style={{ background: "linear-gradient(180deg, #C5A55A08, #1A141066)", border: "1px solid #C5A55A33", borderTop: "none" }}>
                    <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">INGREDIENTE</p>
                    <div className="space-y-1.5 mb-5">
                      {recipe.ingredients.map((ing, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-gold text-[10px] mt-1.5">&#10022;</span>
                          <p className="text-[16px] text-ivory/90 leading-snug">{ing}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">PREPARARE</p>
                    <div className="space-y-3">
                      {recipe.steps.map((step, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 mt-0.5"
                            style={{ background: "#C5A55A15", border: "1px solid #C5A55A33", color: "#C5A55A" }}>
                            {j + 1}
                          </span>
                          <p className="text-[16px] text-ivory/90 leading-[1.8]">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
