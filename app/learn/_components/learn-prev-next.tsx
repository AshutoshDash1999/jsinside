import Link from "next/link"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

import type { DocNavLink } from "@/lib/learn-nav"
import { cn } from "@/lib/utils"

interface LearnPrevNextProps {
  prev?: DocNavLink
  next?: DocNavLink
}

export function LearnPrevNext({ prev, next }: LearnPrevNextProps) {
  if (!prev && !next) return null

  return (
    <nav
      className="mt-16 grid gap-4 border-t-2 border-[oklch(0.88_0.02_85)] pt-10 sm:grid-cols-2"
      aria-label="Previous and next lessons"
    >
      {prev ? (
        <Link
          href={prev.href}
          className={cn(
            "group flex flex-col rounded-2xl border-2 border-[oklch(0.68_0.15_230)] bg-[oklch(0.93_0.08_230)] p-5",
            "shadow-[4px_4px_0px_oklch(0.68_0.15_230)] transition-all duration-150",
            "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_oklch(0.68_0.15_230)]",
          )}
        >
          <span className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-[oklch(0.50_0.12_230)]">
            <IconArrowLeft className="size-3.5" stroke={2.5} aria-hidden />
            Previous
          </span>
          <span className="mt-2 font-sans text-base font-semibold text-[oklch(0.30_0.12_230)]">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className={cn(
            "group flex flex-col rounded-2xl border-2 border-[oklch(0.45_0.20_27)] bg-[oklch(0.58_0.20_27)] p-5 sm:text-right",
            "shadow-[4px_4px_0px_oklch(0.35_0.20_27)] transition-all duration-150",
            "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_oklch(0.35_0.20_27)]",
          )}
        >
          <span className="flex items-center justify-end gap-2 font-sans text-xs font-bold uppercase tracking-widest text-white/70">
            Next
            <IconArrowRight className="size-3.5" stroke={2.5} aria-hidden />
          </span>
          <span className="mt-2 font-sans text-base font-semibold text-white">
            {next.label}
          </span>
        </Link>
      ) : null}
    </nav>
  )
}
