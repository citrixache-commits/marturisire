"use client";
import OrthodoxCross from "./OrthodoxCross";

interface Props {
  onClose: () => void;
}

export default function AboutModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-5 animate-fade-in"
      style={{ background: "#1A1410ee", backdropFilter: "blur(8px)" }}
      onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
        className="relative rounded-2xl p-7 max-w-[480px] w-full animate-fade-in overflow-y-auto max-h-[90vh]"
        style={{
          background: "linear-gradient(180deg, #1E1814, #1A1410)",
          border: "1px solid #C5A55A33",
        }}>

        <div className="flex items-center gap-3 mb-5">
          <OrthodoxCross size={24} color="#C5A55A" />
          <h2 className="text-[20px] font-heading text-gold tracking-wider">Despre Mărturisire</h2>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">DE CE EXISTĂ</p>
            <p className="text-[16px] text-ivory/90 leading-[1.8]">
              Mărturisire este o aplicație ortodoxă gratuită, creată cu dorința de a aduce mai aproape de suflet rugăciunea zilnică, pregătirea pentru spovedanie și tradiția liturgică.
            </p>
          </div>

          <div>
            <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">CE CONȚINE</p>
            <div className="space-y-2">
              {[
                "Îndreptarul de spovedanie al Sfântului Valeriu Gafencu — 178 de întrebări",
                "Pravila de dimineață și de seară — text integral canonic",
                "Rugăciuni ortodoxe autentice, preluate din surse liturgice",
                "Calendar ortodox cu sfinții zilei, evanghelia și reguli de post",
                "Rețete tradiționale românești de post",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-gold text-[10px] mt-1.5 flex-shrink-0">&#10022;</span>
                  <p className="text-[15px] text-ivory/85 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">DATE ȘI CONFIDENȚIALITATE</p>
            <p className="text-[16px] text-ivory/90 leading-[1.8]">
              Toate datele tale rămân pe dispozitivul tău. Nu colectăm informații personale, nu avem conturi, nu trimitem nimic la niciun server. Progresul tău în pravilă și îndreptar este salvat doar local, în browserul tău.
            </p>
          </div>

          <div>
            <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">SURSELE TEXTELOR</p>
            <p className="text-[16px] text-ivory/90 leading-[1.8]">
              Toate rugăciunile și textele liturgice sunt preluate din surse canonice ortodoxe. Îndreptarul de spovedanie aparține Sfântului Valeriu Gafencu, mărturisitor din închisorile comuniste (1921–1952).
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4" style={{ borderTop: "1px solid #C5A55A22" }}>
          <p className="text-[12px] text-warm-gray text-center leading-relaxed">
            marturisire.ro — aplicație gratuită, fără reclame
          </p>
        </div>

        <button onClick={onClose}
          className="w-full mt-4 rounded-xl p-3 text-[15px] font-heading tracking-wider text-center transition-all active:scale-[0.98]"
          style={{ background: "#C5A55A15", border: "1px solid #C5A55A33", color: "#C5A55A" }}>
          Închide
        </button>
      </div>
    </div>
  );
}
