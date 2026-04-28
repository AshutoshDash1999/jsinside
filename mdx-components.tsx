import type { MDXComponents } from "mdx/types"

import { cn } from "@/lib/utils"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="mb-8 scroll-mt-28 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[oklch(0.22_0.04_50)]"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mb-6 mt-14 scroll-mt-28 border-l-4 border-[oklch(0.58_0.20_27)] pl-4 font-sans text-2xl font-bold text-[oklch(0.22_0.04_50)] first:mt-0"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mb-4 mt-10 scroll-mt-28 font-sans text-lg font-semibold text-[oklch(0.30_0.04_50)]"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, className, ...props }) => (
      <p
        {...props}
        className={cn(
          "mb-5 font-sans text-base leading-[1.75] text-[oklch(0.40_0.04_50)]",
          className,
        )}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="mb-6 space-y-2.5 pl-6 font-sans text-base leading-[1.75] text-[oklch(0.40_0.04_50)]"
        style={{ listStyleType: "disc" }}
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="mb-6 space-y-2.5 pl-6 font-sans text-base leading-[1.75] text-[oklch(0.40_0.04_50)]"
        style={{ listStyleType: "decimal" }}
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="marker:text-[oklch(0.58_0.20_27)]" {...props}>
        {children}
      </li>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-[oklch(0.25_0.04_50)]" {...props}>
        {children}
      </strong>
    ),
    a: ({ children, href, ...props }) => (
      <a
        className="font-medium text-[oklch(0.52_0.18_230)] underline decoration-[oklch(0.72_0.15_230)] underline-offset-4 transition-colors hover:text-[oklch(0.40_0.18_230)]"
        href={href}
        {...props}
      >
        {children}
      </a>
    ),
    code: ({ children, className, ...props }) => {
      const isBlock = typeof className === "string" && className.includes("language-")
      if (isBlock) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
      return (
        <code
          className="font-mono-learn rounded-lg border border-[oklch(0.75_0.12_145)] bg-[oklch(0.94_0.08_145)] px-1.5 py-0.5 text-[0.88em] text-[oklch(0.35_0.15_145)]"
          {...props}
        >
          {children}
        </code>
      )
    },
    pre: ({ children, ...props }) => (
      <pre
        className="font-mono-learn mb-8 overflow-x-auto rounded-2xl border-2 border-[oklch(0.78_0.16_90)] bg-[oklch(0.96_0.06_90)] p-5 text-sm leading-relaxed text-[oklch(0.30_0.04_50)] shadow-[4px_4px_0px_oklch(0.78_0.16_90)]"
        {...props}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="relative mb-8 rounded-2xl border-2 border-[oklch(0.78_0.16_90)] bg-[oklch(0.95_0.10_90)] px-5 py-4 font-sans text-[oklch(0.35_0.06_60)] shadow-[3px_3px_0px_oklch(0.78_0.16_90)]"
        {...props}
      >
        <span className="absolute -top-3 left-4 font-display text-2xl text-[oklch(0.70_0.16_90)]">✦</span>
        {children}
      </blockquote>
    ),
    hr: (props) => <hr className="my-10 border-2 border-[oklch(0.88_0.02_85)]" {...props} />,
    ...components,
  }
}
