"use client"

import { motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

import { LearnAnimationFrame } from "@/app/learn/_components/learn-animation-frame"

const STEPS = [
  {
    caption:
      "Before your code runs, the engine sets up a container for this run — nothing mystical, just structure.",
  },
  {
    caption:
      "That container is an execution context: one place where bindings and execution for this unit of work live.",
  },
  {
    caption:
      "Everything in JavaScript for this run happens inside this box — memory on one side, running code on the other (next diagram).",
  },
] as const

export function ExecutionContextBoxVisual() {
  const reducedMotion = useReducedMotion() === true
  const transition = useMemo(
    () =>
      reducedMotion
        ? { duration: 0 }
        : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    [reducedMotion],
  )

  return (
    <LearnAnimationFrame
      stepCount={STEPS.length}
      title="The container"
      diagramClassName="aspect-[2/1] w-full max-h-[240px]"
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
        const showLabel = stepIndex >= 1
        const emphasize = stepIndex >= 2
        return (
          <svg
            viewBox="0 0 400 200"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Diagram of a single execution context as one rounded container"
          >
            <rect
              x="24"
              y="24"
              width="352"
              height="152"
              rx="16"
              className={
                emphasize
                  ? "fill-violet-500/10 stroke-violet-500/40"
                  : "fill-white/5 stroke-white/15"
              }
              strokeWidth="2"
            />
            {showLabel ? (
              <motion.text
                x="200"
                y="108"
                textAnchor="middle"
                initial={false}
                animate={{ opacity: 1 }}
                transition={transition}
                className="fill-slate-200 font-heading-learn text-[15px] font-semibold"
              >
                Execution context
              </motion.text>
            ) : (
              <text
                x="200"
                y="108"
                textAnchor="middle"
                className="fill-slate-600 font-heading-learn text-xs font-medium"
              >
                · · ·
              </text>
            )}
          </svg>
        )
      }}
    </LearnAnimationFrame>
  )
}
