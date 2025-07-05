import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "../componants/Navbar";
import { addUser } from "../features/authSlice";
const Register = () => {
  const dispatch = useDispatch();
  const [regUser, setRegUser] = useState();
  const [regPass, setRegPass] = useState();
  const getUsers = useSelector((state) => state.auth.userList);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleRegister = (e) => {
    e.preventDefault();
    const exist = getUsers.find((usr) => {
      return usr.user == regUser;
    });
    if (exist) {
      return toast.error(`user Alredy Exist ${regUser}`);
    }
    toast.success(`user added ${regUser}`);
    dispatch(addUser({ user: regUser, pass: regPass, role: "user" }));
    setRegPass('')
    setRegUser('')
  };
  return (
    <>
      <Toaster />
      <Navbar />
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
          {/* Register Form */}
          <div
            className={`w-full md:w-3/5 px-8 py-12 flex flex-col justify-between ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
            }`}
          >
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
              Register On CurryCrave
            </h2>
            <form onSubmit={(e) => handleRegister(e)} className="space-y-5">
              <input
              required
              value={regUser}
                onInput={(e) => setRegUser(e.target.value)}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
              required
              value={regPass}
                minLength={8}
                onInput={(e) => setRegPass(e.target.value)}
                type="password"
                placeholder="Password  (min 8 characters)"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
              
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Register
              </button>
            </form>

            <p className="text-sm text-center mt-4">
              New here?{" "}
              <Link to="/login" className="text-orange-500 hover:underline">
                Alredy Have An Acoount ? Login
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
