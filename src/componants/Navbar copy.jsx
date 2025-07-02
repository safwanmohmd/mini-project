import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser } from "../features/authSlice";
import { useState } from "react";
import { toggleTheme } from "../features/themeSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cart.length);
  const user = useSelector((state) => state.auth.user?.user);

  const handleLogout = () => {
    dispatch(setLoggedUser(null));
  };
  // const [darkMode, setDarkMode ] = useState(false)
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <nav className= {`h-[60px] ${darkMode ? 'bg-gray-900' : 'bg-orange-500'} w-full shadow-md px-4 sm:px-6`}>
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          🍽️ Foodie's Hub
        </Link>

        <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base font-medium text-white">
          <button
            onClick={() => dispatch(toggleTheme())}
            title="Toggle Dark Mode"
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 
    ${darkMode ? "bg-gray-700" : "bg-orange-300"}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md 
      flex items-center justify-center text-[10px] transition-transform duration-300
      ${darkMode ? "translate-x-6" : "translate-x-0"}`}
            >
              {darkMode ? (
                <FaMoon className="text-gray-700" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </span>
          </button>

          <span className="hidden sm:inline">
            {user ? `👤 ${user}` : "Not Logged"}
          </span>

          <Link to="/" className="hover:underline transition">
            Home
          </Link>
          

          {!user ? (
            <Link to="/login" className="hover:underline transition">
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:underline transition"
            >
              Logout
            </button>
          )}

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
