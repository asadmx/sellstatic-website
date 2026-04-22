"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AuroraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  glowClassName?: string;
}

export function AuroraButton({
  className,
  children,
  glowClassName,
  ...props
}: AuroraButtonProps) {
  return (
    <div className="relative inline-flex group">
      {/* Gradient border / aurora glow */}
      <div
        className={cn(
          "absolute -inset-[2px] rounded-xl opacity-70 blur-[6px] transition-all duration-500",
          "bg-[conic-gradient(from_0deg,#a955ff,#ea51ff,#56CCF2,#80FF72,#a955ff)]",
          "group-hover:opacity-100 group-hover:blur-[10px] animate-[spin_6s_linear_infinite]",
          glowClassName,
        )}
      />
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl bg-background px-4 py-2 text-sm font-medium text-foreground",
          "transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
