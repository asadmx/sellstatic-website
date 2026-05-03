"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
} from "react";
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

interface ImageSet {
  step1img1: string;
  step1img2: string;
  step2img1: string;
  step2img2: string;
  step3img: string;
  step4img: string;
  alt: string;
}

interface Step {
  id: string;
  name: string;
  title: string;
  description: string;
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

type AnimationPreset = keyof typeof ANIMATION_PRESETS;

function useNumberCycler(totalSteps = TOTAL_STEPS, interval = 5000) {
  const [currentNumber, setCurrentNumber] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
    }, interval);
    return () => clearTimeout(timerId);
  }, [currentNumber, totalSteps, interval]);
  const setStep = useCallback(
    (i: number) => setCurrentNumber(i % totalSteps),
    [totalSteps],
  );
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

const StepImage = forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ src, alt, className, style, ...props }, ref) => (
  <img
    ref={ref}
    alt={alt}
    src={src}
    className={className}
    style={{ position: "absolute", userSelect: "none", maxWidth: "unset", ...style }}
    {...props}
  />
));
StepImage.displayName = "StepImage";

const MotionStepImage = motion(StepImage);

const AnimatedStepImage = ({
  preset = "fadeInScale",
  delay = 0,
  ...props
}: React.ComponentProps<typeof MotionStepImage> & {
  preset?: AnimationPreset;
  delay?: number;
}) => {
  const cfg = ANIMATION_PRESETS[preset];
  return <MotionStepImage {...props} {...cfg} transition={{ ...cfg.transition, delay }} />;
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
      style={{ "--x": useMotionTemplate`${mouseX}px`, "--y": useMotionTemplate`${mouseY}px` } as WrapperStyle}
    >
      <div className="relative w-full overflow-hidden rounded-3xl border bg-card transition-colors duration-300">
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--x) var(--y), color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)",
          }}
        />
        <div className="relative m-8 min-h-[420px] w-[calc(100%-4rem)] md:m-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-full flex-col gap-4 md:w-3/5"
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
            </motion.div>
          </AnimatePresence>
          {children}
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
                  {isCompleted ? <Check className="h-3.5 w-3.5" /> : <span className="text-xs">{idx + 1}</span>}
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

const imgClass =
  "rounded-xl border shadow-2xl shadow-primary/10 object-cover";

export interface FeatureCarouselProps {
  steps: readonly Step[];
  image: ImageSet;
}

export function FeatureCarousel({ steps, image }: FeatureCarouselProps) {
  const { currentNumber: step, setStep } = useNumberCycler(steps.length);

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="relative h-full w-full">
            <AnimatedStepImage alt={image.alt} src={image.step1img1} preset="slideInLeft" className={cn(imgClass, "left-0 top-[15%] w-[50%]")} />
            <AnimatedStepImage alt={image.alt} src={image.step1img2} preset="slideInRight" delay={0.1} className={cn(imgClass, "left-[40%] top-[35%] w-[60%]")} />
          </div>
        );
      case 1:
        return (
          <div className="relative h-full w-full">
            <AnimatedStepImage alt={image.alt} src={image.step2img1} preset="fadeInScale" className={cn(imgClass, "left-[5%] top-[20%] w-[50%]")} />
            <AnimatedStepImage alt={image.alt} src={image.step2img2} preset="fadeInScale" delay={0.1} className={cn(imgClass, "left-[55%] top-[45%] w-[40%]")} />
          </div>
        );
      case 2:
        return (
          <div className="relative h-full w-full">
            <AnimatedStepImage alt={image.alt} src={image.step3img} preset="fadeInScale" className={cn(imgClass, "left-[5%] top-[25%] w-[90%]")} />
          </div>
        );
      case 3:
        return (
          <div className="relative h-full w-full">
            <AnimatedStepImage alt={image.alt} src={image.step4img} preset="fadeInScale" className={cn(imgClass, "left-[5%] top-[25%] w-[90%]")} />
          </div>
        );
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
