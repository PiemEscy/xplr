"use client";
import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { SidebarGroup } from "./SidebarGroup";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={[
        "hidden lg:flex flex-col shrink-0",
        "border-r border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-950",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-[68px]" : "w-60",
      ].join(" ")}
    >
      {/* Logo */}
      <div
        className={[
          "flex h-14 shrink-0 items-center border-b border-zinc-200 dark:border-zinc-800",
          collapsed ? "justify-center px-3" : "px-4",
        ].join(" ")}
      >
        <Link href="/dashboard" className="flex items-center gap-2.5 min-w-0">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-zinc-900">
            X
          </span>
          {!collapsed && (
            <span className="truncate text-sm font-semibold text-zinc-900 dark:text-white">
              XPLR
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
        <div className="flex flex-col gap-5">
          {navigationConfig.map((group) => (
            <SidebarGroup key={group.label} group={group} collapsed={collapsed} />
          ))}
        </div>
      </nav>

      {/* Collapse toggle */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 p-3">
        <button
          onClick={onToggle}
          className={[
            "flex w-full items-center gap-2 rounded-lg px-2 py-2",
            "text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600",
            "dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
            "transition-colors duration-100",
            collapsed ? "justify-center" : "",
          ].join(" ")}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <PanelLeftOpen size={15} /> : <PanelLeftClose size={15} />}
          {!collapsed && (
            <span className="text-xs font-medium">Collapse</span>
          )}
        </button>
      </div>
    </aside>
  );
}
