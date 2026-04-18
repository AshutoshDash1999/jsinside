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
import { cn } from "@/lib/utils"

/**
 * Same 4-column bento as FeatureGrid: hero 2×2, top-right 2×1,
 * two 1×1s, then two full-width half tiles on row 3.
 */
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
    iconClass: "text-rose-400",
  },
  {
    id: "promises",
    title: "Promises",
    description: "Thenables, microtasks, and async sequencing in the runtime.",
    icon: IconBolt,
    gridClass: "md:col-span-2 md:row-span-1",
    titleClass: "",
    iconClass: "text-fuchsia-400",
  },
  {
    id: "hoisting",
    title: "Hoisting",
    description: "Creation phase, declarations, and temporal dead zone behavior.",
    icon: IconArrowBigUpLines,
    gridClass: "md:col-span-1 md:row-span-1",
    titleClass: "",
    iconClass: "text-lime-400",
  },
  {
    id: "prototypes",
    title: "Prototypes",
    description: "The prototype chain, delegation, and object layout.",
    icon: IconAffiliate,
    gridClass: "md:col-span-1 md:row-span-1",
    titleClass: "",
    iconClass: "text-teal-400",
  },
  {
    id: "event-loop",
    title: "Event loop",
    description:
      "Macrotasks vs microtasks, rendering, and when your callbacks actually run.",
    icon: IconRefresh,
    gridClass: "md:col-span-2 md:row-span-1",
    titleClass: "",
    iconClass: "text-cyan-400",
  },
  {
    id: "modules",
    title: "Modules",
    description: "Static imports, live bindings, and how graphs resolve before boot.",
    icon: IconPackages,
    gridClass: "md:col-span-2 md:row-span-1",
    titleClass: "",
    iconClass: "text-indigo-400",
  },
]

const topicCardMotion =
  "transform-gpu transition duration-300 ease-out will-change-transform group-hover/topic:-translate-y-1 group-hover/topic:shadow-xl group-hover/topic:shadow-violet-500/15 group-hover/topic:border-white/15 group-hover/topic:bg-white/10 group-active/topic:translate-y-0"

const cardBase = cn(
  "flex h-full min-h-0 flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors",
  topicCardMotion,
)

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
          Six short paths into the ideas that power modern JavaScript—each with a
          clear mental model.
        </p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4 md:auto-rows-fr">
          {topics.map(
            ({ id, title, description, icon: Icon, gridClass, titleClass, iconClass }) => (
              <li key={id} className={cn("group/topic min-h-0", gridClass)}>
                <div className={cardBase}>
                  <div className="shrink-0 space-y-2">
                    <div className="flex items-start gap-3">
                      <Icon
                        className={cn("size-5 shrink-0 md:mt-0.5", iconClass)}
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
                  <TopicTileIllustration id={id} />
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
