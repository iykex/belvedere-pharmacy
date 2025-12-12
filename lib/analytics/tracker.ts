import { nanoid } from "nanoid";
import {
  COOKIE_CONSENT_KEY,
  COOKIE_PREFERENCES_KEY,
} from "../constants/cookies";
import { getGeolocation } from "./geolocation";
import {
  SESSION_ID_KEY,
  SESSION_TIMEOUT,
  USER_ID_KEY,
} from "../constants/analytics";

function getOrSetUserId() {
  let uid = localStorage.getItem(USER_ID_KEY);
  if (!uid) {
    uid = nanoid();
    localStorage.setItem(USER_ID_KEY, uid);
  }
  return uid;
}

function getOrSetSessionId() {
  const stored = localStorage.getItem(SESSION_ID_KEY);
  const now = Date.now();

  if (stored) {
    const session = JSON.parse(stored);

    // Check if session expired
    if (now - session.lastActivity < SESSION_TIMEOUT) {
      // Session is still active
      session.lastActivity = now;
      localStorage.setItem(SESSION_ID_KEY, JSON.stringify(session));
      return session.sessionId;
    }
  }

  // Create new session
  const newSession = {
    sessionId: nanoid(),
    lastActivity: now,
  };
  localStorage.setItem(SESSION_ID_KEY, JSON.stringify(newSession));
  return newSession.sessionId;
}

export async function getTrackingContext() {
  const userId = getOrSetUserId();
  const sessionId = getOrSetSessionId();
  const geolocation = await getGeolocation();

  return {
    userId,
    sessionId,
    url: window.location.href,
    referrer: document.referrer || null,
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    ts: Date.now(),
    ...geolocation,
  };
}

export async function track(event: string, data: any = {}) {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  const preferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

  // Only track if consent is granted
  if (consent !== "true") return;

  const base = await getTrackingContext();

  const payload = { event, ...base, ...data };

  return payload;

  //   try {
  //     await fetch("https://api.tinybird.co/v0/events?name=events", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TINYBIRD_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });
  //   } catch (e) {
  //     if (e instanceof Error) {
  //       console.log(e.message);
  //     }
  //   }
}
