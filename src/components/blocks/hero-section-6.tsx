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
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import trailerPoster from "@/assets/trailer-poster.jpg";
import { useRef, useState, useEffect } from "react";

const productSteps = [
  {
    id: "1",
    name: "Ad Creator",
    title: "Create campaign-ready ads in a guided flow",
    description:
      "Write the headline, audience, CTA, and brand colors once. SellStatic turns the brief into polished ad variations you can preview, save, and publish.",
    highlights: [
      "Live preview while you write",
      "AI-generated image ad variations",
      "Download or post directly to social",
    ],
  },
  {
    id: "2",
    name: "Video Generator",
    title: "Generate and edit video ads in one workflow",
    description:
      "Choose the video style, model, format, and prompt, then move into a full editor with media, text, timeline controls, and an AI assistant for faster revisions.",
    highlights: [
      "Pick from leading video models and formats",
      "Preview generation status in real time",
      "Refine clips in a timeline-based editor",
    ],
  },
  {
    id: "3",
    name: "Scheduled Posts",
    title: "Schedule every social post from one workspace",
    description:
      "Draft posts, attach campaign creative, choose connected channels, and keep upcoming launches organized from a clean publishing calendar.",
    highlights: [
      "Manage social drafts and scheduled posts",
      "Preview channel-ready content before publishing",
      "Keep campaigns organized across platforms",
    ],
  },
  {
    id: "4",
    name: "Dashboard",
    title: "Track creative performance from one dashboard",
    description:
      "Watch campaign results, compare generated creatives, and spot which channels are driving the strongest performance without jumping between tools.",
    highlights: [
      "See key campaign metrics at a glance",
      "Compare ad performance by creative and channel",
      "Use insights to plan the next test faster",
    ],
  },
];

const features = [
  {
    icon: TbWand,
    title: "AI Ad Generator",
    desc: "Describe your offer in a sentence and get 100 on-brand ad variations across formats in seconds.",
  },
  {
    icon: TbPalette,
    title: "Brand Kit Sync",
    desc: "Upload your logo, fonts, and colors once. Every asset stays on-brand automatically.",
  },
  {
    icon: TbRocket,
    title: "One-Click Publish",
    desc: "Schedule and post to 13+ networks from a single calendar, without copy-pasting between dashboards.",
  },
  {
    icon: TbChartHistogram,
    title: "Analytics & Data",
    desc: "Track what is working in real time, then use the data to guide your next creative move.",
  },
  {
    icon: TbUsersGroup,
    title: "Live Collaboration",
    desc: "Loop in stakeholders with shareable previews and comments before anything goes live.",
  },
  {
    icon: TbApps,
    title: "Your Personal Video Ad Agent",
    desc: "Turn a brief, a link, or a script into polished video ads you can refine and publish quickly.",
  },
];

const faqs = [
  {
    q: "How is SellStatic different from Canva or Adobe Express?",
    a: "Those are design tools. SellStatic is built for performance marketers. It generates 100+ ad variations tailored to each platform, handles scheduling across 13+ networks, and tracks performance from one dashboard.",
  },
  {
    q: "Can I generate video ads, or just static images?",
    a: "Both. Upload a link, image, or description and the AI Video Agent generates scripted, edited video ads with voiceover, visuals, and branding.",
  },
  {
    q: "Do you work with my existing brand guidelines?",
    a: "Yes. Upload your logo, fonts, colors, and tone guidelines once. Every generated ad respects your brand kit automatically.",
  },
  {
    q: "How much does SellStatic cost?",
    a: "SellStatic has three plans: Drive, Growth, and Enterprise. Monthly and annual billing are available for Drive and Growth.",
  },
  {
    q: "Which ad networks do you support?",
    a: "Facebook, Instagram, Threads, X, TikTok, LinkedIn, Pinterest, YouTube, Twitch, Google Ads, Facebook Ads Manager, TikTok Ads Manager, and LinkedIn Campaign Manager.",
  },
  {
    q: "Do you provide analytics and performance tracking?",
    a: "Yes, Growth and Enterprise plans include CTR, impressions, conversions, and spend by platform and campaign.",
  },
];

