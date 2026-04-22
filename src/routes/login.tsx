import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AppleIcon, AtSignIcon, ChevronLeftIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/sellstatic-logo.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — SellStatic" },
      { name: "description", content: "Sign in or create your SellStatic account to start generating ads in seconds." },
      { property: "og:title", content: "Sign in — SellStatic" },
      { property: "og:description", content: "Sign in or join SellStatic." },
    ],
  }),
  component: LoginPage,
});

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${
      470 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="h-full w-full text-primary/40" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const GoogleIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.83c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const AuthSeparator = () => (
  <div className="my-6 flex items-center gap-3">
    <div className="h-px flex-1 bg-border" />
    <span className="text-xs uppercase tracking-wider text-muted-foreground">or</span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left — branding panel */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary/15 via-background to-background lg:block">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />

        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SellStatic" className="h-10 w-auto" />
          </Link>

          <div className="max-w-md">
            <p className="text-2xl font-medium leading-relaxed text-foreground">
              "SellStatic has helped me save time and serve my clients faster than ever before."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">~ Ali Hassan, Marketing Lead</p>
          </div>

          <p className="text-xs text-muted-foreground">© SellStatic — Your AI marketing engine.</p>
        </div>
      </div>

      {/* Right — form */}
      <div className="relative flex flex-col px-6 py-8 sm:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ChevronLeftIcon className="size-4" /> Home
          </Link>
          <Link to="/" className="lg:hidden">
            <img src={logo} alt="SellStatic" className="h-8 w-auto" />
          </Link>
        </div>

        <div className="mx-auto mt-12 w-full max-w-sm">
          <h1 className="text-3xl font-semibold tracking-tight">Sign in or join</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Login or create your SellStatic account.
          </p>

          <div className="mt-8 space-y-2">
            <Button variant="outline" className="w-full justify-start gap-3" size="lg">
              <GoogleIcon className="size-4" /> Continue with Google
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3" size="lg">
              <AppleIcon className="size-4" /> Continue with Apple
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3" size="lg">
              <GithubIcon className="size-4" /> Continue with GitHub
            </Button>
          </div>

          <AuthSeparator />

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in or create an account
            </p>
            <div className="relative">
              <AtSignIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                required
                placeholder="you@example.com"
                className="ps-9"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Continue with email
            </Button>
          </form>

          <p className="mt-6 text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline hover:text-foreground">Terms of Service</a> and{" "}
            <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
