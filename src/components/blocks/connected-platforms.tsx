"use client";

import {
  SiFacebook,
  SiInstagram,
  SiThreads,
  SiX,
  SiTiktok,
  SiPinterest,
  SiYoutube,
  SiTwitch,
  SiBluesky,
  SiGoogleads,
  SiMeta,
} from "react-icons/si";
import { Globe, Rss, Briefcase } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

interface Platform {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const platforms: Platform[] = [
  { name: "Web", icon: Globe, color: "#8B5CF6" },
  { name: "Blog", icon: Rss, color: "#14B8A6" },
  { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
  { name: "Instagram", icon: SiInstagram, color: "#E1306C" },
  { name: "Threads", icon: SiThreads, color: "#000000" },
  { name: "X", icon: SiX, color: "#000000" },
  { name: "Bluesky", icon: SiBluesky, color: "#1185FE" },
  { name: "LinkedIn", icon: FaLinkedin, color: "#0A66C2" },
  { name: "Pinterest", icon: SiPinterest, color: "#E60023" },
  { name: "TikTok", icon: SiTiktok, color: "#000000" },
  { name: "Google Business", icon: Briefcase, color: "#4285F4" },
  { name: "YouTube", icon: SiYoutube, color: "#FF0000" },
  { name: "Twitch", icon: SiTwitch, color: "#9146FF" },
  { name: "Meta Ads", icon: SiMeta, color: "#1877F2" },
  { name: "Google Ads", icon: SiGoogleads, color: "#4285F4" },
  { name: "TikTok Ads", icon: SiTiktok, color: "#000000" },
];

export function ConnectedPlatforms() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {platforms.map(({ name, icon: Icon, color }) => (
        <div key={name} className="group flex flex-col items-center gap-2">
          <div
            className="grid size-14 place-items-center rounded-full bg-white shadow-md ring-1 ring-border/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
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
