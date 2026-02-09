import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--surface)] px-4">
      <div className="w-full max-w-xl rounded border border-slate-200 bg-white p-8 text-center shadow-[0_14px_36px_-22px_rgba(15,23,42,0.45)]">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-600)]">
          Turbin UI Challenge
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Consultant Profile Redesign
        </h1>
        <p className="mt-3 text-slate-600">
          Open the redesigned marketplace profile route to review the full page.
        </p>
        <Link
          href="/consultant/hassan_khwaja"
          className={buttonStyles({
            className: "mt-6 w-full sm:w-auto",
          })}
        >
          View profile
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </main>
  );
}
