"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

import { LearnAnimationFrame } from "@/app/learn/_components/learn-animation-frame"

type Step = {
  caption: string
  memory: { key: string; value: string }[]
  /** 0 = none, 1 = param line, 2 = ans line, 3 = return */
  codeHighlight: 0 | 1 | 2 | 3
  contextVisible: boolean
}

const STEPS: Step[] = [
  {
    caption:
      "A function invocation gets its own execution context. In the local creation phase, parameters and inner var bindings exist before the body runs — both start as undefined here.",
    memory: [
      { key: "num", value: "undefined" },
      { key: "ans", value: "undefined" },
    ],
    codeHighlight: 0,
    contextVisible: true,
  },
  {
    caption:
      "The argument (here, n from the caller with value 2) is bound to the parameter num — undefined is replaced.",
    memory: [
      { key: "num", value: "2" },
      { key: "ans", value: "undefined" },
    ],
    codeHighlight: 1,
    contextVisible: true,
  },
  {
    caption:
      "The next line runs: ans receives num * num (2 × 2 = 4).",
    memory: [
      { key: "num", value: "2" },
      { key: "ans", value: "4" },
    ],
    codeHighlight: 2,
    contextVisible: true,
  },
  {
    caption:
      "return ans sends 4 back to the call site and tears down this invocation’s context; the engine returns control where square(...) was evaluated.",
    memory: [
      { key: "num", value: "2" },
      { key: "ans", value: "4" },
    ],
    codeHighlight: 3,
    contextVisible: true,
  },
  {
    caption:
      "When the function finishes, this stack frame’s execution context is discarded — only values returned to the caller persist in the outer scope.",
    memory: [],
    codeHighlight: 0,
    contextVisible: false,
  },
]

const INNER_LINES = [
  "function square(num) {",
  "  var ans = num * num",
  "  return ans",
  "}",
]

export function FunctionCallEcVisual() {
  const reducedMotion = useReducedMotion() === true
  const transition = useMemo(
    () =>
      reducedMotion
        ? { duration: 0 }
        : { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
    [reducedMotion],
  )

  return (
    <LearnAnimationFrame
      stepCount={STEPS.length}
      title="Local execution context — square(n)"
      diagramClassName="aspect-[16/10] w-full max-h-[280px]"
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
        const lineHighlight = (line: number) => {
          if (step.codeHighlight === 0) return 0
          if (step.codeHighlight === 1 && line === 1) return 1
          if (step.codeHighlight === 2 && line === 2) return 2
          if (step.codeHighlight === 3 && line === 3) return 3
          return 0
        }

        return (
          <svg
            viewBox="0 0 440 220"
            className="h-full w-full text-violet-500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Local variable environment for one invocation of square with num, ans, and return"
          >
            <text
              x="108"
              y="24"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Local memory
            </text>

            <AnimatePresence mode="wait">
              {step.contextVisible ? (
                <motion.g
                  key="ctx"
                  initial={reducedMotion ? false : { opacity: 0.85 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.25 }}
                  transition={transition}
                >
                  <rect
                    x="12"
                    y="32"
                    width="192"
                    height="176"
                    rx="12"
                    className="fill-white/5 stroke-emerald-500/25"
                    strokeWidth="1"
                  />
                  {step.memory.map((row, i) => (
                    <g key={`${row.key}-${i}`}>
                      <rect
                        x="24"
                        y={52 + i * 44}
                        width="168"
                        height="36"
                        rx="6"
                        className="fill-slate-800/80 stroke-white/10"
                        strokeWidth="1"
                      />
                      <text
                        x="34"
                        y={75 + i * 44}
                        className="fill-emerald-400/95 font-mono text-[10px]"
                      >
                        {row.key}
                      </text>
                      <text
                        x="108"
                        y={75 + i * 44}
                        textAnchor="middle"
                        className="fill-slate-500 font-mono text-[10px]"
                      >
                        →
                      </text>
                      <text
                        x="178"
                        y={75 + i * 44}
                        textAnchor="end"
                        className="fill-slate-300 font-mono text-[10px]"
                      >
                        {row.value}
                      </text>
                    </g>
                  ))}
                </motion.g>
              ) : (
                <motion.g
                  key="gone"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={transition}
                >
                  <rect
                    x="12"
                    y="32"
                    width="192"
                    height="176"
                    rx="12"
                    className="fill-slate-950/40 stroke-dashed stroke-white/10"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                  />
                  <text
                    x="108"
                    y="118"
                    textAnchor="middle"
                    className="fill-slate-500 text-[11px]"
                  >
                    Context removed
                  </text>
                </motion.g>
              )}
            </AnimatePresence>

            <text
              x="328"
              y="24"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Function body
            </text>
            <rect
              x="220"
              y="32"
              width="208"
              height="176"
              rx="12"
              className="fill-white/5 stroke-white/12"
              strokeWidth="1"
            />

            {INNER_LINES.map((line, i) => {
              const idx = i + 1
              const hl = lineHighlight(idx)
              const active = hl > 0
              const y = 52 + i * 34
              return (
                <g key={line}>
                  {active ? (
                    <motion.rect
                      x="228"
                      y={y - 2}
                      width="192"
                      height="26"
                      rx="4"
                      initial={false}
                      animate={{ opacity: step.contextVisible ? 1 : 0.35 }}
                      transition={transition}
                      className="fill-violet-500/15 stroke-violet-500/35"
                      strokeWidth="1"
                    />
                  ) : null}
                  <text
                    x="236"
                    y={y + 14}
                    className={
                      active && step.contextVisible
                        ? "fill-slate-100 font-mono text-[10px]"
                        : "fill-slate-500 font-mono text-[10px]"
                    }
                  >
                    {line}
                  </text>
                </g>
              )
            })}

            <path
              d="M 204 120 L 220 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-slate-600 opacity-70"
              strokeDasharray="4 3"
            />
          </svg>
        )
      }}
    </LearnAnimationFrame>
  )
}
