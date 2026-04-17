import Link from "next/link"

import { LEARN_TOPICS } from "@/lib/learn-nav"
import { cn } from "@/lib/utils"

interface LearnSidebarProps {
  currentPath: string
}

export function LearnSidebar({ currentPath }: LearnSidebarProps) {
  return (
    <aside className="hidden shrink-0 lg:block lg:w-[260px]">
      <div className="sticky top-16 flex max-h-[calc(100svh-4rem)] flex-col gap-6 pb-10 pt-6">
        <div className="rounded-xl border border-white/10 bg-[#11111B]/80 p-4 shadow-lg shadow-slate-950/40 ring-1 ring-inset ring-white/5 backdrop-blur-xl">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            JSInside Learn
          </p>
          <p className="mt-1 font-heading-learn text-lg font-semibold text-slate-50">
            Mastering JavaScript
          </p>
          <p className="mt-1 text-xs text-slate-500">Docs · v0.1</p>
        </div>

        <nav aria-label="Learn topics" className="min-h-0 flex-1 overflow-y-auto">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
            Curriculum
          </p>
          <ul className="space-y-1">
            {LEARN_TOPICS.map((topic) => {
              const active = currentPath === topic.href
              return (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className={cn(
                      "block rounded-lg border border-transparent py-2 pl-3 pr-2 text-sm transition-colors",
                      active
                        ? "border-l-2 border-l-violet-500 bg-violet-500/10 font-medium text-slate-100"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200",
                    )}
                  >
                    {topic.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="rounded-xl border border-white/10 bg-[#11111B]/60 p-4 shadow-md shadow-slate-950/30 ring-1 ring-inset ring-white/5 backdrop-blur-xl">
          <p className="text-xs font-semibold text-emerald-400">Pro tip</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Use the playground to step through snippets and watch the call stack
            update in real time.
          </p>
        </div>
      </div>
    </aside>
  )
}
