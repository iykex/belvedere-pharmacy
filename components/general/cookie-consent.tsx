"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Settings, Shield, ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Cookie consent storage keys
const COOKIE_CONSENT_KEY = "belvedere_cookie_consent";
const COOKIE_PREFERENCES_KEY = "belvedere_cookie_preferences";

interface CookiePreferences {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
    essential: true, // Always required
    analytics: false,
    marketing: false,
};

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] =
        useState<CookiePreferences>(defaultPreferences);
    const [hasConsented, setHasConsented] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

        if (consent === "true") {
            setHasConsented(true);
            setIsMinimized(true);
            if (savedPreferences) {
                setPreferences(JSON.parse(savedPreferences));
            }
        } else {
            // Show dialog after a short delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            essential: true,
            analytics: true,
            marketing: true,
        };
        saveConsent(allAccepted);
    };

    const handleAcceptEssential = () => {
        saveConsent(defaultPreferences);
    };

    const handleSavePreferences = () => {
        saveConsent(preferences);
    };

    const saveConsent = (prefs: CookiePreferences) => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "true");
        localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
        setPreferences(prefs);
        setHasConsented(true);
        setIsVisible(false);
        setIsMinimized(true);
        setShowPreferences(false);
    };

    const handleOpenSettings = () => {
        setIsMinimized(false);
        setIsVisible(true);
        setShowPreferences(true);
    };

    // Don't render anything on server
    if (typeof window === "undefined") return null;

    // Minimized bubble state (after consent)
    if (hasConsented && isMinimized) {
        return (
            <button
                onClick={handleOpenSettings}
                className={cn(
                    "fixed bottom-6 left-6 z-40 p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                    "bg-white dark:bg-[#002f4b] border border-gray-200 dark:border-[#1a4d6e]",
                    "hover:shadow-xl group"
                )}
                aria-label="Cookie settings"
            >
                <Cookie className="size-5 text-primary group-hover:rotate-12 transition-transform" />
            </button>
        );
    }

    // Main cookie consent dialog
    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-auto z-50 transition-all duration-500",
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0 pointer-events-none"
            )}
        >
            <div
                className={cn(
                    "bg-white dark:bg-[#001d33] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-[#1a4d6e]",
                    "w-full sm:w-[420px] max-h-[90vh] overflow-hidden",
                    "transition-all duration-300"
                )}
            >
                {/* Header */}
                <div className="p-6 pb-0">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/10 rounded-2xl">
                                <Cookie className="size-7 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                                    Cookie Preferences
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Manage your privacy settings
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                if (hasConsented) {
                                    setIsMinimized(true);
                                    setIsVisible(false);
                                }
                            }}
                            className={cn(
                                "p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-[#003b5c] transition-colors",
                                !hasConsented && "opacity-50 cursor-not-allowed"
                            )}
                            disabled={!hasConsented}
                            aria-label="Minimize"
                        >
                            <X className="size-5 text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {!showPreferences ? (
                        <>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                                We use cookies to enhance your browsing experience, analyze site
                                traffic, and personalize content. By clicking &quot;Accept
                                All&quot;, you consent to our use of cookies.
                            </p>

                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-100 dark:border-green-800/30 rounded-2xl mb-6">
                                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-xl">
                                    <Shield className="size-5 text-green-600 dark:text-green-400" />
                                </div>
                                <p className="text-sm text-green-800 dark:text-green-300 font-medium">
                                    Your data is protected and never sold to third parties.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="space-y-4 mb-6">
                            {/* Essential Cookies */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#002f4b] rounded-2xl border border-gray-100 dark:border-[#1a4d6e]">
                                <div className="flex-1">
                                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                                        Essential Cookies
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                        Required for basic site functionality
                                    </p>
                                </div>
                                <div className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full flex items-center gap-1.5">
                                    <Check className="size-3" />
                                    Always On
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#002f4b] rounded-2xl border border-gray-100 dark:border-[#1a4d6e] cursor-pointer hover:border-primary/30 dark:hover:border-primary/30 transition-colors">
                                <div className="flex-1">
                                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                                        Analytics Cookies
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                        Help us improve our website
                                    </p>
                                </div>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={(e) =>
                                            setPreferences((prev) => ({
                                                ...prev,
                                                analytics: e.target.checked,
                                            }))
                                        }
                                        className="sr-only peer"
                                    />
                                    <div className="w-12 h-7 bg-gray-200 dark:bg-gray-600 rounded-full peer peer-checked:bg-primary transition-colors" />
                                    <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform flex items-center justify-center">
                                        {preferences.analytics && (
                                            <Check className="size-3.5 text-primary" />
                                        )}
                                    </div>
                                </div>
                            </label>

                            {/* Marketing Cookies */}
                            <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#002f4b] rounded-2xl border border-gray-100 dark:border-[#1a4d6e] cursor-pointer hover:border-primary/30 dark:hover:border-primary/30 transition-colors">
                                <div className="flex-1">
                                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                                        Marketing Cookies
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                        Personalized content and ads
                                    </p>
                                </div>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={preferences.marketing}
                                        onChange={(e) =>
                                            setPreferences((prev) => ({
                                                ...prev,
                                                marketing: e.target.checked,
                                            }))
                                        }
                                        className="sr-only peer"
                                    />
                                    <div className="w-12 h-7 bg-gray-200 dark:bg-gray-600 rounded-full peer peer-checked:bg-primary transition-colors" />
                                    <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform flex items-center justify-center">
                                        {preferences.marketing && (
                                            <Check className="size-3.5 text-primary" />
                                        )}
                                    </div>
                                </div>
                            </label>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="space-y-3">
                        {!showPreferences ? (
                            <>
                                <Button
                                    onClick={handleAcceptAll}
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-2xl text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                                >
                                    Accept All Cookies
                                </Button>
                                <div className="flex gap-3">
                                    <Button
                                        onClick={handleAcceptEssential}
                                        variant="outline"
                                        className="flex-1 py-5 rounded-2xl border-2 border-gray-200 dark:border-[#1a4d6e] font-semibold hover:bg-gray-50 dark:hover:bg-[#002f4b] transition-all"
                                    >
                                        Essential Only
                                    </Button>
                                    <Button
                                        onClick={() => setShowPreferences(true)}
                                        variant="outline"
                                        className="flex-1 py-5 rounded-2xl border-2 border-gray-200 dark:border-[#1a4d6e] font-semibold hover:bg-gray-50 dark:hover:bg-[#002f4b] transition-all"
                                    >
                                        <Settings className="size-4 mr-2" />
                                        Customize
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-3">
                                    <Button
                                        onClick={handleSavePreferences}
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-2xl text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                                    >
                                        Save Preferences
                                    </Button>
                                    <Button
                                        onClick={() => setShowPreferences(false)}
                                        variant="outline"
                                        className="w-full py-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
                                    >
                                        <ChevronLeft className="size-4 mr-2" />
                                        Back to Overview
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Privacy Link */}
                    <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-5">
                        Learn more in our{" "}
                        <Link
                            href="/privacy-policy"
                            className="text-primary hover:underline font-medium"
                        >
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/cookie-policy"
                            className="text-primary hover:underline font-medium"
                        >
                            Cookie Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
