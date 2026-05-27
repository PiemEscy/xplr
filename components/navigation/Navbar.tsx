"use client";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  User,
  Settings,
  X,
} from "lucide-react";
import Image from "next/image";
import ThemeToggleFixComponent from "@/components/common/ThemeToggleFixComponent";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { BreadcrumbItem } from "@/components/ui/Breadcrumb";

interface NavbarProps {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  onMenuClick: () => void;
}

export function Navbar({ title, breadcrumbs, onMenuClick }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-3 border-b border-zinc-200 bg-white/90 px-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 transition-colors lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={16} />
      </button>

      {/* Breadcrumb / Title */}
      <div className="flex flex-1 items-center min-w-0">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <Breadcrumb items={breadcrumbs} />
        ) : title ? (
          <h1 className="truncate text-sm font-semibold text-zinc-900 dark:text-white">
            {title}
          </h1>
        ) : null}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-0.5">
        {/* Search */}
        <div className="relative flex items-center">
          {searchOpen ? (
            <div className="flex items-center gap-1">
              <input
                ref={searchRef}
                autoFocus
                type="text"
                placeholder="Search..."
                className="h-8 w-44 rounded-md border border-zinc-200 bg-zinc-50 px-3 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="app-navbar-button-style"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="app-navbar-button-style"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Notifications */}
        <button
          className="app-navbar-button-style"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {/* <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" /> */}
        </button>

        {/* Theme toggle */}
        <ThemeToggleFixComponent />

        {/* User dropdown */}
        <div className="relative ml-1" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((p) => !p)}
            className="flex h-8 items-center gap-1.5 rounded-md px-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
            aria-label="User menu"
            aria-expanded={dropdownOpen}
          >
            <Image
              src="/img/icon/PMicon.png"
              alt="Profile"
              width={24}
              height={24}
              className="h-6 w-6 rounded-full object-cover"
            />
            <ChevronDown
              size={12}
              className={[
                "text-zinc-400 transition-transform duration-150",
                dropdownOpen ? "rotate-180" : "",
              ].join(" ")}
            />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-52 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
              <div className="border-b border-zinc-100 px-3 py-2.5 dark:border-zinc-800">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                  Paolo Cuento
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                  paolomiguelcuento@gmail.com
                </p>
              </div>
              <div className="py-1">
                <button className="flex w-full items-center gap-2.5 px-3 py-2 text-xs text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors">
                  <User size={13} />
                  Profile
                </button>
                <button className="flex w-full items-center gap-2.5 px-3 py-2 text-xs text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors">
                  <Settings size={13} />
                  Settings
                </button>
              </div>
              <div className="border-t border-zinc-100 py-1 dark:border-zinc-800">
                <button className="flex w-full items-center gap-2.5 px-3 py-2 text-xs text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors">
                  <LogOut size={13} />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
