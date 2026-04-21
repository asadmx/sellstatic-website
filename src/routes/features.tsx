import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — SellStatic" },
      { name: "description", content: "AI-generated creatives, 300+ templates, AI Video Director, analytics, and multi-platform export — everything you need to ship ads that convert." },
      { property: "og:title", content: "Features — SellStatic" },
      { property: "og:description", content: "AI-generated creatives, templates, AI Video Director, analytics and multi-platform export." },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  { icon: "🎨", title: "AI-Generated Creatives", desc: "Describe your brand and let AI generate production-ready ad creatives across every format in seconds." },
  { icon: "📐", title: "300+ Templates", desc: "Start fast with professionally designed templates built for real industries. Customize every element to match your brand." },
  { icon: "🎬", title: "AI Video Director", desc: "Drop a link, image, or text — AI Director builds a full multi-scene video ad for Instagram, TikTok, YouTube Shorts, and more." },
  { icon: "📊", title: "Performance Analytics", desc: "Track CTR, impressions, and conversions across every ad and platform from one clean dashboard." },
  { icon: "🔁", title: "Multi-Platform Export", desc: "One click to export your ads perfectly sized and formatted for Meta, Google, LinkedIn, TikTok, and more." },
  { icon: "⚡", title: "Instant Variant Testing", desc: "Generate multiple variants of any ad in seconds. Test headlines, visuals, and CTAs to find what drives results." },
];

function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-6 py-24 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Features</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            Built to make ads <span className="italic text-primary">faster</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Every tool you need — from first idea to live campaign — in one focused workspace.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 lg:grid-cols-3">
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

        <section className="border-y bg-accent/40">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Ready to try it for <span className="italic text-primary">free</span>?
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
