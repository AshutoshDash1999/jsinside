"use client"

import {
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
  IconRotateClockwise,
} from "@tabler/icons-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useCallback, useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

/**
 * Interactive event-loop explainer (SVG + Motion).
 *
 * Remotion is built for programmatic *video* (timeline compositions, renders,
 * Remotion Studio). For play / pause / step controls in a doc page, React state
 * + SVG + Motion is lighter and a better fit than embedding @remotion/player.
 */

const AUTO_ADVANCE_MS = 2200

type Step = {
  caption: string
  /** Bottom → top */
  stack: string[]
  micro: string | null
  macro: string | null
  web: string | null
  loopPulse: boolean
}

const STEPS: Step[] = [
  {
    caption:
      "Idle: the call stack is empty and task queues have no pending work yet.",
    stack: [],
    micro: null,
    macro: null,
    web: null,
    loopPulse: false,
  },
  {
    caption: "main() begins — a stack frame is pushed for the running script.",
    stack: ["main()"],
    micro: null,
    macro: null,
    web: null,
    loopPulse: false,
  },
  {
    caption:
      "setTimeout(fn, 0) schedules a timer. The host keeps the timer and queues the callback as a macrotask.",
    stack: ["main()"],
    micro: null,
    macro: "setTimeout cb",
    web: "timers",
    loopPulse: false,
  },
  {
    caption:
      "Promise.resolve().then(fn) queues a microtask. Microtasks run after the current stack clears, before the next macrotask.",
    stack: ["main()"],
    micro: "then()",
    macro: "setTimeout cb",
    web: "timers",
    loopPulse: false,
  },
  {
    caption:
      "Synchronous work in main() finishes; main() pops off the stack. The stack is now empty.",
    stack: [],
    micro: "then()",
    macro: "setTimeout cb",
    web: null,
    loopPulse: true,
  },
  {
    caption:
      "The event loop takes the next microtask first. The promise callback briefly occupies the call stack.",
    stack: ["then()"],
    micro: null,
    macro: "setTimeout cb",
    web: null,
    loopPulse: true,
  },
  {
    caption:
      "Microtasks are drained. The macrotask from setTimeout runs next — another brief stack frame.",
    stack: ["setTimeout cb"],
    micro: null,
    macro: null,
    web: null,
    loopPulse: true,
  },
  {
    caption:
      "All scheduled callbacks finished. The runtime returns to idle until new work arrives.",
    stack: [],
    micro: null,
    macro: null,
    web: null,
    loopPulse: false,
  },
]

