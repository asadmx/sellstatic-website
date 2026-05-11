"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

interface Step {
  id: string;
  name: string;
  title: string;
  description: string;
  highlights?: string[];
}

const TOTAL_STEPS = 4;

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
} as const;

function useNumberCycler(totalSteps = TOTAL_STEPS, interval = 5000) {
  const [currentNumber, setCurrentNumber] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
    }, interval);
    return () => clearTimeout(timerId);
  }, [currentNumber, totalSteps, interval]);
  const setStep = useCallback((i: number) => setCurrentNumber(i % totalSteps), [totalSteps]);
  return { currentNumber, setStep };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const stepVariants: Variants = {
  inactive: { scale: 0.9, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
};

function FeatureCard({
  children,
  step,
  steps,
}: {
  children: React.ReactNode;
  step: number;
  steps: readonly Step[];
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      className="group relative w-full rounded-2xl"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div className="relative w-full overflow-hidden rounded-3xl border bg-card transition-colors duration-300">
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--x) var(--y), color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)",
          }}
        />
        <div className="relative grid gap-8 p-8 md:grid-cols-2 md:gap-10 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex flex-col gap-4 md:max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                {steps[step].name}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {steps[step].title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {steps[step].description}
              </p>
              {steps[step].highlights && (
                <ul className="mt-2 space-y-2 text-sm text-foreground/80">
                  {steps[step].highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3" />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
            <div className="relative min-h-[320px] md:min-h-[420px]">{children}</div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function StepsNav({
  steps,
  current,
  onChange,
}: {
  steps: readonly Step[];
  current: number;
  onChange: (i: number) => void;
}) {
  return (
    <nav aria-label="Progress" className="flex justify-center px-4">
      <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
        {steps.map((step, idx) => {
          const isCompleted = current > idx;
          const isCurrent = current === idx;
          return (
            <motion.li
              key={step.name}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => onChange(idx)}
                className={cn(
                  "group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                  isCurrent
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
                    isCompleted || isCurrent
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-background text-foreground",
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <span className="text-xs">{idx + 1}</span>
                  )}
                </span>
                <span className="hidden sm:inline-block">{step.name}</span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

function AdCreatorMockup() {
  return (
    <div className="absolute inset-0">
      <motion.div
        {...ANIMATION_PRESETS.slideInLeft}
        className="absolute left-0 top-2 z-10 w-[68%] overflow-hidden rounded-2xl border border-neutral-900/70 bg-white shadow-2xl shadow-primary/15 ring-1 ring-black/20"
      >
        <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="grid size-6 place-items-center rounded-full bg-primary text-white">
              1
            </span>
            Ad Content
          </div>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
            AI Ads
          </span>
        </div>
        <div className="grid gap-3 p-4">
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Headline
            </div>
            <div className="rounded-lg border border-primary/40 bg-background px-3 py-2 text-xs font-medium">
              Super Cars
            </div>
          </div>
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Description
            </div>
            <div className="h-16 rounded-lg border bg-background px-3 py-2 text-xs text-muted-foreground">
              Take a look at the best cars in the world
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Audience
              </div>
              <div className="rounded-lg border bg-blue-50 px-3 py-2 text-xs">
                Luxury car enthusiasts
              </div>
            </div>
            <div>
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                CTA
              </div>
              <div className="rounded-lg border bg-background px-3 py-2 text-xs">Discover Now</div>
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            {["#FF5733", "#333333", "#FFFFFF"].map((color) => (
              <div key={color} className="flex items-center gap-2 rounded-lg border px-2 py-1">
                <span className="size-4 rounded-sm border" style={{ backgroundColor: color }} />
                <span className="text-[10px] text-muted-foreground">{color}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        {...ANIMATION_PRESETS.slideInRight}
        transition={{ ...ANIMATION_PRESETS.slideInRight.transition, delay: 0.1 }}
        className="absolute bottom-0 right-0 z-20 w-[66%] overflow-hidden rounded-2xl border border-neutral-900/70 bg-white shadow-2xl shadow-primary/20 ring-1 ring-black/20"
      >
        <img
          src="/screenshots/cars.png"
          alt="SellStatic generated ads dashboard screenshot"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>
    </div>
  );
}

function VideoGeneratorMockup() {
  return (
    <div className="absolute inset-0">
      <motion.div
        {...ANIMATION_PRESETS.slideInLeft}
        className="absolute left-0 top-0 z-10 w-[82%] overflow-hidden rounded-2xl border border-neutral-900/70 bg-white shadow-2xl shadow-primary/15 ring-1 ring-black/20"
      >
        <img
          src="/screenshots/Video1.png"
          alt="SellStatic AI video generator setup screenshot"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      <motion.div
        {...ANIMATION_PRESETS.slideInRight}
        transition={{ ...ANIMATION_PRESETS.slideInRight.transition, delay: 0.1 }}
        className="absolute bottom-4 right-0 z-20 w-[98%] overflow-hidden rounded-2xl border border-neutral-900/80 bg-black shadow-2xl shadow-primary/25 ring-1 ring-black/25"
      >
        <img
          src="/screenshots/Video2.png"
          alt="SellStatic video editor screenshot"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>
    </div>
  );
}

function ScheduledPostsMockup() {
  return (
    <div className="absolute inset-0">
      <motion.div
        {...ANIMATION_PRESETS.slideInLeft}
        className="absolute left-0 top-2 z-10 w-[90%] overflow-hidden rounded-2xl border border-neutral-900/60 bg-white shadow-2xl shadow-primary/15 ring-1 ring-black/15"
      >
        <img
          src="/screenshots/social1.png"
          alt="SellStatic social scheduling workspace screenshot"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      <motion.div
        {...ANIMATION_PRESETS.slideInRight}
        transition={{ ...ANIMATION_PRESETS.slideInRight.transition, delay: 0.1 }}
        className="absolute bottom-2 right-0 z-20 w-[96%] overflow-hidden rounded-2xl border border-neutral-900/70 bg-white shadow-2xl shadow-primary/25 ring-1 ring-black/20"
      >
        <img
          src="/screenshots/social2.png"
          alt="SellStatic scheduled posts calendar screenshot"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="absolute inset-0">
      <motion.div
        {...ANIMATION_PRESETS.slideInLeft}
        className="absolute left-0 top-0 z-10 w-[92%] overflow-hidden rounded-2xl border border-neutral-900/60 bg-white shadow-2xl shadow-primary/15 ring-1 ring-black/15"
      >
        <img
          src="/screenshots/dash1.png"
          alt="SellStatic analytics dashboard screenshot"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      <motion.div
        {...ANIMATION_PRESETS.slideInRight}
        transition={{ ...ANIMATION_PRESETS.slideInRight.transition, delay: 0.1 }}
        className="absolute right-0 top-[34%] z-20 w-[98%] overflow-hidden rounded-2xl border border-neutral-900/70 bg-white shadow-2xl shadow-primary/25 ring-1 ring-black/20"
      >
        <img
          src="/screenshots/dash2.png"
          alt="SellStatic campaign performance dashboard screenshot"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>
    </div>
  );
}

export interface FeatureCarouselProps {
  steps: readonly Step[];
}

export function FeatureCarousel({ steps }: FeatureCarouselProps) {
  const { currentNumber: step, setStep } = useNumberCycler(steps.length);

  const renderContent = () => {
    switch (step) {
      case 0:
        return <AdCreatorMockup />;
      case 1:
        return <VideoGeneratorMockup />;
      case 2:
        return <ScheduledPostsMockup />;
      case 3:
        return <DashboardMockup />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
      <FeatureCard step={step} steps={steps}>
        <AnimatePresence mode="wait">
          <motion.div key={step} {...ANIMATION_PRESETS.fadeInScale} className="absolute inset-0">
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </FeatureCard>
      <StepsNav current={step} onChange={setStep} steps={steps} />
    </div>
  );
}
