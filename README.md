Thought for 20s
🍽️ Flavour Fiesta – React Food Ordering App
<p align="center"> <img src="https://img.shields.io/badge/React-18/19-61DAFB?logo=react&logoColor=white&style=for-the-badge" /> <img src="https://img.shields.io/badge/Redux%20Toolkit-764abc?logo=redux&logoColor=white&style=for-the-badge" /> <img src="https://img.shields.io/badge/TailwindCSS-06b6d4?logo=tailwindcss&logoColor=white&style=for-the-badge" /> <img src="https://img.shields.io/badge/Router-v6-CA4245?logo=reactrouter&logoColor=white&style=for-the-badge" /> <img src="https://img.shields.io/badge/Bundler-Parcel-000000?logo=parcel&logoColor=white&style=for-the-badge" /> </p>
🎬 Demo

🧾 Overview

Flavour Fiesta is a polished, mobile-first React app for discovering nearby restaurants, browsing real menus, and placing items in a cart with a smooth, reliable UX. The app supports API, Mock, and Fallback data modes (clearly shown as a badge on pages), includes a tiny proxy to avoid CORS, and ships with content pages (About / FAQ / Contact), a responsive shimmer loader, and thoughtful accessibility.

✨ Features

Restaurant list (Home) — Fetched via proxy; search by name, Top Rated filter, Use Mock Data toggle.

Restaurant menu — Collapsible category accordions; add items to cart; per-restaurant ?mock=1 override.

Cart — Full item details with image; Remove (per row) and Clear Cart.

Badges & data modes — Always shows API / Mock / Fallback so reviewers know the data source.

Shimmer loading — Centered, responsive skeletons that respect reduced-motion preferences.

About, FAQ, Contact — Consistent visual language; FAQ has category accordions + keyword search; Contact uses SweetAlert2 for success toast.

Reliability — Automatic fallback to mock data if API sleeps or returns empty; aborts inflight requests on route changes.

Accessibility & UX — Semantic roles, alt text, aria-labels, keyboard focus rings, ScrollToTop on route change.

Responsive — TailwindCSS layout scales from mobile to desktop beautifully.

🧩 Screens & Components

Header — Brand, online status, cart badge, nav links (mobile friendly).

Body (Home) — Restaurant list grid, search, top-rated filter, Use Mock Data toggle, and a source badge.

RestaurantCard — Compact card with image, name, cuisines, rating, ETA, and cost.

RestaurantMenu — Menu header + badge (API/Mock/Fallback) + list of RestaurantCategory accordions.

RestaurantCategory — Accordion section that renders ItemList for its items.

ItemList

Menu mode (default): shows Add +.

Cart mode: hides Add, shows Remove button per row.

Cart — Renders selected items via ItemList in cart mode; Clear Cart empties store.

Shimmer — Auto-fit skeleton grid to avoid “left bias” on small screens.

About — Mission, What We Do, How It Works, Values.

FAQ — Four categories (Ordering, Payments & Refunds, Delivery, Account & Support) + search.

Contact — Name/email/message form; SweetAlert2 success toast.

Footer — “Start Ordering” CTA band + footer links/socials.

Error — Friendly route error boundary.

ScrollToTop — Smoothly resets scroll on route changes.

🧠 State, Data & Context

Redux Toolkit (cartSlice)

addItem(item) — push to cart

removeItemByIndex(index) — remove a single row (used by Cart’s Remove)

clearCart() — empty cart

Custom hooks

useRestaurantMenu(resId, forceMock) → [resInfo, source]

source is "api" | "mock" | "fallback"

Falls back when API fails/returns empty; aborts previous fetch with AbortController

useOnlineStatus() — tracks window online/offline

Contexts

MockContext — { useMock, setUseMock } (Home toggle + Menu routing)

UserContext — { loggedInUser, setUserName } (ready for future auth)

🌐 API & Constants

All URLs live in src/utils/constants.js.

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const LOGO_URL =
  "https://static.vecteezy.com/system/resources/previews/001/936/506/non_2x/chef-girl-smiling-happy-and-cooking-with-love-in-her-kitchen-vector.jpg";

export const IS_LOCAL =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
   window.location.hostname === "127.0.0.1");

export const PROXY_BASE = "https://flavorfiesta-proxy.onrender.com";

export const LIST_API = IS_LOCAL
  ? "http://localhost:5174/api/restaurants"
  : `${PROXY_BASE}/api/restaurants`;

export const Menu_API = IS_LOCAL
  ? "http://localhost:5174/api/menu?resId="
  : `${PROXY_BASE}/api/menu?resId=`;


Notes

Render proxy avoids CORS issues.

Local dev can run a local proxy on 5174 (client switches automatically via IS_LOCAL).

Append ?mock=1 to a menu route to force mock for that restaurant.

🧱 Server / Proxy

To keep the client clean and avoid CORS, a tiny Express proxy (Render or local) exposes:

GET /api/restaurants — restaurant list

