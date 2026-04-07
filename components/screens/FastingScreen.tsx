"use client";
import { getTodaySaint } from "@/data/saints-calendar";
import { fastingTypes, fastingRecipes } from "@/data/fasting-rules";

export default function FastingScreen() {
  const saint = getTodaySaint();
  const rules = fastingTypes[saint.fasting] || fastingTypes.liber;

  return (
    <div className="px-4 py-5 stagger-children">
      <h2 className="text-[22px] font-heading text-gold tracking-wider mb-0.5">Calendar de Post</h2>
      <p className="text-[13px] text-warm-gray mb-5">Rețete de post și ghid alimentar</p>

      {/* Current fast status */}
      <div className="rounded-2xl p-5 mb-5"
        style={{ background: "linear-gradient(135deg, #4A0E1A, #6B1D2A88)", border: "1px solid #C5A55A33" }}>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[12px] text-gold-light tracking-[2px] font-heading mb-1">POSTUL MARE</p>
            <p className="text-xl text-ivory font-medium">Săptămâna Patimilor</p>
          </div>
          <div className="w-14 h-14 rounded-full flex flex-col items-center justify-center"
            style={{ border: "3px solid #C5A55A" }}>
            <span className="text-lg font-bold text-gold leading-none">40</span>
            <span className="text-[8px] text-gold-light">zile</span>
          </div>
        </div>
        <div className="w-full h-1.5 rounded-full mt-4" style={{ background: "#F5F0E815" }}>
          <div className="h-full rounded-full" style={{ width: "92%", background: "linear-gradient(90deg, #C5A55A, #6B1D2A)" }} />
        </div>
        <p className="text-[12px] text-warm-gray mt-1.5">92% completat — mai sunt 3 zile până la Paște!</p>
      </div>

      {/* Today's rules */}
      <div className="glass-card p-4 mb-5">
        <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">REGULI DE POST AZI</p>
        <p className="text-[14px] text-ivory/85 mb-3">{rules.description}</p>
        <div className="flex flex-wrap gap-2">
          {rules.forbidden.map((r, i) => (
            <span key={i} className="text-xs rounded-lg px-2.5 py-1 text-[#E8A0A0]"
              style={{ background: "#6B1D2A44", border: "1px solid #6B1D2A66" }}>
              &#10060; {r}
            </span>
          ))}
          {rules.allowed.map((r, i) => (
            <span key={`a-${i}`} className="text-xs rounded-lg px-2.5 py-1 text-gold"
              style={{ background: "#C5A55A22", border: "1px solid #C5A55A33" }}>
              &#9989; {r}
            </span>
          ))}
        </div>
      </div>

      {/* Recipes */}
      <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">REȚETE DE POST RECOMANDATE</p>
      <div className="space-y-2 stagger-children">
        {fastingRecipes.map((recipe, i) => (
          <div key={i} className="glass-card p-3.5 flex items-center gap-3.5">
            <span className="text-3xl">{recipe.emoji}</span>
            <div className="flex-1">
              <p className="text-[15px] text-ivory font-medium">{recipe.name}</p>
              <p className="text-[12px] text-warm-gray mt-0.5">
                {recipe.time} &middot; {recipe.cal}
              </p>
            </div>
            <span className="text-gold text-sm">&rarr;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
