# 🛒 Flavor Fiesta – React Food Ordering App

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-%F0%9F%92%96%20by%20Bhavana-brightgreen?style=for-the-badge" alt="Made with Love by Bhavana" />
</p>

<p align="center">

[🎥 Demo](#-demo) •
[🔎 Overview](#-overview) •
[✨ Features](#-features) •
[🧑‍💻 Tech Stack](#-tech-stack) •
[📂 Architecture & Routes](#-architecture--routes) •
[🌐 Server / Proxy](#-server--proxy) •
[⚙️ Installation](#️-installation) •
[🚀 Usage](#-usage) •
[🔗 API & Data](#-api--data) •
[🔄 State & Data Flow](#-state--data-flow) •
[♿ Accessibility & UX](#-accessibility--ux) •
[🧪 Testing](#-testing) •
[📱 Screens & Flow](#-screens--flow-quick-tour) •
[📝 Notes](#-notes--tips) •
[🤝 Contributions](#-contributions) •
[📬 Contact](#-contact) •
[📄 License](#-license)

</p>

---

## 📽️ Demo

Click to watch the video walkthrough:

[![Flavor Fiesta Demo](https://img.youtube.com/vi/Q5SOcvposZM/0.jpg)](https://youtu.be/Q5SOcvposZM)

---

## 🔎 Overview

**Flavor Fiesta** is a responsive **React food ordering app** that connects users to nearby restaurants, allows them to browse menus, and place orders with ease.  

It is designed to be **portfolio-ready and production-friendly**, featuring:  
- **Robust data handling**: API, Mock, and Auto Fallback modes.  
- **CORS-safe proxy** hosted on Render for Swiggy API integration.  
- **Performance-first UI** with shimmer loaders & lazy rendering.  
- **Modern UX**: sticky header, responsive design, collapsible categories, and polished footer.  
- **Solid engineering**: Redux Toolkit for cart state, Context for global toggles, and custom hooks for online status & menu fetches.  

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

## 🚀 Usage

### 🏠 Home
- Toggle **Mock Mode** or use live **API Mode**.  
- Search restaurants by name.  
- Filter restaurants by **Top Rated** (≥ 4.4 rating).  
- Badge clearly shows active mode: **API / Mock / Fallback**.  

### 🍽️ Restaurant Menu
- Categories expand/collapse smoothly.  
- **Add +** button adds items to the cart via Redux.  

### 🛒 Cart
- Remove items row-by-row (index-based).  
- **Clear Cart** empties all items.  
- Cart count badge visible in the header.  

### 📞 Contact
- Contact form triggers a **SweetAlert2 toast** on success.  

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
- ?mock=1 on a menu route forces mock data.

- Proxy ensures CORS-free API fetches.

---

## 🗂 State & Data Flow

- **Redux Toolkit** manages global state.
  
- **Slices**:  
  - `cartSlice.js` → manages cart items  
  - `userSlice.js` → handles user authentication & preferences
    
- **Context API** for app-wide settings (light usage).
  
- **Custom Hooks**:  
  - `useRestaurantMenu` → fetches & caches menu data  
  - `useOnlineStatus` → tracks connectivity  
  - `useBodyMockToggle` → toggles between API & mock data  

---

## ♿ Accessibility & UX

- Shimmer UI (skeleton loaders) for smooth loading.

- Lazy loading images with placeholders.

- Keyboard navigation supported.

- Semantic HTML used across components.

- Screen reader friendly with proper ARIA labels.

---

## 💡 Notes & Tips

- The hosted demo runs on Render free tier.

- Render servers enter sleep mode after inactivity, so the first load may take ~30–60 seconds.

- After that, it runs smoothly.

---

### 🧪 Testing

npm test

---

#### Suggested Test Coverage

- Header → cart badge, login/logout toggle

- Restaurant list → search & filter

- Menu → add to cart

- Cart → remove per row, clear all

- Shimmer → loading state

- Error → fallback route

- FAQ → accordion expand/collapse

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
