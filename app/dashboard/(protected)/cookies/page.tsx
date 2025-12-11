"use client";

import { useState } from "react";
import {
    IconCookie,
    IconCheck,
    IconX,
    IconSearch,
    IconChevronLeft,
    IconChevronRight,
    IconDownload,
} from "@tabler/icons-react";
import { useDashboard, branchNames } from "@/components/dashboard/dashboard-provider";
import { Button } from "@/components/ui/button";

// Mock consent data
const mockConsents = [
    { id: 1, ip: "192.168.1.xxx", branch: "belvedere", analytics: true, marketing: true, preferences: true, date: "2024-12-10T10:30:00" },
    { id: 2, ip: "192.168.2.xxx", branch: "kidbrook", analytics: true, marketing: false, preferences: true, date: "2024-12-10T09:15:00" },
    { id: 3, ip: "192.168.3.xxx", branch: "lawford", analytics: false, marketing: false, preferences: true, date: "2024-12-09T16:45:00" },
    { id: 4, ip: "192.168.4.xxx", branch: "belvedere", analytics: true, marketing: true, preferences: true, date: "2024-12-09T14:20:00" },
    { id: 5, ip: "192.168.5.xxx", branch: "kidbrook", analytics: true, marketing: false, preferences: false, date: "2024-12-09T11:00:00" },
    { id: 6, ip: "192.168.6.xxx", branch: "lawford", analytics: true, marketing: true, preferences: true, date: "2024-12-08T18:30:00" },
    { id: 7, ip: "192.168.7.xxx", branch: "belvedere", analytics: false, marketing: false, preferences: true, date: "2024-12-08T09:45:00" },
    { id: 8, ip: "192.168.8.xxx", branch: "kidbrook", analytics: true, marketing: true, preferences: true, date: "2024-12-07T15:10:00" },
    { id: 9, ip: "192.168.9.xxx", branch: "lawford", analytics: true, marketing: false, preferences: true, date: "2024-12-07T12:25:00" },
    { id: 10, ip: "192.168.10.xxx", branch: "belvedere", analytics: true, marketing: true, preferences: true, date: "2024-12-06T10:00:00" },
];

export default function CookiesPage() {
    const { currentBranch } = useDashboard();
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter consents
    const filteredConsents = mockConsents.filter((consent) => {
        const matchesBranch = currentBranch === "all" || consent.branch === currentBranch;
        const matchesSearch = consent.ip.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesBranch && matchesSearch;
    });

    const totalPages = Math.ceil(filteredConsents.length / itemsPerPage);
    const paginatedConsents = filteredConsents.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // Calculate stats
    const stats = {
        total: filteredConsents.length,
        analytics: filteredConsents.filter((c) => c.analytics).length,
        marketing: filteredConsents.filter((c) => c.marketing).length,
        preferences: filteredConsents.filter((c) => c.preferences).length,
    };

    const getPercentage = (count: number) =>
        stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <div className="page-header flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="page-title">Cookie Consent Tracking</h1>
                    <p className="page-description">
                        Monitor cookie consent data for GDPR compliance across{" "}
                        {currentBranch === "all" ? "all branches" : branchNames[currentBranch]}.
                    </p>
                </div>
                <Button className="w-fit">
                    <IconDownload size={18} className="mr-2" />
                    Export Data
                </Button>
            </div>

            {/* Consent Stats */}
            <div className="stats-grid mb-6">
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon blue">
                            <IconCookie size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{stats.total}</div>
                    <div className="stat-card-label">Total Consents Recorded</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon green">
                            <IconCheck size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{getPercentage(stats.analytics)}%</div>
                    <div className="stat-card-label">Analytics Accepted</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon purple">
                            <IconCheck size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{getPercentage(stats.marketing)}%</div>
                    <div className="stat-card-label">Marketing Accepted</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon orange">
                            <IconCheck size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{getPercentage(stats.preferences)}%</div>
                    <div className="stat-card-label">Preferences Accepted</div>
                </div>
            </div>

            {/* Consent Breakdown Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="chart-container lg:col-span-2">
                    <div className="chart-header">
                        <h3 className="chart-title">Consent Category Breakdown</h3>
                    </div>
                    <div className="space-y-4 mt-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Analytics Cookies</span>
                                <span className="text-sm text-muted-foreground">
                                    {stats.analytics} / {stats.total}
                                </span>
                            </div>
                            <div className="h-3 bg-accent rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-green-500 rounded-full transition-all duration-500"
                                    style={{ width: `${getPercentage(stats.analytics)}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Marketing Cookies</span>
                                <span className="text-sm text-muted-foreground">
                                    {stats.marketing} / {stats.total}
                                </span>
                            </div>
                            <div className="h-3 bg-accent rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${getPercentage(stats.marketing)}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Preference Cookies</span>
                                <span className="text-sm text-muted-foreground">
                                    {stats.preferences} / {stats.total}
                                </span>
                            </div>
                            <div className="h-3 bg-accent rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-orange-500 rounded-full transition-all duration-500"
                                    style={{ width: `${getPercentage(stats.preferences)}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chart-container">
                    <div className="chart-header">
                        <h3 className="chart-title">GDPR Compliance</h3>
                    </div>
                    <div className="text-center py-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                            <IconCheck size={40} className="text-green-500" />
                        </div>
                        <div className="text-lg font-semibold text-green-500 mb-1">Compliant</div>
                        <p className="text-sm text-muted-foreground">
                            All consent data is properly recorded
                        </p>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="data-table-container mb-6">
                <div className="p-4 flex flex-col md:flex-row gap-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-accent rounded-lg flex-1">
                        <IconSearch size={18} className="text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by IP address..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Consent Records Table */}
            <div className="data-table-container">
                <div className="data-table-header">
                    <h3 className="data-table-title">Consent Records</h3>
                </div>

                {paginatedConsents.length > 0 ? (
                    <>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>IP Address</th>
                                    <th>Branch</th>
                                    <th>Analytics</th>
                                    <th>Marketing</th>
                                    <th>Preferences</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedConsents.map((consent) => (
                                    <tr key={consent.id}>
                                        <td className="font-medium">{consent.ip}</td>
                                        <td className="capitalize">{consent.branch}</td>
                                        <td>
                                            {consent.analytics ? (
                                                <IconCheck size={18} className="text-green-500" />
                                            ) : (
                                                <IconX size={18} className="text-red-500" />
                                            )}
                                        </td>
                                        <td>
                                            {consent.marketing ? (
                                                <IconCheck size={18} className="text-green-500" />
                                            ) : (
                                                <IconX size={18} className="text-red-500" />
                                            )}
                                        </td>
                                        <td>
                                            {consent.preferences ? (
                                                <IconCheck size={18} className="text-green-500" />
                                            ) : (
                                                <IconX size={18} className="text-red-500" />
                                            )}
                                        </td>
                                        <td className="text-sm text-muted-foreground">
                                            {formatDate(consent.date)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-between p-4 border-t border-border">
                                <p className="text-sm text-muted-foreground">
                                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                                    {Math.min(currentPage * itemsPerPage, filteredConsents.length)} of{" "}
                                    {filteredConsents.length}
                                </p>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                    >
                                        <IconChevronLeft size={16} />
                                    </Button>
                                    <span className="text-sm">
                                        {currentPage} / {totalPages}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                    >
                                        <IconChevronRight size={16} />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="empty-state">
                        <IconCookie className="empty-state-icon" size={64} />
                        <h3 className="empty-state-title">No consent records found</h3>
                        <p className="empty-state-description">
                            There are no cookie consent records matching your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
