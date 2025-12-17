"use client";

import {
    BarChart as IconChartBar,
    Users as IconUsers,
    Eye as IconEye,
    Clock as IconClock,
    Monitor as IconDeviceDesktop,
    Smartphone as IconDeviceMobile,
    Chrome as IconBrandGoogle,
    Globe as IconWorld,
    ArrowUpRight as IconArrowUpRight,
} from "lucide-react";
import { useDashboard, branchNames } from "@/components/dashboard/dashboard-provider";

// Mock analytics data
const mockAnalytics = {
    all: {
        visitors: 15420,
        pageViews: 48320,
        avgDuration: "2:45",
        bounceRate: 42,
        topPages: [
            { page: "/", views: 8420, percentage: 45 },
            { page: "/services", views: 4280, percentage: 23 },
            { page: "/pharmacy-first", views: 3120, percentage: 17 },
            { page: "/contact-us", views: 1840, percentage: 10 },
            { page: "/about-us", views: 960, percentage: 5 },
        ],
        devices: { desktop: 62, mobile: 34, tablet: 4 },
        sources: [
            { source: "Google Search", visitors: 8540, percentage: 55 },
            { source: "Direct", visitors: 3080, percentage: 20 },
            { source: "Social Media", visitors: 2160, percentage: 14 },
            { source: "Referral", visitors: 1640, percentage: 11 },
        ],
    },
    belvedere: {
        visitors: 6840,
        pageViews: 21450,
        avgDuration: "2:58",
        bounceRate: 38,
        topPages: [
            { page: "/", views: 3420, percentage: 50 },
            { page: "/services", views: 1580, percentage: 23 },
            { page: "/pharmacy-first", views: 1020, percentage: 15 },
            { page: "/contact-us", views: 620, percentage: 9 },
            { page: "/about-us", views: 200, percentage: 3 },
        ],
        devices: { desktop: 58, mobile: 38, tablet: 4 },
        sources: [
            { source: "Google Search", visitors: 3760, percentage: 55 },
            { source: "Direct", visitors: 1370, percentage: 20 },
            { source: "Social Media", visitors: 960, percentage: 14 },
            { source: "Referral", visitors: 750, percentage: 11 },
        ],
    },
    kidbrook: {
        visitors: 4980,
        pageViews: 15620,
        avgDuration: "2:32",
        bounceRate: 45,
        topPages: [
            { page: "/", views: 2490, percentage: 50 },
            { page: "/services", views: 1494, percentage: 30 },
            { page: "/pharmacy-first", views: 498, percentage: 10 },
            { page: "/contact-us", views: 398, percentage: 8 },
            { page: "/about-us", views: 100, percentage: 2 },
        ],
        devices: { desktop: 64, mobile: 32, tablet: 4 },
        sources: [
            { source: "Google Search", visitors: 2740, percentage: 55 },
            { source: "Direct", visitors: 996, percentage: 20 },
            { source: "Social Media", visitors: 698, percentage: 14 },
            { source: "Referral", visitors: 546, percentage: 11 },
        ],
    },
    Lowfield: {
        visitors: 3600,
        pageViews: 11250,
        avgDuration: "2:41",
        bounceRate: 44,
        topPages: [
            { page: "/", views: 1620, percentage: 45 },
            { page: "/services", views: 1206, percentage: 33 },
            { page: "/pharmacy-first", views: 360, percentage: 10 },
            { page: "/contact-us", views: 288, percentage: 8 },
            { page: "/about-us", views: 126, percentage: 4 },
        ],
        devices: { desktop: 66, mobile: 30, tablet: 4 },
        sources: [
            { source: "Google Search", visitors: 1980, percentage: 55 },
            { source: "Direct", visitors: 720, percentage: 20 },
            { source: "Social Media", visitors: 504, percentage: 14 },
            { source: "Referral", visitors: 396, percentage: 11 },
        ],
    },
};

