import Image from "next/image";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface StickyCTAProps {
  name: string;
  hourlyRate: number;
  rateUnit: string;
  responseTime: string;
  avatarSrc: string;
  className?: string;
}

export default function StickyCTA({
  name,
  hourlyRate,
  rateUnit,
  responseTime,
  avatarSrc,
  className,
}: StickyCTAProps) {
  return (
    <Card className={cn("rounded border-slate-200 p-6", className)}>
      <div className="mb-5 flex items-center gap-3">
        <div className="relative">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[color:var(--brand)]/20 bg-slate-100">
            <Image
              src={avatarSrc}
              alt={`${name} avatar`}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[2.1rem] leading-none font-semibold tracking-tight text-slate-900">
            ${hourlyRate}
            <span className="text-[0.56em] font-medium text-slate-500">/{rateUnit}</span>
          </p>
          <p className="truncate text-base font-semibold text-slate-900">{name}</p>
        </div>
      </div>

      <div className="mb-5 h-px w-full bg-slate-100" aria-hidden />

      <Button
        className="h-14 w-full rounded bg-[var(--brand)] text-lg font-semibold text-white hover:bg-[var(--brand-600)]"
        aria-label="Contact consultant"
      >
        <Send className="h-4 w-4" aria-hidden />
        Contact me
      </Button>

      <Button
        className="mt-3 h-12 w-full rounded"
        variant="secondary"
        aria-label="Save consultant profile"
      >
        Save profile
      </Button>

      <p className="mt-5 text-center text-sm text-slate-600">
        Average response time: <span className="font-medium text-slate-900">{responseTime}</span>
      </p>
    </Card>
  );
}
