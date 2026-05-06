import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { AnimatedPricing } from "@/components/blocks/animated-pricing";
import { Check, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SellStatic" },
      { name: "description", content: "Simple plans that scale with your team. Starter, Professional, and Growth — pay monthly or save with annual." },
      { property: "og:title", content: "Pricing — SellStatic" },
      { property: "og:description", content: "Simple plans that scale with your team." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    monthly: 39,
    annual: 26,
    credits: "1,500",
    desc: "For solo marketers shipping their first campaigns.",
    cta: "Start Starter",
    highlight: false,
  },
  {
    name: "Professional",
    monthly: 99,
    annual: 66,
    credits: "5,000",
    desc: "For growing teams running weekly campaigns.",
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Growth",
    monthly: 199,
    annual: 133,
    credits: "15,000",
    desc: "For high-volume teams that need full power.",
    cta: "Talk to sales",
    highlight: false,
  },
] as const;

type Cell = boolean | string;
const features: { label: string; values: [Cell, Cell, Cell] }[] = [
  { label: "AI Image Generation", values: ["Basic + Standard", "+ HD + Premium", "+ Ultra 4K"] },
  { label: "AI Templates (social, flyer, email, brochure)", values: [true, true, true] },
  { label: "Social Media Scheduling (Metricool)", values: [true, true, true] },
  { label: "Brand Kits", values: ["1", "3", "5"] },
  { label: "Video Director", values: ["Basic editing", "Full", "Full"] },
  { label: "AI Video Generation", values: [false, "10 videos/mo", "Unlimited"] },
  { label: "Image-to-Video (Kling, Seedance)", values: [false, true, true] },
  { label: "AI Voiceover (ElevenLabs)", values: [false, true, true] },
  { label: "Brand Builder", values: [false, true, true] },
  { label: "Molt Claw Agent", values: [false, false, true] },
  { label: "Ad Campaign Management", values: [false, false, true] },
  { label: "Dedicated Instance", values: [false, false, true] },
  { label: "4K Video", values: [false, false, true] },
  { label: "Priority Support", values: [false, false, true] },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto size-4 text-primary" />;
  if (value === false) return <Minus className="mx-auto size-4 text-muted-foreground/40" />;
  return <span className="text-sm text-foreground/90">{value}</span>;
}

function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            Simple pricing. <span className="italic text-primary">No surprises</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Three plans built for every stage. All include unlimited exports and brand customization.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border bg-card p-1 text-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 transition ${!annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-1.5 transition ${annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              Annual <span className="ml-1 text-xs opacity-80">save 33%</span>
            </button>
          </div>
        </section>

        {/* Pricing tier cards */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <AnimatedPricing annual={annual} />
        </section>

        {/* Feature matrix */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Compare plans</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Everything that's <span className="italic text-primary">included</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border bg-gradient-to-b from-card to-card/50 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.08)]">
            {/* Header */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-4 border-b bg-muted/30 px-6 py-5 sm:px-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Feature
              </div>
              {plans.map((p) => (
                <div key={p.name} className="text-center">
                  <div
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      p.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground"
                    }`}
                  >
                    {p.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Rows */}
            <ul className="divide-y">
              {features.map((row) => (
                <li
                  key={row.label}
                  className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/20 sm:px-8"
                >
                  <div className="text-sm font-medium text-foreground/90">{row.label}</div>
                  {row.values.map((v, idx) => (
                    <div key={idx} className="text-center">
                      <CellValue value={v} />
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            ✓ Unlimited exports · ✓ Cancel anytime · ✓ 14-day Pro trial
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
