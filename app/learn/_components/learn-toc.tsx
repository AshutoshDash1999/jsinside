"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface LearnTocProps {
  items: { id: string; label: string }[]
}

export function LearnToc({ items }: LearnTocProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null)

  useEffect(() => {
    if (items.length === 0) return

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    for (const el of elements) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <aside className="hidden shrink-0 lg:block lg:w-[240px]">
      <div className="sticky top-16 max-h-[calc(100svh-4rem)] overflow-y-auto pb-10 pt-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
          On this page
        </p>
        <ul className="space-y-1 border-l border-white/10 pl-3">
          {items.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block py-1.5 text-sm transition-colors",
                    active
                      ? "font-medium text-emerald-400"
                      : "text-slate-500 hover:text-slate-300",
                  )}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-center text-sm text-slate-500 transition-colors hover:bg-white/5 hover:text-slate-200"
          >
            Edit this page
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-center text-sm text-slate-500 transition-colors hover:bg-white/5 hover:text-slate-200"
          >
            Report a bug
          </a>
        </div>
      </div>
    </aside>
  )
}
