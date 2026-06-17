import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface2 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
