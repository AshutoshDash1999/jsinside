"use client"

import {
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
  IconRotateClockwise,
} from "@tabler/icons-react"
import { useReducedMotion } from "motion/react"
import { useCallback, useEffect, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

const DEFAULT_AUTO_ADVANCE_MS = 2200

export type LearnAnimationFrameContext = {
  stepIndex: number
  stepCount: number
}

export interface LearnAnimationFrameProps {
  /** Number of steps (>= 1). */
  stepCount: number
  /** Milliseconds between auto-advances while playing. */
  autoAdvanceMs?: number
  /** Eyebrow label above the diagram. */
  title?: string
  /** Diagram area; receives current step index. */
  children: (ctx: LearnAnimationFrameContext) => ReactNode
  /** Text below the diagram; receives current step index. */
  caption: (ctx: LearnAnimationFrameContext) => ReactNode
  /** Wrapper for the diagram slot (default: aspect video + max height). */
  diagramClassName?: string
}

/**
 * Shared stepped diagram shell: Play/Pause (autoplay), Next, Reset, step badge.
 * Each lesson supplies its own SVG (or other) via `children` and per-step caption.
 */
export function LearnAnimationFrame({
  stepCount,
  autoAdvanceMs = DEFAULT_AUTO_ADVANCE_MS,
  title,
  children,
  caption,
  diagramClassName = "aspect-[16/9] w-full max-h-[320px]",
}: LearnAnimationFrameProps) {
  const reducedMotion = useReducedMotion() === true
  const [stepIndex, setStepIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  const lastIndex = Math.max(0, stepCount - 1)

  const advance = useCallback(() => {
    setStepIndex((i) => (i >= lastIndex ? 0 : i + 1))
  }, [lastIndex])

  useEffect(() => {
    if (!playing || reducedMotion) return
    const id = window.setInterval(advance, autoAdvanceMs)
    return () => window.clearInterval(id)
  }, [playing, reducedMotion, advance, autoAdvanceMs])

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

  const ctx: LearnAnimationFrameContext = { stepIndex, stepCount }

  return (
    <div className="relative mb-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl shadow-slate-950/50 ring-1 ring-inset ring-white/5 backdrop-blur-xl md:mb-12">
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
          {title ? (
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {title}
            </p>
          ) : (
            <span className="text-xs text-transparent"> </span>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs tabular-nums text-slate-500">
              Step {stepIndex + 1} / {stepCount}
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

        <div className={diagramClassName}>{children(ctx)}</div>

        <div className="mt-4 text-sm leading-relaxed text-slate-400">
          {caption(ctx)}
        </div>
      </div>
    </div>
  )
}
