"use client";
import { useState } from "react";
import OrthodoxCross from "./OrthodoxCross";
import { epigrafe, intro, despreSpovedanie } from "@/data/indreptar-spovedanie";

interface Props {
  onComplete: () => void;
}

const TOTAL_STEPS = 8;

// 3 întrebări verbatim din Porunca întâi — Îndreptar Valeriu Gafencu
const previewQuestions = [
  { id: "p1-1", text: "Crezi în Dumnezeu?" },
  { id: "p1-23", text: "Ţi-ai pus întotdeauna nădejdea în Dumnezeu?" },
  { id: "p1-33", text: "Mulţumiri I-ai adus lui Dumnezeu după toate faptele tale?" },
];

export default function OnboardingFlow({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [previewAnswers, setPreviewAnswers] = useState<Record<string, "da" | "nu">>({});
  const [reminderHour, setReminderHour] = useState(8);

  function answerPreview(qid: string, val: "da" | "nu") {
    setPreviewAnswers((prev) => ({ ...prev, [qid]: val }));
  }

  function canContinue(): boolean {
    if (step === 4) {
      return Object.keys(previewAnswers).length >= previewQuestions.length;
    }
    return true;
  }

  function next() {
    if (!canContinue()) return;
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    } else {
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("lumina-onboarding-answers", JSON.stringify({
            reminderHour,
            previewAnswers,
            completedAt: new Date().toISOString(),
          }));
        } catch {
          /* ignore storage errors */
        }
      }
      onComplete();
    }
  }

  const buttonLabel =
    step === 0 ? "Începe \u2794"
    : step === TOTAL_STEPS - 1 ? "Începe 7 zile GRATUIT \u2794"
    : "Continuă \u2794";

  // Primele 2 paragrafe din „Ce este păcatul" — verbatim
  const introParagraphs = intro.paragraphs.slice(0, 2);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[400] flex flex-col w-full max-w-[430px]"
      style={{ background: "linear-gradient(180deg, #1A1410, #4A0E1A)", height: "100dvh" }}>

      {/* Progress bar */}
      <div className="px-8 pt-6 pb-3 shrink-0">
        <div className="w-full h-1 rounded-full" style={{ background: "#C5A55A22" }}>
          <div className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((step + 1) / TOTAL_STEPS) * 100}%`,
              background: "linear-gradient(90deg, #C5A55A, #E8D5A3)",
            }} />
        </div>
        <p className="text-[12px] text-warm-gray text-right mt-1">{step + 1}/{TOTAL_STEPS}</p>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 animate-fade-in overflow-y-auto" key={step}>

        {/* Step 0: Welcome */}
        {step === 0 && (
          <>
            <OrthodoxCross size={56} color="#C5A55A" />
            <h1 className="text-[26px] font-heading text-gold tracking-[2px] mt-6 mb-2">MĂRTURISIRE</h1>
            <p className="text-[12px] text-gold-light tracking-[3px] font-heading uppercase mb-4">
              Credință Ortodoxă
            </p>
            <p className="text-lg text-ivory text-center leading-relaxed mb-3 max-w-[320px]">
              Îndreptar de spovedanie
            </p>
            <p className="text-sm text-warm-gray text-center leading-relaxed max-w-[300px]">
              Scrierile Sfântului Valeriu Gafencu,<br/>
              mărturisitor din închisorile comuniste (1921–1952)
            </p>
          </>
        )}

        {/* Step 1: Valeriu Gafencu — emotional hook */}
        {step === 1 && (
          <>
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ background: "#C5A55A22", border: "2px solid #C5A55A66" }}>
              <OrthodoxCross size={32} color="#C5A55A" />
            </div>
            <p className="text-[12px] text-gold-light tracking-[3px] font-heading uppercase mb-2">
              Sfântul Închisorilor
            </p>
            <h2 className="text-2xl font-heading text-gold text-center mb-5">
              Valeriu Gafencu
            </h2>
            <div className="glass-card gold-border-left p-5 max-w-[340px] mb-4">
              <p className="text-[14px] text-ivory leading-[1.75] text-left">
                În <span className="text-gold font-semibold">1948</span>, în închisoarea Aiud,
                la doar <span className="text-gold font-semibold">27 de ani</span>, un tânăr
                bolnav de tuberculoză a scris aceste rânduri.
              </p>
              <p className="text-[14px] text-ivory leading-[1.75] text-left mt-3">
                A murit în <span className="text-gold font-semibold">1952</span>,
                la Târgu Ocna. A lăsat în urmă Îndreptarul pe care îl citești.
              </p>
            </div>
            <p className="text-[12px] text-warm-gray text-center italic max-w-[300px]">
              „{epigrafe[0].text}"
            </p>
            <p className="text-[12px] text-gold-light text-center mt-1">
              — {epigrafe[0].referinta}
            </p>
          </>
        )}

        {/* Step 2: Ce este păcatul — verbatim din Îndreptar */}
        {step === 2 && (
          <>
            <p className="text-[12px] text-gold-light tracking-[3px] font-heading uppercase mb-2">
              Îndreptarul
            </p>
            <h2 className="text-xl text-gold font-heading text-center mb-5 max-w-[320px]">
              Ce este păcatul
            </h2>
            <div className="glass-card gold-border-left p-5 max-w-[340px] space-y-3">
              {introParagraphs.map((p, i) => (
                <p key={i} className="text-[13px] text-ivory leading-[1.75] text-left">
                  {p}
                </p>
              ))}
            </div>
          </>
        )}

        {/* Step 3: Întrebările deschiderii — verbatim din Îndreptar */}
        {step === 3 && (
          <>
            <p className="text-[12px] text-gold-light tracking-[3px] font-heading uppercase mb-2">
              Spovedania
            </p>
            <h2 className="text-xl text-gold font-heading text-center mb-5 max-w-[320px]">
              Întreabă-te
            </h2>
            <div className="space-y-2.5 w-full max-w-[340px]">
              {despreSpovedanie.intrebari.map((q, i) => (
                <p key={i} className="text-[15px] text-ivory leading-[1.7] text-left italic px-2">
                  {q}
                </p>
              ))}
            </div>
          </>
        )}

        {/* Step 4: Preview examen — 3 întrebări verbatim din Porunca 1 */}
        {step === 4 && (
          <>
            <p className="text-[12px] text-gold-light tracking-[3px] font-heading uppercase mb-2">
              Porunca întâi
            </p>
            <h2 className="text-lg text-ivory text-center leading-snug mb-1 max-w-[320px]">
              Examenul de conștiință
            </h2>
            <p className="text-[12px] text-warm-gray mb-5 text-center max-w-[300px]">
              Răspunde sincer. Doar tu vezi răspunsurile.
            </p>
            <div className="space-y-3 w-full max-w-[340px]">
              {previewQuestions.map((q, i) => {
                const ans = previewAnswers[q.id];
                return (
                  <div key={q.id} className="rounded-xl p-4"
                    style={{ background: "#1A141066", border: "1px solid #C5A55A22" }}>
                    <p className="text-[11px] text-gold-light font-heading mb-2">
                      {i + 1}.
                    </p>
                    <p className="text-[14px] text-ivory leading-relaxed mb-3">
                      {q.text}
                    </p>
                    <div className="flex gap-2">
                      <button onClick={() => answerPreview(q.id, "da")}
                        className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-[0.98]"
                        style={{
                          background: ans === "da" ? "#3A6B3A44" : "#1A141088",
                          border: ans === "da" ? "2px solid #3A6B3A88" : "1px solid #C5A55A22",
                          color: ans === "da" ? "#A8D5A8" : "#F5F0E8",
                        }}>
                        Da
                      </button>
                      <button onClick={() => answerPreview(q.id, "nu")}
                        className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-[0.98]"
                        style={{
                          background: ans === "nu" ? "#6B1D2A66" : "#1A141088",
                          border: ans === "nu" ? "2px solid #6B1D2A" : "1px solid #C5A55A22",
                          color: ans === "nu" ? "#E8B5B5" : "#F5F0E8",
                        }}>
                        Nu
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Step 5: Scope — 178 întrebări */}
        {step === 5 && (
          <>
            <p className="text-[12px] text-gold-light tracking-[3px] font-heading uppercase mb-3">
              Îndreptarul complet
            </p>
            <div className="text-center mb-5">
              <p className="text-6xl font-heading text-gold mb-2">178</p>
              <p className="text-base text-ivory">de întrebări te așteaptă</p>
            </div>
            <div className="space-y-2 w-full max-w-[320px] mb-4">
              {[
                { count: "10", label: "Porunci Dumnezeiești", detail: "162 întrebări" },
                { count: "7", label: "Păcate de Moarte", detail: "66 întrebări" },
                { count: "4", label: "Păcate strigătoare la cer", detail: "+ datorii & porunci bisericești" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl p-3.5"
                  style={{ background: "#1A141066", border: "1px solid #C5A55A22" }}>
                  <span className="text-2xl font-heading text-gold w-8 text-center">{s.count}</span>
                  <div className="flex-1">
                    <p className="text-[13px] text-ivory font-medium">{s.label}</p>
                    <p className="text-[12px] text-warm-gray">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 6: Reminder zilnic */}
        {step === 6 && (
          <>
            <p className="text-sm text-gold-light tracking-[2px] font-heading mb-2">REMINDER ZILNIC</p>
            <h2 className="text-xl text-ivory text-center leading-snug mb-2 max-w-[320px]">
              La ce oră vrei<br/>să te rogi?
            </h2>
            <p className="text-[12px] text-warm-gray mb-5 text-center max-w-[280px]">
              O notificare blândă pentru rugăciunile dimineții
            </p>
            <div className="max-w-[320px] w-full">
              <p className="text-[12px] text-gold tracking-[2px] font-heading mb-2">DIMINEAȚA</p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[6, 7, 8, 9].map((h) => (
                  <button key={h} onClick={() => setReminderHour(h)}
                    className="h-12 rounded-xl flex items-center justify-center text-sm transition-all"
                    style={{
                      background: reminderHour === h ? "#C5A55A33" : "#1A141066",
                      border: reminderHour === h ? "2px solid #C5A55A" : "1px solid #C5A55A22",
                      color: reminderHour === h ? "#C5A55A" : "#F5F0E8",
                    }}>
                    {h}:00
                  </button>
                ))}
              </div>
              <p className="text-[12px] text-gold tracking-[2px] font-heading mb-2">SEARA</p>
              <div className="grid grid-cols-4 gap-2">
                {[20, 21, 22, 23].map((h) => (
                  <button key={h} onClick={() => setReminderHour(h)}
                    className="h-12 rounded-xl flex items-center justify-center text-sm transition-all"
                    style={{
                      background: reminderHour === h ? "#C5A55A33" : "#1A141066",
                      border: reminderHour === h ? "2px solid #C5A55A" : "1px solid #C5A55A22",
                      color: reminderHour === h ? "#C5A55A" : "#F5F0E8",
                    }}>
                    {h}:00
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Step 7: Paywall */}
        {step === 7 && (
          <>
            <OrthodoxCross size={36} color="#C5A55A" />
            <h2 className="text-[22px] font-heading text-gold tracking-wider mt-3 mb-1">MĂRTURISIRE PREMIUM</h2>
            <p className="text-xs text-warm-gray text-center mb-5 max-w-[280px]">
              Îndreptarul complet + rugăciuni + calendar ortodox
            </p>

            <div className="max-w-[320px] w-full grid grid-cols-2 gap-2 mb-5">
              {[
                { emoji: "\u{1F4DC}", label: "Îndreptar Gafencu — 178 întrebări" },
                { emoji: "\u{1F4DD}", label: "Istoric spovedanii" },
                { emoji: "\u{1F64F}", label: "Toate rugăciunile" },
                { emoji: "\u{1F4C5}", label: "Calendar liturgic complet" },
                { emoji: "\u{1F514}", label: "Reminder personalizat" },
                { emoji: "\u{2728}", label: "Fără reclame" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg"
                  style={{ background: "#C5A55A0A", border: "1px solid #C5A55A15" }}>
                  <span className="text-lg">{f.emoji}</span>
                  <p className="text-[11px] text-ivory leading-tight">{f.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 max-w-[320px] w-full mb-4">
              <div className="flex-1 rounded-xl p-4 text-center"
                style={{ background: "#1A141066", border: "1px solid #C5A55A22" }}>
                <p className="text-[12px] text-warm-gray mb-1">Săptămânal</p>
                <p className="text-xl text-ivory font-bold">&euro;2.99</p>
                <p className="text-[9px] text-warm-gray">/săptămână</p>
              </div>
              <div className="flex-1 rounded-xl p-4 text-center relative"
                style={{ background: "#C5A55A22", border: "2px solid #C5A55A66" }}>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] text-dark bg-gold rounded-md px-2 py-0.5 font-bold font-heading whitespace-nowrap">
                  ECONOMISEȘTI 80%
                </span>
                <p className="text-[12px] text-gold-light mb-1">Anual</p>
                <p className="text-xl text-gold font-bold">&euro;29.99</p>
                <p className="text-[9px] text-gold-light">/an (&euro;2.50/lună)</p>
              </div>
            </div>

            <p className="text-[12px] text-gold-light text-center mb-2 font-semibold">
              7 zile GRATUIT — anulezi oricând
            </p>
          </>
        )}
      </div>

      {/* Bottom button */}
      <div className="px-6 pb-6 pt-3 shrink-0">
        <button onClick={next} disabled={!canContinue()}
          className="w-full rounded-xl p-4 text-base font-semibold font-heading tracking-wider transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: step === TOTAL_STEPS - 1
              ? "linear-gradient(135deg, #C5A55A, #E8D5A3)"
              : "linear-gradient(135deg, #C5A55A, #6B1D2A)",
            color: step === TOTAL_STEPS - 1 ? "#1A1410" : "#F5F0E8",
          }}>
          {buttonLabel}
        </button>
        {step === 0 && (
          <button onClick={onComplete}
            className="w-full text-warm-gray text-[13px] mt-3 p-2 bg-transparent border-none">
            Am mai folosit aplicația
          </button>
        )}
        {step === TOTAL_STEPS - 1 && (
          <button onClick={onComplete}
            className="w-full text-warm-gray text-[13px] mt-2 p-2 bg-transparent border-none">
            Nu acum, continuă gratuit
          </button>
        )}
      </div>
    </div>
  );
}
