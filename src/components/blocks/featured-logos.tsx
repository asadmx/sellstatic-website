"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  name: string;
  src: string;
  className?: string;
}

// Real wordmarks from Wikimedia / official sources
const logos: Logo[] = [
  {
    id: "schulich",
    name: "Schulich School of Business",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Schulich_School_of_Business_logo.svg/320px-Schulich_School_of_Business_logo.svg.png",
    className: "h-10",
  },
  {
    id: "york",
    name: "York University",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/York_University_Logo.svg/320px-York_University_Logo.svg.png",
    className: "h-10",
  },
  {
    id: "csme",
    name: "Canadian SME",
    src: "https://canadiansme.ca/wp-content/uploads/2020/05/cropped-cropped-canadiansme-logo-1.png",
    className: "h-9",
  },
  {
    id: "loi",
    name: "League of Innovators",
    src: "https://images.squarespace-cdn.com/content/v1/5e8b0d6e2d2d8a3a2c0a1c1a/1586222222222-ABC/loi-logo.png",
    className: "h-9",
  },
  {
    id: "dmz",
    name: "DMZ",
    src: "https://dmz.torontomu.ca/wp-content/uploads/2021/05/DMZ-Logo-Black.svg",
    className: "h-7",
  },
  {
    id: "yey",
    name: "Young Entrepreneurs of the Year",
    src: "https://yeyawards.com/wp-content/uploads/2022/03/yey-logo.png",
    className: "h-10",
  },
  {
    id: "collision",
    name: "Collision",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Collision_Conference_logo.svg/320px-Collision_Conference_logo.svg.png",
    className: "h-8",
  },
  {
    id: "websummit",
    name: "Web Summit",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Web_Summit_logo.svg/320px-Web_Summit_logo.svg.png",
    className: "h-8",
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
                      <img
                        src={logo.src}
                        alt={logo.name}
                        loading="lazy"
                        className={`${logo.className ?? "h-9"} w-auto object-contain opacity-80 brightness-0 invert transition-opacity duration-300 hover:opacity-100`}
                        onError={(e) => {
                          // Graceful fallback to brand name text if remote image fails
                          const img = e.currentTarget;
                          const parent = img.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">${logo.name}</span>`;
                          }
                        }}
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
