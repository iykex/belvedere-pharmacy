import type { Metadata } from "next";
import "@/styles/globals.css";
import { getMetadata } from "@/lib/metadata";
import { ReactNode } from "react";
import { plusJakartaSans, inter } from "@/lib/fonts";
import IntersectionWrapper from "@/components/wrappers/use-intersection-wrapper";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${plusJakartaSans.variable} antialiased`}
      >
        <main className="dashed-grid-bg min-h-screen">
          <IntersectionWrapper selector=".observer-target">
            {children}
          </IntersectionWrapper>
        </main>
        <footer className="w-full bg-foreground">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
