import Link from "next/link"

import { cn } from "@/lib/utils"

const footerColumns = [
  {
    title: "Curriculum",
    color: "text-[oklch(0.58_0.20_27)]",
    links: [
      { label: "Getting started", href: "#features" },
      { label: "Topics", href: "#topics" },
      { label: "Challenges", href: "#features" },
    ],
  },
  {
    title: "Product",
    color: "text-[oklch(0.55_0.15_230)]",
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

        {/* Big CTA strip */}
        <div className="mb-16 rounded-3xl border-2 border-[oklch(0.78_0.16_90)] bg-[oklch(0.92_0.14_90)] p-10 shadow-[6px_6px_0px_oklch(0.78_0.16_90)]">
          <p className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight text-[oklch(0.22_0.04_50)]">
            Ready to finally understand JavaScript?
          </p>
          <p className="mt-3 max-w-xl font-sans text-base text-[oklch(0.40_0.04_50)]">
            No more guessing. No more confusion. Just clear visual explanations made for humans.
          </p>
          <Link
            href="/learn"
            className="mt-6 inline-flex rounded-2xl border-2 border-[oklch(0.45_0.20_27)] bg-[oklch(0.58_0.20_27)] px-6 py-3 font-sans font-semibold text-white shadow-[4px_4px_0px_oklch(0.45_0.20_27)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_oklch(0.45_0.20_27)]"
          >
            Start learning for free →
          </Link>
        </div>

        <div className="grid gap-12 border-t-2 border-[oklch(0.88_0.02_85)] pt-12 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <p className="mb-2 font-display text-2xl text-[oklch(0.58_0.20_27)]">JSInside</p>
            <p className="font-sans text-sm leading-relaxed text-[oklch(0.50_0.04_50)]">
              Visual education for JavaScript internals — clear, interactive, and focused.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className={cn("mb-4 font-sans text-xs font-bold uppercase tracking-widest", col.color)}>
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-[oklch(0.50_0.04_50)] transition-colors hover:text-[oklch(0.22_0.04_50)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-[oklch(0.60_0.16_145)]">
              Subscribe
            </p>
            <p className="mb-4 font-sans text-sm text-[oklch(0.50_0.04_50)]">
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
                className="min-h-10 flex-1 rounded-xl border-2 border-[oklch(0.88_0.02_85)] bg-white px-3 py-2 font-sans text-sm text-[oklch(0.22_0.04_50)] placeholder:text-[oklch(0.70_0.02_50)] focus:border-[oklch(0.58_0.20_27)] focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl border-2 border-[oklch(0.45_0.20_27)] bg-[oklch(0.58_0.20_27)] px-4 py-2 font-sans text-sm font-semibold text-white shadow-[3px_3px_0px_oklch(0.45_0.20_27)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_oklch(0.45_0.20_27)]"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <p className="mt-12 text-center font-sans text-xs text-[oklch(0.65_0.02_50)]">
          © {new Date().getFullYear()} JSInside. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
