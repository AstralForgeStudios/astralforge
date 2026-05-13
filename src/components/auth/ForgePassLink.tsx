"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ForgePassLinkProps {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function ForgePassLink({
  className,
  label = "Create Forge Pass",
  variant = "outline",
  size = "sm"
}: ForgePassLinkProps) {
  return (
    <Link href="/forge-pass" className="block">
      <Button variant={variant} size={size} className={cn(className)}>
        {label}
      </Button>
    </Link>
  );
}