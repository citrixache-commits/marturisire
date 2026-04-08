"use client";
import { useState, useRef, useEffect } from "react";
import { getTodaySaint } from "@/data/saints-calendar";
import { fastingTypes, fastingRecipes } from "@/data/fasting-rules";

export default function FastingScreen() {
  const saint = getTodaySaint();
  const rules = fastingTypes[saint.fasting] || fastingTypes.liber;
  const [openRecipe, setOpenRecipe] = useState<number | null>(null);
  const recipeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (openRecipe !== null && recipeRef.current) {
      setTimeout(() => {
        recipeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [openRecipe]);

  return (
    <div className="px-4 py-5 stagger-children lg:py-8">
      <h2 className="text-[26px] font-heading text-gold tracking-wider mb-0.5">Calendar de Post</h2>
      <p className="text-[15px] text-warm-gray mb-5">Rețete de post și ghid alimentar</p>

      {/* Top section: status + rules side by side on desktop */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">

      {/* Current fast status */}
      <div className="rounded-2xl p-5 mb-5"
        style={{ background: "linear-gradient(135deg, #4A0E1A, #6B1D2A88)", border: "1px solid #C5A55A33" }}>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[14px] text-gold-light tracking-[2px] font-heading mb-1">POSTUL MARE</p>
            <p className="text-[24px] text-ivory font-medium">Săptămâna Patimilor</p>
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
        <p className="text-[16px] text-ivory/85 mb-3">{rules.description}</p>
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

      </div>{/* end top grid */}

      {/* Recipes */}
      <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">REȚETE DE POST</p>
      <div className="space-y-2 stagger-children">
        {fastingRecipes.map((recipe, i) => {
          const isOpen = openRecipe === i;
          return (
            <div key={i} ref={isOpen ? recipeRef : null}>
              <button
                onClick={() => setOpenRecipe(isOpen ? null : i)}
                className="w-full text-left p-3.5 flex items-center gap-3.5 transition-all active:scale-[0.98]"
                style={{
                  background: isOpen ? "#C5A55A15" : "#1A141066",
                  border: isOpen ? "1px solid #C5A55A44" : "1px solid #C5A55A11",
                  borderRadius: isOpen ? "12px 12px 0 0" : "12px",
                }}>
                <span className="text-3xl">{recipe.emoji}</span>
                <div className="flex-1">
                  <p className="text-[18px] text-ivory font-medium">{recipe.name}</p>
                  <p className="text-[14px] text-warm-gray mt-0.5">
                    {recipe.time} &middot; {recipe.servings}
                  </p>
                </div>
                <span className="text-gold text-base transition-transform" style={{ transform: isOpen ? "rotate(90deg)" : "none" }}>&#9654;</span>
              </button>

              {isOpen && (
                <div className="rounded-b-xl p-5 animate-fade-in"
                  style={{ background: "linear-gradient(180deg, #C5A55A10, #1A141088)", border: "1px solid #C5A55A44", borderTop: "none" }}>

                  {/* Ingredients */}
                  <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">INGREDIENTE</p>
                  <div className="space-y-1.5 mb-5">
                    {recipe.ingredients.map((ing, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="text-gold text-[10px] mt-1.5">&#10022;</span>
                        <p className="text-[16px] text-ivory/90 leading-snug">{ing}</p>
                      </div>
                    ))}
                  </div>

                  {/* Steps */}
                  <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">PREPARARE</p>
                  <div className="space-y-3">
                    {recipe.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 mt-0.5"
                          style={{ background: "#C5A55A22", border: "1px solid #C5A55A44", color: "#C5A55A" }}>
                          {j + 1}
                        </span>
                        <p className="text-[16px] text-ivory/90 leading-[1.7]">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
