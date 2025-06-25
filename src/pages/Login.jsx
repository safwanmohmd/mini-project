import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [userType, setUserType] = useState();
  const handleLogin = (e) => {
    e.preventDefault();
    const username = "user";
    const password = "user@123";

    const adminUser = "admin";
    const adminPass = "admin@123";

    if (user == username && pass == password) {
      alert("success");
      setUserType("user");
      navigate("/");
    } else if (user == adminUser && pass == adminPass) {
      alert("success admin");
      setUserType("admin");
      navigate("/admin");
    } else {
      alert("failed to login");
      setUserType();
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Welcome to Foodie's Hub 🍽️
        </h2>
        <form className="space-y-5">
          <input
            onInput={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            onInput={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={(e) => handleLogin(e)}
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          New here?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
