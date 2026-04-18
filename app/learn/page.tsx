import Link from "next/link"

import { LEARN_TOPICS } from "@/lib/learn-nav"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Learn",
  description:
    "Curriculum for mastering JavaScript internals — execution, async, and the runtime.",
}

export default function LearnIndexPage() {
  return (
    <>
      <header className="mb-10 rounded-xl border border-white/10 bg-[#11111B]/80 p-6 shadow-xl shadow-slate-950/50 ring-1 ring-inset ring-white/5 backdrop-blur-xl md:p-8">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          Documentation
        </p>
        <h1 className="font-heading-learn mt-2 text-4xl font-bold tracking-[-0.02em] text-slate-50">
          Mastering JavaScript
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-[1.6] text-slate-400">
          A focused path through the runtime: how code is parsed, scheduled, and executed
          — with interactive diagrams and high-signal explanations.
        </p>
      </header>

      <section aria-labelledby="topics-heading">
        <h2
          id="topics-heading"
          className="font-heading-learn mb-4 text-xl font-semibold text-violet-400"
        >
          Topics
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {LEARN_TOPICS.map((topic) => (
            <li key={topic.href}>
              <Link
                href={topic.href}
                className={cn(
                  "block rounded-xl border border-white/10 bg-white/5 p-4",
                  "shadow-lg shadow-slate-950/40 ring-1 ring-inset ring-white/5",
                  "transition-colors hover:border-violet-500/30 hover:bg-white/[0.07]",
                )}
              >
                <span className="font-heading-learn font-semibold text-slate-100">
                  {topic.label}
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  {topic.description ?? "Coming soon"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
