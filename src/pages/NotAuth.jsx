import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
const NotAuthorized = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div
        className={`min-h-screen p-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        <Navbar />

        <div className="p-4 text-white">
          <div
            className={`h-screen rounded-3xl overflow-hidden shadow-lg max-w-4xl mx-auto flex flex-col justify-center items-center text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-4">
              403 - Not Authorized
            </h1>
            <p
              className={`text-lg max-w-md mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              You don’t have permission to access this page.
            </p>

            <Link to="/">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300">
                ⬅️ Go to Homepage
              </button>
            </Link>

         
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default NotAuthorized;
