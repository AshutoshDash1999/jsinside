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
            <span className="font-body text-sm italic tracking-wide text-[oklch(0.55_0.10_45)]">
              — a visual guide to JS internals
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-black leading-[1.02] tracking-tight text-[oklch(0.18_0.025_60)]">
              See what happens
              <br />
              inside{" "}
              <Highlighter
                action="highlight"
                color="#fbbf24"
                isView
                animationDuration={900}
                iterations={1}
                padding={5}
              >
                JavaScript
              </Highlighter>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-7 max-w-lg font-body text-lg leading-[1.8] text-[oklch(0.45_0.03_60)]">
              For absolute beginners who want to truly understand execution contexts,
              call stacks, and what the runtime actually does — shown, not just told.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-lg bg-[oklch(0.55_0.13_45)] text-[oklch(0.97_0.015_85)] shadow-md shadow-[oklch(0.55_0.13_45)]/25 transition-all duration-150 hover:bg-[oklch(0.52_0.13_45)] active:scale-[0.97]"
              >
                <Link href="/learn">Start learning →</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-lg text-[oklch(0.45_0.03_60)] hover:bg-[oklch(0.93_0.012_85)] hover:text-[oklch(0.18_0.025_60)]"
              >
                <Link href="/playground">Open playground</Link>
              </Button>
            </div>
          </ScrollReveal>

        </div>

        <ScrollReveal delay={0.55} className="pointer-events-none absolute bottom-14 right-14 hidden opacity-35 lg:block">
          <DoodleCurveArrow />
        </ScrollReveal>

      </div>
    </section>
  )
}

function DoodleCurveArrow() {
  return (
    <svg width="96" height="72" viewBox="0 0 96 72" fill="none" aria-hidden>
      <path
        d="M6 10 Q28 2 56 18 Q78 32 84 56"
        stroke="oklch(0.35 0.06 60)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M72 50 L84 56 L80 69"
        stroke="oklch(0.35 0.06 60)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
