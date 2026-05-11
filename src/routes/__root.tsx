import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteBackground } from "@/components/site-background";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SellStatic | AI Marketing Platform" },
      {
        name: "description",
        content:
          "SellStatic turns one-line briefs into on-brand ads, videos, and social posts and publishes them across multiple platforms from one workspace.",
      },
      { name: "author", content: "SellStatic" },
      { property: "og:title", content: "SellStatic | AI Marketing Platform" },
      {
        property: "og:description",
        content: "SellStatic turns one-line briefs into on-brand ads, videos, and social posts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@SellStatic" },
      { name: "twitter:title", content: "SellStatic | AI Marketing Platform" },
      {
        name: "twitter:description",
        content: "SellStatic turns one-line briefs into on-brand ads, videos, and social posts.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b6803323-dae1-4aca-bfa2-1b9202d54235/id-preview-9a8172a7--439b43e7-099b-4384-a2b3-839e5725d59d.lovable.app-1777166211819.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b6803323-dae1-4aca-bfa2-1b9202d54235/id-preview-9a8172a7--439b43e7-099b-4384-a2b3-839e5725d59d.lovable.app-1777166211819.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteBackground />
      <Outlet />
    </>
  );
}
