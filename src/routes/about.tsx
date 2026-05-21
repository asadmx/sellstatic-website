import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { TestimonialsCarousel } from "@/components/blocks/testimonials-carousel";
import { AnimatedText } from "@/components/ui/animated-text";
import northAmericaMap from "@/assets/north-america-map.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SellStatic" },
      {
        name: "description",
        content:
          "Meet the team behind SellStatic, creators, designers, and builders making marketing tools that feel fun, human, and ridiculously easy to use.",
      },
      { property: "og:title", content: "About SellStatic" },
      { property: "og:description", content: "Meet the team behind SellStatic." },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Imam Khalid",
    role: "CEO",
    color: "from-indigo-300 to-indigo-500",
    image: "/headshots/imam.png",
  },
  {
    name: "Abdullah Abdullah",
    role: "CTO",
    color: "from-pink-300 to-pink-500",
    image: "/headshots/abdullah.png",
  },
  {
    name: "Aditya Sharma",
    role: "CPO",
    color: "from-rose-300 to-rose-500",
    image: "/headshots/aditya.png",
  },
  {
    name: "Ahmad Pasha",
    role: "Front End Lead",
    color: "from-purple-300 to-purple-500",
    image: "/headshots/ahmad.png",
  },
  {
    name: "Muhamad Moiz",
    role: "Back End Lead",
    color: "from-amber-300 to-amber-500",
    image: "/headshots/moiz.png",
  },
  {
    name: "Sharat",
    role: "Full Stack Engineer",
    color: "from-emerald-300 to-emerald-500",
    image: "/headshots/sharat.png",
  },
  {
    name: "Harnoor Boparai",
    role: "Full Stack Engineer",
    color: "from-sky-300 to-sky-500",
    image: "/headshots/harnoor.png",
  },
  {
    name: "Jaazib Tariq",
    role: "Full Stack Engineer",
    color: "from-fuchsia-300 to-fuchsia-500",
    image: "/headshots/jaazib.png",
  },
  {
    name: "Asad Malik",
    role: "Full Stack Engineer",
    color: "from-cyan-300 to-cyan-500",
    image: "/headshots/asad.png",
  },
];

const story = [
  {
    tag: "The Early Days",
    text: "We started by building landing pages and ads from our bedrooms, testing ideas quickly and learning what actually moved people to act.",
  },
  {
    tag: "Turning Point",
    text: "After years of stitching together a dozen tools just to ship a single campaign, we saw every team hit the same wall. So we built SellStatic, the ad studio we always wished we had.",
  },
  {
    tag: "Growth",
    text: "Today, teams use SellStatic to design, generate, and publish ads across multiple platforms, from solo creators to fast-growing brands.",
  },
];

const storyImages = [
  "/ads/WhatsApp Image 2026-05-11 at 12.55.49 PM.jpeg",
  "/ads/WhatsApp Image 2026-05-11 at 12.52.03 PM.jpeg",
  "/ads/WhatsApp Image 2026-05-11 at 12.52.56 PM.jpeg",
  "/ads/WhatsApp Image 2026-05-11 at 12.52.03 PM.jpeg",
];

const testimonials = [
  {
    quote:
      "SellStatic helped us stop treating content like a last minute task. We can build clean, on brand posts quickly, and our team actually feels ahead now.",
    name: "Maya Chen",
    role: "Marketing Manager at Northline Dental",
  },
  {
    quote:
      "Before SellStatic, we were always waiting on someone to make new visuals. Now we can test ideas faster and keep our social channels active without extra stress.",
    name: "Jordan Patel",
    role: "Founder at GlowHaus Studio",
  },
  {
    quote:
      "SellStatic made our ads look much more polished without changing the way our team works. It is simple, fast, and fits into our weekly routine really well.",
    name: "Emily Ross",
    role: "Operations Lead at Oak & Olive Kitchen",
  },
  {
    quote:
      "We needed a better way to create content for promos and new listings. SellStatic helped us move quicker while still keeping everything consistent with our brand.",
    name: "Marcus Bennett",
    role: "Sales Director at RidgePoint Realty",
  },
  {
    quote:
      "The biggest difference is how much easier it is to stay consistent. SellStatic gives us strong content options without making the posts feel generic or forced.",
    name: "Sofia Ramirez",
    role: "Brand Coordinator at TerraSole Apparel",
  },
  {
    quote:
      "SellStatic has saved our team a lot of time. We can go from a rough idea to a usable ad in minutes, which has made our campaigns much easier to manage.",
    name: "Daniel Kim",
    role: "Co-Founder at FreshFork Meals",
  },
  {
    quote:
      "I was surprised by how natural the content felt. SellStatic helps us create posts that look professional but still sound like they came from our business.",
    name: "Avery Brooks",
    role: "Studio Manager at PeakForm Fitness",
  },
  {
    quote:
      "Our team uses SellStatic whenever we need quick campaign creative. It keeps the process simple, cuts down on back and forth, and helps us publish faster.",
    name: "Priya Shah",
    role: "Growth Lead at LaunchLoop",
  },
  {
    quote:
      "SellStatic gave us a practical way to keep marketing moving during busy weeks. The output is clean, useful, and much better than starting from scratch every time.",
    name: "Nathan Walker",
    role: "Owner at Maple & Main Coffee",
  },
];

