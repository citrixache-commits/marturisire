"use client";
import { useState } from "react";
import OrthodoxCross from "@/components/ui/OrthodoxCross";

interface DonationCause {
  id: string;
  title: string;
  description: string;
  emoji: string;
  category: "familii" | "biserica" | "educatie";
  raised: number;
  goal: number;
}

const causes: DonationCause[] = [
  {
    id: "familii-paste",
    title: "Pachete de Paște pentru familii sărace",
    description: "Ajută 200 de familii să aibă masă de Paște. Fiecare pachet conține alimente, ouă roșii și cozonac.",
    emoji: "\u{1F49B}",
    category: "familii",
    raised: 3420,
    goal: 5000,
  },
  {
    id: "biserica-acoperis",
    title: "Reparația acoperișului Bisericii din Baia",
    description: "Biserica de lemn din sec. XVIII are nevoie urgentă de un acoperiș nou pentru a supraviețui iernii.",
    emoji: "\u{26EA}",
    category: "biserica",
    raised: 8200,
    goal: 15000,
  },
  {
    id: "copii-rechizite",
    title: "Rechizite pentru copii din mediul rural",
    description: "150 de copii din sate izolate au nevoie de ghiozdane, caiete și rechizite pentru școală.",
    emoji: "\u{1F4DA}",
    category: "educatie",
    raised: 1800,
    goal: 3000,
  },
  {
    id: "familii-iarna",
    title: "Lemne de foc pentru familii nevoiașe",
    description: "Ajută familii din zona montană să treacă iarna cu căldură. Un camion de lemne = o familie salvată.",
    emoji: "\u{1F525}",
    category: "familii",
    raised: 4100,
    goal: 8000,
  },
  {
    id: "biserica-icoane",
    title: "Restaurarea icoanelor de la Mănăstirea Neamț",
    description: "Icoane din sec. XVI au nevoie de restaurare profesională pentru a fi salvate de la degradare.",
    emoji: "\u{1F3A8}",
    category: "biserica",
    raised: 6500,
    goal: 12000,
  },
];

const categoryLabels: Record<string, string> = {
  all: "Toate",
  familii: "Familii",
  biserica: "Biserici",
  educatie: "Educație",
};

interface Props {
  onShowPremium: () => void;
}

