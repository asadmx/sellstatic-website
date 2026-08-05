import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  Globe2,
  Image as ImageIcon,
  LayoutGrid,
  Link2,
  Loader2,
  Palette,
  Play,
  ScanSearch,
  Sparkles,
  Type,
  Upload,
  X,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

type DemoStage = "link" | "extracting" | "brief" | "generating" | "results";

type BrandBrief = {
  brand: string;
  category: string;
  headline: string;
  description: string;
  callToAction: string;
};

const SAMPLE_URL = "https://sellstatic.com";

const INITIAL_BRIEF: BrandBrief = {
  brand: "SellStatic",
  category: "AI Marketing Platform",
  headline: "Your AI Marketing Engine Built for Growth.",
  description: "Create on-brand ads, videos, and social content in minutes.",
  callToAction: "Get Started",
};

const SOURCE_IMAGES = [
  "/ads/tour-sellstatic-logo.png",
  "/ads/tour-sellstatic-growth.png",
  "/ads/tour-sellstatic-ad-creator.png",
] as const;

const GENERATED_ADS = [
  { label: "Editorial", image: "/ads/demo-sellstatic-editorial.png" },
  { label: "Flat lay", image: "/ads/demo-sellstatic-flat-lay.png" },
  { label: "Luxury", image: "/ads/demo-sellstatic-luxury.png" },
  { label: "Workspace", image: "/ads/demo-sellstatic-workspace.png" },
] as const;

const SWIPE_ADS = [
  "/ads/swipe/ai-image-1.webp",
  "/ads/swipe/ai-image-1-1.webp",
  "/ads/swipe/ai-image-1-4.webp",
  "/ads/swipe/ai-image-1-5.webp",
  "/ads/swipe/gemini-swipe-1.webp",
  "/ads/swipe/gemini-swipe-2.webp",
  "/ads/swipe/gemini-swipe-3.webp",
  "/ads/swipe/gemini-swipe-4.webp",
] as const;

const LOADING_MESSAGES = [
  "Creating your AI masterpiece",
  "AI is working its magic",
  "Almost there...",
  "Crafting the perfect ads",
  "Adding the finishing touches",
  "Your ads are looking great",
] as const;

const SCRAPE_PHASES = [
  { label: "Fetching page...", icon: Globe2 },
  { label: "Reading content...", icon: FileText },
  { label: "Extracting brand data...", icon: ScanSearch },
  { label: "Analyzing images & colors...", icon: Palette },
] as const;

const TOUR_GUIDE: Record<
  DemoStage,
  { step: number; title: string; description: string; action: string }
> = {
  link: {
    step: 1,
    title: "Start with one link",
    description:
      "We’ve pre-filled a SellStatic link for this demo. Keep it as-is, or replace it with a landing page URL.",
    action: "Click Extract",
  },
  extracting: {
    step: 2,
    title: "We do the busywork",
    description:
      "SellStatic reads the page, finds the important details, and detects its visual style.",
    action: "Watch the scan finish",
  },
  brief: {
    step: 3,
    title: "Make a quick edit",
    description:
      "Review the copy, image, colors, and format. Everything is editable before generation.",
    action: "Click Generate Ads",
  },
  generating: {
    step: 4,
    title: "Give the AI a signal",
    description:
      "Swipe through a few examples while your campaign-ready ad variations are created.",
    action: "Use ← / → or the buttons",
  },
  results: {
    step: 5,
    title: "Your ads are ready",
    description: "That’s the complete Link to Ad journey—from one URL to finished creative.",
    action: "Review the results",
  },
};

function DemoButton({
  children,
  onClick,
  type = "button",
  secondary = false,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  secondary?: boolean;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold transition active:scale-[0.98]",
        secondary
          ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
          : "bg-white text-neutral-900 shadow-[0_12px_34px_rgba(124,58,237,0.28)] hover:bg-violet-50",
        className,
      )}
    >
      {children}
    </button>
  );
}

