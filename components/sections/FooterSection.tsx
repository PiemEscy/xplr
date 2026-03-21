import React from "react";
import { Github, Facebook, Linkedin, Instagram } from "lucide-react";
import SkeletonLineComponent from "../common/SkeletonLineComponent";

const icons = {
    github: Github,
    linkedin: Linkedin,
    facebook: Facebook,
    instagram: Instagram,
} as const;

type Platform = keyof typeof icons;

type SocialLink = {
    platform: Platform;
    link: string;
};

type SocialLinkComponentProps = {
    className?: string;
    loading?: boolean;
};

export default function FooterSection({
    className = "",
    loading = false,
}: SocialLinkComponentProps) {

    const socialLinks: SocialLink[] = [
        { platform: "github", link: "https://github.com/PiemEscy" },
        { platform: "facebook", link: "https://www.facebook.com/paolomiguel.cuento.1" },
        { platform: "linkedin", link: "https://www.linkedin.com/in/paolo-miguel-cuento-389635245/" },
        { platform: "instagram", link: "https://www.instagram.com/paolo.cuento/" },
    ];

  return (
    <footer className="bg-[#0B0F19] text-slate-300 relative overflow-hidden font-sans border-t border-slate-800/50">
      {/* Optional Top subtle glow overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                    <span className="app-default-font-size-h3 font-bold text-gray-300 tracking-tight">X</span>
                    <span className="app-default-font-size-h3 font-medium text-zinc-400 tracking-tight">plr</span>
                </div>
                (Explore)
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              My personal playground to explore ideas, test new features, and see what I can create next.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-8 text-slate-400">
                {loading
                    ? // Skeleton placeholders
                    socialLinks.map((_, i) => (
                        <SkeletonLineComponent
                            key={i}
                            variant="circle"
                            className="w-4 h-4"
                        />
                    ))
                    : // Dynamically render links
                    socialLinks.map(({ platform, link }, i) => {
                        const Icon = icons[platform];
                        return (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-neutral-400 hover:text-blue-600 transition"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        );
                    })}
            </div>
          </div>

          {/* Links Section Wrapper */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-8">
            
            {/* Services */}
            <div className="flex-1 min-w-[140px]">
              <h3 className="text-sm font-semibold text-white mb-5">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Status</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Pricing</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">FAQ</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Help Docs</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Features */}
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-sm font-semibold text-white mb-5">Features</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">HTML File Upload</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">HTML website hosting</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Free Image Hosting</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Upload PDF Online</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Free Zip file hosting</a></li>
              </ul>
            </div>

            {/* Account */}
            <div className="flex-1 min-w-[120px]">
              <h3 className="text-sm font-semibold text-white mb-5">Account</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Login</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Sign Up</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Reset Password</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors block">Support</a></li>
              </ul>
            </div>
            
            {/* Stay In Touch */}
            <div className="flex-1 min-w-[200px] lg:max-w-[240px]">
              <h3 className="text-sm font-semibold text-white mb-5">Stay In Touch</h3>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Subscribe now for exclusive insights and offers!
              </p>
              
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-slate-900/50 border border-slate-700/60 rounded-full py-2.5 px-5 text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-center placeholder:text-slate-500"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full app-button-theme-color font-medium rounded-full py-2.5 text-sm transition-all shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
            
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-16 md:mt-24 text-center flex flex-col items-center">
          <p className="text-xs sm:text-sm text-slate-400/80 font-medium">
            &copy; 2026 Xplr - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}