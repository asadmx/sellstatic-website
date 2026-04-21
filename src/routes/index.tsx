import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/blocks/hero-section-6";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <HeroSection />;
}
