import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/sellstatic-logo-mark.png";

const socialLinks = [
  { icon: <Twitter className="size-4" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="size-4" />, href: "#", label: "LinkedIn" },
  { icon: <Mail className="size-4" />, href: "mailto:hello@sellstatic.com", label: "Email" },
];

const navLinks: { label: string; to: "/features" | "/pricing" | "/platforms" | "/about" }[] = [
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Platforms", to: "/platforms" },
  { label: "About", to: "/about" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t bg-foreground text-background">
      <div className="relative mx-auto max-w-6xl px-6 pb-40 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="SellStatic" className="h-10 w-auto" />
              <span className="text-2xl font-semibold tracking-tight">
                Sell<span className="italic text-primary">Static</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-background/60">
              AI-powered ad creation for modern marketing teams. Design, generate,
              and publish ads across every platform — fast.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/50">
              Connect
            </h4>
            <ul className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className="group flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1.5 text-xs text-background/70 transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-background"
                  >
                    <span className="grid size-6 place-items-center rounded-full bg-background/10 text-background/80 transition-colors group-hover:bg-primary/30">
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/50">
              Explore
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-background/60">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition-colors hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/40 sm:flex-row sm:items-center">
          <p>© {year} SellStatic Inc. All rights reserved.</p>
          <p>Made with care for marketers everywhere.</p>
        </div>

        {/* Large background wordmark */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-6 select-none overflow-hidden">
          <div className="bg-gradient-to-b from-primary/30 via-primary/10 to-transparent bg-clip-text text-center text-[18vw] font-black leading-none tracking-tighter text-transparent">
            SELLSTATIC
          </div>
        </div>

        {/* Bottom shadow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground to-transparent" />
      </div>
    </footer>
  );
}
