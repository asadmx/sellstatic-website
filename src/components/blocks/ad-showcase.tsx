"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const adImages = [
  { title: "Summer Sale", tag: "Instagram", grad: "from-pink-500 via-rose-500 to-orange-400" },
  { title: "Product Launch", tag: "Facebook Ads", grad: "from-indigo-500 via-purple-500 to-fuchsia-500" },
  { title: "Brand Story", tag: "TikTok", grad: "from-cyan-400 via-sky-500 to-blue-600" },
  { title: "Hiring Now", tag: "LinkedIn", grad: "from-emerald-400 via-teal-500 to-cyan-500" },
  { title: "Black Friday", tag: "Google Ads", grad: "from-amber-400 via-orange-500 to-red-500" },
  { title: "Webinar", tag: "YouTube", grad: "from-violet-500 via-fuchsia-500 to-pink-500" },
  { title: "Newsletter", tag: "Email", grad: "from-lime-400 via-green-500 to-emerald-600" },
];

export function AdShowcase() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 max-w-5xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            Ads in the wild
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
            Real campaigns, <span className="italic text-primary">crafted in minutes</span>.
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-[10vw] will-change-transform">
          {adImages.map((ad, i) => (
            <div
              key={i}
              className={cn(
                "relative h-[60vh] w-[40vw] shrink-0 overflow-hidden rounded-3xl border bg-gradient-to-br shadow-xl shadow-primary/10",
                ad.grad,
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_45%)] opacity-30" />
              <div className="absolute left-6 top-6 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {ad.tag}
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-wider opacity-80">SellStatic</div>
                <div className="mt-1 text-3xl font-semibold">{ad.title}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mx-auto mt-10 h-1 w-[80%] overflow-hidden rounded-full bg-border">
          <motion.div style={{ scaleX, transformOrigin: "left" }} className="h-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