function DemoTourGuide({ stage }: { stage: DemoStage }) {
  const guide = TOUR_GUIDE[stage];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="pointer-events-none absolute left-1/2 top-4 z-40 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2"
      aria-live="polite"
    >
      <div className="rounded-2xl border border-violet-300/20 bg-[#120d1d]/95 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-md sm:px-5">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-black text-white shadow-lg shadow-purple-500/25">
            {guide.step}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <p className="text-sm font-bold text-white">{guide.title}</p>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                Step {guide.step} of 5
              </span>
            </div>
            <p className="mt-1 text-xs leading-5 text-gray-400">{guide.description}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-2.5 py-1 text-[10px] font-bold text-purple-200 ring-1 ring-purple-400/20">
              <ArrowRight className="h-3 w-3" /> Next: {guide.action}
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                index < guide.step ? "bg-purple-500" : "bg-white/10",
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function LinkStage({
  url,
  setUrl,
  onAnalyze,
}: {
  url: string;
  setUrl: (url: string) => void;
  onAnalyze: () => void;
}) {
  return (
    <div className="mx-auto flex h-full max-w-4xl flex-col items-center gap-8 px-5 pb-16 pt-36 text-center sm:pt-36">
      <a
        href="/"
        className="self-start flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition hover:bg-neutral-800 hover:text-gray-200"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </a>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3.5 py-1.5 text-sm font-semibold text-purple-300 ring-1 ring-purple-500/20">
          <Zap className="h-3.5 w-3.5" /> Link to Ad
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Turn any page into{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            ads
          </span>
        </h2>
        <p className="mx-auto max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
          Paste a landing page URL and we’ll extract content, images, and brand details to generate
          ad creatives instantly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.4 }}
        className="w-full max-w-xl space-y-4"
      >
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 blur-sm transition-opacity group-focus-within:opacity-100" />
          <div className="relative flex gap-2 rounded-2xl border border-neutral-700 bg-neutral-800 p-1.5 shadow-sm transition-shadow group-focus-within:shadow-lg group-focus-within:shadow-purple-500/10">
            <div className="relative min-w-0 flex-1">
              <Link2 className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && url.trim() && onAnalyze()}
                aria-label="Website URL"
                placeholder="https://example.com/landing-page"
                className="w-full rounded-xl bg-transparent py-3.5 pl-11 pr-4 text-base text-white outline-none placeholder:text-gray-500"
              />
            </div>
            <button
              type="button"
              onClick={onAnalyze}
              disabled={!url.trim()}
              className="flex min-w-30 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:from-purple-700 hover:to-indigo-700 disabled:from-neutral-700 disabled:to-neutral-700 disabled:text-gray-500 disabled:shadow-none"
            >
              Extract <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        {url === SAMPLE_URL && (
          <p className="flex items-center justify-center gap-1.5 text-xs text-purple-200/75">
            <CheckCircle2 className="h-3.5 w-3.5 text-purple-300" /> We pre-filled this link for the
            demo—you can click Extract right away.
          </p>
        )}
        <div className="flex items-center gap-3 rounded-xl border border-neutral-700/60 bg-neutral-800/60 px-4 py-2.5 text-left backdrop-blur-sm">
          <Globe2 className="h-4 w-4 shrink-0 text-purple-400" />
          <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-400">
            sellstatic.com
          </span>
          <span className="font-mono text-xs text-gray-500">/</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500"
      >
        <span className="flex items-center gap-1.5">
          <Globe2 className="h-3.5 w-3.5" /> Works with any URL
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" /> AI-powered extraction
        </span>
        <span className="flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5" /> Ready in seconds
        </span>
      </motion.div>
    </div>
  );
}

