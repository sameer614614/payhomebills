# PayBillsWithUs Marketing Site

A modern, responsive single-page application built with Vite, React, TypeScript, and Tailwind CSS. The site showcases Internet,
Home Services, TV & Cable, and Electric bill providers while encouraging visitors to call the toll-free concierge line for a
guaranteed 25% monthly savings.

## ✨ Features

- Hero section with bold messaging, proof points, and a concierge explainer.
- Interactive category tabs and provider cards powered by local TypeScript data.
- Toll-free call-to-action block optimized for conversions.
- FAQ accordion answering common enrollment questions.
- Mobile-first, responsive layout with glassmorphism styling.
- Static assets only — no forms, databases, or authentication.

## 🚀 Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling and custom utility classes.
- [lucide-react](https://lucide.dev/) icons for lightweight SVGs.

## 📦 Getting Started

```bash
npm install
npm run dev
```

The development server runs on <http://localhost:5173>. Use `npm run build` to create the production-ready static assets and
`npm run preview` to serve the build locally.

## 📁 Local Data Source

All provider, category, and FAQ content lives in [`src/data/providers.ts`](./src/data/providers.ts). Update this file to refresh
pricing or add new plans — no backend required.

## 📞 Toll-Free Number

All "Call Now" buttons dial **1-800-555-9999**, keeping the primary conversion path consistent across the site.
