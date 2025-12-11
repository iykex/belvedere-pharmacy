"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Branch = "belvedere" | "kidbrook" | "lawford" | "all";

interface DashboardContextType {
    currentBranch: Branch;
    setBranch: (branch: Branch) => void;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    toggleSidebar: () => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
    const [currentBranch, setCurrentBranch] = useState<Branch>("all");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const setBranch = (branch: Branch) => {
        setCurrentBranch(branch);
        // Could also trigger data refresh here
    };

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <DashboardContext.Provider
            value={{
                currentBranch,
                setBranch,
                sidebarOpen,
                setSidebarOpen,
                toggleSidebar,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
}

export function useDashboard() {
    const context = useContext(DashboardContext);
    if (context === undefined) {
        throw new Error("useDashboard must be used within a DashboardProvider");
    }
    return context;
}

// Branch display names
export const branchNames: Record<Branch, string> = {
    all: "All Branches",
    belvedere: "Belvedere Pharmacy",
    kidbrook: "Kidbrook Pharmacy",
    lawford: "Lawford Pharmacy",
};

// Branch colors for visual distinction
export const branchColors: Record<Branch, string> = {
    all: "#3B9FE7",
    belvedere: "#3B9FE7",
    kidbrook: "#22c55e",
    lawford: "#8b5cf6",
};

