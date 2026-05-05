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
  { name: "Alex Carter", role: "Co-Founder", color: "from-indigo-300 to-indigo-500" },
  { name: "Jordan Lee", role: "CTO", color: "from-pink-300 to-pink-500" },
  { name: "Morgan Reyes", role: "Lead UX Designer", color: "from-rose-300 to-rose-500" },
  { name: "Sam Patel", role: "Co-Founder", color: "from-purple-300 to-purple-500" },
  { name: "Riley Chen", role: "Head of Growth", color: "from-amber-300 to-amber-500" },
  { name: "Taylor Brooks", role: "Engineering", color: "from-emerald-300 to-emerald-500" },
  { name: "Jamie Park", role: "Product", color: "from-sky-300 to-sky-500" },
  { name: "Casey Diaz", role: "Marketing", color: "from-fuchsia-300 to-fuchsia-500" },
  { name: "Avery Singh", role: "Engineering", color: "from-cyan-300 to-cyan-500" },
  { name: "Quinn Walker", role: "Customer Success", color: "from-orange-300 to-orange-500" },
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
    <div className="group flex w-36 flex-col items-center gap-2 rounded-2xl border bg-card p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:w-40">
      <div className={`size-16 rounded-full bg-gradient-to-br ${color} ring-4 ring-background`} />
      <p className="mt-1 text-center text-sm font-semibold leading-tight">{name}</p>
      <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">{role}</span>
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

        {/* Location */}
        <section className="border-t bg-card/50">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <MapPin className="size-3" /> We are located in
              </p>
              <h2 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
                Toronto, <span className="italic text-primary">Canada</span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Built with focus and quiet determination. We make things that last — not because
                it's easy, but because that's how we're wired.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Scale</p>
                <p className="mt-2 text-4xl font-semibold">1.2M+</p>
                <p className="mt-1 text-xs text-muted-foreground">Ads generated this year</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Community</p>
                <p className="mt-2 text-4xl font-semibold">2,400+</p>
                <p className="mt-1 text-xs text-muted-foreground">Active teams</p>
              </div>
              <div className="col-span-2 rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Saved</p>
                <p className="mt-2 text-4xl font-semibold">80%</p>
                <p className="mt-1 text-xs text-muted-foreground">Avg. production time saved per campaign</p>
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
