import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#1C1E53] text-white w-full h-[90px]">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <h1 className="text-2xl font-bold">Finsweet</h1>

        <div className="flex items-center gap-10">
          <div
            className="lg:hidden flex items-center flex-col justify-center space-y-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-7 h-1 bg-white"></div>
            <div className="w-7 h-1 bg-white"></div>
            <div className="w-7 h-1 bg-white"></div>
          </div>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex gap-10 text-sm flex-col lg:flex-row absolute lg:static bg-[#1C1E53] w-full lg:w-auto top-[90px] left-0 lg:top-0 p-6 lg:p-0 z-50`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-50 font-medium"
                    : "text-[#BBBBCB] hover:text-gray-300 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-50 font-medium"
                    : "text-[#BBBBCB] hover:text-gray-300 transition"
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-50 font-medium"
                    : "text-[#BBBBCB] hover:text-gray-300 transition"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-50 font-medium"
                    : "text-[#BBBBCB] hover:text-gray-300 transition"
                }
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-50 font-medium"
                    : "text-[#BBBBCB] hover:text-gray-300 transition"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>

          <NavLink
            to="/contact"
            className="border-2 border-[#F4F6FC33] px-6 py-2 rounded-3xl hover:bg-white hover:text-[#1C1E53] transition hidden lg:block"
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
