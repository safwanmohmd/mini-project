import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser } from "../features/authSlice";
import { useState } from "react";
import { CiUser   } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { toggleTheme } from "../features/themeSlice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cart.length);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    navigate('/login')
    dispatch(setLoggedUser(null));
  };
  // const [darkMode, setDarkMode ] = useState(false)
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <nav
      className={`flex justify-between items-center px-10 py-6 ${
        darkMode ? "bg-gray-900" : "bg-white"
      } shadow-md`}
    >
      <div className="text-2xl font-bold text-red-600">foco</div>
      
      
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li>
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
        </li>
       <Link to={'/'}><li  className="hover:text-black cursor-pointer">Home</li></Link>
       <Link to={'/menu'}><li className="hover:text-black cursor-pointer">Menu</li></Link>
        
      </ul>
      
        <div className="text-sm text-gray-700 hover:text-black">
         {user.user ? ( <><CiUser /> {user.user}  </>) : "Not Logged"}</div>

        <button className="text-gray-600 hover:text-black"><FaSearch /></button>
         <Link to="/cart" className="relative">
        <button className="relative">
          <FaShoppingCart className="text-xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-white bg-red-500 text-xs px-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        
        </Link>
        {!user.role == 'admin' ? ( 
        <button className="text-sm text-gray-700 hover:text-black">
         GoAdmin
        </button>
        ) : ( null )}
        {!user.user ? ( <>
          <Link to="/register" className="hover:underline transition"> 
        <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded-full text-sm font-semibold">
          Sign Up
        </button>
        </Link>
          <Link to="/login" className="hover:underline transition"> 
        <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded-full text-sm font-semibold">
          Login
        </button>
        </Link>

      </>
         ) : ( 
          <button  onClick={() => handleLogout()} className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded-full text-sm font-semibold">
          logout
        </button>
         )}
      </div>
    </nav>
  );
};

export default Navbar;
