
# 🍽️ Food Ordering Website

A responsive food ordering web application built with React and Redux. Users can browse a menu, add items to a cart, and place orders. Admins can manage product listings through a secure admin panel.

## 🚀 Features

- **Navbar**: Persistent navigation bar with links to Home, Menu, Cart, and Login.
- **Home Page**: Landing page with welcome banner, product highlights, and total cart value.
- **Login Page**: User login functionality. Admin credentials are preset and stored in localStorage.
- **Admin Panel**:
  - Restricted to users with the "admin" role.
  - Admin can add, delete, and edit products.
  - Admin credentials are auto-added if missing:
    - Username: `admin`
    - Password: `admin@123`
- **Menu Page**: Displays all available food products in a responsive grid layout.
- **Responsive Design**: Fully mobile-friendly and adapts to all screen sizes.

## 🗃️ Data Handling

- Product data is initially loaded from a `products.json` file.
- If localStorage is empty, products are pushed into localStorage automatically.
- All product operations (add/edit/delete) reflect in both Redux state and localStorage.
- Cart data is managed through Redux and preserved on refresh.

## 💡 Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Persistence**: LocalStorage
- **Notifications**: react-hot-toast

## 📁 Folder Structure

```
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
```

## ✅ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/food-order-app.git
   cd food-order-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm run dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## 🔐 Admin Credentials

| Role   | Username | Password    |
|--------|----------|-------------|
| Admin  | admin    | admin@123   |

These credentials are injected into localStorage on first app load if not present.

## 🛡️ Route Protection

- Admin pages are protected via a custom `AdminProtectedRoute` component.
- Unauthorized access redirects to a custom `403 - Not Authorized` page.
- Unknown URLs redirect to a `404 - Not Found` page.

## 🙌 Acknowledgments

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hot Toast](https://react-hot-toast.com/)

## 📜 License

This project is licensed under the [MIT License](LICENSE).
