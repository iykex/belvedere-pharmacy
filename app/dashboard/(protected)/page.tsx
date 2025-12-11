"use client";

import {
    IconMessages,
    IconMail,
    IconUsers,
    IconCookie,
    IconArrowUpRight,
    IconArrowDownRight,
    IconEye,
    IconCalendar,
} from "@tabler/icons-react";
import { useDashboard, branchNames } from "@/components/dashboard/dashboard-provider";
import Link from "next/link";

// Mock data - Replace with real API calls
const mockStats = {
    all: {
        consultations: { value: 48, trend: 12, up: true },
        subscribers: { value: 1247, trend: 8, up: true },
        visitors: { value: 15420, trend: 5, up: true },
        cookieConsent: { value: 89, trend: 2, up: true },
    },
    belvedere: {
        consultations: { value: 22, trend: 15, up: true },
        subscribers: { value: 523, trend: 12, up: true },
        visitors: { value: 6840, trend: 8, up: true },
        cookieConsent: { value: 92, trend: 3, up: true },
    },
    kidbrook: {
        consultations: { value: 15, trend: 5, up: false },
        subscribers: { value: 412, trend: 6, up: true },
        visitors: { value: 4980, trend: 2, up: true },
        cookieConsent: { value: 87, trend: 1, up: false },
    },
    lawford: {
        consultations: { value: 11, trend: 8, up: true },
        subscribers: { value: 312, trend: 4, up: true },
        visitors: { value: 3600, trend: 3, up: true },
        cookieConsent: { value: 88, trend: 2, up: true },
    },
};

const mockRecentConsultations = [
    {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        service: "Blood Pressure Check",
        branch: "Belvedere",
        date: "Dec 10, 2024",
        status: "new",
    },
    {
        id: 2,
        name: "James Wilson",
        email: "jwilson@gmail.com",
        service: "Flu Vaccination",
        branch: "Kidbrook",
        date: "Dec 9, 2024",
        status: "pending",
    },
    {
        id: 3,
        name: "Emma Thompson",
        email: "emma.t@outlook.com",
        service: "Travel Health Advice",
        branch: "Lawford",
        date: "Dec 9, 2024",
        status: "completed",
    },
    {
        id: 4,
        name: "Michael Brown",
        email: "m.brown@yahoo.com",
        service: "Medicine Use Review",
        branch: "Belvedere",
        date: "Dec 8, 2024",
        status: "completed",
    },
    {
        id: 5,
        name: "Lisa Anderson",
        email: "lisa.and@email.com",
        service: "Pharmacy First - UTI",
        branch: "Kidbrook",
        date: "Dec 8, 2024",
        status: "new",
    },
];

