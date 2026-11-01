<div align="center">

  <img src="./src/assets/akokotakra-01.webp" alt="Akoko Takra Logo" width="180" />

  # Akoko Takra

  **All-in-One Livestock & Poultry Farm Management System**

  [![Vue 3](https://img.shields.io/badge/Vue-3.5+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-Proprietary-06362d?style=for-the-badge)](#)

  <p align="center">
    Empowering modern commercial poultry and livestock farmers across Africa with accurate data records, automated flock tracking, financial insights, and precision farm analytics.
  </p>

  <p align="center">
    <a href="https://akokotakra.com/"><strong>Explore the Web App »</strong></a>
    ·
    <a href="https://play.google.com/store/apps/details?id=com.agroinnovagh.akokotakra"><strong>Download on Google Play »</strong></a>
    ·
    <a href="#key-features">Key Features</a>
    ·
    <a href="#quick-start">Quick Start</a>
  </p>

</div>

---

## 📖 Overview

**Akoko Takra** (*"Chicken Feathers"* in Akan/Twi) is an enterprise-grade Agritech platform developed by **Agro Innova Company Limited**. It provides poultry and livestock farm owners, farm managers, agribusinesses, and financial institutions with a unified digital ecosystem to track farm inputs, bird mortality, feed conversion ratios, egg collections, and day-to-day farm finances.

This repository houses the modern frontend landing experience, built with **Vue 3**, **Vite**, **TypeScript**, and **Tailwind CSS v4**, featuring interactive HTML5 Canvas visual systems and responsive, accessible UI components.

---

## ✨ Key Features

- **📊 Comprehensive Record Keeping**: Track feed inventories, medication regimens, vaccination schedules, mortality rates, and flock growth metrics.
- **🥚 Egg Production & Grading**: Daily log collections, classify egg sizes/grades, and identify production fluctuations before they impact bottom lines.
- **📈 Financial Insights & Payroll**: Manage sales, operational expenditures, feed purchasing, and farm staff payroll in a centralized dashboard.
- **🌦️ Weather & Environmental Forecasts**: Hyperlocal microclimate weather alerts to safeguard flock ventilation and biosecurity.
- **📱 Cross-Platform Accessibility**: Seamless coordination between the web platform and the native Android mobile application.
- **⚡ Interactive Geometric Canvas Engine**: Custom mathematical canvas mesh in `GeometryLayout.vue` featuring dynamic pointer line convergence and CSS variable theme synchronization.
- **🔍 Full SEO & Social Optimization**: Implemented with Open Graph, Twitter Cards, Google JSON-LD structured schema, dynamic `robots.txt`, and XML sitemaps.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | [Vue 3](https://vuejs.org/) | Composition API, `<script setup>`, reactive refs |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Full type safety with strict type checking |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern `@tailwindcss/vite` pipeline & custom CSS variables |
| **Routing** | [Vue Router 5](https://router.vuejs.org/) | Hash-scrolling, section anchors, history mode |
| **SEO & Head** | [@unhead/vue](https://unhead.unjs.io/) | Dynamic metadata, canonical links, and social card injection |
| **Tooling** | [Vite](https://vitejs.dev/) | Sub-second HMR, optimized production asset bundling |

---

## 📂 Project Architecture

```
Akoko-Takra/
├── public/                     # Static production assets
│   ├── akokotakra-01.webp      # Static brand mark for crawlers
│   ├── og-image.png            # Open Graph social preview banner
│   ├── robots.txt              # Search engine crawler policies
│   └── sitemap.xml             # Search engine XML index
├── src/
│   ├── assets/                 # Component images, brand assets, and CSS
│   │   ├── main.css            # Root Tailwind imports, font definitions & CSS variables
│   │   └── base.css            # Typography base & fallback color palettes
│   ├── components/             # Reusable UI component library
│   │   ├── Button.vue          # Sliding curtain button with hover reveal
│   │   ├── GeometryLayout.vue  # Canvas interactive node & line physics engine
│   │   ├── NavBar.vue          # Fixed responsive nav with sliding glider tabs
│   │   ├── NetBackground.vue   # Secondary atmospheric canvas backdrop
│   │   ├── QuestionStorySet.vue# Interactive accordion & visual showcase
│   │   └── SEOHeader.vue       # Unhead metadata wrapper component
│   ├── router/                 # Application navigation router
│   │   └── index.ts            # Route table definition
│   ├── views/                  # Top-level view containers
│   │   └── Home/               # Main Landing Page Composition
│   │       ├── HomeView.vue    # Root page assembly
│   │       ├── HeroSection.vue # Hero showcase with app mockups & CTAs
│   │       ├── HowItWorksSection.vue   # Workflow diagram & feature list
│   │       ├── PartnersSection.vue     # Partner logos (GIZ, Kosmos, MEST, etc.)
│   │       ├── GeneralQuestionSection.vue # FAQ module
│   │       ├── ContactUsSection.vue    # Direct inquiry form & office channels
│   │       └── Footer.vue      # Social media links, company info & copyright
│   ├── App.vue                 # Root component mount
│   └── main.ts                 # Vue application bootstrap & Unhead setup
├── index.html                  # HTML5 entry with meta, OpenGraph, JSON-LD Schema
├── package.json                # Project dependencies and script runner
├── tsconfig.json               # TypeScript workspace configuration
└── vite.config.ts              # Vite bundler plugins and alias resolution
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed locally:
- **Node.js**: `v20.x` or higher
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

The project is styled using a dedicated agritech emerald-and-lime color palette exposed through CSS custom properties in `src/assets/main.css`:

```css
:root {
  --color-1: #06362d; /* Deep Corporate Forest Emerald */
  --color-2: #0c5e37; /* Rich Pine Green */
  --color-3: #009631; /* Vibrant Business Green */
  --color-4: #0ac918; /* Crisp Tech Green */
  --color-5: #5eff05; /* Electric Lime Accent */
  --accent-color: var(--color-3);
}
```

The interactive `GeometryLayout` canvas dynamically inspects these variables at runtime, guaranteeing exact visual harmony between CSS and JavaScript canvas rendering.

---

## 🤝 Ecosystem Partners

Akoko Takra is backed and supported by agricultural development organizations, incubators, and industry bodies across West Africa:
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
- **Head Office**: No. 31 Ogbojo Koo Street, Ogbojo - East Legon, Accra, Ghana
- **Phone / WhatsApp**: +233 (0) 24 095 6276 / +233 (0) 50 123 4567

---

<div align="center">
  <small>&copy; 2026 Agro Innova Company Limited. All rights reserved.</small>
</div>
