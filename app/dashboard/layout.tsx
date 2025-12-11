import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/admin.css";
import { ReactNode } from "react";
import { plusJakartaSans, inter } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { DashboardProvider } from "@/components/dashboard/dashboard-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: {
        template: "%s | Belvedere Pharmacy Dashboard",
        default: "Dashboard | Belvedere Pharmacy Group",
    },
    description: "Central management dashboard for Belvedere, Kidbrook, and Lawford Pharmacies",
    robots: "noindex, nofollow",
};

export default function DashboardRootLayout({
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
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <DashboardProvider>
                        {children}
                    </DashboardProvider>
                    <Toaster position="top-right" richColors />
                </ThemeProvider>
            </body>
        </html>
    );
}
