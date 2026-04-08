"use client";
import { useState, useRef, useEffect } from "react";
import { prayers } from "@/data/prayers";

export default function PrayersScreen() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);

  // Scroll into view when a prayer is opened
  useEffect(() => {
    if (activeId !== null && activeRef.current) {
      setTimeout(() => {
        activeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [activeId]);

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
    <div className="px-4 py-5">
      <h2 className="text-[26px] font-heading text-gold tracking-wider mb-0.5">Rugăciuni</h2>
      <p className="text-[15px] text-warm-gray mb-5">Rugăciuni canonice ortodoxe pentru viața zilnică</p>

      {/* Prayer list — inline expand */}
      <div className="space-y-2 stagger-children">
        {prayers.map((prayer) => {
          const isActive = activeId === prayer.id;
          return (
            <div key={prayer.id} ref={isActive ? activeRef : null}>
              <button
                onClick={() => setActiveId(isActive ? null : prayer.id)}
                className="w-full text-left rounded-xl p-3.5 flex items-center gap-3.5 transition-all active:scale-[0.98]"
                style={{
                  background: isActive ? "#C5A55A15" : "#1A141066",
                  border: isActive ? "1px solid #C5A55A44" : "1px solid #C5A55A11",
                  borderRadius: isActive ? "12px 12px 0 0" : "12px",
                }}>
                <span className="text-2xl">{iconMap[prayer.icon] || "\u{1F64F}"}</span>
                <div className="flex-1">
                  <p className="text-[18px] text-ivory font-medium">{prayer.title}</p>
                  <p className="text-[14px] text-warm-gray mt-0.5">{prayer.duration}</p>
                </div>
                <span className="text-gold text-base transition-transform" style={{ transform: isActive ? "rotate(90deg)" : "none" }}>&#9654;</span>
              </button>

              {/* Inline prayer text */}
              {isActive && prayer.text && (
                <div className="rounded-b-xl p-5 animate-fade-in"
                  style={{ background: "linear-gradient(180deg, #C5A55A10, #1A141088)", border: "1px solid #C5A55A44", borderTop: "none" }}>
                  <p className="text-[18px] text-ivory/90 leading-[1.8] whitespace-pre-wrap font-body">
                    {prayer.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
