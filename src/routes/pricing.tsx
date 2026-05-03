import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
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
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={
                  "rounded-2xl border bg-card p-8 transition-all " +
                  (p.highlight ? "border-primary shadow-xl shadow-primary/10 md:-translate-y-2" : "")
                }
              >
                {p.highlight && (
                  <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Most popular
                  </div>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">${annual ? p.annual : p.monthly}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.credits} credits / month
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
                <Button className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}>
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Feature matrix */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-2xl font-semibold md:text-3xl">What's included</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Feature</th>
                    {plans.map((p) => (
                      <th key={p.name} className="px-6 py-4 text-center font-semibold">
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={row.label} className={i % 2 ? "bg-background" : "bg-muted/20"}>
                      <td className="px-6 py-3.5 font-medium text-foreground/90">{row.label}</td>
                      {row.values.map((v, idx) => (
                        <td key={idx} className="px-6 py-3.5 text-center">
                          <CellValue value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
