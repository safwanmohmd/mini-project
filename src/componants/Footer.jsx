import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode); // Assumes you have a theme slice

  return (
    <footer
      className={`w-full px-4 py-6 shadow-inner rounded-t-2xl ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-red-500" />
            <span className="hover:underline cursor-pointer">+91 9207898730</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" />
            <span className="hover:underline cursor-pointer">support@currycrave.com</span>
          </div>
        </div>

        <div className="text-center md:text-right text-xs md:text-sm font-light">
          &copy; 2025
          <span className="font-semibold">  CurryCrave</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
