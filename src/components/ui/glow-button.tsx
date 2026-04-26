"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span className="group relative inline-flex items-center justify-center">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-300 opacity-60 blur-lg transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"
        />
        <button
          ref={ref}
          className={cn(
            "relative inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30",
            className,
          )}
          {...props}
        >
          {children}
        </button>
      </span>
    );
  },
);
GlowButton.displayName = "GlowButton";
