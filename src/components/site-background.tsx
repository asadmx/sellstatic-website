/**
 * Site-wide ambient background.
 * Soft purple + warm glow to match the SellStatic theme.
 * Place once at the root; renders behind all content.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base canvas */}
      <div className="absolute inset-0 bg-background" />

      {/* Soft purple glow — top left */}
      <div
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.78 0.18 295 / 0.55), transparent 70%)",
        }}
      />

      {/* Soft warm glow — bottom right */}
      <div
        className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.92 0.12 90 / 0.55), transparent 70%)",
        }}
      />

      {/* Soft pink accent — center */}
      <div
        className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-40 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.85 0.15 340 / 0.5), transparent 70%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
