Design System: JSInside Obsidian — Visual Identity & Guidelines

1. Overview & Creative North Star: "The Illuminated Engine"

The JSInside brand represents the bridge between abstract code and concrete understanding. The design system, Obsidian, is built to feel like a high-end laboratory: dark, focused, and precise, where "light" (color and glow) represents the flow of execution and logic within JavaScript.

Key Principles:

Clarity through Contrast: High-contrast text and vibrant accents against deep backgrounds.

Depth & Dimension: Glassmorphism (frosted translucent surfaces, backdrop blur, subtle borders) and soft shadows to create a layered, modern SaaS feel without heavy flat panels.

Developer-Centric: Clean monospace fonts for logic and spacious sans-serif for learning.

Instructional Motion: Color isn't just decoration; it's a semantic signal for the runtime (e.g., Emerald for success/active, Violet for primary actions).

2. Visual Foundation

Color Palette

Map brand tokens to Tailwind’s default palette so themes stay consistent and utilities stay non-arbitrary.

Foundational:

Base background: `bg-slate-950` (or `bg-zinc-950` for a cooler neutral)

Elevated surfaces / cards: `bg-slate-900`

Secondary borders and subtle fills: `bg-slate-800`, `border-slate-800`

Accents:

Primary (brand / CTAs): `violet-500` / `violet-600` (hover: `violet-600` / `violet-700`)

Success / active simulation: `emerald-500` / `emerald-600`

Warnings / emphasis: `orange-500` / `orange-600`

Text & Borders:

Headings: `text-slate-50`

Body / muted: `text-slate-400`

Glass edge: `border-white/10` or `border-white/5` on dark glass (no custom rgba in components)

Typography

Headings & UI: Manrope (or Inter/Satoshi) — load via `next/font` or your font stack; pair with Tailwind classes.

Headings: `font-bold` for hero; `font-semibold` for UI labels; `tracking-tight` where appropriate.

Body: `text-base` `leading-relaxed` `text-slate-400` (on dark) for readable paragraphs.

Code & Logic: JetBrains Mono (or Fira Code) — `font-mono` `text-sm` for snippets, addresses, and terminal output.

Iconography & Roundness

Icons: Linear, 2px stroke. Default `text-slate-400`; active states use accent utilities (`text-violet-500`, etc.).

Corners: `rounded-lg` for standard components; `rounded-xl` for large hero cards and prominent surfaces.

3. Component Architecture

Glass Panels (Glassmorphism)

Use a consistent glass recipe across cards, modals, and floating panels. Prefer Tailwind utilities only (no arbitrary values).

Base stack:

- Frost: `bg-white/5` or `bg-white/10` (over dark base)
- Optional tint: `bg-slate-950/40` or `bg-slate-900/60` for stronger contrast
- Blur: `backdrop-blur-md` (dense UI) or `backdrop-blur-xl` (hero / large panels)
- Edge: `border border-white/10` (or `border-white/5` for subtler glass)
- Depth: `shadow-lg` or `shadow-xl` with `shadow-slate-950/50` if you need separation from the background
- Inner highlight (optional): `ring-1 ring-inset ring-white/5`

Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`

Buttons

Primary: `bg-violet-600` `text-white` `hover:bg-violet-700` `shadow-lg` `shadow-violet-500/25` `hover:shadow-violet-500/40` — keep glow on hover within standard opacity modifiers.

Secondary: `bg-transparent` `border border-white/20` `text-slate-100` `hover:bg-white/5` `hover:border-white/30`.

Ghost: `bg-transparent` `text-slate-400` `hover:text-slate-100` `hover:bg-white/5` — no default border.

Data Visualization

Call Stack: Stacked vertical blocks with `bg-gradient-to-b` from `slate-800` to `slate-900` (or `from-white/5` to `transparent` on glass).

Memory Heap: Grid of small blocks with `opacity-*` utilities (`opacity-40`, `opacity-60`, `opacity-80`) to suggest allocation density.

Event Loop: Circular motion path with a pulsing central icon — use `animate-pulse` or `animate-spin` on wrappers; reserve `transition-*` for interactive states.

4. Layout Strategy

Documentation: Sticky left nav for hierarchy, central content for focus, sticky right nav for section tracking — use `sticky top-0`, `sticky top-16` if a global header exists, and `max-w-*` + `mx-auto` for readable column width.

Playground: Split-pane layout. Prioritize visualization with a two-column split using Tailwind fractions: e.g. `grid grid-cols-1 md:grid-cols-5` with editor `md:col-span-2` and visualization `md:col-span-3` (or `flex` with `md:w-2/5` and `md:w-3/5`).

Spacing: Between major landing sections use vertical rhythm from the default scale: `py-16` `md:py-24` `lg:py-32` and/or `gap-16` `md:gap-24` — avoid one-off pixel gaps; stay on `4`, `8`, `12`, `16`, `24`, `32` spacing steps.
