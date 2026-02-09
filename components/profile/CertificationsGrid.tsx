import { Award, BadgeCheck, CalendarDays } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export interface Certification {
  year: number;
  level: string;
  name: string;
}

interface CertificationsGridProps {
  provider: string;
  certifications: readonly Certification[];
}

export default function CertificationsGrid({
  provider,
  certifications,
}: CertificationsGridProps) {
  return (
    <div className="space-y-4">
      <Card className="rounded border-[color:var(--brand)]/20 bg-[var(--brand-weak)]/70 p-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex h-11 w-11 items-center justify-center rounded bg-white text-[color:var(--brand)]"
          >
            <BadgeCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm text-[var(--brand-700)]">Certification Provider</p>
            <p className="text-lg font-semibold text-slate-900">{provider}</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <Card
            key={`${certification.name}-${certification.year}`}
            className="flex min-h-[118px] flex-col justify-between rounded p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" aria-hidden />
                {certification.name}
              </p>
              <Badge variant="neutral">{certification.level}</Badge>
            </div>

            <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-600">
              <CalendarDays className="h-4 w-4 text-slate-500" aria-hidden />
              {certification.year}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
