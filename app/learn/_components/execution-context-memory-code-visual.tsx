"use client"

import { motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

import { LearnAnimationFrame } from "@/app/learn/_components/learn-animation-frame"

type MemStep = {
  caption: string
  /** Show key-value rows in memory panel */
  memory: { key: string; value: string }[]
  /** 0 = no line active, 1–3 = highlight pseudo line */
  codeHighlight: 0 | 1 | 2 | 3
}

const STEPS: MemStep[] = [
  {
    caption:
      "The memory side is the variable environment: a map from names (keys) to values.",
    memory: [],
    codeHighlight: 0,
  },
  {
    caption:
      "Declarations create bindings — for example a number and a function reference stored as pairs.",
    memory: [
      { key: "a", value: "10" },
      { key: "fn", value: "function" },
    ],
    codeHighlight: 0,
  },
  {
    caption:
      "The code component is the thread of execution: the engine runs one statement at a time, in order.",
    memory: [
      { key: "a", value: "10" },
      { key: "fn", value: "function" },
    ],
    codeHighlight: 1,
  },
  {
    caption:
      "When the current line finishes, execution moves forward — still only one line active at a time.",
    memory: [
      { key: "a", value: "10" },
      { key: "fn", value: "function" },
    ],
    codeHighlight: 2,
  },
]

const CODE_LINES = ["var a = 10", "function fn() {}", "fn()", "// done"]

export function ExecutionContextMemoryCodeVisual() {
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
      title="Memory vs code"
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
        return (
          <svg
            viewBox="0 0 440 220"
            className="h-full w-full text-violet-500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Memory as key-value pairs beside sequential code execution"
          >
            <text
              x="108"
              y="28"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Variable environment
            </text>
            <rect
              x="16"
              y="36"
              width="184"
              height="168"
              rx="12"
              className="fill-white/5 stroke-white/12"
              strokeWidth="1"
            />

            {step.memory.length === 0 ? (
              <text
                x="108"
                y="118"
                textAnchor="middle"
                className="fill-slate-600 text-[11px]"
              >
                (empty)
              </text>
            ) : (
              step.memory.map((row, i) => (
                <g key={`${row.key}-${i}`}>
                  <rect
                    x="28"
                    y={56 + i * 40}
                    width="160"
                    height="32"
                    rx="6"
                    className="fill-slate-800/80 stroke-white/10"
                    strokeWidth="1"
                  />
                  <text
                    x="40"
                    y={77 + i * 40}
                    className="fill-emerald-400/95 font-mono text-[10px]"
                  >
                    {row.key}
                  </text>
                  <text
                    x="108"
                    y={77 + i * 40}
                    textAnchor="middle"
                    className="fill-slate-500 font-mono text-[10px]"
                  >
                    →
                  </text>
                  <text
                    x="170"
                    y={77 + i * 40}
                    textAnchor="end"
                    className="fill-slate-300 font-mono text-[10px]"
                  >
                    {row.value}
                  </text>
                </g>
              ))
            )}

            <text
              x="328"
              y="28"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Thread of execution
            </text>
            <rect
              x="240"
              y="36"
              width="184"
              height="168"
              rx="12"
              className="fill-white/5 stroke-white/12"
              strokeWidth="1"
            />

            {CODE_LINES.map((line, i) => {
              const lineNum = i + 1
              const active = step.codeHighlight === lineNum
              const y = 56 + i * 36
              return (
                <g key={line}>
                  {active ? (
                    <motion.rect
                      x="248"
                      y={y - 2}
                      width="168"
                      height="26"
                      rx="4"
                      initial={false}
                      animate={{ opacity: 1 }}
                      transition={transition}
                      className="fill-violet-500/15 stroke-violet-500/35"
                      strokeWidth="1"
                    />
                  ) : null}
                  <text
                    x="256"
                    y={y + 14}
                    className={
                      active
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
              d="M 200 100 L 240 100"
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
