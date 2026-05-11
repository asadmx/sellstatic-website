import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnimatedPricing } from "@/components/blocks/animated-pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | SellStatic" },
      {
        name: "description",
        content: "Simple plans that scale with your team. Drive, Growth, and Enterprise.",
      },
      { property: "og:title", content: "Pricing | SellStatic" },
      { property: "og:description", content: "Simple plans that scale with your team." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-6 py-12 text-center lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            Simple pricing. <span className="italic text-primary">No surprises</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Three plans built for every stage. All include unlimited exports and brand
            customization.
          </p>
        </section>

        {/* Pricing tier cards */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <AnimatedPricing />
        </section>

        {/* AI agents */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-8 rounded-3xl border bg-card/70 p-8 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.08)] lg:grid-cols-[1.1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                AI Agents for Marketing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Agents that help you move from brief to launch{" "}
                <span className="italic text-primary">faster</span>.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                SellStatic agents help you write, generate, refine, and publish campaigns without
                bouncing between tools.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Ad Agent", "Turns a short brief into ready-to-test static ad variations."],
                [
                  "Video Ad Agent",
                  "Builds and polishes short-form video ads from your idea or URL.",
                ],
                [
                  "Social Agent",
                  "Keeps your scheduled content moving across channels without extra busywork.",
                ],
                ["Analytics Agent", "Explains what is performing and what to test next."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border bg-background p-5">
                  <div className="text-sm font-semibold text-foreground">{title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="bg-primary/5">
        <SiteFooter />
      </div>
    </>
  );
}
