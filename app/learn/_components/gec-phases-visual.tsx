"use client"

import { motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

import { LearnAnimationFrame } from "@/app/learn/_components/learn-animation-frame"

type MemoryRow = { key: string; value: string }

type Step = {
  caption: string
  memory: MemoryRow[]
  /** 0 = no highlight, 1–4 = line index in CODE_LINES */
  codeHighlight: 0 | 1 | 2 | 3 | 4
  /** If true, highlighted line is “idle” (declaration already hoisted). */
  codeIdle?: boolean
}

const FN_LABEL = "function square { … }"

const STEPS: Step[] = [
  {
    caption:
      "Memory creation phase: the engine registers every var and function declaration. Variables start as undefined; the function’s full callable is stored under its name.",
    memory: [
      { key: "n", value: "undefined" },
      { key: "square", value: FN_LABEL },
      { key: "square2", value: "undefined" },
      { key: "square4", value: "undefined" },
    ],
    codeHighlight: 0,
  },
  {
    caption:
      "Code execution phase begins. Line 1 runs: the assignment replaces n’s placeholder with the number 2.",
    memory: [
      { key: "n", value: "2" },
      { key: "square", value: FN_LABEL },
      { key: "square2", value: "undefined" },
      { key: "square4", value: "undefined" },
    ],
    codeHighlight: 1,
  },
  {
    caption:
      "The function declaration already produced the binding in phase 1, so there is nothing extra to execute on this line — control simply moves on.",
    memory: [
      { key: "n", value: "2" },
      { key: "square", value: FN_LABEL },
      { key: "square2", value: "undefined" },
      { key: "square4", value: "undefined" },
    ],
    codeHighlight: 2,
    codeIdle: true,
  },
  {
    caption:
      "square(n) is invoked: the right-hand side runs inside a fresh execution context (see the next diagram). square2 stays undefined until that call returns.",
    memory: [
      { key: "n", value: "2" },
      { key: "square", value: FN_LABEL },
      { key: "square2", value: "undefined" },
      { key: "square4", value: "undefined" },
    ],
    codeHighlight: 3,
  },
  {
    caption:
      "Back in global scope: the return value 4 is written into square2.",
    memory: [
      { key: "n", value: "2" },
      { key: "square", value: FN_LABEL },
      { key: "square2", value: "4" },
      { key: "square4", value: "undefined" },
    ],
    codeHighlight: 3,
  },
  {
    caption:
      "Another call: square(4) — same function, new invocation, new local context.",
    memory: [
      { key: "n", value: "2" },
      { key: "square", value: FN_LABEL },
      { key: "square2", value: "4" },
      { key: "square4", value: "undefined" },
    ],
    codeHighlight: 4,
  },
  {
    caption:
      "After the second return, square4 is 16. The global script’s assignments are complete.",
    memory: [
      { key: "n", value: "2" },
      { key: "square", value: FN_LABEL },
      { key: "square2", value: "4" },
      { key: "square4", value: "16" },
    ],
    codeHighlight: 4,
  },
]

const CODE_LINES = [
  "var n = 2",
  "function square(num) { … }",
  "var square2 = square(n)",
  "var square4 = square(4)",
]

export function GecPhasesVisual() {
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
      title="Global execution context — phases"
      diagramClassName="aspect-[16/10] w-full max-h-[300px]"
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
            viewBox="0 0 480 248"
            className="h-full w-full text-violet-500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Global memory creation and code execution steps for var and function declarations"
          >
            <text
              x="116"
              y="24"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Global memory
            </text>
            <rect
              x="12"
              y="32"
              width="208"
              height="204"
              rx="12"
              className="fill-white/5 stroke-white/12"
              strokeWidth="1"
            />

            {step.memory.map((row, i) => (
              <g key={`${row.key}-${i}-${stepIndex}`}>
                <rect
                  x="24"
                  y={48 + i * 42}
                  width="184"
                  height="34"
                  rx="6"
                  className="fill-slate-800/80 stroke-white/10"
                  strokeWidth="1"
                />
                <text
                  x="34"
                  y={69 + i * 42}
                  className="fill-emerald-400/95 font-mono text-[10px]"
                >
                  {row.key}
                </text>
                <text
                  x="116"
                  y={69 + i * 42}
                  textAnchor="middle"
                  className="fill-slate-500 font-mono text-[10px]"
                >
                  →
                </text>
                <text
                  x="198"
                  y={69 + i * 42}
                  textAnchor="end"
                  className="fill-slate-300 font-mono text-[9px]"
                >
                  {row.value.length > 28
                    ? `${row.value.slice(0, 26)}…`
                    : row.value}
                </text>
              </g>
            ))}

            <text
              x="352"
              y="24"
              textAnchor="middle"
              className="fill-slate-500 text-[11px] font-sans font-medium"
            >
              Code (global)
            </text>
            <rect
              x="236"
              y="32"
              width="232"
              height="204"
              rx="12"
              className="fill-white/5 stroke-white/12"
              strokeWidth="1"
            />

            {CODE_LINES.map((line, i) => {
              const lineNum = (i + 1) as 1 | 2 | 3 | 4
              const active = step.codeHighlight === lineNum
              const y = 52 + i * 40
              return (
                <g key={line}>
                  {active ? (
                    <motion.rect
                      x="244"
                      y={y - 2}
                      width="216"
                      height="30"
                      rx="4"
                      initial={false}
                      animate={{ opacity: 1 }}
                      transition={transition}
                      className={
                        step.codeIdle && active
                          ? "fill-slate-500/10 stroke-white/15"
                          : "fill-violet-500/15 stroke-violet-500/35"
                      }
                      strokeWidth="1"
                    />
                  ) : null}
                  <text
                    x="252"
                    y={y + 16}
                    className={
                      active
                        ? step.codeIdle
                          ? "fill-slate-400 font-mono text-[10px]"
                          : "fill-slate-100 font-mono text-[10px]"
                        : "fill-slate-500 font-mono text-[10px]"
                    }
                  >
                    {line}
                  </text>
                </g>
              )
            })}

            <path
              d="M 220 120 L 236 120"
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
