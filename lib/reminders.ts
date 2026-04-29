// Reminder system pentru pravile (dimineața + seara)
// Off-by-default opt-in. Folosește Notification API + Notification Triggers (Chrome) sau fallback.

const STORAGE_KEY = "marturisire-reminders";
const REMINDER_DIM_HOUR = 7; // 7:00 dimineața
const REMINDER_SEARA_HOUR = 21; // 21:00 seara

export interface ReminderSettings {
  enabled: boolean;
  morning: boolean;
  evening: boolean;
}

const DEFAULT_SETTINGS: ReminderSettings = {
  enabled: false,
  morning: true,
  evening: true,
};

export function getReminderSettings(): ReminderSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveReminderSettings(settings: ReminderSettings) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}

/**
 * Detectează capabilitățile browserului. iOS Safari în mod browser nu suportă
 * notificări — necesită Add to Home Screen și iOS 16.4+.
 */
export function getNotificationSupport(): {
  supported: boolean;
  permissionAPI: boolean;
  scheduledTriggers: boolean;
  isStandalone: boolean;
  reason?: string;
} {
  if (typeof window === "undefined") {
    return { supported: false, permissionAPI: false, scheduledTriggers: false, isStandalone: false };
  }
  const hasNotification = "Notification" in window;
  const hasSW = "serviceWorker" in navigator;
  const hasTriggers = hasNotification && "showTrigger" in Notification.prototype;
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari
    // @ts-expect-error - iOS-specific
    window.navigator.standalone === true;

  return {
    supported: hasNotification && hasSW,
    permissionAPI: hasNotification,
    scheduledTriggers: hasTriggers,
    isStandalone,
    reason: !hasNotification
      ? "Browserul nu suportă notificări."
      : !hasSW
      ? "Service Worker nedisponibil."
      : undefined,
  };
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (typeof window === "undefined" || !("Notification" in window)) return "denied";
  if (Notification.permission === "granted") return "granted";
  if (Notification.permission === "denied") return "denied";
  try {
    return await Notification.requestPermission();
  } catch {
    return "denied";
  }
}

function nextOccurrence(hour: number): Date {
  const now = new Date();
  const target = new Date(now);
  target.setHours(hour, 0, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return target;
}

/**
 * Programează notificări pentru pravilă. Folosește Notification Triggers API
 * (Chrome desktop / Android) ca să apară chiar și când app-ul e închis.
 * Pe iOS / Safari fallback la in-app reminder la deschidere.
 */
export async function scheduleReminders(settings: ReminderSettings): Promise<{
  scheduled: boolean;
  fallback: boolean;
}> {
  const support = getNotificationSupport();
  if (!support.supported || Notification.permission !== "granted") {
    return { scheduled: false, fallback: false };
  }

  const reg = await navigator.serviceWorker.ready;
  if (!reg) return { scheduled: false, fallback: false };

  // Curăță reminder-urile programate anterior
  await unscheduleReminders();

  if (!support.scheduledTriggers) {
    return { scheduled: false, fallback: true };
  }

  const showOpts: NotificationOptions & { showTrigger?: unknown; tag?: string } = {
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    silent: false,
    requireInteraction: false,
  };

  try {
    if (settings.morning) {
      const morning = nextOccurrence(REMINDER_DIM_HOUR);
      await reg.showNotification("Pravila Dimineții", {
        ...showOpts,
        body: "Începe ziua cu rugăciune.",
        tag: "marturisire-pravila-dim",
        data: { url: "/" },
        // @ts-expect-error - TimestampTrigger e experimental
        showTrigger: new TimestampTrigger(morning.getTime()),
      });
    }
    if (settings.evening) {
      const evening = nextOccurrence(REMINDER_SEARA_HOUR);
      await reg.showNotification("Pravila Serii", {
        ...showOpts,
        body: "Mulțumește pentru ziua trecută.",
        tag: "marturisire-pravila-seara",
        data: { url: "/" },
        // @ts-expect-error - TimestampTrigger e experimental
        showTrigger: new TimestampTrigger(evening.getTime()),
      });
    }
    return { scheduled: true, fallback: false };
  } catch (e) {
    console.warn("Eroare la programarea notificărilor", e);
    return { scheduled: false, fallback: true };
  }
}

export async function unscheduleReminders(): Promise<void> {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    if (!reg) return;
    // includeTriggered=true returnează și notificările programate
    const notifications = await reg.getNotifications({
      tag: "marturisire-pravila-dim",
      // @ts-expect-error
      includeTriggered: true,
    });
    notifications.forEach((n) => n.close());
    const evening = await reg.getNotifications({
      tag: "marturisire-pravila-seara",
      // @ts-expect-error
      includeTriggered: true,
    });
    evening.forEach((n) => n.close());
  } catch {}
}

/**
 * Re-programează la deschiderea app-ului (pentru a menține lanțul activ
 * pe browsere care suportă Triggers API — fiecare notificare e single-shot).
 */
export async function refreshSchedulingOnLoad(): Promise<void> {
  const settings = getReminderSettings();
  if (!settings.enabled) return;
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  await scheduleReminders(settings);
}

/**
 * Pentru iOS / Safari: când utilizatorul deschide app-ul în fereastra reminder-ului
 * și nu și-a făcut pravila, returnează info pentru un banner in-app discret.
 */
export interface InAppReminder {
  type: "dim" | "seara";
  message: string;
}

export function checkInAppReminder(opts: {
  pravilaDimDone: boolean;
  pravilaSearaDone: boolean;
}): InAppReminder | null {
  const settings = getReminderSettings();
  if (!settings.enabled) return null;
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const totalMin = hour * 60 + minute;

  // Fereastră dimineața: 6:30-9:00
  if (
    settings.morning &&
    !opts.pravilaDimDone &&
    totalMin >= 6 * 60 + 30 &&
    totalMin <= 9 * 60
  ) {
    return { type: "dim", message: "Pravila dimineții te așteaptă" };
  }

  // Fereastră seara: 20:30-22:30
  if (
    settings.evening &&
    !opts.pravilaSearaDone &&
    totalMin >= 20 * 60 + 30 &&
    totalMin <= 22 * 60 + 30
  ) {
    return { type: "seara", message: "Pravila serii te așteaptă" };
  }

  return null;
}
