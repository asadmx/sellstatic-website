"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  name: string;
  src: string;
  className?: string;
}

const logos: Logo[] = [
  {
    id: "schulich",
    name: "Schulich School of Business",
    src: "/logos/schulich.png",
    className: "h-14",
  },
  { id: "york", name: "York University", src: "/logos/york.png", className: "h-12" },
  { id: "csme", name: "Canadian SME", src: "/logos/csme.png", className: "h-14" },
  { id: "loi", name: "League of Innovators", src: "/logos/loi.png", className: "h-10" },
  { id: "dmz", name: "DMZ", src: "/logos/dmz.png", className: "h-10" },
  { id: "yey", name: "YEY Awards", src: "/logos/yey.png", className: "h-10" },
  { id: "collision", name: "Collision", src: "/logos/collision.png", className: "h-10" },
  { id: "websummit", name: "Web Summit", src: "/logos/websummit.png", className: "h-12" },
  { id: "tedx", name: "TEDx", src: "/logos/tedx.png", className: "h-10" },
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
                    <div className="mx-4 flex h-20 w-full items-center justify-center rounded-xl bg-white px-5 py-3 ring-1 ring-border/40 transition-shadow duration-300 hover:shadow-md">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        loading="lazy"
                        className={`${logo.className ?? "h-10"} w-auto object-contain`}
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
