import type { MDXComponents } from "mdx/types"

import { cn } from "@/lib/utils"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="font-heading-learn mb-6 scroll-mt-28 text-4xl font-bold tracking-[-0.02em] text-slate-50"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="font-heading-learn mb-4 mt-12 scroll-mt-28 border-b border-white/10 pb-3 text-2xl font-semibold tracking-tight text-violet-400 first:mt-0"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="font-heading-learn mb-3 mt-8 scroll-mt-28 text-lg font-semibold text-slate-100"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, className, ...props }) => (
      <p
        {...props}
        className={cn(
          "mb-4 text-base leading-[1.6] text-slate-400",
          className,
        )}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="mb-4 list-disc space-y-2 pl-6 text-base leading-[1.6] text-slate-400"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="mb-4 list-decimal space-y-2 pl-6 text-base leading-[1.6] text-slate-400"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="marker:text-slate-500" {...props}>
        {children}
      </li>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-slate-200" {...props}>
        {children}
      </strong>
    ),
    a: ({ children, href, ...props }) => (
      <a
        className="font-medium text-violet-400 underline decoration-violet-500/40 underline-offset-4 transition-colors hover:text-violet-300 hover:decoration-violet-400"
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
          className="font-mono-learn rounded-md bg-white/5 px-1.5 py-0.5 text-[0.9em] text-emerald-400/95 ring-1 ring-white/10"
          {...props}
        >
          {children}
        </code>
      )
    },
    pre: ({ children, ...props }) => (
      <pre
        className="font-mono-learn mb-6 overflow-x-auto rounded-xl border border-white/10 bg-[#0d0d14] p-4 text-sm leading-relaxed text-slate-300 shadow-xl shadow-slate-950/50 ring-1 ring-inset ring-white/5"
        {...props}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="mb-6 border-l-4 border-violet-500/50 bg-violet-500/5 py-2 pl-4 pr-4 text-slate-400"
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: (props) => <hr className="my-10 border-white/10" {...props} />,
    ...components,
  }
}
