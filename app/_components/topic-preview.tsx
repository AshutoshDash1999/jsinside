"use client"

import {
  IconAffiliate,
  IconArrowBigUpLines,
  IconBolt,
  IconLayersLinked,
  IconPackages,
  IconRefresh,
} from "@tabler/icons-react"

import {
  TopicTileIllustration,
  type TopicTileId,
} from "@/app/_components/bento-tile-art"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { cn } from "@/lib/utils"

const topics: {
  id: TopicTileId
  title: string
  description: string
  icon: typeof IconLayersLinked
  gridClass: string
  titleClass: string
  iconClass: string
}[] = [
  {
    id: "closures",
    title: "Closures",
    description: "Lexical scope, captured variables, and why functions remember.",
    icon: IconLayersLinked,
    gridClass: "md:col-span-2 md:row-span-2 md:min-h-52",
    titleClass: "md:text-xl",
    iconClass: "text-rose-600",
  },
  {
    id: "promises",
    title: "Promises",
    description: "Thenables, microtasks, and async sequencing in the runtime.",
    icon: IconBolt,
    gridClass: "md:col-span-2 md:row-span-1",
    titleClass: "",
    iconClass: "text-fuchsia-600",
  },
  {
    id: "hoisting",
    title: "Hoisting",
    description: "Creation phase, declarations, and temporal dead zone behavior.",
    icon: IconArrowBigUpLines,
    gridClass: "md:col-span-1 md:row-span-1",
    titleClass: "",
    iconClass: "text-lime-700",
  },
  {
    id: "prototypes",
    title: "Prototypes",
    description: "The prototype chain, delegation, and object layout.",
    icon: IconAffiliate,
    gridClass: "md:col-span-1 md:row-span-1",
    titleClass: "",
    iconClass: "text-teal-600",
  },
  {
    id: "event-loop",
    title: "Event loop",
    description:
      "Macrotasks vs microtasks, rendering, and when your callbacks actually run.",
    icon: IconRefresh,
    gridClass: "md:col-span-2 md:row-span-1",
    titleClass: "",
    iconClass: "text-sky-600",
  },
  {
    id: "modules",
    title: "Modules",
    description: "Static imports, live bindings, and how graphs resolve before boot.",
    icon: IconPackages,
    gridClass: "md:col-span-2 md:row-span-1",
    titleClass: "",
    iconClass: "text-indigo-600",
  },
]

export function TopicPreview() {
  return (
    <section
      id="topics"
      className="scroll-mt-24 py-20 md:py-24 lg:py-32"
      aria-labelledby="topics-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal>
          <h2
            id="topics-heading"
            className="mb-3 font-display text-3xl font-black tracking-tight text-[oklch(0.18_0.025_60)] md:text-4xl"
          >
            Core concepts
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mb-12 max-w-xl font-body text-base leading-relaxed text-[oklch(0.50_0.03_60)]">
            Six short paths into the ideas that power modern JavaScript — each with a
            clear mental model.
          </p>
        </ScrollReveal>

        <ul className="grid grid-cols-1 gap-3 md:auto-rows-fr md:grid-cols-4 md:gap-3">
          {topics.map(({ id, title, description, icon: Icon, gridClass, titleClass, iconClass }, i) => (
            <ScrollReveal
              key={id}
              delay={i * 0.07}
              className={cn("group/topic min-h-0", gridClass)}
            >
              <li className="h-full">
                <div
                  className={cn(
                    "flex h-full min-h-0 flex-col gap-3 rounded-xl border border-[oklch(0.87_0.015_85)] bg-[oklch(0.97_0.015_85)] p-5",
                    "transform-gpu transition duration-300 ease-out will-change-transform",
                    "hover:-translate-y-1 hover:border-[oklch(0.82_0.02_85)] hover:shadow-lg hover:shadow-stone-200/80",
                    "active:translate-y-0",
                  )}
                >
                  <div className="shrink-0 space-y-2">
                    <div className="flex items-start gap-3">
                      <Icon
                        className={cn("size-5 shrink-0 md:mt-0.5", iconClass)}
                        stroke={1.75}
                        aria-hidden
                      />
                      <h3 className={cn("font-display font-bold text-[oklch(0.18_0.025_60)]", titleClass)}>
                        {title}
                      </h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-[oklch(0.50_0.03_60)]">
                      {description}
                    </p>
                  </div>
                  <TopicTileIllustration id={id} />
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
