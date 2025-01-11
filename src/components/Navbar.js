import React, { useState } from "react";

const Navbar = ({ scrollToFooter }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg px-4 py-4 md:py-8 fixed top-0 left-0 w-full md:w-64 md:h-full z-50">
      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center md:block">
        <img
          src="/images/logo.png"
          alt="Austin Tyler Logo"
          className="w-36 h-auto mx-auto md:mb-12"
        />
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`mt-4 md:mt-12 space-y-6 md:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="/about"
          className="block text-lg lowercase text-gray-600 hover:underline hover:text-gray-800 transition duration-300"
        >
          about
        </a>
        <button
          onClick={scrollToFooter}
          className="block text-lg lowercase text-gray-600 hover:underline hover:text-gray-800 transition duration-300"
        >
          contact
        </button>
        <a
          href="/"
          className="block text-lg lowercase text-gray-600 hover:underline hover:text-gray-800 transition duration-300"
        >
          my work
        </a>
        <a
          href="https://AustinTyler.pixieset.com/booking/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg lowercase text-gray-600 hover:underline hover:text-gray-800 transition duration-300"
        >
          book
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
