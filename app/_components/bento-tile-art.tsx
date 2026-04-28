import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export type FeatureTileId =
  | "event-loop"
  | "playground"
  | "animations"
  | "runtime"
  | "call-stack"
  | "modules"

export type TopicTileId =
  | "closures"
  | "promises"
  | "hoisting"
  | "prototypes"
  | "event-loop"
  | "modules"

function ArtChrome({
  className,
  large,
  children,
}: {
  className?: string
  large?: boolean
  children: ReactNode
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "bento-art text-stone-400",
        large && "bento-art-feature-lg",
        className,
      )}
    >
      {children}
    </div>
  )
}

function FeatureEventLoop() {
  return (
    <ArtChrome large>
      <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="14" fill="currentColor" fontSize="9" className="fill-stone-500">
          call stack
        </text>
        <rect x="10" y="20" width="46" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" className="text-stone-400" />
        <rect x="10" y="36" width="46" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" className="text-stone-400" />
        <rect x="10" y="52" width="46" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" className="text-emerald-600" />
        <text x="12" y="60" fill="currentColor" fontSize="7" className="fill-emerald-600">
          running
        </text>

        <g
          className="bento-spin-hover text-emerald-600"
          style={{ transformOrigin: "128px 58px", transformBox: "fill-box" }}
        >
          <circle cx="128" cy="58" r="24" stroke="currentColor" strokeWidth="1.25" strokeDasharray="5 6" />
        </g>
        <path
          d="M 128 38 A 12 12 0 1 1 128 62"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="text-emerald-600"
          fill="none"
        />
        <text x="108" y="62" fill="currentColor" fontSize="8" className="fill-stone-500">
          event loop
        </text>

        <text x="176" y="14" fill="currentColor" fontSize="9" className="fill-stone-500">
          macrotasks
        </text>
        <g className="bento-queue-hover text-amber-600" transform="translate(178 20)">
          <rect width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <rect x="22" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <rect x="44" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </g>

        <text x="88" y="108" fill="currentColor" fontSize="9" className="fill-stone-500">
          microtasks
        </text>
        <g className="bento-queue-hover text-sky-600" transform="translate(20 114)">
          <rect y="8" width="50" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="56" y="8" width="50" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="112" y="8" width="50" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="168" y="8" width="50" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
        </g>

        <path
          d="M 178 26 L 150 44"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          className="bento-event-flow-hover text-stone-500"
          strokeOpacity="0.7"
        />
        <path
          d="M 105 58 L 58 58"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          className="bento-event-flow-hover text-stone-500"
          strokeOpacity="0.7"
        />
        <path
          d="M 45 114 Q 33 80 33 52"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          className="bento-event-flow-hover text-sky-600"
          strokeOpacity="0.7"
        />
      </svg>
    </ArtChrome>
  )
}

function FeaturePlayground() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 220 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          editor
        </text>
        <rect x="8" y="18" width="92" height="72" rx="4" stroke="currentColor" strokeWidth="1.2" className="text-stone-400" />
        <path d="M 16 32 h56 M 16 44 h72 M 16 56 h48" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" className="text-stone-400" />
        <path
          d="M 16 44 h72"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="bento-dash-hover text-sky-600"
        />
        <text x="110" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          console
        </text>
        <rect x="110" y="18" width="102" height="72" rx="4" stroke="currentColor" strokeWidth="1.2" className="text-stone-400" />
        <path d="M 120 38 h70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 3" />
        <text x="120" y="36" fill="currentColor" fontSize="8" className="fill-stone-500">
          {">"} result
        </text>
      </svg>
    </ArtChrome>
  )
}

function FeatureAnimations() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 220 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          timeline
        </text>
        <path d="M 12 40 H 208" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
        <g className="bento-tick-hover text-orange-600" stroke="currentColor" strokeWidth="1.2">
          <path d="M 52 32 L 56 40 L 52 48 L 48 40 Z" fill="currentColor" fillOpacity="0.25" />
          <path d="M 110 28 L 114 40 L 110 52 L 106 40 Z" fill="currentColor" fillOpacity="0.25" />
          <path d="M 168 26 L 172 40 L 168 54 L 164 40 Z" fill="currentColor" fillOpacity="0.25" />
        </g>
        <text x="40" y="64" fill="currentColor" fontSize="7" className="fill-stone-500">
          keyframes
        </text>
      </svg>
    </ArtChrome>
  )
}

