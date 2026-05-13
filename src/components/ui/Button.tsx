"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "disabled:opacity-50 disabled:pointer-events-none",

        // Sizes
        {
          sm: "h-8 px-3 text-sm",
          md: "h-10 px-4 text-sm",
          lg: "h-12 px-6 text-base"
        }[size],

        // Variants
        {
          default: "bg-border text-foreground",
          primary: "bg-primary text-white hover:opacity-90",
          secondary: "bg-secondary text-black hover:opacity-90",
          accent: "bg-accent text-black hover:opacity-90",
          outline: "border border-border text-foreground hover:bg-border",
          ghost: "text-foreground hover:bg-border"
        }[variant],

        className
      )}
      {...props}
    />
  );
}
