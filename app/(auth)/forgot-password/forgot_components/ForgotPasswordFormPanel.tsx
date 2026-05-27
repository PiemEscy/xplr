import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import DefaultLabelComponent from "@/components/common/DefaultLabelComponent";

export default function ForgotPasswordFormPanel() {
  return (
    <div className="app-card p-8 sm:p-10 space-y-8">

      {/* Back */}
      <Link
        href="/login"
        className="group inline-flex items-center gap-2 text-sm font-medium app-text-theme-secondary-color app-text-hover-theme-color transition-colors"
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
        Back to login
      </Link>

      {/* Icon + Header */}
      <div className="text-center">
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mx-auto mb-4 border border-indigo-100 dark:border-indigo-900">
          <Mail className="w-6 h-6 text-indigo-500" />
        </div>
        <h1 className="app-default-font-size-h4 font-extrabold tracking-tight text-[#020826] dark:text-gray-300 transition-colors">
          Forgot password?
        </h1>
        <p className="mt-2 app-default-font-size app-text-theme-secondary-color transition-colors max-w-xs mx-auto">
          No worries — enter your email and we&apos;ll send you a reset link.
        </p>
      </div>

      {/* Form */}
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

        <button
          type="submit"
          className="group flex items-center justify-center app-button-main-style bg-[#8c7851] hover:bg-[#7a6840] text-white"
        >
          Send Reset Link
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      {/* Remember password */}
      <p className="text-center text-sm app-text-theme-secondary-color">
        Remember your password?{" "}
        <Link href="/login" className="font-semibold text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
