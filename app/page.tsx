"use client";

import Link from "next/link";
import ThemeToggleComponent from "@/app/components/ThemeToggleComponent";
import AbstractBackgroundComponent from "./(auth)/login/login_components/AbstractBackgroundComponent";
import ProfilePhotoComponent from "./(auth)/login/login_components/ProfilePhotoComponent";
import SocialLinkComponent from "./(auth)/login/login_components/SocialLinkComponent";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full app-bg-theme-color transition-colors overflow-hidden relative">
      <ThemeToggleComponent />

      {/* Left Side: Visual/Branding Section (Hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-col w-5/12 relative bg-neutral-900 items-center justify-center p-12 -mt-30">
          <AbstractBackgroundComponent />
          <ProfilePhotoComponent />
          <SocialLinkComponent />
      </div>

      {/* Right Side: CTA / Info Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 relative">
        <div className="w-full max-w-lg space-y-8 text-center">
          <h2 className="app-default-font-size-h4 font-extrabold app-text-theme-color transition-colors">
            Welcome to XPLR
          </h2>
          <p className="app-text-theme-secondary-color transition-colors">
            Start your journey today. Explore features, connect with others, and grow with us.
          </p>

          {/* Primary CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/login"
              className="app-button-main-style w-full flex items-center justify-center"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="app-button-secondary-style w-full flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>

          {/* Optional Features / Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-colors">
              <h3 className="font-semibold text-lg app-text-theme-color">Secure</h3>
              <p className="mt-2 app-text-theme-secondary-color">
                Your data is safe with us. We follow industry-standard security protocols.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-colors">
              <h3 className="font-semibold text-lg app-text-theme-color">Fast</h3>
              <p className="mt-2 app-text-theme-secondary-color">
                Experience lightning-fast performance across all platforms.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-colors">
              <h3 className="font-semibold text-lg app-text-theme-color">Reliable</h3>
              <p className="mt-2 app-text-theme-secondary-color">
                99.9% uptime so you can always stay connected and productive.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-colors">
              <h3 className="font-semibold text-lg app-text-theme-color">Customizable</h3>
              <p className="mt-2 app-text-theme-secondary-color">
                Tailor your experience with intuitive and flexible features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}