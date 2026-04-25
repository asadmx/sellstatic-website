"use client";

import * as React from "react";
import { motion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface GradientTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function GradientText({
  className,
  children,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  const MotionComponent = motion.create(Component);
  return (
    <MotionComponent
      className={cn("relative inline-flex overflow-hidden", className)}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken">
        <span className="pointer-events-none absolute -top-1/2 h-[30vw] w-[30vw] animate-[gradient-1_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--g1))] mix-blend-overlay blur-[1rem]" />
        <span className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] animate-[gradient-2_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--g2))] mix-blend-overlay blur-[1rem]" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-[30vw] w-[30vw] animate-[gradient-3_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--g3))] mix-blend-overlay blur-[1rem]" />
        <span className="pointer-events-none absolute -bottom-1/2 right-0 h-[30vw] w-[30vw] animate-[gradient-4_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--g4))] mix-blend-overlay blur-[1rem]" />
      </span>
    </MotionComponent>
  );
}
