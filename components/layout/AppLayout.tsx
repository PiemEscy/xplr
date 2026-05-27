"use client";
import type { ReactNode } from "react";
import { useSidebar } from "@/hooks/useSidebar";
import { Sidebar } from "@/components/navigation/Sidebar";
import { MobileNav } from "@/components/navigation/MobileNav";
import { Navbar } from "@/components/navigation/Navbar";
import { PageContainer } from "./PageContainer";
import type { BreadcrumbItem } from "@/components/ui/Breadcrumb";

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function AppLayout({
  children,
  title,
  breadcrumbs,
  maxWidth,
}: AppLayoutProps) {
  const { collapsed, toggle, mobileOpen, openMobile, closeMobile } =
    useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      {/* Desktop sidebar */}
      <Sidebar collapsed={collapsed} onToggle={toggle} />

      {/* Mobile navigation drawer */}
      <MobileNav open={mobileOpen} onClose={closeMobile} />

      {/* Main column: navbar + scrollable content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar
          title={title}
          breadcrumbs={breadcrumbs}
          onMenuClick={openMobile}
        />
        <PageContainer maxWidth={maxWidth}>{children}</PageContainer>
      </div>
    </div>
  );
}