function TeamCard({
  name,
  role,
  color,
  image,
}: {
  name: string;
  role: string;
  color: string;
  image: string;
}) {
  return (
    <div className="group relative flex w-44 flex-col items-center gap-5 rounded-2xl border border-border/60 bg-card/95 px-5 py-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:w-48">
      <div className="relative size-28 shrink-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(233,213,255,0.7)_0%,rgba(196,181,253,0.45)_35%,rgba(168,85,247,0.22)_62%,rgba(168,85,247,0)_78%)] blur-md"
        />
        <div
          className={`relative mx-auto size-24 overflow-hidden rounded-full bg-gradient-to-br ${color} ring-4 ring-background shadow-[0_0_0_1px_rgba(168,85,247,0.18),0_0_28px_rgba(168,85,247,0.22)]`}
        >
          <img
            src={image}
            alt={`${name} headshot`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-center text-[15px] font-medium leading-tight text-foreground">{name}</p>
      <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-muted-foreground">
        {role}
      </span>
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
          <AnimatedText
            text="About SellStatic"
            as="span"
            replay
            duration={0.035}
            delay={0.02}
            className="mx-auto mb-8"
            textClassName="text-5xl font-black tracking-tight text-foreground sm:text-6xl"
            underlineClassName="rounded-full"
            underlineHeight="h-1.5"
            underlineOffset="-bottom-3"
          />
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Meet the team behind <span className="italic text-primary">SellStatic</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A team of creators, designers, and builders making marketing tools that feel fun, human,
            and ridiculously easy to use.
          </p>
        </section>

        {/* Team grid with radial backdrop */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 size-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_120deg,theme(colors.pink.300),theme(colors.purple.400),theme(colors.indigo.300),theme(colors.pink.300))] opacity-40 blur-3xl" />
          <svg
            className="pointer-events-none absolute inset-0 -z-0 h-full w-full text-foreground"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,140 C200,80 350,200 500,140 C650,80 800,200 1000,140"
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
            <path
              d="M0,260 C200,200 350,320 500,260 C650,200 800,320 1000,260"
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
            <path
              d="M0,380 C200,320 350,440 500,380 C650,320 800,440 1000,380"
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          </svg>

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-start justify-center gap-4">
              {team.slice(0, 4).map((m, i) => (
                <div key={m.name} className={i % 2 === 1 ? "mt-10" : ""}>
                  <TeamCard {...m} />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-start justify-center gap-4">
              {team.slice(4).map((m, i) => (
                <div key={m.name} className={i % 2 === 1 ? "mt-10" : ""}>
                  <TeamCard {...m} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="border-t bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
              Our <span className="italic text-primary">story</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              We are a small team with a simple goal: help marketers move from idea to live campaign
              without the usual chaos.
            </p>
            <div className="mt-14 space-y-10">
              {story.map((s, i) => (
                <div
                  key={s.tag}
                  className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="w-full overflow-hidden rounded-3xl border shadow-sm">
                    <img
                      src={storyImages[i]}
                      alt={s.tag}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {s.tag}
                    </p>
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
            We believe creativity shouldn't{" "}
            <span className="italic text-primary">feel like work</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every feature in SellStatic exists to remove friction, so marketers can spend more time
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

            <div className="relative mt-12 grid items-center gap-10 md:grid-cols-[1fr_2.2fr]">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground">Scale</p>
                  <p className="mt-1 text-4xl font-semibold">100,000+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Ads generated to date</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <p className="mt-1 text-4xl font-semibold">6</p>
                  <p className="mt-1 text-sm text-muted-foreground">Countries and counting</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Saved</p>
                  <p className="mt-1 text-4xl font-semibold">80%</p>
                  <p className="mt-1 text-sm text-muted-foreground">Avg. time saved per campaign</p>
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full">
                <img
                  src={northAmericaMap}
                  alt="Map highlighting Toronto, Canada"
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="absolute inset-0 size-full object-cover opacity-90"
                  style={{
                    filter: "brightness(0.97) contrast(1.05) saturate(1.14)",
                  }}
                />
                {/* Highlight bubble over Toronto */}
                <div className="absolute left-[68%] top-[49%]">
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
              Built with love, to make marketing{" "}
              <span className="italic text-primary">easy for all</span>.
            </h2>
            <div className="mt-6 flex justify-center">
              <Button size="lg">
                Get Started <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">hello@sellstatic.com</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
