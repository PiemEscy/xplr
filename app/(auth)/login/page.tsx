"use client";

import { Mail, Lock, ArrowRight, Github, Chrome, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ThemeToggleComponent from "@/components/common/ThemeToggleComponent";
import DefaultLabelComponent from "@/components/common/DefaultLabelComponent";

export default function LoginPage() {

    return (
        <div className="flex min-h-screen w-full bg-white dark:bg-[#0a0a0a] transition-colors overflow-hidden">

            {/* Top subtle glow overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

            <ThemeToggleComponent />

            {/* Left Side: Visual / Branding Section */}
            <div className="hidden lg:flex lg:flex-col w-5/12 relative overflow-hidden bg-[#716040] text-white p-12 justify-between">

                {/* Background Glow */}
                <div className="absolute top-[-120px] right-[-100px] w-[320px] h-[320px] rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute bottom-[-100px] left-[-80px] w-[260px] h-[260px] rounded-full bg-black/10 blur-3xl"></div>

                {/* Top Branding */}
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                            <span className="text-2xl font-bold tracking-wide">X</span>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                xplr
                            </h1>
                            <p className="text-sm text-white/70 tracking-wide">
                                explore • create • experiment
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 mt-16">
                        <div>
                            <h2 className="text-5xl font-bold leading-tight">
                                My Personal
                                <br />
                                Creative Playground
                            </h2>

                            <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-md">
                                A space to explore ideas, build experiments,
                                test new features, and turn curiosity into
                                something real.
                            </p>
                        </div>


                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="relative z-10 flex items-center justify-between pt-10">
                    <div>
                        <p className="text-sm text-white/60">
                            Crafted for experimentation
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <div className="w-2 h-2 rounded-full bg-white/70"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 relative">

                {/* Back to Homepage Button */}
                <Link
                    href="/"
                    className="group absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 bg-white/80 hover:bg-neutral-100 dark:bg-transparent dark:text-white dark:hover:bg-neutral-800 dark:border-neutral-900 backdrop-blur-sm text-sm font-medium text-neutral-700 transition-all duration-200"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </Link>
                
                {/* Mobile-only logo or header could go here */}
                <div className="w-full max-w-sm space-y-8">
                    <div className="text-center">
                        <h2 className="app-default-font-size-h4 font-extrabold tracking-tight text-[#020826] dark:text-gray-300 transition-colors">
                            Welcome to XPLR
                        </h2>
                        <p className="mt-2 app-default-font-size text-slate-600 dark:text-slate-400 transition-colors">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-2">
                            <DefaultLabelComponent label="Email" htmlFor="email" />
                            <div className="relative group">
                                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-600 dark:text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="flex h-10 w-full rounded-md border border-zinc-400 dark:border-zinc-800 bg-white px-3 py-2 pl-10 text-sm ring-offset-zinc-400 placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 transition-colors pl-10"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <DefaultLabelComponent label="Password" htmlFor="password" />
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors underline underline-offset-4"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-600 dark:text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="flex h-10 w-full rounded-md border border-zinc-400 dark:border-zinc-800 bg-white px-3 py-2 pl-10 text-sm ring-offset-zinc-400 placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 transition-colors pl-10"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 h-10 w-full cursor-pointer disabled:pointer-events-none disabled:opacity-50 bg-[#8c7851] text-white"
                        >
                            Sign in
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="app-bg-theme-color text-slate-600 dark:text-slate-400 px-2">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-400 dark:border-zinc-800 bg-white hover:bg-zinc-300 hover:text-zinc-900 h-10 w-full  dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 cursor-pointer flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </button>
                        <button type="button" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-400 dark:border-zinc-800 bg-white hover:bg-zinc-300 hover:text-zinc-900 h-10 w-full  dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 cursor-pointer flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                            <Chrome className="mr-2 h-4 w-4" />
                            Google
                        </button>
                    </div>

                    <p className="text-center text-sm text-slate-600 dark:text-slate-400">
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