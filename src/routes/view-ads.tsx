import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export const Route = createFileRoute("/view-ads")({
  head: () => ({
    meta: [
      { title: "View Ads — SellStatic" },
      { name: "description", content: "Browse, manage, and remix every ad you've created across platforms." },
      { property: "og:title", content: "View Ads — SellStatic" },
      { property: "og:description", content: "Your full ad library, in one place." },
    ],
  }),
  component: ViewAdsPage,
});

const ads = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: ["Spring Launch", "Brand Story", "Retargeting", "Product Hero", "Holiday Promo", "App Install", "Loyalty Drop", "Black Friday", "Webinar Push"][i],
  platform: ["Instagram", "TikTok", "Meta", "YouTube", "LinkedIn"][i % 5],
  ctr: (Math.random() * 5 + 1).toFixed(2),
}));

function ViewAdsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Library</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold md:text-5xl">All your ads, <span className="italic text-primary">organized</span>.</h1>
          </div>
          <Button variant="outline"><Filter className="mr-1 size-4" /> Filter</Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ads.map((ad) => (
            <div key={ad.id} className="group overflow-hidden rounded-2xl border bg-card/80 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-primary/30 via-fuchsia-300/20 to-amber-200/30" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{ad.title}</h3>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{ad.platform}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">CTR <span className="font-semibold text-foreground">{ad.ctr}%</span> · last 7 days</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
