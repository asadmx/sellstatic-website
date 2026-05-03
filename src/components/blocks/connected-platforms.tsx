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
import { Globe, Rss, Briefcase, Plus, X as XIcon } from "lucide-react";
import { FaLinkedin as Linkedin } from "react-icons/fa";

type Platform = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string;
  fg?: string;
  connected?: { type: string; handle: string };
};

const platforms: Platform[] = [
  { name: "Web", icon: Globe, bg: "bg-violet-400", fg: "text-white" },
  { name: "Blog", icon: Rss, bg: "bg-teal-300", fg: "text-slate-800" },
  { name: "Facebook", icon: SiFacebook, bg: "bg-[#1877F2]", fg: "text-white" },
  { name: "Instagram", icon: SiInstagram, bg: "bg-white", fg: "text-pink-600", connected: { type: "Professional account", handle: "et.social" } },
  { name: "Threads", icon: SiThreads, bg: "bg-black", fg: "text-white" },
  { name: "X", icon: SiX, bg: "bg-black", fg: "text-white" },
  { name: "Bluesky", icon: SiBluesky, bg: "bg-[#1185FE]", fg: "text-white" },
  { name: "LinkedIn", icon: Linkedin, bg: "bg-white", fg: "text-[#0A66C2]", connected: { type: "Account", handle: "sultan aslam" } },
  { name: "Pinterest", icon: SiPinterest, bg: "bg-[#E60023]", fg: "text-white" },
  { name: "TikTok personal", icon: SiTiktok, bg: "bg-white", fg: "text-black", connected: { type: "Personal account", handle: "sellstatic" } },
  { name: "TikTok business", icon: SiTiktok, bg: "bg-black", fg: "text-white" },
  { name: "Google Business Profile", icon: Briefcase, bg: "bg-sky-300", fg: "text-slate-800" },
  { name: "YouTube", icon: SiYoutube, bg: "bg-[#FF0000]", fg: "text-white" },
  { name: "Twitch", icon: SiTwitch, bg: "bg-[#9146FF]", fg: "text-white" },
  { name: "Meta Ads", icon: SiMeta, bg: "bg-[#1877F2]", fg: "text-white" },
  { name: "Google Ads", icon: SiGoogleads, bg: "bg-[#4285F4]", fg: "text-white" },
  { name: "TikTok Ads", icon: SiTiktok, bg: "bg-black", fg: "text-white" },
];

function PlatformIconLabel({ Icon, name }: { Icon: Platform["icon"]; name: string }) {
  return (
    <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-foreground/80">
      <Icon className="size-3.5" />
      {name}
    </div>
  );
}

function ConnectCard({ p }: { p: Platform }) {
  const Icon = p.icon;
  if (p.connected) {
    return (
      <div>
        <PlatformIconLabel Icon={Icon} name={p.name} />
        <div className="flex items-center gap-3 rounded-lg border bg-card p-2.5 shadow-sm">
          <div className="grid size-9 place-items-center rounded-full bg-muted text-foreground">
            <Icon className="size-4" />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <div className="truncate text-[11px] font-medium text-muted-foreground">
              {p.connected.type}
            </div>
            <div className="truncate text-sm font-semibold">{p.connected.handle}</div>
          </div>
          <button className="grid size-6 place-items-center rounded-full text-muted-foreground hover:bg-muted">
            <XIcon className="size-3.5" />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <PlatformIconLabel Icon={Icon} name={p.name} />
      <button
        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium shadow-sm transition-transform hover:-translate-y-0.5 ${p.bg} ${p.fg ?? ""}`}
      >
        <span className="flex items-center gap-2">
          <Plus className="size-4 opacity-80" />
          Connect a {p.name} account
        </span>
        <Icon className="size-4 opacity-90" />
      </button>
    </div>
  );
}

export function ConnectedPlatforms() {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between border-b pb-4">
        <h3 className="text-base font-semibold">Manage connections</h3>
        <div className="size-6 rounded-full bg-foreground" />
      </div>
      <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((p) => (
          <ConnectCard key={p.name} p={p} />
        ))}
      </div>
    </div>
  );
}
