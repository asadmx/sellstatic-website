import { cn } from "@/lib/utils";

const stattyPoses = {
  wave: "/images/mascot/statty-wave-v3.webp",
  rocketRide: "/images/mascot/statty-rocket-ride-v3.webp",
  swoop: "/images/mascot/statty-swoop-v3.webp",
  dive: "/images/mascot/statty-dive-v3.webp",
} as const;

export type StattyPose = keyof typeof stattyPoses;

interface StattySpotlightProps {
  pose: StattyPose;
  alt?: string;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
}

export function StattySpotlight({
  pose,
  alt = "",
  className,
  imageClassName,
  eager = false,
}: StattySpotlightProps) {
  return (
    <figure className={cn("statty-sway relative isolate aspect-square shrink-0", className)}>
      <img
        src={stattyPoses[pose]}
        alt={alt}
        width={1254}
        height={1254}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={cn(
          "relative size-full object-contain drop-shadow-[0_24px_24px_rgba(72,20,135,0.18)]",
          imageClassName,
        )}
      />
    </figure>
  );
}
