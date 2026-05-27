import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidthMap = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

export function PageContainer({
  children,
  className = "",
  maxWidth = "full",
}: PageContainerProps) {
  return (
    <main className="flex-1 overflow-y-auto bg-zinc-50 dark:bg-zinc-950">
      <div
        className={[
          "mx-auto px-6 py-6",
          maxWidthMap[maxWidth],
          className,
        ].join(" ")}
      >
        {children}
      </div>
    </main>
  );
}