function FeatureRuntime() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 220 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          memory
        </text>
        <ellipse cx="52" cy="52" rx="36" ry="28" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" className="text-violet-600" />
        <text x="28" y="56" fill="currentColor" fontSize="8" className="fill-violet-600">
          heap
        </text>
        <text x="132" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          stack frames
        </text>
        <g className="bento-stack-hover text-violet-600" transform="translate(124 22)">
          <rect width="72" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <rect y="18" width="64" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <rect y="36" width="56" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </g>
        <path
          d="M 92 52 L 120 52"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          className="text-stone-400"
        />
        <text x="94" y="74" fill="currentColor" fontSize="7" className="fill-stone-500">
          pointers
        </text>
      </svg>
    </ArtChrome>
  )
}

function FeatureCallStack() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 240 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          LIFO — last pushed runs first
        </text>
        <path d="M 48 26 L 48 78" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M 42 30 L 48 24 L 54 30" stroke="currentColor" strokeWidth="1.2" className="text-sky-600" fill="none" />
        <g className="bento-stack-hover text-sky-600" transform="translate(76 24)">
          <rect width="100" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect y="18" width="100" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect y="36" width="100" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </g>
        <text x="176" y="34" fill="currentColor" fontSize="7" className="fill-stone-500">
          pop ←
        </text>
      </svg>
    </ArtChrome>
  )
}

function FeatureModules() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 240 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          module graph
        </text>
        <rect x="96" y="24" width="44" height="22" rx="3" stroke="currentColor" strokeWidth="1.2" className="text-amber-600" />
        <text x="102" y="39" fill="currentColor" fontSize="8" className="fill-amber-700">
          entry
        </text>
        <rect x="24" y="60" width="44" height="22" rx="3" stroke="currentColor" strokeWidth="1.2" className="text-amber-600" />
        <text x="36" y="75" fill="currentColor" fontSize="7" className="fill-stone-500">
          a.js
        </text>
        <rect x="168" y="60" width="44" height="22" rx="3" stroke="currentColor" strokeWidth="1.2" className="text-amber-600" />
        <text x="182" y="75" fill="currentColor" fontSize="7" className="fill-stone-500">
          b.js
        </text>
        <path
          d="M 112 46 L 56 62 M 124 46 L 180 62"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="bento-mod-line-hover text-amber-600"
        />
      </svg>
    </ArtChrome>
  )
}

function TopicClosures() {
  return (
    <ArtChrome large>
      <svg viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          outer ↔ inner scope
        </text>
        <rect x="20" y="28" width="88" height="72" rx="4" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" className="text-rose-500" />
        <text x="34" y="48" fill="currentColor" fontSize="8" className="fill-rose-600">
          closure
        </text>
        <rect x="48" y="56" width="56" height="40" rx="3" stroke="currentColor" strokeWidth="1.2" className="text-rose-500" />
        <text x="54" y="78" fill="currentColor" fontSize="7" className="fill-stone-500">
          fn sees env
        </text>
        <g className="bento-chain-hover text-rose-500">
          <path d="M 108 50 Q 138 38 152 50" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </g>
        <text x="158" y="44" fill="currentColor" fontSize="7" className="fill-stone-500">
          captured
        </text>
      </svg>
    </ArtChrome>
  )
}

function TopicPromises() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 220 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          pending → fulfilled
        </text>
        <rect x="16" y="36" width="44" height="28" rx="3" stroke="currentColor" strokeWidth="1.2" className="text-fuchsia-600" />
        <text x="28" y="54" fill="currentColor" fontSize="7" className="fill-stone-500">
          .then
        </text>
        <path
          d="M 62 50 H 118"
          stroke="currentColor"
          strokeWidth="1.5"
          className="bento-topic-arrow-hover text-fuchsia-600"
        />
        <rect x="124" y="36" width="76" height="28" rx="3" stroke="currentColor" strokeWidth="1.2" className="text-fuchsia-600" />
        <text x="140" y="54" fill="currentColor" fontSize="8" className="fill-fuchsia-700">
          microtask
        </text>
      </svg>
    </ArtChrome>
  )
}

function TopicHoisting() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 200 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          creation phase
        </text>
        <path d="M 24 78 H 176" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <g className="bento-topic-rise-hover text-lime-700" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="48" y1="72" x2="48" y2="38" />
          <line x1="100" y1="72" x2="100" y2="28" />
          <line x1="152" y1="72" x2="152" y2="22" />
        </g>
        <text x="36" y="90" fill="currentColor" fontSize="7" className="fill-stone-500">
          var / fn hoisted
        </text>
      </svg>
    </ArtChrome>
  )
}

