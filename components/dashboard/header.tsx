"use client";

import { IconMenu2, IconBell, IconSearch, IconSun, IconMoon } from "@tabler/icons-react";
import { useDashboard, branchNames } from "./dashboard-provider";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
    const { currentBranch, toggleSidebar } = useDashboard();
    const { theme, setTheme } = useTheme();

    const today = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <header className="admin-header">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <IconMenu2 size={20} />
                </button>

                {/* Breadcrumb / Branch Info */}
                <div>
                    <p className="text-sm text-muted-foreground">{today}</p>
                    <h2 className="text-lg font-semibold text-foreground">
                        {branchNames[currentBranch]}
                    </h2>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Search */}
                <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-accent rounded-lg">
                    <IconSearch size={18} className="text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none text-sm w-40 placeholder:text-muted-foreground"
                    />
                </div>

                {/* Theme Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-9 h-9"
                >
                    <IconSun size={18} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <IconMoon size={18} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>

                {/* Notifications */}
                <button className="relative p-2 rounded-lg hover:bg-accent transition-colors">
                    <IconBell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                </button>
            </div>
        </header>
    );
}
