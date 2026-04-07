"use client";
import { useState } from "react";
import CandleSVG from "@/components/ui/CandleSVG";

export default function CandlesScreen() {
  const [litCandles, setLitCandles] = useState(3);
  const [prayerRequest, setPrayerRequest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function lightCandle(count: number) {
    setLitCandles((c) => c + count);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="px-4 py-5">
      <h2 className="text-[22px] font-heading text-gold tracking-wider mb-0.5 text-center">
        Lumânări Digitale
      </h2>
      <p className="text-[13px] text-warm-gray mb-6 text-center">
        Aprinde o lumânare și trimite o rugăciune
      </p>

      {/* Candle display */}
      <div className="rounded-3xl p-8 mb-5 min-h-[200px] flex justify-center items-end gap-4 flex-wrap"
        style={{
          background: "radial-gradient(ellipse at center bottom, #4A0E1A55, #1A1410)",
          border: "1px solid #C5A55A22",
        }}>
        {Array.from({ length: Math.min(litCandles, 12) }).map((_, i) => (
          <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <CandleSVG lit={true} size={26 + (i % 3) * 4} />
          </div>
        ))}
        {litCandles > 12 && (
          <p className="text-xs text-warm-gray w-full text-center mt-2">+{litCandles - 12} lumânări</p>
        )}
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-8 mb-5">
        <div className="text-center">
          <p className="text-2xl text-gold font-bold">{litCandles}</p>
          <p className="text-[10px] text-warm-gray">Lumânările tale</p>
        </div>
        <div className="w-px bg-gold/15" />
        <div className="text-center">
          <p className="text-2xl text-gold font-bold">12,847</p>
          <p className="text-[10px] text-warm-gray">Comunitate azi</p>
        </div>
      </div>

      {/* Prayer request */}
      <div className="glass-card p-4 mb-4">
        <p className="text-[11px] text-gold tracking-[2px] font-heading mb-2.5">CERERE DE RUGĂCIUNE</p>
        <textarea
          value={prayerRequest}
          onChange={(e) => setPrayerRequest(e.target.value)}
          placeholder="Scrie cererea ta de rugăciune..."
          className="w-full rounded-xl p-3 text-[14px] text-ivory placeholder:text-warm-gray/50 resize-none h-20 outline-none font-body"
          style={{ background: "#4A0E1A33", border: "1px solid #C5A55A22" }}
        />
      </div>

      {/* Purchase options */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        {[
          { count: 1, price: "\u20AC0.99", popular: false },
          { count: 3, price: "\u20AC1.99", popular: true },
          { count: 7, price: "\u20AC3.99", popular: false },
        ].map((opt, i) => (
          <button key={i} onClick={() => lightCandle(opt.count)}
            className="rounded-2xl p-4 flex flex-col items-center gap-1.5 relative transition-all active:scale-95"
            style={{
              background: opt.popular ? "linear-gradient(135deg, #C5A55A33, #6B1D2A44)" : "#1A141088",
              border: opt.popular ? "2px solid #C5A55A66" : "1px solid #C5A55A22",
            }}>
            {opt.popular && (
              <span className="absolute -top-2 text-[8px] text-dark bg-gold rounded-md px-2 py-0.5 font-bold font-heading">
                POPULAR
              </span>
            )}
            <span className="text-2xl">{"\u{1F56F}\u{FE0F}"}</span>
            <span className="text-lg text-ivory font-semibold">&times;{opt.count}</span>
            <span className="text-[13px] text-gold font-semibold">{opt.price}</span>
          </button>
        ))}
      </div>

      {/* Success message */}
      {submitted && (
        <div className="animate-fade-in rounded-xl p-3 text-center mb-4"
          style={{ background: "#C5A55A22", border: "1px solid #C5A55A44" }}>
          <p className="text-[14px] text-gold">
            &#10024; Lumânarea ta a fost aprinsă! Dumnezeu să te binecuvânteze.
          </p>
        </div>
      )}

      <p className="text-[11px] text-warm-gray text-center mt-4 leading-relaxed">
        &#128157; 30% din veniturile lumânărilor sunt donate către mănăstiri și acțiuni caritabile ortodoxe
      </p>
    </div>
  );
}
