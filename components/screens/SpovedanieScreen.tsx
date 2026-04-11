"use client";
import { useState, useEffect } from "react";
import {
  dedicatie,
  epigrafe,
  intro,
  urmarilePacatului,
  despreSpovedanie,
  toateSectiunile,
  cele10Porunci,
  cele7PacateDeMoarte,
  pacateStrigatoareLaCer,
  datoriiSuflet,
  datoriiTrup,
  pacateStreine,
  pacateDuhulSfant,
  diferitePacate,
  celeNouaPoruciBisericesti,
  sfaturiFinale,
  inchidere,
  type ExamenSection,
} from "@/data/indreptar-spovedanie";
import OrthodoxCross from "@/components/ui/OrthodoxCross";

type Phase = "welcome" | "intro" | "examen" | "terminat" | "sfaturi" | "citire";

export default function SpovedanieScreen() {
  const [phase, setPhase] = useState<Phase>("welcome");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Load saved progress
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lumina-spovedanie");
      if (saved) {
        try {
          const data = JSON.parse(saved);
          setSectionIndex(data.sectionIndex || 0);
          setCompleted(data.completed || false);
          setPhase(data.phase || "welcome");
        } catch {}
      }
    }
  }, []);

  // Save progress
  useEffect(() => {
    if (typeof window !== "undefined" && phase !== "welcome") {
      localStorage.setItem(
        "lumina-spovedanie",
        JSON.stringify({ sectionIndex, completed, phase })
      );
    }
  }, [sectionIndex, completed, phase]);

  const currentSection: ExamenSection | null =
    phase === "examen" ? toateSectiunile[sectionIndex] : null;

  const progressPct = Math.round(((sectionIndex + 1) / toateSectiunile.length) * 100);

  function nextSection() {
    if (sectionIndex < toateSectiunile.length - 1) {
      setSectionIndex(sectionIndex + 1);
      window.scrollTo(0, 0);
    } else {
      setCompleted(true);
      setPhase("terminat");
      window.scrollTo(0, 0);
    }
  }

  function prevSection() {
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
      window.scrollTo(0, 0);
    }
  }

  function startExamen() {
    setPhase("examen");
    window.scrollTo(0, 0);
  }

  function resetExamen() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("lumina-spovedanie");
    }
    setSectionIndex(0);
    setCompleted(false);
    setPhase("welcome");
  }

  // ============ WELCOME PHASE ============
  if (phase === "welcome") {
    return (
      <div className="px-4 py-5 stagger-children">
        <div className="flex items-center gap-2 mb-0.5">
          <h2 className="text-[26px] font-heading text-gold tracking-wider">Spovedanie</h2>
        </div>
        <p className="text-[15px] text-warm-gray mb-5">
          Îndreptar de Spovedanie &mdash; Valeriu Gafencu
        </p>

        {/* Hero card */}
        <div className="relative overflow-hidden rounded-2xl p-6 mb-4"
          style={{ background: "linear-gradient(135deg, #4A0E1Acc, #1B3A5C88)", border: "1px solid #C5A55A33" }}>
          <div className="absolute -top-5 -right-5 opacity-[0.08]">
            <OrthodoxCross size={120} color="#C5A55A" />
          </div>
          <p className="text-[12px] tracking-[3px] mb-2 font-heading text-gold-light uppercase">
            Sfântul Închisorilor
          </p>
          <h3 className="text-3xl font-light mb-2 text-ivory leading-tight">
            Valeriu Gafencu
          </h3>
          <p className="text-[14px] text-warm-gray italic leading-relaxed mb-3">
            1921 &ndash; 1952 &middot; Martir al temnițelor comuniste
          </p>
          <p className="text-[16px] text-ivory leading-relaxed">
            &bdquo;Doresc și rog ca fiecare prieten să copieze acest îndreptar la spovedanie.&rdquo;
          </p>
        </div>

        {/* CTA principal */}
        <button onClick={() => setPhase("intro")}
          className="w-full rounded-2xl p-5 mb-3 flex items-center justify-between active:scale-[0.98] transition-transform"
          style={{ background: "linear-gradient(135deg, #C5A55A, #6B1D2A)", border: "none" }}>
          <div className="text-left">
            <p className="text-base font-bold text-ivory font-heading tracking-wider">
              ÎNCEPE EXAMENUL DE CONȘTIINȚĂ
            </p>
            <p className="text-[14px] text-ivory/85 mt-1">
              {toateSectiunile.length} secțiuni &middot; reflecție personală
            </p>
          </div>
          <span className="text-2xl text-ivory">&rarr;</span>
        </button>

        {/* CTA secundar — citire integrală */}
        <button onClick={() => setPhase("citire")}
          className="w-full rounded-2xl p-4 mb-4 flex items-center justify-between active:scale-[0.98] transition-transform"
          style={{ background: "#1A141066", border: "1px solid #C5A55A44" }}>
          <div className="text-left">
            <p className="text-sm font-bold text-gold font-heading tracking-wider">
              CITEȘTE ÎNDREPTARUL INTEGRAL
            </p>
            <p className="text-xs text-warm-gray mt-0.5">
              Toată cartea lui Valeriu Gafencu
            </p>
          </div>
          <span className="text-xl text-gold">&rarr;</span>
        </button>

        {/* Continue if progress exists */}
        {sectionIndex > 0 && !completed && (
          <button onClick={() => setPhase("examen")}
            className="w-full rounded-xl p-4 mb-4 flex items-center justify-between active:scale-[0.98] transition-transform"
            style={{ background: "#C5A55A22", border: "1px solid #C5A55A44" }}>
            <div className="text-left">
              <p className="text-sm font-semibold text-gold">Continuă examenul</p>
              <p className="text-xs text-warm-gray mt-0.5">
                Secțiunea {sectionIndex + 1} din {toateSectiunile.length}
              </p>
            </div>
            <span className="text-xl text-gold">&rarr;</span>
          </button>
        )}
        {completed && (
          <button onClick={resetExamen}
            className="w-full rounded-xl p-4 mb-4 flex items-center justify-between active:scale-[0.98] transition-transform"
            style={{ background: "#3A6B3A22", border: "1px solid #3A6B3A44" }}>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#C5E5A0]">Ai parcurs tot examenul</p>
              <p className="text-xs text-warm-gray mt-0.5">
                Apasă pentru a începe o nouă reflecție
              </p>
            </div>
            <span className="text-xl text-[#C5E5A0]">&#10003;</span>
          </button>
        )}

        {/* Sfaturi rapide */}
        <div className="glass-card gold-border-left p-5">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">SFATURI PENTRU SPOVEDANIE</p>
          <ul className="space-y-2">
            {sfaturiFinale.slice(0, 5).map((s, i) => (
              <li key={i} className="text-[13px] text-ivory leading-relaxed flex gap-2">
                <span className="text-gold flex-shrink-0">&#10013;&#65039;</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // ============ INTRO PHASE ============
  if (phase === "intro") {
    return (
      <div className="px-4 py-5 stagger-children">
        <button onClick={() => setPhase("welcome")} className="text-gold text-sm mb-3 flex items-center gap-1">
          <span>&larr;</span> Înapoi
        </button>

        <div className="glass-card p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">CE ESTE PĂCATUL</p>
          <div className="space-y-3">
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">SPOVEDANIA</p>
          <div className="space-y-3">
            {despreSpovedanie.paragraphs.map((p, i) => (
              <p key={i} className="text-[14px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        <button onClick={startExamen}
          className="w-full rounded-2xl p-5 flex items-center justify-between active:scale-[0.98] transition-transform"
          style={{ background: "linear-gradient(135deg, #C5A55A, #6B1D2A)", border: "none" }}>
          <div className="text-left">
            <p className="text-sm font-bold text-ivory font-heading tracking-wider">
              ÎNCEPE EXAMENUL
            </p>
            <p className="text-xs text-ivory/80 mt-0.5">
              Răspunde sincer la fiecare întrebare
            </p>
          </div>
          <span className="text-2xl text-ivory">&rarr;</span>
        </button>
      </div>
    );
  }

  // ============ EXAMEN PHASE ============
  if (phase === "examen" && currentSection) {
    return (
      <div className="px-4 py-5">
        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[13px] text-warm-gray tracking-wider">
              SECȚIUNEA {sectionIndex + 1}/{toateSectiunile.length}
            </span>
            <span className="text-[13px] text-gold font-semibold">{progressPct}%</span>
          </div>
          <div className="w-full h-1 rounded-full" style={{ background: "#F5F0E815" }}>
            <div className="h-full rounded-full transition-all"
              style={{
                width: `${progressPct}%`,
                background: "linear-gradient(90deg, #C5A55A, #E8D5A3)",
              }} />
          </div>
        </div>

        {/* Section header */}
        <div className="mb-5">
          <h3 className="text-[26px] font-heading text-gold leading-tight mb-1">
            {currentSection.title}
          </h3>
          {currentSection.subtitle && (
            <p className="text-[14px] text-ivory italic leading-relaxed mt-2">
              {currentSection.subtitle}
            </p>
          )}
          {currentSection.intro && (
            <p className="text-[13px] text-warm-gray italic leading-relaxed mt-2">
              {currentSection.intro}
            </p>
          )}
        </div>

        {/* Reflection instruction */}
        <div className="glass-card gold-border-left p-4 mb-5">
          <p className="text-[14px] text-ivory leading-relaxed italic">
            Citește fiecare întrebare în tăcere și răspunde sincer în conștiința ta, înaintea lui Dumnezeu.
          </p>
        </div>

        {/* Questions — pure reflection list, no DA/NU */}
        <div className="glass-card p-5 mb-6">
          <ol className="space-y-4">
            {currentSection.questions.map((q, i) => (
              <li key={q.id} className="flex gap-3">
                <span className="text-gold font-heading text-[16px] flex-shrink-0 min-w-[28px] leading-[1.8]">
                  {i + 1}.
                </span>
                <p className="text-[17px] text-ivory leading-[1.8]">{q.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mb-3">
          <button onClick={prevSection} disabled={sectionIndex === 0}
            className="flex-1 rounded-xl py-3 text-sm font-semibold transition-all active:scale-95 disabled:opacity-40"
            style={{ background: "#1A141066", border: "1px solid #C5A55A22", color: "#C5A55A" }}>
            &larr; Înapoi
          </button>
          <button onClick={nextSection}
            className="flex-[2] rounded-xl py-3 text-sm font-semibold transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #C5A55A, #6B1D2A)",
              color: "#F5F0E8",
            }}>
            {sectionIndex === toateSectiunile.length - 1 ? "Am terminat reflecția" : "Continuă"} &rarr;
          </button>
        </div>
        <p className="text-[12px] text-warm-gray text-center">
          {currentSection.questions.length} întrebări de reflecție în această secțiune
        </p>
      </div>
    );
  }

  // ============ TERMINAT PHASE ============
  if (phase === "terminat") {
    return (
      <div className="px-4 py-5 stagger-children">
        {/* Completion card */}
        <div className="rounded-2xl p-6 mb-5 text-center"
          style={{ background: "linear-gradient(135deg, #4A0E1Acc, #1B3A5C88)", border: "1px solid #C5A55A33" }}>
          <div className="flex justify-center mb-3">
            <OrthodoxCross size={40} color="#C5A55A" />
          </div>
          <p className="text-[12px] text-gold-light tracking-[3px] font-heading mb-2 uppercase">
            Ai terminat reflecția
          </p>
          <h2 className="text-[24px] font-heading text-ivory mb-3 tracking-wider">
            Întrebările sunt oglinda
          </h2>
          <p className="text-[15px] text-ivory italic leading-[1.7]">
            &bdquo;Scrie păcatele pe hârtie, altfel le poți uita. Apoi arde hârtia imediat.&rdquo;
          </p>
          <p className="text-[12px] text-warm-gray mt-2">&mdash; Valeriu Gafencu</p>
        </div>

        {/* Primary CTA — read full Îndreptar */}
        <button onClick={() => { setPhase("citire"); window.scrollTo(0, 0); }}
          className="w-full rounded-2xl p-5 mb-3 flex items-center justify-between active:scale-[0.98] transition-transform"
          style={{ background: "linear-gradient(135deg, #C5A55A, #6B1D2A)", border: "none" }}>
          <div className="text-left flex-1">
            <p className="text-base font-bold text-ivory font-heading tracking-wider">
              CITEȘTE ÎNDREPTARUL INTEGRAL
            </p>
            <p className="text-[13px] text-ivory/85 mt-1">
              Toată cartea lui Valeriu Gafencu
            </p>
          </div>
          <span className="text-2xl text-ivory ml-2">&rarr;</span>
        </button>

        {/* Secondary CTA — sfaturi */}
        <button onClick={() => { setPhase("sfaturi"); window.scrollTo(0, 0); }}
          className="w-full rounded-xl p-4 mb-3 flex items-center justify-between active:scale-[0.98] transition-transform"
          style={{ background: "#1A141066", border: "1px solid #C5A55A44" }}>
          <div className="text-left flex-1">
            <p className="text-sm font-bold text-gold font-heading tracking-wider">
              SFATURI PENTRU SPOVEDANIE
            </p>
            <p className="text-xs text-warm-gray mt-0.5">
              Cuvinte pentru o spovedanie adevărată
            </p>
          </div>
          <span className="text-xl text-gold ml-2">&rarr;</span>
        </button>

        {/* Reset */}
        <button onClick={resetExamen}
          className="w-full rounded-xl p-3 text-sm transition-all active:scale-[0.98] mb-4"
          style={{ background: "transparent", border: "1px solid #C5A55A22", color: "#A89E92" }}>
          Reia examenul de la început
        </button>
      </div>
    );
  }

  // ============ SFATURI PHASE ============
  if (phase === "sfaturi") {
    return (
      <div className="px-4 py-5 stagger-children">
        <button onClick={() => setPhase(completed ? "terminat" : "welcome")} className="text-gold text-sm mb-3 flex items-center gap-1">
          <span>&larr;</span> Înapoi
        </button>

        <div className="flex items-center gap-2 mb-0.5">
          <h2 className="text-[26px] font-heading text-gold tracking-wider">Sfaturi</h2>
        </div>
        <p className="text-[15px] text-warm-gray mb-5">
          Pentru o spovedanie adevărată
        </p>

        <div className="glass-card gold-border-left p-5 mb-4">
          <ul className="space-y-3">
            {sfaturiFinale.map((s, i) => (
              <li key={i} className="text-[16px] text-ivory leading-relaxed flex gap-3">
                <span className="text-gold flex-shrink-0 font-heading font-semibold">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-5"
          style={{ background: "linear-gradient(135deg, #C5A55A15, #4A0E1A44)", border: "1px solid #C5A55A33" }}>
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-2">CUVÂNTUL LUI VALERIU</p>
          <p className="text-[14px] text-ivory leading-relaxed italic">
            &bdquo;Fiecare dintre noi avem o menire, dar trebuie să stăm sub povața duhovnicului, care
            înlătură voia nepricepută, făcând loc voii lăsată de Dumnezeu în fiecare dintre noi.&rdquo;
          </p>
          <p className="text-[12px] text-warm-gray italic mt-3">
            &mdash; Valeriu Gafencu, Târgu Ocna, 1952
          </p>
        </div>
      </div>
    );
  }

  // ============ CITIRE INTEGRALĂ PHASE ============
  if (phase === "citire") {
    return (
      <div className="px-4 py-5">
        <button onClick={() => setPhase("welcome")} className="text-gold text-sm mb-3 flex items-center gap-1">
          <span>&larr;</span> Înapoi
        </button>

        <h2 className="text-[24px] font-heading text-gold tracking-wider mb-5">
          Îndreptar de Spovedanie
        </h2>

        {/* Epigrafe */}
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">EPIGRAFE</p>
          <div className="space-y-4">
            {epigrafe.map((e, i) => (
              <div key={i}>
                <p className="text-[14px] text-ivory italic leading-[1.7]">
                  &bdquo;{e.text}&rdquo;
                </p>
                <p className="text-[12px] text-warm-gray mt-1">&mdash; {e.referinta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ce este păcatul */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">CE ESTE PĂCATUL</p>
          <div className="space-y-3">
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="text-[14px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        {/* Urmările păcatului */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-1">CE URMĂRI ARE PĂCATUL</p>
          <p className="text-[12px] text-warm-gray italic mb-3">{urmarilePacatului.subtitle}</p>
          <ol className="space-y-2 list-decimal list-inside">
            {urmarilePacatului.points.map((p, i) => (
              <li key={i} className="text-[14px] text-ivory leading-[1.7]">{p}</li>
            ))}
          </ol>
        </div>

        {/* Spovedania */}
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">SPOVEDANIA</p>
          <div className="space-y-2 mb-4">
            {despreSpovedanie.intrebari.map((q, i) => (
              <p key={i} className="text-[14px] text-ivory italic leading-relaxed">{q}</p>
            ))}
          </div>
          <div className="space-y-3">
            {despreSpovedanie.paragraphs.map((p, i) => (
              <p key={i} className="text-[14px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        {/* Examen de conștiință — instrucțiuni */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-1">
            {despreSpovedanie.examenConstiinta.titlu.toUpperCase()}
          </p>
          <p className="text-[13px] text-warm-gray italic mb-3">
            {despreSpovedanie.examenConstiinta.instructie}
          </p>
          <ol className="space-y-2" style={{ listStyleType: "lower-alpha" }}>
            {despreSpovedanie.examenConstiinta.puncte.map((p, i) => (
              <li key={i} className="text-[14px] text-ivory leading-[1.7] ml-5">
                {p}
              </li>
            ))}
          </ol>
        </div>

        {/* Zdrobirea inimii */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3">ZDROBIREA INIMII</p>
          <div className="space-y-3">
            {despreSpovedanie.zdrobireaInimii.map((p, i) => (
              <p key={i} className="text-[14px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        {/* Cele 10 Porunci — titluri și subtitluri */}
        <h3 className="text-[20px] font-heading text-gold text-center my-5 tracking-wider">CELE 10 PORUNCI</h3>
        {cele10Porunci.map((p, idx) => (
          <div key={p.id} className="glass-card p-5 mb-3">
            <p className="text-[13px] text-gold font-heading tracking-wider mb-2">
              {p.title.toUpperCase()}
            </p>
            {p.subtitle && (
              <p className="text-[14px] text-ivory italic leading-relaxed mb-3">
                {p.subtitle}
              </p>
            )}
            <ol className="space-y-1.5 list-decimal list-inside">
              {p.questions.map((q) => (
                <li key={q.id} className="text-[13px] text-warm-gray leading-relaxed">
                  {q.text}
                </li>
              ))}
            </ol>
          </div>
        ))}

        {/* Cele 7 Păcate de Moarte */}
        <h3 className="text-[20px] font-heading text-gold text-center my-5 tracking-wider">CELE 7 PĂCATE DE MOARTE</h3>
        {cele7PacateDeMoarte.map((p) => (
          <div key={p.id} className="glass-card p-5 mb-3">
            <p className="text-[15px] text-gold font-heading mb-2">{p.title}</p>
            {p.intro && (
              <p className="text-[13px] text-warm-gray italic leading-relaxed mb-3">
                {p.intro}
              </p>
            )}
            <ol className="space-y-1.5 list-decimal list-inside">
              {p.questions.map((q) => (
                <li key={q.id} className="text-[13px] text-ivory leading-relaxed">
                  {q.text}
                </li>
              ))}
            </ol>
          </div>
        ))}

        {/* Păcate Strigătoare la Cer */}
        <h3 className="text-[20px] font-heading text-gold text-center my-5 tracking-wider">PĂCATE STRIGĂTOARE LA CER</h3>
        {pacateStrigatoareLaCer.map((p) => (
          <div key={p.id} className="glass-card p-5 mb-3">
            <p className="text-[15px] text-gold font-heading mb-3">{p.title}</p>
            <ol className="space-y-1.5 list-decimal list-inside">
              {p.questions.map((q) => (
                <li key={q.id} className="text-[13px] text-ivory leading-relaxed">
                  {q.text}
                </li>
              ))}
            </ol>
          </div>
        ))}

        {/* Datorii suflet */}
        <div className="glass-card p-5 mb-3">
          <p className="text-[15px] text-gold font-heading mb-3">{datoriiSuflet.title}</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {datoriiSuflet.questions.map((q) => (
              <li key={q.id} className="text-[13px] text-ivory leading-relaxed">{q.text}</li>
            ))}
          </ol>
        </div>

        {/* Datorii trup */}
        <div className="glass-card p-5 mb-3">
          <p className="text-[15px] text-gold font-heading mb-3">{datoriiTrup.title}</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {datoriiTrup.questions.map((q) => (
              <li key={q.id} className="text-[13px] text-ivory leading-relaxed">{q.text}</li>
            ))}
          </ol>
        </div>

        {/* Păcate streine */}
        <div className="glass-card p-5 mb-3">
          <p className="text-[15px] text-gold font-heading mb-2">{pacateStreine.title}</p>
          {pacateStreine.intro && (
            <p className="text-[13px] text-warm-gray italic mb-3">{pacateStreine.intro}</p>
          )}
          <ol className="space-y-1.5 list-decimal list-inside">
            {pacateStreine.questions.map((q) => (
              <li key={q.id} className="text-[13px] text-ivory leading-relaxed">{q.text}</li>
            ))}
          </ol>
        </div>

        {/* Păcate împotriva Duhului Sfânt */}
        <div className="glass-card p-5 mb-3">
          <p className="text-[15px] text-gold font-heading mb-2">{pacateDuhulSfant.title}</p>
          {pacateDuhulSfant.intro && (
            <p className="text-[13px] text-warm-gray italic mb-3">{pacateDuhulSfant.intro}</p>
          )}
          <ol className="space-y-1.5 list-decimal list-inside">
            {pacateDuhulSfant.questions.map((q) => (
              <li key={q.id} className="text-[13px] text-ivory leading-relaxed">{q.text}</li>
            ))}
          </ol>
        </div>

        {/* Cele 9 Porunci Bisericești */}
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[13px] text-gold font-heading tracking-wider mb-3">CELE 9 PORUNCI BISERICEȘTI</p>
          <ol className="space-y-2 list-decimal list-inside">
            {celeNouaPoruciBisericesti.map((p, i) => (
              <li key={i} className="text-[14px] text-ivory leading-relaxed">{p}</li>
            ))}
          </ol>
        </div>

        {/* Diferite păcate */}
        <h3 className="text-[20px] font-heading text-gold text-center my-5 tracking-wider">DIFERITE PĂCATE</h3>
        {diferitePacate.map((p) => (
          <div key={p.id} className="glass-card p-5 mb-3">
            <p className="text-[15px] text-gold font-heading mb-3">{p.title}</p>
            <ol className="space-y-1.5 list-decimal list-inside">
              {p.questions.map((q) => (
                <li key={q.id} className="text-[13px] text-ivory leading-relaxed">{q.text}</li>
              ))}
            </ol>
          </div>
        ))}

        {/* Sfaturi */}
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[13px] text-gold font-heading tracking-wider mb-3">SFATURI</p>
          <ul className="space-y-2">
            {sfaturiFinale.map((s, i) => (
              <li key={i} className="text-[14px] text-ivory leading-relaxed flex gap-2">
                <span className="text-gold flex-shrink-0">&bull;</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Închidere */}
        <div className="rounded-2xl p-6"
          style={{ background: "linear-gradient(135deg, #4A0E1Acc, #1B3A5C88)", border: "1px solid #C5A55A33" }}>
          <p className="text-[12px] text-gold tracking-[2px] font-heading mb-3 text-center">
            CUVÂNTUL LUI VALERIU
          </p>
          <div className="space-y-4">
            <p className="text-[14px] text-ivory leading-[1.7] italic">
              {inchidere.meditatie}
            </p>
            <p className="text-[14px] text-ivory leading-[1.7] italic">
              {inchidere.prietenie}
            </p>
            <p className="text-[14px] text-ivory leading-[1.7] italic">
              {inchidere.semnatura}
            </p>
          </div>
          <div className="text-center mt-5 pt-4" style={{ borderTop: "1px solid #C5A55A33" }}>
            <p className="text-[15px] text-gold font-heading">{inchidere.salut}</p>
            <p className="text-[12px] text-warm-gray mt-3 italic">{inchidere.sfarsit}</p>
          </div>
        </div>

        {/* Autor — Sf. Valeriu Gafencu — cel mai la sfârșit */}
        <div
          className="rounded-xl p-4 mt-4 mb-4 text-center"
          style={{
            background: "linear-gradient(180deg, rgba(197, 165, 90, 0.08), rgba(26, 20, 16, 0.4))",
            border: "1px solid #C5A55A22",
          }}
        >
          <p className="text-[12px] text-gold tracking-[2px] font-heading uppercase">
            Scris de
          </p>
          <p className="text-[16px] text-ivory font-heading mt-0.5">
            Sf. Valeriu Gafencu
          </p>
          <p className="text-[12px] text-gold-light font-heading tracking-[1px] mt-0.5">
            24 ianuarie 1921 &ndash; 18 februarie 1952
          </p>
          <p className="text-[11px] text-warm-gray tracking-[2px] font-heading uppercase mt-1">
            &bdquo;Sfântul Închisorilor&rdquo; &middot; Pomenit pe 18 februarie
          </p>
        </div>

        {/* Back to top */}
        <button onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
          className="w-full mt-4 rounded-xl p-3 text-sm font-heading tracking-wider transition-all active:scale-[0.98]"
          style={{ background: "#1A141066", border: "1px solid #C5A55A33", color: "#C5A55A" }}>
          &uarr; Înapoi la început
        </button>
      </div>
    );
  }

  return null;
}