function ExtractingStage({ revealed }: { revealed: number }) {
  return (
    <div className="mx-auto flex h-full max-w-4xl flex-col items-center gap-8 px-5 pb-14 pt-36 text-center sm:pt-36">
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3.5 py-1.5 text-sm font-semibold text-purple-300 ring-1 ring-purple-500/20">
          <Zap className="h-3.5 w-3.5" /> Link to Ad
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Turn any page into{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            ads
          </span>
        </h2>
        <p className="mx-auto max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
          Paste a landing page URL and we’ll extract content, images, and brand details to generate
          ad creatives instantly.
        </p>
      </div>

      <div className="w-full max-w-xl space-y-4">
        <div className="flex gap-2 rounded-2xl border border-neutral-700 bg-neutral-800 p-1.5 shadow-sm">
          <div className="relative min-w-0 flex-1">
            <Link2 className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              disabled
              value={SAMPLE_URL}
              aria-label="Website URL being extracted"
              className="w-full rounded-xl bg-transparent py-3.5 pl-11 pr-4 text-base text-white opacity-60 outline-none"
            />
          </div>
          <button
            disabled
            className="flex min-w-30 items-center justify-center rounded-xl bg-neutral-700 px-6 py-3 text-gray-400"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="overflow-hidden text-left"
        >
          <div className="space-y-4 rounded-2xl border border-neutral-700 bg-neutral-800 p-4 shadow-sm sm:p-6">
            <div className="h-1 overflow-hidden rounded-full bg-neutral-700">
              <motion.div
                animate={{ width: `${(Math.max(1, revealed) / SCRAPE_PHASES.length) * 100}%` }}
                transition={{ duration: 0.45 }}
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600"
              />
            </div>
            <div className="space-y-2.5">
              {SCRAPE_PHASES.map((phase, index) => {
                const Icon = phase.icon;
                const active = index === Math.min(revealed, SCRAPE_PHASES.length - 1);
                const done = index < revealed;
                return (
                  <motion.div
                    key={phase.label}
                    animate={{ opacity: done || active ? 1 : 0.3 }}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-purple-500/10 font-medium text-purple-300"
                        : done
                          ? "text-emerald-400"
                          : "text-gray-500",
                    )}
                  >
                    {done ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                        <Check className="h-3 w-3" />
                      </span>
                    ) : active ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                    {phase.label}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BriefStage({
  brief,
  setBrief,
  onGenerate,
  onBack,
}: {
  brief: BrandBrief;
  setBrief: (brief: BrandBrief) => void;
  onGenerate: () => void;
  onBack: () => void;
}) {
  const update = (field: keyof BrandBrief, value: string) => setBrief({ ...brief, [field]: value });
  const [selectedImage, setSelectedImage] = useState(1);
  const [adCount, setAdCount] = useState(4);
  const [aspect, setAspect] = useState<"1:1" | "9:16">("1:1");

  const fieldClass =
    "w-full rounded-xl border border-neutral-600 bg-neutral-700/50 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20";

  return (
    <div className="mx-auto min-h-full max-w-6xl px-5 pb-10 pt-32">
      <div className="relative mb-5 flex items-center">
        <button
          type="button"
          onClick={onBack}
          className="z-10 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition hover:bg-neutral-800 hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/20">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <h2 className="text-lg font-bold text-white sm:text-xl">Review &amp; Edit</h2>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <section className="rounded-2xl border border-neutral-700 bg-neutral-800 p-4 shadow-sm sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-700 text-gray-300">
                  <Type className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-gray-200">Ad Copy</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 px-3 py-1.5 text-xs font-medium text-white">
                <Zap className="h-3.5 w-3.5" /> Enhanced with AI
              </span>
            </div>
            <p className="mb-4 rounded-xl border border-purple-400/15 bg-purple-500/5 px-3 py-2 text-xs leading-5 text-gray-400">
              We filled this in from your link for you. Take a quick look, then continue to generate
              your ads.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Brand Name
                </span>
                <input
                  value={brief.brand}
                  onChange={(e) => update("brand", e.target.value)}
                  readOnly
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Category
                </span>
                <input
                  value={brief.category}
                  onChange={(e) => update("category", e.target.value)}
                  readOnly
                  className={fieldClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Headline
                </span>
                <input
                  value={brief.headline}
                  onChange={(e) => update("headline", e.target.value)}
                  readOnly
                  className={fieldClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Description
                </span>
                <textarea
                  value={brief.description}
                  onChange={(e) => update("description", e.target.value)}
                  rows={2}
                  readOnly
                  className={cn(fieldClass, "resize-none")}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Call to Action
                </span>
                <input
                  value={brief.callToAction}
                  onChange={(e) => update("callToAction", e.target.value)}
                  readOnly
                  className={fieldClass}
                />
              </label>
            </div>
          </section>

          <div className="grid gap-4 sm:grid-cols-2">
            <section className="rounded-2xl border border-neutral-700 bg-neutral-800 p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-700 text-gray-300">
                  <ImageIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-gray-200">Image</span>
              </div>
              <div className="overflow-hidden rounded-xl bg-neutral-700/50">
                <img
                  src={SOURCE_IMAGES[selectedImage]}
                  alt="Selected website visual"
                  className="aspect-video w-full object-cover object-top"
                />
              </div>
              <div className="mt-3 flex gap-2">
                {SOURCE_IMAGES.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    disabled
                    aria-label="Selected source image (locked in demo)"
                    className={cn(
                      "relative h-12 w-12 cursor-not-allowed overflow-hidden rounded-lg opacity-90",
                      selectedImage === index
                        ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-neutral-800"
                        : "ring-1 ring-neutral-600",
                    )}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                    {selectedImage === index && (
                      <span className="absolute inset-0 flex items-center justify-center bg-purple-600/20">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </span>
                    )}
                  </button>
                ))}
                <button
                  type="button"
                  disabled
                  aria-label="Upload is unavailable in the guided demo"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dashed border-neutral-600 text-gray-500"
                >
                  <Upload className="h-4 w-4" />
                </button>
              </div>
            </section>

            <section className="rounded-2xl border border-neutral-700 bg-neutral-800 p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-700 text-gray-300">
                  <Palette className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-gray-200">Brand Colors</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Primary", "#7C3AED"],
                  ["Secondary", "#111827"],
                  ["Accent", "#FFFFFF"],
                ].map(([label, color]) => (
                  <div key={label} className="text-center">
                    <span
                      className="mx-auto block h-12 w-12 rounded-xl border border-neutral-600 shadow-inner"
                      style={{ backgroundColor: color }}
                    />
                    <span className="mt-2 block text-[9px] font-semibold text-slate-500">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 flex items-center gap-2 text-[10px] text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" /> Detected from your page
              </p>
            </section>
          </div>

          <section className="rounded-2xl border border-neutral-700 bg-neutral-800 p-4 shadow-sm sm:p-5">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-700 text-gray-300">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-gray-200">Generation Type</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["Templates", "Pre-built layouts", LayoutGrid],
                ["AI Ads", "Custom generated", Sparkles],
                ["Video Ad", "AI video ad", Play],
              ].map(([label, description, Icon]) => {
                const selected = label === "AI Ads";
                const ModeIcon = Icon as typeof Sparkles;
                return (
                  <button
                    key={label as string}
                    type="button"
                    disabled
                    aria-label={`${label as string} is locked in the guided demo`}
                    className={cn(
                      "flex cursor-not-allowed items-center gap-2 rounded-xl border px-3 py-3 text-left opacity-95",
                      selected
                        ? "border-purple-600 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20"
                        : "border-neutral-600 bg-neutral-700/50 text-gray-300",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                        selected ? "bg-white/20" : "bg-neutral-600",
                      )}
                    >
                      <ModeIcon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold">{label as string}</span>
                      <span
                        className={cn(
                          "hidden text-[9px] sm:block",
                          selected ? "text-white/70" : "text-slate-500",
                        )}
                      >
                        {description as string}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 grid gap-4 border-t border-neutral-700 pt-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Number of ads
                </p>
                <div className="flex gap-2">
                  {[2, 4, 6].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setAdCount(count)}
                      disabled
                      className={cn(
                        "flex-1 cursor-not-allowed rounded-lg px-2 py-2 text-xs font-medium opacity-90",
                        adCount === count
                          ? "bg-purple-600 text-white"
                          : "bg-neutral-600 text-gray-300",
                      )}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Aspect Ratio
                </p>
                <div className="flex gap-2">
                  {(["1:1", "9:16"] as const).map((ratio) => (
                    <button
                      key={ratio}
                      type="button"
                      onClick={() => setAspect(ratio)}
                      disabled
                      className={cn(
                        "flex-1 cursor-not-allowed rounded-lg px-2 py-2 text-xs font-medium opacity-90",
                        aspect === ratio
                          ? "bg-purple-600 text-white"
                          : "bg-neutral-600 text-gray-300",
                      )}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-end pb-2 pt-1">
            <button
              type="button"
              onClick={onGenerate}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:from-purple-700 hover:to-indigo-700 sm:w-auto"
            >
              <Sparkles className="h-5 w-5" /> Generate Ads <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18 }}
          className="sticky top-4 hidden space-y-3 lg:block"
        >
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live Preview
          </span>
          <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-700">
              <img
                src={SOURCE_IMAGES[selectedImage]}
                alt="Live ad preview"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 rounded-lg bg-white/90 p-1.5 shadow-sm">
                <img
                  src={SOURCE_IMAGES[0]}
                  alt="SellStatic logo"
                  className="h-5 w-16 object-contain"
                />
              </div>
            </div>
            <div className="space-y-3 bg-[#7C3AED] p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-60">
                {brief.brand}
              </span>
              <h3 className="text-base font-bold leading-snug">{brief.headline}</h3>
              <p className="line-clamp-3 text-xs leading-relaxed opacity-75">{brief.description}</p>
              <span className="inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-sm">
                {brief.callToAction}
              </span>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

function SwipeCardDemo({
  image,
  isTop,
  stackIndex,
  exitDirection,
}: {
  image: string;
  isTop: boolean;
  stackIndex: number;
  exitDirection: "left" | "right" | null;
}) {
  const [loadedImage, setLoadedImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setLoadedImage(null);
    const node = imageRef.current;
    if (node?.complete && node.naturalWidth > 0) setLoadedImage(image);
  }, [image]);

  const stackStyle = isTop
    ? { scale: 1, y: 0, opacity: 1, x: 0 }
    : { scale: 1 - stackIndex * 0.05, y: -stackIndex * 8, opacity: 1, x: 0 };

  const exitStyle =
    isTop && exitDirection ? { x: exitDirection === "right" ? 400 : -400, opacity: 0 } : stackStyle;

  const hiddenExitStyle =
    isTop && exitDirection
      ? {
          x: exitDirection === "right" ? 400 : -400,
          opacity: 0,
          transition: { type: "spring" as const, stiffness: 300, damping: 25 },
        }
      : { opacity: 0, x: 0, transition: { duration: 0 } };

  return (
    <motion.div
      className="absolute w-full transform-gpu will-change-transform"
      style={{
        zIndex: isTop && exitDirection ? 30 : 10 - stackIndex,
        backfaceVisibility: "hidden",
      }}
      initial={{ scale: 0.95, opacity: 0, x: 0 }}
      animate={exitStyle}
      exit={hiddenExitStyle}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div
        className={cn(
          "relative isolate aspect-square w-full overflow-hidden rounded-2xl bg-neutral-800",
          isTop ? "shadow-2xl" : "pointer-events-none shadow-lg",
        )}
      >
        {loadedImage !== image && (
          <div
            className="absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-700 to-neutral-800"
            aria-hidden="true"
          />
        )}
        <img
          ref={imageRef}
          src={image}
          alt="Ad inspiration"
          width={340}
          height={340}
          decoding="async"
          loading="eager"
          onLoad={() => setLoadedImage(image)}
          className="absolute inset-0 block h-full w-full object-cover transition-opacity duration-200"
          style={{ opacity: loadedImage === image ? 1 : 0 }}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

function GeneratingStage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % LOADING_MESSAGES.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    for (let offset = 0; offset < 5; offset += 1) {
      const image = new Image();
      image.decoding = "async";
      image.src = SWIPE_ADS[(currentIndex + offset) % SWIPE_ADS.length];
      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined);
      }
    }
  }, [currentIndex]);

  const rateAd = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setExitDirection(direction);
      window.setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % SWIPE_ADS.length);
        setExitDirection(null);
        setIsAnimating(false);
      }, 360);
    },
    [isAnimating],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      event.preventDefault();
      rateAd(event.key === "ArrowLeft" ? "left" : "right");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [rateAd]);

  const visibleCards = [0, 1, 2].map((offset) => ({
    image: SWIPE_ADS[(currentIndex + offset) % SWIPE_ADS.length],
    stackIndex: offset,
  }));

  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col items-center px-4 pt-28">
      <div className="w-full max-w-sm shrink-0 space-y-2 py-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.h2
                key={messageIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-base font-medium text-slate-200"
              >
                {LOADING_MESSAGES[messageIndex]}
              </motion.h2>
            </AnimatePresence>
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Sparkles className="h-4 w-4 text-pink-400" />
            </motion.div>
          </div>
          <p className="mt-1 text-xs text-slate-400">Rate these ads while we create yours</p>
        </div>
        <div className="relative h-0.5 overflow-hidden rounded-full bg-neutral-800">
          <motion.div
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
          />
        </div>
      </div>

      <div className="flex w-full max-w-lg flex-1 items-center justify-center">
        <div className="flex w-full items-center gap-4">
          <motion.button
            type="button"
            onClick={() => rateAd("left")}
            aria-label="Skip ad"
            disabled={isAnimating}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/25 transition hover:bg-red-600 disabled:opacity-40"
          >
            <X className="h-7 w-7 text-white" strokeWidth={3} />
          </motion.button>

          <div className="relative isolate mx-auto h-[340px] max-w-[340px] flex-1">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleCards
                .slice()
                .reverse()
                .map((card) => (
                  <SwipeCardDemo
                    key={`${card.image}-${currentIndex + card.stackIndex}`}
                    image={card.image}
                    isTop={card.stackIndex === 0}
                    stackIndex={card.stackIndex}
                    exitDirection={card.stackIndex === 0 ? exitDirection : null}
                  />
                ))}
            </AnimatePresence>
          </div>

          <motion.button
            type="button"
            onClick={() => rateAd("right")}
            aria-label="Like ad"
            disabled={isAnimating}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600 disabled:opacity-40"
          >
            <Check className="h-7 w-7 text-white" strokeWidth={3} />
          </motion.button>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3 py-4 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <kbd className="rounded border border-neutral-700 bg-neutral-800 px-1.5 py-0.5 font-mono text-[10px]">
            ←
          </kbd>{" "}
          Skip
        </span>
        <span className="text-slate-500">|</span>
        <span className="flex items-center gap-1">
          <kbd className="rounded border border-neutral-700 bg-neutral-800 px-1.5 py-0.5 font-mono text-[10px]">
            →
          </kbd>{" "}
          Like
        </span>
      </div>
    </div>
  );
}

