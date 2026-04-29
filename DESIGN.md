---
name: JSInside
colors:
  # Light mode — base surfaces
  background: "#fdf9f4"
  on-background: "#3a2d20"
  surface: "#fdf8f2"
  surface-dim: "#e8e0d5"
  surface-bright: "#fdf9f4"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3ede5"
  surface-container: "#eee6db"
  surface-container-high: "#e8e0d5"
  surface-container-highest: "#dad1c1"
  on-surface: "#3a2d20"
  on-surface-variant: "#7a6b5a"
  outline: "#dad1c1"
  outline-variant: "#ede8de"
  # Primary — tomato red (CTAs, buttons, active states, focus ring)
  primary: "#d4512a"
  on-primary: "#ffffff"
  primary-container: "#a23c1f"
  on-primary-container: "#ffffff"
  # Secondary — sky blue (nav highlights, info)
  secondary: "#4fa3d8"
  on-secondary: "#ffffff"
  secondary-container: "#cce8f8"
  on-secondary-container: "#003358"
  # Accent — sunshine yellow (callouts, blockquotes, code blocks)
  accent: "#f0e254"
  on-accent: "#3a2d20"
  accent-container: "#fef9c3"
  on-accent-container: "#854d0e"
  # Muted
  muted: "#f3ede5"
  on-muted: "#7a6b5a"
  # State
  destructive: "#d4512a"
  on-destructive: "#ffffff"
  ring: "#d4512a"
  # Dark mode — surfaces
  dark-background: "#201914"
  dark-on-background: "#ece5db"
  dark-surface: "#2b2018"
  dark-surface-muted: "#342820"
  dark-on-surface: "#ece5db"
  dark-on-surface-variant: "#a8998a"
  dark-outline: "rgba(255,255,255,0.10)"
  dark-input: "rgba(255,255,255,0.15)"
  dark-primary: "#cc8845"
  dark-on-primary: "#ffffff"
  # Tile palette — feature bento grid (6-color rotation)
  yellow-surface: "#fef9c3"
  yellow-border: "#facc15"
  yellow-text: "#854d0e"
  sky-surface: "#e0f2fe"
  sky-border: "#38bdf8"
  sky-text: "#075985"
  orange-surface: "#ffedd5"
  orange-border: "#fb923c"
  orange-text: "#9a3412"
  purple-surface: "#f3e8ff"
  purple-border: "#c084fc"
  purple-text: "#7e22ce"
  green-surface: "#dcfce7"
  green-border: "#4ade80"
  green-text: "#166534"
  pink-surface: "#fce7f3"
  pink-border: "#f472b6"
  pink-text: "#9d174d"
  # Tile palette — topic grid (6-color rotation)
  rose-surface: "#ffe4e6"
  rose-border: "#fb7185"
  rose-text: "#9f1239"
  fuchsia-surface: "#fae8ff"
  fuchsia-border: "#e879f9"
  fuchsia-text: "#86198f"
  lime-surface: "#ecfccb"
  lime-border: "#a3e635"
  lime-text: "#3f6212"
  teal-surface: "#ccfbf1"
  teal-border: "#2dd4bf"
  teal-text: "#115e59"
  indigo-surface: "#e0e7ff"
  indigo-border: "#818cf8"
  indigo-text: "#3730a3"
  # Data visualization
  chart-1: "#d4512a"
  chart-2: "#4fa3d8"
  chart-3: "#28a855"
  chart-4: "#8a52c8"
  chart-5: "#e08830"
  # Dot-grid background texture
  dot-light: "#cec5b4"
  dot-dark: "#453830"
  # Browser meta theme color
  theme-color: "#f5efe8"
typography:
  display:
    fontFamily: Gochi Hand
    fontSize: 56px
    fontWeight: "400"
    lineHeight: 63px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Gochi Hand
    fontSize: 36px
    fontWeight: "400"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Gochi Hand
    fontSize: 24px
    fontWeight: "400"
    lineHeight: 32px
  title-lg:
    fontFamily: Gochi Hand
    fontSize: 20px
    fontWeight: "400"
    lineHeight: 28px
  body-lg:
    fontFamily: Nunito
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 31px
  body-md:
    fontFamily: Nunito
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 28px
  body-sm:
    fontFamily: Nunito
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Nunito
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Nunito
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.05em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 24px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 20px
rounded:
  sm: 0.45rem
  DEFAULT: 0.6rem
  md: 0.75rem
  lg: 0.75rem
  xl: 1rem
  2xl: 1.35rem
  3xl: 1.65rem
  4xl: 2rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  section-y-mobile: 80px
  section-y-desktop: 128px
  nav-height: 64px
  sidebar-width: 260px
  container-max: 1280px
