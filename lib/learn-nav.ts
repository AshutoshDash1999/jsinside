export interface LearnTopic {
  href: string
  label: string
  /** Short blurb for the learn index; omit for “Coming soon”. */
  description?: string
}

export interface TocItem {
  id: string
  label: string
}

export interface DocNavLink {
  href: string
  label: string
}

export interface LessonEntry {
  href: string
  label: string
  description?: string
  toc: TocItem[]
  /** Merged with prev/next derived from lesson order. */
  nav?: {
    prev?: DocNavLink
    next?: DocNavLink
  }
}

/** Only lessons with published MDX content. Add entries here when new pages ship. */
export const LEARN_LESSONS: LessonEntry[] = [
  {
    href: "/learn/execution-context",
    label: "Execution Context",
    description:
      "Variable environment and thread of execution — how the engine runs your code one line at a time.",
    toc: [
      { id: "why-this-matters", label: "Why this matters" },
      { id: "execution-context-defined", label: "What is an execution context?" },
      { id: "two-components", label: "Memory vs code" },
      { id: "sync-single-threaded", label: "Synchronous & single-threaded" },
      { id: "recap", label: "Recap" },
    ],
  },
  {
    href: "/learn/call-stack",
    label: "Call stack & phases",
    description:
      "Creation vs execution phases, invocations, and how the engine pushes and pops execution contexts on the call stack.",
    toc: [
      { id: "when-script-runs", label: "What happens when a script runs" },
      { id: "memory-creation-phase", label: "Phase 1: memory creation" },
      { id: "code-execution-phase", label: "Phase 2: code execution" },
      { id: "invocation", label: "Function invocation" },
      { id: "return", label: "return and teardown" },
      { id: "call-stack", label: "The call stack" },
      { id: "recap", label: "Recap" },
    ],
  },
  {
    href: "/learn/hoisting",
    label: "Hoisting",
    description:
      "Creation-phase bindings, var vs function declarations, undefined vs not defined, and function expressions.",
    toc: [
      { id: "what-hoisting-is", label: "What hoisting is" },
      { id: "creation-phase-bindings", label: "Creation phase & bindings" },
      { id: "undefined-vs-not-defined", label: "undefined vs not defined" },
      { id: "log-vs-call", label: "Logging vs calling" },
      { id: "declarations-vs-expressions", label: "Declarations vs expressions" },
      { id: "recap", label: "Recap" },
    ],
  },
  {
    href: "/learn/event-loop",
    label: "Event Loop",
    description: "Call stack, tasks, microtasks, and how async work fits in.",
    toc: [
      { id: "runtime-at-a-glance", label: "Runtime at a glance" },
      { id: "queues-and-scheduling", label: "Queues & scheduling" },
      { id: "microtasks-vs-macrotasks", label: "Microtasks vs macrotasks" },
      { id: "non-blocking-io", label: "Non-blocking I/O" },
      { id: "takeaways", label: "Takeaways" },
    ],
    nav: {
      next: { href: "/playground", label: "Playground" },
    },
  },
]

function buildTopicsFromLessons(): LearnTopic[] {
  return LEARN_LESSONS.map(({ href, label, description }) => ({
    href,
    label,
    description,
  }))
}

function buildTocByPath(): Record<string, TocItem[]> {
  const out: Record<string, TocItem[]> = {}
  for (const lesson of LEARN_LESSONS) {
    out[lesson.href] = lesson.toc
  }
  return out
}

function buildPrevNextByPath(): Record<
  string,
  { prev?: DocNavLink; next?: DocNavLink }
> {
  const out: Record<string, { prev?: DocNavLink; next?: DocNavLink }> = {}
  for (let i = 0; i < LEARN_LESSONS.length; i++) {
    const lesson = LEARN_LESSONS[i]!
    const derivedPrev: DocNavLink | undefined =
      i > 0
        ? {
            href: LEARN_LESSONS[i - 1]!.href,
            label: LEARN_LESSONS[i - 1]!.label,
          }
        : undefined
    const derivedNext: DocNavLink | undefined =
      i < LEARN_LESSONS.length - 1
        ? {
            href: LEARN_LESSONS[i + 1]!.href,
            label: LEARN_LESSONS[i + 1]!.label,
          }
        : undefined
    out[lesson.href] = {
      prev: lesson.nav?.prev ?? derivedPrev,
      next: lesson.nav?.next ?? derivedNext,
    }
  }
  return out
}

export const LEARN_TOPICS: LearnTopic[] = buildTopicsFromLessons()

export const LEARN_TOC_BY_PATH: Record<string, TocItem[]> = buildTocByPath()

export const LEARN_PREV_NEXT_BY_PATH: Record<
  string,
  { prev?: DocNavLink; next?: DocNavLink }
> = buildPrevNextByPath()
