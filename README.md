# Flavour Fiesta — React Food Ordering App 

A polished, mobile-first web app to discover restaurants, browse real menus, and add items to a cart.  
Built with React, Redux Toolkit, TailwindCSS, and a tiny proxy to avoid CORS. Clear **API / Mock / Fallback** badges make data sources obvious.

<p>
  <a href="https://react.dev/">React</a> •
  <a href="https://redux-toolkit.js.org/">Redux Toolkit</a> •
  <a href="https://tailwindcss.com/">TailwindCSS</a> •
  <a href="https://reactrouter.com/">React Router</a> •
  <a href="https://parceljs.org/">Parcel</a> •
  <a href="https://www.netlify.com/">Netlify</a>
</p>

---

## Contents

- [Demo](#demo)
- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture & Routes](#architecture--routes)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [API & Data](#api--data)
- [State & Data Flow](#state--data-flow)
- [Accessibility & UX](#accessibility--ux)
- [Testing](#testing)
- [Server / Proxy](#server--proxy)
- [Deploy (Netlify SPA)](#deploy-netlify-spa)
- [What’s New](#whats-new)
- [Roadmap](#roadmap)
- [Contact](#contact)
- [License](#license)

---

## Demo

- Live: _add your Netlify URL here_  
- Video: https://youtu.be/Q5SOcvposZM

---

## Overview

Flavour Fiesta focuses on:
- **Performance** — skeleton shimmer, abort stale requests, lean bundles.
- **Clarity** — search, “Top Rated” filter, category accordions, obvious data-source badges.
- **Reliability** — API ↔ Mock switch with **automatic fallback** if API sleeps or returns empty.

---

## Key Features

**Data modes (always labeled)**  
- **API** — live data via proxy-backed endpoints.  
- **Mock** — force local JSON for predictable demos (`Use Mock Data` or `?mock=1`).  
- **Fallback** — automatic switch to mock on errors/empty payload.

**Core UX**  
- Home: restaurant grid, search, **Top Rated** filter, **Use Mock Data** toggle, badge (API/Mock/Fallback).
- Menu: collapsible **category accordions**, **Add +** per item, optional `?mock=1`.
- Cart: list with images, **Remove** per row (index-based), **Clear Cart**.
- Header: brand, **online status**, cart count, nav.
- Shimmer: centered, responsive skeletons.
- ScrollToTop on route change.

**Content pages**  
- About (mission, values, “how it works”)  
- FAQ (category accordions + keyword search)  
- Contact (SweetAlert2 success toast)

---

## Architecture & Routes

src/
├─ components/
│ ├─ Header.js ├─ Footer.js
│ ├─ Body.js ├─ Shimmer.js
│ ├─ RestaurantCard.js ├─ RestaurantMenu.js
│ ├─ RestaurantCategory.js
│ ├─ ItemList.js ├─ Cart.js
│ ├─ About.js ├─ FAQ.js
│ ├─ Contact.js ├─ Error.js
│ ├─ ScrollToTop.js
│ └─ mocks/
│ ├─ mockResListData.json
│ └─ mockResMenu.json
├─ utils/
│ ├─ appStore.js ├─ cartSlice.js
│ ├─ constants.js ├─ MockContext.js
│ ├─ useOnlineStatus.js └─ useRestaurantMenu.js
├─ index.css
└─ App bootstrap (AppLayout + Router)



Routes:

- `/` → Home  
- `/restaurants/:resId` → Menu (supports `?mock=1`)  
- `/about`, `/faq`, `/contact`, `/cart`  
- `*` → Error (route fallback)

---

## Quick Start

> Node 14+ works; Node 18+ recommended.

```bash
# 1) Clone
git clone https://github.com/UrstrulyBhavana/Food-Ordering-App.git
cd Food-Ordering-App

# 2) Install
npm install

# 3) Run (Parcel)
npm run dev
# or
npm start

# 4) Build
npm run build
```
---

Usage

Home

Toggle Use Mock Data to switch API/Mock.

Badge shows API / Mock / Fallback.

Search by name; Top Rated filters rating ≥ 4.4.

Menu

Expand/collapse categories; Add + items to cart.

Use ?mock=1 to force mock for a restaurant.

Cart

Remove a single row (index-based) or Clear Cart.

Header shows cart count.

Content

About / FAQ / Contact have a consistent, accessible layout; Contact uses SweetAlert2 for success.

---
### API & Data

All URLs live in src/utils/constants.js:

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


#### Notes:

Proxy avoids CORS.

Local dev can run a local proxy on 5174 (client switches automatically via IS_LOCAL).

Append ?mock=1 to a menu route to force mock for that restaurant.

---

#### State & Data Flow

### Redux Toolkit — cartSlice

addItem(item)

removeItemByIndex(index) — used by Cart “Remove”

clearCart()

---

#### Hooks

useRestaurantMenu(resId, forceMock) → [resInfo, source]
source: "api" | "mock" | "fallback"; uses AbortController and auto-fallback.

useOnlineStatus() — window online/offline detection.

#### Context

MockContext — { useMock, setUseMock } (Home toggle + Menu routing)

UserContext — { loggedInUser, setUserName } (ready for future auth)

### Accessibility & UX

---

Semantic roles; descriptive alt text and useful aria-labels.

Keyboard focus styles on interactive controls.

Shimmer respects reduced motion:

motion-safe:animate-pulse

motion-reduce:animate-none

Shimmer grid uses auto-fit to keep skeletons centered on all viewports.

ScrollToTop on route changes.

---

#### Testing 

npm test

#### Suggested coverage:

Header (cart count, login toggle)

Body (search + top-rated filter)

RestaurantMenu (add to cart)

RestaurantCategory (accordion behavior)

ItemList (add / per-row remove)

Shimmer renders count/layout

Error route displays fallback

---

### Server / Proxy

A tiny Express proxy (Render or local) exposes:

GET /api/restaurants — restaurant list

GET /api/menu?resId=<id> — menu for a restaurant

Local development: client targets http://localhost:5174 on localhost.

Production: client uses the Render URL defined as PROXY_BASE.

---

### Deploy (Netlify SPA)

1. Create _redirects at the repo root with:
   /*  /index.html  200
   
2. Build:
 npm run build  # outputs to /dist

3. Netlify → Add new site → Deploy manually → drag-and-drop the dist/ folder.

Deep links like /cart or /restaurants/123 will work because of the _redirects rule.

---

### What’s New

Data-source badge (API / Mock / Fallback) on key pages.

Use Mock Data toggle + per-restaurant ?mock=1.

useRestaurantMenu returns [resInfo, source] and includes abort + fallback logic.

Cart supports per-row Remove and Clear Cart.

Shimmer redesigned (centered, auto-fit, accessible).

FAQ includes keyword search.

Contact uses SweetAlert2 success toast.

ScrollToTop added.

Netlify SPA _redirects guidance.

Removed legacy User.js / UserClass.js.

---

### Roadmap

Authentication & user profiles

Address management & saved carts

Sorting & advanced filters

Checkout flow & payment mock

Broader unit/integration tests

---

### Contact

Linga Bhavana — Frontend Developer

Email: urstrulybhavana1432@gmail.com

GitHub: https://github.com/UrstrulyBhavana

---

#### License

Licensed under the MIT License. See LICENSE for details.
