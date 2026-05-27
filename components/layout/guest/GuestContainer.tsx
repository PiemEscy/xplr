import { ReactNode } from "react";

type MaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "full";

const maxWidthMap: Record<MaxWidth, string> = {
  sm:    "max-w-sm",
  md:    "max-w-md",
  lg:    "max-w-lg",
  xl:    "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  full:  "max-w-full",
};

type GuestContainerProps = {
  children: ReactNode;
  maxWidth?: MaxWidth;
  centered?: boolean;
  className?: string;
};

export default function GuestContainer({
  children,
  maxWidth = "6xl",
  centered = false,
  className = "",
}: GuestContainerProps) {
  const mwClass = maxWidthMap[maxWidth];

  if (centered) {
    return (
      <div
        className={`flex flex-1 items-center justify-center w-full py-12 px-4 sm:px-6 relative ${className}`}
      >
        {/* Decorative glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-[600px] h-[400px] bg-indigo-500/[0.06] dark:bg-indigo-500/[0.04] blur-[120px] rounded-full" />
        </div>
        <div className={`relative z-10 w-full ${mwClass}`}>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`mx-auto w-full ${mwClass} px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
