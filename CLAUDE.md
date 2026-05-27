# CLAUDE.md
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.


## Stack

- **Next.js 16** with App Router (no Pages Router)
- **React 19**, **TypeScript 5** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — configured entirely in CSS, no `tailwind.config.js`
- **next-themes** for dark/light mode (`attribute="class"`, default `"light"`)
- **lucide-react** for icons
- Path alias: `@/` maps to the project root

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
All theme-aware styles live in `app/globals.css` as custom utility classes inside `@layer utilities`. 

Dark mode variant is declared as `@variant dark (&:where(.dark, .dark *))` — it activates when the `dark` class is on any ancestor (set by next-themes on `<html>`).
