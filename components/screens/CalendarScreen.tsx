"use client";
import { useState } from "react";
import {
  praznice,
  saptamanaMare,
  posturi,
  getUpcomingEvents,
  formatDateRomanian,
  getDaysUntil,
  getFastingStatus,
} from "@/data/calendar";
import { saintsCalendar, getWeekDays } from "@/data/saints-calendar";

export default function CalendarScreen() {
  const [tab, setTab] = useState<"azi" | "praznice" | "posturi">("azi");

  const today = new Date();
  const todayISO = today.toISOString().split("T")[0];
  const todaySaint = saintsCalendar[todayISO];
  const fastingStatus = getFastingStatus(todayISO);
  const weekDays = getWeekDays(today);
  const upcomingEvents = getUpcomingEvents(todayISO, 4);
  const daysToPascha = getDaysUntil("2026-04-12", todayISO);

  return (
    <div className="px-4 py-5 stagger-children">
      <h2 className="text-[22px] font-heading text-gold tracking-wider mb-0.5">Calendar Ortodox</h2>
      <p className="text-[13px] text-warm-gray mb-5">Sărbători, sfinți, posturi · 2026</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        {(["azi", "praznice", "posturi"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 text-[11px] py-2 rounded-lg font-heading tracking-[1.5px] transition-all"
            style={{
              background: tab === t ? "#C5A55A22" : "#1A141066",
              border: tab === t ? "1px solid #C5A55A66" : "1px solid #C5A55A11",
              color: tab === t ? "#C5A55A" : "#8A7E72",
              fontWeight: tab === t ? 600 : 400,
            }}
          >
            {t === "azi" ? "ASTĂZI" : t === "praznice" ? "PRAZNICE" : "POSTURI"}
          </button>
        ))}
      </div>

      {tab === "azi" && (
        <>
          {/* Today's banner */}
          <div
            className="rounded-2xl p-5 mb-5"
            style={{
              background: "linear-gradient(135deg, #4A0E1A, #6B1D2A)",
              border: "1px solid #C5A55A44",
            }}
          >
            <p className="text-[10px] text-gold-light tracking-[2px] font-heading mb-2">
              ASTĂZI
            </p>
            <p className="text-[16px] text-ivory font-medium mb-1">
              {formatDateRomanian(todayISO)}
            </p>
            {todaySaint?.type && (
              <p className="text-[14px] text-gold mb-1">{todaySaint.type}</p>
            )}
            {todaySaint && (
              <p className="text-[13px] text-warm-gray mb-3">{todaySaint.name}</p>
            )}
            {todaySaint?.gospel && (
              <div
                className="mt-3 p-3 rounded-xl"
                style={{ background: "#1A141066", border: "1px solid #C5A55A22" }}
              >
                <p className="text-[13px] text-ivory/90 italic leading-relaxed">
                  „{todaySaint.gospel}"
                </p>
                {todaySaint.gospelRef && (
                  <p className="text-[11px] text-gold-light mt-2">— {todaySaint.gospelRef}</p>
                )}
              </div>
            )}
          </div>

          {/* Pascha countdown */}
          {daysToPascha > 0 && daysToPascha <= 50 && (
            <div
              className="rounded-2xl p-4 mb-5 flex items-center gap-4"
              style={{
                background: "linear-gradient(135deg, #C5A55A22, #6B1D2A33)",
                border: "1px solid #C5A55A44",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex flex-col items-center justify-center shrink-0"
                style={{ border: "3px solid #C5A55A", background: "#1A1410" }}
              >
                <span className="text-xl font-bold text-gold leading-none">{daysToPascha}</span>
                <span className="text-[8px] text-gold-light tracking-wider mt-0.5">ZILE</span>
              </div>
              <div>
                <p className="text-[11px] text-gold-light tracking-[2px] font-heading mb-0.5">
                  PÂNĂ LA PAȘTE
                </p>
                <p className="text-[15px] text-ivory font-medium">
                  Duminică, 12 aprilie 2026
                </p>
                <p className="text-[11px] text-warm-gray">Învierea Domnului</p>
              </div>
            </div>
          )}

          {daysToPascha === 0 && (
            <div
              className="rounded-2xl p-5 mb-5 text-center"
              style={{
                background: "linear-gradient(135deg, #C5A55A, #6B1D2A)",
                border: "2px solid #C5A55A",
              }}
            >
              <p className="text-[10px] text-ivory tracking-[3px] font-heading mb-2">ASTĂZI</p>
              <p className="text-2xl text-ivory font-heading font-bold mb-1">
                HRISTOS A ÎNVIAT!
              </p>
              <p className="text-[13px] text-ivory/90">Adevărat a înviat!</p>
            </div>
          )}

          {/* Fasting status */}
          <div
            className="rounded-xl p-3.5 mb-5 flex items-center gap-3"
            style={{
              background: fastingStatus.isPost ? "#6B1D2A33" : "#C5A55A15",
              border: `1px solid ${fastingStatus.isPost ? "#6B1D2A66" : "#C5A55A33"}`,
            }}
          >
            <span className="text-2xl">{fastingStatus.isPost ? "🕯️" : "🍷"}</span>
            <div className="flex-1">
              <p
                className="text-[13px] font-medium"
                style={{ color: fastingStatus.isPost ? "#E8A0A0" : "#C5A55A" }}
              >
                {fastingStatus.isPost ? "Zi de post" : "Fără post"}
              </p>
              <p className="text-[11px] text-warm-gray">{fastingStatus.reason}</p>
            </div>
          </div>

          {/* Week view */}
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">
            SĂPTĂMÂNA ACEASTA
          </p>
          <div className="grid grid-cols-7 gap-1 mb-5">
            {weekDays.map(({ date, key, saint }) => {
              const isToday = key === todayISO;
              const dayNames = ["D", "L", "M", "M", "J", "V", "S"];
              const dow = date.getDay();
              return (
                <div
                  key={key}
                  className="rounded-lg p-2 text-center"
                  style={{
                    background: isToday ? "#C5A55A22" : "#1A141055",
                    border: isToday ? "1px solid #C5A55A66" : "1px solid #C5A55A11",
                  }}
                >
                  <p
                    className="text-[9px] font-heading tracking-wider mb-1"
                    style={{ color: isToday ? "#C5A55A" : "#8A7E72" }}
                  >
                    {dayNames[dow]}
                  </p>
                  <p
                    className="text-[14px] font-bold"
                    style={{ color: isToday ? "#C5A55A" : "#F5F0E8" }}
                  >
                    {date.getDate()}
                  </p>
                  {saint?.fasting === "post" && (
                    <span className="text-[8px] text-[#E8A0A0]">○</span>
                  )}
                  {saint?.fasting === "harti" && (
                    <span className="text-[8px] text-gold">✦</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Upcoming */}
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">URMEAZĂ</p>
          <div className="space-y-2">
            {upcomingEvents.map((event) => {
              const days = getDaysUntil(event.date, todayISO);
              return (
                <div
                  key={event.date}
                  className="rounded-xl p-3 flex items-center gap-3"
                  style={{ background: "#1A141066", border: "1px solid #C5A55A11" }}
                >
                  <span className="text-2xl">{event.icon}</span>
                  <div className="flex-1">
                    <p className="text-[13px] text-ivory font-medium">{event.name}</p>
                    {event.description && (
                      <p className="text-[10px] text-warm-gray mt-0.5">{event.description}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-gold font-semibold">
                      {days === 0 ? "azi" : days === 1 ? "mâine" : `${days} zile`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {tab === "praznice" && (
        <>
          {/* Săptămâna Mare highlight */}
          <div
            className="rounded-2xl p-4 mb-5"
            style={{
              background: "linear-gradient(135deg, #4A0E1A, #6B1D2A)",
              border: "1px solid #C5A55A44",
            }}
          >
            <p className="text-[10px] text-gold-light tracking-[2px] font-heading mb-2">
              SĂPTĂMÂNA MARE
            </p>
            <p className="text-[14px] text-ivory font-medium mb-3">6 — 11 aprilie 2026</p>
            <div className="space-y-1.5">
              {saptamanaMare.map((day) => {
                const isToday = day.date === todayISO;
                return (
                  <div
                    key={day.date}
                    className="flex items-center gap-2.5 py-1"
                    style={{
                      borderLeft: `2px solid ${isToday ? "#C5A55A" : "#C5A55A33"}`,
                      paddingLeft: "10px",
                    }}
                  >
                    <span className="text-base">{day.icon}</span>
                    <div className="flex-1">
                      <p
                        className="text-[12px] font-medium"
                        style={{ color: isToday ? "#C5A55A" : "#F5F0E8" }}
                      >
                        {day.name}
                      </p>
                      {day.description && (
                        <p className="text-[10px] text-warm-gray">{day.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">
            PRAZNICELE ÎMPĂRĂTEȘTI
          </p>
          <div className="space-y-2">
            {praznice.map((feast) => {
              const days = getDaysUntil(feast.date, todayISO);
              const isPast = days < 0;
              return (
                <div
                  key={feast.date}
                  className="rounded-xl p-3 flex items-center gap-3"
                  style={{
                    background: isPast ? "#1A141044" : "#1A141066",
                    border: "1px solid #C5A55A11",
                    opacity: isPast ? 0.5 : 1,
                  }}
                >
                  <span className="text-2xl">{feast.icon}</span>
                  <div className="flex-1">
                    <p className="text-[13px] text-ivory font-medium">{feast.name}</p>
                    <p className="text-[10px] text-warm-gray">
                      {formatDateRomanian(feast.date)}
                    </p>
                  </div>
                  {!isPast && days <= 60 && (
                    <span className="text-[10px] text-gold font-semibold">
                      {days === 0 ? "azi" : `${days}z`}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {tab === "posturi" && (
        <div className="space-y-3">
          {posturi.map((post) => {
            const daysToStart = getDaysUntil(post.start, todayISO);
            const daysToEnd = getDaysUntil(post.end, todayISO);
            const isActive = daysToStart <= 0 && daysToEnd >= 0;
            const isPast = daysToEnd < 0;
            return (
              <div
                key={post.id}
                className="rounded-2xl p-4"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, #4A0E1A, #6B1D2A)"
                    : "#1A141066",
                  border: isActive ? "1px solid #C5A55A66" : "1px solid #C5A55A22",
                  opacity: isPast ? 0.5 : 1,
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{post.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[14px] text-ivory font-medium">{post.name}</p>
                      {isActive && (
                        <span
                          className="text-[8px] text-gold px-1.5 py-0.5 rounded font-heading tracking-wider"
                          style={{ background: "#C5A55A22" }}
                        >
                          ACUM
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gold-light mb-2">
                      {formatDateRomanian(post.start).split(",")[1]?.trim()} —{" "}
                      {formatDateRomanian(post.end).split(",")[1]?.trim()}
                    </p>
                    <p className="text-[11px] text-warm-gray leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
