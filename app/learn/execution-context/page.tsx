import Link from "next/link"

export const metadata = {
  title: "Execution Context",
  description: "How the engine creates and manages execution contexts.",
}

export default function ExecutionContextPage() {
  return (
    <>
      <h1 className="font-heading-learn mb-4 text-4xl font-bold tracking-[-0.02em] text-slate-50">
        Execution Context
      </h1>
      <p className="text-base leading-[1.6] text-slate-400">
        This lesson is not published yet. See{" "}
        <Link
          className="font-medium text-violet-400 underline decoration-violet-500/40 underline-offset-4 hover:text-violet-300"
          href="/learn/event-loop"
        >
          Event Loop
        </Link>{" "}
        for a full sample experience.
      </p>
    </>
  )
}
