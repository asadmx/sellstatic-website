import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Wrench, Plug, DollarSign, Play, Sparkles, Layers, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StepsShowcase } from "@/components/steps-showcase";
import { FeaturedLogos } from "@/components/blocks/featured-logos";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: Sparkles, title: "AI Ad Generator", desc: "Describe your offer in a sentence — get 100 on-brand ad variations across formats in seconds." },
  { icon: Layers, title: "Brand Kit Sync", desc: "Upload your logo, fonts, and colors once. Every asset stays perfectly on-brand, automatically." },
  { icon: Zap, title: "One-Click Publish", desc: "Schedule and post to 13+ networks from a single calendar — no more copy-pasting between dashboards." },
  { icon: ShieldCheck, title: "Approval Workflows", desc: "Loop in stakeholders with shareable previews and inline comments before anything goes live." },
  { icon: BarChart3, title: "Live Performance", desc: "See which creative is winning in real time, then auto-remix the best performers into new variants." },
  { icon: Plug, title: "Native Integrations", desc: "Plug into Meta, TikTok, Google, LinkedIn, and more — no Zapier, no duct tape, just connect and go." },
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
  { icon: Clock, title: "Time Consuming", desc: "Creating and managing content takes much longer than it should." },
  { icon: Wrench, title: "Skill Gaps", desc: "You need design, writing, and tech skills just to get started." },
  { icon: Plug, title: "Poor Integration", desc: "Tools don't talk to each other, making publishing and planning a hassle." },
  { icon: DollarSign, title: "Wasting Money", desc: "Paying for multiple tools and freelancers adds up quickly." },
];

const platforms = [
  "Facebook", "Instagram", "Threads", "X (Twitter)", "TikTok", "LinkedIn",
  "Google Business", "Pinterest", "YouTube", "Twitch", "Facebook Ads", "Google Ads", "TikTok Ads",
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
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1 text-xs font-medium uppercase tracking-wider text-accent-foreground">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                100 ads · 15 seconds · 13 platforms
              </span>

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
            </div>
          </div>
        </section>

        {/* AS FEATURED IN */}
        <FeaturedLogos />

        {/* PROBLEMS */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            The problem
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
            Marketing today is <span className="italic text-primary">broken</span>.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <div key={p.title} className="bg-card p-8 transition-colors hover:bg-accent/40">
                <div className="grid size-12 place-items-center rounded-xl border bg-background text-primary">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

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

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {platforms.map((p) => (
              <div
                key={p}
                className="rounded-xl border bg-card p-4 text-center text-sm font-medium transition-colors hover:bg-accent/40"
              >
                {p}
              </div>
            ))}
          </div>
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
