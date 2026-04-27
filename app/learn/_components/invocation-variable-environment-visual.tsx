"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

import { LearnAnimationFrame } from "@/app/learn/_components/learn-animation-frame"
import { cn } from "@/lib/utils"

const FN_A = "function a { … }"
const FN_B = "function b { … }"

type Step = {
  caption: string
  gec: { key: string; value: string }[]
  stack: string[]
  local: null | { title: string; rows: { key: string; value: string }[] }
  consoleOut: string[]
}

const STEPS: Step[] = [
  {
    caption:
      "End of the global creation phase: var x exists as undefined; function a and function b already reference their full callables — same two-phase model as the Hoisting lesson.",
    gec: [
      { key: "x", value: "undefined" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global"],
    local: null,
    consoleOut: [],
  },
  {
    caption:
      "First execution line: x = 1 writes into the global variable environment only. a and b are unchanged.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global"],
    local: null,
    consoleOut: [],
  },
  {
    caption:
      "a() runs. A new execution context is allocated for this invocation and pushed on the call stack. Its creation phase already reserved a separate var x — still undefined before the body executes.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global", "a()"],
    local: {
      title: "Local · a()",
      rows: [{ key: "x", value: "undefined" }],
    },
    consoleOut: [],
  },
  {
    caption:
      "Inside a, var x = 10 updates local memory. This does not rewrite the global x — same identifier, different environment.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global", "a()"],
    local: {
      title: "Local · a()",
      rows: [{ key: "x", value: "10" }],
    },
    consoleOut: [],
  },
  {
    caption:
      "console.log(x) resolves x in the current context’s memory first → 10. That value is printed.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global", "a()"],
    local: {
      title: "Local · a()",
      rows: [{ key: "x", value: "10" }],
    },
    consoleOut: ["10"],
  },
  {
    caption:
      "a finishes. Its execution context is discarded and the frame pops off the stack. The local x is gone; global x was always still 1.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global"],
    local: null,
    consoleOut: ["10"],
  },
  {
    caption:
      "b() runs: another fresh context, another var x starting as undefined, stack shows b() on top.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global", "b()"],
    local: {
      title: "Local · b()",
      rows: [{ key: "x", value: "undefined" }],
    },
    consoleOut: ["10"],
  },
  {
    caption:
      "In b, x becomes 100; console.log(x) reads the local binding → 100.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global", "b()"],
    local: {
      title: "Local · b()",
      rows: [{ key: "x", value: "100" }],
    },
    consoleOut: ["10", "100"],
  },
  {
    caption:
      "b returns; that context is torn down and popped. Back in global code, only the global x remains — still 1.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global"],
    local: null,
    consoleOut: ["10", "100"],
  },
  {
    caption:
      "Final console.log(x) looks up x in the global environment (the running GEC) → 1. Output order: 10, 100, 1 — three different bindings, one name.",
    gec: [
      { key: "x", value: "1" },
      { key: "a", value: FN_A },
      { key: "b", value: FN_B },
    ],
    stack: ["Global"],
    local: null,
    consoleOut: ["10", "100", "1"],
  },
]

function MemoryTable({
  title,
  rows,
  x,
  y,
  width,
  accentClass,
}: {
  title: string
  rows: { key: string; value: string }[]
  x: number
  y: number
  width: number
  accentClass: string
}) {
  const rowH = 32
  const headerH = 22
  const pad = 10
  const h = headerH + rows.length * rowH + pad * 2
  return (
    <g>
      <text
        x={x + width / 2}
        y={y + 14}
        textAnchor="middle"
        className="fill-slate-500 text-[10px] font-sans font-medium"
      >
        {title}
      </text>
      <rect
        x={x}
        y={y + 18}
        width={width}
        height={h}
        rx="10"
        className={cn("fill-white/5 stroke-white/12", accentClass)}
        strokeWidth="1"
      />
      {rows.map((row, i) => (
        <g key={`${row.key}-${i}`}>
          <rect
            x={x + 8}
            y={y + 28 + i * rowH}
            width={width - 16}
            height={rowH - 4}
            rx="6"
            className="fill-slate-800/80 stroke-white/8"
            strokeWidth="1"
          />
          <text
            x={x + 16}
            y={y + 48 + i * rowH}
            className="fill-emerald-400/95 font-mono text-[9px]"
          >
            {row.key}
          </text>
          <text
            x={x + width / 2}
            y={y + 48 + i * rowH}
            textAnchor="middle"
            className="fill-slate-500 font-mono text-[9px]"
          >
            →
          </text>
          <text
            x={x + width - 12}
            y={y + 48 + i * rowH}
            textAnchor="end"
            className="fill-slate-200 font-mono text-[9px] leading-none"
          >
            {row.value}
          </text>
        </g>
      ))}
    </g>
  )
}

