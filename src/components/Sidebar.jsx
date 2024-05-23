// Sidebar.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex shadow-lg">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out bg-gray-900 w-64 z-50`}
      >
        <div className="flex flex-col h-full bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between p-4">
            <div className="text-2xl font-bold">
              <NavLink to="/">MYAPP</NavLink>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-black dark:text-white focus:outline-none "
            >
              X
            </button>
          </div>
          <nav className="flex-grow p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 rounded hover:bg-slate-200 dark:hover:bg-gray-700  ${
                  isActive ? "bg-slate-200 dark:bg-gray-700" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 px-4 rounded hover:bg-slate-200 dark:hover:bg-gray-700  ${
                  isActive ? "bg-slate-200 dark:bg-gray-700" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block py-2 px-4 rounded hover:bg-slate-200 dark:hover:bg-gray-700  ${
                  isActive ? "bg-slate-200 dark:bg-gray-700" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block py-2 px-4 rounded hover:bg-slate-200 dark:hover:bg-gray-700  ${
                  isActive ? "bg-slate-200 dark:bg-gray-700" : ""
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 px-4 rounded hover:bg-slate-200 dark:hover:bg-gray-700  ${
                  isActive ? "bg-slate-200 dark:bg-gray-700" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow">
        <button
          onClick={toggleSidebar}
          className="fixed -left-7 transform-translate-x-1/2 top-1/2 transform -translate-y-1/2 z-50 p-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full focus:outline-none"
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
