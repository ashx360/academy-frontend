import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-black italic font-helvetica-glow">Ash</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-12 text-lg font-helvetica-glow">
  <a href="#about" className="hover:text-gray-400 transition">About</a>
  <a href="#portfolio" className="hover:text-gray-400 transition">Portfolio</a>
  <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
</nav>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-4 mt-4 text-lg font-helvetica-glow text-center">
  <a href="#about" className="hover:text-gray-400 transition">About</a>
  <a href="#portfolio" className="hover:text-gray-400 transition">Portfolio</a>
  <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
</nav>
      )}
    </nav>
  );
}

export default Navbar;