import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/blocks/hero-section-6";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SellStatic | Ads that sell everywhere" },
      {
        name: "description",
        content:
          "AI-powered ad creation. Turn ideas into perfectly formatted ads across every platform. Design, generate, and launch in minutes.",
      },
      { property: "og:title", content: "SellStatic | Ads that sell everywhere" },
      { property: "og:description", content: "AI-powered ad creation for modern marketing teams." },
    ],
  }),
  component: Index,
});

function Index() {
  return <HeroSection />;
}
