import Link from "next/link"

export const metadata = {
  title: "Foundations",
  description: "Language foundations — syntax, types, and how programs begin execution.",
}

export default function FoundationsPage() {
  return (
    <>
      <h1 className="font-heading-learn mb-4 text-4xl font-bold tracking-[-0.02em] text-slate-50">
        Foundations
      </h1>
      <p className="text-base leading-[1.6] text-slate-400">
        This lesson is not published yet. Check back soon, or start with{" "}
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
