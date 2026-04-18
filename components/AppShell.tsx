"use client";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { getTodaySaint } from "@/data/saints-calendar";
import OrthodoxCross from "./ui/OrthodoxCross";
import OnboardingFlow from "./ui/OnboardingFlow";
import PravilaModal from "./ui/PravilaModal";
import ScreenSkeleton from "./ui/Skeleton";
import HomeScreen from "./screens/HomeScreen";
import AboutModal from "./ui/AboutModal";

const PrayersScreen = lazy(() => import("./screens/PrayersScreen"));
const SpovedanieScreen = lazy(() => import("./screens/SpovedanieScreen"));
const CalendarScreen = lazy(() => import("./screens/CalendarScreen"));

type Tab = "home" | "calendar" | "spovedanie" | "prayers";

const tabOrder: Tab[] = ["home", "calendar", "spovedanie", "prayers"];

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "home", label: "Acasă", icon: "\u{1F3E0}" },
  { id: "calendar", label: "Calendar", icon: "\u{1F4C5}" },
  { id: "spovedanie", label: "Îndreptar", icon: "\u{1F4DC}" },
  { id: "prayers", label: "Rugăciuni", icon: "\u{1F64F}" },
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
  const [showAbout, setShowAbout] = useState(false);
  const [slideClass, setSlideClass] = useState("");
  const [isPaschaDay, setIsPaschaDay] = useState(false);
  const prevTabRef = useRef<Tab>("home");

  // Detect Pascha day client-side to avoid hydration mismatch
  useEffect(() => {
    try {
      setIsPaschaDay(getTodaySaint().type === "PAȘTE");
    } catch {}
  }, []);

  function switchTab(tab: Tab) {
    if (tab === activeTab) return;
    haptic();
    const prevIdx = tabOrder.indexOf(prevTabRef.current);
    const nextIdx = tabOrder.indexOf(tab);
    setSlideClass(nextIdx > prevIdx ? "animate-slide-in-right" : "animate-slide-in-left");
    prevTabRef.current = tab;
    setActiveTab(tab);
  }

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
    <div className="font-body min-h-screen text-ivory relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1410 0%, #4A0E1A 100%)" }}>

      <a href="#main-content" className="sr-only">Salt la conținut</a>
      <div className="fixed inset-0 pointer-events-none z-0 bg-byzantine" />

      {/* PASCHAL AMBIENT LIGHT — full viewport, ONLY on Easter Sunday */}
      {isPaschaDay && (
        <>
          {/* Dawn glow from top — warm gold radiance */}
          <div
            className="fixed top-0 left-0 right-0 pointer-events-none z-0"
            style={{
              height: "85vh",
              background:
                "radial-gradient(ellipse 85% 55% at 50% 0%, rgba(232, 213, 163, 0.26) 0%, rgba(197, 165, 90, 0.1) 35%, transparent 75%)",
            }}
          />
          {/* Slowly rotating light rays — covering the whole viewport */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "220vmax",
                height: "220vmax",
                opacity: 0.22,
                animation: "rayRotate 75s linear infinite",
              }}
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="paschaAmbientRay" cx="50%" cy="50%" r="50%">
                  <stop offset="25%" stopColor="#E8D5A3" stopOpacity="0" />
                  <stop offset="55%" stopColor="#E8D5A3" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#E8D5A3" stopOpacity="0" />
                </radialGradient>
              </defs>
              {Array.from({ length: 40 }).map((_, i) => (
                <rect
                  key={i}
                  x="99.75"
                  y="0"
                  width="0.5"
                  height="100"
                  fill="url(#paschaAmbientRay)"
                  transform={`rotate(${i * 9} 100 100)`}
                />
              ))}
            </svg>
          </div>
        </>
      )}

      {/* Desktop sidebar nav */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[240px] z-40 flex-col pt-6 pb-6 px-3"
        style={{
          background: "#1A1410",
          borderRight: "1px solid #C5A55A22",
          boxShadow: "inset -1px 0 0 rgba(197, 165, 90, 0.04)",
        }}>
        <div className="flex items-center gap-2.5 mb-8 px-3">
          <OrthodoxCross size={24} color="#C5A55A" />
          <div>
            <h1 className="text-[18px] font-heading font-bold text-gold tracking-[2px] leading-none">
              MĂRTURISIRE
            </h1>
            <p className="text-[10px] text-gold-light tracking-[2px] font-light mt-1">
              CREDINȚĂ ORTODOXĂ
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-0.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => switchTab(tab.id)}
                aria-label={tab.label}
                aria-current={isActive ? "page" : undefined}
                className="relative flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-lg text-left transition-all"
                style={{
                  background: isActive ? "#C5A55A18" : "transparent",
                }}>
                {isActive && (
                  <span aria-hidden="true"
                    className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r-full"
                    style={{ background: "linear-gradient(180deg, #E8D5A3, #C5A55A)" }} />
                )}
                <span className="text-[17px]">{tab.icon}</span>
                <span className="text-[15px] tracking-[0.5px] font-heading"
                  style={{ color: isActive ? "#C5A55A" : "#A89E92" }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>
        <div className="mt-auto pt-3" style={{ borderTop: "1px solid #C5A55A1F" }}>
          <button onClick={() => setShowAbout(true)}
            className="w-full flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-lg text-left transition-all hover:bg-[#C5A55A0F]">
            <span className="text-[17px]">ℹ️</span>
            <span className="text-[15px] tracking-[0.5px] font-heading text-warm-gray">Despre</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-30 px-5 pt-4 pb-3 lg:hidden"
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
          <button onClick={() => setShowAbout(true)}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#C5A55A15", border: "1px solid #C5A55A33" }}
            aria-label="Despre aplicație">
            <span className="text-[14px] text-gold">ℹ️</span>
          </button>
        </div>
      </header>

      {/* Desktop top strip — orientation crumb (chrome only, no content) */}
      <div className="hidden lg:block sticky top-0 z-30 lg:ml-[240px]"
        style={{
          background: "linear-gradient(180deg, rgba(26,20,16,0.92), rgba(26,20,16,0.78))",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #C5A55A1A",
        }}>
        <div className="max-w-[760px] mx-auto px-6 xl:px-10 py-3 flex items-center gap-2">
          <span className="text-[14px] opacity-80" aria-hidden="true">
            {tabs.find((t) => t.id === activeTab)?.icon}
          </span>
          <span className="text-[11px] tracking-[3px] font-heading uppercase text-gold-light">
            {tabs.find((t) => t.id === activeTab)?.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <main id="main-content" className={`relative z-[1] pb-[100px] lg:pb-10 lg:ml-[240px] ${slideClass}`} role="main">
        <div className="max-w-[430px] md:max-w-[720px] lg:max-w-[760px] mx-auto md:px-2 lg:px-6 xl:px-10">
          {activeTab === "home" && <HomeScreen onNavigate={(t) => switchTab(t as Tab)} onOpenPravila={(type) => { haptic(); setPravilaOpen(type); }} pravilaRefresh={pravilaRefresh} />}
          <Suspense fallback={<ScreenSkeleton />}>
            {activeTab === "calendar" && <CalendarScreen />}
            {activeTab === "spovedanie" && <SpovedanieScreen />}
            {activeTab === "prayers" && <PrayersScreen />}
          </Suspense>
        </div>
      </main>

      {/* Mobile Tab Bar */}
      <nav aria-label="Navigare principală" className="lg:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] md:max-w-[500px] z-40 flex justify-around px-2 pt-2"
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
              style={{ color: activeTab === tab.id ? "#C5A55A" : "#A89E92" }}>
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

      {showOnboarding && <OnboardingFlow onComplete={completeOnboarding} />}
      {pravilaOpen && <PravilaModal pravilaId={pravilaOpen} onClose={() => { setPravilaOpen(null); setPravilaRefresh((n) => n + 1); }} />}
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
    </div>
  );
}
