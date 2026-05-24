"use client";

import ThemeToggleComponent from "@/components/common/ThemeToggleComponent";
import LoginBrandingPanel from "./login_components/LoginBrandingPanel";
import LoginFormPanel from "./login_components/LoginFormPanel";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full app-bg-theme-color transition-colors overflow-hidden">

            {/* Top subtle glow overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

            <ThemeToggleComponent />
            <LoginBrandingPanel />
            <LoginFormPanel />
        </div>
    );
}