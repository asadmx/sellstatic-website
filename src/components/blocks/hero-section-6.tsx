import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Features", href: "#" },
  { name: "Solution", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

export function HeroSection() {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <header>
        <nav className="fixed z-20 w-full border-b border-dashed bg-background/80 backdrop-blur md:relative">
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link to="/" aria-label="home" className="flex items-center space-x-2">
                  <Logo />
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu
                    className={cn(
                      "m-auto size-6 duration-200",
                      menuState && "rotate-180 scale-0 opacity-0",
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                      menuState && "rotate-0 scale-100 opacity-100",
                    )}
                  />
                </button>
              </div>

              <div
                className={cn(
                  "mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-foreground/5 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                  menuState && "block!",
                )}
              >
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                        >
                          <span>{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild variant="outline" size="sm">
                    <a href="#">
                      <span>Login</span>
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href="#">
                      <span>Sign Up</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <a
                href="#"
                className="mx-auto inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1 text-sm transition-colors hover:bg-muted"
              >
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  New
                </span>
                <span className="text-muted-foreground">Introducing Tailark HTML</span>
                <ArrowRight className="size-3.5" />
              </a>

              <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Production Ready Digital Marketing Blocks
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-balance text-muted-foreground">
                Beautifully crafted, fully responsive, and endlessly customizable blocks to ship
                your next marketing site faster than ever.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#">
                    <span>Learn More</span>
                  </a>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t pt-8 text-sm">
                <div>
                  <p className="font-semibold">Faster</p>
                  <p className="mt-1 text-xs text-muted-foreground">Lightning quick performance</p>
                </div>
                <div>
                  <p className="font-semibold">Modern</p>
                  <p className="mt-1 text-xs text-muted-foreground">Built on the latest stack</p>
                </div>
                <div>
                  <p className="font-semibold">100% Customizable</p>
                  <p className="mt-1 text-xs text-muted-foreground">Adapt to your brand</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="size-7 rounded-md bg-primary" />
      <span className="text-lg font-semibold">Tailark</span>
    </div>
  );
};
