import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clearCart } from "../features/cartSlice";
import { setLoggedUser } from "../features/authSlice"; // Make sure this import is correct
import Navbar from "../componants/Navbar";

const Login = () => {
  const getUsers = useSelector((state) => state.auth.userList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const matchedUser = getUsers.find(
      (usr) => usr.user === user && usr.pass === pass
    );

    if (matchedUser) {
      dispatch(setLoggedUser({ user, role: matchedUser.role }));
      toast.success(`Logged in as ${user}`);
      navigate(matchedUser.role === "admin" ? "/admin" : "/");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <>
      
      <div
        className={`min-h-screen flex items-center justify-center px-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div
          className={`w-[60%] max-w-5xl rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          {/* Login Form */}
          <div
            className={`w-full md:w-3/5 px-8 py-12 flex flex-col justify-between ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
            }`}
          >
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
              Welcome to CurryCrave 🍽️
            </h2>

            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Username Input */}
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                type="text"
                placeholder="Username"
                required
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              {/* Password Input */}
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
                required
                minLength={8}
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-center mt-4">
              New here?{" "}
              <Link to="/register" className="text-orange-500 hover:underline">
                Create an account
              </Link>
            </p>
          </div>

          {/* Image */}
          <div
            className={`w-full md:w-2/5 h-[250px] md:h-auto ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <img
              src="/food.png"
              alt="Food"
              className="w-full h-full object-contain rounded-b-3xl md:rounded-l-none md:rounded-r-3xl"
            />
            <Link to="/menu">
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition">
                Go To Menu
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
