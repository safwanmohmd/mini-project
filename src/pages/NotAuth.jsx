import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">403 - Not Authorized</h1>
        <p className="text-gray-700 mb-6">You don't have permission to access this page.</p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
