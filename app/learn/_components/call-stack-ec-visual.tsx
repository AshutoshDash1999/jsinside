"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

import { LearnAnimationFrame } from "@/app/learn/_components/learn-animation-frame"
import { cn } from "@/lib/utils"

/** Bottom → top (index 0 sits at the bottom of the stack). */
type Step = {
  caption: string
  frames: string[]
}

const STEPS: Step[] = [
  {
    caption:
      "When a script starts, a global execution context is created and pushed onto the call stack — it stays until the file finishes running.",
    frames: ["Global"],
  },
  {
    caption:
      "square(n) begins: a new execution context is created for this call and pushed on top. The engine is now executing inside that frame.",
    frames: ["Global", "square(n)"],
  },
  {
    caption:
      "The function returns; its frame is popped. Control resumes in the global context where the call expression was evaluated.",
    frames: ["Global"],
  },
  {
    caption:
      "A second call — square(4) — pushes another function frame. Each invocation gets its own context, even for the same function text.",
    frames: ["Global", "square(4)"],
  },
  {
    caption:
      "That invocation completes and pops; we are back to global code.",
    frames: ["Global"],
  },
  {
    caption:
      "With no more work, the global context is popped too. The stack is empty; the program run is finished.",
    frames: [],
  },
]

export function CallStackEcVisual() {
  const reducedMotion = useReducedMotion() === true
  const transition = useMemo(
    () =>
      reducedMotion
        ? { duration: 0 }
        : { duration: 0.34, ease: [0.22, 1, 0.36, 1] as const },
    [reducedMotion],
  )

  return (
    <LearnAnimationFrame
      stepCount={STEPS.length}
      title="Call stack — push and pop"
      diagramClassName="aspect-[5/4] w-full max-h-[280px]"
      caption={({ stepIndex }) => {
        const step = STEPS[stepIndex]!
        return (
          <motion.p
            key={stepIndex}
            initial={reducedMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            {step.caption}
          </motion.p>
        )
      }}
    >
      {({ stepIndex }) => {
        const step = STEPS[stepIndex]!
        const labels = step.frames
        const frameH = 36
        const gap = 8
        /** Inner bottom of stack panel (container y=44, height=192). */
        const innerBottom = 236

        return (
          <svg
            viewBox="0 0 320 260"
            className="h-full w-full text-violet-500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Call stack with global frame and function invocations pushed and popped"
          >
            <text
              x="160"
              y="28"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Call stack (bottom = first pushed)
            </text>

            <rect
              x="56"
              y="44"
              width="208"
              height="192"
              rx="12"
              className="fill-white/5 stroke-white/12"
              strokeWidth="1"
            />

            {labels.length === 0 ? (
              <text
                x="160"
                y="138"
                textAnchor="middle"
                className="fill-slate-500 text-[11px]"
              >
                empty
              </text>
            ) : (
              <AnimatePresence initial={false}>
                {labels.map((label, i) => {
                  /** Index 0 = bottom of stack (closest to inner bottom). */
                  const y =
                    innerBottom - frameH - i * (frameH + gap)
                  const isTop = i === labels.length - 1
                  return (
                    <motion.g
                      key={`${stepIndex}-${label}-${i}`}
                      initial={
                        reducedMotion ? false : { opacity: 0, y: isTop ? 10 : 0 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={transition}
                    >
                      <rect
                        x="72"
                        y={y}
                        width="176"
                        height={frameH}
                        rx="8"
                        className={cn(
                          isTop
                            ? "fill-slate-800/95 stroke-emerald-500/45"
                            : "fill-slate-800/75 stroke-white/12",
                        )}
                        strokeWidth="1"
                      />
                      <text
                        x="160"
                        y={y + 23}
                        textAnchor="middle"
                        className={
                          isTop
                            ? "fill-emerald-400/95 font-mono text-[11px]"
                            : "fill-slate-400 font-mono text-[10px]"
                        }
                      >
                        {label}
                      </text>
                    </motion.g>
                  )
                })}
              </AnimatePresence>
            )}

            <text
              x="160"
              y="254"
              textAnchor="middle"
              className="fill-slate-600 text-[10px] font-sans"
            >
              Same stack idea as the event loop lesson — order of nested runs
            </text>
          </svg>
        )
      }}
    </LearnAnimationFrame>
  )
}
