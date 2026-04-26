"use client";

import * as React from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

export function TestimonialsCarousel({
  title = "Why teams love SellStatic",
  subtitle = "What our customers are saying",
  testimonials,
}: TestimonialsCarouselProps) {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>
        )}

        <div className="mt-12">
          <Carousel opts={{ loop: true }}>
            <div className="relative mx-auto max-w-2xl">
              <CarouselContent>
                {testimonials.map((t, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2 pb-12">
                      <div className="text-center">
                        <Quote className="mx-auto my-4 size-8 text-primary/70" />
                        <h4 className="mx-auto max-w-lg px-6 text-lg font-medium leading-relaxed">
                          "{t.quote}"
                        </h4>
                        <div className="mt-8">
                          <h4 className="text-base font-semibold">{t.name}</h4>
                          <span className="text-sm text-muted-foreground">
                            {t.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background" />
              <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/12 bg-gradient-to-l from-background" />
            </div>
            <div className="hidden md:block">
              <CarouselPrevious className="bottom-0 left-1/2 top-auto -translate-x-16 translate-y-4" />
              <CarouselNext className="bottom-0 left-auto right-1/2 top-auto translate-x-16 translate-y-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
