"use client"

import { motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

import {
  AnimatedConnectorPath,
  buildCurvedConnectorPath,
} from "@/app/learn/_components/animated-connector-path"
import { LearnAnimationFrame } from "@/app/learn/_components/learn-animation-frame"

export type MemoryRow = { key: string; value: string }

type Step = {
  caption: string
  memory: MemoryRow[]
  codeLines: string[]
  codeHighlight: number
  codeIdle?: boolean
}

const FN_GET_NAME = "function getName { … }"

const STEPS_MAIN: Step[] = [
  {
    caption:
      "End of the memory-creation phase: the engine has registered `var x` and the `function` declaration. `x` is `undefined`; `getName` already holds the full callable — before any line of this script has run.",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "getName()",
      "console.log(x)",
      "var x = 7",
      "function getName() { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 0,
  },
  {
    caption:
      "Line 1 runs: the call is valid because `getName` was fully bound during creation. (The body runs in its own local context, not shown here.)",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "getName()",
      "console.log(x)",
      "var x = 7",
      "function getName() { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 1,
  },
  {
    caption:
      "Line 2: `console.log(x)` runs while `x` is still the placeholder `undefined` — the assignment on line 3 has not run yet. Output: Namaste JavaScript, then undefined.",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "getName()",
      "console.log(x)",
      "var x = 7",
      "function getName() { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 2,
  },
  {
    caption:
      "Line 3: `var x = 7` — the right-hand side is evaluated, then the binding updates. Global memory now stores `7` in `x`.",
    memory: [
      { key: "x", value: "7" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "getName()",
      "console.log(x)",
      "var x = 7",
      "function getName() { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 3,
  },
  {
    caption:
      "Line 4: the `function` declaration was already applied in the creation phase, so this line is effectively a no-op for binding — the engine skips extra work. Same memory as the previous step.",
    memory: [
      { key: "x", value: "7" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "getName()",
      "console.log(x)",
      "var x = 7",
      "function getName() { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 4,
    codeIdle: true,
  },
]

const STEPS_NOT_DEFINED: Step[] = [
  {
    caption:
      "If `var x` never appears in the program, the engine does not create a global binding for `x`. After creation, only `getName` exists here.",
    memory: [{ key: "getName", value: FN_GET_NAME }],
    codeLines: [
      "getName()",
      "console.log(x)",
      "function getName() { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 0,
  },
  {
    caption:
      "When `console.log(x)` runs, there is no `x` in this environment. That is a ReferenceError: “x is not defined” — not the same as `undefined`.",
    memory: [{ key: "getName", value: FN_GET_NAME }],
    codeLines: [
      "getName()",
      "console.log(x)",
      "function getName() { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 2,
  },
]

const STEPS_LOG_VS_CALL: Step[] = [
  {
    caption:
      "Right after the creation phase, both names exist in global memory: `getName` is the function, `x` is `undefined`. The snippet below only logs — it does not invoke `getName` yet.",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "console.log(getName)",
      "console.log(x)",
      "var x = 7",
      "function getName() { return 'ok' }",
    ],
    codeHighlight: 0,
  },
  {
    caption:
      "`console.log(getName)` receives the function value itself, so the console can print the function’s text (or a engine-specific representation) — the binding already pointed at a callable.",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "console.log(getName)",
      "console.log(x)",
      "var x = 7",
      "function getName() { return 'ok' }",
    ],
    codeHighlight: 1,
  },
  {
    caption:
      "`console.log(x)` on the next line still reads the `var` placeholder: **`undefined`** — same phase of execution, but a different *kind* of value than a function reference.",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "console.log(getName)",
      "console.log(x)",
      "var x = 7",
      "function getName() { return 'ok' }",
    ],
    codeHighlight: 2,
  },
  {
    caption:
      "Contrast: calling `getName()` would *run* code and need a real function. Here, **logging** the name is cheap — it only reads what was stored during creation: function vs `undefined`.",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: FN_GET_NAME },
    ],
    codeLines: [
      "console.log(getName)",
      "console.log(x)",
      "var x = 7",
      "function getName() { return 'ok' }",
    ],
    codeHighlight: 0,
  },
]

const STEPS_EXPRESSION: Step[] = [
  {
    caption:
      "With an arrow (or a function expression assigned to `var` / `const`), the name is treated like an ordinary variable in creation: `getName` starts as `undefined` until the assignment line runs.",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: "undefined" },
    ],
    codeLines: [
      "getName()",
      "var x = 7",
      "var getName = () => { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 0,
  },
  {
    caption:
      "Calling `getName()` on line 1 fails: the binding is still `undefined`, so the runtime does not have a function to invoke — “not a function” / TypeError, depending on the engine message.",
    memory: [
      { key: "x", value: "undefined" },
      { key: "getName", value: "undefined" },
    ],
    codeLines: [
      "getName()",
      "var x = 7",
      "var getName = () => { console.log('Namaste JavaScript') }",
    ],
    codeHighlight: 1,
  },
]

const MEMORY_PANEL_W = 208
const CODE_PANEL_X = 236
const CODE_LINE_H = 36
const PANEL_TOP = 32

function viewBoxForStep(steps: Step[], stepIndex: number) {
  const step = steps[stepIndex]!
  const lineCount = step.codeLines.length
  const codePanelH = 20 + lineCount * CODE_LINE_H
  const memRows = step.memory.length
  const memPanelH = 20 + memRows * 42
  const h = 24 + 12 + Math.max(codePanelH, memPanelH) + 20
  return `0 0 480 ${h}`
}

type MemorySvgProps = {
  steps: Step[]
  stepIndex: number
  codeColumnTitle: string
  transition: { duration: number; ease?: readonly [number, number, number, number] }
  ariaLabel: string
}

function HoistingMemorySvg({
  steps,
  stepIndex,
  codeColumnTitle,
  transition,
  ariaLabel,
}: MemorySvgProps) {
  const step = steps[stepIndex]!
  const vb = viewBoxForStep(steps, stepIndex)
  const lineCount = step.codeLines.length
  const memRows = step.memory.length
  const memPanelH = 20 + memRows * 42
  const codePanelH = 20 + lineCount * CODE_LINE_H
  const yMemMid = PANEL_TOP + memPanelH / 2
  const yCodeMid = PANEL_TOP + codePanelH / 2
  const bridgeD = buildCurvedConnectorPath(220, yMemMid, CODE_PANEL_X, yCodeMid)

  return (
    <svg
      viewBox={vb}
      className="h-full w-full text-violet-500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
    >
      <text
        x="116"
        y="20"
        textAnchor="middle"
        className="fill-slate-500 text-[11px] font-sans font-medium"
      >
        Global memory
      </text>
      <rect
        x="12"
        y={PANEL_TOP}
        width={MEMORY_PANEL_W}
        height={memPanelH}
        rx="12"
        className="fill-white/5 stroke-white/12"
        strokeWidth="1"
      />

      {step.memory.map((row, i) => (
        <g key={`${row.key}-${i}-${stepIndex}`}>
          <rect
            x="24"
            y={PANEL_TOP + 16 + i * 42}
            width="184"
            height="34"
            rx="6"
            className="fill-slate-800/80 stroke-white/10"
            strokeWidth="1"
          />
          <text
            x="34"
            y={PANEL_TOP + 35 + i * 42}
            className="fill-emerald-400/95 font-mono text-[10px]"
          >
            {row.key}
          </text>
          <text
            x="116"
            y={PANEL_TOP + 35 + i * 42}
            textAnchor="middle"
            className="fill-slate-500 font-mono text-[10px]"
          >
            →
          </text>
          <text
            x="198"
            y={PANEL_TOP + 35 + i * 42}
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
        y="20"
        textAnchor="middle"
        className="fill-slate-500 text-[11px] font-sans font-medium"
      >
        {codeColumnTitle}
      </text>
      <rect
        x={CODE_PANEL_X}
        y={PANEL_TOP}
        width="232"
        height={codePanelH}
        rx="12"
        className="fill-white/5 stroke-white/12"
        strokeWidth="1"
      />

      {step.codeLines.map((line, i) => {
        const lineNum = i + 1
        const active = step.codeHighlight === lineNum
        const y = PANEL_TOP + 20 + i * CODE_LINE_H
        return (
          <g key={`${line}-${i}-${stepIndex}`}>
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
                    ? "fill-slate-400 font-mono text-[9px]"
                    : "fill-slate-100 font-mono text-[9px]"
                  : "fill-slate-500 font-mono text-[9px]"
              }
            >
              {line.length > 44 ? `${line.slice(0, 42)}…` : line}
            </text>
          </g>
        )
      })}

      <AnimatedConnectorPath
        d={bridgeD}
        stepKey={stepIndex}
        showFlowingDash
      />
    </svg>
  )
}

type HoistingFrameProps = {
  steps: Step[]
  title: string
  codeColumnTitle: string
  ariaLabel: string
  diagramClassName?: string
}

function HoistingSteppedFrame({
  steps,
  title,
  codeColumnTitle,
  ariaLabel,
  diagramClassName = "aspect-[16/11] w-full min-h-[220px] max-h-[360px]",
}: HoistingFrameProps) {
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
      stepCount={steps.length}
      title={title}
      diagramClassName={diagramClassName}
      caption={({ stepIndex }) => {
        const step = steps[stepIndex]!
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
      {({ stepIndex }) => (
        <HoistingMemorySvg
          steps={steps}
          stepIndex={stepIndex}
          codeColumnTitle={codeColumnTitle}
          transition={transition}
          ariaLabel={ariaLabel}
        />
      )}
    </LearnAnimationFrame>
  )
}

export function HoistingPhasesVisual() {
  return (
    <HoistingSteppedFrame
      steps={STEPS_MAIN}
      title="Phase 1 → 2: var + function declaration"
      codeColumnTitle="Code (reordered for demo)"
      ariaLabel="Global memory and reordered code lines: creation through execution for var and function declaration"
    />
  )
}

export function HoistingNotDefinedVisual() {
  return (
    <HoistingSteppedFrame
      steps={STEPS_NOT_DEFINED}
      title="No binding for x"
      codeColumnTitle="Code (reordered for demo)"
      diagramClassName="aspect-[16/10] w-full min-h-[200px] max-h-[320px]"
      ariaLabel="Global memory when var x is missing: only getName, then ReferenceError for x"
    />
  )
}

export function HoistingLogVsCallVisual() {
  return (
    <HoistingSteppedFrame
      steps={STEPS_LOG_VS_CALL}
      title="Logging: function value vs undefined"
      codeColumnTitle="Code"
      diagramClassName="aspect-[16/10] w-full min-h-[220px] max-h-[340px]"
      ariaLabel="Comparing console.log of function name vs var before assignment"
    />
  )
}

export function HoistingExpressionVisual() {
  return (
    <HoistingSteppedFrame
      steps={STEPS_EXPRESSION}
      title="Function expression: like a var at creation"
      codeColumnTitle="Code (reordered for demo)"
      diagramClassName="aspect-[16/9] w-full min-h-[200px] max-h-[300px]"
      ariaLabel="Arrow function assigned to var: getName is undefined at creation, call fails"
    />
  )
}
