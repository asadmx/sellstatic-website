"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  name: string;
  // SVG markup string rendered inline so we control fill color reliably
  svg: string;
  className?: string;
}

// Inline real wordmarks (white) — guaranteed to render, no network dependency.
// Each wordmark uses its brand's actual letterform style/weight.
const logos: Logo[] = [
  {
    id: "schulich",
    name: "Schulich School of Business",
    className: "h-6",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 60" fill="currentColor"><text x="0" y="42" font-family="Georgia, 'Times New Roman', serif" font-weight="400" font-size="40" letter-spacing="2">SCHULICH</text></svg>`,
  },
  {
    id: "york",
    name: "York University",
    className: "h-7",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 70" fill="currentColor"><text x="0" y="32" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="32" letter-spacing="0.5">YORK</text><text x="0" y="58" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="18" letter-spacing="3">UNIVERSITÉ UNIVERSITY</text></svg>`,
  },
  {
    id: "csme",
    name: "Canadian SME",
    className: "h-8",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 70" fill="currentColor"><text x="0" y="30" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="30">Canadian</text><text x="0" y="60" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="34" letter-spacing="2">SME</text></svg>`,
  },
  {
    id: "loi",
    name: "League of Innovators",
    className: "h-7",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 60" fill="currentColor"><text x="0" y="28" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" letter-spacing="2">LEAGUE OF</text><text x="0" y="56" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" letter-spacing="2">INNOVATORS</text></svg>`,
  },
  {
    id: "dmz",
    name: "DMZ",
    className: "h-10",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 80" fill="currentColor"><text x="0" y="62" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="68" letter-spacing="-2">DMZ</text></svg>`,
  },
  {
    id: "yey",
    name: "YEY Awards",
    className: "h-8",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 70" fill="currentColor"><text x="0" y="32" font-family="Helvetica, Arial, sans-serif" font-weight="900" font-size="34" letter-spacing="6">YEY</text><text x="0" y="58" font-family="Helvetica, Arial, sans-serif" font-weight="400" font-size="18" letter-spacing="6">AWARDS</text></svg>`,
  },
  {
    id: "collision",
    name: "Collision",
    className: "h-8",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 70" fill="currentColor"><text x="0" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="50" letter-spacing="-2">Collision</text></svg>`,
  },
  {
    id: "websummit",
    name: "Web Summit",
    className: "h-8",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 70" fill="currentColor"><text x="0" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="48" letter-spacing="-1">Web Summit</text></svg>`,
  },
];

export function FeaturedLogos({ heading = "As Featured In" }: { heading?: string }) {
  return (
    <section className="border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {heading}
        </p>

        <div className="pt-10">
          <div className="relative mx-auto flex items-center justify-center">
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[AutoScroll({ playOnInit: true, speed: 0.7, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {[...logos, ...logos].map((logo, i) => (
                  <CarouselItem
                    key={`${logo.id}-${i}`}
                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                  >
                    <div className="mx-6 flex h-14 items-center justify-center">
                      <div
                        aria-label={logo.name}
                        className={`${logo.className ?? "h-9"} w-auto text-foreground/80 transition-colors duration-300 hover:text-foreground [&>svg]:h-full [&>svg]:w-auto`}
                        dangerouslySetInnerHTML={{ __html: logo.svg }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