export function LearnRuntimeVisual() {
  const reducedMotion = useReducedMotion() === true
  const [stepIndex, setStepIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  const step = STEPS[stepIndex]!
  const lastIndex = STEPS.length - 1

  const advance = useCallback(() => {
    setStepIndex((i) => (i >= lastIndex ? 0 : i + 1))
  }, [lastIndex])

  useEffect(() => {
    if (!playing || reducedMotion) return
    const id = window.setInterval(advance, AUTO_ADVANCE_MS)
    return () => window.clearInterval(id)
  }, [playing, reducedMotion, advance])

  const goNext = useCallback(() => {
    advance()
  }, [advance])

  const reset = useCallback(() => {
    setPlaying(false)
    setStepIndex(0)
  }, [])

  const togglePlay = useCallback(() => {
    setPlaying((p) => !p)
  }, [])

  const transition = useMemo(
    () =>
      reducedMotion
        ? { duration: 0 }
        : { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
    [reducedMotion],
  )

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl shadow-slate-950/50 ring-1 ring-inset ring-white/5 backdrop-blur-xl">
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-48 w-1/2 rounded-full bg-violet-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-40 w-1/2 rounded-full bg-emerald-500/15 blur-3xl"
        aria-hidden
      />

      <div className="relative p-6 md:p-8">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Interactive runtime map
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs tabular-nums text-slate-500">
              Step {stepIndex + 1} / {STEPS.length}
            </span>
            <button
              type="button"
              onClick={togglePlay}
              disabled={reducedMotion}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium",
                "bg-violet-600 text-white shadow-lg shadow-violet-500/25 transition-colors",
                "hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B12]",
                "disabled:cursor-not-allowed disabled:opacity-50",
              )}
              aria-pressed={playing}
              title={
                reducedMotion
                  ? "Auto-play disabled when reduced motion is preferred"
                  : playing
                    ? "Pause auto-advance"
                    : "Play — auto-advance steps"
              }
            >
              {playing ? (
                <>
                  <IconPlayerPause className="size-4" stroke={2} aria-hidden />
                  Pause
                </>
              ) : (
                <>
                  <IconPlayerPlay className="size-4" stroke={2} aria-hidden />
                  Play
                </>
              )}
            </button>
            <button
              type="button"
              onClick={goNext}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-slate-200",
                "transition-colors hover:border-white/30 hover:bg-white/5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B12]",
              )}
              title="Advance one step"
            >
              <IconPlayerSkipForward className="size-4" stroke={2} aria-hidden />
              Next
            </button>
            <button
              type="button"
              onClick={reset}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-400",
                "transition-colors hover:bg-white/5 hover:text-slate-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B12]",
              )}
              title="Back to step 1"
            >
              <IconRotateClockwise className="size-4" stroke={2} aria-hidden />
              Reset
            </button>
          </div>
        </div>

        {reducedMotion ? (
          <p className="mb-3 text-xs text-slate-500">
            Auto-play is off when “reduce motion” is enabled. Use Next to step
            through.
          </p>
        ) : null}

        <div className="aspect-[16/9] w-full max-h-[320px]">
          <svg
            viewBox="0 0 520 280"
            className="h-full w-full text-violet-500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Event loop diagram with call stack, event loop, task queues, and Web APIs"
          >
            <defs>
              <linearGradient id="doc-flow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.35" />
              </linearGradient>
              <filter id="doc-glow">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <text
              x="56"
              y="36"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Call stack
            </text>
            <rect
              x="24"
              y="44"
              width="96"
              height="168"
              rx="10"
              className="fill-white/5 stroke-white/10"
              strokeWidth="1"
            />

            <StackFrames
              labels={step.stack}
              transition={transition}
            />

            <text
              x="260"
              y="36"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Event loop
            </text>
            <circle
              cx="260"
              cy="132"
              r="44"
              className="fill-white/5 stroke-white/10"
              strokeWidth="1"
            />
            <motion.circle
              cx="260"
              cy="132"
              r="8"
              className="fill-violet-500"
              animate={
                step.loopPulse
                  ? { scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }
                  : { scale: 1, opacity: 0.75 }
              }
              transition={
                step.loopPulse && !reducedMotion
                  ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.2 }
              }
            />

            <text
              x="432"
              y="36"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Task queues
            </text>
            <rect
              x="360"
              y="52"
              width="136"
              height="72"
              rx="10"
              className={cn(
                "stroke-white/10 stroke-1",
                step.micro ? "fill-emerald-500/10" : "fill-white/5",
              )}
            />
            <QueueLabel
              slot="micro"
              x={428}
              y={78}
              label={step.micro}
              active={Boolean(step.micro)}
              transition={transition}
            />
            <rect
              x="360"
              y="140"
              width="136"
              height="72"
              rx="10"
              className={cn(
                "stroke-white/10 stroke-1",
                step.macro ? "fill-violet-500/10" : "fill-white/5",
              )}
            />
            <QueueLabel
              slot="macro"
              x={428}
              y={166}
              label={step.macro}
              active={Boolean(step.macro)}
              transition={transition}
            />

            <text
              x="260"
              y="248"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Web APIs
            </text>
            <motion.rect
              x="160"
              y="212"
              width="200"
              height="44"
              rx="10"
              animate={{
                opacity: step.web ? 1 : 0.55,
                strokeOpacity: step.web ? 1 : 0.35,
              }}
              transition={transition}
              className={cn(
                "fill-white/5 stroke-white/10",
                step.web && "fill-violet-500/5 stroke-violet-500/30",
              )}
              strokeWidth="1"
            />
            <AnimatePresence mode="wait">
              {step.web ? (
                <motion.text
                  key={step.web}
                  x="260"
                  y="238"
                  textAnchor="middle"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={transition}
                  className="fill-slate-300 font-mono text-[10px]"
                >
                  {step.web}
                </motion.text>
              ) : (
                <motion.text
                  key="idle-web"
                  x="260"
                  y="238"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  className="fill-slate-500 font-mono text-[10px]"
                >
                  timers · fetch · DOM
                </motion.text>
              )}
            </AnimatePresence>

            <path
              d="M 120 120 C 180 80 220 100 240 120"
              fill="none"
              stroke="url(#doc-flow)"
              strokeWidth="2"
              filter="url(#doc-glow)"
              className="opacity-90"
            />
            <path
              d="M 280 120 L 340 88"
              fill="none"
              stroke="url(#doc-flow)"
              strokeWidth="1.5"
              className="opacity-80"
            />
            <path
              d="M 280 140 L 340 168"
              fill="none"
              stroke="url(#doc-flow)"
              strokeWidth="1.5"
              className="opacity-80"
            />
            <path
              d="M 260 176 L 260 208"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-emerald-400/70"
              strokeDasharray="4 4"
            />

            <FlowMarkers
              stepIndex={stepIndex}
              transition={transition}
            />
          </svg>
        </div>

        <motion.p
          key={stepIndex}
          initial={reducedMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="mt-4 text-sm leading-relaxed text-slate-400"
        >
          {step.caption}
        </motion.p>
      </div>
    </div>
  )
}

