"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        "transition-colors",
        {
          default: "bg-border text-foreground",
          primary: "bg-primary text-white",
          secondary: "bg-secondary text-black",
          accent: "bg-accent text-black",
          outline: "border border-border text-foreground"
        }[variant],
        className
      )}
    >
      {children}
    </span>
  );
}