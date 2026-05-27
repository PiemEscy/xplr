import { Mail, Lock, User, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import DefaultLabelComponent from "@/components/common/DefaultLabelComponent";

export default function RegisterFormPanel() {
  return (
    <div className="app-card p-8 sm:p-10 space-y-8">

      {/* Back to Homepage Button */}
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-sm font-medium app-text-theme-secondary-color app-text-hover-theme-color transition-colors"
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
        Back to home
      </Link>

      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-4">
          <span className="text-2xl font-bold text-[#020826] dark:text-gray-200 tracking-tight">
            X
          </span>
          <span className="text-2xl font-medium app-text-theme-secondary-color tracking-tight">
            plr
          </span>
        </div>
        <h1 className="app-default-font-size-h4 font-extrabold tracking-tight text-[#020826] dark:text-gray-300 transition-colors">
          Create an account
        </h1>
        <p className="mt-2 app-default-font-size app-text-theme-secondary-color transition-colors">
          Start exploring your creative playground
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5">
        <div className="space-y-2">
          <DefaultLabelComponent label="Full Name" htmlFor="name" />
          <div className="relative group">
            <User className="absolute left-3 top-3.5 h-4 w-4 app-text-theme-secondary-color group-focus-within:text-blue-500 transition-colors" />
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="app-default-input-style"
            />
          </div>
        </div>

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
          <DefaultLabelComponent label="Password" htmlFor="password" />
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

        <div className="space-y-2">
          <DefaultLabelComponent label="Confirm Password" htmlFor="confirm-password" />
          <div className="relative group">
            <Lock className="absolute left-3 top-3.5 h-4 w-4 app-text-theme-secondary-color group-focus-within:text-blue-500 transition-colors" />
            <input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="app-default-input-style"
            />
          </div>
        </div>

        <button
          type="submit"
          className="group flex items-center justify-center app-button-main-style app-theme-color-button"
        >
          Create Account
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      {/* Sign In Link */}
      <p className="text-center text-sm app-text-theme-secondary-color">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
