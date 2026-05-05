"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ComponentType } from "react";

interface PricingCardProps {
  label: string;
  monthlyPrice: number;
  annualPrice: number;
  annual: boolean;
  description: string;
  cta: string;
  background: string;
  BGComponent: ComponentType;
  features: string[];
}

interface AnimatedPricingProps {
  annual?: boolean;
}

export function AnimatedPricing({ annual = false }: AnimatedPricingProps) {
  return (
    <section className="bg-background px-4 py-12 transition-colors">
      <div className="mx-auto flex w-fit flex-wrap justify-center gap-4">
        <PricingCard
          label="Starter"
          monthlyPrice={39}
          annualPrice={26}
          annual={annual}
          description="For solo marketers shipping their first campaigns with SellStatic."
          cta="Start Starter"
          background="bg-indigo-500 dark:bg-indigo-600"
          BGComponent={BGComponent1}
          features={[
            "1,500 AI generation credits",
            "Basic + Standard image quality",
            "AI templates (social, flyer, email)",
            "Social scheduling",
            "1 brand kit",
            "Basic video editing",
          ]}
        />
        <PricingCard
          label="Professional"
          monthlyPrice={99}
          annualPrice={66}
          annual={annual}
          description="For growing teams running weekly multi-channel campaigns."
          cta="Start 14-day trial"
          background="bg-purple-500 dark:bg-purple-600"
          BGComponent={BGComponent2}
          features={[
            "5,000 AI generation credits",
            "+ HD & Premium image quality",
            "10 AI videos / month",
            "Image-to-video (Kling, Seedance)",
            "AI voiceover (ElevenLabs)",
            "3 brand kits + Brand Builder",
          ]}
        />
        <PricingCard
          label="Growth"
          monthlyPrice={199}
          annualPrice={133}
          annual={annual}
          description="For high-volume teams that need full SellStatic firepower."
          cta="Talk to sales"
          background="bg-pink-500 dark:bg-pink-600"
          BGComponent={BGComponent3}
          features={[
            "15,000 AI generation credits",
            "+ Ultra 4K image & video",
            "Unlimited AI video generation",
            "Molt Claw Agent + Ad Campaigns",
            "5 brand kits + Dedicated instance",
            "Priority support",
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
}: PricingCardProps) {
  const price = annual ? annualPrice : monthlyPrice;
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.03 } }}
      className={`relative w-80 shrink-0 overflow-hidden rounded-xl p-8 pb-24 ${background} shadow-lg transition-shadow hover:shadow-xl`}
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full border border-white/20 bg-white/20 px-3 py-0.5 text-sm font-medium text-white backdrop-blur-sm">
          {label}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.1]"
        >
          ${price}
          <span className="text-2xl font-bold opacity-80">/mo</span>
        </motion.span>
        {annual && (
          <p className="text-xs font-medium text-white/80">
            Billed annually · save ${(monthlyPrice - annualPrice) * 12}/yr
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
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded-lg border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur-sm transition-all duration-200 hover:border-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
        {cta}
      </button>
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
