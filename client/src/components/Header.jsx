import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/userContext";

const Header = () => {
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                Synapse
              </div>
            </Link>
          </div>

          <nav>
            <ul className="flex space-x-8 items-center">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-indigo-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-indigo-400 transition duration-300"
                >
                  About
                </Link>
              </li>

              {user ? (
                <>
                  <li className="relative" ref={dropdownRef}>
                    <div
                      className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold cursor-pointer"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      {user.username[0].toUpperCase()}
                    </div>

                    {isOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 cursor-pointer">
                        <ul className="rounded-lg text-sm text-gray-700">
                          <li>
                            <Link
                              to="/profile"
                              className="block rounded-lg px-4 py-2 hover:bg-[#ccc] cursor-pointer"
                            >
                              Profile
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 border-opacity-30 text-gray-300 hover:text-white hover:border-indigo-500 transition duration-300"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
