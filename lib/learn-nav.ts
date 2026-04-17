export interface LearnTopic {
  href: string
  label: string
}

export interface TocItem {
  id: string
  label: string
}

export interface DocNavLink {
  href: string
  label: string
}

export const LEARN_TOPICS: LearnTopic[] = [
  { href: "/learn/foundations", label: "Foundations" },
  { href: "/learn/execution-context", label: "Execution Context" },
  { href: "/learn/hoisting", label: "Hoisting" },
  { href: "/learn/closures", label: "Closures" },
  { href: "/learn/event-loop", label: "Event Loop" },
]

export const LEARN_TOC_BY_PATH: Record<string, TocItem[]> = {
  "/learn/event-loop": [
    { id: "runtime-at-a-glance", label: "Runtime at a glance" },
    { id: "queues-and-scheduling", label: "Queues & scheduling" },
    { id: "microtasks-vs-macrotasks", label: "Microtasks vs macrotasks" },
    { id: "non-blocking-io", label: "Non-blocking I/O" },
    { id: "takeaways", label: "Takeaways" },
  ],
}

export const LEARN_PREV_NEXT_BY_PATH: Record<
  string,
  { prev?: DocNavLink; next?: DocNavLink }
> = {
  "/learn/event-loop": {
    prev: { href: "/learn/closures", label: "Closures" },
    next: { href: "/playground", label: "Playground" },
  },
}