export default function DonationsScreen({ onShowPremium }: Props) {
  const [filter, setFilter] = useState<string>("all");
  const [donatedTo, setDonatedTo] = useState<Set<string>>(new Set());
  const [showThankYou, setShowThankYou] = useState(false);

  const filtered = filter === "all" ? causes : causes.filter((c) => c.category === filter);

  function handleDonate(causeId: string) {
    setDonatedTo((prev) => new Set(prev).add(causeId));
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  }

  const totalRaised = causes.reduce((sum, c) => sum + c.raised, 0);

  return (
    <div className="px-4 py-5 stagger-children">
      <div className="flex items-center gap-2 mb-0.5">
        <h2 className="text-[22px] font-heading text-gold tracking-wider">Donații</h2>
      </div>
      <p className="text-[13px] text-warm-gray mb-5">
        Ajută familii sărace și biserici ortodoxe
      </p>

      {/* Total impact */}
      <div className="rounded-2xl p-5 mb-5"
        style={{ background: "linear-gradient(135deg, #4A0E1Acc, #1B3A5C88)", border: "1px solid #C5A55A33" }}>
        <div className="flex items-center gap-3 mb-3">
          <OrthodoxCross size={20} color="#C5A55A" />
          <p className="text-[11px] text-gold-light tracking-[2px] font-heading">IMPACT COMUNITATE</p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-3xl text-gold font-bold">&euro;{totalRaised.toLocaleString()}</p>
            <p className="text-xs text-warm-gray mt-1">strânși prin LUMINA</p>
          </div>
          <div className="text-right">
            <p className="text-lg text-ivory font-semibold">{causes.length}</p>
            <p className="text-xs text-warm-gray">cauze active</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 pt-3" style={{ borderTop: "1px solid #C5A55A22" }}>
          {[
            { n: "342", l: "Familii ajutate" },
            { n: "12", l: "Biserici susținute" },
            { n: "150", l: "Copii sprijiniți" },
          ].map((s, i) => (
            <div key={i} className="flex-1 text-center">
              <p className="text-sm text-gold font-bold">{s.n}</p>
              <p className="text-[9px] text-warm-gray">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button key={key} onClick={() => setFilter(key)}
            className="px-3.5 py-2 rounded-lg text-xs font-heading tracking-wider whitespace-nowrap transition-all"
            style={{
              background: filter === key ? "#C5A55A33" : "#1A141066",
              border: filter === key ? "1px solid #C5A55A66" : "1px solid #C5A55A11",
              color: filter === key ? "#C5A55A" : "#8A7E72",
            }}>
            {label}
          </button>
        ))}
      </div>

      {/* Causes list */}
      <div className="space-y-3 stagger-children">
        {filtered.map((cause) => {
          const pct = Math.round((cause.raised / cause.goal) * 100);
          const hasDonated = donatedTo.has(cause.id);
          return (
            <div key={cause.id} className="glass-card p-4">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{cause.emoji}</span>
                <div className="flex-1">
                  <p className="text-[14px] text-ivory font-medium leading-tight">{cause.title}</p>
                  <p className="text-[11px] text-warm-gray mt-1 leading-relaxed">{cause.description}</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gold font-semibold">&euro;{cause.raised.toLocaleString()} strânși</span>
                  <span className="text-warm-gray">din &euro;{cause.goal.toLocaleString()}</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ background: "#F5F0E815" }}>
                  <div className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(pct, 100)}%`,
                      background: pct >= 80 ? "linear-gradient(90deg, #3A6B3A, #5A9B5A)" : "linear-gradient(90deg, #C5A55A, #E8D5A3)",
                    }} />
                </div>
                <p className="text-[9px] text-warm-gray mt-1 text-right">{pct}% completat</p>
              </div>

              {/* Donate buttons */}
              {hasDonated ? (
                <div className="rounded-xl p-3 text-center"
                  style={{ background: "#3A6B3A22", border: "1px solid #3A6B3A44" }}>
                  <p className="text-[13px] text-[#5A9B5A]">
                    Dumnezeu să te răsplătească! Donația ta a fost înregistrată.
                  </p>
                </div>
              ) : (
                <div className="flex gap-2">
                  {[
                    { amount: "\u20AC5", value: 5 },
                    { amount: "\u20AC10", value: 10 },
                    { amount: "\u20AC25", value: 25 },
                  ].map((opt, i) => (
                    <button key={i} onClick={() => handleDonate(cause.id)}
                      className="flex-1 rounded-xl py-2.5 text-center text-sm font-semibold transition-all active:scale-95"
                      style={{
                        background: i === 1 ? "#C5A55A33" : "#1A141066",
                        border: i === 1 ? "1px solid #C5A55A55" : "1px solid #C5A55A22",
                        color: i === 1 ? "#C5A55A" : "#F5F0E8",
                      }}>
                      {opt.amount}
                    </button>
                  ))}
                  <button onClick={() => handleDonate(cause.id)}
                    className="flex-1 rounded-xl py-2.5 text-center text-sm transition-all active:scale-95"
                    style={{ background: "#1A141066", border: "1px solid #C5A55A22", color: "#8A7E72" }}>
                    Altă sumă
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Thank you toast */}
      {showThankYou && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[250] animate-fade-in rounded-xl px-5 py-3 max-w-[380px]"
          style={{ background: "#3A6B3Acc", border: "1px solid #5A9B5A66", backdropFilter: "blur(12px)" }}>
          <p className="text-[14px] text-ivory text-center">
            Mulțumim pentru generozitatea ta! Dumnezeu să te binecuvânteze.
          </p>
        </div>
      )}

      {/* Premium donors section */}
      <div className="mt-5 rounded-2xl p-5"
        style={{ background: "linear-gradient(135deg, #C5A55A15, #4A0E1A44)", border: "1px solid #C5A55A33" }}>
        <p className="text-[11px] text-gold tracking-[2px] font-heading mb-2">PREMIUM DONORS</p>
        <p className="text-[13px] text-ivory leading-relaxed mb-3">
          Cu abonamentul Premium, 30% din plata ta lunară merge automat către familii sărace și biserici ortodoxe.
        </p>
        <button onClick={onShowPremium}
          className="w-full rounded-xl p-3 text-sm font-heading tracking-wider text-center transition-all active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, #C5A55A, #6B1D2A)", color: "#F5F0E8" }}>
          Devino Premium Donor &rarr;
        </button>
      </div>

      {/* Transparency */}
      <div className="mt-4 text-center">
        <p className="text-[10px] text-warm-gray leading-relaxed">
          100% transparent &mdash; fiecare donație e publicată. Rapoarte lunare pe site.
          <br />Partener: Asociația Filantropică Ortodoxă
        </p>
      </div>
    </div>
  );
}
