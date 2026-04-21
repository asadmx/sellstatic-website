import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Features", to: "/features" as const },
  { name: "Pricing", to: "/pricing" as const },
  { name: "About", to: "/about" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="fixed z-20 w-full border-b border-dashed bg-background/80 backdrop-blur md:relative">
        <div className="m-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn("m-auto size-6 duration-200", open && "rotate-180 scale-0 opacity-0")}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                    open && "rotate-0 scale-100 opacity-100",
                  )}
                />
              </button>
            </div>

            <div
              className={cn(
                "mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-foreground/5 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                open && "block!",
              )}
            >
              <div className="lg:pr-4">
                <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.to}
                        className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                        activeProps={{ className: "text-foreground font-medium" }}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                <Button asChild variant="outline" size="sm">
                  <a href="#"><span>Log in</span></a>
                </Button>
                <Button asChild size="sm">
                  <a href="#"><span>Start free</span></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <BarChart3 className="size-4" />
      </div>
      <span className="text-lg font-semibold">
        Sell<span className="italic text-primary">Static</span>
      </span>
    </div>
  );
}
