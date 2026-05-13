"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function CTA({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative w-full py-20 px-4 text-center",
        "border-t border-border",
        className
      )}
    >
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Begin Your Next Adventure
        </h2>

        {/* Description */}
        <p className="text-muted text-base sm:text-lg">
          Explore worlds, uncover stories, and forge your own legend across the AstralForge universe.
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="primary">
            Start Playing
          </Button>

          <Button size="lg" variant="outline">
            Explore Worlds
          </Button>
        </div>
      </div>
    </section>
  );
}