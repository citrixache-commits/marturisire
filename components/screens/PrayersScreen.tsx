"use client";
import { useState } from "react";
import { prayers } from "@/data/prayers";

export default function PrayersScreen() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [showText, setShowText] = useState(false);

  const activePrayer = activeId !== null ? prayers.find((p) => p.id === activeId) : null;

  return (
    <div className="px-4 py-5">
      <h2 className="text-[26px] font-heading text-gold tracking-wider mb-0.5">Rugăciuni</h2>
      <p className="text-[15px] text-warm-gray mb-5">Rugăciuni canonice ortodoxe pentru viața zilnică</p>

      {/* Active Prayer Player */}
      {activePrayer && (
        <div className="rounded-2xl p-6 mb-5 animate-fade-in"
          style={{ background: "linear-gradient(135deg, #4A0E1A, #6B1D2A)", border: "1px solid #C5A55A44" }}>
          <p className="text-[14px] text-gold-light tracking-[2px] font-heading mb-2">SE ASCULTĂ ACUM</p>
          <h3 className="text-[20px] text-ivory font-medium mb-4">{activePrayer.title}</h3>

          {/* Progress bar */}
          <div className="w-full h-1 rounded-full mb-3" style={{ background: "#F5F0E822" }}>
            <div className="h-full bg-gold rounded-full transition-all duration-300 animate-pulse-gentle" style={{ width: "35%" }} />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[12px] text-warm-gray">5:12</span>
            <div className="flex gap-5 items-center">
              <button className="text-xl text-ivory">&#9198;</button>
              <button onClick={() => setActiveId(null)}
                className="w-11 h-11 rounded-full bg-gold flex items-center justify-center text-lg text-dark">
                &#9208;
              </button>
              <button className="text-xl text-ivory">&#9197;</button>
            </div>
            <span className="text-[12px] text-warm-gray">{activePrayer.duration}</span>
          </div>

          {/* Show text toggle */}
          {activePrayer.text && (
            <button onClick={() => setShowText(!showText)}
              className="text-xs text-gold underline underline-offset-2">
              {showText ? "Ascunde textul" : "Arată textul rugăciunii"}
            </button>
          )}

          {/* Prayer text */}
          {showText && activePrayer.text && (
            <div className="mt-4 p-4 rounded-xl max-h-60 overflow-y-auto"
              style={{ background: "#1A141088", border: "1px solid #C5A55A11" }}>
              <p className="text-[18px] text-ivory/90 leading-[1.8] whitespace-pre-wrap font-body">
                {activePrayer.text}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Prayer list */}
      <div className="space-y-2 stagger-children">
        {prayers.map((prayer) => {
          const isActive = activeId === prayer.id;
          const iconMap: Record<string, string> = {
            dimineata: "\u{2600}\u{FE0F}",
            seara: "\u{1F319}",
            masa: "\u{1F35E}",
            necaz: "\u{2764}\u{FE0F}",
            adormiti: "\u{1F56F}\u{FE0F}",
            crez: "\u{271D}\u{FE0F}",
            "maica-domnului": "\u{1F339}",
            inger: "\u{1F607}",
            "ioan-botezator": "\u{1F54A}\u{FE0F}",
            acatist: "\u{1F64F}",
            canon: "\u{1F4D6}",
            psaltire: "\u{1F4DC}",
          };
          return (
            <button key={prayer.id}
              onClick={() => {
                setActiveId(prayer.id);
                setShowText(false);
              }}
              className="w-full text-left rounded-xl p-3.5 flex items-center gap-3.5 transition-all active:scale-[0.98]"
              style={{
                background: isActive ? "#C5A55A15" : "#1A141066",
                border: isActive ? "1px solid #C5A55A44" : "1px solid #C5A55A11",
              }}>
              <span className="text-2xl">{iconMap[prayer.icon] || "\u{1F64F}"}</span>
              <div className="flex-1">
                <p className="text-[18px] text-ivory font-medium">{prayer.title}</p>
                <p className="text-[14px] text-warm-gray mt-0.5">{prayer.duration}</p>
              </div>
              <span className="text-gold text-base">&#9654;</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