GET /api/menu?resId=<id> — restaurant menu

Local development: the client auto-targets http://localhost:5174 when running on localhost.
Production: the client uses PROXY_BASE (Render) from constants.js.

📁 Folder Structure
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


Note: User.js and UserClass.js were practice components and are no longer used.

🚀 Getting Started
1) Clone
git clone https://github.com/UrstrulyBhavana/Food-Ordering-App.git
cd Food-Ordering-App

2) Install
npm install

3) Run (client)
npm start        # parcel index.html
# or
npm run dev

4) (Optional) Run local proxy on 5174
npm run proxy    # node server.js  (if you keep your proxy in this repo)
# or `npm run dev:api` if you use nodemon

5) Build
npm run build    # outputs to /dist

🌍 Deploy (Netlify SPA)

Create a file named _redirects in the project root and copy it into dist/ after building.

/*  /index.html  200


Netlify → “Add new site” → Deploy manually → drag-and-drop the dist/ folder.

Test deep links like /cart or /restaurants/123 (the _redirects rule handles them).

🧪 Testing (suggested)
npm test


Suggested coverage:

Header (cart count, login toggle), Body (search & top-rated)

RestaurantMenu (add to cart), RestaurantCategory (accordion)

ItemList (add / per-row remove), Cart (clear all)

Shimmer count/layout, Error route/element

♿ Accessibility & UX

Semantic roles and labels; meaningful alt text.

Buttons include helpful aria-labels.

Reduced motion support on shimmer:

motion-safe:animate-pulse

motion-reduce:animate-none

Keyboard focus rings on interactive controls.

Shimmer auto-fit grid keeps skeletons centered on all viewports.

🔧 Troubleshooting

First call slow? Render’s free tier can sleep; first API hit may take a few seconds.

CORS? Ensure you call the proxy (/api/...) and your proxy is running (local) or deployed (Render).

Menu shows “Mock” or “Fallback”? That’s expected when API fails or returns empty. Toggle Use Mock Data on Home, or fix the proxy/API.

Netlify 404 on refresh? Make sure _redirects (with /* /index.html 200) is present in dist/.

🗺 Roadmap / Ideas

Real authentication + user profiles

Address management & saved carts

Sorting & advanced filters

Checkout flow & payment mock

Broader unit/integration test coverage

🔄 What’s New vs Older Version

Data-source badge (API / Mock / Fallback) on key pages

Use Mock Data toggle + per-restaurant ?mock=1 override

useRestaurantMenu returns [resInfo, source] with abort + fallback logic

Cart now supports per-row Remove and Clear Cart

Shimmer grid redesigned (centered, auto-fit, accessible)

FAQ now includes keyword search

Contact shows SweetAlert2 success toast

ScrollToTop on route change

Netlify SPA redirect docs and _redirects file

Removed legacy User.js / UserClass.js

👩‍💻 Author

Linga Bhavana — Frontend Developer
Email: urstrulybhavana1432@gmail.com
GitHub: @UrstrulyBhavana

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

You said:
bloody bitch is this arkdown thing 
ChatGPT said:
Thought for 18s

hey—i hear you. here’s a single, paste-ready, Markdown-only README for Flavour Fiesta (no HTML tags, no “Copy/Edit” junk). just copy everything below straight into README.md.

🍽️ Flavour Fiesta — React Food Ordering App










🎬 Demo

Watch the demo on YouTube

🧾 Overview

Flavour Fiesta is a polished, mobile-first React app for discovering nearby restaurants, exploring real menus, and adding dishes to a cart. It supports API, Mock, and Fallback data modes (clearly shown with a badge), uses a tiny proxy to avoid CORS, and includes content pages (About / FAQ / Contact), a responsive shimmer loader, and thoughtful accessibility.

✨ Features

Home (Restaurant List) — Search, Top Rated filter, Use Mock Data toggle, and a visible data source badge.

Restaurant Menu — Collapsible category accordions; per-restaurant ?mock=1 override; add items to cart.

Cart — Full item details with image; Remove (per row) and Clear Cart.

Reliability — Automatic fallback to mock data if the API sleeps/fails; aborts stale requests during navigation.

Shimmer — Centered, responsive skeleton grid that respects reduced-motion.

Content Pages — About (mission/values/how it works), FAQ (categories + keyword search), Contact (SweetAlert2 success toast).

Accessibility & UX — Semantic roles, alt text, aria-labels, focus rings, ScrollToTop on route change.

Responsive — TailwindCSS layout scales nicely from mobile to desktop.

🧩 Screens & Components

Header — Brand, online status, cart badge, navigation.

Body (Home) — Restaurant grid, search bar, top-rated filter, mock toggle, data source badge.

RestaurantCard — Image, name, cuisines, rating, ETA, cost.

RestaurantMenu — Menu header + source badge + RestaurantCategory accordions.

RestaurantCategory — Accordion with ItemList for that section’s items.

ItemList

Menu mode: shows Add + button.

Cart mode: hides Add; shows Remove per row.

Cart — Renders ItemList in cart mode; Clear Cart empties the store.

Shimmer — Auto-fit skeleton grid (no “left bias” on small screens).

About / FAQ / Contact / Footer / Error / ScrollToTop — Supporting UX & content.

🧠 State, Data & Context
Redux Toolkit — cartSlice

addItem(item) — add to cart

removeItemByIndex(index) — remove one row (used by Cart)

clearCart() — empty cart

Hooks

useRestaurantMenu(resId, forceMock) → [resInfo, source]

source is "api" | "mock" | "fallback"

Uses AbortController, falls back to mock when API fails/returns empty

useOnlineStatus() — tracks window online/offline

Contexts

MockContext — { useMock, setUseMock } (Home toggle + Menu routing)

UserContext — { loggedInUser, setUserName } (ready for future auth)

🌐 API & Constants

All URLs live in src/utils/constants.js.

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const LOGO_URL =
  "https://static.vecteezy.com/system/resources/previews/001/936/506/non_2x/chef-girl-smiling-happy-and-cooking-with-love-in-her-kitchen-vector.jpg";

export const IS_LOCAL =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
   window.location.hostname === "127.0.0.1");

export const PROXY_BASE = "https://flavorfiesta-proxy.onrender.com";

export const LIST_API = IS_LOCAL
  ? "http://localhost:5174/api/restaurants"
  : `${PROXY_BASE}/api/restaurants`;

export const Menu_API = IS_LOCAL
  ? "http://localhost:5174/api/menu?resId="
  : `${PROXY_BASE}/api/menu?resId=`;


Notes

The proxy avoids CORS.

In local dev, the client auto-targets a local proxy on 5174 based on IS_LOCAL.

Append ?mock=1 to a menu route to force mock for that restaurant.

🧱 Server / Proxy

A tiny Express proxy (local or Render) exposes:

GET /api/restaurants — restaurant list

GET /api/menu?resId=<id> — menu for a restaurant

Local: run it on port 5174.
Production: the client uses PROXY_BASE from constants.js.

📁 Folder Structure
flavorfiesta-frontend
├── dist/                         # production build (deploy to Netlify)
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


Legacy practice components User.js / UserClass.js were removed from the app.

🚀 Getting Started
# 1) Clone
git clone https://github.com/UrstrulyBhavana/Food-Ordering-App.git
cd Food-Ordering-App

# 2) Install
npm install

# 3) Run client (Parcel)
npm start   # or: npm run dev

# 4) (Optional) Run local proxy on 5174
npm run proxy       # node server.js
# or
npm run dev:api     # nodemon server.js

# 5) Build (outputs to /dist)
npm run build

🌍 Deploy (Netlify SPA)

Create a file named _redirects and add this single line:

/*  /index.html  200


Include it in your repo root and also ensure it is present in dist/ after npm run build.
Then on Netlify: Add new site → Deploy manually → drag & drop the dist/ folder.
Deep links like /cart or /restaurants/123 will work on refresh.

🧪 Testing (suggested)
npm test


Suggested coverage:

Header (cart count, login toggle), Body (search & top-rated)

RestaurantMenu (add to cart), RestaurantCategory (accordion)

ItemList (add / per-row remove), Cart (clear all)

Shimmer count/layout, Error route/element

♿ Accessibility & UX

Semantic roles, descriptive alt text, helpful aria-labels

Keyboard focus rings on interactive controls

Reduced motion support on shimmer:

motion-safe:animate-pulse

motion-reduce:animate-none

Shimmer auto-fit grid keeps skeletons centered on all viewports

🔧 Troubleshooting

First call slow? Render’s free tier can sleep; the first API hit may take a few seconds.

CORS? Ensure you call the proxy (/api/...) and that the proxy is running (local) or deployed (Render).

“Mock” or “Fallback” badge? Expected if API fails/returns empty. Toggle Use Mock Data on Home, or fix proxy/API.

Netlify 404 on refresh? _redirects with /* /index.html 200 must be present inside dist/.

🗺 Roadmap

Real authentication + user profiles

Address management & saved carts

Sorting & advanced filters

Checkout flow & payment mock

Broader unit/integration test coverage

🔄 What’s New (vs older version)

Data-source badge (API / Mock / Fallback) on key pages

Use Mock Data toggle + per-restaurant ?mock=1 override

useRestaurantMenu now returns [resInfo, source] with abort + fallback

Cart supports per-row Remove and Clear Cart

Shimmer redesigned (centered, auto-fit, accessible)

FAQ includes keyword search

Contact uses SweetAlert2 success toast

ScrollToTop added

Netlify SPA _redirects guidance

Removed legacy User.js / UserClass.js

👩‍💻 Author

Linga Bhavana — Frontend Developer
Email: urstrulybhavana1432@gmail.com
GitHub: @UrstrulyBhavana

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.



