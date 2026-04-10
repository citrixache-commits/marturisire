"use client";
import { useState, useEffect } from "react";
import { getPravilaById } from "@/data/pravila";
import { getLocalDateKey } from "@/data/saints-calendar";
import ByzantineDivider from "./ByzantineDivider";

interface Props {
  pravilaId: "dimineata" | "seara";
  onClose: () => void;
}

export default function PravilaModal({ pravilaId, onClose }: Props) {
  const pravila = getPravilaById(pravilaId);
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());
  const [completed, setCompleted] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  const step = pravila.steps[currentStep];
  const totalSteps = pravila.steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;
  const isChecked = checkedSteps.has(currentStep);
  const progressPct = ((currentStep + 1) / totalSteps) * 100;

  // Lock body scroll
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Scroll to top when step changes
  useEffect(() => {
    const container = document.getElementById("pravila-scroll");
    if (container) container.scrollTop = 0;
  }, [currentStep]);

  function handleCheck() {
    const newSet = new Set(checkedSteps);
    newSet.add(currentStep);
    setCheckedSteps(newSet);

    if (isLastStep) {
      // Save completion to localStorage (use LOCAL date, not UTC, to match HomeScreen)
      const today = getLocalDateKey();
      if (typeof window !== "undefined") {
        localStorage.setItem(`lumina-pravila-${pravilaId}-${today}`, "done");
      }
      setTimeout(() => setCompleted(true), 300);
    } else {
      // Auto-advance
      setSlideDirection("right");
      setTimeout(() => setCurrentStep((s) => s + 1), 250);
    }
  }

  function handleNext() {
    if (!isLastStep) {
      setSlideDirection("right");
      setCurrentStep((s) => s + 1);
    }
  }

  function handlePrev() {
    if (!isFirstStep) {
      setSlideDirection("left");
      setCurrentStep((s) => s - 1);
    }
  }

  // === Completion screen ===
  if (completed) {
    return (
      <div
        className="fixed inset-0 z-[300] flex items-center justify-center p-5"
        style={{ background: "#1A1410f2", backdropFilter: "blur(10px)" }}
      >
        <div
          className="relative rounded-3xl p-8 max-w-[380px] w-full text-center animate-fade-in overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #4A0E1A, #1A1410)",
            border: "1px solid #C5A55A88",
            boxShadow: "0 0 40px rgba(197, 165, 90, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
          }}
        >
          {/* Radiating light rays behind icon */}
          <div className="absolute top-[52px] left-1/2 -translate-x-1/2 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 200 200" className="animate-ray-rotate">
              <defs>
                <radialGradient id="rayGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C5A55A" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#C5A55A" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[...Array(12)].map((_, i) => (
                <rect
                  key={i}
                  x="99"
                  y="20"
                  width="2"
                  height="60"
                  fill="url(#rayGrad)"
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
            </svg>
          </div>

          {/* Expanding halos */}
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(197, 165, 90, 0.3) 0%, transparent 70%)" }}>
            <div className="absolute inset-0 rounded-full border border-gold animate-halo" style={{ borderColor: "#C5A55A" }} />
            <div className="absolute inset-0 rounded-full border border-gold animate-halo" style={{ borderColor: "#C5A55A", animationDelay: "0.8s" }} />
          </div>

          <div className="relative">
            <div className="text-5xl mb-4 relative inline-block">
              {pravila.icon}
            </div>
            <p className="text-[13px] text-gold-light tracking-[3px] font-heading mb-2">
              PRAVILĂ SFÂRȘITĂ
            </p>
            <h2 className="text-[28px] font-heading text-gold tracking-wider mb-2">
              Slavă Ție, Dumnezeule!
            </h2>

            <ByzantineDivider color="#C5A55A" opacity={0.5} />

            <p className="text-[17px] text-warm-gray leading-relaxed mb-6">
              Ai rostit {totalSteps} rugăciuni din {pravila.title}. Dumnezeu să primească
              ruga ta și să-ți dăruiască pace.
            </p>

            <div
              className="rounded-xl p-4 mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(197, 165, 90, 0.12), rgba(197, 165, 90, 0.05))",
                border: "1px solid #C5A55A44",
              }}
            >
              <p className="text-[14px] text-gold-light tracking-wider font-heading mb-1">
                COMPLETATĂ AZI
              </p>
              <p className="text-[16px] text-ivory">
                {new Date().toLocaleDateString("ro-RO", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full rounded-xl p-3.5 text-ivory text-[16px] font-semibold font-heading tracking-wider"
              style={{
                background: "linear-gradient(135deg, #C5A55A, #9A7F3C)",
                boxShadow: "0 4px 12px rgba(197, 165, 90, 0.2)",
              }}
            >
              Închide ✓
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === Step screen ===
  return (
    <div
      className="fixed inset-0 z-[300] flex flex-col"
      style={{ background: "#1A1410" }}
    >
      {/* Subtle Byzantine pattern background */}
      <div className="absolute inset-0 pointer-events-none bg-byzantine opacity-50" />

      {/* Header */}
      <div
        className="relative flex-shrink-0 px-4 pt-4 pb-3"
        style={{
          background: "linear-gradient(180deg, #1A1410, #1A1410ee)",
          borderBottom: "1px solid #C5A55A22",
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-ivory text-lg transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #C5A55A15, #C5A55A08)",
              border: "1px solid #C5A55A44",
            }}
            aria-label="Închide"
          >
            ×
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] text-gold-light tracking-[2px] font-heading uppercase truncate flex items-center gap-1.5">
              <span className="text-base">{pravila.icon}</span>
              <span>{pravila.title}</span>
            </p>
            <p className="text-[14px] text-warm-gray mt-0.5">
              Pasul <span className="text-gold font-semibold">{currentStep + 1}</span> din{" "}
              <span className="text-gold">{totalSteps}</span>
              <span className="mx-1.5 opacity-40">·</span>
              {pravila.estimatedTime}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="w-full h-1 rounded-full relative overflow-hidden"
          style={{ background: "#C5A55A15" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500 ease-out relative"
            style={{
              background: "linear-gradient(90deg, #C5A55A, #E8D5A3)",
              width: `${progressPct}%`,
            }}
          />
        </div>

        {/* Dot indicators */}
        <div className="flex gap-1 justify-center mt-2">
          {pravila.steps.map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === currentStep ? "16px" : checkedSteps.has(i) ? "6px" : "4px",
                background: i === currentStep
                  ? "#C5A55A"
                  : checkedSteps.has(i)
                  ? "#C5A55A99"
                  : "#C5A55A33",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scrollable content */}
      <div
        id="pravila-scroll"
        className="relative flex-1 overflow-y-auto px-5 py-6"
        style={{ maxWidth: "430px", width: "100%", margin: "0 auto" }}
      >
        <div
          key={currentStep}
          className={slideDirection === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}
        >
          {/* Step number badge */}
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-heading flex-shrink-0"
              style={{
                background: "#C5A55A",
                color: "#1A1410",
              }}
            >
              {currentStep + 1}
            </div>
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #C5A55A55, transparent)" }} />
          </div>

          <h2 className="text-[30px] font-heading text-gold tracking-wide mb-1 leading-tight">
            {step.title}
          </h2>
          {step.subtitle && (
            <p className="text-[15px] text-gold-light italic mb-4">
              {step.subtitle}
            </p>
          )}

          {step.note && (
            <div
              className="rounded-lg p-3 mb-4 relative"
              style={{
                background: "linear-gradient(135deg, rgba(107, 29, 42, 0.25), rgba(107, 29, 42, 0.12))",
                border: "1px solid #C5A55A33",
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-lg" style={{ background: "#C5A55A" }} />
              <p className="text-[15px] text-ivory/85 italic leading-relaxed pl-2">
                <span className="text-gold mr-1">¶</span>
                {step.note}
              </p>
            </div>
          )}

          <ByzantineDivider color="#C5A55A" opacity={0.35} />

          <div
            className="rounded-xl px-6 py-6 relative"
            style={{
              background: "rgba(26, 20, 16, 0.5)",
              border: "1px solid #C5A55A18",
            }}
          >
            <p className="text-[20px] text-ivory whitespace-pre-wrap font-body sacred-text">
              {step.text}
            </p>
          </div>
        </div>

        {/* Bottom spacing for fixed footer */}
        <div className="h-28" />
      </div>

      {/* Footer with navigation */}
      <div
        className="relative flex-shrink-0 px-4 py-4"
        style={{
          background: "linear-gradient(180deg, #1A1410dd, #1A1410)",
          borderTop: "1px solid #C5A55A22",
          maxWidth: "430px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div className="flex gap-2 items-center">
          <button
            onClick={handlePrev}
            disabled={isFirstStep}
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all"
            style={{
              background: isFirstStep ? "#C5A55A08" : "linear-gradient(135deg, #C5A55A22, #C5A55A11)",
              border: `1px solid ${isFirstStep ? "#C5A55A15" : "#C5A55A44"}`,
              color: isFirstStep ? "#A89E9244" : "#C5A55A",
              opacity: isFirstStep ? 0.4 : 1,
            }}
            aria-label="Pasul anterior"
          >
            ←
          </button>

          <button
            onClick={handleCheck}
            className="flex-1 rounded-xl py-3.5 px-4 text-ivory text-[14px] font-semibold font-heading tracking-wider transition-all active:scale-[0.98]"
            style={{
              background: isChecked
                ? "linear-gradient(135deg, #1B3A5Cdd, #1B3A5C99)"
                : "linear-gradient(135deg, #C5A55A, #6B1D2A)",
              border: isChecked ? "1px solid #C5A55A66" : "none",
              boxShadow: isChecked
                ? "inset 0 1px 0 rgba(255, 255, 255, 0.05)"
                : "0 4px 16px rgba(197, 165, 90, 0.25)",
            }}
          >
            <span className="relative">
              {isLastStep
                ? isChecked
                  ? "SFÂRȘIT ✓"
                  : "SFÂRȘEȘTE PRAVILA ✓"
                : isChecked
                ? "ROSTIT ✓"
                : "AM ROSTIT ✓"}
            </span>
          </button>

          <button
            onClick={handleNext}
            disabled={isLastStep}
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all"
            style={{
              background: isLastStep ? "#C5A55A08" : "linear-gradient(135deg, #C5A55A22, #C5A55A11)",
              border: `1px solid ${isLastStep ? "#C5A55A15" : "#C5A55A44"}`,
              color: isLastStep ? "#A89E9244" : "#C5A55A",
              opacity: isLastStep ? 0.4 : 1,
            }}
            aria-label="Pasul următor"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
