import { CookiePreferences } from "../types/general";

export const COOKIE_CONSENT_KEY = "belvedere_cookie_consent";

export const COOKIE_PREFERENCES_KEY = "belvedere_cookie_preferences";

export const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export const ALL_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: true,
};

export const COOKIE_PREFERENCES_ITEMS = [
  {
    id: "essential",
    title: "Essential Cookies",
    description: "Required for basic site functionality",
    key: "essential" as const,
  },
  {
    id: "analytics",
    title: "Analytics Cookies",
    description: "Help us improve our website",
    key: "analytics" as const,
  },
  {
    id: "marketing",
    title: "Marketing Cookies",
    description: "Personalized content and ads",
    key: "marketing" as const,
  },
];
