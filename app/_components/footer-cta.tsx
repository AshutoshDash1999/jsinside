import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const footerColumns = [
    {
        title: "Curriculum",
        links: [
            { label: "Getting started", href: "#features" },
            { label: "Topics", href: "#topics" },
            { label: "Challenges", href: "#features" },
        ],
    },
    {
        title: "Product",
        links: [
            { label: "Playground", href: "/playground" },
            { label: "Roadmap", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
] as const

export function FooterCta() {
    return (
        <footer className="py-20 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid gap-12 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="mb-2 text-lg font-semibold text-slate-50">JSInside</p>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Visual education for JavaScript internals—clear, interactive, and
                            focused.
                        </p>
                    </div>

                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                                {col.title}
                            </p>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-400 transition-colors hover:text-slate-50"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                            Subscribe
                        </p>
                        <p className="mb-4 text-sm text-slate-400">
                            Updates on new lessons and runtime deep dives.
                        </p>
                        <form className="flex flex-col gap-3 sm:flex-row" action="#" method="post">
                            <label htmlFor="footer-email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="footer-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                className={cn(
                                    "min-h-10 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500",
                                    "backdrop-blur-md focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-950",
                                )}
                            />
                            <Button
                                type="submit"
                                className={cn(
                                    "shrink-0 rounded-lg bg-violet-600 text-white hover:bg-violet-700",
                                )}
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <p className="mt-12 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} JSInside. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
