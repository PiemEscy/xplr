import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ThemeToggleFixComponent from "../common/ThemeToggleFixComponent";

export default function TopNavBarSection() {

    const profilePhotoDimension =
        "w-12 h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 mx-auto";

    const getProfilePhoto = () => {
        return "/img/icon/PMicon.png";
    };

  return (
    <header className="sticky top-0 z-50 w-full border-b app-border-theme-color app-bg-theme-color">
      {/* Container */}
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* Logo icon representation */}
          <a className={`${profilePhotoDimension} rounded-full bg-center bg-cover`}
            style={{ backgroundImage: `url(${getProfilePhoto()})` }}
            href="https://cuento-portfolio-v4.vercel.app/"
            target="_blank"
          >
          </a>
          
          <div className="flex items-center">
            <span className="app-default-font-size-h3 font-bold app-text-theme-color tracking-tight">X</span>
            <span className="app-default-font-size-h3 font-medium app-text-theme-secondary-color tracking-tight">plr</span>
          </div>

        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex items-center gap-1 rounded-full border app-border-theme-color app-bg-theme-color-secondary p-1.5">
            <li>
              <Link 
                href="#"
                className="flex items-center rounded-full px-4 py-1.5 text-sm font-medium app-text-theme-secondary-color transition-colors app-text-hover-theme-color"
              >
                Home
              </Link>
            </li>
            <li>
              <button className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium app-text-theme-secondary-color transition-colors app-text-hover-theme-color">
                Products
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 rounded-full app-bg-theme-color-secondary app-border-theme-color px-4 py-1.5 text-sm font-medium app-text-theme-secondary-color shadow-sm ring-1 ring-white/10">
                Pages
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center rounded-full px-4 py-1.5 text-sm font-medium app-text-theme-secondary-color transition-colors app-text-hover-theme-color"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
            
                <Link
                    href="login"
                    className="hidden sm:block text-sm font-medium app-text-theme-secondary-color transition-colors app-text-hover-theme-color mx-1"
                >
                    Sign In
                </Link>
                
                <ThemeToggleFixComponent />

            </div>
      </div>
    </header>
  );
}
