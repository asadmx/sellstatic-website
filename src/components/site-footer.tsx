import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/sellstatic-logo.png";

type InternalHref = "/" | "/pricing" | "/about";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: InternalHref | string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
}

const defaultSections = [
  {
    title: "Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "Pricing", href: "/pricing" },
      { name: "About", href: "/about" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <FaInstagram className="size-5" />,
    href: "https://www.instagram.com/sellstatic/",
    label: "Instagram",
  },
  {
    icon: <FaLinkedin className="size-5" />,
    href: "https://www.linkedin.com/company/sellstatic/posts/?feedView=all",
    label: "LinkedIn",
  },
  {
    icon: <SiTiktok className="size-5" />,
    href: "https://www.tiktok.com/@sellstatic",
    label: "TikTok",
  },
];

export const SiteFooter = ({
  logo: logoProp = {
    url: "https://www.sellstatic.app",
    src: logo,
    alt: "SellStatic",
    title: "SellStatic",
  },
  sections = defaultSections,
  description = "AI-powered ad creation for modern marketing teams. Design, generate, and publish ads across every platform, fast.",
  socialLinks = defaultSocialLinks,
  copyright = "(c) 2026 SellStatic. All rights reserved.",
}: Footer7Props) => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border/50 bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.78 0.18 295 / 0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[460px] w-[460px] rounded-full opacity-50 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.85 0.15 340 / 0.28), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-3">
            <a href={logoProp.url} aria-label={logoProp.title} className="shrink-0">
              <img src={logoProp.src} alt={logoProp.alt} title={logoProp.title} className="h-16 sm:h-20" />
            </a>
          </div>
          <p className="mt-4 max-w-2xl text-center text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-8 md:flex-row md:justify-center md:gap-16 lg:gap-24">
            {sections.map((section) => (
              <div key={section.title} className="text-center md:text-left">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  {section.title}
                </h3>
                <ul className="space-y-2.5 text-base text-foreground/75 sm:text-lg">
                  {section.links.map((link) => (
                    <li key={link.name} className="font-medium transition-colors hover:text-primary">
                      {link.href.startsWith("/") ? (
                        <Link to={link.href as InternalHref}>{link.name}</Link>
                      ) : (
                        <a href={link.href}>{link.name}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="text-center md:text-left">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Social
              </h3>
              <ul className="space-y-2.5 text-base text-foreground/75 sm:text-lg">
                {socialLinks.map((social) => (
                  <li key={social.label} className="font-medium transition-colors hover:text-primary">
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex items-center gap-3"
                    >
                      <span className="text-primary [&_svg]:size-6">{social.icon}</span>
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-border/60 bg-background/70 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm font-normal text-muted-foreground">
          {copyright}
        </div>
      </div>
    </footer>
  );
};
