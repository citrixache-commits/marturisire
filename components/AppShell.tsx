"use client";
import { useState, useEffect } from "react";
import OrthodoxCross from "./ui/OrthodoxCross";
import PremiumModal from "./ui/PremiumModal";
import OnboardingFlow from "./ui/OnboardingFlow";
import PravilaModal from "./ui/PravilaModal";
import HomeScreen from "./screens/HomeScreen";
import PrayersScreen from "./screens/PrayersScreen";
import SpovedanieScreen from "./screens/SpovedanieScreen";
import FastingScreen from "./screens/FastingScreen";
import CalendarScreen from "./screens/CalendarScreen";

type Tab = "home" | "calendar" | "spovedanie" | "prayers" | "fasting";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "home", label: "Acasă", icon: "\u{1F3E0}" },
  { id: "calendar", label: "Calendar", icon: "\u{1F4C5}" },
  { id: "spovedanie", label: "Îndreptar", icon: "\u{1F4DC}" },
  { id: "prayers", label: "Rugăciuni", icon: "\u{1F64F}" },
  { id: "fasting", label: "Post", icon: "\u{1F957}" },
];

export default function AppShell() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [showPremium, setShowPremium] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [pravilaOpen, setPravilaOpen] = useState<"dimineata" | "seara" | null>(null);
  const [pravilaRefresh, setPravilaRefresh] = useState(0);
  const [streak] = useState(12);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(t);
  }, [activeTab]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const done = localStorage.getItem("lumina-onboarding-done");
      if (done) setShowOnboarding(false);
    }
  }, []);

  useEffect(() => {
    if (showOnboarding) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [showOnboarding]);

  function completeOnboarding() {
    setShowOnboarding(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("lumina-onboarding-done", "1");
    }
  }

  return (
    <div className="font-body min-h-screen text-ivory max-w-[430px] mx-auto relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1410 0%, #4A0E1A 100%)" }}>

      <div className="fixed inset-0 pointer-events-none z-0 bg-byzantine" />

      {/* Header */}
      <header className="sticky top-0 z-[100] px-5 pt-4 pb-3"
        style={{
          background: "linear-gradient(180deg, #1A1410ee, #1A1410cc)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #C5A55A33",
        }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <OrthodoxCross size={28} color="#C5A55A" />
            <div>
              <h1 className="text-[26px] font-heading font-bold text-gold tracking-[3px] leading-none">
                LUMINA
              </h1>
              <p className="text-[10px] text-gold-light tracking-[4px] font-light">
                CREDINȚĂ ORTODOXĂ
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full"
              style={{ background: "#C5A55A22", border: "1px solid #C5A55A44" }}>
              <span className="text-sm">{"\u{1F525}"}</span>
              <span className="text-[13px] text-gold font-semibold">{streak}</span>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-base font-bold"
              style={{
                background: "linear-gradient(135deg, #6B1D2A, #C5A55A)",
                border: "2px solid #C5A55A66",
              }}>
              S
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-[1] pb-[100px] transition-opacity duration-300"
        style={{ opacity: fadeIn ? 1 : 0 }}>
        {activeTab === "home" && <HomeScreen onNavigate={(t) => setActiveTab(t as Tab)} onShowPremium={() => setShowPremium(true)} onOpenPravila={(type) => setPravilaOpen(type)} pravilaRefresh={pravilaRefresh} />}
        {activeTab === "calendar" && <CalendarScreen />}
        {activeTab === "spovedanie" && <SpovedanieScreen />}
        {activeTab === "prayers" && <PrayersScreen onShowPremium={() => setShowPremium(true)} />}
        {activeTab === "fasting" && <FastingScreen />}
      </main>

      {/* Tab Bar */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[200] flex justify-around px-2 pt-2 pb-5"
        style={{
          background: "linear-gradient(180deg, #1A1410ee, #1A1410)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid #C5A55A15",
        }}>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors"
            style={{ opacity: activeTab === tab.id ? 1 : 0.55 }}>
            <span className="text-[15px]">{tab.icon}</span>
            <span className="text-[8px] tracking-[0.3px] font-heading"
              style={{
                color: activeTab === tab.id ? "#C5A55A" : "#8A7E72",
              }}>
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

      {showPremium && <PremiumModal onClose={() => setShowPremium(false)} />}
      {showOnboarding && <OnboardingFlow onComplete={completeOnboarding} />}
      {pravilaOpen && <PravilaModal pravilaId={pravilaOpen} onClose={() => { setPravilaOpen(null); setPravilaRefresh((n) => n + 1); }} />}
    </div>
  );
}
