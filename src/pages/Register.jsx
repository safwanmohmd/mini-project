import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";
import { addUser } from "../features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [regUser, setRegUser] = useState("");
  const [regPass, setRegPass] = useState("");
  const getUsers = useSelector((state) => state.auth.userList);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleRegister = (e) => {
    e.preventDefault();
    const exist = getUsers.find((usr) => usr.user === regUser);
    if (exist) {
      return toast.error(`User already exists: ${regUser}`);
    }
    toast.success(`User added: ${regUser}`);
    dispatch(addUser({ user: regUser, pass: regPass, role: "user" }));
    setRegUser("");
    setRegPass("");
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <div
        className={`min-h-[80vh] h-auto flex items-center justify-center px-2 sm:px-4 py-8 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div
          className={`w-full max-w-[900px] md:max-w-5xl rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div
            className={`w-full md:w-1/2 px-4 sm:px-8 py-8 flex flex-col justify-center ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
            }`}
          >
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
              Register on CurryCrave
            </h2>
            <form onSubmit={handleRegister} className="space-y-5">
              <input
                required
                value={regUser}
                onChange={(e) => setRegUser(e.target.value)}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                required
                value={regPass}
                minLength={8}
                onChange={(e) => setRegPass(e.target.value)}
                type="password"
                placeholder="Password (min 8 characters)"
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
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
          <div
            className={`w-full md:w-1/2 relative h-[200px] sm:h-[250px] md:h-auto ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <img
              src="/food.png"
              alt="Food"
              className="w-full h-full object-contain rounded-b-3xl md:rounded-b-none md:rounded-r-3xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
