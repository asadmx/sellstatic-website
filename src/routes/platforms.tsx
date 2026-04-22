import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: [
      { title: "Connected Platforms — SellStatic" },
      { name: "description", content: "Publish ads and social posts to Facebook, Instagram, TikTok, LinkedIn, YouTube, Pinterest, X, Threads, Google Ads and more — from one place." },
      { property: "og:title", content: "Connected Platforms — SellStatic" },
      { property: "og:description", content: "Publish ads and posts everywhere from one place." },
    ],
  }),
  component: PlatformsPage,
});

const social = [
  "Facebook", "Instagram", "Threads", "X (Twitter)", "TikTok",
  "LinkedIn", "Google Business", "Pinterest", "YouTube", "Twitch",
];
const ads = ["Facebook Ads", "Google Ads", "TikTok Ads"];

function PlatformsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-6 py-24 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Platforms</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            One workspace. <span className="italic text-primary">13 platforms</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Connect your accounts once. SellStatic formats, schedules, and publishes your ads
            and social posts — perfectly sized for every channel.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Social channels</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {social.map((p) => (
              <div key={p} className="flex items-center gap-2 rounded-xl border bg-card p-4 text-sm font-medium">
                <CheckCircle2 className="size-4 text-primary" /> {p}
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ad networks</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {ads.map((p) => (
              <div key={p} className="flex items-center gap-2 rounded-xl border bg-card p-4 text-sm font-medium">
                <CheckCircle2 className="size-4 text-primary" /> {p}
              </div>
            ))}
          </div>
        </section>

        <section className="border-y bg-accent/40">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Connect your channels in <span className="italic text-primary">minutes</span>.
            </h2>
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg">
                <Link to="/social">Connect now <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
