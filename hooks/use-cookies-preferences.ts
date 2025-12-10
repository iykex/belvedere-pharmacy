"use client";
import { useState, useEffect } from "react";
import {
  ALL_PREFERENCES,
  COOKIE_CONSENT_KEY,
  COOKIE_PREFERENCES_KEY,
  DEFAULT_PREFERENCES,
} from "@/lib/constants/cookies";
import { CookiePreferences } from "@/lib/types/general";

export default function useCookiesPreferences() {
  const [mounted, setMounted] = useState(false);
  const [isCookieDialogueBoxVisible, setIsCookieDialogueBoxVisible] =
    useState(false);
  const [showAllCookiePreferences, setShowAllCookiePreferences] =
    useState(false);
  const [cookiePreferences, setCookiePreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [hasConsented, setHasConsented] = useState(false);

  function handleAcceptAllCookies() {
    saveCookiePreferences(ALL_PREFERENCES);
  }

  function handleAcceptEssentialCookiesOnly() {
    saveCookiePreferences(DEFAULT_PREFERENCES);
  }

  function handleCustomCookies() {
    saveCookiePreferences(cookiePreferences);
  }

  function saveCookiePreferences(prefs: CookiePreferences) {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setCookiePreferences(prefs);
    setHasConsented(true);
    setIsCookieDialogueBoxVisible(false);
    setShowAllCookiePreferences(false);
  }

  function handleOpenSettings() {
    setIsCookieDialogueBoxVisible(true);
    setShowAllCookiePreferences(false);
  }

  useEffect(() => {
    setMounted(true);

    let cookieModalTimer: NodeJS.Timeout;
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    if (consent && savedPreferences) {
      setHasConsented(true);
      setIsCookieDialogueBoxVisible(false);
      try {
        setCookiePreferences(JSON.parse(savedPreferences));
      } catch (e) {
        // If parsing fails, use default preferences
        setCookiePreferences(DEFAULT_PREFERENCES);
      }
    } else {
      cookieModalTimer = setTimeout(
        () => setIsCookieDialogueBoxVisible(true),
        1500
      );
    }
    return () => clearTimeout(cookieModalTimer);
  }, []);

  return {
    mounted,
    hasConsented,
    handleAcceptEssentialCookiesOnly,
    handleAcceptAllCookies,
    handleOpenSettings,
    isCookieDialogueBoxVisible,
    setIsCookieDialogueBoxVisible,
    showAllCookiePreferences,
    cookiePreferences,
    setCookiePreferences,
    handleCustomCookies,
    setShowAllCookiePreferences,
  };
}
