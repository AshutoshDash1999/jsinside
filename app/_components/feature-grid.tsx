import {
    IconBraces,
    IconEngine,
    IconRefresh,
    IconRoute,
} from "@tabler/icons-react"

import { cn } from "@/lib/utils"

/**
 * 3-column × 2-row bento:
 * Row 1: [ ⅔ Event Loop ] [ ⅓ Playground ]
 * Row 2: [ ⅓ Animations ] [ ⅔ Runtime ]
 */
const features = [
    {
        title: "Event Loop Visualizer",
        description:
            "Watch microtasks and macrotasks execute in real-time. See exactly when the render queue gets its turn.",
        icon: IconRefresh,
        gridClass: "md:col-span-2",
        iconClass: "text-emerald-400",
        variant: "default" as const,
        decoration: "window" as const,
    },
    {
        title: "JS Playground Simulator",
        description:
            "A sandboxed environment designed to break and inspect code structures.",
        icon: IconBraces,
        gridClass: "md:col-span-1",
        iconClass: "text-violet-950",
        variant: "accent" as const,
        decoration: "comment" as const,
    },
    {
        title: "Learn with Animations",
        description:
            "Complex concepts like Prototypal Inheritance explained through smooth, interactive motion graphics.",
        icon: IconRoute,
        gridClass: "md:col-span-1",
        iconClass: "text-orange-400",
        variant: "default" as const,
        decoration: "none" as const,
    },
    {
        title: "Real Runtime Internals",
        description:
            "Step into the V8 engine logic. Visualize the Call Stack and Memory Heap as you execute line by line.",
        icon: IconEngine,
        gridClass: "md:col-span-2",
        iconClass: "text-violet-400",
        variant: "default" as const,
        decoration: "orbit" as const,
    },
] as const

function FeatureDecoration({
    type,
}: {
    type: "window" | "comment" | "orbit" | "none"
}) {
    if (type === "window") {
        return (
            <div
                className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2"
                aria-hidden
            >
                <span className="size-2 rounded-full bg-red-500/90" />
                <span className="size-2 rounded-full bg-amber-400/90" />
                <span className="size-2 rounded-full bg-emerald-500/90" />
                <span className="ml-2 h-1 flex-1 rounded bg-white/5" />
            </div>
        )
    }

    if (type === "orbit") {
        return (
            <div
                className="pointer-events-none absolute -right-4 bottom-0 flex size-36 items-start justify-start opacity-30 md:size-44"
                aria-hidden
            >
                <div className="relative flex size-full items-center justify-center rounded-full border border-dashed border-violet-400/40">
                    <IconEngine className="absolute left-2 top-3 size-6 text-violet-300" stroke={1.5} />
                </div>
            </div>
        )
    }
    return null
}

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
                    Four pillars that turn abstract runtime behavior into something you
                    can see and reason about.
                </p>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-4 md:auto-rows-fr">
                    {features.map(
                        ({
                            title,
                            description,
                            icon: Icon,
                            gridClass,
                            iconClass,
                            variant,
                            decoration,
                        }) => (
                            <li
                                key={title}
                                className={cn("min-h-0 md:min-h-52", gridClass)}
                            >
                                <div
                                    className={cn(
                                        "group relative flex h-full min-h-48 flex-col overflow-hidden rounded-xl border p-6 shadow-lg shadow-slate-950/50 ring-1 ring-inset backdrop-blur-xl transition-shadow",
                                        variant === "default" &&
                                        "border-white/10 bg-white/5 ring-white/5 hover:border-white/10 hover:shadow-violet-500/20",
                                        variant === "accent" &&
                                        "border-violet-400/35 bg-violet-400/20 ring-violet-400/20 hover:bg-violet-400/25",
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "mb-4 inline-flex w-fit rounded-lg p-3 ring-1",
                                            variant === "default" && "bg-white/5 ring-white/10",
                                            variant === "accent" &&
                                            "bg-violet-950/20 ring-violet-950/20",
                                        )}
                                    >
                                        <Icon className={cn("size-7", iconClass)} stroke={2} aria-hidden />
                                    </div>
                                    <h3
                                        className={cn(
                                            "mb-2 text-lg font-semibold",
                                            variant === "default" && "text-slate-50",
                                            variant === "accent" && "text-violet-950",
                                        )}
                                    >
                                        {title}
                                    </h3>
                                    <p
                                        className={cn(
                                            "relative z-10 text-sm leading-relaxed",
                                            variant === "default" && "text-slate-400",
                                            variant === "accent" && "text-violet-950/85",
                                            decoration === "window" && "flex-1",
                                        )}
                                    >
                                        {description}
                                    </p>

                                    {decoration !== "none" && (
                                        <FeatureDecoration type={decoration} />
                                    )}
                                </div>
                            </li>
                        ),
                    )}
                </ul>
            </div>
        </section>
    )
}
