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
          border: "1px solid #C5A55A44",
          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
        }}>

        <div className="relative">
          {/* Cross */}
          <div className="inline-block relative mb-2">
            <OrthodoxCross size={32} color="#C5A55A" />
          </div>

          <h2 className="text-[22px] font-heading text-gold tracking-wider mt-2 mb-1">
            Ce pregătim în LUMINA
          </h2>

          <ByzantineDivider color="#C5A55A" opacity={0.4} />

          <p className="text-[13px] text-warm-gray leading-relaxed mb-5 italic px-2">
            Lucrăm la conținut nou pentru viața ta duhovnicească. Iată ce urmează:
          </p>

          {/* Features — coming soon */}
          <div className="text-left space-y-3 mb-6 px-1">
            {[
              { text: "Îndreptarul complet — 178 de întrebări", note: "Sf. Valeriu Gafencu" },
              { text: "Acatiste, Paraclis, Canon de Pocăință", note: "Texte canonice complete" },
              { text: "Istoric spovedanii și progres personal", note: "Urmărește-ți drumul" },
              { text: "Calendar liturgic complet cu notificări", note: "Sfinții fiecărei zile" },
              { text: "Rugăciuni audio cu glas de preot", note: "Ascultă și rostește" },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-gold-dim text-[10px] mt-1 flex-shrink-0">&#10022;</span>
                <div>
                  <p className="text-[13px] text-ivory leading-snug">{f.text}</p>
                  <p className="text-[11px] text-warm-gray mt-0.5">{f.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[12px] text-warm-gray leading-relaxed mb-5 px-3">
            Aplicația e în dezvoltare. Momentan totul e gratuit. Când vom fi gata, vei fi primul care află.
          </p>

          <button className="w-full rounded-xl p-3 text-gold text-[13px] font-semibold font-heading tracking-wider"
            style={{
              background: "rgba(197, 165, 90, 0.1)",
              border: "1px solid #C5A55A44",
            }}>
            Anunță-mă când e gata
          </button>

          <button onClick={onClose}
            className="text-warm-gray text-[12px] mt-3 p-2 bg-transparent border-none hover:text-ivory transition-colors">
            Închide
          </button>
        </div>
      </div>
    </div>
  );
}
