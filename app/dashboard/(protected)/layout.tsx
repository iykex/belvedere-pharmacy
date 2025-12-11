import { ReactNode } from "react";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

export default function ProtectedDashboardLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div className="admin-layout">
            <DashboardSidebar />
            <div className="admin-main">
                <DashboardHeader />
                <main className="admin-content">
                    {children}
                </main>
            </div>
        </div>
    );
}
