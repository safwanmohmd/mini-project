import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-4 shadow-inner rounded-t-2xl bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-red-500" />
            <span>+91 9207898730</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" />
            <span>support@currycrave.com</span>
          </div>
        </div>

    
        <div className="text-center md:text-right">
          &copy; {new Date().getFullYear()} CurryCrave. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
