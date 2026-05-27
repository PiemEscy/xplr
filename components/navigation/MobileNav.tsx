"use client";
import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { SidebarGroup } from "./SidebarGroup";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden
        className={[
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden",
          "transition-opacity duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Drawer */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col lg:hidden",
          "bg-white dark:bg-zinc-950",
          "border-r border-zinc-200 dark:border-zinc-800",
          "transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-4">
          <Link
            href="/dashboard"
            onClick={onClose}
            className="flex items-center gap-2.5"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-zinc-900">
              X
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-white">
              XPLR
            </span>
          </Link>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 transition-colors"
            aria-label="Close navigation"
          >
            <X size={15} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="flex flex-col gap-5">
            {navigationConfig.map((group) => (
              <SidebarGroup key={group.label} group={group} collapsed={false} />
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
