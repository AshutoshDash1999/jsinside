import Link from "next/link"
import {
  IconBrandGithub,
  IconSearch,
  IconUserCircle,
} from "@tabler/icons-react"

import { cn } from "@/lib/utils"

const navLinkClass =
  "text-sm font-medium text-slate-400 transition-colors hover:text-slate-50"

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-50"
        >
          JSInside
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          <Link href="#features" className={navLinkClass}>
            Learn
          </Link>
          <Link href="/playground" className={navLinkClass}>
            Playground
          </Link>
          <Link href="#topics" className={navLinkClass}>
            Topics
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label="Search"
          >
            <IconSearch className="size-5" stroke={2} />
          </button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label="Account"
          >
            <IconUserCircle className="size-5" stroke={2} />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-50 md:hidden"
            aria-label="GitHub"
          >
            <IconBrandGithub className="size-5" stroke={2} />
          </a>
        </div>
      </div>
    </header>
  )
}
