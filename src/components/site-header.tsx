import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
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
import logo from "@/assets/sellstatic-logo.png";

type MenuItem = {
  title: string;
  to: "/" | "/create-ad" | "/video" | "/view-ads" | "/templates" | "/social" | "/pricing";
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
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 py-3">
          {/* Logo */}
          <Link to="/" aria-label="SellStatic home" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="SellStatic" className="h-9 w-auto" />
            <span className="text-lg font-semibold tracking-tight">
              Sell<span className="italic text-primary">Static</span>
            </span>
          </Link>

          {/* Gradient menu — desktop */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-3">
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
                      "group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-card shadow-sm ring-1 ring-border transition-all duration-500 hover:w-36 hover:shadow-none hover:ring-0",
                      isActive && "ring-2 ring-primary/60",
                    )}
                  >
                    <Link to={to} className="absolute inset-0 z-20 rounded-full" aria-label={title}>
                      <span className="sr-only">{title}</span>
                    </Link>

                    {/* Gradient fill on hover */}
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Glow */}
                    <span className="pointer-events-none absolute inset-x-0 top-2 -z-10 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 blur-[15px] transition-opacity duration-500 group-hover:opacity-50" />
                    {/* Icon */}
                    <span className="pointer-events-none relative z-10 text-xl text-muted-foreground transition-transform duration-500 group-hover:scale-0">
                      {icon}
                    </span>
                    {/* Title */}
                    <span className="pointer-events-none absolute z-10 scale-0 text-xs font-medium uppercase tracking-wide text-white transition-transform duration-500 delay-150 group-hover:scale-100">
                      {title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
              <a href="#">Log in</a>
            </Button>
            <Button asChild size="sm" className="shadow-md shadow-primary/20">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="ml-1 inline-flex size-9 items-center justify-center rounded-md border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden pb-4">
            <ul className="grid grid-cols-2 gap-2">
              {menuItems.map(({ title, to, icon, gradientFrom, gradientTo }) => (
                <li key={title}>
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl border bg-card p-3 text-sm font-medium hover:bg-accent"
                  >
                    <span
                      className="grid size-9 place-items-center rounded-full text-white"
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
        )}
      </div>
    </header>
  );
}
