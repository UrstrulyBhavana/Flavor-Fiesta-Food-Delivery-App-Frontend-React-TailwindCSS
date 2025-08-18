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
  <a href="#server--proxy">Server / Proxy</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#api--data">API & Data</a> •
  <a href="#state--data-flow">State & Data Flow</a> •
  <a href="#accessibility--ux">Accessibility & UX</a> •
  <a href="#testing">Testing</a> •
  <a href="#screens--flow-quick-tour">Screens & Flow</a> •
  <a href="#notes--tips">Notes</a> •
  <a href="#contributions">Contributions</a> •
  <a href="#contact">Contact</a> •
  <a href="#license">License</a>
</p>

---

## 📽️ Demo

Click to watch the video walkthrough:

[![Flavour Fiesta Demo](https://img.youtube.com/vi/Q5SOcvposZM/0.jpg)](https://youtu.be/Q5SOcvposZM)

---

## 🔎 Overview

**Flavour Fiesta** is a modern, mobile-first food ordering app built with **React**.  
It connects users with nearby restaurants, lets them browse menus, and order food seamlessly with a **fast, polished UI**.

The app is designed to be **portfolio & production-ready**, with:
- A **robust data layer** (API, Mock, Auto Fallback).
- A **Render-hosted proxy** to solve CORS issues.
- **Performance-first UI**: shimmer loaders, smooth category transitions.
- **Modern UX**: sticky header, responsive design, CTA footer, consistent branding.
- **Strong engineering practices**: Redux Toolkit, contexts, and custom hooks.

---

## ✨ Features

### 🔄 Data Modes (with badges)
- 🌐 **API Mode** — live restaurant & menu data via proxy-backed Swiggy API.  
- 📦 **Mock Mode** — force local JSON for predictable demos (`?mock=1` or toggle on Home).  
- 🛟 **Auto Fallback Mode** — automatically switches to mock if API fails or is empty.  

### 💡 Core UX
- **Restaurant List**: Search & “Top Rated” filter.  
- **Restaurant Menu**: Collapsible accordions per category with **Add +** buttons.  
- **Cart**: Remove per row or clear entire cart.  
- **Online Status**: Real-time indicator in header.  
- **Shimmer Loading**: Responsive skeleton UI while fetching data.  

### 📑 Pages & Components
- **Home (Body)** – restaurant listing  
- **Restaurant Menu** – collapsible categories & items  
- **Cart** – add, remove (per row), clear cart  
- **About** – mission, values, how it works  
- **FAQ** – category accordions + inline search  
- **Contact** – SweetAlert2 success feedback  
- **Header** – sticky, cart badge, nav links  
- **Footer** – CTA strip & quick links  
- **ScrollToTop** – auto scroll reset on route change  
- **Error** – graceful invalid route fallback  

### 🛠 Engineering Highlights
- **Redux Toolkit** — cart state management (add, remove-by-index, clear).  
- **Custom Hooks** — `useOnlineStatus`, `useRestaurantMenu` (with source & fallback).  
- **Context API** — `MockContext` (global toggle), `UserContext` (future auth).  
- **Centralized constants** — CDN, logo, proxy base, API endpoints.  
- **Responsive TailwindCSS** — utility-first, ARIA roles, accessibility-friendly.  

---

## 🧑‍💻 Tech Stack

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/-Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Parcel](https://img.shields.io/badge/-Parcel-BCC2D4?logo=parcel&logoColor=white)
![Font Awesome](https://img.shields.io/badge/-Font_Awesome-528DD7?logo=font-awesome&logoColor=white)
![React Icons](https://img.shields.io/badge/-React_Icons-E91E63?logo=react&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/-SweetAlert2-3085d6?logo=javascript&logoColor=white)
![Render](https://img.shields.io/badge/-Render-46E3B7?logo=render&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/-React_Testing_Library-E33332?logo=testinglibrary&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)

**Frontend**
- React • React Router • Redux Toolkit  
- Tailwind CSS • Font Awesome • React Icons  
- Parcel (dev/build tool)

**Tooling**
- Git & GitHub  
- (Optional) Jest + React Testing Library  

---

## 📂 Architecture & Routes

### Directory (key files)

```bash
src/
├── components/
│ ├── About.js
│ ├── Body.js
│ ├── Cart.js
│ ├── Contact.js
│ ├── Error.js
│ ├── FAQ.js
│ ├── Footer.js
│ ├── Header.js
│ ├── ItemList.js
│ ├── RestaurantCard.js
│ ├── RestaurantCategory.js
│ ├── RestaurantMenu.js
│ ├── ScrollToTop.js
│ ├── Shimmer.js
│ └── mocks/
│ ├── mockResListData.json
│ └── mockResMenu.json
├── utils/
│ ├── appStore.js
│ ├── cartSlice.js
│ ├── constants.js
│ ├── MockContext.js
│ ├── useOnlineStatus.js
│ ├── useRestaurantMenu.js
│ └── UserContext.js
├── index.css
└── App bootstrap (AppLayout + Router)
```

> Note: `User.js` and `UserClass.js` are **legacy demos** and not used anymore. Safe to remove.

### Routes
- `/` → Home (restaurant list)  
- `/restaurants/:resId` → Restaurant Menu (supports `?mock=1`)  
- `/about` → About page  
- `/contact` → Contact form  
- `/faq` → FAQ page  
- `/cart` → Cart page  
- `*` → Error fallback  

---

## 🌐 Server / Proxy

- Proxy hosted on **Render** to bypass Swiggy CORS restrictions.  
- Local dev can use `http://localhost:5174/api`.  
- API URLs & constants are defined in `utils/constants.js`.  

---

## ⚙️ Installation

> Requires **Node.js 18+**

```bash
# 1) Clone
git clone https://github.com/UrstrulyBhavana/Food-Ordering-App.git
cd Food-Ordering-App

# 2) Install dependencies
npm install

# 3) Start dev server
npm run dev
# or
npm start

# 4) Build for production
npm run build
```
---

🚀 Usage:
Home

. Toggle Mock Mode or use API.

. Search restaurants by name.

. Filter by Top Rated (≥ 4.4 rating).

. Badge always shows current mode (API / Mock / Fallback).

Menu

. Categories open/close smoothly.

. Add + button adds item to cart (Redux).

Cart

. Remove items per row (index-based).

. Clear entire cart.

. Cart count shown in header badge.

Contact

. Contact form triggers SweetAlert2 toast on success.
---

## 🔗 API & Data

``` bash
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const LOGO_URL =
  "https://static.vecteezy.com/.../chef-girl-smiling.jpg";

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
```
?mock=1 on a menu route forces mock data.

Proxy ensures CORS-free API fetches.
---

### 🔄 State & Data Flow
#### Redux Slice (cartSlice.js)

. addItem(item)

. removeItemByIndex(index)

. clearCart()

#### Hooks

. useRestaurantMenu(resId, forceMock) → [resInfo, source]

. source: "api" | "mock" | "fallback"

. useOnlineStatus() → online/offline boolean

#### Context

MockContext – { useMock, setUseMock }

UserContext – { loggedInUser, setUserName }

## ♿ Accessibility & UX

. Semantic roles & alt text on images.

. Buttons have aria-labels.

. Shimmer respects reduced motion:

    motion-safe:animate-pulse

    motion-reduce:animate-none

. Focus-visible styles for keyboard navigation.

. Auto-centered responsive grid layouts.

---

### 🧪 Testing

npm test

---

#### Suggested Test Coverage

. Header → cart badge, login/logout toggle

. Restaurant list → search & filter

. Menu → add to cart

. Cart → remove per row, clear all

. Shimmer → loading state

. Error → fallback route

. FAQ → accordion expand/collapse

---

#### 📱 Screens & Flow (Quick Tour)

1. Home – search, top-rated filter, toggle mock/API.

2. Menu – collapsible categories, add items.

3. Cart – remove per row, clear all.

4. About – mission, values, process.

5. FAQ – category accordions + inline search.

6. Contact – SweetAlert2 toast on submit.

7. Badges – always indicate API / Mock / Fallback.

---

#### 📝 Notes & Tips

. Render free tier may sleep — first API call could take a few seconds.

. Legacy User.js & UserClass.js can be deleted to clean repo.

---

#### 🤝 Contributions

Built and maintained by Linga Bhavana.
PRs and suggestions welcome!

---

### 📬 Contact

For questions or suggestions, feel free to contact me:
- **Email**: urstrulybhavana1432@gmail.com
- **GitHub**: [UrstrulyBhavana](https://github.com/UrstrulyBhavana)

---

### 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
```
