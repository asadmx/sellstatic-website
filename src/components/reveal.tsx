import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** translate-y distance in px while hidden */
  y?: number;
  as?: "div" | "section" | "article" | "header";
}

export function Reveal({ children, className, delay = 0, y = 24, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: inView ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
    opacity: inView ? 1 : 0,
  };
  return (
    <Tag
      ref={ref as never}
      style={style}
      className={cn("transition-all duration-700 ease-out will-change-transform", className)}
    >
      {children}
    </Tag>
  );
}
