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
import { cn } from "@/lib/utils"

/**
 * 4-column bento (md+), 3 rows:
 *   [ Hero 2×2 ][ Playground 2×1 ]
 *   [ (hero)    ][ Anim ][ Runtime ]
 *   [ Call stk 2×1 ][ Modules 2×1 ]
 */
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
        iconClass: "text-emerald-400",
    },
    {
        id: "playground",
        title: "JS Playground Simulator",
        description:
            "A sandboxed environment designed to break and inspect code structures.",
        icon: IconBraces,
        gridClass: "md:col-span-2 md:row-span-1",
        iconClass: "text-cyan-400",
    },
    {
        id: "animations",
        title: "Learn with Animations",
        description:
            "Complex concepts like Prototypal Inheritance explained through smooth, interactive motion graphics.",
        icon: IconRoute,
        gridClass: "md:col-span-1 md:row-span-1",
        iconClass: "text-orange-400",
    },
    {
        id: "runtime",
        title: "Real Runtime Internals",
        description:
            "Step into the V8 engine logic. Visualize the Call Stack and Memory Heap as you execute line by line.",
        icon: IconEngine,
        gridClass: "md:col-span-1 md:row-span-1",
        iconClass: "text-violet-400",
    },
    {
        id: "call-stack",
        title: "Call Stack & Scope",
        description:
            "Lexical environments, execution contexts, and how nested functions resolve variables at runtime.",
        icon: IconHierarchy,
        gridClass: "md:col-span-2 md:row-span-1",
        iconClass: "text-sky-400",
    },
    {
        id: "modules",
        title: "Modules & Imports",
        description:
            "Live bindings, static analysis, and how the loader wires dependency graphs before your code runs.",
        icon: IconPackages,
        gridClass: "md:col-span-2 md:row-span-1",
        iconClass: "text-amber-300",
    },
]

const featureCardMotion =
    "transform-gpu transition duration-300 ease-out will-change-transform group-hover/feature:-translate-y-1 group-hover/feature:shadow-xl group-hover/feature:shadow-violet-500/15 group-active/feature:translate-y-0"

export function FeatureGrid() {
    return (
        <section
            id="features"
            className="scroll-mt-24 py-20 md:py-24 lg:py-32"
            aria-labelledby="features-heading"
        >
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <h2
                    id="features-heading"
                    className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-50 md:text-4xl"
                >
                    Built for deep understanding
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-slate-400">
                    Six angles on the runtime—each one built to turn abstract behavior
                    into something you can see and reason about.
                </p>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4 md:auto-rows-fr">
                    {features.map(
                        ({
                            id,
                            title,
                            description,
                            icon: Icon,
                            gridClass,
                            iconClass,
                        }) => (
                            <li
                                key={id}
                                className={cn(
                                    "group/feature min-h-0 md:min-h-48",
                                    gridClass,
                                )}
                            >
                                <div
                                    className={cn(
                                        "relative flex h-full min-h-48 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/50 ring-1 ring-inset ring-white/5 backdrop-blur-xl",
                                        featureCardMotion,
                                        "hover:border-white/15 hover:shadow-violet-500/25",
                                    )}
                                >
                                    <div className="shrink-0">
                                        <div className="mb-4 inline-flex w-fit rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                                            <Icon className={cn("size-7", iconClass)} stroke={2} aria-hidden />
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-50">
                                            {title}
                                        </h3>
                                        <p className="relative z-10 text-sm leading-relaxed text-slate-400">
                                            {description}
                                        </p>
                                    </div>

                                    <FeatureTileIllustration id={id} />
                                </div>
                            </li>
                        ),
                    )}
                </ul>
            </div>
        </section>
    )
}
