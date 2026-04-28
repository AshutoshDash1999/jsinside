import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const footerColumns = [
  {
    title: "Curriculum",
    links: [
      { label: "Getting started", href: "#features" },
      { label: "Topics", href: "#topics" },
      { label: "Challenges", href: "#features" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Playground", href: "/playground" },
      { label: "Roadmap", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
] as const

export function FooterCta() {
  return (
    <footer className="py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 border-t border-[oklch(0.87_0.015_85)] pt-12 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">

          <div>
            <p className="mb-2 font-display text-lg font-bold text-[oklch(0.18_0.025_60)] dark:text-[oklch(0.92_0.015_85)]">
              JSInside
            </p>
            <p className="font-body text-sm leading-relaxed text-[oklch(0.50_0.03_60)] dark:text-[oklch(0.65_0.02_60)]">
              Visual education for JavaScript internals — clear, interactive, and focused.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-[oklch(0.60_0.03_60)] dark:text-[oklch(0.55_0.02_60)]">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-[oklch(0.50_0.03_60)] transition-colors hover:text-[oklch(0.18_0.025_60)] dark:text-[oklch(0.65_0.02_60)] dark:hover:text-[oklch(0.92_0.015_85)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-[oklch(0.60_0.03_60)] dark:text-[oklch(0.55_0.02_60)]">
              Subscribe
            </p>
            <p className="mb-4 font-body text-sm text-[oklch(0.50_0.03_60)] dark:text-[oklch(0.65_0.02_60)]">
              Updates on new lessons and runtime deep dives.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row" action="#" method="post">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={cn(
                  "min-h-10 flex-1 rounded-lg border border-[oklch(0.87_0.015_85)] bg-[oklch(0.93_0.012_85)] px-3 py-2 font-body text-sm text-[oklch(0.18_0.025_60)] placeholder:text-[oklch(0.65_0.02_60)]",
                  "focus:border-[oklch(0.55_0.13_45)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.13_45)]/30",
                  "dark:border-white/10 dark:bg-white/5 dark:text-[oklch(0.92_0.015_85)]",
                )}
              />
              <Button
                type="submit"
                className="shrink-0 rounded-lg bg-[oklch(0.55_0.13_45)] text-[oklch(0.97_0.015_85)] hover:bg-[oklch(0.52_0.13_45)] active:scale-[0.97]"
              >
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <p className="mt-12 font-body text-center text-xs text-[oklch(0.65_0.02_60)]">
          © {new Date().getFullYear()} JSInside. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
