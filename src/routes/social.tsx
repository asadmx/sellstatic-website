import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/social")({
  head: () => ({
    meta: [
      { title: "Social Channels — SellStatic" },
      { name: "description", content: "Connect Instagram, TikTok, Meta, LinkedIn, YouTube and more — publish from one place." },
      { property: "og:title", content: "Social Channels — SellStatic" },
      { property: "og:description", content: "Publish to every platform from one workspace." },
    ],
  }),
  component: SocialPage,
});

const channels = [
  { name: "Instagram", desc: "Feed, Reels & Stories", connected: true },
  { name: "TikTok", desc: "In-feed & Spark Ads", connected: true },
  { name: "Meta Ads", desc: "Facebook + Instagram ads", connected: false },
  { name: "LinkedIn", desc: "Sponsored content", connected: false },
  { name: "YouTube", desc: "Shorts & pre-roll", connected: true },
  { name: "Pinterest", desc: "Idea & static pins", connected: false },
];

function SocialPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Social</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold md:text-5xl">
          One workspace. <span className="italic text-primary">Every platform.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Connect your channels once and publish ads everywhere — perfectly sized, perfectly formatted.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c) => (
            <div key={c.name} className="rounded-2xl border bg-card/80 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{c.name}</h3>
                {c.connected && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    <Check className="size-3" /> Connected
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <Button className="mt-5 w-full" variant={c.connected ? "outline" : "default"}>
                {c.connected ? "Manage" : "Connect"}
              </Button>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
