"use client";

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface WorldsProps {
  className?: string;
}

interface WorldItem {
  name: string;
  description: string;
  status: string;
}

const worlds: WorldItem[] = [
  {
    name: "Eclipsara",
    description:
      "A fractured realm of celestial ruins, wandering empires, and forgotten starfire.",
    status: "Featured World"
  },
  {
    name: "Veyrnhold",
    description:
      "A storm-bound land of iron kingdoms, sacred oaths, and ancient bloodlines.",
    status: "In Development"
  },
  {
    name: "Ashmere",
    description:
      "A haunted frontier where lost cities sleep beneath dust, flame, and memory.",
    status: "Coming Soon"
  }
];

export function Worlds({ className }: WorldsProps) {
  return (
    <section
      className={cn("w-full border-t border-border px-4 py-16", className)}
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Worlds in the Forge
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted sm:text-base">
            Step into realms shaped by myth, conflict, mystery, and the stories
            waiting to be told.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {worlds.map((world) => (
            <Card key={world.name} className="h-full">
              <CardHeader className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {world.status}
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  {world.name}
                </h3>
              </CardHeader>

              <CardContent className="text-sm leading-6 text-foreground">
                <p>{world.description}</p>
              </CardContent>

              <CardFooter>
                <Button variant="outline" size="sm">
                  Explore World
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}