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
  totalIntrebari,
  type ExamenSection,
} from "@/data/indreptar-spovedanie";
import OrthodoxCross from "@/components/ui/OrthodoxCross";

type Phase = "welcome" | "intro" | "examen" | "rezumat" | "sfaturi" | "citire";
type Answer = "da" | "nu" | null;

export default function SpovedanieScreen() {
  const [phase, setPhase] = useState<Phase>("welcome");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [startTime, setStartTime] = useState<number | null>(null);

  // Load saved progress
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lumina-spovedanie");
      if (saved) {
        try {
          const data = JSON.parse(saved);
          setAnswers(data.answers || {});
          setSectionIndex(data.sectionIndex || 0);
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
        JSON.stringify({ answers, sectionIndex, phase })
      );
    }
  }, [answers, sectionIndex, phase]);

  const currentSection: ExamenSection | null =
    phase === "examen" ? toateSectiunile[sectionIndex] : null;

  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / totalIntrebari) * 100);

  // Păcate identificate (toate răspunsurile "da" la întrebările de păcat)
  const pacateIdentificate = toateSectiunile.flatMap((section) =>
    section.questions
      .filter((q) => answers[q.id] === "da")
      .map((q) => ({ sectionTitle: section.title, question: q.text }))
  );

  function handleAnswer(qId: string, ans: Answer) {
    setAnswers((prev) => ({ ...prev, [qId]: ans }));
  }

  function nextSection() {
    if (sectionIndex < toateSectiunile.length - 1) {
      setSectionIndex(sectionIndex + 1);
      window.scrollTo(0, 0);
    } else {
      setPhase("rezumat");
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
    setStartTime(Date.now());
    window.scrollTo(0, 0);
  }

  function resetExamen() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("lumina-spovedanie");
    }
    setAnswers({});
    setSectionIndex(0);
    setPhase("welcome");
    setStartTime(null);
  }

  // ============ WELCOME PHASE ============
  if (phase === "welcome") {
    return (
      <div className="px-4 py-5 stagger-children">
        <div className="flex items-center gap-2 mb-0.5">
          <h2 className="text-[22px] font-heading text-gold tracking-wider">Spovedanie</h2>
        </div>
        <p className="text-[13px] text-warm-gray mb-5">
          Îndreptar de Spovedanie &mdash; Valeriu Gafencu
        </p>

        {/* Hero card */}
        <div className="relative overflow-hidden rounded-2xl p-6 mb-4"
          style={{ background: "linear-gradient(135deg, #4A0E1Acc, #1B3A5C88)", border: "1px solid #C5A55A33" }}>
          <div className="absolute -top-5 -right-5 opacity-[0.08]">
            <OrthodoxCross size={120} color="#C5A55A" />
          </div>
          <p className="text-[11px] tracking-[3px] mb-2 font-heading text-gold-light uppercase">
            Sfântul Închisorilor
          </p>
          <h3 className="text-3xl font-light mb-2 text-ivory leading-tight">
            Valeriu Gafencu
          </h3>
          <p className="text-[13px] text-warm-gray italic leading-relaxed mb-3">
            1921 &ndash; 1952 &middot; Martir al temnițelor comuniste
          </p>
          <p className="text-[14px] text-ivory leading-relaxed">
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
            <p className="text-[13px] text-ivory/85 mt-1">
              {totalIntrebari} întrebări &middot; ~20 minute
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
        {answeredCount > 0 && (
          <button onClick={() => setPhase("examen")}
            className="w-full rounded-xl p-4 mb-4 flex items-center justify-between active:scale-[0.98] transition-transform"
            style={{ background: "#C5A55A22", border: "1px solid #C5A55A44" }}>
            <div className="text-left">
              <p className="text-sm font-semibold text-gold">Continuă examenul</p>
              <p className="text-xs text-warm-gray mt-0.5">
                {answeredCount}/{totalIntrebari} întrebări &middot; {progressPct}%
              </p>
            </div>
            <span className="text-xl text-gold">&rarr;</span>
          </button>
        )}

        {/* Despre carte */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">DESPRE ÎNDREPTAR</p>
          <p className="text-[13px] text-ivory leading-[1.7]">
            Îndreptarul a fost scris de Valeriu Gafencu în închisoarea comunistă, ca dar pentru
            familia sa (&bdquo;Lui Gheorghe și Maria cu dragoste&rdquo;). Astăzi este unul dintre cele mai
            folosite ghiduri de examinare a conștiinței în Biserica Ortodoxă Română.
          </p>
          <p className="text-[12px] text-warm-gray leading-relaxed mt-3 italic">
            Valeriu Gafencu a murit în închisoarea de la Târgu Ocna, dăruindu-și ultimul medicament
            unui preot bolnav. Este supranumit &bdquo;Sfântul Închisorilor&rdquo;.
          </p>
        </div>

        {/* Sfaturi rapide */}
        <div className="glass-card gold-border-left p-5">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">SFATURI PENTRU SPOVEDANIE</p>
          <ul className="space-y-2">
            {sfaturiFinale.slice(0, 5).map((s, i) => (
              <li key={i} className="text-[12px] text-ivory leading-relaxed flex gap-2">
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
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">CE ESTE PĂCATUL</p>
          <div className="space-y-3">
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="text-[14px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">SPOVEDANIA</p>
          <div className="space-y-3">
            {despreSpovedanie.paragraphs.map((p, i) => (
              <p key={i} className="text-[13px] text-ivory leading-[1.7]">{p}</p>
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
    const sectionAnswered = currentSection.questions.filter((q) => answers[q.id]).length;
    const allAnswered = sectionAnswered === currentSection.questions.length;

    return (
      <div className="px-4 py-5">
        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[12px] text-warm-gray tracking-wider">
              SECȚIUNEA {sectionIndex + 1}/{toateSectiunile.length}
            </span>
            <span className="text-[12px] text-gold font-semibold">{progressPct}%</span>
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
          <h3 className="text-[22px] font-heading text-gold leading-tight mb-1">
            {currentSection.title}
          </h3>
          {currentSection.subtitle && (
            <p className="text-[13px] text-ivory italic leading-relaxed mt-2">
              {currentSection.subtitle}
            </p>
          )}
          {currentSection.intro && (
            <p className="text-[12px] text-warm-gray italic leading-relaxed mt-2">
              {currentSection.intro}
            </p>
          )}
        </div>

        {/* Questions */}
        <div className="space-y-3 mb-6">
          {currentSection.questions.map((q, i) => {
            const ans = answers[q.id];
            return (
              <div key={q.id} className="glass-card p-4">
                <p className="text-[15px] text-ivory leading-relaxed mb-3">
                  <span className="text-gold font-semibold mr-2">{i + 1}.</span>
                  {q.text}
                </p>
                <div className="flex gap-2">
                  <button onClick={() => handleAnswer(q.id, "da")}
                    className="flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all active:scale-95"
                    style={{
                      background: ans === "da" ? "#6B1D2A88" : "#1A141066",
                      border: ans === "da" ? "1px solid #C5A55A66" : "1px solid #C5A55A22",
                      color: ans === "da" ? "#F5F0E8" : "#A89E92",
                    }}>
                    Da
                  </button>
                  <button onClick={() => handleAnswer(q.id, "nu")}
                    className="flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all active:scale-95"
                    style={{
                      background: ans === "nu" ? "#3A6B3A66" : "#1A141066",
                      border: ans === "nu" ? "1px solid #5A9B5A66" : "1px solid #C5A55A22",
                      color: ans === "nu" ? "#F5F0E8" : "#A89E92",
                    }}>
                    Nu
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mb-4">
          <button onClick={prevSection} disabled={sectionIndex === 0}
            className="flex-1 rounded-xl py-3 text-sm font-semibold transition-all active:scale-95 disabled:opacity-40"
            style={{ background: "#1A141066", border: "1px solid #C5A55A22", color: "#C5A55A" }}>
            &larr; Înapoi
          </button>
          <button onClick={nextSection}
            className="flex-[2] rounded-xl py-3 text-sm font-semibold transition-all active:scale-95"
            style={{
              background: allAnswered ? "linear-gradient(135deg, #C5A55A, #6B1D2A)" : "#C5A55A55",
              color: "#F5F0E8",
            }}>
            {sectionIndex === toateSectiunile.length - 1 ? "Vezi rezumat" : "Continuă"} &rarr;
          </button>
        </div>
        <p className="text-[11px] text-warm-gray text-center">
          {sectionAnswered}/{currentSection.questions.length} întrebări răspunse în această secțiune
        </p>
      </div>
    );
  }

  // ============ REZUMAT PHASE ============
  if (phase === "rezumat") {
    return (
      <div className="px-4 py-5 stagger-children">
        <div className="flex items-center gap-2 mb-0.5">
          <h2 className="text-[22px] font-heading text-gold tracking-wider">Rezumat</h2>
        </div>
        <p className="text-[13px] text-warm-gray mb-5">
          {pacateIdentificate.length} lucruri de mărturisit Duhovnicului
        </p>

        {/* Summary card */}
        <div className="rounded-2xl p-5 mb-4"
          style={{ background: "linear-gradient(135deg, #4A0E1Acc, #1B3A5C88)", border: "1px solid #C5A55A33" }}>
          <div className="flex items-center gap-3 mb-3">
            <OrthodoxCross size={20} color="#C5A55A" />
            <p className="text-[11px] text-gold-light tracking-[2px] font-heading">EXAMEN DE CONȘTIINȚĂ</p>
          </div>
          <p className="text-3xl text-gold font-bold">{pacateIdentificate.length}</p>
          <p className="text-xs text-warm-gray mt-1">păcate identificate din {answeredCount} întrebări</p>
          <p className="text-[12px] text-ivory italic leading-relaxed mt-3">
            &bdquo;Scrie păcatele pe hârtie, altfel le poți uita. Apoi arde hârtia imediat.&rdquo;
            <br />
            <span className="text-[10px] text-warm-gray not-italic">&mdash; Valeriu Gafencu</span>
          </p>
        </div>

        {/* Lista păcate */}
        {pacateIdentificate.length > 0 ? (
          <div className="space-y-3 mb-4">
            {/* Group by section */}
            {Object.entries(
              pacateIdentificate.reduce((acc, p) => {
                if (!acc[p.sectionTitle]) acc[p.sectionTitle] = [];
                acc[p.sectionTitle].push(p.question);
                return acc;
              }, {} as Record<string, string[]>)
            ).map(([section, items]) => (
              <div key={section} className="glass-card p-4">
                <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">
                  {section.toUpperCase()}
                </p>
                <ul className="space-y-2">
                  {items.map((q, i) => (
                    <li key={i} className="text-[13px] text-ivory leading-relaxed flex gap-2">
                      <span className="text-wine-medium flex-shrink-0">&bull;</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card p-5 mb-4 text-center">
            <p className="text-[14px] text-ivory leading-relaxed">
              Nu ai identificat păcate. Roagă-te lui Dumnezeu să-ți lumineze conștiința.
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3 mb-4">
          <button onClick={() => setPhase("sfaturi")}
            className="w-full rounded-xl p-4 text-sm font-heading tracking-wider transition-all active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #C5A55A, #6B1D2A)", color: "#F5F0E8" }}>
            VEZI SFATURI FINALE &rarr;
          </button>
          <button onClick={() => {
            setSectionIndex(0);
            setPhase("examen");
          }}
            className="w-full rounded-xl p-3 text-sm transition-all active:scale-[0.98]"
            style={{ background: "#1A141066", border: "1px solid #C5A55A33", color: "#C5A55A" }}>
            Revizuiește răspunsurile
          </button>
          <button onClick={resetExamen}
            className="w-full rounded-xl p-3 text-xs transition-all active:scale-[0.98]"
            style={{ background: "transparent", border: "1px solid #C5A55A22", color: "#A89E92" }}>
            Șterge și începe din nou
          </button>
        </div>
      </div>
    );
  }

  // ============ SFATURI PHASE ============
  if (phase === "sfaturi") {
    return (
      <div className="px-4 py-5 stagger-children">
        <button onClick={() => setPhase("rezumat")} className="text-gold text-sm mb-3 flex items-center gap-1">
          <span>&larr;</span> Înapoi la rezumat
        </button>

        <div className="flex items-center gap-2 mb-0.5">
          <h2 className="text-[22px] font-heading text-gold tracking-wider">Sfaturi</h2>
        </div>
        <p className="text-[13px] text-warm-gray mb-5">
          Pentru o spovedanie adevărată
        </p>

        <div className="glass-card gold-border-left p-5 mb-4">
          <ul className="space-y-3">
            {sfaturiFinale.map((s, i) => (
              <li key={i} className="text-[14px] text-ivory leading-relaxed flex gap-3">
                <span className="text-gold flex-shrink-0 font-heading font-semibold">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-5"
          style={{ background: "linear-gradient(135deg, #C5A55A15, #4A0E1A44)", border: "1px solid #C5A55A33" }}>
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-2">CUVÂNTUL LUI VALERIU</p>
          <p className="text-[13px] text-ivory leading-relaxed italic">
            &bdquo;Fiecare dintre noi avem o menire, dar trebuie să stăm sub povața duhovnicului, care
            înlătură voia nepricepută, făcând loc voii lăsată de Dumnezeu în fiecare dintre noi.&rdquo;
          </p>
          <p className="text-[11px] text-warm-gray italic mt-3">
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

        <div className="flex items-center gap-2 mb-0.5">
          <h2 className="text-[22px] font-heading text-gold tracking-wider">Îndreptar</h2>
        </div>
        <p className="text-[13px] text-warm-gray mb-5">
          Valeriu Gafencu &middot; Text integral
        </p>

        {/* Dedicația */}
        <div className="glass-card p-5 mb-4 text-center">
          <p className="text-[13px] text-ivory italic leading-relaxed">
            {dedicatie.text}
          </p>
          <p className="text-[14px] text-gold font-heading mt-2">
            {dedicatie.semnatura}
          </p>
        </div>

        {/* Epigrafe */}
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">EPIGRAFE</p>
          <div className="space-y-4">
            {epigrafe.map((e, i) => (
              <div key={i}>
                <p className="text-[13px] text-ivory italic leading-[1.7]">
                  &bdquo;{e.text}&rdquo;
                </p>
                <p className="text-[11px] text-warm-gray mt-1">&mdash; {e.referinta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ce este păcatul */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">CE ESTE PĂCATUL</p>
          <div className="space-y-3">
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="text-[13px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        {/* Urmările păcatului */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-1">CE URMĂRI ARE PĂCATUL</p>
          <p className="text-[11px] text-warm-gray italic mb-3">{urmarilePacatului.subtitle}</p>
          <ol className="space-y-2 list-decimal list-inside">
            {urmarilePacatului.points.map((p, i) => (
              <li key={i} className="text-[13px] text-ivory leading-[1.7]">{p}</li>
            ))}
          </ol>
        </div>

        {/* Spovedania */}
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">SPOVEDANIA</p>
          <div className="space-y-2 mb-4">
            {despreSpovedanie.intrebari.map((q, i) => (
              <p key={i} className="text-[13px] text-ivory italic leading-relaxed">{q}</p>
            ))}
          </div>
          <div className="space-y-3">
            {despreSpovedanie.paragraphs.map((p, i) => (
              <p key={i} className="text-[13px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        {/* Examen de conștiință — instrucțiuni */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-1">
            {despreSpovedanie.examenConstiinta.titlu.toUpperCase()}
          </p>
          <p className="text-[12px] text-warm-gray italic mb-3">
            {despreSpovedanie.examenConstiinta.instructie}
          </p>
          <ol className="space-y-2" style={{ listStyleType: "lower-alpha" }}>
            {despreSpovedanie.examenConstiinta.puncte.map((p, i) => (
              <li key={i} className="text-[13px] text-ivory leading-[1.7] ml-5">
                {p}
              </li>
            ))}
          </ol>
        </div>

        {/* Zdrobirea inimii */}
        <div className="glass-card p-5 mb-4">
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3">ZDROBIREA INIMII</p>
          <div className="space-y-3">
            {despreSpovedanie.zdrobireaInimii.map((p, i) => (
              <p key={i} className="text-[13px] text-ivory leading-[1.7]">{p}</p>
            ))}
          </div>
        </div>

        {/* Cele 10 Porunci — titluri și subtitluri */}
        <h3 className="text-[18px] font-heading text-gold text-center my-5 tracking-wider">CELE 10 PORUNCI</h3>
        {cele10Porunci.map((p, idx) => (
          <div key={p.id} className="glass-card p-5 mb-3">
            <p className="text-[12px] text-gold font-heading tracking-wider mb-2">
              {p.title.toUpperCase()}
            </p>
            {p.subtitle && (
              <p className="text-[13px] text-ivory italic leading-relaxed mb-3">
                {p.subtitle}
              </p>
            )}
            <ol className="space-y-1.5 list-decimal list-inside">
              {p.questions.map((q) => (
                <li key={q.id} className="text-[12px] text-warm-gray leading-relaxed">
                  {q.text}
                </li>
              ))}
            </ol>
          </div>
        ))}

        {/* Cele 7 Păcate de Moarte */}
        <h3 className="text-[18px] font-heading text-gold text-center my-5 tracking-wider">CELE 7 PĂCATE DE MOARTE</h3>
        {cele7PacateDeMoarte.map((p) => (
          <div key={p.id} className="glass-card p-5 mb-3">
            <p className="text-[14px] text-gold font-heading mb-2">{p.title}</p>
            {p.intro && (
              <p className="text-[12px] text-warm-gray italic leading-relaxed mb-3">
                {p.intro}
              </p>
            )}
            <ol className="space-y-1.5 list-decimal list-inside">
              {p.questions.map((q) => (
                <li key={q.id} className="text-[12px] text-ivory leading-relaxed">
                  {q.text}
                </li>
              ))}
            </ol>
          </div>
        ))}

        {/* Păcate Strigătoare la Cer */}
        <h3 className="text-[18px] font-heading text-gold text-center my-5 tracking-wider">PĂCATE STRIGĂTOARE LA CER</h3>
        {pacateStrigatoareLaCer.map((p) => (
          <div key={p.id} className="glass-card p-5 mb-3">
            <p className="text-[14px] text-gold font-heading mb-3">{p.title}</p>
            <ol className="space-y-1.5 list-decimal list-inside">
              {p.questions.map((q) => (
                <li key={q.id} className="text-[12px] text-ivory leading-relaxed">
                  {q.text}
                </li>
              ))}
            </ol>
          </div>
        ))}

        {/* Datorii suflet */}
        <div className="glass-card p-5 mb-3">
          <p className="text-[14px] text-gold font-heading mb-3">{datoriiSuflet.title}</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {datoriiSuflet.questions.map((q) => (
              <li key={q.id} className="text-[12px] text-ivory leading-relaxed">{q.text}</li>
            ))}
          </ol>
        </div>

        {/* Datorii trup */}
        <div className="glass-card p-5 mb-3">
          <p className="text-[14px] text-gold font-heading mb-3">{datoriiTrup.title}</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {datoriiTrup.questions.map((q) => (
              <li key={q.id} className="text-[12px] text-ivory leading-relaxed">{q.text}</li>
            ))}
          </ol>
        </div>

        {/* Păcate streine */}
        <div className="glass-card p-5 mb-3">
          <p className="text-[14px] text-gold font-heading mb-2">{pacateStreine.title}</p>
          {pacateStreine.intro && (
            <p className="text-[12px] text-warm-gray italic mb-3">{pacateStreine.intro}</p>
          )}
          <ol className="space-y-1.5 list-decimal list-inside">
            {pacateStreine.questions.map((q) => (
              <li key={q.id} className="text-[12px] text-ivory leading-relaxed">{q.text}</li>
            ))}
          </ol>
        </div>

        {/* Păcate împotriva Duhului Sfânt */}
        <div className="glass-card p-5 mb-3">
          <p className="text-[14px] text-gold font-heading mb-2">{pacateDuhulSfant.title}</p>
          {pacateDuhulSfant.intro && (
            <p className="text-[12px] text-warm-gray italic mb-3">{pacateDuhulSfant.intro}</p>
          )}
          <ol className="space-y-1.5 list-decimal list-inside">
            {pacateDuhulSfant.questions.map((q) => (
              <li key={q.id} className="text-[12px] text-ivory leading-relaxed">{q.text}</li>
            ))}
          </ol>
        </div>

        {/* Cele 9 Porunci Bisericești */}
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[12px] text-gold font-heading tracking-wider mb-3">CELE 9 PORUNCI BISERICEȘTI</p>
          <ol className="space-y-2 list-decimal list-inside">
            {celeNouaPoruciBisericesti.map((p, i) => (
              <li key={i} className="text-[13px] text-ivory leading-relaxed">{p}</li>
            ))}
          </ol>
        </div>

        {/* Diferite păcate */}
        <h3 className="text-[18px] font-heading text-gold text-center my-5 tracking-wider">DIFERITE PĂCATE</h3>
        {diferitePacate.map((p) => (
          <div key={p.id} className="glass-card p-5 mb-3">
            <p className="text-[14px] text-gold font-heading mb-3">{p.title}</p>
            <ol className="space-y-1.5 list-decimal list-inside">
              {p.questions.map((q) => (
                <li key={q.id} className="text-[12px] text-ivory leading-relaxed">{q.text}</li>
              ))}
            </ol>
          </div>
        ))}

        {/* Sfaturi */}
        <div className="glass-card gold-border-left p-5 mb-4">
          <p className="text-[12px] text-gold font-heading tracking-wider mb-3">SFATURI</p>
          <ul className="space-y-2">
            {sfaturiFinale.map((s, i) => (
              <li key={i} className="text-[13px] text-ivory leading-relaxed flex gap-2">
                <span className="text-gold flex-shrink-0">&bull;</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Închidere */}
        <div className="rounded-2xl p-6"
          style={{ background: "linear-gradient(135deg, #4A0E1Acc, #1B3A5C88)", border: "1px solid #C5A55A33" }}>
          <p className="text-[11px] text-gold tracking-[2px] font-heading mb-3 text-center">
            CUVÂNTUL LUI VALERIU
          </p>
          <div className="space-y-4">
            <p className="text-[13px] text-ivory leading-[1.7] italic">
              {inchidere.meditatie}
            </p>
            <p className="text-[13px] text-ivory leading-[1.7] italic">
              {inchidere.prietenie}
            </p>
            <p className="text-[13px] text-ivory leading-[1.7] italic">
              {inchidere.semnatura}
            </p>
          </div>
          <div className="text-center mt-5 pt-4" style={{ borderTop: "1px solid #C5A55A33" }}>
            <p className="text-[14px] text-gold font-heading">{inchidere.salut}</p>
            <p className="text-[11px] text-warm-gray mt-3 italic">{inchidere.sfarsit}</p>
          </div>
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
