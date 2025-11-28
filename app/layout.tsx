import type { Metadata } from "next";
import "@/styles/globals.css";
import { getMetadata } from "@/lib/metadata";
import { ReactNode } from "react";
import { montserrat, openSans } from "@/lib/fonts";
import Menu from "@/components/general/navigation-menu";

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
        <header className="fixed top-0 w-full text-white backdrop-blur-xs z-40 font-semibold">
          <Menu />
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
