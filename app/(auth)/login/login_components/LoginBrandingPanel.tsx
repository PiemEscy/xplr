export default function LoginBrandingPanel() {
    return (
        <div className="hidden lg:flex lg:flex-col w-5/12 relative overflow-hidden app-bg-theme-color app-text-theme-color border-r app-border-theme-color p-12 justify-between">

      {/* Top subtle glow overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
            {/* Top Branding */}
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">xplr</h1>
                        <p className="text-sm app-text-theme-secondary-color tracking-wide">
                            explore • create • experiment
                        </p>
                    </div>
                </div>

                <div className="space-y-6 mt-16">
                    <div>
                        <h2 className="text-5xl font-bold leading-tight app-text-theme-color">
                            My Personal
                            <br />
                            Creative Playground
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed app-text-theme-secondary-color max-w-md">
                            A space to explore ideas, build experiments, test new features,
                            and turn curiosity into something real.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="relative z-10 flex items-center justify-between pt-10">
                <p className="text-sm app-text-theme-secondary-color">Crafted for experimentation</p>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-white/70"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></div>
                </div>
            </div>
        </div>
    );
}
