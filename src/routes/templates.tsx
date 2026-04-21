import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Templates — SellStatic" },
      { name: "description", content: "300+ professionally designed ad templates ready to customize for your brand." },
      { property: "og:title", content: "Templates — SellStatic" },
      { property: "og:description", content: "300+ ad templates to start fast." },
    ],
  }),
  component: TemplatesPage,
});

const categories = ["All", "E-commerce", "SaaS", "Fitness", "Beauty", "Food", "Travel", "Finance"];

const templates = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: ["Bold Sale", "Minimal Drop", "Story Hero", "Carousel Set", "Quote Promo", "Launch Day", "Founder Story", "Before/After", "Testimonial", "Limited Offer", "App Promo", "New Arrival"][i],
  tag: categories[(i % (categories.length - 1)) + 1],
}));

function TemplatesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Templates</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold md:text-5xl">
          Start from a <span className="italic text-primary">winning</span> design.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">300+ templates built by designers who actually ship ads. Customize every element to match your brand.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button key={c} className={"rounded-full border px-4 py-1.5 text-sm transition " + (i === 0 ? "border-primary bg-primary text-primary-foreground" : "bg-card/60 hover:bg-accent")}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {templates.map((t) => (
            <div key={t.id} className="group overflow-hidden rounded-2xl border bg-card/80 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/25 via-fuchsia-300/20 to-amber-200/25" />
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-sm font-semibold">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.tag}</p>
                </div>
                <Button size="sm" variant="outline">Use</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
