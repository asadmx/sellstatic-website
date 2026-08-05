import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProductDemo } from "@/components/product-demo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Interactive Product Demo | SellStatic" },
      {
        name: "description",
        content: "See how SellStatic turns one website link into campaign-ready ads.",
      },
    ],
  }),
  component: DemoPage,
});

function DemoPage() {
  return (
    <main className="relative min-h-screen px-3 py-4 sm:px-5 lg:px-8 lg:py-7">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to SellStatic
            </Link>
            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              See the simple idea
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              One link becomes a complete, campaign-ready set of ads.
            </p>
          </div>
          <Button asChild>
            <Link to="/pricing">
              Start creating <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <ProductDemo className="mx-auto min-h-[calc(100vh-140px)] max-h-[860px] w-full" />
      </div>
    </main>
  );
}