export default function AdminDashboard() {
    const { currentBranch } = useDashboard();
    const stats = mockStats[currentBranch];

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Dashboard Overview</h1>
                <p className="page-description">
                    Welcome back! Here&apos;s what&apos;s happening across{" "}
                    {currentBranch === "all" ? "all branches" : branchNames[currentBranch]}.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {/* Consultations */}
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon blue">
                            <IconMessages size={24} />
                        </div>
                        <div className={`stat-card-trend ${stats.consultations.up ? "up" : "down"}`}>
                            {stats.consultations.up ? (
                                <IconArrowUpRight size={14} />
                            ) : (
                                <IconArrowDownRight size={14} />
                            )}
                            {stats.consultations.trend}%
                        </div>
                    </div>
                    <div className="stat-card-value">{stats.consultations.value}</div>
                    <div className="stat-card-label">New Consultations</div>
                </div>

                {/* Newsletter Subscribers */}
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon green">
                            <IconMail size={24} />
                        </div>
                        <div className={`stat-card-trend ${stats.subscribers.up ? "up" : "down"}`}>
                            {stats.subscribers.up ? (
                                <IconArrowUpRight size={14} />
                            ) : (
                                <IconArrowDownRight size={14} />
                            )}
                            {stats.subscribers.trend}%
                        </div>
                    </div>
                    <div className="stat-card-value">{stats.subscribers.value.toLocaleString()}</div>
                    <div className="stat-card-label">Newsletter Subscribers</div>
                </div>

                {/* Website Visitors */}
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon purple">
                            <IconEye size={24} />
                        </div>
                        <div className={`stat-card-trend ${stats.visitors.up ? "up" : "down"}`}>
                            {stats.visitors.up ? (
                                <IconArrowUpRight size={14} />
                            ) : (
                                <IconArrowDownRight size={14} />
                            )}
                            {stats.visitors.trend}%
                        </div>
                    </div>
                    <div className="stat-card-value">{stats.visitors.value.toLocaleString()}</div>
                    <div className="stat-card-label">Website Visitors (30d)</div>
                </div>

                {/* Cookie Consent Rate */}
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon orange">
                            <IconCookie size={24} />
                        </div>
                        <div className={`stat-card-trend ${stats.cookieConsent.up ? "up" : "down"}`}>
                            {stats.cookieConsent.up ? (
                                <IconArrowUpRight size={14} />
                            ) : (
                                <IconArrowDownRight size={14} />
                            )}
                            {stats.cookieConsent.trend}%
                        </div>
                    </div>
                    <div className="stat-card-value">{stats.cookieConsent.value}%</div>
                    <div className="stat-card-label">Cookie Consent Rate</div>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Consultations */}
                <div className="data-table-container">
                    <div className="data-table-header">
                        <h3 className="data-table-title">Recent Consultations</h3>
                        <Link
                            href="/dashboard/consultations"
                            className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                            View All
                            <IconArrowUpRight size={14} />
                        </Link>
                    </div>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockRecentConsultations.slice(0, 5).map((consultation) => (
                                <tr key={consultation.id}>
                                    <td>
                                        <div>
                                            <div className="font-medium">{consultation.name}</div>
                                            <div className="text-xs text-muted-foreground">
                                                {consultation.branch}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{consultation.service}</td>
                                    <td>
                                        <span className={`status-badge ${consultation.status}`}>
                                            {consultation.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                    {/* Upcoming Tasks */}
                    <div className="chart-container">
                        <div className="chart-header">
                            <h3 className="chart-title">Quick Actions</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                href="/dashboard/consultations"
                                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all"
                            >
                                <div className="stat-card-icon blue" style={{ width: 40, height: 40 }}>
                                    <IconMessages size={20} />
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Consultations</div>
                                    <div className="text-xs text-muted-foreground">Manage requests</div>
                                </div>
                            </Link>
                            <Link
                                href="/dashboard/newsletter"
                                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all"
                            >
                                <div className="stat-card-icon green" style={{ width: 40, height: 40 }}>
                                    <IconMail size={20} />
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Newsletter</div>
                                    <div className="text-xs text-muted-foreground">View subscribers</div>
                                </div>
                            </Link>
                            <Link
                                href="/dashboard/analytics"
                                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all"
                            >
                                <div className="stat-card-icon purple" style={{ width: 40, height: 40 }}>
                                    <IconUsers size={20} />
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Analytics</div>
                                    <div className="text-xs text-muted-foreground">View traffic</div>
                                </div>
                            </Link>
                            <Link
                                href="/dashboard/settings"
                                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all"
                            >
                                <div className="stat-card-icon orange" style={{ width: 40, height: 40 }}>
                                    <IconCalendar size={20} />
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Settings</div>
                                    <div className="text-xs text-muted-foreground">Configuration</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Branch Performance */}
                    {currentBranch === "all" && (
                        <div className="chart-container">
                            <div className="chart-header">
                                <h3 className="chart-title">Branch Performance This Month</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#3B9FE7]"></div>
                                        <span className="text-sm">Belvedere</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-32 bg-accent rounded-full overflow-hidden">
                                            <div className="h-full bg-[#3B9FE7] rounded-full" style={{ width: "68%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium">6.8k</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
                                        <span className="text-sm">Kidbrook</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-32 bg-accent rounded-full overflow-hidden">
                                            <div className="h-full bg-[#22c55e] rounded-full" style={{ width: "50%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium">5.0k</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div>
                                        <span className="text-sm">Lawford</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-32 bg-accent rounded-full overflow-hidden">
                                            <div className="h-full bg-[#8b5cf6] rounded-full" style={{ width: "36%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium">3.6k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
