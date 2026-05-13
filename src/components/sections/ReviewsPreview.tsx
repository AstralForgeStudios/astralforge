"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE_URLS } from "@/global";
import { cn } from "@/lib/utils";

interface ReviewsPreviewProps {
  className?: string;
}

interface ReviewItem {
  name: string;
  role: string;
  quote: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Arden Vale",
    role: "Game Master",
    quote:
      "AstralForge brings a rare mix of atmosphere, structure, and imagination that makes every session feel larger than life."
  },
  {
    name: "Mira Thorne",
    role: "Player",
    quote:
      "The worlds feel rich, the hooks are strong, and everything invites you to keep exploring."
  },
  {
    name: "Cael Dorian",
    role: "Creator",
    quote:
      "A strong foundation for storytelling, campaigns, and immersive lore that actually inspires new ideas."
  }
];

export function ReviewsPreview({ className }: ReviewsPreviewProps) {
  return (
    <section
      className={cn("w-full border-t border-border px-4 py-16", className)}
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What People Are Saying
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted sm:text-base">
            Early impressions from players, creators, and storytellers exploring
            the AstralForge experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.name} className="h-full">
              <CardHeader className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">
                  {review.name}
                </h3>
                <p className="text-sm text-muted">{review.role}</p>
              </CardHeader>

              <CardContent className="text-sm leading-6 text-foreground">
                <p>&ldquo;{review.quote}&rdquo;</p>
              </CardContent>

              <CardFooter className="pt-2">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Review
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href={SITE_URLS.reviews}>
            <Button variant="outline" size="lg">
              Read More Reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}