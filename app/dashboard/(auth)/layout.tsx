import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Dashboard Login | Belvedere Pharmacy Group",
    description: "Sign in to the dashboard",
    robots: "noindex, nofollow",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
