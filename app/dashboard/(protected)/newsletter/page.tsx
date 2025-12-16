"use client";

import { useState } from "react";
import {
    Mail as IconMail,
    Download as IconDownload,
    Trash as IconTrash,
    Search as IconSearch,
    ChevronLeft as IconChevronLeft,
    ChevronRight as IconChevronRight,
    UserPlus as IconUserPlus,
} from "lucide-react";
import { useDashboard, branchNames } from "@/components/dashboard/dashboard-provider";
import { Button } from "@/components/ui/button";

// Mock data - Replace with real API calls
const mockSubscribers = [
    { id: 1, email: "sarah.johnson@email.com", branch: "belvedere", subscribed: "2024-12-10T10:30:00", source: "Homepage" },
    { id: 2, email: "james.wilson@gmail.com", branch: "kidbrook", subscribed: "2024-12-09T14:15:00", source: "Blog" },
    { id: 3, email: "emma.thompson@outlook.com", branch: "Lowfield", subscribed: "2024-12-09T09:45:00", source: "Footer" },
    { id: 4, email: "michael.brown@yahoo.com", branch: "belvedere", subscribed: "2024-12-08T16:00:00", source: "Popup" },
    { id: 5, email: "lisa.anderson@email.com", branch: "kidbrook", subscribed: "2024-12-08T11:30:00", source: "Homepage" },
    { id: 6, email: "robert.davis@email.com", branch: "Lowfield", subscribed: "2024-12-07T10:00:00", source: "Footer" },
    { id: 7, email: "jennifer.clark@gmail.com", branch: "belvedere", subscribed: "2024-12-07T15:45:00", source: "Homepage" },
    { id: 8, email: "david.miller@outlook.com", branch: "kidbrook", subscribed: "2024-12-06T09:15:00", source: "Blog" },
    { id: 9, email: "amanda.white@email.com", branch: "belvedere", subscribed: "2024-12-05T12:00:00", source: "Popup" },
    { id: 10, email: "chris.taylor@gmail.com", branch: "Lowfield", subscribed: "2024-12-04T18:30:00", source: "Footer" },
    { id: 11, email: "kelly.martin@yahoo.com", branch: "kidbrook", subscribed: "2024-12-03T08:45:00", source: "Homepage" },
    { id: 12, email: "steve.garcia@outlook.com", branch: "belvedere", subscribed: "2024-12-02T14:20:00", source: "Blog" },
];

export default function NewsletterPage() {
    const { currentBranch } = useDashboard();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubscribers, setSelectedSubscribers] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter subscribers
    const filteredSubscribers = mockSubscribers.filter((subscriber) => {
        const matchesBranch = currentBranch === "all" || subscriber.branch === currentBranch;
        const matchesSearch = subscriber.email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesBranch && matchesSearch;
    });

    const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
    const paginatedSubscribers = filteredSubscribers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const toggleSelectAll = () => {
        if (selectedSubscribers.length === paginatedSubscribers.length) {
            setSelectedSubscribers([]);
        } else {
            setSelectedSubscribers(paginatedSubscribers.map((s) => s.id));
        }
    };

    const toggleSelect = (id: number) => {
        setSelectedSubscribers((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    // Stats
    const stats = {
        total: filteredSubscribers.length,
        thisWeek: filteredSubscribers.filter((s) => {
            const date = new Date(s.subscribed);
            const weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);
            return date >= weekAgo;
        }).length,
        thisMonth: filteredSubscribers.filter((s) => {
            const date = new Date(s.subscribed);
            const monthAgo = new Date();
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            return date >= monthAgo;
        }).length,
    };

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <div className="page-header flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="page-title">Newsletter Subscribers</h1>
                    <p className="page-description">
                        Manage newsletter subscriptions from{" "}
                        {currentBranch === "all" ? "all branches" : branchNames[currentBranch]}.
                    </p>
                </div>
                <Button className="w-fit">
                    <IconDownload size={18} className="mr-2" />
                    Export Subscribers
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid mb-6" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon green">
                            <IconMail size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{stats.total}</div>
                    <div className="stat-card-label">Total Subscribers</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon blue">
                            <IconUserPlus size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{stats.thisWeek}</div>
                    <div className="stat-card-label">New This Week</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-card-icon purple">
                            <IconUserPlus size={24} />
                        </div>
                    </div>
                    <div className="stat-card-value">{stats.thisMonth}</div>
                    <div className="stat-card-label">New This Month</div>
                </div>
            </div>

            {/* Search & Actions */}
            <div className="data-table-container mb-6">
                <div className="p-4 flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-accent rounded-lg flex-1">
                        <IconSearch size={18} className="text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by email..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Bulk Actions */}
                    {selectedSubscribers.length > 0 && (
                        <Button variant="destructive" size="sm">
                            <IconTrash size={16} className="mr-2" />
                            Delete ({selectedSubscribers.length})
                        </Button>
                    )}
                </div>
            </div>

            {/* Subscribers Table */}
            <div className="data-table-container">
                <div className="data-table-header">
                    <h3 className="data-table-title">
                        {filteredSubscribers.length} Subscriber{filteredSubscribers.length !== 1 ? "s" : ""}
                    </h3>
                </div>

                {paginatedSubscribers.length > 0 ? (
                    <>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: 40 }}>
                                        <input
                                            type="checkbox"
                                            checked={
                                                selectedSubscribers.length === paginatedSubscribers.length &&
                                                paginatedSubscribers.length > 0
                                            }
                                            onChange={toggleSelectAll}
                                            className="w-4 h-4 rounded border-border"
                                        />
                                    </th>
                                    <th>Email</th>
                                    <th>Branch</th>
                                    <th>Source</th>
                                    <th>Subscribed Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedSubscribers.map((subscriber) => (
                                    <tr key={subscriber.id}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={selectedSubscribers.includes(subscriber.id)}
                                                onChange={() => toggleSelect(subscriber.id)}
                                                className="w-4 h-4 rounded border-border"
                                            />
                                        </td>
                                        <td>
                                            <div className="font-medium">{subscriber.email}</div>
                                        </td>
                                        <td className="capitalize">{subscriber.branch}</td>
                                        <td>
                                            <span className="status-badge new">{subscriber.source}</span>
                                        </td>
                                        <td className="text-sm text-muted-foreground">
                                            {formatDate(subscriber.subscribed)}
                                        </td>
                                        <td>
                                            <button
                                                className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors"
                                                title="Delete"
                                            >
                                                <IconTrash size={16} />
                                            </button>
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
                                    {Math.min(currentPage * itemsPerPage, filteredSubscribers.length)} of{" "}
                                    {filteredSubscribers.length}
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
                        <IconMail className="empty-state-icon" size={64} />
                        <h3 className="empty-state-title">No subscribers found</h3>
                        <p className="empty-state-description">
                            There are no newsletter subscribers matching your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
