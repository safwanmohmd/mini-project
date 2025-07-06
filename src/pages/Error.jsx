import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
const Error = () => {
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
            <h1 className="text-7xl font-extrabold text-orange-500 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-semibold mb-2">
              Page Not Found
            </h2>
            <p
              className={`max-w-md mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Oops! The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link to="/">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300">
                ⬅️ Back to Home
              </button>
            </Link>

           
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default Error;
