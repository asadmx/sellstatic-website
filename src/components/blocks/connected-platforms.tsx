"use client";

import {
  SiFacebook,
  SiInstagram,
  SiThreads,
  SiX,
  SiTiktok,
  SiLinkedin,
  SiGoogle,
  SiPinterest,
  SiYoutube,
  SiTwitch,
  SiMeta,
  SiGoogleads,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Platform {
  name: string;
  icon: IconType;
  color: string; // brand hex
  bg?: string;
}

const platforms: Platform[] = [
  { name: "Pinterest", icon: SiPinterest, color: "#E60023", bg: "bg-white" },
  { name: "YouTube", icon: SiYoutube, color: "#FF0000", bg: "bg-white" },
  { name: "Twitch", icon: SiTwitch, color: "#9146FF", bg: "bg-white" },
  { name: "Facebook Ads", icon: SiMeta, color: "#1877F2", bg: "bg-white" },
  { name: "Google Ads", icon: SiGoogleads, color: "#4285F4", bg: "bg-white" },
  { name: "TikTok Ads", icon: SiTiktok, color: "#000000", bg: "bg-white" },
  { name: "Facebook", icon: SiFacebook, color: "#1877F2", bg: "bg-white" },
  { name: "Instagram", icon: SiInstagram, color: "#E1306C", bg: "bg-white" },
  { name: "Threads", icon: SiThreads, color: "#000000", bg: "bg-white" },
  { name: "X (Twitter)", icon: SiX, color: "#000000", bg: "bg-white" },
  { name: "LinkedIn", icon: SiLinkedin, color: "#0A66C2", bg: "bg-white" },
  { name: "Google Business", icon: SiGoogle, color: "#4285F4", bg: "bg-white" },
];

export function ConnectedPlatforms() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {platforms.map(({ name, icon: Icon, color, bg }) => (
        <div key={name} className="group flex flex-col items-center gap-2">
          <div
            className={`grid size-14 place-items-center rounded-full shadow-md ring-1 ring-border/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl ${bg ?? "bg-white"}`}
            title={name}
          >
            <Icon className="size-7" style={{ color }} aria-hidden />
          </div>
          <span className="text-[11px] font-medium text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
