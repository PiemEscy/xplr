"use client";

import { Mail, Lock, ArrowRight, Github, Chrome} from "lucide-react";
import Link from "next/link";
import ThemeToggleComponent from "@/app/components/ThemeToggleComponent";
import ProfilePhotoComponent from "./login_components/ProfilePhotoComponent";
import SocialLinkComponent from "./login_components/SocialLinkComponent";
import DefaultLabelComponent from "@/app/components/DefaultLabelComponent";

export default function LoginPage() {


    return (
        <div className="flex min-h-screen w-full app-bg-theme-color transition-colors">

            <ThemeToggleComponent />
            {/* Left Side - Hero / Branding */}
            <div className="hidden lg:flex lg:flex-col w-1/2 relative app-bg-theme-color-mirror items-center justify-center overflow-hidden -mt-30">
                <ProfilePhotoComponent/>
                <SocialLinkComponent/>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 relative">
                <div className="w-full max-w-sm space-y-8">
                    <div className="text-center">
                        <h2 className="app-default-font-size-h4 font-bold tracking-tight app-text-theme-color transition-colors">
                            Welcome back
                        </h2>
                        <p className="mt-2 app-default-font-size app-text-theme-color transition-colors">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <DefaultLabelComponent label="Email" htmlFor="email" />
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 app-text-theme-color" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="app-default-input-style"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <DefaultLabelComponent label="Password" htmlFor="password" />
                                <Link
                                    href="/forgot-password"
                                    className="app-default-font-size app-text-theme-secondary-color app-text-hover-theme-color transition-colors underline underline-offset-4"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 app-text-theme-color" />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="app-default-input-style"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="app-button-main-style"
                        >
                            Sign in
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t app-border-theme-color transition-colors" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="app-bg-theme-color app-text-theme-secondary-color px-2 transition-colors">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="app-button-secondary-style"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </button>
                        <button
                            type="button"
                            className="app-button-secondary-style"
                        >
                            <Chrome className="mr-2 h-4 w-4" />
                            Google
                        </button>
                    </div>

                    <p className="px-8 text-center app-default-font-size app-text-theme-secondary-color transition-colors">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="underline underline-offset-4 app-default-font-size app-text-theme-secondary-color app-text-hover-theme-color transition-all"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
