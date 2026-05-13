"use client";

import { cn } from "@/lib/utils";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  className,
  label,
  error,
  id,
  ...props
}: InputProps) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={cn(
          "w-full rounded-md border border-border bg-background px-3 py-2 text-sm",
          "text-foreground placeholder:text-muted",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-red-500 focus:ring-red-500/50",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}