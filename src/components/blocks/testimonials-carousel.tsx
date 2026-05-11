"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsCarouselProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-pink-400/60 text-xs font-semibold text-white">
      {initials}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="flex h-full flex-col justify-between gap-6 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#171433] via-[#111129] to-[#0b0b1d] p-6 text-white shadow-[0_18px_60px_-28px_rgba(0,0,0,0.75)]">
      <p className="text-[15px] leading-7 text-white/88">"{t.quote}"</p>
      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
        <Avatar name={t.name} />
        <div>
          <p className="text-sm font-semibold leading-tight text-white">{t.name}</p>
          <p className="text-xs text-white/62">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  testimonials,
  direction,
}: {
  testimonials: Testimonial[];
  direction: "forward" | "backward";
}) {
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[
        AutoScroll({
          playOnInit: true,
          speed: 0.7,
          direction,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="ml-0">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <CarouselItem
            key={`${testimonial.name}-${index}`}
            className="basis-[88%] pl-4 sm:basis-[55%] lg:basis-[38%] xl:basis-[32%]"
          >
            <Card t={testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function TestimonialsCarousel({
  title = "Trusted by startups and the world's largest companies",
  subtitle = "Hear what teams are saying about SellStatic",
  testimonials,
}: TestimonialsCarouselProps) {
  const topRow = testimonials.filter((_, index) => index % 2 === 0);
  const bottomRow = testimonials.filter((_, index) => index % 2 === 1);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0b0b1d] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/90">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-base text-white/68">{subtitle}</p>}
        </div>

        <div className="relative mt-14 space-y-5">
          <MarqueeRow testimonials={topRow} direction="forward" />
          <MarqueeRow testimonials={bottomRow} direction="backward" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0b0b1d] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#0b0b1d] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0b0b1d] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0b0b1d] to-transparent" />
        </div>
      </div>
    </section>
  );
}
