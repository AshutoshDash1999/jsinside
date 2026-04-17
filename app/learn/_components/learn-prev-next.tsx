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
      className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2"
      aria-label="Previous and next lessons"
    >
      {prev ? (
        <Link
          href={prev.href}
          className={cn(
            "group flex flex-col rounded-xl border border-white/10 bg-white/5 p-5",
            "shadow-lg shadow-slate-950/40 ring-1 ring-inset ring-white/5",
            "transition-colors hover:border-violet-500/30 hover:bg-white/[0.07]",
          )}
        >
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
            <IconArrowLeft className="size-4" stroke={2} aria-hidden />
            Previous
          </span>
          <span className="mt-2 font-heading-learn text-lg font-semibold text-slate-100 group-hover:text-violet-300">
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
            "group flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 sm:text-right",
            "shadow-lg shadow-slate-950/40 ring-1 ring-inset ring-white/5",
            "transition-colors hover:border-violet-500/30 hover:bg-white/[0.07]",
          )}
        >
          <span className="flex items-center justify-end gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
            Next
            <IconArrowRight className="size-4" stroke={2} aria-hidden />
          </span>
          <span className="mt-2 font-heading-learn text-lg font-semibold text-slate-100 group-hover:text-violet-300">
            {next.label}
          </span>
        </Link>
      ) : null}
    </nav>
  )
}
