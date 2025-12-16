"use client";

import { useState } from "react";
import {
    MessageSquare as IconMessages,
    Filter as IconFilter,
    Download as IconDownload,
    Eye as IconEye,
    Check as IconCheck,
    X as IconX,
    Search as IconSearch,
    ChevronLeft as IconChevronLeft,
    ChevronRight as IconChevronRight,
} from "lucide-react";
import { useDashboard, branchNames } from "@/components/dashboard/dashboard-provider";
import { Button } from "@/components/ui/button";

// Mock data - Replace with real API calls
const mockConsultations = [
    {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        phone: "07123 456789",
        service: "Blood Pressure Check",
        message: "I would like to book a blood pressure check for this week if possible. I have been experiencing headaches.",
        branch: "belvedere",
        date: "2024-12-10T10:30:00",
        status: "new",
    },
    {
        id: 2,
        name: "James Wilson",
        email: "jwilson@gmail.com",
        phone: "07234 567890",
        service: "Flu Vaccination",
        message: "Looking to get my annual flu jab. Please let me know available times.",
        branch: "kidbrook",
        date: "2024-12-09T14:15:00",
        status: "pending",
    },
    {
        id: 3,
        name: "Emma Thompson",
        email: "emma.t@outlook.com",
        phone: "07345 678901",
        service: "Travel Health Advice",
        message: "Planning a trip to Thailand next month. Need advice on vaccinations.",
        branch: "Lowfield",
        date: "2024-12-09T09:45:00",
        status: "completed",
    },
    {
        id: 4,
        name: "Michael Brown",
        email: "m.brown@yahoo.com",
        phone: "07456 789012",
        service: "Medicine Use Review",
        message: "Would like to review my current medications.",
        branch: "belvedere",
        date: "2024-12-08T16:00:00",
        status: "completed",
    },
    {
        id: 5,
        name: "Lisa Anderson",
        email: "lisa.and@email.com",
        phone: "07567 890123",
        service: "Pharmacy First - UTI",
        message: "Experiencing UTI symptoms and would like consultation under Pharmacy First.",
        branch: "kidbrook",
        date: "2024-12-08T11:30:00",
        status: "new",
    },
    {
        id: 6,
        name: "Robert Davis",
        email: "rob.d@email.com",
        phone: "07678 901234",
        service: "Cholesterol Check",
        message: "Would like to book a cholesterol screening.",
        branch: "Lowfield",
        date: "2024-12-07T10:00:00",
        status: "pending",
    },
    {
        id: 7,
        name: "Jennifer Clark",
        email: "jen.clark@gmail.com",
        phone: "07789 012345",
        service: "Weight Management",
        message: "Interested in weight management consultation and advice.",
        branch: "belvedere",
        date: "2024-12-07T15:45:00",
        status: "new",
    },
    {
        id: 8,
        name: "David Miller",
        email: "d.miller@outlook.com",
        phone: "07890 123456",
        service: "Pharmacy First - Shingles",
        message: "I think I may have shingles and need urgent consultation.",
        branch: "kidbrook",
        date: "2024-12-06T09:15:00",
        status: "completed",
    },
];

