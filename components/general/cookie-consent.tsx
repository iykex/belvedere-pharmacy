"use client";

import { Check, Cookie, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";
import useCookiesPreferences from "@/hooks/use-cookies-preferences";
import { COOKIE_PREFERENCES_ITEMS, INTERNAL_LINKS, TRACKING_EVENTS } from "@/lib/constants/general";
import { track } from "@/lib/analytics/tracker";

export default function CookieConsentDialogue({ bubbleStateClassName }: { bubbleStateClassName?: string }) {
  const {
    mounted,
    handleAcceptAllCookies,
    handleAcceptEssentialCookiesOnly,
    handleOpenSettings,
    cookiePreferences,
    handleCustomCookies,
    setCookiePreferences,
    hasConsented,
    isCookieDialogueBoxVisible,
    setIsCookieDialogueBoxVisible,
    setShowAllCookiePreferences,
    showAllCookiePreferences,
  } = useCookiesPreferences();

  if (!mounted) return null;

  if (hasConsented && !isCookieDialogueBoxVisible) {
    return (
      <Button
        onClick={() => {
          handleOpenSettings();
          track(TRACKING_EVENTS.cookieToggleButton, "cookie settings opened");
        }}
        className={cn(
          "fixed bottom-4 left-4 z-40 size-10 rounded-full bg-card text-primary shadow-lg ring-1 ring-border transition-all duration-300 hover:scale-110 hover:shadow-xl lg:bottom-6 lg:left-6",
          bubbleStateClassName,
        )}
        aria-label="Open cookie settings"
      >
        <Cookie className="size-5" />
      </Button>
    );
  }

  const showOverview = !hasConsented || showAllCookiePreferences;

  return (
    <div className={cn(
      "fixed inset-x-0 bottom-0 z-50 transition-all duration-300 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[380px]",
      isCookieDialogueBoxVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
    )}>
      <section aria-label="Cookie consent" className="overflow-hidden rounded-t-2xl bg-card text-card-foreground shadow-2xl ring-1 ring-border sm:rounded-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Cookie className="size-5" />
            </span>
            <div>
              <h2 className="text-base font-bold leading-tight">Your privacy</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">Choose how cookies help us improve the site.</p>
            </div>
          </div>
          {hasConsented && (
            <Button onClick={() => setIsCookieDialogueBoxVisible(false)} variant="ghost" size="icon" className="size-8 shrink-0 rounded-full text-muted-foreground hover:text-foreground" aria-label="Close cookie settings">
              <X className="size-4" />
            </Button>
          )}
        </div>

        <div className="space-y-4 px-5 py-4">
          {showOverview ? (
            <>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Essential cookies keep the pharmacy website working. Optional cookies help us understand visits and improve your experience.
              </p>
              <div className="grid gap-2">
                <Button
                  onClick={() => {
                    handleAcceptAllCookies();
                    track(TRACKING_EVENTS.cookieAcceptAll, "all cookies accepted");
                  }}
                  className="h-11 w-full rounded-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Accept all
                </Button>
                <Button
                  onClick={() => {
                    handleAcceptEssentialCookiesOnly();
                    track(TRACKING_EVENTS.cookieEssentialOnly, "accepted essential cookies only");
                  }}
                  variant="outline"
                  className="h-11 w-full rounded-xl border-border"
                >
                  Necessary only
                </Button>
              </div>
              <div className="flex items-center justify-between gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllCookiePreferences(false);
                    track(TRACKING_EVENTS.cookieCustomiseView, "viewed custom cookies interface");
                  }}
                  className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  <Settings className="size-3.5" />
                  Manage choices
                </button>
                <span className="text-right text-muted-foreground">You can change this later.</span>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-sm font-semibold">Cookie choices</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Essential cookies are always on. Choose whether to allow the optional categories.</p>
              </div>
              <div className="space-y-2">
                {COOKIE_PREFERENCES_ITEMS.map((item) => {
                  const enabled = item.id === "essential" ? true : cookiePreferences[item.key];
                  return (
                    <label key={item.id} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/50 px-3 py-3">
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{item.title.replace(" Cookies", "")}</span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">{item.description}</span>
                      </span>
                      <span className="relative shrink-0">
                        <input
                          type="checkbox"
                          checked={enabled}
                          disabled={item.id === "essential"}
                          onChange={(event) => {
                            if (item.id !== "essential") {
                              setCookiePreferences({ ...cookiePreferences, [item.key]: event.target.checked });
                            }
                          }}
                          className="peer sr-only"
                        />
                        <span className="block h-6 w-10 rounded-full bg-muted peer-checked:bg-primary peer-disabled:opacity-50" />
                        <span className="absolute left-0.5 top-0.5 flex size-5 items-center justify-center rounded-full bg-background shadow-sm transition-transform peer-checked:translate-x-4">
                          {enabled && <Check className="size-3 text-primary" />}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    handleCustomCookies();
                    track(TRACKING_EVENTS.cookieCustomise, "created custom cookies");
                  }}
                  className="h-10 flex-1 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Save choices
                </Button>
                <Button onClick={() => setShowAllCookiePreferences(true)} variant="outline" className="h-10 rounded-xl border-border px-4">
                  Back
                </Button>
              </div>
            </>
          )}
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Read our <Link href={INTERNAL_LINKS.privacyPolicyPage} className="font-medium text-primary hover:underline">Privacy Policy</Link>{" "}
            and <Link href={INTERNAL_LINKS.cookiePolicyPage} className="font-medium text-primary hover:underline">Cookie Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
