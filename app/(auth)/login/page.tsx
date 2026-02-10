"use client";

import { Mail, Lock, ArrowRight, Github, Chrome, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ThemeToggleComponent from "@/app/components/ThemeToggleComponent";
import DefaultLabelComponent from "@/app/components/DefaultLabelComponent";
import AbstractBackgroundComponent from "./login_components/AbstractBackgroundComponent";
import ProfilePhotoComponent from "./login_components/ProfilePhotoComponent";
import SocialLinkComponent from "./login_components/SocialLinkComponent";

export default function LoginPage() {

    return (
        <div className="flex min-h-screen w-full app-bg-theme-color transition-colors overflow-hidden">
            <ThemeToggleComponent />

            {/* Left Side: Visual/Branding Section (Hidden on mobile) */}
            <div className="hidden lg:flex lg:flex-col w-7/12 relative bg-neutral-900 items-center justify-center p-12 -mt-30">
                <AbstractBackgroundComponent />
                <ProfilePhotoComponent />
                <SocialLinkComponent />
            </div>

            {/* Right Side: Login Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 relative">
                {/* Mobile-only logo or header could go here */}
                
                <div className="w-full max-w-sm space-y-8">
                    <div className="text-center">
                        <h2 className="app-default-font-size-h4 font-extrabold tracking-tight app-text-theme-color transition-colors">
                            Welcome to XPLR
                        </h2>
                        <p className="mt-2 app-default-font-size app-text-theme-secondary-color transition-colors">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-2">
                            <DefaultLabelComponent label="Email" htmlFor="email" />
                            <div className="relative group">
                                <Mail className="absolute left-3 top-3.5 h-4 w-4 app-text-theme-secondary-color group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="app-default-input-style pl-10" // Added padding for icon
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <DefaultLabelComponent label="Password" htmlFor="password" />
                                <Link
                                    href="/forgot-password"
                                    className="text-xs app-text-theme-secondary-color hover:text-blue-500 transition-colors underline underline-offset-4"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-3.5 h-4 w-4 app-text-theme-secondary-color group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="app-default-input-style pl-10" // Added padding for icon
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="app-button-main-style w-full flex items-center justify-center group"
                        >
                            Sign in
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="app-bg-theme-color app-text-theme-secondary-color px-2">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="app-button-secondary-style flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </button>
                        <button type="button" className="app-button-secondary-style flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                            <Chrome className="mr-2 h-4 w-4" />
                            Google
                        </button>
                    </div>

                    <p className="text-center text-sm app-text-theme-secondary-color">
                        Don't have an account?{" "}
                        <Link href="/register" className="font-semibold text-blue-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}