import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Eye, MousePointerClick, TrendingUp, Users, Plus } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — SellStatic" },
      { name: "description", content: "Track campaigns, monitor performance, and launch new ads from your SellStatic dashboard." },
      { property: "og:title", content: "Dashboard — SellStatic" },
      { property: "og:description", content: "Your campaign command center." },
    ],
  }),
  component: DashboardPage,
});

const stats = [
  { label: "Impressions", value: "1.2M", delta: "+12.4%", icon: Eye },
  { label: "Clicks", value: "48.2K", delta: "+8.1%", icon: MousePointerClick },
  { label: "CTR", value: "4.0%", delta: "+0.3%", icon: TrendingUp },
  { label: "Conversions", value: "2,184", delta: "+18.6%", icon: Users },
];

const campaigns = [
  { name: "Spring Launch — IG", platform: "Instagram", status: "Live", spend: "$2,140", roas: "3.4x" },
  { name: "Brand Awareness", platform: "TikTok", status: "Live", spend: "$1,820", roas: "2.8x" },
  { name: "Retargeting Q2", platform: "Meta", status: "Paused", spend: "$960", roas: "4.1x" },
  { name: "YouTube Shorts Test", platform: "YouTube", status: "Live", spend: "$1,310", roas: "2.2x" },
];

function DashboardPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Welcome back 👋</h1>
            <p className="mt-1 text-sm text-muted-foreground">Here's how your campaigns are performing today.</p>
          </div>
          <Button asChild><Link to="/create-ad"><Plus className="mr-1 size-4" /> New ad</Link></Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-card/80 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <s.icon className="size-4 text-primary" />
              </div>
              <div className="mt-3 text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs font-medium text-primary">{s.delta} vs last week</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border bg-card/80 p-6 backdrop-blur lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Active campaigns</h2>
              <Link to="/view-ads" className="text-sm text-primary hover:underline">View all</Link>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Campaign</th>
                    <th className="px-4 py-3">Platform</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Spend</th>
                    <th className="px-4 py-3">ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((c) => (
                    <tr key={c.name} className="border-t">
                      <td className="px-4 py-3 font-medium">{c.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.platform}</td>
                      <td className="px-4 py-3">
                        <span className={
                          "inline-flex rounded-full px-2 py-0.5 text-xs font-medium " +
                          (c.status === "Live" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")
                        }>
                          {c.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{c.spend}</td>
                      <td className="px-4 py-3 font-semibold">{c.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border bg-card/80 p-6 backdrop-blur">
            <h2 className="font-semibold">Quick actions</h2>
            <div className="mt-4 space-y-2">
              {[
                { to: "/create-ad", label: "Create a new ad" },
                { to: "/video", label: "Generate a video" },
                { to: "/templates", label: "Browse templates" },
                { to: "/social", label: "Connect a channel" },
              ].map((a) => (
                <Link key={a.to} to={a.to} className="group flex items-center justify-between rounded-xl border bg-background/60 px-4 py-3 text-sm font-medium transition hover:border-primary/50 hover:bg-primary/5">
                  {a.label}
                  <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