function ResultsStage({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-5 pb-10 pt-32">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" /> Ready to use
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            One link. Four finished ads.
          </h2>
          <p className="mt-2 text-sm text-white/45">
            That is the whole idea—less setup, more finished creative.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <DemoButton secondary onClick={onRestart}>
            Try again
          </DemoButton>
          <a
            href="/pricing"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-bold text-slate-900 shadow-[0_12px_34px_rgba(124,58,237,0.28)] transition hover:bg-violet-50 active:scale-[0.98]"
          >
            Start creating <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {GENERATED_ADS.map((ad, index) => (
          <motion.figure
            key={ad.label}
            initial={{ opacity: 0, y: 26, rotate: index % 2 === 0 ? -2 : 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 130, damping: 17 }}
            className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.07] p-2 shadow-xl shadow-black/20"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={ad.image}
                alt={`${ad.label} generated SellStatic ad`}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.025]"
              />
            </div>
            <figcaption className="flex items-center justify-between px-2 pb-1 pt-2.5">
              <span className="text-xs font-bold text-white">{ad.label}</span>
              <span className="rounded-full bg-violet-400/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-violet-200">
                AI ad
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <p className="mt-5 text-center text-[10px] text-white/30">
        Frontend illustration only · No data was submitted · No connection to sellstatic.app
      </p>
    </div>
  );
}

function MobileNotice() {
  return (
    <div className="absolute inset-0 z-[200] flex items-center justify-center bg-[#0b0710]/95 p-5 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-[28px] border border-violet-300/15 bg-[#17121f] p-7 text-center shadow-2xl">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
          <Globe2 className="h-5 w-5" />
        </span>
        <h2 className="mt-4 text-xl font-black text-white">Open the demo on desktop</h2>
        <p className="mt-2 text-sm leading-6 text-white/50">
          This visual demo is designed for the desktop version of our website. Visit this page on a
          larger screen to try it.
        </p>
      </div>
    </div>
  );
}

export function ProductDemo({ className }: { className?: string }) {
  const [stage, setStage] = useState<DemoStage>("link");
  const [url, setUrl] = useState(SAMPLE_URL);
  const [brief, setBrief] = useState<BrandBrief>({ ...INITIAL_BRIEF });
  const [revealed, setRevealed] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (stage !== "extracting") return;

    const revealTimers = SCRAPE_PHASES.map((_, index) =>
      window.setTimeout(() => setRevealed(index + 1), 450 + index * 430),
    );
    const completeTimer = window.setTimeout(() => setStage("brief"), 2550);

    return () => {
      revealTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(completeTimer);
    };
  }, [stage]);

  useEffect(() => {
    if (stage !== "generating") return;
    const timer = window.setTimeout(() => setStage("results"), 5000);
    return () => window.clearTimeout(timer);
  }, [stage]);

  const analyze = () => {
    setRevealed(0);
    setStage("extracting");
  };

  const restart = () => {
    setUrl(SAMPLE_URL);
    setBrief({ ...INITIAL_BRIEF });
    setRevealed(0);
    setStage("link");
  };

  return (
    <div
      className={cn(
        "relative isolate mx-auto h-[760px] min-h-[720px] w-full overflow-hidden rounded-[32px] border border-violet-300/15 bg-gradient-to-br from-[#101827] via-[#19112d] to-[#1f0b31] text-left shadow-2xl shadow-purple-950/40",
        className,
      )}
    >
      {isMobile && <MobileNotice />}

      <div className="relative z-10 h-full">
        <DemoTourGuide stage={stage} />
        <div className="h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={stage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="h-full overflow-y-auto overscroll-contain"
            >
              {stage === "link" && <LinkStage url={url} setUrl={setUrl} onAnalyze={analyze} />}
              {stage === "extracting" && <ExtractingStage revealed={revealed} />}
              {stage === "brief" && (
                <BriefStage
                  brief={brief}
                  setBrief={setBrief}
                  onGenerate={() => setStage("generating")}
                  onBack={() => setStage("link")}
                />
              )}
              {stage === "generating" && <GeneratingStage />}
              {stage === "results" && <ResultsStage onRestart={restart} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function ProductDemoSection() {
  return (
    <section
      id="product-demo"
      className="mx-auto my-10 w-[calc(100%-1.5rem)] max-w-7xl px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">
          <Sparkles className="h-3.5 w-3.5" /> 30-second product story
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          From one link to finished creative.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
          See the simple idea behind SellStatic without navigating the full platform.
        </p>
      </div>
      <ProductDemo className="mx-auto" />
    </section>
  );
}
