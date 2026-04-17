import Link from "next/link"

export default function PlaygroundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-slate-950 px-4">
      <p className="mb-4 text-lg font-semibold text-slate-50">Playground</p>
      <p className="mb-8 max-w-md text-center text-sm leading-relaxed text-slate-400">
        The interactive playground is coming soon. Head back to the home page
        to explore the feature overview.
      </p>
      <Link
        href="/"
        className="text-sm font-medium text-violet-400 ring-offset-slate-950 transition-colors hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
      >
        ← Back home
      </Link>
    </div>
  )
}