export default function ConsultationsPage() {
    const { currentBranch } = useDashboard();
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [selectedConsultation, setSelectedConsultation] = useState<typeof mockConsultations[0] | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter consultations
    const filteredConsultations = mockConsultations.filter((consultation) => {
        const matchesBranch = currentBranch === "all" || consultation.branch === currentBranch;
        const matchesStatus = statusFilter === "all" || consultation.status === statusFilter;
        const matchesSearch =
            consultation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            consultation.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            consultation.service.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesBranch && matchesStatus && matchesSearch;
    });

    const totalPages = Math.ceil(filteredConsultations.length / itemsPerPage);
    const paginatedConsultations = filteredConsultations.slice(
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

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <div className="page-header flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="page-title">Consultation Submissions</h1>
                    <p className="page-description">
                        View and manage consultation requests from{" "}
                        {currentBranch === "all" ? "all branches" : branchNames[currentBranch]}.
                    </p>
                </div>
                <Button className="w-fit">
                    <IconDownload size={18} className="mr-2" />
                    Export CSV
                </Button>
            </div>

            {/* Filters */}
            <div className="data-table-container mb-6">
                <div className="p-4 flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-accent rounded-lg flex-1">
                        <IconSearch size={18} className="text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or service..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="flex items-center gap-2">
                        <IconFilter size={18} className="text-muted-foreground" />
                        <select
                            className="branch-dropdown"
                            style={{ width: "auto" }}
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="new">New</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Consultations Table */}
            <div className="data-table-container">
                <div className="data-table-header">
                    <h3 className="data-table-title">
                        {filteredConsultations.length} Consultation{filteredConsultations.length !== 1 ? "s" : ""}
                    </h3>
                </div>

                {paginatedConsultations.length > 0 ? (
                    <>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Patient</th>
                                    <th>Service</th>
                                    <th>Branch</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedConsultations.map((consultation) => (
                                    <tr key={consultation.id}>
                                        <td>
                                            <div>
                                                <div className="font-medium">{consultation.name}</div>
                                                <div className="text-xs text-muted-foreground">{consultation.email}</div>
                                            </div>
                                        </td>
                                        <td>{consultation.service}</td>
                                        <td className="capitalize">{consultation.branch}</td>
                                        <td className="text-sm text-muted-foreground">{formatDate(consultation.date)}</td>
                                        <td>
                                            <span className={`status-badge ${consultation.status}`}>
                                                {consultation.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                                                    onClick={() => setSelectedConsultation(consultation)}
                                                    title="View details"
                                                >
                                                    <IconEye size={16} />
                                                </button>
                                                <button
                                                    className="p-2 rounded-lg hover:bg-green-500/10 text-green-500 transition-colors"
                                                    title="Mark complete"
                                                >
                                                    <IconCheck size={16} />
                                                </button>
                                                <button
                                                    className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors"
                                                    title="Dismiss"
                                                >
                                                    <IconX size={16} />
                                                </button>
                                            </div>
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
                                    {Math.min(currentPage * itemsPerPage, filteredConsultations.length)} of{" "}
                                    {filteredConsultations.length}
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
                        <IconMessages className="empty-state-icon" size={64} />
                        <h3 className="empty-state-title">No consultations found</h3>
                        <p className="empty-state-description">
                            There are no consultation requests matching your filters.
                        </p>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedConsultation && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedConsultation(null)}
                >
                    <div
                        className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b border-border">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">{selectedConsultation.name}</h3>
                                    <p className="text-sm text-muted-foreground">{selectedConsultation.service}</p>
                                </div>
                                <button
                                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                                    onClick={() => setSelectedConsultation(null)}
                                >
                                    <IconX size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-medium text-muted-foreground uppercase">Email</label>
                                    <p className="text-sm">{selectedConsultation.email}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-muted-foreground uppercase">Phone</label>
                                    <p className="text-sm">{selectedConsultation.phone}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-muted-foreground uppercase">Branch</label>
                                    <p className="text-sm capitalize">{selectedConsultation.branch}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-muted-foreground uppercase">Status</label>
                                    <p>
                                        <span className={`status-badge ${selectedConsultation.status}`}>
                                            {selectedConsultation.status}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-medium text-muted-foreground uppercase">Message</label>
                                <p className="text-sm mt-1 p-3 bg-accent rounded-lg">{selectedConsultation.message}</p>
                            </div>
                            <div>
                                <label className="text-xs font-medium text-muted-foreground uppercase">Submitted</label>
                                <p className="text-sm">{formatDate(selectedConsultation.date)}</p>
                            </div>
                        </div>
                        <div className="p-6 border-t border-border flex gap-3">
                            <Button className="flex-1">
                                <IconCheck size={18} className="mr-2" />
                                Mark as Completed
                            </Button>
                            <Button variant="outline" className="flex-1">
                                Reply via Email
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
