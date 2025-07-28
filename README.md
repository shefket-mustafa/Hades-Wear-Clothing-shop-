# 🧥 Hades Wear – Clothing Shop

A modern, responsive full-stack web app for a fictional clothing brand called **Hades Wear**.

---

## 🚀 Tech Stack

- **Frontend:**
  - JavaScript
  - React
  - React Router
  - Redux Toolkit
  - Axios
  - CSS
  - React Hook Form
  - Yup (form validation)

- **Backend:**
  - Express
  - MongoDB (via Mongoose)
  - JSON Web Token (JWT) authentication

---

## Features

- Product search by title (real-time)  
- Filter by category on main collections like Men, Women, View Mens Collections, View Womens Collections
- Sort products by:
  - Price: Low to High / High to Low
  - Name: A–Z / Z–A
- Product detail view with:
  - Dynamic size options
  - Expandable sections (description, dimensions, availability)
- Shopping cart functionality with size selection
- Responsive design (mobile-first)

---
## 🔐 Authentication

- Custom **Express + MongoDB backend** deployed on [Render](https://hades-wear-clothing-shop-1.onrender.com)
- JWT-based secure authentication
- Backend URL: `https://hades-wear-clothing-shop-1.onrender.com`
- Implemented with **Redux Toolkit** and `createAsyncThunk` for async login/register actions
- Form validation powered by **React Hook Form + Yup**
- Dynamic view rendering based on auth state:
  - 🧑 **Authenticated users** see account features and logout options
  - 👤 **Guests** see only sign up and public catalog features
- Auth state persisted via `localStorage`
---

## 📁 Project Structure

```
Hades-Wear/
├── client/                 # React frontend application
│   ├── public/             # Static assets 
│   ├── src/                # Source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Route-level pages (Login, Register, Catalog, etc.)
│   │   ├── redux/          # Redux slices and store
│   │   ├── assets/         # Images and styles
│   │   ├── App.jsx         # Root component
│   │   └── main.jsx        # Entry point
│   └── ...
├── server/                 # Express backend with MongoDB for Auth
│   ├── models/             # Mongoose models
│   ├── routes/             # Express route handlers
│   ├── config.js           # dotenv config
│   └── server.js           # Entry point for backend
└── README.md
```

---

## ⚙️ Getting started

### 1. Clone the repo

```bash
# 1. Clone the repository
git clone git@github.com:shefket-mustafa/Hades-Wear-Clothing-shop-.git
cd Shade-Zone
```

### 2. Setup Front-End

```bash
cd client
npm install
npm run dev
```

### 3. Setup Back-End

```bash
cd server
npm install
node server.js        
```


## 📦 Live Demo

[Hades Wear Clothing Store](https://hades-wear-clothing-shop.vercel.app) 



---


