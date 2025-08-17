# 🛒 Flavour Fiesta – React Food Ordering App

<p align="center"> 
  <img src="https://img.shields.io/badge/Made%20with-%F0%9F%92%96%20by%20Bhavana-brightgreen?style=for-the-badge" alt="Made with Love by Bhavana" /> 
</p> 

<p align="center"> 
  <a href="#demo">Demo</a> • 
  <a href="#features">Features</a> • 
  <a href="#tech-stack">Tech Stack</a> • 
  <a href="#architecture--routes">Architecture</a> • 
  <a href="#installation">Installation</a> • 
  <a href="#usage">Usage</a> • 
  <a href="#testing">Testing</a> • 
  <a href="#api--data">API & Data</a> • 
  <a href="#accessibility--ux">Accessibility</a> 
</p>

---

## 📽️ Demo
Click to watch the video walkthrough:  

*(I’ll also be posting this demo on YouTube and LinkedIn.)*

---

## 🧾 Overview
Flavour Fiesta is a responsive React app for discovering local restaurants, browsing menus, and ordering food. It emphasizes:

- **Performance** → shimmer/skeletons, lazy UI  
- **Clarity** → search, filters, categories  
- **Robustness** → API ↔ Mock switch with graceful fallback  

---

## ✨ Features

### 🔄 Data Modes
- 🌐 **API mode** – Live data from proxy-backed Swiggy endpoints.  
- 📦 **Mock mode** – Force mock JSON for predictable demos.  
- 🛟 **Auto fallback** – If API fails, app switches to mock automatically.  

### 🖥️ Core UX
- Restaurant list with **search + Top Rated filter**  
- Restaurant menu with **collapsible categories**  
- **Cart page** with add/remove/clear functionality  
- **Online status indicator** in header  
- **Shimmer (skeleton UI)** while loading  
- **Badges** show data source mode (API / Mock / Fallback)  

### 📑 Pages & Components
- **Home** → Restaurant listing  
- **Restaurant Menu** → Collapsible categories & items  
- **Cart** → Remove items by row or clear all  
- **About / FAQ / Contact** → Static pages with consistent layout  
- **Header & Footer** → Sticky header with cart count badge  
- **ScrollToTop** → Auto scroll reset on route change  
- **Error** → Boundary page for invalid routes  

---

## ⚙️ Engineering

- **Redux Toolkit** → cart state (add/remove/clear)  
- **Custom Hooks**:
  - `useRestaurantMenu(resId, forceMock)` → [resInfo, source]  
  - `useOnlineStatus()` → online/offline status  
- **Contexts**:
  - `MockContext` → global toggle for mock mode  
  - `UserContext` → username wiring (future auth ready)  
- **Utilities**:
  - Centralized constants for CDN, API endpoints, proxy  
- **Design**:
  - Tailwind CSS responsive & semantic design  

---

## 🛠️ Tech Stack

**Frontend**  
- React • React Router • Redux Toolkit  
- Tailwind CSS  
- Font Awesome & React Icons  
- Parcel (dev/build)  

**Tooling**  
- Git & GitHub  
- (Optional) Jest + React Testing Library  

---

## 🏗️ Architecture & Routes

**Directory (key files)**

```
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

```
---


---

## ⚡ Installation

Requires **Node 18+**

```bash
# 1) Clone
git clone https://github.com/UrstrulyBhavana/Food-Ordering-App.git
cd Food-Ordering-App

# 2) Install deps
npm install

# 3) Start dev server
npm run dev
# or
npm start

# 4) Build for production
npm run build
```
---
##▶️ Usage
### 🏠 Home

Mock Data checkbox → toggle API vs Mock

Badge shows current mode (API / Mock / Fallback)

Search by restaurant name

Top Rated → filter ≥ 4.4

### 📋 Menu

Category accordions with transitions

Add item button → Redux cart

### 🛒 Cart

Remove item per row

Clear all items

Cart count visible in header

### 📄 About / FAQ / Contact

Static content pages

Contact → SweetAlert2 success toast

