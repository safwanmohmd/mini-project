# 🍽️ CurryCrave – Food Ordering Web App

🔗 **Live Preview:** [https://mini-project-eight-gamma.vercel.app](https://mini-project-eight-gamma.vercel.app)

A fully responsive food ordering web application built with **React** and **Redux**. Users can browse a food menu, manage their cart, and place orders, while admins can securely manage the product listings.

---


## 🌟 Features

- 🧭 **Navbar** – Persistent with links to Home, Menu, Cart, and Login  
- 🏠 **Home Page** – Attractive landing page with product highlights and cart summary  
- 🔐 **Login Page** – Secure login with preset admin credentials (stored in `localStorage`)  
- 🛠️ **Admin Panel**  
  - Accessible only by admins  
  - Add, edit, and delete food products  
  - Auto-creates admin credentials on first load:  
    - Username: `admin`  
    - Password: `admin@123`  
- 🍕 **Menu Page** – Displays food products in a clean, responsive grid layout  
- 🛒 **Cart** – Add and remove items with real-time total  
- 📱 **Responsive Design** – Mobile-first layout for all screen sizes  
- 🌙 **Dark Mode** – Toggle between light and dark themes  
- 🔔 **Toast Notifications** – Instant feedback using `react-hot-toast`  

---

## 🗂️ Data Management

- 📦 Products loaded from `products.json` on first visit  
- 💾 Synced with `localStorage` for persistence  
- 🔄 Redux handles all product/cart state and reflects changes instantly  

---

## 🛠️ Tech Stack

| Area          | Technology          |
|---------------|---------------------|
| Frontend      | React, Tailwind CSS |
| State Mgmt    | Redux Toolkit       |
| Routing       | React Router DOM    |
| Persistence   | LocalStorage        |
| Notifications | react-hot-toast     |

---

## 📁 Project Structure

src/  
├── assets/  
│   └── food.png  
├── componants/  
│   ├── Navbar.jsx  
│   └── ProductCard.jsx  
├── features/  
│   ├── authSlice.js  
│   ├── cartSlice.js  
│   └── productSlice.js  
├── pages/  
│   ├── HomePage.jsx  
│   ├── LoginPage.jsx  
│   ├── MenuPage.jsx  
│   ├── AdminPage.jsx  
│   ├── NotFoundPage.jsx  
│   └── NotAuthorized.jsx  
└── App.jsx  

---

## 🚀 Getting Started

1. Clone the repository  
   `git clone https://github.com/your-username/food-order-app.git`  
   `cd food-order-app`

2. Install dependencies  
   `npm install`

3. Start the development server  
   `npm run dev`

4. View in browser  
   `http://localhost:5173`

---

## 🔐 Admin Credentials

| Role  | Username | Password   |
|-------|----------|------------|
| Admin | admin    | admin@123  |

> ✅ These credentials are automatically injected into `localStorage` if missing.

---

## 🧱 Route Protection

- 🔒 Admin routes secured using `AdminProtectedRoute` component  
- 🚫 Unauthorized users are redirected to a custom `403 – Not Authorized` page  
- 🧭 Invalid routes lead to a `404 – Not Found` page  

---

## 🙌 Acknowledgments

Thanks to these awesome tools:

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hot Toast](https://react-hot-toast.com/)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE)