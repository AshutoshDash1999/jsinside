"use client"

import {
  IconBraces,
  IconEngine,
  IconHierarchy,
  IconPackages,
  IconRefresh,
  IconRoute,
} from "@tabler/icons-react"

import {
  FeatureTileIllustration,
  type FeatureTileId,
} from "@/app/_components/bento-tile-art"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { cn } from "@/lib/utils"

const features: {
  id: FeatureTileId
  title: string
  description: string
  icon: typeof IconRefresh
  gridClass: string
  iconClass: string
}[] = [
  {
    id: "event-loop",
    title: "Event Loop Visualizer",
    description:
      "Watch microtasks and macrotasks execute in real-time. See exactly when the render queue gets its turn.",
    icon: IconRefresh,
    gridClass: "md:col-span-2 md:row-span-2",
    iconClass: "text-emerald-600",
  },
  {
    id: "playground",
    title: "JS Playground",
    description:
      "A sandboxed environment designed to break and inspect code structures.",
    icon: IconBraces,
    gridClass: "md:col-span-2 md:row-span-1",
    iconClass: "text-sky-600",
  },
  {
    id: "animations",
    title: "Learn with Animations",
    description:
      "Complex concepts like Prototypal Inheritance explained through smooth, interactive motion graphics.",
    icon: IconRoute,
    gridClass: "md:col-span-1 md:row-span-1",
    iconClass: "text-orange-600",
  },
  {
    id: "runtime",
    title: "Real Runtime Internals",
    description:
      "Step into V8 engine logic. Visualize the Call Stack and Memory Heap as you execute line by line.",
    icon: IconEngine,
    gridClass: "md:col-span-1 md:row-span-1",
    iconClass: "text-violet-600",
  },
  {
    id: "call-stack",
    title: "Call Stack & Scope",
    description:
      "Lexical environments, execution contexts, and how nested functions resolve variables at runtime.",
    icon: IconHierarchy,
    gridClass: "md:col-span-2 md:row-span-1",
    iconClass: "text-sky-700",
  },
  {
    id: "modules",
    title: "Modules & Imports",
    description:
      "Live bindings, static analysis, and how the loader wires dependency graphs before your code runs.",
    icon: IconPackages,
    gridClass: "md:col-span-2 md:row-span-1",
    iconClass: "text-amber-700",
  },
]

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="scroll-mt-24 py-20 md:py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal>
          <h2
            id="features-heading"
            className="mb-3 font-display text-3xl font-black tracking-tight text-[oklch(0.18_0.025_60)] md:text-4xl"
          >
            Built for deep understanding
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mb-12 max-w-xl font-body text-base leading-relaxed text-[oklch(0.50_0.03_60)]">
            Six angles on the runtime — each one built to turn abstract behavior
            into something you can see and reason about.
          </p>
        </ScrollReveal>

        <ul className="grid grid-cols-1 gap-3 md:auto-rows-fr md:grid-cols-4 md:gap-3">
          {features.map(({ id, title, description, icon: Icon, gridClass, iconClass }, i) => (
            <ScrollReveal
              key={id}
              delay={i * 0.07}
              className={cn("group/feature min-h-0 md:min-h-48", gridClass)}
            >
              <li className="h-full">
                <div
                  className={cn(
                    "relative flex h-full min-h-48 flex-col overflow-hidden rounded-xl border border-[oklch(0.87_0.015_85)] bg-[oklch(0.97_0.015_85)] p-6",
                    "transform-gpu transition duration-300 ease-out will-change-transform",
                    "hover:-translate-y-1 hover:border-[oklch(0.82_0.02_85)] hover:shadow-lg hover:shadow-stone-200/80",
                    "active:translate-y-0",
                  )}
                >
                  <div className="shrink-0">
                    <Icon className={cn("mb-4 size-6", iconClass)} stroke={1.75} aria-hidden />
                    <h3 className="mb-2 font-display text-lg font-bold text-[oklch(0.18_0.025_60)]">
                      {title}
                    </h3>
                    <p className="relative z-10 font-body text-sm leading-relaxed text-[oklch(0.50_0.03_60)]">
                      {description}
                    </p>
                  </div>
                  <FeatureTileIllustration id={id} />
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
