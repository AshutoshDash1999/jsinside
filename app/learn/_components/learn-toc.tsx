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
    <aside className="hidden shrink-0 lg:block lg:w-[220px]">
      <div className="sticky top-16 pb-6 pt-8">
        <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-[oklch(0.60_0.04_50)]">
          On this page
        </p>
        <ul className="space-y-1 border-l-2 border-[oklch(0.88_0.02_85)] pl-3">
          {items.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block py-1.5 font-sans text-sm transition-all duration-150",
                    active
                      ? "font-semibold text-[oklch(0.58_0.20_27)] translate-x-1"
                      : "text-[oklch(0.55_0.04_50)] hover:text-[oklch(0.22_0.04_50)]",
                  )}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 flex flex-col gap-2 border-t-2 border-[oklch(0.88_0.02_85)] pt-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-3 py-2 text-center font-sans text-sm text-[oklch(0.55_0.04_50)] transition-colors hover:bg-[oklch(0.96_0.01_85)] hover:text-[oklch(0.22_0.04_50)]"
          >
            Edit this page
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-3 py-2 text-center font-sans text-sm text-[oklch(0.55_0.04_50)] transition-colors hover:bg-[oklch(0.96_0.01_85)] hover:text-[oklch(0.22_0.04_50)]"
          >
            Report a bug
          </a>
        </div>
      </div>
    </aside>
  )
}
