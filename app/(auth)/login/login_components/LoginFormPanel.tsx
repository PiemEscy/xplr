import { Mail, Lock, ArrowRight, Github, Chrome, ArrowLeft } from "lucide-react";
import Link from "next/link";
import DefaultLabelComponent from "@/components/common/DefaultLabelComponent";

export default function LoginFormPanel() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 relative">

            {/* Back to Homepage Button */}
            <Link
                href="/"
                className="group absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 bg-white/80 hover:bg-neutral-100 dark:bg-transparent dark:text-white dark:hover:bg-neutral-800 dark:border-neutral-900 backdrop-blur-sm text-sm font-medium text-neutral-700 transition-all duration-200"
            >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            </Link>

            <div className="w-full max-w-sm space-y-8">

                {/* Header */}
                <div className="text-center">
                    <h2 className="app-default-font-size-h4 font-extrabold tracking-tight text-[#020826] dark:text-gray-300 transition-colors">
                        Welcome to XPLR
                    </h2>
                    <p className="mt-2 app-default-font-size app-text-theme-secondary-color transition-colors">
                        Enter your credentials to access your account
                    </p>
                </div>

                {/* Credential Form */}
                <form className="space-y-5">
                    <div className="space-y-2">
                        <DefaultLabelComponent label="Email" htmlFor="email" />
                        <div className="relative group">
                            <Mail className="absolute left-3 top-3.5 h-4 w-4 app-text-theme-secondary-color group-focus-within:text-blue-500 transition-colors" />
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
                                className="app-default-input-style"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="group flex items-center justify-center app-button-main-style app-button-theme-color"
                    >
                        Sign in
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </form>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                        <span className="app-bg-theme-color app-text-theme-secondary-color px-2">
                            Or continue with
                        </span>
                    </div>
                </div>

                {/* OAuth Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="app-button-secondary-style">
                        <Github className="mr-2 h-4 w-4" />
                        Github
                    </button>
                    <button type="button" className="app-button-secondary-style">
                        <Chrome className="mr-2 h-4 w-4" />
                        Google
                    </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm app-text-theme-secondary-color">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="font-semibold text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
