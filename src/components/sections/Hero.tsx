"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        "bg-background px-4 py-24 sm:px-6 lg:px-8",
        className
      )}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Eyebrow */}
        <span className="mb-4 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Worldbuilding • Adventure • Legend
        </span>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Forge Worlds. Shape Stories. Begin Your Adventure.
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          AstralForge is a tabletop and worldbuilding studio crafting immersive
          settings, unforgettable campaigns, and tools to help players and
          creators bring new realms to life.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" variant="primary">
            Enter the Forge
          </Button>

          <Button size="lg" variant="outline">
            Explore the Codex
          </Button>
        </div>

        {/* Supporting stats / highlights */}
        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-background/60 p-4 backdrop-blur-sm">
            <p className="text-2xl font-semibold text-foreground">Campaigns</p>
            <p className="mt-1 text-sm text-muted">
              Story-driven adventures built for play.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background/60 p-4 backdrop-blur-sm">
            <p className="text-2xl font-semibold text-foreground">Lore</p>
            <p className="mt-1 text-sm text-muted">
              Deep settings, factions, relics, and history.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background/60 p-4 backdrop-blur-sm">
            <p className="text-2xl font-semibold text-foreground">Tools</p>
            <p className="mt-1 text-sm text-muted">
              Resources to guide players, GMs, and creators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}