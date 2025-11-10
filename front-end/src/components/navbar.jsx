import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">E Market</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-600">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-600">Product</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-600">About Us</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-600">Sign Up</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-600">Log In</Link>
          </li>
        </ul>

        {/* Icons + Hamburger */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          <FaShoppingCart className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 pb-4">
          <li>
            <Link to="/" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/products" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Product</Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/register" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </li>
          <li>
            <Link to="/login" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Log In</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
