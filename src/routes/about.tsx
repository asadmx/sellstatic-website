import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { TestimonialsCarousel } from "@/components/blocks/testimonials-carousel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SellStatic" },
      { name: "description", content: "Meet the team behind SellStatic — creators, designers, and builders making marketing tools that feel fun, human, and ridiculously easy to use." },
      { property: "og:title", content: "About — SellStatic" },
      { property: "og:description", content: "Meet the team behind SellStatic." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Imam Khalid", role: "CEO", color: "from-indigo-300 to-indigo-500" },
  { name: "Abdullah Abdullah", role: "CTO", color: "from-pink-300 to-pink-500" },
  { name: "Aditya Sharma", role: "CPO", color: "from-rose-300 to-rose-500" },
  { name: "Ahmad Pasha", role: "Front End Lead", color: "from-purple-300 to-purple-500" },
  { name: "Muhamad Moiz", role: "Back End Lead", color: "from-amber-300 to-amber-500" },
  { name: "Ayush", role: "Full Stack Engineer", color: "from-emerald-300 to-emerald-500" },
  { name: "Harnoor Boparai", role: "Full Stack Engineer", color: "from-sky-300 to-sky-500" },
  { name: "Jaazib Tariq", role: "Full Stack Engineer", color: "from-fuchsia-300 to-fuchsia-500" },
  { name: "Asad Malik", role: "Full Stack Engineer", color: "from-cyan-300 to-cyan-500" },
];

const story = [
  { tag: "The Early Days", text: "We were marketers and indie founders building landing pages and ads from our bedrooms — experimenting, breaking things, and learning what actually sells." },
  { tag: "Turning Point", text: "After years of stitching together a dozen tools just to ship a single campaign, we saw every team face the same struggle. So we built SellStatic, the ad studio we always wished we had." },
  { tag: "Growth", text: "Today, 2,400+ teams use SellStatic to design, generate, and publish ads across 13+ platforms — from solo creators to fast-growing brands." },
];

const testimonials = [
  { quote: "SellStatic cut our ad production time by 80%. We went from a week of back-and-forth to publishing in under an hour.", name: "Jordan Kim", role: "Head of Growth, Vercel" },
  { quote: "The templates are actually good — not the usual generic stuff. We launched a full campaign across 5 platforms in one afternoon.", name: "Maya Chen", role: "Marketing Director, Lemon Squeezy" },
  { quote: "As a solo founder, I used to outsource all our ad design. SellStatic replaced that entirely.", name: "Rohan Mehta", role: "Founder, CartSniper" },
];

function TeamCard({ name, role, color }: { name: string; role: string; color: string }) {
  return (
    <div className="group flex w-44 flex-col items-center gap-3 rounded-3xl border bg-card p-5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 hover:shadow-lg sm:w-48">
      <div className={`size-20 rounded-full bg-gradient-to-br ${color} ring-4 ring-background`} />
      <p className="mt-1 text-center text-base font-semibold leading-tight">{name}</p>
      <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{role}</span>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-24 text-center lg:pt-28">
          <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3 text-primary" /> About SellStatic
          </p>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Meet the team behind <span className="italic text-primary">SellStatic</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A team of creators, designers, and builders making marketing tools that feel fun,
            human, and ridiculously easy to use.
          </p>
        </section>

        {/* Stats badges */}
        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm">
              <div className="size-14 shrink-0 rounded-xl bg-gradient-to-br from-primary/30 to-primary/60" />
              <div>
                <p className="text-sm font-semibold">Backed by VC funds</p>
                <p className="text-xs text-muted-foreground">$5M+ valuation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm">
              <div className="size-14 shrink-0 rounded-xl bg-gradient-to-br from-pink-300 to-purple-500" />
              <div>
                <p className="text-sm font-semibold">Loved by 2,400+ teams</p>
                <p className="text-xs text-muted-foreground">Across the world</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team grid with radial backdrop */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24">
          <div className="absolute left-1/2 top-1/2 -z-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 via-pink-300/30 to-purple-300/30 blur-3xl" />
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            {team.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="border-t bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
              Our <span className="italic text-primary">story</span>
            </h2>
            <div className="mt-14 space-y-10">
              {story.map((s, i) => (
                <div
                  key={s.tag}
                  className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border bg-gradient-to-br from-muted via-card to-primary/10 shadow-sm" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{s.tag}</p>
                    <p className="mt-3 text-2xl font-medium leading-snug text-foreground/90 md:text-3xl">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Belief */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            We believe creativity shouldn't <span className="italic text-primary">feel like work</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every feature in SellStatic exists to remove friction — so marketers can spend more time
            telling stories and less time fighting tools.
          </p>
        </section>

        <TestimonialsCarousel
          title="What teams say about SellStatic"
          subtitle="Real teams shipping real campaigns"
          testimonials={testimonials}
        />

        {/* Location with stylized map */}
        <section className="border-t bg-card/50">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <MapPin className="size-3" /> We are located in
              </p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
                Toronto, <span className="italic text-primary">Canada</span>
              </h2>
            </div>

            <div className="relative mt-12 grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground">Scale</p>
                  <p className="mt-1 text-4xl font-semibold">1.2M+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Ads generated this year</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Community</p>
                  <p className="mt-1 text-4xl font-semibold">2,400+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Active teams worldwide</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Saved</p>
                  <p className="mt-1 text-4xl font-semibold">80%</p>
                  <p className="mt-1 text-sm text-muted-foreground">Avg. production time saved</p>
                </div>
              </div>

              <div className="relative aspect-[4/3]">
                <img
                  src={northAmericaMap}
                  alt="Map highlighting Toronto, Canada"
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 size-full object-contain opacity-80"
                />
                {/* Highlight bubble over Toronto */}
                <div className="absolute left-[64%] top-[44%]">
                  <div className="relative flex size-28 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_40px_-6px_rgba(168,85,247,0.45)]" />
                    <div className="relative size-16 rounded-full bg-gradient-to-br from-primary/70 via-pink-400/70 to-purple-500/70 blur-[1px]" />
                  </div>
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border bg-card px-3 py-1 text-xs font-semibold shadow-sm">
                    Toronto
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-accent/40">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Built with love — to make marketing <span className="italic text-primary">easy for all</span>.
            </h2>
            <div className="mt-6 flex justify-center">
              <Button size="lg">Start free <ArrowRight className="ml-1 size-4" /></Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">hello@sellstatic.com</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
