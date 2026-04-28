import Link from "next/link"

import { LEARN_TOPICS } from "@/lib/learn-nav"
import { cn } from "@/lib/utils"

const topicColors = [
  { bg: "bg-red-100", border: "border-red-400", text: "text-red-700", dot: "bg-red-400" },
  { bg: "bg-blue-100", border: "border-blue-400", text: "text-blue-700", dot: "bg-blue-400" },
  { bg: "bg-yellow-100", border: "border-yellow-400", text: "text-yellow-700", dot: "bg-yellow-400" },
  { bg: "bg-orange-100", border: "border-orange-400", text: "text-orange-700", dot: "bg-orange-400" },
  { bg: "bg-purple-100", border: "border-purple-400", text: "text-purple-700", dot: "bg-purple-400" },
  { bg: "bg-green-100", border: "border-green-400", text: "text-green-700", dot: "bg-green-400" },
]

interface LearnSidebarProps {
  currentPath: string
}

export function LearnSidebar({ currentPath }: LearnSidebarProps) {
  return (
    <aside className="hidden shrink-0 lg:block lg:w-[260px]">
      <div className="sticky top-16 flex max-h-[calc(100svh-4rem)] flex-col gap-6 pb-10 pt-8">

        <nav aria-label="Learn topics" className="min-h-0 flex-1 overflow-y-auto">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-[oklch(0.60_0.04_50)]">
            Curriculum
          </p>
          <ul className="space-y-2 pb-1 pr-1">
            {LEARN_TOPICS.map((topic, i) => {
              const active = currentPath === topic.href
              const color = topicColors[i % topicColors.length]
              return (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 font-sans text-sm font-medium transition-all duration-150",
                      active
                        ? cn(color.bg, color.border, color.text, "shadow-[3px_3px_0px] shadow-current/30")
                        : "border-transparent text-[oklch(0.45_0.04_50)] hover:bg-[oklch(0.96_0.01_85)] hover:text-[oklch(0.22_0.04_50)]",
                    )}
                  >
                    <span className={cn("size-2 shrink-0 rounded-full", color.dot)} />
                    {topic.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="rounded-2xl border-2 border-[oklch(0.78_0.16_90)] bg-[oklch(0.92_0.14_90)] p-4 shadow-[3px_3px_0px_oklch(0.78_0.16_90)]">
          <p className="font-sans text-xs font-bold text-[oklch(0.50_0.14_90)]">✦ Pro tip</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-[oklch(0.35_0.08_60)]">
            Use the playground to step through snippets and watch the call stack
            update in real time.
          </p>
        </div>

      </div>
    </aside>
  )
}
