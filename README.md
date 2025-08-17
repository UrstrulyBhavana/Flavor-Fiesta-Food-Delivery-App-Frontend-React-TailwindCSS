🛒 Flavour Fiesta – React Food Ordering App
<p align="center"> <img src="https://img.shields.io/badge/Made%20with-%F0%9F%92%96%20by%20Bhavana-brightgreen?style=for-the-badge" alt="Made with Love by Bhavana" /> </p> <p align="center"> <a href="#demo">Demo</a> • <a href="#features">Features</a> • <a href="#tech-stack">Tech Stack</a> • <a href="#architecture--routes">Architecture</a> • <a href="#installation">Installation</a> • <a href="#usage">Usage</a> • <a href="#testing">Testing</a> • <a href="#api--data">API & Data</a> • <a href="#accessibility--ux">Accessibility</a> </p>

Overview
Flavour Fiesta is a responsive React app for discovering local restaurants, browsing menus, and ordering food. It emphasizes performance (shimmer/skeletons, lazy UI), clarity (search, filters, categories), and robustness (API ↔ Mock switch with graceful fallback).


Demo
Click to watch the video walkthrough:


I’ll also be posting this demo on YouTube and LinkedIn.


Features
Data modes (with on-screen badge)
🌐 API mode – Live data from the proxy-backed Swiggy endpoints.

📦 Mock mode – Force mock JSON for predictable demos.

🛟 Auto fallback (mock) – If the API fails or returns an empty payload, we automatically switch to mock (clearly indicated).

Core UX
Restaurant list with search + Top Rated filter.

Restaurant menu with collapsible categories (smooth transitions).

Add to cart from menus; Remove item (per row) and Clear cart in the cart page.

Online status indicator (header).

Shimmer (skeleton) while loading; mobile centered & fully responsive.

Badges show current data source (API / Mock / Fallback) on both list and menu views.


Pages & Components
Home (restaurant listing)

Restaurant Menu (with categories & items)

Cart (remove by row + clear cart)

About (mission, values, process)

FAQ (category accordions + inline search)

Contact (SweetAlert success feedback)

Header & Footer (sticky header, nav links, cart count badge)

ScrollToTop on route change

Error boundary for invalid routes


Engineering
Redux Toolkit for cart state (add, remove-by-index, clear).

Custom hooks:

useRestaurantMenu(resId, forceMock) → [resInfo, source]

useOnlineStatus() → online/offline boolean

Contexts:

MockContext (global toggle for mock mode)

UserContext (username wiring for future auth)

Utilities:

Centralized constants for CDN, API endpoints, proxy base, local detection.

Responsive Tailwind design and accessible semantics/ARIA.


Tech Stack
Frontend

React • React Router • Redux Toolkit

Tailwind CSS

Font Awesome & React Icons

Parcel (dev/build)

Tooling

Git & GitHub

(Optional) Jest + React Testing Library for unit tests

Architecture & Routes

Directory (key files)

src/
├─ components/
│  ├─ About.js
│  ├─ Body.js
│  ├─ Cart.js
│  ├─ Contact.js
│  ├─ Error.js
│  ├─ FAQ.js
│  ├─ Footer.js
│  ├─ Header.js
│  ├─ ItemList.js
│  ├─ RestaurantCard.js
│  ├─ RestaurantCategory.js
│  ├─ RestaurantMenu.js
│  ├─ ScrollToTop.js
│  ├─ Shimmer.js
│  └─ mocks/
│     ├─ mockResListData.json
│     └─ mockResMenu.json
├─ utils/
│  ├─ appStore.js
│  ├─ cartSlice.js
│  ├─ constants.js
│  ├─ MockContext.js
│  ├─ useOnlineStatus.js
│  ├─ useRestaurantMenu.js
│  └─ UserContext.js
├─ index.css
└─ main/App bootstrap (AppLayout + Router)



User.js and UserClass.js are legacy learning samples and are not used in the app; feel free to remove them if you want a leaner repo.

Routes
/ → Home (restaurant list)

/restaurants/:resId → Restaurant Menu

supports ?mock=1 to force mock for that restaurant

/about → About

/contact → Contact

/faq → FAQ

/cart → Cart

* → Error (fallback route)


Installation
Requires Node 18+

# 1) Clone
git clone https://github.com/UrstrulyBhavana/Food-Ordering-App.git
cd Food-Ordering-App

# 2) Install deps
npm install

# 3) Start dev server (Parcel)
npm run dev
# or if your package.json uses "start"
npm start

# 4) Build for production
npm run build

Usage
Home (List)
Use Mock Data checkbox toggles between API and Mock.

Badge on the right shows the active mode: API / Mock / Auto fallback.

Search filters by restaurant name.

Top Rated highlights places with rating ≥ 4.4.

Menu
Category accordions with smooth expand/collapse.

Add + button on each item adds to the cart (Redux).

Cart
Remove button (per row) and Clear Cart.

Cart count badge appears in the header (desktop + mobile).

About / FAQ / Contact
Polished content pages with consistent visual language.

Contact form uses SweetAlert2 for an instant success toast.


API & Data
All URLs are managed in src/utils/constants.js.

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



Proxy (Render) avoids CORS issues.

Local development can point to a local proxy on 5174.

Passing ?mock=1 to a menu route forces mock for that restaurant.



State & Data Flow
Redux Toolkit – cartSlice:

addItem(item)

removeItemByIndex(index) (used by Cart’s “Remove” buttons)

clearCart()

Hooks:

useRestaurantMenu(resId, forceMock) → returns [resInfo, source]

source: "api" | "mock" | "fallback"

fallback triggers if API fails or has empty payload

useOnlineStatus() – window online/offline tracking

Contexts:

MockContext – { useMock, setUseMock } shared app-wide

UserContext – { loggedInUser, setUserName } (ready for future auth)


Accessibility & UX
Semantic roles and alt text on images.

Buttons have aria-labels where helpful.

Reduced motion support for the shimmer:

motion-safe:animate-pulse

motion-reduce:animate-none

Keyboard-focus styles on interactive controls.

Shimmer grid uses auto-fit layout to center cards on all viewports.

Testing
If you keep unit tests in this repo:

npm test


Suggested coverage

Header (cart count, login/logout toggle)

Restaurant list (search, filter)

Restaurant menu (add to cart)

Restaurant category (accordion behavior)

ItemList (add/remove)

Shimmer renders

Error route


Screens & Flow (Quick Tour)
Home – List fetched; toggle Use Mock Data; search & top-rated filter.

Menu – Collapsible categories; add items.

Cart – Remove single row or clear all.

About – Mission, values, how it works.

FAQ – Category accordions + search.

Contact – Form with SweetAlert success.

Badges – Data mode is always visible (API / Mock / Fallback).

Notes & Tips
Render’s free tier can sleep—first API call may take a few seconds to warm up.

If you don’t need the legacy User.js/UserClass.js, remove them to keep the repo tidy.


Contributions
Built and maintained by Linga Bhavana. PRs and suggestions are welcome!

Contact
Email: urstrulybhavana1432@gmail.com

GitHub: @UrstrulyBhavana

License
This project is licensed under the MIT License. See LICENSE for details.

(Optional) README Badge Strip
You can add these badges at the top if you like:


![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/-Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Parcel](https://img.shields.io/badge/-Parcel-BCC2D4?logo=parcel&logoColor=white)
