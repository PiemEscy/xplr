import type { NavGroup } from "@/config/navigation";
import { SidebarItem } from "./SidebarItem";

interface SidebarGroupProps {
  group: NavGroup;
  collapsed: boolean;
}

export function SidebarGroup({ group, collapsed }: SidebarGroupProps) {
  return (
    <div className="flex flex-col gap-0.5">
      {!collapsed && (
        <p className="mb-1 px-2.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          {group.label}
        </p>
      )}
      {group.items.map((item) => (
        <SidebarItem key={item.href} {...item} collapsed={collapsed} />
      ))}
    </div>
  );
}
