import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h1 className="text-[96px] font-bold text-[#282938] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/">
          <button className="bg-[#282938] hover:bg-[#1C1E53] text-white px-8 py-3 rounded-[41px] transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
