"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
  collapsed: boolean;
}

export function SidebarItem({ label, href, icon: Icon, badge, collapsed }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/dashboard" && pathname.startsWith(href + "/"));

  return (
    <Link
      href={href}
      title={collapsed ? label : undefined}
      className={[
        "group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium",
        "transition-colors duration-100",
        "hover:bg-zinc-100 dark:hover:bg-zinc-800/60",
        isActive
          ? "bg-zinc-300 text-zinc-900 dark:bg-zinc-800 dark:text-white"
          : "text-zinc-500 dark:text-zinc-400",
        collapsed ? "justify-center px-0 w-10 mx-auto" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Icon
        size={16}
        className={[
          "shrink-0",
          isActive
            ? "text-zinc-900 dark:text-white"
            : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300",
        ].join(" ")}
      />
      {!collapsed && <span className="truncate leading-none py-1">{label}</span>}
      {!collapsed && badge !== undefined && badge > 0 && (
        <span className="ml-auto flex h-4 min-w-[16px] items-center justify-center rounded-full bg-zinc-900 px-1 text-[10px] font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </Link>
  );
}
