"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Highlighter } from "@/components/ui/highlighter"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center py-20 md:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">

          <ScrollReveal>
            <span className="inline-block rounded-full border-2 border-[oklch(0.72_0.15_230)] bg-[oklch(0.93_0.08_230)] px-4 py-1.5 font-sans text-sm font-medium text-[oklch(0.35_0.15_230)]">
              visual learning for JS beginners ✦
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.12] text-[oklch(0.22_0.04_50)]">
              See what happens
              <br />
              inside{" "}
              <Highlighter
                action="highlight"
                color="#fde68a"
                isView
                animationDuration={900}
                iterations={1}
                padding={6}
              >
                JavaScript
              </Highlighter>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-7 max-w-lg font-sans text-lg leading-[1.8] text-[oklch(0.45_0.04_50)]">
              For absolute beginners who want to truly understand execution contexts,
              call stacks, and what the runtime actually does — shown, not just told.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-2xl border-2 border-[oklch(0.45_0.20_27)] bg-[oklch(0.58_0.20_27)] font-sans font-semibold text-white shadow-[4px_4px_0px_oklch(0.45_0.20_27)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_oklch(0.45_0.20_27)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <Link href="/learn">Start learning →</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-2xl border-2 border-[oklch(0.68_0.14_295)] bg-[oklch(0.93_0.07_295)] font-sans font-semibold text-[oklch(0.40_0.14_295)] shadow-[4px_4px_0px_oklch(0.68_0.14_295)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_oklch(0.68_0.14_295)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <Link href="/playground">Open playground</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-14 flex flex-wrap gap-5">
            {[
              { emoji: "🧠", label: "Execution Context" },
              { emoji: "📚", label: "Call Stack" },
              { emoji: "⬆️", label: "Hoisting" },
              { emoji: "🔄", label: "Event Loop" },
            ].map(({ emoji, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border-2 border-[oklch(0.88_0.02_85)] bg-white px-4 py-2 font-sans text-sm font-medium text-[oklch(0.40_0.04_50)] shadow-sm"
              >
                <span>{emoji}</span>
                {label}
              </div>
            ))}
          </ScrollReveal>

        </div>

        <div aria-hidden className="pointer-events-none absolute bottom-14 right-14 hidden opacity-30 lg:block">
          <DoodleCurveArrow />
        </div>

      </div>
    </section>
  )
}

function DoodleCurveArrow() {
  return (
    <svg width="96" height="72" viewBox="0 0 96 72" fill="none" aria-hidden>
      <path
        d="M6 10 Q28 2 56 18 Q78 32 84 56"
        stroke="oklch(0.58 0.20 27)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M72 50 L84 56 L80 69"
        stroke="oklch(0.58 0.20 27)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