motion:
  duration-fast: 150ms
  duration-base: 200ms
  duration-scroll-reveal: 650ms
  easing-standard: ease-out
  easing-scroll-reveal: cubic-bezier(0.22, 1, 0.36, 1)
  easing-organic: ease-in-out
  blob-loop-duration: 16s
  bento-hover-duration: 900ms
  stagger-step: 100ms
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.4xl}"
    height: 36px
    padding: 0 16px
    borderColor: "{colors.primary-container}"
    borderWidth: 2px
    shadow: "4px 4px 0px {colors.primary-container}"
  button-primary-active:
    transform: "translateX(2px) translateY(2px)"
    shadow: none
  button-outline:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.4xl}"
    borderColor: "{colors.outline}"
    borderWidth: 2px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.4xl}"
  button-ghost-hover:
    backgroundColor: "{colors.muted}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.4xl}"
    height: 36px
    padding: 0 16px
  card-feature:
    rounded: "{rounded.2xl}"
    borderWidth: 2px
    padding: "{spacing.lg}"
    shadow: "4px 4px 0px <tile-border-color>"
  card-feature-active:
    transform: "translateX(2px) translateY(2px)"
    shadow: none
  card-default:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.2xl}"
    borderColor: "{colors.outline}"
    borderWidth: 2px
    padding: "{spacing.md}"
  cta-section:
    rounded: "{rounded.3xl}"
    borderWidth: 2px
    padding: "{spacing.xl}"
    shadow: "6px 6px 0px <border-color>"
  nav-header:
    backgroundColor: "rgba(253,249,244,0.90)"
    textColor: "{colors.on-surface}"
    borderBottomColor: "{colors.outline}"
    borderBottomWidth: 2px
    backdropBlur: 12px
    height: "{spacing.nav-height}"
  nav-item:
    typography: "{typography.label-md}"
    rounded: "{rounded.xl}"
    padding: 6px 12px
  nav-item-active:
    backgroundColor: "{colors.sky-surface}"
    textColor: "{colors.sky-text}"
  nav-item-hover:
    backgroundColor: "{colors.muted}"
  sidebar-item-active:
    borderWidth: 2px
    rounded: "{rounded.xl}"
    shadow: "3px 3px 0px <tile-border-color>"
  input-field:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    borderColor: "{colors.outline}"
    borderWidth: 2px
    padding: "{spacing.md}"
  input-field-focus:
    borderColor: "{colors.primary}"
  code-block:
    backgroundColor: "{colors.yellow-surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.code-md}"
    rounded: "{rounded.2xl}"
    borderColor: "{colors.yellow-border}"
    borderWidth: 2px
    padding: "{spacing.lg}"
    shadow: "4px 4px 0px {colors.yellow-border}"
  inline-code:
    backgroundColor: "{colors.yellow-surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.sm}"
    padding: 2px 6px
  blockquote:
    backgroundColor: "{colors.yellow-surface}"
    borderColor: "{colors.yellow-border}"
    borderWidth: 2px
    rounded: "{rounded.2xl}"
    padding: "{spacing.lg}"
    shadow: "3px 3px 0px {colors.yellow-border}"
  mdx-link:
    textColor: "#3c7fb8"
    textDecorationColor: "#7fbce0"
    textUnderlineOffset: 4px
  mdx-link-hover:
    textColor: "#245577"
---

## Brand & Style

JSInside is a JavaScript education platform that teaches language internals — the call stack, the event loop, closures, prototypes — through annotated lessons and interactive visualizations. The design language is deliberately playful and hand-crafted, evoking the warmth of a well-loved textbook while remaining technically precise.

The visual identity lands at the intersection of **retro stationery** and **modern web craft**: warm parchment backgrounds, high-chroma tiled palettes, tactile hard-offset shadows, and a display typeface with organic letterforms. The result feels approachable to beginners but carries the authority expected by working developers.

Two concurrent aesthetics coexist within the same design system:

1. **Landing & marketing** — expressive, colorful, motion-rich bento grids, large fluid display type, floating blob gradients that shift like oil paint behind the hero.
2. **Learn / reading view** — restrained, focused, high line-height prose, yellow-accented code blocks, a persistent sidebar, and motion reduced to scroll-triggered reveals.

## Colors

The palette is built in the OKLCH color space for perceptual uniformity across both light and dark modes, then surfaced as semantic CSS custom properties. The overall impression is warm, never cold.

### Light Mode (default)

The default surface is a warm near-white (`#fdf9f4`) — closer to aged paper than pure white — paired with a dark warm-brown foreground (`#3a2d20`). This avoids harsh blue-white contrast while keeping all text legible at every hierarchy level.

