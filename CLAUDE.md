# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # ESLint (next core-web-vitals + typescript rules)
```

There are no tests in this project yet.

## Stack

- **Next.js 16** with App Router (no Pages Router)
- **React 19**, **TypeScript 5** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — configured entirely in CSS, no `tailwind.config.js`
- **next-themes** for dark/light mode (`attribute="class"`, default `"light"`)
- **lucide-react** for icons
- Path alias: `@/` maps to the project root

## Architecture

### Routing
Next.js App Router. `(auth)` is a route group — it does not appear in URLs. Current routes:
- `/` → `app/page.tsx`
- `/login` → `app/(auth)/login/page.tsx`

Page components are thin — they import and render layout/section components only.

### Component layers
```
components/layout/    — page shells (wrap sections into a full page)
components/sections/  — large named regions (TopNavBar, Footer)
components/common/    — small reusable primitives (skeleton, label, theme toggle)
app/**/[route]/[route]_components/   — components private to a specific page
```

### Theming system
All theme-aware styles live in `app/globals.css` as custom utility classes inside `@layer utilities`. **Do not write raw `dark:` / color classes inline — use the named utilities instead.** Key classes:

| Class | Applies |
|---|---|
| `app-bg-theme-color` | `bg-white dark:bg-[#0a0a0a]` |
| `app-bg-theme-color-secondary` | `bg-gray-200 dark:bg-[#0a0a0a]` |
| `app-text-theme-color` | `text-gray-800 dark:text-gray-300` |
| `app-text-theme-secondary-color` | `text-slate-600 dark:text-slate-400` |
| `app-text-hover-theme-color` | `hover:text-[#0a0a0a] dark:hover:text-zinc-50` |
| `app-border-theme-color` | `border-zinc-200 dark:border-zinc-900` |
| `app-button-main-style` | full primary button style |
| `app-button-secondary-style` | full secondary/outline button style |
| `app-default-input-style` | full text input style |
| `app-default-font-size` | responsive base font size |
| `app-default-font-size-h2/h3/h4/h5` | responsive heading sizes |
| `app-bg-theme-color-skeleton` | `bg-zinc-300 dark:bg-zinc-600` |

Dark mode variant is declared as `@variant dark (&:where(.dark, .dark *))` — it activates when the `dark` class is on any ancestor (set by next-themes on `<html>`).

### Client vs server components
Only components that use React hooks or browser APIs are marked `"use client"`. Theme toggle components are client-only due to `useTheme`/`useState`/`useEffect`. Page components under `(auth)` are client components. Layout and section components are server components by default.

### ThemeToggle variants
Two versions exist for different contexts:
- `ThemeToggleComponent` — absolutely positioned, used on full-screen pages (login) where it floats over content
- `ThemeToggleFixComponent` — inline, renders a skeleton placeholder before hydration to prevent layout shift; used in the nav bar
