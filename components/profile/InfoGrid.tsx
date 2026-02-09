import {
  BriefcaseBusiness,
  Clock3,
  Languages,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

interface InfoGridProps {
  experienceYears: number;
  location: string;
  languages: readonly string[];
  availability: string;
  responseTime: string;
}

export default function InfoGrid({
  experienceYears,
  location,
  languages,
  availability,
  responseTime,
}: InfoGridProps) {
  return (
    <section
      aria-label="Consultant credibility highlights"
      className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5"
    >
      <Card className="rounded p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Experience
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-slate-900">
          <BriefcaseBusiness className="h-4 w-4 text-[var(--brand-600)]" aria-hidden />
          {experienceYears}+ years
        </p>
      </Card>

      <Card className="rounded p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Location
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-slate-900">
          <MapPin className="h-4 w-4 text-[var(--brand-600)]" aria-hidden />
          {location}
        </p>
      </Card>

      <Card className="rounded p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Languages
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-slate-900">
          <Languages className="h-4 w-4 text-[var(--brand-600)]" aria-hidden />
          {languages.join(", ")}
        </p>
      </Card>

      <Card className="rounded p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Availability
          </p>
          <Badge variant="sample">Sample</Badge>
        </div>
        <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-emerald-700">
          <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
          {availability}
        </p>
      </Card>

      <Card className="rounded p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Response Time
          </p>
          <Badge variant="sample">Sample</Badge>
        </div>
        <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-slate-900">
          <Clock3 className="h-4 w-4 text-[var(--brand-600)]" aria-hidden />
          {responseTime}
        </p>
      </Card>
    </section>
  );
}
