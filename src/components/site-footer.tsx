import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-xl font-semibold">
              Sell<span className="italic text-primary-foreground/90">Static</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-background/60">
              AI-powered ad creation for modern marketing teams. Design, generate, and publish
              ads across every platform — fast.
            </p>
          </div>

          <FooterCol title="Product" items={[
            { label: "Features", to: "/features" as const },
            { label: "Pricing", to: "/pricing" as const },
          ]} />
          <FooterCol title="Company" items={[
            { label: "About", to: "/about" as const },
          ]} />
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/50">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background">Privacy</a></li>
              <li><a href="#" className="hover:text-background">Terms</a></li>
              <li><a href="#" className="hover:text-background">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/40 sm:flex-row">
          <p>© 2026 SellStatic Inc. All rights reserved.</p>
          <p>Made with care for marketers everywhere.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: "/features" | "/pricing" | "/about" }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/50">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-background/60">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="hover:text-background">{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
