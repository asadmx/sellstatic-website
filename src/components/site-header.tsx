import { HoverButton } from "@/components/ui/hover-button";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import {
  IoHomeOutline,
  IoAddCircleOutline,
  IoVideocamOutline,
  IoGridOutline,
  IoCopyOutline,
  IoShareSocialOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/sellstatic-logo-mark.png";

type MenuItem = {
  title: string;
  to: "/" | "/create-ad" | "/video" | "/view-ads" | "/templates" | "/social" | "/pricing" | "/login" | "/about";
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
};

const menuItems: MenuItem[] = [
  { title: "Home", to: "/", icon: <IoHomeOutline />, gradientFrom: "#a955ff", gradientTo: "#ea51ff" },
  { title: "Create Ad", to: "/create-ad", icon: <IoAddCircleOutline />, gradientFrom: "#56CCF2", gradientTo: "#2F80ED" },
  { title: "Video", to: "/video", icon: <IoVideocamOutline />, gradientFrom: "#FF9966", gradientTo: "#FF5E62" },
  { title: "View Ads", to: "/view-ads", icon: <IoGridOutline />, gradientFrom: "#80FF72", gradientTo: "#7EE8FA" },
  { title: "Templates", to: "/templates", icon: <IoCopyOutline />, gradientFrom: "#ffa9c6", gradientTo: "#f434e2" },
  { title: "Social", to: "/social", icon: <IoShareSocialOutline />, gradientFrom: "#fceabb", gradientTo: "#f8b500" },
  { title: "Pricing", to: "/pricing", icon: <IoStatsChartOutline />, gradientFrom: "#a955ff", gradientTo: "#7e5bef" },
  { title: "About", to: "/about", icon: <IoInformationCircleOutline />, gradientFrom: "#7EE8FA", gradientTo: "#a955ff" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-4 z-30 w-full px-4">
      <div className="mx-auto max-w-6xl rounded-full border border-border/60 bg-background/70 px-4 shadow-lg shadow-primary/5 ring-1 ring-white/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
        <div className="flex items-center justify-between gap-4 py-2">
          {/* Logo */}
          <Link to="/" aria-label="SellStatic home" className="flex shrink-0 items-center pl-2">
            <img src={logo} alt="SellStatic" className="h-12 w-auto" />
          </Link>

          {/* Gradient menu — desktop */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {menuItems.map(({ title, icon, gradientFrom, gradientTo, to }) => {
                const isActive =
                  to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
                return (
                  <li
                    key={title}
                    style={
                      {
                        "--gradient-from": gradientFrom,
                        "--gradient-to": gradientTo,
                      } as React.CSSProperties
                    }
                    className={cn(
                      "group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-card/80 shadow-sm ring-1 ring-border transition-all duration-500 hover:w-32 hover:shadow-none hover:ring-0",
                      isActive && "ring-2 ring-primary/60",
                    )}
                  >
                    <Link to={to} className="absolute inset-0 z-20 rounded-full" aria-label={title}>
                      <span className="sr-only">{title}</span>
                    </Link>

                    <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute inset-x-0 top-2 -z-10 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 blur-[15px] transition-opacity duration-500 group-hover:opacity-50" />
                    <span className="pointer-events-none relative z-10 text-lg text-muted-foreground transition-transform duration-500 group-hover:scale-0">
                      {icon}
                    </span>
                    <span className="pointer-events-none absolute z-10 scale-0 text-[11px] font-medium uppercase tracking-wide text-white transition-transform delay-150 duration-500 group-hover:scale-100">
                      {title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 pr-1">
            <GlowButton
              onClick={() => navigate({ to: "/login" })}
              className="hidden sm:inline-flex"
            >
              Log in
            </GlowButton>
            <GlowButton onClick={() => navigate({ to: "/dashboard" })}>
              Dashboard
            </GlowButton>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="ml-1 inline-flex size-8 items-center justify-center rounded-full border lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border/60 bg-background/90 p-3 backdrop-blur-xl lg:hidden">
          <nav>
            <ul className="grid grid-cols-2 gap-2">
              {menuItems.map(({ title, to, icon, gradientFrom, gradientTo }) => (
                <li key={title}>
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl border bg-card p-3 text-sm font-medium hover:bg-accent"
                  >
                    <span
                      className="grid size-8 place-items-center rounded-full text-white"
                      style={{
                        background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`,
                      }}
                    >
                      {icon}
                    </span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
