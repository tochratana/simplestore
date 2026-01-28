# E-Commerce Website

This is a modern, responsive **E-Commerce Website** built using **HTML**, **CSS**, **TypeScript**, **Tailwind CSS**, and the **EscuelaJS API**. The project demonstrates product listing, detail view, search functionality, dark mode toggle, and client-side routing using the hash-based navigation system.

---

## Features

- Search and filter products by name
- Product detail view with dynamic routing
- Light & Dark mode toggle
- Fast loading UI with skeleton loading and error handling
- Hash-based routing (SPA behavior)
- Modular and reusable component structure
- Responsive design for all devices

---

## View Site

[link to view site here](https://storesimple.netlify.app/)

## Technologies Used

- **HTML**
- **Tailwind CSS**
- **TypeScript**
- **JavaScript (ES6+)**
- **[EscuelaJS Products API](https://api.escuelajs.co/api/v1/products)**
- **Netlify** (for Deployment)
---

## Project Structure

```bash
src/
│
├── assets/ # Images, icons, and SVGs
├── components/ # Reusable UI components (Navbar, ProductCard, etc.)
├── pages/ # Page components (Home, ProductDetail, Contact, etc.)
├── style/ # Global styles and theming
├── ts/ # Logic files (e.g., ThemeManager, router)
├── main.ts # App entry point
├── index.html # Main HTML structure
└── index.css # Tailwind base styles
```

---

## Getting Started

### Docker Hub
[https://hub.docker.com/r/tochratana/simplestore](https://hub.docker.com/r/tochratana/simplestore)

### Prerequisites

- Node.js & npm installed
- Git installed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tochratana/simplestore.git

# 2. Navigate into the project directory
cd simplestore

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```