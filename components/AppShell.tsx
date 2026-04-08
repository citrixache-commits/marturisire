"use client";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import OrthodoxCross from "./ui/OrthodoxCross";
import OnboardingFlow from "./ui/OnboardingFlow";
import PravilaModal from "./ui/PravilaModal";
import ScreenSkeleton from "./ui/Skeleton";
import HomeScreen from "./screens/HomeScreen";

const PrayersScreen = lazy(() => import("./screens/PrayersScreen"));
const SpovedanieScreen = lazy(() => import("./screens/SpovedanieScreen"));
const FastingScreen = lazy(() => import("./screens/FastingScreen"));
const CalendarScreen = lazy(() => import("./screens/CalendarScreen"));

type Tab = "home" | "calendar" | "spovedanie" | "prayers" | "fasting";

const tabOrder: Tab[] = ["home", "calendar", "spovedanie", "prayers", "fasting"];

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "home", label: "Acasă", icon: "\u{1F3E0}" },
  { id: "calendar", label: "Calendar", icon: "\u{1F4C5}" },
  { id: "spovedanie", label: "Îndreptar", icon: "\u{1F4DC}" },
  { id: "prayers", label: "Rugăciuni", icon: "\u{1F64F}" },
  { id: "fasting", label: "Post", icon: "\u{1F957}" },
];

function haptic() {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(8);
  }
}

export default function AppShell() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [pravilaOpen, setPravilaOpen] = useState<"dimineata" | "seara" | null>(null);
  const [pravilaRefresh, setPravilaRefresh] = useState(0);
  const [streak] = useState(12);
  const [slideClass, setSlideClass] = useState("");
  const prevTabRef = useRef<Tab>("home");

  function switchTab(tab: Tab) {
    if (tab === activeTab) return;
    haptic();
    const prevIdx = tabOrder.indexOf(prevTabRef.current);
    const nextIdx = tabOrder.indexOf(tab);
    setSlideClass(nextIdx > prevIdx ? "animate-slide-in-right" : "animate-slide-in-left");
    prevTabRef.current = tab;
    setActiveTab(tab);
  }

  // Reset slide animation after it plays
  useEffect(() => {
    const t = setTimeout(() => setSlideClass(""), 350);
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

      <a href="#main-content" className="sr-only">Salt la conținut</a>
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
              <h1 className="text-[24px] font-heading font-bold text-gold tracking-[2px] leading-none">
                MĂRTURISIRE
              </h1>
              <p className="text-[12px] text-gold-light tracking-[4px] font-light">
                CREDINȚĂ ORTODOXĂ
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full"
              style={{ background: "#C5A55A22", border: "1px solid #C5A55A44" }}>
              <span className="text-sm">{"\u{1F525}"}</span>
              <span className="text-[14px] text-gold font-semibold">{streak}</span>
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
      <main id="main-content" className={`relative z-[1] pb-[100px] ${slideClass}`} role="main">
        {activeTab === "home" && <HomeScreen onNavigate={(t) => switchTab(t as Tab)} onOpenPravila={(type) => { haptic(); setPravilaOpen(type); }} pravilaRefresh={pravilaRefresh} />}
        <Suspense fallback={<ScreenSkeleton />}>
          {activeTab === "calendar" && <CalendarScreen />}
          {activeTab === "spovedanie" && <SpovedanieScreen />}
          {activeTab === "prayers" && <PrayersScreen />}
          {activeTab === "fasting" && <FastingScreen />}
        </Suspense>
      </main>

      {/* Tab Bar */}
      <nav aria-label="Navigare principală" className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[200] flex justify-around px-2 pt-2"
        style={{
          background: "linear-gradient(180deg, #1A1410ee, #1A1410)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid #C5A55A15",
          paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))",
        }}>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => switchTab(tab.id)}
            aria-label={tab.label}
            aria-current={activeTab === tab.id ? "page" : undefined}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors"
            style={{ opacity: activeTab === tab.id ? 1 : 0.55 }}>
            <span className="text-[15px]">{tab.icon}</span>
            <span className="text-[11px] tracking-[0.3px] font-heading"
              style={{
                color: activeTab === tab.id ? "#C5A55A" : "#A89E92",
              }}>
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

      {showOnboarding && <OnboardingFlow onComplete={completeOnboarding} />}
      {pravilaOpen && <PravilaModal pravilaId={pravilaOpen} onClose={() => { setPravilaOpen(null); setPravilaRefresh((n) => n + 1); }} />}
    </div>
  );
}
