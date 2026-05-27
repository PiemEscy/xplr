import { ReactNode } from "react";
import GuestNavbar from "./GuestNavbar";
import FooterSection from "@/components/sections/FooterSection";
import ThemeToggleFixComponent from "@/components/common/ThemeToggleFixComponent";

type GuestLayoutVariant = "page" | "auth";

type GuestLayoutProps = {
  children: ReactNode;
  /**
   * page — shows GuestNavbar + FooterSection (for landing/public pages)
   * auth — strips chrome; injects floating theme toggle (for login/register/etc.)
   */
  variant?: GuestLayoutVariant;
  showNavbar?: boolean;
  showFooter?: boolean;
};

export default function GuestLayout({
  children,
  variant = "page",
  showNavbar,
  showFooter,
}: GuestLayoutProps) {
  const isPage = variant === "page";
  const displayNavbar = showNavbar ?? isPage;
  const displayFooter = showFooter ?? isPage;

  return (
    <div className="flex min-h-screen flex-col app-bg-theme-color transition-colors relative">
      {displayNavbar ? (
        <GuestNavbar />
      ) : (
        /* Floating theme toggle for chrome-less auth pages */
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggleFixComponent />
        </div>
      )}

      <main className="flex-1 flex flex-col">{children}</main>

      {displayFooter && <FooterSection />}
    </div>
  );
}
