"use client";

import { useState } from "react";
import {
    Settings as IconSettings,
    User as IconUser,
    Bell as IconBell,
    Mail as IconMail,
    ShieldCheck as IconShieldCheck,
    Store as IconBuildingStore,
    Palette as IconPalette,
    Check as IconCheck,
} from "lucide-react";
import { useDashboard } from "@/components/dashboard/dashboard-provider";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SettingsPage() {
    const { currentBranch } = useDashboard();
    const [activeTab, setActiveTab] = useState("general");

    const handleSave = () => {
        toast.success("Settings saved successfully!");
    };

    const tabs = [
        { id: "general", label: "General", icon: IconSettings },
        { id: "branches", label: "Branches", icon: IconBuildingStore },
        { id: "notifications", label: "Notifications", icon: IconBell },
        { id: "appearance", label: "Appearance", icon: IconPalette },
        { id: "security", label: "Security", icon: IconShieldCheck },
    ];

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Settings</h1>
                <p className="page-description">
                    Manage your dashboard preferences and configuration.
                </p>
            </div>

            {/* Settings Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar Tabs */}
                <div className="lg:col-span-1">
                    <div className="chart-container p-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${activeTab === tab.id
                                    ? "bg-primary/10 text-primary"
                                    : "hover:bg-accent text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <tab.icon size={20} />
                                <span className="text-sm font-medium">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-3">
                    {/* General Settings */}
                    {activeTab === "general" && (
                        <div className="chart-container">
                            <div className="chart-header border-b border-border pb-4 mb-6">
                                <h3 className="chart-title flex items-center gap-2">
                                    <IconSettings size={20} />
                                    General Settings
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Dashboard Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Belvedere Pharmacy Group Admin"
                                        className="w-full px-4 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Admin Email
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="admin@belvederepharmacy.net"
                                        className="w-full px-4 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Time Zone
                                    </label>
                                    <select className="w-full px-4 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary">
                                        <option>Europe/London (GMT/BST)</option>
                                        <option>UTC</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Date Format
                                    </label>
                                    <select className="w-full px-4 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary">
                                        <option>DD/MM/YYYY</option>
                                        <option>MM/DD/YYYY</option>
                                        <option>YYYY-MM-DD</option>
                                    </select>
                                </div>
                                <Button onClick={handleSave}>
                                    <IconCheck size={18} className="mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Branches Settings */}
                    {activeTab === "branches" && (
                        <div className="chart-container">
                            <div className="chart-header border-b border-border pb-4 mb-6">
                                <h3 className="chart-title flex items-center gap-2">
                                    <IconBuildingStore size={20} />
                                    Branch Configuration
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { name: "Belvedere Pharmacy", domain: "belvederepharmacy.net" },
                                    { name: "Kidbrook Pharmacy", domain: "kidbrookpharmacy.net" },
                                    { name: "Lowfield Pharmacy", domain: "Lowfieldpharmacy.net" },
                                ].map((branch) => (
                                    <div
                                        key={branch.name}
                                        className="p-4 border border-border rounded-lg"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h4 className="font-medium">{branch.name}</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {branch.domain}
                                                </p>
                                            </div>
                                            <span className="status-badge completed">Active</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                    Notification Email
                                                </label>
                                                <input
                                                    type="email"
                                                    defaultValue={`info@${branch.domain}`}
                                                    className="w-full px-3 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    defaultValue="020 XXXX XXXX"
                                                    className="w-full px-3 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={handleSave}>
                                    <IconCheck size={18} className="mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Notification Settings */}
                    {activeTab === "notifications" && (
                        <div className="chart-container">
                            <div className="chart-header border-b border-border pb-4 mb-6">
                                <h3 className="chart-title flex items-center gap-2">
                                    <IconBell size={20} />
                                    Notification Preferences
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "New Consultation Requests",
                                        description:
                                            "Get notified when a new consultation is submitted",
                                        enabled: true,
                                    },
                                    {
                                        title: "Newsletter Subscriptions",
                                        description:
                                            "Get notified when someone subscribes to the newsletter",
                                        enabled: false,
                                    },
                                    {
                                        title: "Weekly Analytics Report",
                                        description:
                                            "Receive a weekly summary of website analytics",
                                        enabled: true,
                                    },
                                    {
                                        title: "Security Alerts",
                                        description:
                                            "Get notified about suspicious login attempts",
                                        enabled: true,
                                    },
                                ].map((setting) => (
                                    <div
                                        key={setting.title}
                                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                                    >
                                        <div>
                                            <h4 className="font-medium">{setting.title}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {setting.description}
                                            </p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                defaultChecked={setting.enabled}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-accent peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                ))}
                                <Button onClick={handleSave}>
                                    <IconCheck size={18} className="mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Appearance Settings */}
                    {activeTab === "appearance" && (
                        <div className="chart-container">
                            <div className="chart-header border-b border-border pb-4 mb-6">
                                <h3 className="chart-title flex items-center gap-2">
                                    <IconPalette size={20} />
                                    Appearance
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-4">
                                        Theme
                                    </label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {["light", "dark", "system"].map((theme) => (
                                            <button
                                                key={theme}
                                                className={`p-4 border rounded-lg text-center capitalize transition-all ${theme === "dark"
                                                    ? "border-primary bg-primary/10"
                                                    : "border-border hover:border-primary/50"
                                                    }`}
                                            >
                                                <div
                                                    className={`w-8 h-8 mx-auto mb-2 rounded-full ${theme === "light"
                                                        ? "bg-white border border-gray-200"
                                                        : theme === "dark"
                                                            ? "bg-gray-900"
                                                            : "bg-gradient-to-r from-white to-gray-900"
                                                        }`}
                                                ></div>
                                                <span className="text-sm font-medium">{theme}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Accent Color
                                    </label>
                                    <div className="flex gap-3">
                                        {["#3B9FE7", "#22c55e", "#8b5cf6", "#f97316", "#ef4444"].map(
                                            (color) => (
                                                <button
                                                    key={color}
                                                    className={`w-10 h-10 rounded-full transition-transform hover:scale-110 ${color === "#3B9FE7" ? "ring-2 ring-offset-2 ring-primary" : ""
                                                        }`}
                                                    style={{ backgroundColor: color }}
                                                ></button>
                                            )
                                        )}
                                    </div>
                                </div>
                                <Button onClick={handleSave}>
                                    <IconCheck size={18} className="mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Security Settings */}
                    {activeTab === "security" && (
                        <div className="chart-container">
                            <div className="chart-header border-b border-border pb-4 mb-6">
                                <h3 className="chart-title flex items-center gap-2">
                                    <IconShieldCheck size={20} />
                                    Security Settings
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div className="p-4 border border-border rounded-lg">
                                    <h4 className="font-medium mb-2 flex items-center gap-2">
                                        <IconUser size={18} />
                                        Change Password
                                    </h4>
                                    <div className="space-y-4 mt-4">
                                        <input
                                            type="password"
                                            placeholder="Current Password"
                                            className="w-full px-4 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                                        />
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            className="w-full px-4 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Confirm New Password"
                                            className="w-full px-4 py-2 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div className="p-4 border border-border rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-medium">Two-Factor Authentication</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Add an extra layer of security to your account
                                            </p>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            Enable 2FA
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 border border-border rounded-lg">
                                    <h4 className="font-medium mb-2">Active Sessions</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between py-2 border-b border-border">
                                            <div>
                                                <p className="text-sm font-medium">Current Session</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Chrome on macOS • London, UK
                                                </p>
                                            </div>
                                            <span className="status-badge completed">Active</span>
                                        </div>
                                    </div>
                                </div>
                                <Button onClick={handleSave}>
                                    <IconCheck size={18} className="mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