- **Primary (tomato red `#d4512a`):** Reserved for the highest-priority actions only: the main CTA button, focused input borders, the keyboard focus ring. Warm and saturated — unmistakable.
- **Secondary (sky blue `#4fa3d8`):** Active nav states, informational chips, secondary interactive elements. Provides a cool counterpoint to the warm surface palette.
- **Accent (sunshine yellow `#f0e254`):** Signals highlights and annotations. Appears in blockquotes, code blocks, and inline code — the "underline in a textbook" color.
- **Muted (`#f3ede5`):** Ghost button fills, low-emphasis surfaces, hover backgrounds.

### Dark Mode

Dark mode deepens toward warm charcoal (`#201914`) rather than cold neutral black. All dark-mode borders use `rgba(255,255,255,0.10)` so they recede without disappearing entirely. The primary color softens to a warm amber (`#cc8845`) to remain accessible against dark surfaces without the visual aggression of full tomato red.

### Tile Palettes

Interactive feature and topic tiles cycle through two distinct six-color rotations. Each tile uses a matched triplet of `surface / border / text` for consistent tonal contrast without arbitrary color combinations.

- **Feature tiles (landing bento):** yellow, sky, orange, purple, green, pink.
- **Topic tiles (topic grid):** rose, fuchsia, lime, teal, sky, indigo.

Every tile's shadow uses its own border color as the shadow color — a yellow tile casts a yellow shadow, a purple tile a purple shadow. This reinforces the identity of each tile as a self-contained object rather than a generic card.

### Background Texture

A 22×22 px dot grid (`#cec5b4` light / `#453830` dark) covers the full viewport at z-0, behind all content. Dots are 1 px radius. This creates a "graph paper notebook" metaphor that pays off the educational positioning without dominating the visual field.

## Typography

Three typefaces form a deliberate hierarchy, each scoped to a specific register of the UI.

### Gochi Hand — All Headings

Used for every heading level: hero titles, section headings, card headings, sidebar titles, and learn-section h1–h4. Its casual, hand-lettered character signals "handcrafted knowledge" rather than corporate documentation. Because Gochi Hand ships only in weight 400, visual hierarchy is expressed through size and spacing rather than weight changes. Hero size is fluid: `clamp(2.8rem, 7vw, 5.5rem)`; section headings sit at 36 px with −0.01 em tracking.

### Nunito — Body & UI

All body prose, navigation labels, button copy, sidebar items, and metadata. Nunito's rounded terminals harmonize with the design's organic corner language. Body line height is `1.75` — generous for reading-intensive learn pages. UI labels use `600` weight to stay distinct against tinted tile backgrounds.

### JetBrains Mono — Code (Learn section only)

Used exclusively within `/learn` for code blocks and inline code. Its wide letterforms and tall x-height make JavaScript syntax readable at 14 px without zooming. The font is loaded only in the learn layout, keeping the marketing-page bundle lean.

## Layout & Spacing

All spacing derives from a 4 px base unit (Tailwind default). Section vertical rhythm uses `py-20 md:py-24 lg:py-32`, scaling from 80 px on mobile to 128 px on desktop — generous enough to feel designed, not wasteful.

### Navigation

The header is fixed at 64 px, `z-50`, with 90 % opacity + 12 px backdrop blur. Content scrolls visibly behind it, reinforcing the layered depth of the interface. The learn-section sidebar is 260 px wide, sticky at `top: 64px`, and visible only at `lg` breakpoints. A matching table-of-contents appears on the right.

### Bento Grid

Feature tiles use an `auto-rows-fr` CSS grid with `md:grid-cols-4`. Individual tiles span `md:col-span-2 md:row-span-2` to create visual weight differences. This is the primary expressive canvas of the landing page.

### Containers

Maximum content width is 1280 px, centered. Horizontal padding scales from `px-6` (mobile) to `px-10` (desktop).

## Elevation & Depth

This design system uses **hard offset shadows** — not diffused drop shadows. A shadow is a fixed-distance solid offset in the element's own border color. There are no blurred, gray, or semi-transparent shadows anywhere in the system except the header backdrop.

### Shadow Scale

| Use case | Offset | Shadow color |
|---|---|---|
| Sidebar active items, blockquotes | `3px 3px` | Tile or accent border color |
| Standard tiles, primary buttons, code blocks | `4px 4px` | Tile or button border color |
| CTA hero panels | `6px 6px` | Panel border color |

### Hover / Press Interaction

On hover and on active press, elements translate `+2px X / +2px Y` and their shadow is set to `none`. The translation vector exactly matches the shadow offset, so the shadow appears to collapse into the surface as the element is pushed down. This is the primary tactile affordance of the design system.

