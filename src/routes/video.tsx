import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Play, Film, Wand2 } from "lucide-react";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "AI Video Director — SellStatic" },
      { name: "description", content: "Drop a link, image, or text and our AI Director builds a multi-scene video ad." },
      { property: "og:title", content: "AI Video Director — SellStatic" },
      { property: "og:description", content: "Multi-scene video ads, made by AI." },
    ],
  }),
  component: VideoPage,
});

const samples = [
  { title: "Product launch · 15s", ratio: "9:16" },
  { title: "Brand story · 30s", ratio: "16:9" },
  { title: "TikTok hook · 6s", ratio: "9:16" },
  { title: "YouTube pre-roll · 15s", ratio: "16:9" },
  { title: "Reels promo · 10s", ratio: "9:16" },
  { title: "Carousel teaser · 8s", ratio: "1:1" },
];

function VideoPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">AI Video Director</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold md:text-5xl">
          Cinematic video ads <span className="italic text-primary">in minutes</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Drop a product link or paste a script. Our AI Director assembles scenes, voiceover, and music — ready to publish.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button size="lg"><Wand2 className="mr-1 size-4" /> Start a new video</Button>
          <Button size="lg" variant="outline"><Film className="mr-1 size-4" /> Browse styles</Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-2xl border bg-card/80 backdrop-blur">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-fuchsia-300/20 to-amber-200/20">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid size-12 place-items-center rounded-full bg-background/80 shadow-md backdrop-blur transition group-hover:scale-110">
                    <Play className="size-5 text-primary" />
                  </div>
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-xs font-semibold backdrop-blur">{s.ratio}</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Click to preview · remix in one click</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