const problems = [
  {
    icon: TbClockHour4,
    title: "Time Consuming",
    desc: "Creating and managing content takes much longer than it should.",
  },
  {
    icon: TbPuzzle2,
    title: "Skill Gaps",
    desc: "You need design, writing, and tech skills just to get started.",
  },
  {
    icon: TbPlugConnected,
    title: "Poor Integration",
    desc: "Tools don't talk to each other, making publishing and planning a hassle.",
  },
  {
    icon: TbCoin,
    title: "Wasting Money",
    desc: "Paying for multiple tools and freelancers adds up quickly.",
  },
];

const stats = [
  { v: "100,000+", l: "Ads generated" },
  { v: "5.2s", l: "Over 100 ads created" },
  { v: "6", l: "Countries we're operating in" },
  { v: "50", l: "Integrations and counting" },
  { v: "20+", l: "Hours saved per week" },
];

const adPreviews = [
  "/ads/apple.mp4",
  "/ads/sellstatic.mp4",
  "/ads/ikea.mp4",
  "/ads/cadillac.mp4",
  "/ads/Figma.mp4",
  "/ads/Mercedes-Benz Canada.mp4",
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
                  Your AI Marketing engine built for{" "}
                  <span className="italic text-primary">growth</span>.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
                  SellStatic turns your ideas into on-brand ads and social posts, then schedules
                  them across platforms so you can focus on what matters most.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a
                      href="https://www.sellstatic.app/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* AI GENERATED VIDEO ADS (AUTO-SCROLL STRIP) */}
        <section className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            AI Generated Video Ads
          </p>
          <div className="relative mt-4">
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[
                AutoScroll({
                  playOnInit: true,
                  speed: 0.7,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="ml-0 flex items-center">
                {[...adPreviews, ...adPreviews].map((src, i) => (
                  <CarouselItem
                    key={`${i}-${String(src)}`}
                    className="basis-[82%] pl-3 sm:basis-[58%] md:basis-[42%] lg:basis-[32%]"
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b1d]">
                      <div className="aspect-video w-full">
                        <LazyVideo
                          src={src}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0b1d] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0b1d] to-transparent" />
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
              Watch Our <span className="italic text-primary">Trailer</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              See how a brief becomes a campaign without the usual back-and-forth.
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
                A suite of powerful tools to{" "}
                <span className="italic text-primary">launch better</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A suite of powerful tools that helps you move from concept to campaign with less
                friction.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 70}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="relative grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <f.icon className="size-5" />
                    </div>
                    <h3 className="relative mt-5 text-lg font-semibold">{f.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.desc}
                    </p>
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
              Ad creator, video generator, scheduled posts, and performance dashboard all under one
              roof.
            </p>
          </Reveal>
          <FeatureCarousel steps={productSteps} />
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
                Generate on-brand ads, schedule everywhere, and measure results in one place. Join
                teams scheduling and publishing across every platform with SellStatic.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="mt-10">
                  <Button asChild size="lg">
                    <a
                      href="https://www.sellstatic.app/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started <ArrowRight className="ml-1 size-4" />
                    </a>
                  </Button>
                </div>
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
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="https://www.sellstatic.app/home" target="_blank" rel="noopener noreferrer">
                <span>Get Started</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary/80">
              Why Choose Us
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl lg:text-5xl">
              Empowering teams with <span className="italic text-primary">AI-driven</span> tools to
              move faster.
            </h2>
            <p className="mt-6 max-w-2xl text-background/60">
              Real numbers from real usage, measurable gains in creation speed and weekly time
              saved.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-background/10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {stats.map((s) => (
                <div key={s.l} className="bg-foreground p-8">
                  <div className="text-4xl font-semibold italic text-primary">{s.v}</div>
                  <p className="mt-2 text-sm text-background/60">{s.l}</p>
                </div>
              ))}
            </div>
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
            Hover a step to preview. Built for speed. Every interaction takes seconds, not hours.
          </p>
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
                Everything you need to know about our platform, pricing, and how AI ad generation
                works.
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
        <section className="border-y bg-primary/5">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Stay up to date with <span className="italic text-primary">SellStatic</span>.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Get product updates, launch notes, and practical marketing ideas sent to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-md border bg-background px-4 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
              />
              <Button type="submit">Stay updated</Button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !video.src) {
          video.src = src;
          video.load();
          video.play().catch(() => {});
        }
      },
      { rootMargin: "150px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
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
