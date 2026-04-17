"use client"

import { usePathname } from "next/navigation"

import { LearnPrevNext } from "@/app/learn/_components/learn-prev-next"
import { LearnSidebar } from "@/app/learn/_components/learn-sidebar"
import { LearnToc } from "@/app/learn/_components/learn-toc"
import { SiteHeader } from "@/app/_components/site-header"
import {
  LEARN_PREV_NEXT_BY_PATH,
  LEARN_TOC_BY_PATH,
} from "@/lib/learn-nav"

interface LearnLayoutClientProps {
  children: React.ReactNode
}

export function LearnLayoutClient({ children }: LearnLayoutClientProps) {
  const pathname = usePathname()
  const toc = LEARN_TOC_BY_PATH[pathname] ?? []
  const nav = LEARN_PREV_NEXT_BY_PATH[pathname]

  return (
    <div className="min-h-svh bg-[#0B0B12]">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative z-10">
        <SiteHeader />

        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <div className="flex gap-8 lg:gap-10 xl:gap-12">
            <LearnSidebar currentPath={pathname} />

            <main className="min-w-0 flex-1 pb-16 pt-6 md:pt-8">
              <article className="prose-docs mx-auto w-full max-w-[800px]">
                {children}
                {nav ? (
                  <LearnPrevNext prev={nav.prev} next={nav.next} />
                ) : null}
              </article>
            </main>

            <LearnToc items={toc} />
          </div>
        </div>
      </div>
    </div>
  )
}