export function InvocationVariableEnvironmentVisual() {
  const reducedMotion = useReducedMotion() === true
  const transition = useMemo(
    () =>
      reducedMotion
        ? { duration: 0 }
        : { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
    [reducedMotion],
  )

  return (
    <LearnAnimationFrame
      stepCount={STEPS.length}
      title="Global vs local — same name, different environments"
      diagramClassName="aspect-[20/11] w-full max-h-[320px]"
      caption={({ stepIndex }) => {
        const step = STEPS[stepIndex]!
        return (
          <motion.p
            key={stepIndex}
            initial={reducedMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-sm leading-relaxed text-slate-300"
          >
            {step.caption}
          </motion.p>
        )
      }}
    >
      {({ stepIndex }) => {
        const step = STEPS[stepIndex]!
        const stack = step.stack
        const frameH = 32
        const gap = 6
        const stackInnerBottom = 198
        const stackX = 200
        const stackW = 120

        return (
          <svg
            viewBox="0 0 520 220"
            className="h-full w-full text-violet-500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Global memory, call stack, local memory, and console output for nested function calls with shadowed variable x"
          >
            <MemoryTable
              title="Global memory (GEC)"
              rows={step.gec}
              x={8}
              y={4}
              width={168}
              accentClass="stroke-emerald-500/20"
            />

            <text
              x={stackX + stackW / 2}
              y={18}
              textAnchor="middle"
              className="fill-slate-500 text-[10px] font-sans font-medium"
            >
              Call stack
            </text>
            <rect
              x={stackX}
              y={26}
              width={stackW}
              height={188}
              rx="10"
              className="fill-white/5 stroke-white/12"
              strokeWidth="1"
            />

            {stack.length === 0 ? (
              <text
                x={stackX + stackW / 2}
                y={118}
                textAnchor="middle"
                className="fill-slate-500 text-[10px]"
              >
                empty
              </text>
            ) : (
              <AnimatePresence initial={false}>
                {stack.map((label, i) => {
                  const y =
                    stackInnerBottom - frameH - i * (frameH + gap)
                  const isTop = i === stack.length - 1
                  return (
                    <motion.g
                      key={`${stepIndex}-${label}-${i}`}
                      initial={
                        reducedMotion ? false : { opacity: 0, y: isTop ? 8 : 0 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={reducedMotion ? undefined : { opacity: 0, y: -4 }}
                      transition={transition}
                    >
                      <rect
                        x={stackX + 8}
                        y={y}
                        width={stackW - 16}
                        height={frameH}
                        rx="6"
                        className={cn(
                          isTop
                            ? "fill-slate-800/95 stroke-emerald-500/45"
                            : "fill-slate-800/75 stroke-white/12",
                        )}
                        strokeWidth="1"
                      />
                      <text
                        x={stackX + stackW / 2}
                        y={y + 21}
                        textAnchor="middle"
                        className={
                          isTop
                            ? "fill-emerald-400/95 font-mono text-[10px]"
                            : "fill-slate-400 font-mono text-[9px]"
                        }
                      >
                        {label}
                      </text>
                    </motion.g>
                  )
                })}
              </AnimatePresence>
            )}

            <AnimatePresence mode="wait">
              {step.local ? (
                <motion.g
                  key={step.local.title}
                  initial={reducedMotion ? false : { opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 4 }}
                  transition={transition}
                >
                  <MemoryTable
                    title={step.local.title}
                    rows={step.local.rows}
                    x={340}
                    y={4}
                    width={168}
                    accentClass="stroke-violet-500/30"
                  />
                </motion.g>
              ) : (
                <motion.g
                  key="no-local"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <rect
                    x={340}
                    y={32}
                    width={168}
                    height={100}
                    rx="10"
                    className="fill-slate-950/30 stroke-dashed stroke-white/10"
                    strokeWidth="1"
                    strokeDasharray="5 4"
                  />
                  <text
                    x={424}
                    y={88}
                    textAnchor="middle"
                    className="fill-slate-600 text-[10px]"
                  >
                    No local EC
                  </text>
                </motion.g>
              )}
            </AnimatePresence>

            <text
              x={424}
              y={178}
              textAnchor="middle"
              className="fill-slate-500 text-[10px] font-sans font-medium"
            >
              Console (order)
            </text>
            <rect
              x={340}
              y={186}
              width={168}
              height={28}
              rx="6"
              className="fill-slate-900/80 stroke-white/10"
              strokeWidth="1"
            />
            <text
              x={348}
              y={204}
              className="fill-amber-400/90 font-mono text-[9px]"
            >
              {step.consoleOut.length > 0
                ? step.consoleOut.join("   ·   ")
                : "—"}
            </text>
          </svg>
        )
      }}
    </LearnAnimationFrame>
  )
}

const SHADOW_CELLS = [
  { label: "Global", sub: "GEC", value: "1", line: "console.log(x)" },
  { label: "a()", sub: "local", value: "10", line: "console.log(x)" },
  { label: "b()", sub: "local", value: "100", line: "console.log(x)" },
] as const

/**
 * Static overview: the same identifier `x` in three different variable environments.
 */
export function SameNameThreeSlotsVisual() {
  const reducedMotion = useReducedMotion() === true
  const t = useMemo(
    () =>
      reducedMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    [reducedMotion],
  )

  return (
    <div
      className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-slate-950/40 ring-1 ring-inset ring-white/5 md:p-5"
      role="img"
      aria-label="Three environments each holding a separate binding for the name x with values 1, 10, and 100"
    >
      <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-slate-500">
        One name, three independent bindings
      </p>
      <svg
        viewBox="0 0 420 120"
        className="mx-auto h-auto w-full max-w-lg text-violet-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {SHADOW_CELLS.map((cell, i) => {
          const x = 16 + i * 136
          return (
            <motion.g
              key={cell.label}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...t, delay: reducedMotion ? 0 : i * 0.08 }}
            >
              <rect
                x={x}
                y="12"
                width="120"
                height="96"
                rx="10"
                className="fill-slate-900/50 stroke-white/10"
                strokeWidth="1"
              />
              <text
                x={x + 60}
                y="32"
                textAnchor="middle"
                className="fill-slate-400 text-[10px] font-sans font-medium"
              >
                {cell.label}
              </text>
              <text
                x={x + 60}
                y="48"
                textAnchor="middle"
                className="fill-slate-600 text-[9px] font-sans"
              >
                {cell.sub}
              </text>
              <text
                x={x + 60}
                y="72"
                textAnchor="middle"
                className="fill-emerald-400/95 font-mono text-[11px] font-medium"
              >
                x → {cell.value}
              </text>
              <text
                x={x + 60}
                y="96"
                textAnchor="middle"
                className="fill-slate-500 font-mono text-[8px]"
              >
                {cell.line}
              </text>
            </motion.g>
          )
        })}
        <motion.path
          d="M 76 108 L 200 108 L 324 108"
          fill="none"
          className="stroke-violet-500/25"
          strokeWidth="1"
          strokeDasharray="4 3"
          initial={reducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2, ease: "easeOut" }}
        />
      </svg>
    </div>
  )
}
