import type { ReactNode } from "react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  action,
  children,
  className,
  contentClassName,
}: SectionProps) {
  const headingId =
    id ?? `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`;

  return (
    <section aria-labelledby={headingId} className={className}>
      <Card className="overflow-hidden rounded">
        <div className="border-b border-slate-200 px-6 py-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 id={headingId} className="text-2xl font-semibold tracking-tight text-slate-900">
                {title}
              </h2>
              {subtitle ? (
                <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
              ) : null}
            </div>
            {action}
          </div>
        </div>
        <div className={cn("px-6 py-6", contentClassName)}>{children}</div>
      </Card>
    </section>
  );
}
