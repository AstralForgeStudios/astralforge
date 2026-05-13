"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FeaturedItem {
  title: string;
  description: string;
  tag?: string;
}

const featuredItems: FeaturedItem[] = [
  {
    title: "Shadow Realm",
    description: "A dark and mysterious campaign filled with ancient magic.",
    tag: "Campaign"
  },
  {
    title: "Forge Codex",
    description: "Dive into lore, guides, and worldbuilding knowledge.",
    tag: "Codex"
  },
  {
    title: "Arcane Relics",
    description: "Unique items and tools to enhance your adventures.",
    tag: "Shop"
  }
];

export function Featured({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "w-full py-16 px-4",
        "border-t border-border",
        className
      )}
    >
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured Experiences
          </h2>
          <p className="text-muted">
            Discover curated adventures, knowledge, and tools from AstralForge.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.tag && (
                  <span className="text-xs text-muted">{item.tag}</span>
                )}
              </CardHeader>

              <CardContent>
                <p>{item.description}</p>
              </CardContent>

              <CardFooter>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}