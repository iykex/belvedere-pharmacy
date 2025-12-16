"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard as IconLayoutDashboard,
    MessageSquare as IconMessages,
    Mail as IconMail,
    BarChart as IconChartBar,
    Cookie as IconCookie,
    Settings as IconSettings,
    LogOut as IconLogout,
    Store as IconBuildingStore,
} from "lucide-react";
import { useDashboard, branchNames, Branch } from "./dashboard-provider";

const navigation = [
    {
        title: "Overview",
        items: [
            {
                name: "Dashboard",
                href: "/dashboard",
                icon: IconLayoutDashboard,
            },
            {
                name: "Analytics",
                href: "/dashboard/analytics",
                icon: IconChartBar,
            },
        ],
    },
    {
        title: "Management",
        items: [
            {
                name: "Consultations",
                href: "/dashboard/consultations",
                icon: IconMessages,
                badge: "12",
            },
            {
                name: "Newsletter",
                href: "/dashboard/newsletter",
                icon: IconMail,
            },
            {
                name: "Cookie Consent",
                href: "/dashboard/cookies",
                icon: IconCookie,
            },
        ],
    },
    {
        title: "Settings",
        items: [
            {
                name: "Settings",
                href: "/dashboard/settings",
                icon: IconSettings,
            },
        ],
    },
];

export function DashboardSidebar() {
    const pathname = usePathname();
    const { currentBranch, setBranch, sidebarOpen, setSidebarOpen } = useDashboard();

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`admin-sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
                {/* Logo */}
                <div className="admin-logo">
                    <div className="admin-logo-icon">
                        <IconBuildingStore size={22} />
                    </div>
                    <div className="admin-logo-text">
                        <h1>Belvedere Group</h1>
                        <span>Dashboard</span>
                    </div>
                </div>

                {/* Branch Selector */}
                <div className="branch-selector">
                    <label htmlFor="branch-select">Current Branch</label>
                    <select
                        id="branch-select"
                        className="branch-dropdown"
                        value={currentBranch}
                        onChange={(e) => setBranch(e.target.value as Branch)}
                    >
                        <option value="all">All Branches</option>
                        <option value="belvedere">Belvedere Pharmacy</option>
                        <option value="kidbrook">Kidbrook Pharmacy</option>
                        <option value="Lowfield">Lowfield Pharmacy</option>
                    </select>
                </div>

                {/* Navigation */}
                <nav className="admin-nav">
                    {navigation.map((section) => (
                        <div key={section.title} className="admin-nav-section">
                            <div className="admin-nav-section-title">{section.title}</div>
                            {section.items.map((item) => {
                                const isActive = pathname === item.href ||
                                    (item.href !== "/dashboard" && pathname.startsWith(item.href));
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`admin-nav-item ${isActive ? "active" : ""}`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <item.icon className="admin-nav-icon" size={20} />
                                        <span>{item.name}</span>
                                        {item.badge && (
                                            <span className="admin-nav-badge">{item.badge}</span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </nav>

                {/* User Section */}
                <div className="admin-sidebar-footer">
                    <div className="admin-user">
                        <div className="admin-user-avatar">TK</div>
                        <div className="admin-user-info">
                            <div className="admin-user-name">TK Admin</div>
                            <div className="admin-user-role">Product Owner</div>
                        </div>
                    </div>
                    <button
                        className="admin-nav-item"
                        style={{ width: "100%", marginTop: "0.5rem", border: "none", background: "transparent", cursor: "pointer" }}
                    >
                        <IconLogout className="admin-nav-icon" size={20} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
