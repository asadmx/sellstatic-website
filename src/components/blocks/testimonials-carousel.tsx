"use client";

import * as React from "react";

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
    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <Avatar name={t.name} />
        <div>
          <p className="text-sm font-semibold leading-tight">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel({
  title = "Trusted by startups and the world's largest companies",
  subtitle = "Hear what teams are saying about SellStatic",
  testimonials,
}: TestimonialsCarouselProps) {
  // Distribute into 3 columns
  const cols: Testimonial[][] = [[], [], []];
  testimonials.forEach((t, i) => cols[i % 3].push(t));

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="relative mt-14">
          <div className="grid gap-5 md:grid-cols-3">
            {cols.map((col, i) => (
              <div key={i} className="flex flex-col gap-5">
                {col.map((t, idx) => (
                  <Card key={idx} t={t} />
                ))}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