export default function AnalyticsPage() {
    const { currentBranch } = useDashboard();
    const analytics = mockAnalytics[currentBranch];

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Website Analytics</h1>
                <p className="page-description">
                    Traffic and user activity for{" "}
                    {currentBranch === "all" ? "all branches" : branchNames[currentBranch]}.
                    <span className="ml-2 text-xs text-primary">
                        <IconBrandGoogle size={14} className="inline mr-1" />
                        Google Analytics Ready
                    </span>
                </p>
            </div>

            {/* Key Metrics */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon blue">
                            <IconUsers size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{analytics.visitors.toLocaleString()}</div>
                    <div className="stat-card-label">Total Visitors (30 days)</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon green">
                            <IconEye size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{analytics.pageViews.toLocaleString()}</div>
                    <div className="stat-card-label">Page Views</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon purple">
                            <IconClock size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{analytics.avgDuration}</div>
                    <div className="stat-card-label">Avg. Session Duration</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon orange">
                            <IconChartBar size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{analytics.bounceRate}%</div>
                    <div className="stat-card-label">Bounce Rate</div>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Top Pages */}
                <div className="chart-container">
                    <div className="chart-header">
                        <h3 className="chart-title">Top Pages</h3>
                    </div>
                    <div className="space-y-4">
                        {analytics.topPages.map((page, index) => (
                            <div key={page.page} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-muted-foreground w-6">
                                        {index + 1}.
                                    </span>
                                    <span className="text-sm font-medium">{page.page}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-24 bg-accent rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full"
                                            style={{ width: `${page.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-muted-foreground w-16 text-right">
                                        {page.views.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Traffic Sources */}
                <div className="chart-container">
                    <div className="chart-header">
                        <h3 className="chart-title">Traffic Sources</h3>
                    </div>
                    <div className="space-y-4">
                        {analytics.sources.map((source) => (
                            <div key={source.source} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{
                                            backgroundColor:
                                                source.source === "Google Search"
                                                    ? "#3B9FE7"
                                                    : source.source === "Direct"
                                                        ? "#22c55e"
                                                        : source.source === "Social Media"
                                                            ? "#8b5cf6"
                                                            : "#f97316",
                                        }}
                                    ></div>
                                    <span className="text-sm font-medium">{source.source}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-muted-foreground">
                                        {source.percentage}%
                                    </span>
                                    <span className="text-sm font-medium w-16 text-right">
                                        {source.visitors.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Device Breakdown */}
                <div className="chart-container">
                    <div className="chart-header">
                        <h3 className="chart-title">Device Breakdown</h3>
                    </div>
                    <div className="flex items-center justify-around py-4">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/15 flex items-center justify-center mb-2">
                                <IconDeviceDesktop size={28} className="text-blue-500" />
                            </div>
                            <div className="text-2xl font-bold">{analytics.devices.desktop}%</div>
                            <div className="text-sm text-muted-foreground">Desktop</div>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-2">
                                <IconDeviceMobile size={28} className="text-green-500" />
                            </div>
                            <div className="text-2xl font-bold">{analytics.devices.mobile}%</div>
                            <div className="text-sm text-muted-foreground">Mobile</div>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/15 flex items-center justify-center mb-2">
                                <IconDeviceDesktop size={28} className="text-purple-500" />
                            </div>
                            <div className="text-2xl font-bold">{analytics.devices.tablet}%</div>
                            <div className="text-sm text-muted-foreground">Tablet</div>
                        </div>
                    </div>
                </div>

                {/* Google Analytics Integration */}
                <div className="chart-container">
                    <div className="chart-header">
                        <h3 className="chart-title">Google Analytics Integration</h3>
                    </div>
                    <div className="text-center py-6">
                        <div className="w-16 h-16 mx-auto rounded-xl bg-accent flex items-center justify-center mb-4">
                            <IconBrandGoogle size={32} className="text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Connect your Google Analytics account for real-time data and advanced insights.
                        </p>
                        <a
                            href="https://analytics.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                            <IconWorld size={16} />
                            Open Google Analytics
                            <IconArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
