import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SellStatic" },
      { name: "description", content: "Simple plans that scale with your team. Start free, upgrade when you're ready." },
      { property: "og:title", content: "Pricing — SellStatic" },
      { property: "og:description", content: "Simple plans that scale with your team." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    desc: "Perfect for trying SellStatic and shipping your first ads.",
    features: ["3 projects", "20 AI generations / mo", "Basic templates", "PNG / JPG export"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    cadence: "/ month",
    desc: "For marketers and small teams shipping campaigns weekly.",
    features: ["Unlimited projects", "Unlimited AI generations", "300+ templates", "AI Video Director", "Multi-platform export", "Performance analytics"],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Team",
    price: "$99",
    cadence: "/ month",
    desc: "For teams that need collaboration, brand kits, and SSO.",
    features: ["Everything in Pro", "5 team seats", "Brand kits", "Shared templates", "SSO & SAML", "Priority support"],
    cta: "Contact sales",
    highlight: false,
  },
];

function PricingPage() {
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
            Start free, upgrade when you're ready. All plans include unlimited exports and brand customization.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
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
                  <span className="text-4xl font-semibold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.cadence}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <Button className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}>
                  {p.cta}
                </Button>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            ✓ All plans include unlimited exports · ✓ Cancel anytime · ✓ 14-day Pro trial
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