function StackFrames({
  labels,
  transition,
}: {
  labels: string[]
  transition: { duration: number; ease?: readonly [number, number, number, number] }
}) {
  /** Rect top Y inside stack column; lower = higher on screen. */
  const rectTopForIndex = (i: number) => {
    if (labels.length === 1) return 58
    return [94, 58][i] ?? 58
  }

  return (
    <AnimatePresence initial={false}>
      {labels.map((label, i) => {
        const rectTop = rectTopForIndex(i)
        const textY = rectTop + 20
        return (
          <motion.g
            key={`${label}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <rect
              x="36"
              y={rectTop}
              width="72"
              height="28"
              rx="6"
              className={
                i === labels.length - 1
                  ? "fill-slate-800/90 stroke-emerald-500/50"
                  : "fill-slate-800/80 stroke-white/10"
              }
              strokeWidth="1"
            />
            <text
              x="72"
              y={textY}
              textAnchor="middle"
              className={
                i === labels.length - 1
                  ? "fill-emerald-400/95 font-mono text-[10px]"
                  : "fill-slate-400 font-mono text-[10px]"
              }
            >
              {label}
            </text>
          </motion.g>
        )
      })}
    </AnimatePresence>
  )
}

function QueueLabel({
  slot,
  x,
  y,
  label,
  active,
  transition,
}: {
  slot: "micro" | "macro"
  x: number
  y: number
  label: string | null
  active: boolean
  transition: { duration: number; ease?: readonly [number, number, number, number] }
}) {
  return (
    <AnimatePresence mode="wait">
      {label ? (
        <motion.text
          key={`${slot}-${label}`}
          x={x}
          y={y}
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className={
            active
              ? "fill-slate-200 font-mono text-[10px]"
              : "fill-slate-500 font-mono text-[10px]"
          }
        >
          {label}
        </motion.text>
      ) : (
        <motion.text
          key={`${slot}-empty`}
          x={x}
          y={y}
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          className="fill-slate-600 font-mono text-[10px]"
        >
          —
        </motion.text>
      )}
    </AnimatePresence>
  )
}

function FlowMarkers({
  stepIndex,
  transition,
}: {
  stepIndex: number
  transition: { duration: number; ease?: readonly [number, number, number, number] }
}) {
  const showStackToken = stepIndex >= 1 && stepIndex <= 3
  const showMicroToken = stepIndex >= 4 && stepIndex <= 5
  const showMacroToken = stepIndex === 6

  return (
    <>
      <motion.circle
        cx="120"
        cy="120"
        r="7"
        className="fill-violet-500"
        initial={false}
        animate={{
          opacity: showStackToken ? 0.95 : 0.2,
          scale: showStackToken ? 1 : 0.85,
        }}
        transition={transition}
      />
      <motion.circle
        cx="340"
        cy="88"
        r="6"
        className="fill-emerald-400"
        initial={false}
        animate={{
          opacity: showMicroToken ? 0.95 : 0.2,
          scale: showMicroToken ? 1 : 0.85,
        }}
        transition={transition}
      />
      <motion.circle
        cx="340"
        cy="168"
        r="6"
        className="fill-violet-400"
        initial={false}
        animate={{
          opacity: showMacroToken ? 0.95 : 0.2,
          scale: showMacroToken ? 1 : 0.85,
        }}
        transition={transition}
      />
    </>
  )
}
