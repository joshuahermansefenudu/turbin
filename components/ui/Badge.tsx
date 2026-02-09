import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "brand" | "sample" | "success";

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "border-slate-200 bg-slate-100 text-slate-700",
  brand: "border-[color:var(--brand)]/25 bg-[color:var(--brand-weak)] text-[color:var(--brand)]",
  sample: "border-amber-200 bg-amber-50 text-amber-700",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export default function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-2.5 py-1 text-xs font-medium tracking-wide",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
