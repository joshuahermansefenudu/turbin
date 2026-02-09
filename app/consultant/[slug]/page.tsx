/**
 * Checklist:
 * - Core Turbin consultant profile only: sticky top nav, hero header, about, expertise, certifications, and CTA sidebar.
 * - Removed non-required generated/sample sections (services, portfolio, work experience, hourly ask blocks).
 * - Kept only known profile data and required UI signals (rating, reviews, response time).
 * - Update the `profile` object below when real profile fields change.
 */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ShieldCheck } from "lucide-react";
import AboutText from "@/components/profile/AboutText";
import CertificationsGrid from "@/components/profile/CertificationsGrid";
import ExpertiseChips from "@/components/profile/ExpertiseChips";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Section from "@/components/profile/Section";
import StickyCTA from "@/components/profile/StickyCTA";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const consultantSlug = "hassan_khwaja";

const profile = {
  name: "Hassan Khwaja",
  badge: "Functional",
  title: "Workday Financials and Accounting Center Architect",
  location: "Texas, United States",
  experienceYears: 10,
  hourlyRate: 180,
  rateUnit: "hr",
  languages: ["English"],
  about: [
    "Senior Financial Systems Leader and Workday Architect with over a decade of experience implementing and optimizing financial systems.",
    "Expertise in Workday modules including Financial Accounting, FDM, PRISM, Adaptive Planning, Accounting Center, Budgets, Procurement, Projects, and Composite Reporting.",
    "Proven success delivering scalable Workday solutions across diverse industries including healthcare, financial services, insurance, education, and retail.",
    "Skilled in leading global teams, driving digital transformation, and designing robust SOX controls and reporting frameworks to enhance financial visibility.",
  ],
  expertiseTags: [
    "Assets",
    "Accounting Center",
    "Banking",
    "Business Assets",
    "Budget",
    "Capital Projects",
    "Core Finance",
    "Customer Accounts",
    "Expense Management",
    "FDM",
    "Financial Accounting",
    "Procurement",
    "Prism",
    "Reporting",
    "Security",
  ],
  certificationProvider: "Workday",
  certifications: [
    { year: 2025, level: "Implementer", name: "Assets" },
    { year: 2025, level: "Implementer", name: "FDM" },
    { year: 2025, level: "Implementer", name: "Capital Projects" },
    { year: 2021, level: "Implementer", name: "Financial Accounting" },
    { year: 2025, level: "Implementer", name: "Expense Management" },
    { year: 2024, level: "Implementer", name: "Accounting Center" },
    { year: 2025, level: "Implementer", name: "Banking" },
    { year: 2022, level: "Implementer", name: "Reporting" },
  ],
};

const trustSignals = [
  "Financial Accounting",
  "Accounting Center",
  "Composite Reporting",
  "Procurement",
];

const navLogo = "/brand/logo-challenge.png";
const profileAvatar = "/profile/hassan-khwaja.png";
const responseTime = "1 hour";

type ConsultantPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [{ slug: consultantSlug }];
}

export default async function ConsultantProfilePage({ params }: ConsultantPageProps) {
  const { slug } = await params;

  if (slug !== consultantSlug) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--surface)] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/98 backdrop-blur">
        <nav
          aria-label="Top navigation"
          className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link
            href="/"
            className="inline-flex items-center rounded px-1.5 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-600)]"
            aria-label="Turbin home"
          >
            <Image
              src={navLogo}
              alt="Turbin.ai"
              width={187}
              height={53}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Learn more about Turbin"
            className="inline-flex h-9 items-center justify-center rounded border border-white/35 bg-white px-3 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-600)] sm:px-4 sm:text-sm"
          >
            Learn more about Turbin
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8">
            <Card className="rounded p-6 sm:p-7">
              <ProfileHeader
                name={profile.name}
                badge={profile.badge}
                title={profile.title}
                location={profile.location}
                languages={profile.languages}
                experienceYears={profile.experienceYears}
                ratingScore={4.9}
                ratingCount={140}
                avatarSrc={profileAvatar}
              />

              <div className="mt-7 rounded border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[color:var(--brand)]" aria-hidden />
                  <h2 className="text-lg font-semibold text-slate-900">Vetted by Turbin Pro</h2>
                </div>
                <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {trustSignals.map((signal) => (
                    <li key={signal} className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-[color:var(--brand)]" aria-hidden />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Section
              title="About me"
              subtitle="Background and delivery strengths relevant to financial transformation."
            >
              <AboutText items={profile.about} />
            </Section>

            <Section
              title="Expertise"
              subtitle="Core modules and implementation focus areas."
            >
              <ExpertiseChips tags={profile.expertiseTags} />
            </Section>

            <Section
              title="Certifications"
              subtitle="Grouped by provider with credential year and level."
            >
              <CertificationsGrid
                provider={profile.certificationProvider}
                certifications={profile.certifications}
              />
            </Section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-4">
              <StickyCTA
                name={profile.name}
                hourlyRate={profile.hourlyRate}
                rateUnit={profile.rateUnit}
                responseTime={responseTime}
                avatarSrc={profileAvatar}
              />
            </div>
          </aside>
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <div>
            <p className="text-xs text-slate-500">Rate</p>
            <p className="text-lg font-semibold text-[color:var(--brand)]">
              ${profile.hourlyRate}/{profile.rateUnit}
            </p>
          </div>
          <Button className="flex-1" aria-label={`Contact ${profile.name}`}>
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
}
