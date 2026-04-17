import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { HeroRuntimeVisual } from "./hero-runtime-visual"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
            See What Happens Inside JavaScript
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Visualize execution context, event loop, hoisting, closures, async
            behavior and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className={cn(
                "rounded-xl border-transparent bg-linear-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/25 transition-shadow hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/40",
              )}
            >
              <Link href="/learn">Start Learning</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "rounded-xl border-white/20 bg-transparent text-slate-100 hover:bg-white/5 hover:text-slate-50",
              )}
            >
              <Link href="/playground">Open Playground</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <HeroRuntimeVisual />
        </div>
      </div>
    </section>
  )
}
