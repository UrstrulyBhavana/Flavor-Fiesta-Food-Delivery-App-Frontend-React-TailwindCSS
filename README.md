# 🛒 Flavour Fiesta – React Food Ordering App

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-%F0%9F%92%96%20by%20Bhavana-brightgreen?style=for-the-badge" alt="Made with Love by Bhavana" />
</p>

<p align="center">
  <a href="#demo">Demo</a> •
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#architecture--routes">Architecture & Routes</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#api--data">API & Data</a> •
  <a href="#state--data-flow">State & Data Flow</a> •
  <a href="#accessibility--ux">Accessibility & UX</a> •
  <a href="#testing">Testing</a> •
  <a href="#server--proxy">Server / Proxy</a> •
  <a href="#deploy-netlify-spa">Deploy</a> •
  <a href="#whats-new">What’s New</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#contact">Contact</a> •
  <a href="#license">License</a>
</p>

---

## 🎬 Demo

- **Live (Netlify):** _add your Netlify URL here_
- **Video:** https://youtu.be/Q5SOcvposZM

---

## Overview

**Flavour Fiesta** is a modern, responsive React app to discover nearby restaurants, browse menus, and add dishes to a cart.  
It focuses on:
- **Performance** — shimmer/skeletons, abort stale requests, lazy UI.
- **Clarity** — search, filters, category accordions, source badges.
- **Reliability** — **API ↔ Mock** with **auto-fallback** when the API sleeps or returns empty.

The app clearly shows **API / Mock / Fallback** badges on key screens, ships with polished content pages (**About / FAQ / Contact**), and uses a tiny **proxy** to avoid CORS issues.

---

## Features

### Data Modes (always labeled with a badge)
- **🌐 API** — live data via proxy-backed endpoints.
- **📦 Mock** — force local JSON for predictable demos.
- **🛟 Fallback** — automatic switch to Mock if API fails/returns empty.

### Core UX
- **Home (Restaurant List)** — search by name, **Top Rated** filter, **Use Mock Data** toggle, data-source badge.
- **Restaurant Menu** — collapsible **category accordions**; **Add +** per item; per-restaurant `?mock=1` override.
- **Cart** — list with images; **Remove (per row)** by index and **Clear Cart**.
- **Online Status** — visible indicator in header.
- **Shimmer** — centered, responsive skeleton grid that respects reduced motion.
- **ScrollToTop** — resets scroll on route change.

### Content Pages
- **About** — mission, values, how it works.
- **FAQ** — category accordions + keyword search.
- **Contact** — SweetAlert2 success toast.

---

## Tech Stack

**Frontend**
- React, React Router v6
- Redux Toolkit (cart)
- TailwindCSS
- Font Awesome / React Icons
- Parcel (dev/build)

**Testing (optional)**
- Jest + React Testing Library

**Infra**
- Netlify (SPA deploy)
- Render (proxy) or local Express proxy

---

## Architecture & Routes

### Directory (key files)

```
flavorfiesta-frontend
├── dist/                         # production build (Netlify deploy target)
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Body.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantMenu.js
│   │   ├── RestaurantCategory.js
│   │   ├── ItemList.js
│   │   ├── Cart.js
│   │   ├── Shimmer.js
│   │   ├── About.js
│   │   ├── FAQ.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Error.js
│   │   ├── ScrollToTop.js
│   │   └── mocks/
│   │       ├── mockResListData.json
│   │       └── mockResMenu.json
│   └── utils/
│       ├── appStore.js
│       ├── cartSlice.js
│       ├── constants.js
│       ├── MockContext.js
│       ├── useOnlineStatus.js
│       └── useRestaurantMenu.js
├── index.html
├── index.css
├── package.json
└── README.md
```
---

### 🛠️ Built With

