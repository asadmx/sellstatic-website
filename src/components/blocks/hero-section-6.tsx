import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const logos = ["Shopify", "Notion", "Linear", "Vercel", "Stripe", "Figma", "Loom", "Framer", "Webflow", "Klaviyo"];

const features = [
  { icon: "🎨", title: "AI-Generated Creatives", desc: "Describe your brand and let AI generate production-ready ad creatives across every format in seconds." },
  { icon: "📐", title: "300+ Templates", desc: "Start fast with professionally designed templates built for real industries. Customize every element to match your brand." },
  { icon: "🎬", title: "AI Video Director", desc: "Drop a link, image, or text — AI Director builds a full multi-scene video ad for Instagram, TikTok, YouTube Shorts, and more." },
  { icon: "📊", title: "Performance Analytics", desc: "Track CTR, impressions, and conversions across every ad and platform from one clean dashboard." },
  { icon: "🔁", title: "Multi-Platform Export", desc: "One click to export your ads perfectly sized and formatted for Meta, Google, LinkedIn, TikTok, and more." },
  { icon: "⚡", title: "Instant Variant Testing", desc: "Generate multiple variants of any ad in seconds. Test headlines, visuals, and CTAs to find what drives results." },
];

const steps = [
  { n: "01", title: "Describe your ad", desc: "Tell SellStatic what you're promoting — paste a URL, describe your product, or drop an image. AI does the heavy lifting." },
  { n: "02", title: "Generate & customize", desc: "AI instantly generates multiple creative variants. Swap templates, tweak copy, adjust colors — full control at every step." },
  { n: "03", title: "Publish everywhere", desc: "Export your ads perfectly formatted for Meta, Google, TikTok, LinkedIn, and more — or download and launch immediately." },
];

const testimonials = [
  { quote: "SellStatic cut our ad production time by 80%. We went from a week of back-and-forth to publishing in under an hour. The AI Director feature alone is worth the subscription.", name: "Jordan Kim", role: "Head of Growth, Vercel", initial: "J" },
  { quote: "The templates are actually good — not the usual generic stuff. We launched a full campaign across 5 platforms in one afternoon. The analytics dashboard keeps everything in one place.", name: "Maya Chen", role: "Marketing Director, Lemon Squeezy", initial: "M" },
  { quote: "As a solo founder, I used to outsource all our ad design. SellStatic replaced that entirely. I can spin up a full set of ad variants for any campaign in minutes.", name: "Rohan Mehta", role: "Founder, CartSniper", initial: "R" },
];

export function HeroSection() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1 text-xs font-medium uppercase tracking-wider text-accent-foreground">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                AI-Powered Ad Creation
              </span>

              <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Ads that sell <span className="italic text-primary">everywhere</span>.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-balance text-muted-foreground">
                SellStatic turns your ideas into perfectly formatted ads across every platform.
                Design, generate, and launch — powered by AI that understands your brand.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#"><span>Start creating free</span><ArrowRight className="ml-2 size-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#how"><span>Watch a demo</span></a>
                </Button>
              </div>

              <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {["A", "J", "M", "R"].map((c, i) => (
                    <div
                      key={c}
                      className="grid size-8 place-items-center rounded-full border-2 border-background bg-primary text-xs font-semibold text-primary-foreground"
                      style={{ opacity: 1 - i * 0.1 }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
                <p className="text-left">
                  <strong className="text-foreground">2,400+ teams</strong> creating ads with SellStatic this month
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section className="border-y bg-card">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8 text-sm italic text-muted-foreground/60">
            <span className="text-xs uppercase tracking-wider not-italic">Trusted by teams at</span>
            {logos.map((l) => (
              <span key={l} className="font-semibold">{l}</span>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mx-auto max-w-5xl px-6 py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            What SellStatic does
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
            Everything you need to create ads that <span className="italic text-primary">convert</span>
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-card p-8 transition-colors hover:bg-accent/40">
                <div className="grid size-12 place-items-center rounded-xl border bg-background text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary/80">
              How it works
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
              From idea to live ad in <span className="italic text-primary">three steps</span>
            </h2>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-background/10 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="bg-foreground p-8 transition-colors hover:bg-background/[0.04]">
                  <div className="text-5xl font-semibold italic text-background/20">{s.n}</div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            What teams are saying
          </p>
          <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">
            Real results from real teams
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg">
                <p className="italic leading-relaxed text-foreground/80">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-y bg-accent/40">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Start creating ads that actually <span className="italic text-primary">convert</span>.
            </h2>
            <div>
              <p className="max-w-md text-muted-foreground">
                Free to start. No credit card required. Generate your first AI ad in under 60
                seconds and see why 2,400+ teams choose SellStatic.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button size="lg">Get started free <ArrowRight className="ml-1 size-4" /></Button>
                <Button size="lg" variant="outline">Open dashboard</Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                ✓ Free plan available · ✓ No credit card · ✓ Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
