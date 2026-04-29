# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication Style

Respond like a caveman. No articles, no filler words, no pleasantries.
Short. Direct. Code speaks for itself.
If asked for code, give code. No explain unless asked.
No sycophancy. No restating the question. No sign-offs.

## Commands

```bash
npm run dev        # start dev server with Turbopack
npm run build      # production build
npm run lint       # ESLint
npm run format     # Prettier (writes in place)
npm run typecheck  # tsc --noEmit
```

No test suite exists yet.

## Architecture

**JSInside** — interactive JS internals education site built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, MDX, and Remotion.

### Route structure

| Route            | Purpose                                          |
| ---------------- | ------------------------------------------------ |
| `/`              | Landing page (hero, feature grid, topic preview) |
| `/learn`         | Lesson index, lists all published lessons        |
| `/learn/<topic>` | Individual MDX lesson                            |
| `/playground`    | Interactive playground (stub)                    |

### Lesson system

All lessons live at `app/learn/<topic>/page.mdx`. Adding a new lesson requires two things:

1. Create `app/learn/<topic>/page.mdx` with exported `metadata`.
2. Add an entry to `LEARN_LESSONS` in `lib/learn-nav.ts` — this single array drives the sidebar, per-page TOC, and prev/next navigation. The `toc` field must list heading `id`s that exist in the MDX file.

### Learn layout

`app/learn/layout.tsx` → `LearnLayoutClient` (client component, needs `usePathname`).  
Layout is 3-column: `LearnSidebar` | MDX content | `LearnToc`.  
TOC items and prev/next links are resolved at render time from `LEARN_TOC_BY_PATH` and `LEARN_PREV_NEXT_BY_PATH` (both derived from `LEARN_LESSONS`).

### Remotion animations

Animated educational videos use `@remotion/player` (browser-only, no Remotion Studio/CLI needed).

- Compositions: `app/learn/_components/remotion/*.tsx`
- Player wrapper: `app/learn/_components/<name>-player.tsx` — client component, wraps `<Player>` with `component`, `durationInFrames`, `fps`, etc.
- Player components are imported directly into MDX files.

### Component locations

- `app/_components/` — landing page sections (SiteHeader, HeroSection, FeatureGrid, etc.)
- `app/learn/_components/` — learn-section components (sidebar, TOC, visual diagrams)
- `components/ui/` — shadcn/ui primitives (Button, DotBackground, etc.)
- `components/theme-provider.tsx` — next-themes wrapper

### Styling

Tailwind v4 via `@import "tailwindcss"` in `globals.css`. Design tokens are CSS custom properties (`--background`, `--foreground`, etc.) with light/dark variants. Named swatches (`--c-yellow`, `--c-blue`, `--c-orange`, etc.) for accent colors.

Fonts (loaded via `next/font/google`):

- `--font-sans` → Nunito (body)
- `--font-display` / `--font-heading` → Gochi Hand (display headings)
- `--font-learn-mono` → JetBrains Mono (learn section code)

The learn section has a dark (`#0f172a`) background regardless of theme; Remotion compositions use inline styles matching this palette.

### Environment variables

`NEXT_PUBLIC_SITE_URL` — production URL, defaults to `https://jsinside.vercel.app`.