#### Technologies Used:
![React](https://img.shields.io/badge/React-18/19-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?logo=redux&logoColor=white)
![React Router v6](https://img.shields.io/badge/React%20Router-v6-CA4245?logo=reactrouter&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Parcel](https://img.shields.io/badge/Bundler-Parcel-000000?logo=parcel&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11.x-FF6F61)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

---


> `User.js` and `UserClass.js` were practice components and are no longer used (safe to delete).

### Routes

- `/` → **Home (Body)**
- `/restaurants/:resId` → **Restaurant Menu** (supports `?mock=1`)
- `/about` → **About**
- `/contact` → **Contact**
- `/faq` → **FAQ**
- `/cart` → **Cart**
- `*` → **Error** (route fallback)

---

## Installation

> Works with Node **14+**. (Node 18+ recommended.)

```bash
# 1) Clone
git clone https://github.com/UrstrulyBhavana/Food-Ordering-App.git
cd Food-Ordering-App

# 2) Install deps
npm install

# 3) Start dev server (Parcel)
npm run dev
# or
npm start

# 4) Build for production
npm run build
```
---

### Usage

#### Home

Toggle Use Mock Data to switch modes (API/Mock).

Source badge shows the active mode (API / Mock / Fallback).

Search filters by restaurant name.

#### Restaurant Menu

Category accordions with smooth expand/collapse.

Add + adds an item to the cart (Redux).

Append ?mock=1 to force mock data for this restaurant.

#### Cart

Remove a single row (index-based).

Clear Cart empties everything.

Cart count badge appears in the header.

#### Content Pages

About / FAQ / Contact share consistent visual style.

Contact uses SweetAlert2 for success feedback.

Top Rated filters by rating (≥ 4.4).

---

## API & Data

All URLs are defined in src/utils/constants.js:

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const LOGO_URL =
  "https://static.vecteezy.com/system/resources/previews/001/936/506/non_2x/chef-girl-smiling-happy-and-cooking-with-love-in-her-kitchen-vector.jpg";

export const IS_LOCAL =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

export const PROXY_BASE = "https://flavorfiesta-proxy.onrender.com";

export const LIST_API = IS_LOCAL
  ? "http://localhost:5174/api/restaurants"
  : `${PROXY_BASE}/api/restaurants`;

export const Menu_API = IS_LOCAL
  ? "http://localhost:5174/api/menu?resId="
  : `${PROXY_BASE}/api/menu?resId=`;

---

### Notes

    The proxy avoids CORS issues.

    Local development can run a local proxy on 5174 (auto-selected via IS_LOCAL).

    Add ?mock=1 to a menu route to force mock for that restaurant.

---

### State & Data Flow

  #### Redux Toolkit – cartSlice

    addItem(item)

    removeItemByIndex(index) — used by Cart Remove button

    clearCart()

### Custom Hooks

#### useRestaurantMenu(resId, forceMock) → [resInfo, source]

    source is "api" | "mock" | "fallback".

    Uses AbortController and auto-fallback when API fails/returns empty.

#### useOnlineStatus() — window online/offline detection.

### Context

MockContext — { useMock, setUseMock } shared app-wide.

UserContext — { loggedInUser, setUserName } (ready for future auth).

### Accessibility & UX

    Semantic roles and descriptive alt text on images.

    Buttons include aria-labels where helpful.

    Keyboard focus styles on interactive controls.

    Shimmer honors reduced motion:

  motion-safe:animate-pulse
  motion-reduce:animate-none

  Shimmer grid uses auto-fit layout to center cards on all viewports.

  ScrollToTop on route changes.

  ---

  ### Suggested coverage

Header (cart count, login toggle)

Restaurant list (search, top-rated filter)

Restaurant menu (add to cart)

Restaurant category (accordion behavior)

ItemList (add/remove)

Shimmer renders correctly

Error route renders a friendly fallback

---

### Server / Proxy

To avoid CORS and keep the client clean, the app uses a tiny proxy (Render or local) mapped as:

GET /api/restaurants — restaurant list

GET /api/menu?resId=<id> — restaurant menu

Local development: client auto-targets a local proxy at http://localhost:5174 when running on localhost.

Production: client uses the Render URL defined as PROXY_BASE.

---

Deploy (Netlify SPA)

1. Create a file named _redirects in the project root with:

 /*  /index.html  200

2. Build
   
  npm run build    # outputs to /dist

  ---

  What’s New

Data-source badge (API / Mock / Fallback) on key pages.

Use Mock Data toggle + per-restaurant ?mock=1 override.

useRestaurantMenu now returns [resInfo, source] and includes abort + fallback logic.

Cart supports per-row Remove and Clear Cart.

Shimmer redesigned (centered, auto-fit, accessible).

FAQ includes keyword search.

Contact uses SweetAlert2 success toast.

ScrollToTop added for smoother navigation.

Netlify SPA _redirects docs added.

Removed legacy User.js / UserClass.js.

---

### Contact

Linga Bhavana — Frontend Developer

Email: urstrulybhavana1432@gmail.com

GitHub: https://github.com/UrstrulyBhavana

--- 

#### License

Licensed under the MIT License. See LICENSE for details.





    


    
