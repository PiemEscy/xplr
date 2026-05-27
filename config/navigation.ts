import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  FileText,
  Shield,
  Bell,
  HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navigationConfig: NavGroup[] = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Manage",
    items: [
      { label: "Documents", href: "/dashboard/documents", icon: FileText },
      { label: "Notifications", href: "/dashboard/notifications", icon: Bell, badge: 3 },
      { label: "Security", href: "/dashboard/security", icon: Shield },
      { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Settings", href: "/dashboard/settings", icon: Settings },
      { label: "Help", href: "/dashboard/help", icon: HelpCircle },
      { label: "Users", href: "/dashboard/users", icon: Users },
    ],
  },
];
