<div align="center">

  <img src="./public/takra_logo.webp" alt="Akoko Takra Logo" width="160" />

  # Akoko Takra

  **All-in-One Livestock & Poultry Farm Management System**

  [![Vue 3](https://img.shields.io/badge/Vue-3.5+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-8.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![AOS Animation](https://img.shields.io/badge/AOS-v2.3.4-036068?style=for-the-badge&logoColor=white)](https://michalsnik.github.io/aos/)
  [![License](https://img.shields.io/badge/License-Proprietary-036068?style=for-the-badge)](#)

  <p align="center">
    Empowering commercial poultry and livestock farmers across Africa with precision record keeping, automated flock tracking, financial insights, and intelligent farm analytics.
  </p>

  <p align="center">
    <a href="https://akokotakra.com/"><strong>Explore Live Platform »</strong></a>
    ·
    <a href="https://play.google.com/store/apps/details?id=com.agroinnovagh.akokotakra"><strong>Download on Google Play »</strong></a>
    ·
    <a href="#-key-features">Key Features</a>
    ·
    <a href="#-project-architecture">Architecture</a>
    ·
    <a href="#-quick-start">Quick Start</a>
  </p>

</div>

---

## 📖 Overview

**Akoko Takra** (*"Chicken Feathers"* in Akan/Twi) is an enterprise-grade Agritech platform developed by **Agro Innova Company Limited**. It provides poultry and livestock farm owners, farm managers, agribusinesses, and financial institutions with a unified digital ecosystem to track farm inputs, bird mortality, feed conversion ratios, egg collections, and day-to-day farm finances.

This repository houses the modern frontend web application and marketing experience, engineered with **Vue 3**, **Vite**, **TypeScript**, and **Tailwind CSS v4**. It features interactive canvas visual systems, dynamic animated orbital UI mockups, floating app component overlays, and responsive, accessible layouts.

---

## ✨ Key Features

- **📊 Comprehensive Record Keeping**: Track feed inventories, medication regimens, vaccination schedules, mortality rates, and flock growth metrics.
- **🥚 Egg Production & Grading**: Daily log collections, classify egg sizes/grades, and identify production fluctuations before they impact bottom lines.
- **📈 Financial Insights & Payroll**: Manage sales, operational expenditures, feed purchasing, and farm staff payroll in a centralized dashboard.
- **🌦️ Weather & Environmental Forecasts**: Hyperlocal microclimate weather alerts to safeguard flock ventilation and biosecurity.
- **💫 Dynamic Animated Orbital Rings**: Custom dual-arc SVG orbital cycle with directional arrowheads, counter-rotating dashed tracks, and ambient halo surrounding the iPhone hardware frame.
- **🖼️ Floating App UI Overlays**: Real application component snippets (`Penhouse`, `Dashboard`, `Suppliers`, `Farms`) floating in multi-depth levitation around the mockups.
- **🔄 Auto-Transitioning Mockup Showcase**: Interval-driven screen transitions cycling through the Education Hub, Home Dashboard, Broilers Management, Farm Details, and Weather Forecast screens.
- **📝 Hero Headline Rotator**: Smooth slide-up transition cycling through core platform capabilities every 3 seconds.
- **📬 Illustrated Contact Hub**: Three-column contact interface with custom dual-tone vector illustrations (Office, Direct Calls/WhatsApp, Email).
- **🎨 AOS Motion System**: Calibrated, non-intrusive scroll reveals (`once: true`, `duration: 750ms`, `ease-out-cubic`) with `prefers-reduced-motion` accessibility compliance.
- **📱 Responsive Mobile Experience**: Sliding drawer navigation (`MobileSideBar.vue`), adaptive card layouts, and touch-optimized tap targets.
- **🔍 Full SEO & Social Optimization**: Implemented with Open Graph, Twitter Cards, Google JSON-LD structured schema, dynamic `robots.txt`, and XML sitemaps.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | [Vue 3](https://vuejs.org/) | Composition API, `<script setup>`, reactive refs & Transitions |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type checking with custom environment declarations |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `@tailwindcss/vite` pipeline, fluid typography clamps & custom CSS variables |
| **Scroll Motion** | [AOS](https://michalsnik.github.io/aos/) | Animate On Scroll with non-intrusive triggers and accessibility fallbacks |
| **Routing** | [Vue Router 5](https://router.vuejs.org/) | Section anchor navigation, smooth scroll, and history mode |
| **SEO & Head** | [@unhead/vue](https://unhead.unjs.io/) | Dynamic metadata, canonical links, and social card injection |
| **Tooling** | [Vite](https://vitejs.dev/) | Sub-second HMR, optimized production asset bundling |

---

## 📂 Project Architecture

```
Akoko-Takra/
├── public/                     # Static production assets
│   ├── favicon.ico             # Application browser icon
│   ├── og-image.png            # Open Graph social preview banner
│   ├── robots.txt              # Search engine crawler policies
│   ├── sitemap.xml             # Search engine XML index
│   └── takra_logo.webp         # Brand mark for crawlers & headers
├── src/
│   ├── assets/                 # Component images, brand assets, and CSS
│   │   ├── main.css            # Root Tailwind imports, font definitions & CSS variables
│   │   ├── base.css            # Typography base & fallback color palettes
│   │   ├── overlays_uis/       # Floating app UI card snippets
│   │   │   ├── Component_02.png# Component card preview
│   │   │   ├── Component_03.png# Analytics graph widget
│   │   │   ├── Dashboard.png   # Real-time metrics overview card
│   │   │   ├── Farms.png       # Active farms directory card
│   │   │   ├── Penhouse.png    # Pen house & flock status chip
│   │   │   └── Suppliers.png   # Input suppliers management card
│   │   └── ...                 # Frame mockups, icons, and illustrations
│   ├── components/             # Reusable UI component library
│   │   ├── Button.vue          # Sliding curtain button with hover reveal
│   │   ├── GeometryLayout.vue  # Canvas interactive node & line physics engine
│   │   ├── MobileSideBar.vue   # Responsive slide-out navigation drawer
│   │   ├── NavBar.vue          # Fixed responsive nav with sliding glider tabs
│   │   ├── NetBackground.vue   # Secondary atmospheric canvas backdrop
│   │   ├── QuestionStorySet.vue# Interactive accordion & visual showcase
│   │   └── SEOHeader.vue       # Unhead metadata wrapper component
│   ├── router/                 # Application navigation router
│   │   └── index.ts            # Route table definition
│   ├── utils/                  # Shared helper constants & navigation links
│   │   └── links_data.ts       # Main navigation route mappings
│   ├── views/                  # Top-level view containers
│   │   └── Home/               # Main Landing Page Composition
│   │       ├── HomeView.vue    # Root page assembly & scroll refresh
│   │       ├── HeroSection.vue # Hero showcase with headline rotator & floating widgets
│   │       ├── HowItWorksSection.vue # Orbital rings, phone carousel & partners
│   │       ├── PartnersSection.vue   # Partner logos (GIZ, Kosmos, MEST, GNAPF, GPP)
│   │       ├── GeneralQuestionSection.vue # FAQ accordion module with farm backdrop
│   │       ├── CTASection.vue  # Polygonal shadow CTA with app download links
│   │       ├── ContactSection.vue    # 3-column illustrated contact cards
│   │       └── Footer.vue      # Social media links, company info & copyright
│   ├── App.vue                 # Root component mount
│   ├── env.d.ts                # TypeScript ambient module declarations (AOS, etc.)
│   └── main.ts                 # Vue application bootstrap, AOS & Unhead setup
├── index.html                  # HTML5 entry with meta, OpenGraph, JSON-LD Schema
├── package.json                # Project dependencies and script runner
├── tsconfig.json               # TypeScript workspace configuration
├── tsconfig.app.json           # Application-specific TypeScript compilation rules
└── vite.config.ts              # Vite bundler plugins and alias resolution
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed locally:
- **Node.js**: `v20.x` or `v22.x` / `v24.x` (see `engines` in `package.json`)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Akoko-Takra.git
   cd Akoko-Takra
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Launches local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Runs full type checking via `vue-tsc` and generates minified production bundle in `dist/`. |
| `npm run preview` | Spins up a local static server to preview production build artifacts. |
| `npm run type-check` | Executes strict TypeScript compilation checks across all `.vue` and `.ts` files. |

---

## 🎨 Theme & Color Palette

The project is styled using the active agritech teal-and-mint branding exposed through CSS custom properties in `src/assets/main.css`:

```css
:root {
  --color-1: #1e1e1e; /* Dark Charcoal Slate */
  --color-2: #65cbb9; /* Vibrant Mint / Accent */
  --color-3: #036068; /* Deep Corporate Teal */
  --color-4: #878787; /* Neutral Support Gray */
  --accent-color: var(--color-2);
  --text-color: var(--color-1);
}
```

The interactive `GeometryLayout` canvas dynamically inspects these variables at runtime, guaranteeing exact visual harmony between CSS and JavaScript canvas rendering.

---

## 🤝 Ecosystem Partners

Akoko Takra is backed and supported by leading agricultural development organizations, incubators, and industry bodies across West Africa:
- **GIZ (German Development Cooperation)**
- **Kosmos Innovation Center (KIC)**
- **GNAPF (Ghana National Association of Poultry Farmers)**
- **GPP (Ghana Poultry Project)**
- **MEST Africa**

---

## 🏢 Company & Contact

Developed and maintained by **Agro Innova Company Limited**.

- **Website**: [akokotakra.com](https://akokotakra.com/)
- **Email**: [info@akokotakra.com](mailto:info@akokotakra.com) / [support@akokotakra.com](mailto:support@akokotakra.com)
- **Head Office**: No. 19 Banana Avenue East Legon Ambassadorial Enclave, Accra - Ghana
- **Branch / Facility**: No. 31 Ogbojo Koo Street, Ogbojo - East Legon, Accra - Ghana
- **Phone / WhatsApp**: +233 (0) 24 095 6276 / +233 (0) 55 336 8762

---

<div align="center">
  <small>&copy; 2026 Agro Innova Company Limited. All rights reserved.</small>
</div>
