import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Image as ImageIcon, Type, Wand2 } from "lucide-react";

export const Route = createFileRoute("/create-ad")({
  head: () => ({
    meta: [
      { title: "Create Ad — SellStatic" },
      { name: "description", content: "Describe your product and let AI generate production-ready ad creatives in seconds." },
      { property: "og:title", content: "Create Ad — SellStatic" },
      { property: "og:description", content: "Generate ad creatives with AI in seconds." },
    ],
  }),
  component: CreateAdPage,
});

function CreateAdPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Create Ad</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold md:text-5xl">
          Describe it. <span className="italic text-primary">Ship it.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Type your idea, pick a format, and watch SellStatic produce on-brand ad variants ready to publish.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border bg-card/80 p-6 backdrop-blur lg:col-span-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your prompt</label>
            <textarea
              rows={5}
              defaultValue="A bold launch ad for our new wireless earbuds — fun, vibrant, Gen Z energy."
              className="mt-2 w-full resize-none rounded-xl border bg-background/60 p-4 text-sm outline-none focus:border-primary"
            />
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { icon: ImageIcon, label: "Square 1:1" },
                { icon: ImageIcon, label: "Story 9:16" },
                { icon: ImageIcon, label: "Banner 16:9" },
              ].map((o) => (
                <button key={o.label} className="flex items-center gap-2 rounded-xl border bg-background/60 px-3 py-2 text-sm hover:border-primary">
                  <o.icon className="size-4 text-primary" /> {o.label}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="lg"><Sparkles className="mr-1 size-4" /> Generate ads</Button>
              <Button variant="outline" size="lg"><Wand2 className="mr-1 size-4" /> Surprise me</Button>
            </div>
          </div>

          <div className="rounded-2xl border bg-card/80 p-6 backdrop-blur lg:col-span-2">
            <h3 className="font-semibold">Tips</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Type className="mt-0.5 size-4 text-primary" /> Mention your product, audience, and tone.</li>
              <li className="flex gap-2"><Type className="mt-0.5 size-4 text-primary" /> Add a CTA like "Shop now" for higher CTR.</li>
              <li className="flex gap-2"><Type className="mt-0.5 size-4 text-primary" /> Try multiple formats and A/B test.</li>
            </ul>
            <Link to="/templates" className="mt-6 inline-flex text-sm font-medium text-primary hover:underline">
              Or start from a template →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
