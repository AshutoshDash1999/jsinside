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
  bg: string
  border: string
  shadow: string
}[] = [
  {
    id: "event-loop",
    title: "Event Loop Visualizer",
    description:
      "Watch microtasks and macrotasks execute in real-time. See exactly when the render queue gets its turn.",
    icon: IconRefresh,
    gridClass: "md:col-span-2 md:row-span-2",
    iconClass: "text-yellow-700",
    bg: "bg-yellow-100",
    border: "border-yellow-400",
    shadow: "shadow-[4px_4px_0px_theme(colors.yellow.400)]",
  },
  {
    id: "playground",
    title: "JS Playground",
    description:
      "A sandboxed environment designed to break and inspect code structures.",
    icon: IconBraces,
    gridClass: "md:col-span-2 md:row-span-1",
    iconClass: "text-sky-700",
    bg: "bg-sky-100",
    border: "border-sky-400",
    shadow: "shadow-[4px_4px_0px_theme(colors.sky.400)]",
  },
  {
    id: "animations",
    title: "Learn with Animations",
    description:
      "Complex concepts like Prototypal Inheritance explained through smooth, interactive motion graphics.",
    icon: IconRoute,
    gridClass: "md:col-span-1 md:row-span-1",
    iconClass: "text-orange-700",
    bg: "bg-orange-100",
    border: "border-orange-400",
    shadow: "shadow-[4px_4px_0px_theme(colors.orange.400)]",
  },
  {
    id: "runtime",
    title: "Real Runtime Internals",
    description:
      "Step into V8 engine logic. Visualize the Call Stack and Memory Heap as you execute line by line.",
    icon: IconEngine,
    gridClass: "md:col-span-1 md:row-span-1",
    iconClass: "text-purple-700",
    bg: "bg-purple-100",
    border: "border-purple-400",
    shadow: "shadow-[4px_4px_0px_theme(colors.purple.400)]",
  },
  {
    id: "call-stack",
    title: "Call Stack & Scope",
    description:
      "Lexical environments, execution contexts, and how nested functions resolve variables at runtime.",
    icon: IconHierarchy,
    gridClass: "md:col-span-2 md:row-span-1",
    iconClass: "text-green-700",
    bg: "bg-green-100",
    border: "border-green-400",
    shadow: "shadow-[4px_4px_0px_theme(colors.green.400)]",
  },
  {
    id: "modules",
    title: "Modules & Imports",
    description:
      "Live bindings, static analysis, and how the loader wires dependency graphs before your code runs.",
    icon: IconPackages,
    gridClass: "md:col-span-2 md:row-span-1",
    iconClass: "text-pink-700",
    bg: "bg-pink-100",
    border: "border-pink-400",
    shadow: "shadow-[4px_4px_0px_theme(colors.pink.400)]",
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
            className="mb-3 font-display text-[clamp(2rem,5vw,3rem)] leading-tight text-[oklch(0.22_0.04_50)]"
          >
            Built for deep understanding
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mb-12 max-w-xl font-sans text-base leading-relaxed text-[oklch(0.50_0.04_50)]">
            Six angles on the runtime — each built to turn abstract behavior
            into something you can see and reason about.
          </p>
        </ScrollReveal>

        <ul className="grid grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-4 md:gap-4">
          {features.map(({ id, title, description, icon: Icon, gridClass, iconClass, bg, border, shadow }, i) => (
            <ScrollReveal
              key={id}
              delay={i * 0.07}
              className={cn("group/feature min-h-0 md:min-h-48", gridClass)}
            >
              <li className="h-full">
                <div
                  className={cn(
                    "relative flex h-full min-h-48 flex-col overflow-hidden rounded-2xl border-2 p-6",
                    bg, border, shadow,
                    "transform-gpu transition-all duration-200 ease-out will-change-transform",
                    "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
                  )}
                >
                  <div className="shrink-0">
                    <Icon className={cn("mb-3 size-6", iconClass)} stroke={1.75} aria-hidden />
                    <h3 className="mb-2 font-sans text-lg font-bold text-[oklch(0.22_0.04_50)]">
                      {title}
                    </h3>
                    <p className="relative z-10 font-sans text-sm leading-relaxed text-[oklch(0.45_0.04_50)]">
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
