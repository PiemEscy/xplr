export default function LoginBrandingPanel() {
    return (
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
                        <h1 className="text-3xl font-bold tracking-tight">xplr</h1>
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
                            A space to explore ideas, build experiments, test new features,
                            and turn curiosity into something real.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="relative z-10 flex items-center justify-between pt-10">
                <p className="text-sm text-white/60">Crafted for experimentation</p>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/70"></div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
        </div>
    );
}
