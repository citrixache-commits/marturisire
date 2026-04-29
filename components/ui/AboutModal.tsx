"use client";
import { useEffect, useState } from "react";
import OrthodoxCross from "./OrthodoxCross";
import {
  getReminderSettings,
  saveReminderSettings,
  requestNotificationPermission,
  scheduleReminders,
  unscheduleReminders,
  getNotificationSupport,
  type ReminderSettings,
} from "@/lib/reminders";

interface Props {
  onClose: () => void;
}

export default function AboutModal({ onClose }: Props) {
  const [settings, setSettings] = useState<ReminderSettings>({
    enabled: false,
    morning: true,
    evening: true,
  });
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">("default");
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  useEffect(() => {
    setSettings(getReminderSettings());
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    } else {
      setPermission("unsupported");
    }
  }, []);

  async function toggleReminders(next: boolean) {
    if (next) {
      const support = getNotificationSupport();
      if (!support.supported) {
        setStatusMsg(
          support.reason ||
            "Browserul tău nu suportă notificări. Pe iPhone instalează app-ul pe Home Screen."
        );
        return;
      }
      const perm = await requestNotificationPermission();
      setPermission(perm);
      if (perm !== "granted") {
        setStatusMsg(
          "Permisiunea pentru notificări a fost refuzată. O poți activa din setările browserului."
        );
        return;
      }
      const newSettings = { ...settings, enabled: true };
      saveReminderSettings(newSettings);
      setSettings(newSettings);
      const result = await scheduleReminders(newSettings);
      if (result.scheduled) {
        setStatusMsg("Amintiri activate. Vei primi notificări la 7:00 și 21:00.");
      } else if (result.fallback) {
        setStatusMsg(
          "Browserul tău nu programează notificări în fundal. Vei vedea o amintire blândă în app când o deschizi în fereastra rugăciunii (6:30-9:00 / 20:30-22:30)."
        );
      } else {
        setStatusMsg("Nu s-au putut programa notificările. Verifică setările.");
      }
    } else {
      const newSettings = { ...settings, enabled: false };
      saveReminderSettings(newSettings);
      setSettings(newSettings);
      await unscheduleReminders();
      setStatusMsg("Amintiri dezactivate.");
    }
  }

  async function toggleMorning(next: boolean) {
    const newSettings = { ...settings, morning: next };
    saveReminderSettings(newSettings);
    setSettings(newSettings);
    if (newSettings.enabled) {
      await scheduleReminders(newSettings);
    }
  }

  async function toggleEvening(next: boolean) {
    const newSettings = { ...settings, evening: next };
    saveReminderSettings(newSettings);
    setSettings(newSettings);
    if (newSettings.enabled) {
      await scheduleReminders(newSettings);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-5 animate-fade-in"
      style={{ background: "#1A1410ee", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-2xl p-7 max-w-[480px] w-full animate-fade-in overflow-y-auto max-h-[90vh]"
        style={{
          background: "linear-gradient(180deg, #1E1814, #1A1410)",
          border: "1px solid #C5A55A33",
        }}
      >
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

          {/* Reminder toggle — opt-in, off by default */}
          <div>
            <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">
              AMINTIRI PRAVILEI
            </p>
            <p className="text-[14px] text-ivory/80 leading-[1.7] mb-3">
              Notificare blândă la 7:00 dimineața și 21:00 seara. Fără streak, fără pedeapsă — doar o amintire dacă alegi.
            </p>

            {/* Master toggle */}
            <button
              type="button"
              onClick={() => toggleReminders(!settings.enabled)}
              className="w-full flex items-center justify-between rounded-xl p-3 transition-all active:scale-[0.98]"
              style={{
                background: settings.enabled ? "#C5A55A1F" : "#1A141066",
                border: `1px solid ${settings.enabled ? "#C5A55A66" : "#C5A55A22"}`,
              }}
            >
              <span className="text-[14px] text-ivory">
                {settings.enabled ? "Activate" : "Dezactivate"}
              </span>
              <span
                className="relative inline-block w-10 h-6 rounded-full transition-colors"
                style={{ background: settings.enabled ? "#C5A55A" : "#3a3128" }}
              >
                <span
                  className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-ivory transition-transform"
                  style={{
                    transform: settings.enabled ? "translateX(16px)" : "translateX(0)",
                  }}
                />
              </span>
            </button>

            {/* Sub-toggles */}
            {settings.enabled && (
              <div className="mt-2 space-y-1.5">
                <label className="flex items-center justify-between rounded-lg px-3 py-2 cursor-pointer"
                  style={{ background: "#1A141033" }}>
                  <span className="text-[13px] text-ivory/85">
                    {"\u{2600}\u{FE0F}"} Dimineața — 7:00
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.morning}
                    onChange={(e) => toggleMorning(e.target.checked)}
                    className="w-4 h-4 accent-gold"
                  />
                </label>
                <label className="flex items-center justify-between rounded-lg px-3 py-2 cursor-pointer"
                  style={{ background: "#1A141033" }}>
                  <span className="text-[13px] text-ivory/85">
                    {"\u{1F319}"} Seara — 21:00
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.evening}
                    onChange={(e) => toggleEvening(e.target.checked)}
                    className="w-4 h-4 accent-gold"
                  />
                </label>
              </div>
            )}

            {statusMsg && (
              <p className="text-[12px] text-gold-light leading-relaxed mt-3 italic">
                {statusMsg}
              </p>
            )}

            {permission === "denied" && (
              <p className="text-[12px] text-warm-gray leading-relaxed mt-2">
                Permisiunea a fost refuzată. Pentru a o reactiva, deschide setările browserului → Notificări → marturisire.ro.
              </p>
            )}

            {permission === "unsupported" && (
              <p className="text-[12px] text-warm-gray leading-relaxed mt-2">
                Browserul tău nu suportă notificări push. Pe iPhone, instalează aplicația pe Home Screen (Share → Add to Home Screen) cu iOS 16.4+.
              </p>
            )}
          </div>

          <div>
            <p className="text-[13px] text-gold tracking-[2px] font-heading mb-2">
              DATE ȘI CONFIDENȚIALITATE
            </p>
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

        <button
          onClick={onClose}
          className="w-full mt-4 rounded-xl p-3 text-[15px] font-heading tracking-wider text-center transition-all active:scale-[0.98]"
          style={{ background: "#C5A55A15", border: "1px solid #C5A55A33", color: "#C5A55A" }}
        >
          Închide
        </button>
      </div>
    </div>
  );
}
