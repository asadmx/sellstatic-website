import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import {
  TbClockHour4,
  TbPuzzle2,
  TbPlugConnected,
  TbCoin,
  TbWand,
  TbPalette,
  TbRocket,
  TbUsersGroup,
  TbChartHistogram,
  TbApps,
} from "react-icons/tb";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StepsShowcase } from "@/components/steps-showcase";
import { FeaturedLogos } from "@/components/blocks/featured-logos";
import { ConnectedPlatforms } from "@/components/blocks/connected-platforms";
import { FeatureCarousel } from "@/components/blocks/feature-carousel";
import { AdShowcase } from "@/components/blocks/ad-showcase";
import { GooeyText } from "@/components/ui/gooey-text";
import { Reveal } from "@/components/reveal";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import teamBooth from "@/assets/team-booth.jpg";
import webSummit from "@/assets/web-summit.jpg";
import wildCollision from "@/assets/wild-collision.jpg";
import wildTeam from "@/assets/wild-team.jpg";
import trailerPoster from "@/assets/trailer-poster.jpg";
import stepImages from "@/assets/step-images.jpg";
import stepText from "@/assets/step-text.jpg";
import stepTemplates from "@/assets/step-templates.jpg";
import stepPreview from "@/assets/step-preview.jpg";
import { useRef, useState } from "react";

const productSteps = [
  { id: "1", name: "Ad Creator", title: "Generate ads from a one-line brief", description: "Describe your offer and SellStatic generates 100+ on-brand ad variations across every format and aspect ratio in seconds." },
  { id: "2", name: "Video Generator", title: "Turn any idea into a multi-scene video", description: "Drop a link, image, or text. Our AI Video Director writes the script, picks visuals, adds voiceover, and renders it for every channel." },
  { id: "3", name: "Scheduled Posts", title: "Plan a month of posts in one calendar", description: "Schedule across 13+ platforms from a single drag-and-drop calendar. Approvals, time zones, and best-time-to-post handled for you." },
  { id: "4", name: "Dashboard", title: "See what's working — instantly", description: "Track CTR, impressions, conversions, and spend across every ad and channel from one clean performance dashboard." },
];

const productImages = {
  step1img1: stepText,
  step1img2: stepImages,
  step2img1: stepTemplates,
  step2img2: stepPreview,
  step3img: stepImages,
  step4img: stepPreview,
  alt: "SellStatic product screenshot",
};

const features = [
  { icon: TbWand, title: "AI Ad Generator", desc: "Describe your offer in a sentence — get 100 on-brand ad variations across formats in seconds." },
  { icon: TbPalette, title: "Brand Kit Sync", desc: "Upload your logo, fonts, and colors once. Every asset stays perfectly on-brand, automatically." },
  { icon: TbRocket, title: "One-Click Publish", desc: "Schedule and post to 13+ networks from a single calendar — no more copy-pasting between dashboards." },
  { icon: TbUsersGroup, title: "Approval Workflows", desc: "Loop in stakeholders with shareable previews and inline comments before anything goes live." },
  { icon: TbChartHistogram, title: "Live Performance", desc: "See which creative is winning in real time, then auto-remix the best performers into new variants." },
  { icon: TbApps, title: "Native Integrations", desc: "Plug into Meta, TikTok, Google, LinkedIn, and more — no Zapier, no duct tape, just connect and go." },
];

const faqs = [
  { q: "How is SellStatic different from a regular ad tool?", a: "Most tools give you a blank canvas. SellStatic gives you 100 finished, on-brand ad variations the moment you describe your campaign — then publishes them everywhere from one place." },
  { q: "How quickly can I get started?", a: "Under 5 minutes. Import your brand kit, connect your ad accounts, and your first batch of ads is ready to schedule before your coffee gets cold." },
  { q: "Which platforms do you support?", a: "Facebook, Instagram, Threads, X, TikTok, LinkedIn, Pinterest, YouTube, Twitch, Google Business, plus Facebook Ads, Google Ads, and TikTok Ads." },
  { q: "Do I need design or copywriting skills?", a: "Nope. Our AI handles layout, typography, and copy in your brand voice. You stay in control with quick edits and one-click variations." },
  { q: "Is my data safe?", a: "Yes. We never use your content to train public models, your brand assets are encrypted at rest, and you can export or delete everything at any time." },
  { q: "Can I try it free?", a: "Absolutely. Start free with no credit card — generate your first 25 ads on us." },
];

const problems = [
  { icon: TbClockHour4, title: "Time Consuming", desc: "Creating and managing content takes much longer than it should." },
  { icon: TbPuzzle2, title: "Skill Gaps", desc: "You need design, writing, and tech skills just to get started." },
  { icon: TbPlugConnected, title: "Poor Integration", desc: "Tools don't talk to each other, making publishing and planning a hassle." },
  { icon: TbCoin, title: "Wasting Money", desc: "Paying for multiple tools and freelancers adds up quickly." },
];


const stats = [
  { v: "100+", l: "Ad creatives generated" },
  { v: "15s", l: "From concept to first draft" },
  { v: "13", l: "Connected platforms" },
  { v: "20+", l: "Hours saved per week" },
];


