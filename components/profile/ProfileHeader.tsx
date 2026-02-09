"use client";

import Image from "next/image";
import { useState } from "react";
import { BriefcaseBusiness, Languages, MapPin, Star } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { getInitials } from "@/lib/get-initials";

export interface ProfileHeaderProps {
  name: string;
  badge: string;
  title: string;
  location: string;
  languages: readonly string[];
  experienceYears: number;
  ratingScore: number;
  ratingCount: number;
  avatarSrc: string;
}

export default function ProfileHeader({
  name,
  badge,
  title,
  location,
  languages,
  experienceYears,
  ratingScore,
  ratingCount,
  avatarSrc,
}: ProfileHeaderProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section aria-labelledby="consultant-name">
      <div className="flex items-start gap-5 sm:gap-6">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-[color:var(--brand)]/25 bg-[var(--brand-soft)] sm:h-32 sm:w-32">
          {!imageError ? (
            <Image
              src={avatarSrc}
              alt={`${name} profile photo`}
              fill
              sizes="(min-width: 640px) 128px, 112px"
              className="object-cover"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div
              aria-label={`${name} initials avatar`}
              className="inline-flex h-full w-full items-center justify-center text-lg font-semibold text-[color:var(--brand)]"
            >
              {getInitials(name)}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-3.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
            <h1
              id="consultant-name"
              className="text-4xl font-semibold leading-tight -tracking-[0.015em] text-slate-900"
            >
              {name}
            </h1>
            <Badge variant="brand">{badge}</Badge>
            <Badge variant="brand">Verified Pro</Badge>
          </div>

          <p className="text-lg leading-7 text-slate-700">{title}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
              <Star className="h-4 w-4 fill-amber-400 text-amber-500" aria-hidden />
              {ratingScore}
            </span>
            <span className="text-slate-500">({ratingCount} reviews)</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-slate-500" aria-hidden />
              {location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BriefcaseBusiness className="h-4 w-4 text-slate-500" aria-hidden />
              {experienceYears} years
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Languages className="h-4 w-4 text-slate-500" aria-hidden />
              {languages.join(", ")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
