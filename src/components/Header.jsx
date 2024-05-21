import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    // Retrieve the theme from localStorage if it exists
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const switchImageSrc =
    theme === "light" ? "/switch-dark.png" : "/switch-light.png";
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          <NavLink to="/">MYAPP</NavLink>
        </div>
        <nav className="flex-grow flex justify-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white pb-1 ${
                isActive ? "border-b-2 border-orange-400" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white pb-1 ${
                isActive ? "border-b-2 border-orange-400" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white pb-1 ${
                isActive ? "border-b-2 border-orange-400" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white pb-1 ${
                isActive ? "border-b-2 border-orange-400" : ""
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white pb-1 ${
                isActive ? "border-b-2 border-orange-400" : ""
              }`
            }
          >
            Contact
          </NavLink>
          {/* <button
            onClick={toggleTheme}
            className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
          >
            <img src={switchImageSrc} alt="Toggle Theme" className="h-8 w-8" />
           
          </button> */}
        </nav>
        <span className="mr-2 text-gray-900 dark:text-white">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
        <div className="flex items-center ml-4">
          <label
            htmlFor="themeSwitch"
            className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
          >
            <input
              type="checkbox"
              id="themeSwitch"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <span className="block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
