import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser, addUser } from "../features/authSlice";
import { toggleTheme } from "../features/themeSlice";
import { setSearch, filterProducts, setCategory, fetchProducts } from "../features/productSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartCount = useSelector((state) => state.cart.cart.length);
  const user = useSelector((state) => state.auth.user);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { search, category } = useSelector((state) => state.products);
  const existUser = useSelector((state) => state.auth.userList);

  const handleLogout = () => {
    dispatch(setLoggedUser(null));
    navigate("/");
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(filterProducts());
  };

  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
    dispatch(filterProducts());
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(filterProducts());

    const exists = existUser?.find((x) => x.role === "admin");
    if (!exists) {
      dispatch(addUser({ user: "admin", pass: "admin@123", role: "admin" }));
    }
  }, []);

  return (
    <nav
      className={`w-full px-4 py-3 shadow-md rounded-b-2xl ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Left: Logo + Links */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="text-2xl font-bold text-red-600">CurryCrave</div>
          <ul className="flex gap-4 font-medium">
            <li>
              <Link to="/" className="hover:text-black transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-black transition">
                Menu
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-wrap gap-2 md:gap-4 items-center">
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            title="Toggle Theme"
            className={`relative w-10 h-6 rounded-full transition-colors duration-300 ${
              darkMode ? "bg-gray-700" : "bg-orange-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${
                darkMode ? "translate-x-4" : "translate-x-0"
              }`}
            >
              {darkMode ? (
                <FaMoon className="text-gray-700 text-xs" />
              ) : (
                <FaSun className="text-yellow-500 text-xs" />
              )}
            </span>
          </button>

          {/* Search Input */}
          <input
            onChange={handleSearch}
            value={search}
            className="border px-2 py-1 text-sm rounded w-full sm:w-auto"
            type="search"
            placeholder="Search"
          />

          {/* Category Select */}
          <select
            value={category}
            onChange={handleCategory}
            className="border px-2 py-1 text-sm rounded w-full sm:w-auto"
          >
            <option value="All">All</option>
            <option value="starter">starter</option>
            <option value="snack">snack</option>
            <option value="main course">main course</option>
          </select>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl hover:text-black" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-white bg-red-500 text-xs px-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Info */}
          {user?.user && (
            <div className="text-sm whitespace-nowrap inline-flex items-center gap-1">
              <CiUser />
              {user.user}
            </div>
          )}

          {/* Admin Button */}
          {user?.role === "admin" && (
            <Link to="/admin">
              <button className="bg-red-400 hover:bg-yellow-500 px-3 py-1 rounded-full text-sm font-semibold">
                GoAdmin
              </button>
            </Link>
          )}

          {/* Auth Buttons */}
          {!user?.user ? (
            <>
              <Link to="/register">
                <button className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-full text-sm font-semibold">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-full text-sm font-semibold">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-full text-sm font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
