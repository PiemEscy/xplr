import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import SkeletonLineComponent from "@/app/components/SkeletonLineComponent";

const icons = {
    github: Github,
    linkedin: Linkedin,
    facebook: Facebook,
    instagram: Instagram,
    mail: Mail,
} as const; // important!

type Platform = keyof typeof icons; // "github" | "linkedin" | "facebook" | "instagram" | "mail"

type SocialLink = {
    platform: Platform;
    link: string;
};

type SocialLinkComponentProps = {
    className?: string;
    loading?: boolean;
};

export default function SocialLinkComponent({
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
        <div
            className={`${className} p-2 flex justify-center space-x-8 border-b border-t  border-zinc-800`}
        >
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
    );
}
