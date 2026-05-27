import Link from "next/link";
import GuestLayout from "@/components/layout/guest/GuestLayout";

export default function Home() {
  return (
    <GuestLayout>
      {/* Hero */}
      <section className="relative flex flex-1 flex-col items-center justify-center py-24 px-4 text-center overflow-hidden">

        {/* Decorative glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[500px] bg-indigo-500/[0.07] dark:bg-indigo-500/[0.04] blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border app-border-theme-color app-bg-theme-color px-4 py-1.5 text-sm app-text-theme-secondary-color">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Personal Creative Playground
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight app-text-theme-color leading-tight">
            Explore · Create · Experiment
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg app-text-theme-secondary-color max-w-2xl mx-auto leading-relaxed">
            A space to explore ideas, build experiments, test new features, and
            turn curiosity into something real.
          </p>

        </div>
      </section>
    </GuestLayout>
  );
}
