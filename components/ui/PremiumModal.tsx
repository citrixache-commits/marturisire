"use client";
import OrthodoxCross from "./OrthodoxCross";
import ByzantineDivider from "./ByzantineDivider";

interface Props {
  onClose: () => void;
}

export default function PremiumModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-5 animate-fade-in"
      style={{ background: "#1A1410ee", backdropFilter: "blur(8px)" }}
      onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
        className="relative rounded-3xl p-7 max-w-[380px] w-full text-center animate-fade-in overflow-y-auto max-h-[92vh]"
        style={{
          background: "linear-gradient(180deg, #4A0E1A, #1A1410)",
          border: "1px solid #C5A55A66",
          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
        }}>

        <div className="relative">
          {/* Cross */}
          <div className="inline-block relative mb-2">
            <OrthodoxCross size={36} color="#C5A55A" />
          </div>

          <h2 className="text-[24px] font-heading text-gold tracking-wider mt-3 mb-1">
            LUMINA PREMIUM
          </h2>

          <ByzantineDivider color="#C5A55A" opacity={0.5} />

          <p className="text-[13px] text-warm-gray leading-relaxed mb-5 italic px-2">
            Îndreptarul complet al Sfântului Valeriu Gafencu, toate rugăciunile și conținut exclusiv
          </p>

          {/* Features */}
          <div className="text-left space-y-2 mb-5 px-1">
            {[
              "Îndreptar Gafencu \u2013 178 de întrebări",
              "Istoric spovedanii și progres",
              "Toate rugăciunile canonice",
              "Acatiste, Paraclis, Canon de Pocăință",
              "Calendar liturgic complet cu notificări",
              "Reminder zilnic personalizat",
              "Fără reclame",
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-gold text-xs mt-0.5 flex-shrink-0">&#10022;</span>
                <p className="text-[13px] text-ivory leading-snug">{f}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="flex gap-3 mb-5">
            <div className="flex-1 rounded-xl p-4 relative"
              style={{
                background: "linear-gradient(180deg, rgba(26, 20, 16, 0.6), rgba(26, 20, 16, 0.3))",
                border: "1px solid #C5A55A22",
              }}>
              <p className="text-[11px] text-warm-gray mb-1 font-heading tracking-wider">SĂPTĂMÂNAL</p>
              <p className="text-xl text-ivory font-bold">&euro;2.99</p>
              <p className="text-[10px] text-warm-gray">/săptămână</p>
            </div>
            <div className="flex-1 rounded-xl p-4 relative"
              style={{
                background: "linear-gradient(180deg, rgba(197, 165, 90, 0.18), rgba(197, 165, 90, 0.08))",
                border: "1.5px solid #C5A55A",
              }}>
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] text-dark rounded-md px-2 py-0.5 font-bold font-heading whitespace-nowrap"
                style={{ background: "#C5A55A" }}>
                ECONOMISEȘTI 80%
              </span>
              <p className="text-[11px] text-gold-light mb-1 font-heading tracking-wider">ANUAL</p>
              <p className="text-xl text-gold font-bold">&euro;29.99</p>
              <p className="text-[10px] text-gold-light">/an (&euro;2.50/lună)</p>
            </div>
          </div>

          <button className="w-full rounded-xl p-3.5 text-ivory text-[14px] font-semibold font-heading tracking-wider"
            style={{
              background: "linear-gradient(135deg, #C5A55A, #9A7F3C)",
              boxShadow: "0 4px 12px rgba(197, 165, 90, 0.2)",
            }}>
            Începe 7 zile GRATUIT &rarr;
          </button>

          <button onClick={onClose}
            className="text-warm-gray text-[13px] mt-3 p-2 bg-transparent border-none hover:text-ivory transition-colors">
            Nu acum
          </button>
        </div>
      </div>
    </div>
  );
}
