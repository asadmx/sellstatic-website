"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface Circle {
  id: number;
  x: number;
  y: number;
  color: string;
  fadeState: "in" | "out" | null;
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    const [isListening, setIsListening] = React.useState(false);
    const [circles, setCircles] = React.useState<Circle[]>([]);
    const lastAddedRef = React.useRef(0);

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 0;
      const xPos = buttonWidth ? x / buttonWidth : 0;
      const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${xPos * 100}%)`;
      setCircles((prev) => [...prev, { id: Date.now() + Math.random(), x, y, color, fadeState: null }]);
    }, []);

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListening) return;
        const now = Date.now();
        if (now - lastAddedRef.current > 100) {
          lastAddedRef.current = now;
          const rect = event.currentTarget.getBoundingClientRect();
          createCircle(event.clientX - rect.left, event.clientY - rect.top);
        }
      },
      [isListening, createCircle],
    );

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          const t1 = setTimeout(() => {
            setCircles((prev) => prev.map((c) => (c.id === circle.id ? { ...c, fadeState: "in" } : c)));
          }, 0);
          const t2 = setTimeout(() => {
            setCircles((prev) => prev.map((c) => (c.id === circle.id ? { ...c, fadeState: "out" } : c)));
          }, 1000);
          const t3 = setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id));
          }, 2200);
          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
          };
        }
      });
    }, [circles]);

    return (
      <button
        ref={buttonRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setIsListening(true)}
        onPointerLeave={() => setIsListening(false)}
        className={cn(
          "relative isolate inline-flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border/60 bg-background/80 px-4 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/40",
          "[--circle-start:theme(colors.purple.500)] [--circle-end:theme(colors.fuchsia.400)]",
          className,
        )}
        {...props}
      >
        {circles.map(({ id, x, y, color, fadeState }) => (
          <div
            key={id}
            className={cn(
              "pointer-events-none absolute -z-10 size-6 rounded-full opacity-0 blur-md transition-all duration-1000 ease-out",
              fadeState === "in" && "scale-[6] opacity-70",
              fadeState === "out" && "scale-[6] opacity-0 duration-1200",
            )}
            style={{ left: x - 12, top: y - 12, background: color }}
          />
        ))}
        <span className="relative z-10">{children}</span>
      </button>
    );
  },
);
HoverButton.displayName = "HoverButton";

export { HoverButton };
