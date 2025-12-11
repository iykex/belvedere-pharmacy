import type { Metadata } from "next";
import "@/styles/globals.css";
import { getMetadata } from "@/lib/metadata";
import { ReactNode } from "react";
import { plusJakartaSans, inter } from "@/lib/fonts";
import { Footer } from "@/components/shared/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import FAQChatbot from "@/components/faq-chatbot/faq-chatbot";
import CookieConsent from "@/components/general/cookie-consent";
import './hide-dev-overlay.css';

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${plusJakartaSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="dashed-grid-bg min-h-screen">{children}</main>
          <footer className="w-full bg-foreground dark:bg-background">
            <Footer />
          </footer>

          {/* Global Floating Chatbot */}
          <FAQChatbot />

          {/* Cookie Consent Dialog */}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}


