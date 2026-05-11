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
    <>
      <section className="border-t" />
      <section className="py-32">
        <div className="container mx-auto">
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
            <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logoProp.url}>
                  <img
                    src={logoProp.src}
                    alt={logoProp.alt}
                    title={logoProp.title}
                    className="h-8"
                  />
                </a>
                <h2 className="text-xl font-semibold">{logoProp.title}</h2>
              </div>
              <p className="max-w-[70%] text-sm text-muted-foreground">{description}</p>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                {socialLinks.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-primary">
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid w-full gap-6 md:grid-cols-1 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="font-medium hover:text-primary">
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
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
            <p className="order-2 lg:order-1">{copyright}</p>
          </div>
        </div>
      </section>
    </>
  );
};
