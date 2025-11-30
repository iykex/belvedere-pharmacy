import type { Metadata } from "next";
import "@/styles/globals.css";
import { getMetadata } from "@/lib/metadata";
import { ReactNode } from "react";
import { montserrat, openSans } from "@/lib/fonts";
import Menu from "@/components/general/navigation-menu";
import { Footer } from "@/components/general/footer";

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${montserrat.variable} antialiased`}
      >
        <header className="fixed top-0 w-full z-50">
          <Menu />
        </header>
        <main> {children}</main>
        <footer className="w-full bg-foreground">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
