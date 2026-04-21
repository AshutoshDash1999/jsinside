"use client"

import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

type AnimatedConnectorPathProps = {
  /** SVG path `d` attribute (e.g. `M ... L ...` or a curve). */
  d: string
  /** Bumps the draw + motion reset when the lesson step (or any key) changes. */
  stepKey: string | number
  /** Faint underlay: full length, reference stroke. */
  className?: string
  /** Draw animation stroke (overlays the underlay). */
  drawClassName?: string
  /** Optional infinite “flowing dash” on top; off when `prefers-reduced-motion`. */
  showFlowingDash?: boolean
  flowClassName?: string
  /** Draw duration in seconds (only when not reduced motion). */
  drawDuration?: number
}

/**
 * Reusable **SVG path** animation for learn diagrams: draws the path when `stepKey`
 * changes, then can loop a light dash motion along the same geometry.
 */
export function AnimatedConnectorPath({
  d,
  stepKey,
  className = "text-slate-600/40",
  drawClassName = "text-violet-400/80",
  showFlowingDash = true,
  flowClassName = "text-fuchsia-400/35",
  drawDuration = 0.55,
}: AnimatedConnectorPathProps) {
  const reduced = useReducedMotion() === true

  return (
    <g aria-hidden>
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={className}
        strokeDasharray="4 3"
      />

      <motion.path
        key={`draw-${stepKey}`}
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={drawClassName}
        initial={reduced ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0.9 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={
          reduced
            ? { duration: 0 }
            : {
                pathLength: {
                  type: "tween",
                  duration: drawDuration,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: { duration: 0.2 },
              }
        }
      />

      {showFlowingDash && !reduced ? (
        <motion.path
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(flowClassName, "pointer-events-none")}
          strokeDasharray="3 14"
          animate={{ strokeDashoffset: [0, -17] }}
          transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      ) : null}
    </g>
  )
}

/** Curved bridge between two points (cubic) — pairs well with boxy memory/code panels. */
export function buildCurvedConnectorPath(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
): string {
  const cx = (x0 + x1) / 2
  return `M ${x0} ${y0} C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`
}
