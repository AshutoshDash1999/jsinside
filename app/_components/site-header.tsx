"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const NAV: { href: string; label: string; external?: boolean }[] = [
  { href: "/learn", label: "Learn" },
  { href: "/playground", label: "Playground" },
  { href: "/#topics", label: "Topics" },
  { href: "https://github.com", label: "GitHub", external: true },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[oklch(0.88_0.02_85)] bg-[oklch(0.99_0.008_85)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:px-10">

        <Link
          href="/"
          className="font-display text-2xl text-[oklch(0.58_0.20_27)] transition-opacity hover:opacity-80"
        >
          JSInside
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map(({ href, label, external }) => {
            const active = !external && pathname.startsWith(href) && href !== "https://github.com"
            return (
              <Link
                key={href}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  "rounded-xl px-4 py-2 font-sans text-sm font-medium transition-all duration-150",
                  active
                    ? "bg-[oklch(0.93_0.08_230)] text-[oklch(0.35_0.15_230)]"
                    : "text-[oklch(0.45_0.04_50)] hover:bg-[oklch(0.96_0.01_85)] hover:text-[oklch(0.22_0.04_50)]",
                )}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/learn"
          className="hidden rounded-2xl border-2 border-[oklch(0.45_0.20_27)] bg-[oklch(0.58_0.20_27)] px-4 py-2 font-sans text-sm font-semibold text-white shadow-[3px_3px_0px_oklch(0.45_0.20_27)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_oklch(0.45_0.20_27)] md:inline-flex"
        >
          Start learning →
        </Link>

      </div>
    </header>
  )
}
