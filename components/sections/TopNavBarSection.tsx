import {
  ChevronDown,
  Home,
  Package,
  FileText,
  Mail,
  Briefcase,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import ThemeToggleFixComponent from "../common/ThemeToggleFixComponent";

export default function TopNavBarSection() {

    const profilePhotoDimension =
        "w-12 h-12 md:w-12 md:h-12 lg:w-13 lg:h-12 mx-auto";

    const getProfilePhoto = () => {
        return "/img/icon/PMicon.png";
    };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#0a0a0a]">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">

        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <a
            className={`${profilePhotoDimension} rounded-full bg-center bg-cover`}
            style={{ backgroundImage: `url(${getProfilePhoto()})` }}
            href="https://cuento-portfolio-v4.vercel.app/"
            target="_blank"
          />
          
          <div className="flex items-center pl-1">
            <span className="app-default-font-size-h3 font-bold text-[#020826] dark:text-gray-300 tracking-tight">X</span>
            <span className="app-default-font-size-h3 font-medium text-slate-600 dark:text-slate-400 tracking-tight">plr</span>
          </div>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-900 bg-gray-200 dark:bg-[#0a0a0a] p-1.5">

            <li>
              <Link 
                href="#"
                className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-[#0a0a0a] dark:hover:text-zinc-50"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
            </li>

            <li>
              <button className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-[#0a0a0a] dark:hover:text-zinc-50">
                <Package className="h-4 w-4" />
                Products
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
            </li>

            <li>
              <button className="flex items-center gap-2 rounded-full bg-gray-200 dark:bg-[#0a0a0a] border-zinc-200 dark:border-zinc-900 px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 shadow-sm ring-1 ring-white/10">
                <FileText className="h-4 w-4" />
                Pages
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
            </li>

            <li>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-[#0a0a0a] dark:hover:text-zinc-50"
              >
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-[#0a0a0a] dark:hover:text-zinc-50"
              >
                <Briefcase className="h-4 w-4" />
                Portfolio
              </Link>
            </li>

          </ul>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
            <Link
                href="login"
                className="group hidden sm:flex items-center rounded-md app-default-font-size font-medium ring-offset-white transition-colors p-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50 bg-[#8c7851] text-white"
            >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <ThemeToggleFixComponent />
        </div>
      </div>
    </header>
  );
}