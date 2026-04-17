import {
  IconBox,
  IconLayersLinked,
  IconRocket,
  IconStack2,
} from "@tabler/icons-react"

import { cn } from "@/lib/utils"

const topics = [
  {
    title: "Closures",
    description: "Lexical scope, captured variables, and why functions remember.",
    icon: IconLayersLinked,
    bentoClass: "md:col-span-2 md:row-span-2 md:min-h-52",
    titleClass: "md:text-xl",
  },
  {
    title: "Promises",
    description: "Thenables, microtasks, and async sequencing in the runtime.",
    icon: IconRocket,
    bentoClass: "md:col-span-2 md:row-span-1",
    titleClass: "",
  },
  {
    title: "Hoisting",
    description: "Creation phase, declarations, and temporal dead zone behavior.",
    icon: IconStack2,
    bentoClass: "md:col-span-1 md:row-span-1",
    titleClass: "",
  },
  {
    title: "Prototypes",
    description: "The prototype chain, delegation, and object layout.",
    icon: IconBox,
    bentoClass: "md:col-span-1 md:row-span-1",
    titleClass: "",
  },
] as const

const cardBase =
  "flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/10"

export function TopicPreview() {
  return (
    <section
      id="topics"
      className="scroll-mt-24 py-20 md:py-24 lg:py-32"
      aria-labelledby="topics-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2
          id="topics-heading"
          className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-50 md:text-4xl"
        >
          Core concepts
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-slate-400">
          Short paths into the ideas that power modern JavaScript—each with a
          clear mental model.
        </p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {topics.map(({ title, description, icon: Icon, bentoClass, titleClass }) => (
            <li key={title} className={cn("min-h-0", bentoClass)}>
              <div className={cn(cardBase, "h-full justify-between")}>
                <div className="flex items-start gap-3">
                  <Icon
                    className="size-5 shrink-0 text-emerald-400 md:mt-0.5"
                    stroke={2}
                    aria-hidden
                  />
                  <h3
                    className={cn("font-semibold text-slate-50", titleClass)}
                  >
                    {title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
