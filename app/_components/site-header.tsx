"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconBrandGithub, IconSearch } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const learnActive = pathname.startsWith("/learn")
  const playgroundActive = pathname.startsWith("/playground")

  return (
    <header className="sticky top-0 z-50 border-b border-[oklch(0.87_0.015_85)] bg-[oklch(0.97_0.015_85)]/90 backdrop-blur-md dark:border-white/10 dark:bg-[oklch(0.14_0.018_60)]/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:px-10">

        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-[oklch(0.18_0.025_60)] transition-colors hover:text-[oklch(0.55_0.13_45)] dark:text-[oklch(0.92_0.015_85)]"
        >
          JSInside
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {[
            { href: "/learn", label: "Learn", active: learnActive },
            { href: "/playground", label: "Playground", active: playgroundActive },
            { href: "/#topics", label: "Topics", active: false },
          ].map(({ href, label, active }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "font-body text-sm transition-colors",
                active
                  ? "font-medium text-[oklch(0.55_0.13_45)]"
                  : "text-[oklch(0.50_0.03_60)] hover:text-[oklch(0.18_0.025_60)] dark:text-[oklch(0.65_0.02_60)] dark:hover:text-[oklch(0.92_0.015_85)]",
              )}
              aria-current={active ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-[oklch(0.50_0.03_60)] transition-colors hover:text-[oklch(0.18_0.025_60)] dark:text-[oklch(0.65_0.02_60)] dark:hover:text-[oklch(0.92_0.015_85)]"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg text-[oklch(0.50_0.03_60)] transition-colors hover:bg-[oklch(0.93_0.012_85)] hover:text-[oklch(0.18_0.025_60)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.55_0.13_45)] dark:text-[oklch(0.65_0.02_60)] dark:hover:bg-white/5"
            aria-label="Search"
          >
            <IconSearch className="size-4" stroke={2} />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-lg text-[oklch(0.50_0.03_60)] transition-colors hover:bg-[oklch(0.93_0.012_85)] hover:text-[oklch(0.18_0.025_60)] md:hidden dark:text-[oklch(0.65_0.02_60)] dark:hover:bg-white/5"
            aria-label="GitHub"
          >
            <IconBrandGithub className="size-4" stroke={2} />
          </a>
        </div>

      </div>
    </header>
  )
}
