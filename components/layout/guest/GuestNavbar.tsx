import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ThemeToggleFixComponent from "@/components/common/ThemeToggleFixComponent";

type GuestNavbarProps = {
  showAuthLinks?: boolean;
};

export default function GuestNavbar({ showAuthLinks = true }: GuestNavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b app-border-theme-color app-navbar-bg">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="app-default-font-size-h3 font-bold text-[#020826] dark:text-gray-200 tracking-tight">
            X
          </span>
          <span className="app-default-font-size-h3 font-medium app-text-theme-secondary-color tracking-tight">
            plr
          </span>
        </Link>

        {/* Right: Auth Links + Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {showAuthLinks && (
            <>
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center px-3 py-2 rounded-md text-sm font-medium app-text-theme-secondary-color app-text-hover-theme-color transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="group inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium app-theme-color-button transition-colors cursor-pointer"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </>
          )}
          <ThemeToggleFixComponent />
        </div>
      </div>
    </header>
  );
}
