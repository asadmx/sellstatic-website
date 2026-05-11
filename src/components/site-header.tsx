import React from "react";
import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/sellstatic-logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-5 z-50 mx-auto w-full max-w-3xl rounded-lg border shadow",
        "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg",
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-4 py-2">
        <Link
          to="/"
          aria-label="SellStatic home"
          className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100"
        >
          <img src={logo} alt="SellStatic" className="h-12 w-auto" />
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href as "/" | "/pricing" | "/about"}
              className={buttonVariants({ variant: "ghost", size: "lg", className: "px-6 py-3" })}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button asChild size="lg" className="hidden sm:inline-flex">
            <a href="https://www.sellstatic.app" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              <MenuIcon className="size-4" />
            </Button>

            <SheetContent
              className="gap-0 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80"
              side="left"
            >
              <div className="grid gap-y-2 overflow-y-auto px-4 pb-5 pt-12">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href as "/" | "/pricing" | "/about"}
                    onClick={() => setOpen(false)}
                    className={buttonVariants({ variant: "ghost", className: "justify-start" })}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <SheetFooter>
                <Button asChild variant="outline">
                  <a href="https://www.sellstatic.app" target="_blank" rel="noopener noreferrer">
                    Sign In
                  </a>
                </Button>
                <Button asChild>
                  <a
                    href="https://www.sellstatic.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
