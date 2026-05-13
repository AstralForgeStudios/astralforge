"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-background p-4 shadow-sm",
        "transition-all hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

// =========================
// Optional Subcomponents
// =========================

export function CardHeader({
  children,
  className
}: CardProps) {
  return (
    <div className={cn("mb-2", className)}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className
}: CardProps) {
  return (
    <div className={cn("text-sm text-muted", className)}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className
}: CardProps) {
  return (
    <div className={cn("mt-4 flex items-center justify-between", className)}>
      {children}
    </div>
  );
}