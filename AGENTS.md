# Agent Guidelines for jsinside

This is a Next.js 16 project with TypeScript, Tailwind CSS v4, and shadcn/ui.

## Build Commands

```bash
# Development server
npm run dev                    # Start dev server with turbopack
npm run dev -- -p 3001         # Run on specific port

# Build
npm run build                  # Production build
npm run start                  # Start production server

# Linting & Formatting
npm run lint                   # Run ESLint
npm run format                 # Format all TS/TSX files with Prettier
npm run typecheck              # TypeScript type checking (noEmit)

# Single command to verify everything
npm run lint && npm run typecheck && npm run build
```

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - All TypeScript strict checks are on
- Use explicit types for function parameters and return types
- Use `interface` for object shapes, `type` for unions/aliases
- Path aliases: use `@/*` for imports (e.g., `@/components/ui/button`)

### Imports

- Use absolute imports with `@/` prefix
- Order: external imports → internal imports → relative imports
- Group imports logically, add blank line between groups

### Formatting (Prettier)

- 2 spaces indentation
- No semicolons
- Single quotes in JSX, double quotes in JS
- Trailing commas in ES5 position (arrays, objects)
- 80 character line width
- Use `cn()` utility for conditional className merging

### Naming Conventions

- **Files**: kebab-case for components (`button.tsx`), PascalCase for pages/routes
- **Components**: PascalCase (e.g., `ThemeProvider`)
- **Functions/variables**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE
- **Interfaces**: PascalCase with `I` prefix optional (prefer descriptive names)

### React/Next.js Patterns

- Use Server Components by default; add `'use client'` only when needed
- Use `next-themes` for dark mode via `ThemeProvider`
- Use `class-variance-authority` (cva) for component variants
- Use `tailwind-merge` (twmerge) via `cn()` utility

### Error Handling

- Use try/catch with descriptive error messages
- Never expose sensitive data in error messages
- Use error boundaries for component-level error states

### Tailwind CSS v4

- Use `@theme` directive in `app/globals.css` for design tokens
- Use `tw-animate-css` for animations
- Use arbitrary values sparingly (e.g., `[width:200px]`)

### shadcn/ui

- Components stored in `components/ui/`
- Add new components via `npx shadcn@latest add <component>`
- Customize in `components.json`

### File Organization

```
app/          # Next.js App Router pages/layouts
components/   # React components (ui/ for shadcn)
lib/          # Utilities (utils.ts for cn())
hooks/        # Custom React hooks
public/       # Static assets
```

### What NOT to Do

- Don't commit `node_modules/` or `.next/` to git
- Don't use `any` type without a comment explaining why
- Don't disable strict mode in tsconfig
- Don't use inline styles - use Tailwind classes
- Don't forget to run `npm run lint` and `npm run typecheck` before commits
