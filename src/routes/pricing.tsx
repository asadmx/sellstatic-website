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
        <section className="border-y border-white/10 bg-[#050505] text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 lg:grid-cols-[1.1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C4B5FD] md:text-base">
                AI Agents for Marketing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Agents that help you move from brief to launch{" "}
                <span className="italic text-primary">faster</span>.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                SellStatic agents help you write, generate, refine, and publish campaigns without
                bouncing between tools.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55">
                Each agent is designed to handle a specific part of the workflow, so your team can
                go from idea to polished output with fewer handoffs, less repetition, and much
                faster turnaround.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Ad Agent",
                  "Turns a short brief into ready-to-test static ad variations, complete with clear headlines and CTA ideas.",
                ],
                [
                  "Video Ad Agent",
                  "Builds and polishes short-form video ads from your idea or URL, then helps shape a version that feels ready to publish.",
                ],
                [
                  "Social Agent",
                  "Keeps your scheduled content moving across channels without extra busywork, so your queue stays active and consistent.",
                ],
                [
                  "Analytics Agent",
                  "Explains what is performing, what is slowing down, and what to test next so you can make sharper decisions.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border/70 bg-white p-5 text-foreground shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)]"
                >
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
