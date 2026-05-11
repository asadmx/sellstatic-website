"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";
import type { ComponentType } from "react";

interface PricingCardProps {
  label: string;
  monthlyPrice?: number;
  annualPrice?: number;
  annual: boolean;
  description: string;
  cta: string;
  background: string;
  BGComponent: ComponentType;
  features: string[];
  badge?: string;
  priceLabel?: string;
}

interface AnimatedPricingProps {
  annual?: boolean;
}

export function AnimatedPricing({ annual = false }: AnimatedPricingProps) {
  return (
    <section className="bg-background px-4 py-12 transition-colors">
      <div className="mx-auto flex flex-wrap justify-center gap-4">
        <PricingCard
          label="Drive"
          monthlyPrice={19.99}
          annualPrice={14}
          annual={annual}
          description="For solo marketers who need a simple way to create and schedule ads."
          cta="Start Drive"
          background="bg-indigo-500 dark:bg-indigo-600"
          BGComponent={BGComponent1}
          features={[
            "150 credits",
            "Full dashboard access",
            "Template ad generator",
            "Social scheduling",
            "1 brand kit",
            "Basic video editing",
          ]}
        />
        <PricingCard
          label="Growth"
          badge="Most Popular"
          monthlyPrice={59.99}
          annualPrice={42}
          annual={annual}
          description="For growing teams that need better video, faster workflows, and stronger output."
          cta="Start Growth"
          background="bg-purple-500 dark:bg-purple-600"
          BGComponent={BGComponent2}
          features={[
            "700 credits",
            "Everything in Drive",
            "Access to all video models",
            "High quality video generation",
            "Image to video",
            "AI voiceover",
            "Link to Ads / Video",
            "AI Video Agent (NEW)",
          ]}
        />
        <PricingCard
          label="Enterprise"
          monthlyPrice={0}
          annualPrice={0}
          annual={annual}
          priceLabel="Custom"
          description="For teams that want a tailored setup, larger scale, and hands-on support."
          cta="Contact Us"
          background="bg-slate-900 dark:bg-slate-950"
          BGComponent={BGComponent4}
          features={[
            "Custom credits",
            "Dedicated onboarding",
            "Custom workflows",
            "Dedicated instance",
            "Priority support",
            "Custom implementation",
          ]}
        />
      </div>
    </section>
  );
}

function PricingCard({
  label,
  monthlyPrice,
  annualPrice,
  annual,
  description,
  cta,
  background,
  BGComponent,
  features,
  badge,
  priceLabel,
}: PricingCardProps) {
  const [open, setOpen] = useState(false);
  const price = annual ? annualPrice : monthlyPrice;
  const displayPrice = priceLabel ?? (typeof price === "number" ? `$${price}` : "");
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.03 } }}
      className={`relative w-80 shrink-0 overflow-hidden rounded-xl p-8 pb-24 ${background} shadow-lg transition-shadow hover:shadow-xl`}
    >
      <div className="relative z-10 text-white">
        <div className="mb-3 flex items-center gap-2">
          <span className="block w-fit rounded-full border border-white/20 bg-white/20 px-3 py-0.5 text-sm font-medium text-white backdrop-blur-sm">
            {label}
          </span>
          {badge && (
            <span className="rounded-full bg-white px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 shadow-sm">
              {badge}
            </span>
          )}
        </div>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.1]"
        >
          {displayPrice}
          {priceLabel !== "Custom" && <span className="text-2xl font-bold opacity-80">/mo</span>}
        </motion.span>
        {annual &&
          typeof monthlyPrice === "number" &&
          typeof annualPrice === "number" &&
          monthlyPrice > annualPrice && (
            <p className="text-xs font-medium text-white/80">
              {`Billed annually, save $${Math.floor((monthlyPrice - annualPrice) * 12)}/yr`}
            </p>
          )}
        <p className="mt-3 text-sm text-white/90">{description}</p>

        <ul className="mt-5 space-y-2 text-sm text-white/95">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-white" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      {priceLabel === "Custom" ? (
        <>
          <button
            onClick={() => setOpen(true)}
            className="absolute bottom-4 left-4 right-4 z-20 rounded-lg border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur-sm transition-all duration-200 hover:border-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            {cta}
          </button>

          {open && (
            <div className="fixed inset-0 z-50 grid place-items-center">
              <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
              <div className="relative z-10 w-full max-w-md rounded-lg bg-card p-6 shadow-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Contact Sales</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Reach out and we'll help you with a custom plan.
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full p-1 text-muted-foreground hover:text-white"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:sales@sellstatic.app" className="text-primary">
                      sales@sellstatic.app
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+15555555555" className="text-primary">
                      +1 (555) 555-5555
                    </a>
                  </p>
                  <p>Or send us a message and we'll schedule a quick demo.</p>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href="mailto:sales@sellstatic.app"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white"
                  >
                    Email Sales
                  </a>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <a
          href="https://www.sellstatic.app"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 right-4 z-20 inline-flex items-center justify-center rounded-lg border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur-sm transition-all duration-200 hover:border-white/80 hover:bg-white/10 hover:text-white"
        >
          {cta}
        </a>
      )}
      <BGComponent />
    </motion.div>
  );
}

const BGComponent1 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="pointer-events-none absolute inset-0 z-0"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="114.5"
      r="101.5"
      fill="rgba(255, 255, 255, 0.12)"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="265.5"
      rx="101.5"
      ry="43.5"
      fill="rgba(255, 255, 255, 0.12)"
    />
  </motion.svg>
);

const BGComponent2 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="pointer-events-none absolute inset-0 z-0"
  >
    <motion.rect
      x="14"
      width="153"
      height="153"
      rx="15"
      fill="rgba(255, 255, 255, 0.12)"
      variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 12 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
    <motion.rect
      x="155"
      width="153"
      height="153"
      rx="15"
      fill="rgba(255, 255, 255, 0.12)"
      variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 219 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
  </motion.svg>
);

const BGComponent3 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.25 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="pointer-events-none absolute inset-0 z-0"
  >
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
      d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818C273.251 260.676 273.251 270.173 267.393 276.031L218.75 324.674C186.027 357.397 132.973 357.397 100.25 324.674L51.6068 276.031C45.7489 270.173 45.7489 260.676 51.6068 254.818L148.893 157.531Z"
      fill="rgba(255, 255, 255, 0.12)"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356C273.251 202.213 273.251 211.711 267.393 217.569L218.75 266.212C186.027 298.935 132.973 298.935 100.25 266.212L51.6068 217.569C45.7489 211.711 45.7489 202.213 51.6068 196.356L148.893 99.069Z"
      fill="rgba(255, 255, 255, 0.12)"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      d="M148.893 40.6066C154.751 34.7487 164.249 34.7487 170.107 40.6066L267.393 137.893C273.251 143.751 273.251 153.249 267.393 159.106L218.75 207.75C186.027 240.473 132.973 240.473 100.25 207.75L51.6068 159.106C45.7489 153.249 45.7489 143.751 51.6068 137.893L148.893 40.6066Z"
      fill="rgba(255, 255, 255, 0.12)"
    />
  </motion.svg>
);

const BGComponent4 = BGComponent3;