### Layering

No glassmorphism beyond the sticky header. Depth hierarchy is:

1. Dot-grid texture — z-0, behind everything.
2. Floating blob gradients — absolute-positioned, `opacity-40`, blurred 80 px, hero section only.
3. Content cards — 2 px solid borders, hard shadows, z-10+.
4. Navigation bar — semi-transparent with backdrop blur, z-50.

## Shapes

The corner radius scale is proportional, derived from a single base variable of `0.75rem` (12 px). All values are multiples of that base.

- **Pill buttons (`4xl`, ~2rem):** Primary and secondary CTAs are nearly capsule-shaped. This makes them unmistakably interactive and communicates a friendly, approachable character.
- **Cards and panels (`2xl`, ~1.35rem):** Feature tiles, code blocks, blockquotes, CTA sections. Large enough to feel intentional; not so extreme as to look childish.
- **Nav items and inputs (`xl`, 1rem):** Mid-range for elements that should feel clickable without looking like pills.
- **Inline code (`sm`, 0.45rem):** Very subtle rounding — just enough to distinguish from surrounding prose text.

Icon style is Tabler Icons (rounded stroke caps, 2 px weight) to harmonize with the rounded shape vocabulary.

## Motion & Animation

Motion serves two functions: **ambient personality** on the landing page, and **scroll teaching cues** for content reveal. No animation exists purely for decoration.

### Ambient Motion

Two floating blob shapes sit behind the hero section, running a 16 s looping `float-blob` keyframe: gentle ±12 px translation and ±4 % scale with `ease-in-out`. At `opacity-40` they act as atmospheric color without distracting from the headline or CTA.

### Scroll Reveal

Each major landing section enters with a fade + 20 px upward translate driven by Motion.js scroll-triggered observers. Duration is 650 ms with `cubic-bezier(0.22, 1, 0.36, 1)` — a fast acceleration with a gentle physical settle. Child elements stagger 100 ms apart.

### Bento Hover Animations

Each feature tile contains a unique SVG micro-animation (orbit spin, stroke dash loop, queue dot bounce, brace glow pulse, stack nudge, topic rise, tick fade). All animations are **paused by default** via `animation-play-state: paused` and play only on `group-hover` or `group-focus-within`. Durations range from 900 ms to 1.8 s. This rewards curiosity without overwhelming a first visit.

### Reduced Motion

All bento animations are gated with `@media (prefers-reduced-motion: reduce) { animation: none !important }`. Scroll reveal sequences skip the translate and show content at full opacity immediately.

## Components

### Buttons

All buttons share pill `rounded-4xl` corners, a consistent 2 px border, and sizes ranging from `h-6` (icon-xs) to `h-10` (lg). The primary variant carries the hard offset shadow (`4px 4px 0px primary-container`) that collapses on hover/active — the same press mechanic used throughout the system. Focus states use a 3 px ring at 50 % primary opacity.

### Feature & Topic Tiles (Bento)

Tiles are the visual signature of the landing page. Each is a pastel-surface card with a 2 px matching-color border, a 4 px hard shadow in the same border color, and a SVG animation that idles paused. The six-color rotations ensure no two adjacent tiles look identical while maintaining tonal cohesion.

### Code Blocks & Inline Code

All code is presented on the accent yellow surface with a yellow border and matching hard shadow. Code blocks feel like sticky notes or highlighted textbook passages. Inline code inherits the same yellow surface with minimal radius and no shadow. The yellow signals "pay attention here" consistently throughout both marketing and learn contexts.

### Navigation Header

Sticky, 90 % opaque, backdrop-blurred. Active route shown as a sky-blue chip. The primary CTA in the nav ("Start Learning") matches the hero button — same red, same shadow, same press mechanic — so users encounter a consistent interaction pattern from first load.

### Sidebar (Learn)

The learn sidebar applies the six-color tile system to lesson navigation. Active entries display a 2 px colored border and matching hard shadow, so learners always have a clear spatial anchor. A "Pro tip" callout at the sidebar's foot uses the yellow accent treatment, consistent with code blocks and blockquotes in the content area.

### Prose (MDX)

Body text is Nunito at `16px / 1.75` in a slightly lighter foreground `#7a6b5a` to reduce eye fatigue over long reads. All headings — including those in the learn section — use Gochi Hand, maintaining the hand-lettered identity throughout the product. Links are sky blue with a lighter underline at `text-underline-offset: 4px`. Blockquotes use the full yellow-accent system: tinted background, yellow border, hard shadow, and a decorative `✦` ornament at the top-left corner.
