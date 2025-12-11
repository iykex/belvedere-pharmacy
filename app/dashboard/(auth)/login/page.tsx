"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    IconBuildingStore,
    IconMail,
    IconLock,
    IconEye,
    IconEyeOff,
    IconLoader2,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function DashboardLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate authentication - Replace with real auth
        setTimeout(() => {
            if (email === "admin@belvederepharmacy.net" && password === "admin123") {
                toast.success("Welcome back!");
                router.push("/dashboard");
            } else {
                toast.error("Invalid credentials. Please try again.");
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 159, 231, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
                    }}
                />
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-primary/25">
                        <IconBuildingStore size={32} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
                    <p className="text-muted-foreground mt-2">
                        Sign in to the Belvedere Pharmacy Group Dashboard
                    </p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={handleLogin}
                    className="bg-card border border-border rounded-2xl p-8 shadow-xl"
                >
                    <div className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <IconMail
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@belvederepharmacy.net"
                                    className="w-full pl-10 pr-4 py-3 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <IconLock
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-12 py-3 bg-accent border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-border"
                                />
                                <span className="text-sm text-muted-foreground">
                                    Remember me
                                </span>
                            </label>
                            <a
                                href="#"
                                className="text-sm text-primary hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full py-3"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <IconLoader2 size={18} className="mr-2 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </div>
                </form>

                {/* Demo Credentials */}
                <div className="mt-6 p-4 bg-accent/50 border border-border rounded-xl">
                    <p className="text-xs text-muted-foreground text-center mb-2">
                        Demo Credentials
                    </p>
                    <div className="text-center text-sm">
                        <p>
                            <span className="text-muted-foreground">Email:</span>{" "}
                            <code className="text-primary">admin@belvederepharmacy.net</code>
                        </p>
                        <p>
                            <span className="text-muted-foreground">Password:</span>{" "}
                            <code className="text-primary">admin123</code>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-muted-foreground mt-8">
                    © 2024 Belvedere Pharmacy Group. All rights reserved.
                </p>
            </div>
        </div>
    );
}
