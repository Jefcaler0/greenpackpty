---
name: frontend-react
description: React, Vite, CSS, responsive frontend implementation. Use when creating, editing, refactoring or reviewing React components, Vite setup, src/App.jsx, src/styles.css, accessibility, performance or Vercel-ready frontend code.
---

# Frontend React

Use this skill for frontend implementation in this project.

## Project Context

- Stack: React + Vite + CSS personalizado.
- Entry point: `src/main.jsx`.
- Main UI: `src/App.jsx`.
- Styles: `src/styles.css`.
- Deployment target: Vercel with output directory `dist`.

## Implementation Rules

- Keep changes small and focused.
- Prefer semantic HTML: `header`, `main`, `section`, `article`, `nav`, `footer`.
- Use accessible labels for navigation, maps, images and external links.
- Keep images lazy-loaded with `loading="lazy"` and useful `alt` text.
- Avoid unnecessary dependencies unless they solve a concrete problem.
- Preserve responsive behavior at mobile, tablet and desktop sizes.
- Do not introduce business/backend logic into the landing page.

## CSS Guidelines

- Reuse existing custom properties in `:root` before adding new tokens.
- Keep layout rhythm consistent with existing `section-shell`, grid and card patterns.
- Prefer fluid spacing with `clamp()` for major sections.
- Avoid layout-shifting hover effects.
- Respect `prefers-reduced-motion`.

## Verification

Run this after meaningful frontend changes:

```bash
npm run build
```

## Delivery Checklist

- Page compiles with Vite.
- No horizontal scroll on mobile.
- Navigation anchors point to existing IDs.
- Images render with proper aspect ratio.
- Contact links use valid `mailto:` or external URLs.
