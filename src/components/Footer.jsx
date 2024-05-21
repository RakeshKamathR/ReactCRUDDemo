import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 fixed bottom-0 w-full shadow-md text-gray-900 dark:text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} MyApp Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