export function HeroSection() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <GooeyText
                texts={["Marketing", "made", "easy"]}
                className="mx-auto h-12 w-full max-w-md"
                textClassName="text-2xl md:text-3xl font-semibold tracking-tight text-primary"
              />

              <Reveal as="div" delay={100}>
                <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                  Your AI and marketing engine built for <span className="italic text-primary">growth</span>.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
                  SellStatic turns your ideas into on-brand ads and social posts, then schedules
                  them across platforms — so you can focus on what matters most.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/create-ad"><span>Try Now</span><ArrowRight className="ml-2 size-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/dashboard"><span>Open dashboard</span></Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* AS FEATURED IN */}
        <FeaturedLogos />

        {/* DEMO VIDEO */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              See it in action
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Watch SellStatic build a <span className="italic text-primary">full campaign</span> in 60 seconds.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From a one-line brief to scheduled posts across every platform — no editing, no juggling tabs.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <DemoVideo />
          </Reveal>
        </section>

        {/* PROBLEMS */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            The problem
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
            Marketing today is <span className="italic text-primary">broken</span>.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-card">
                <div className="h-full p-8 transition-colors hover:bg-accent/40">
                  <div className="grid size-12 place-items-center rounded-xl border bg-background text-primary">
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="border-y bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                Core features
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                Everything you need to <span className="italic text-primary">launch and learn</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Six tightly-integrated tools that replace your entire creative stack.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 70}>
                  <div
                    className="group relative h-full overflow-hidden rounded-2xl border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="relative grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <f.icon className="size-5" />
                    </div>
                    <h3 className="relative mt-5 text-lg font-semibold">{f.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT FEATURE CAROUSEL */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              Everything we offer
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              One platform, <span className="italic text-primary">every tool</span> you need.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ad creator, video generator, scheduled posts, performance dashboard — all under one roof.
            </p>
          </Reveal>
          <FeatureCarousel steps={productSteps} image={productImages} />
        </section>

        {/* AD SHOWCASE */}
        <AdShowcase />

        {/* SHIP CTA */}
        <section className="border-y bg-accent/40">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Ship your next campaign <span className="italic text-primary">today</span>.
            </h2>
            <div>
              <p className="max-w-md text-muted-foreground">
                Generate on-brand ads, schedule everywhere, and measure results in one place.
                Join teams scheduling and publishing across every platform with SellStatic.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/create-ad">Get Started <ArrowRight className="ml-1 size-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/platforms">See platforms</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTED PLATFORMS */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            Connected Platforms
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            Publish everywhere from <span className="italic text-primary">one place</span>.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Connect your accounts once. SellStatic schedules and publishes to all of them.
          </p>

          <ConnectedPlatforms />
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary/80">
              Why Choose Us
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl lg:text-5xl">
              Empowering teams with <span className="italic text-primary">AI-driven</span> tools to move faster.
            </h2>
            <p className="mt-6 max-w-2xl text-background/60">
              Real numbers from real usage — measurable gains in creation speed and weekly time saved.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="bg-foreground p-8">
                  <div className="text-4xl font-semibold italic text-primary">{s.v}</div>
                  <p className="mt-2 text-sm text-background/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT — team photos collage */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                About <span className="italic text-primary">SellStatic</span>
                <br />
                with Creativity and Speed
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Wherever you are shouldn't be a limiter to great marketing. We're building an
                AI-first platform to help modern teams create, publish, and measure campaigns —
                fast and on brand.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/about">Explore Product <ArrowRight className="ml-1 size-4" /></Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={wildCollision}
                  alt="SellStatic team at Collision Toronto"
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl border object-cover shadow-lg shadow-primary/5 transition-transform duration-500 hover:scale-[1.02]"
                />
                <img
                  src={teamBooth}
                  alt="SellStatic founders at expo booth"
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl border object-cover shadow-lg shadow-primary/5 transition-transform duration-500 hover:scale-[1.02]"
                />
                <img
                  src={webSummit}
                  alt="SellStatic on stage at Web Summit"
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl border object-cover shadow-lg shadow-primary/5 transition-transform duration-500 hover:scale-[1.02]"
                />
                <img
                  src={wildTeam}
                  alt="SellStatic team in branded shirts"
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl border object-cover shadow-lg shadow-primary/5 transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          </div>
        </section>
        {/* HOW IT WORKS */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            How it works
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
            From idea to live ad in <span className="italic text-primary">four steps</span>.
          </h2>

          <div className="mt-12">
            <StepsShowcase />
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Hover a step to preview. Built for speed — every interaction takes seconds, not hours.
          </p>
        </section>

        {/* READY CTA */}
        <section className="border-y bg-accent/40">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Ready when you are</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
              Bring your brand kit, connect platforms, and publish within <span className="italic text-primary">minutes</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Import your brand and start publishing your content today.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/create-ad">Get Started <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                FAQs
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                Questions about <span className="italic text-primary">SellStatic</span>?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to know about our platform, pricing, and how AI ad generation works.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Join to stay up to date with <span className="italic text-primary">SellStatic</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Product updates, launches, and early access — straight to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-md border bg-background px-4 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <div className="relative mx-auto mt-12 max-w-4xl">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, hsl(var(--primary) / 0.45), transparent 70%), radial-gradient(40% 40% at 80% 30%, #a855f7aa, transparent 70%), radial-gradient(40% 40% at 20% 70%, #ec4899aa, transparent 70%)",
        }}
      />
      <div className="group relative aspect-video overflow-hidden rounded-3xl border bg-black shadow-2xl shadow-primary/20 ring-1 ring-white/10">
        <video
          ref={videoRef}
          src="/sellstatic-trailer.mp4"
          poster={trailerPoster}
          controls={playing}
          playsInline
          preload="metadata"
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          className="h-full w-full object-cover"
        />

        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play demo video"
            className="absolute inset-0 grid place-items-center bg-black/20 transition-colors hover:bg-black/10"
          >
            <span className="relative grid size-24 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 transition-transform duration-300 hover:scale-110">
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
              <span className="absolute inset-2 -z-10 rounded-full bg-gradient-to-br from-primary to-fuchsia-500" />
              <Play className="size-10 translate-x-0.5 fill-white text-white" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
