import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TestimonialsCarousel } from "@/components/blocks/testimonials-carousel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SellStatic" },
      { name: "description", content: "We're building the AI ad studio modern marketing teams actually want to use. Real teams, real results." },
      { property: "og:title", content: "About — SellStatic" },
      { property: "og:description", content: "Building the AI ad studio modern marketing teams actually want to use." },
    ],
  }),
  component: AboutPage,
});

const testimonials = [
  { quote: "SellStatic cut our ad production time by 80%. We went from a week of back-and-forth to publishing in under an hour.", name: "Jordan Kim", role: "Head of Growth, Vercel", initial: "J" },
  { quote: "The templates are actually good — not the usual generic stuff. We launched a full campaign across 5 platforms in one afternoon.", name: "Maya Chen", role: "Marketing Director, Lemon Squeezy", initial: "M" },
  { quote: "As a solo founder, I used to outsource all our ad design. SellStatic replaced that entirely.", name: "Rohan Mehta", role: "Founder, CartSniper", initial: "R" },
];

const stats = [
  { v: "2,400+", l: "Teams creating with SellStatic" },
  { v: "1.2M", l: "Ads generated this year" },
  { v: "80%", l: "Avg. production time saved" },
  { v: "12", l: "Platforms supported" },
];

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-6 py-24 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">About</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            Building the AI ad studio modern teams <span className="italic text-primary">actually use</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            SellStatic started with a frustration: ad production is slow, fragmented, and full of
            tools that don't talk to each other. We're building the workspace marketers wish they had —
            one place to design, generate, and ship ads to every platform.
          </p>
        </section>

        <section className="border-y bg-card">
          <div className="mx-auto grid max-w-5xl gap-px bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="bg-card p-8">
                <div className="text-3xl font-semibold text-primary">{s.v}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        <TestimonialsCarousel
          title="Why teams love SellStatic"
          subtitle="What our customers are saying"
          testimonials={testimonials}
        />

        <section className="border-t bg-accent/40">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Join the teams shipping ads with <span className="italic text-primary">SellStatic</span>.
            </h2>
            <div className="mt-6 flex justify-center">
              <Button size="lg">Start free <ArrowRight className="ml-1 size-4" /></Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
