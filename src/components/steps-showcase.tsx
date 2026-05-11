import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Step {
  title: string;
  description: string;
  year: string;
  video: string;
}

const steps: Step[] = [
  {
    title: "Add Text",
    description: "Describe your offer and audience in plain English.",
    year: "01",
    video: "/steps/add-text.mp4",
  },
  {
    title: "Add Images",
    description: "Drop in product shots or brand assets, AI suggests visuals.",
    year: "02",
    video: "/steps/add-images.mp4",
  },
  {
    title: "Ad Preview",
    description: "See ready-to-publish variations across formats instantly.",
    year: "03",
    video: "/steps/ad-preview.mp4",
  },
  {
    title: "Edit Templates",
    description: "Lock fonts, colors, and layout with your brand kit.",
    year: "04",
    video: "/steps/edit-templates.mp4",
  },
];

export function StepsShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (s: number, e: number, f: number) => s + (e - s) * f;
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mx-auto w-full max-w-2xl px-2"
    >
      {/* Floating preview */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? "1" : "0.8",
          transition:
            "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative h-[240px] w-[380px] overflow-hidden rounded-xl bg-secondary">
          {steps.map((s, index) => (
            <video
              key={s.title}
              src={s.video}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? "1" : "1.1",
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {steps.map((step, index) => (
          <button
            type="button"
            key={step.title}
            className="group block w-full text-left"
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsVisible(false);
            }}
          >
            <div className="relative border-t border-border py-6 transition-all duration-300 ease-out">
              <div
                className={`absolute inset-0 -mx-4 rounded-lg bg-secondary/50 px-4 transition-all duration-300 ease-out ${
                  hoveredIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-lg font-medium tracking-tight text-foreground">
                      <span className="relative">
                        {step.title}
                        <span
                          className={`absolute -bottom-0.5 left-0 h-px bg-foreground transition-all duration-300 ease-out ${
                            hoveredIndex === index ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className={`h-4 w-4 text-muted-foreground transition-all duration-300 ease-out ${
                        hoveredIndex === index
                          ? "translate-x-0 translate-y-0 opacity-100"
                          : "-translate-x-2 translate-y-2 opacity-0"
                      }`}
                    />
                  </div>
                  <p
                    className={`mt-1 text-sm leading-relaxed transition-all duration-300 ease-out ${
                      hoveredIndex === index ? "text-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
                <span
                  className={`font-mono text-xs tabular-nums transition-all duration-300 ease-out ${
                    hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.year}
                </span>
              </div>
            </div>
          </button>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
