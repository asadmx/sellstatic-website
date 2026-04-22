"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  name: string;
}

const logos: Logo[] = [
  { id: "schulich", name: "Schulich School of Business" },
  { id: "york", name: "York University" },
  { id: "csme", name: "Canadian SME" },
  { id: "loi", name: "League of Innovators" },
  { id: "dmz", name: "DMZ" },
  { id: "yey", name: "YEY Awards" },
  { id: "collision", name: "Collision" },
  { id: "websummit", name: "Web Summit" },
];

export function FeaturedLogos({ heading = "As Featured In" }: { heading?: string }) {
  return (
    <section className="border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-xs uppercase tracking-wider text-muted-foreground">
          {heading}
        </p>

        <div className="pt-8">
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
                    <div className="mx-6 flex h-12 items-center">
                      <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-muted-foreground/70 transition-colors hover:text-foreground">
                        {logo.name}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