function TopicPrototypes() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 200 108" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          __proto__ chain (lookup order)
        </text>
        <circle cx="100" cy="34" r="16" stroke="currentColor" strokeWidth="1.3" fill="none" className="text-teal-600" />
        <text x="92" y="38" fill="currentColor" fontSize="7" className="fill-stone-500">
          inst
        </text>
        <g className="bento-chain-hover text-teal-600">
          <path
            d="M 100 50 V 58"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            fill="none"
          />
        </g>
        <circle cx="100" cy="76" r="16" stroke="currentColor" strokeWidth="1.3" fill="none" className="text-teal-600" />
        <text x="86" y="80" fill="currentColor" fontSize="7" className="fill-stone-500">
          prototype
        </text>
        <text x="138" y="78" fill="currentColor" fontSize="7" className="fill-stone-400">
          …
        </text>
      </svg>
    </ArtChrome>
  )
}

function TopicEventLoop() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="6" y="12" fill="currentColor" fontSize="8" className="fill-stone-500">
          stack
        </text>
        <rect x="6" y="16" width="36" height="38" rx="2" stroke="currentColor" strokeWidth="1.1" className="text-stone-400" />
        <rect x="10" y="34" width="28" height="10" rx="1" stroke="currentColor" className="text-emerald-600" fill="none" />
        <g
          className="bento-spin-hover text-sky-600"
          style={{ transformOrigin: "118px 36px", transformBox: "fill-box" }}
        >
          <circle cx="118" cy="36" r="18" stroke="currentColor" strokeWidth="1.1" strokeDasharray="4 5" />
        </g>
        <text x="100" y="40" fill="currentColor" fontSize="7" className="fill-stone-500">
          loop
        </text>
        <text x="152" y="12" fill="currentColor" fontSize="8" className="fill-stone-500">
          tasks
        </text>
        <g className="bento-queue-hover text-amber-600" transform="translate(152 16)">
          <rect width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="20" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
        </g>
        <text x="48" y="86" fill="currentColor" fontSize="8" className="fill-stone-500">
          microtasks (drain first)
        </text>
        <g className="bento-queue-hover text-sky-600" transform="translate(16 72)">
          <rect width="44" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="50" width="44" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="100" width="44" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
        </g>
        <path
          d="M 152 24 L 138 32"
          stroke="currentColor"
          strokeWidth="1.1"
          className="bento-event-flow-hover text-stone-500"
          strokeOpacity="0.7"
        />
        <path
          d="M 100 36 L 44 36"
          stroke="currentColor"
          strokeWidth="1.1"
          className="bento-event-flow-hover text-stone-500"
          strokeOpacity="0.7"
        />
        <path
          d="M 36 72 Q 28 50 36 38"
          stroke="currentColor"
          strokeWidth="1.1"
          className="bento-event-flow-hover text-sky-600"
        />
      </svg>
    </ArtChrome>
  )
}

function TopicModules() {
  return (
    <ArtChrome>
      <svg viewBox="0 0 220 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="14" fill="currentColor" fontSize="8" className="fill-stone-500">
          static imports resolve once
        </text>
        <rect x="90" y="22" width="36" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" className="text-indigo-600" />
        <text x="94" y="34" fill="currentColor" fontSize="7" className="fill-stone-500">
          main
        </text>
        <rect x="28" y="60" width="40" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" className="text-indigo-600" />
        <rect x="150" y="60" width="40" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" className="text-indigo-600" />
        <path
          d="M 106 40 L 48 60 M 112 40 L 168 60"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="bento-mod-line-hover text-indigo-500"
        />
      </svg>
    </ArtChrome>
  )
}

const featureArt: Record<FeatureTileId, React.ReactNode> = {
  "event-loop": <FeatureEventLoop />,
  playground: <FeaturePlayground />,
  animations: <FeatureAnimations />,
  runtime: <FeatureRuntime />,
  "call-stack": <FeatureCallStack />,
  modules: <FeatureModules />,
}

const topicArt: Record<TopicTileId, React.ReactNode> = {
  closures: <TopicClosures />,
  promises: <TopicPromises />,
  hoisting: <TopicHoisting />,
  prototypes: <TopicPrototypes />,
  "event-loop": <TopicEventLoop />,
  modules: <TopicModules />,
}

export function FeatureTileIllustration({ id }: { id: FeatureTileId }) {
  return featureArt[id]
}

export function TopicTileIllustration({ id }: { id: TopicTileId }) {
  return topicArt[id]
}
