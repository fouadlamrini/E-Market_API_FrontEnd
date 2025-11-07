import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <Link to="/">E Market</Link>
      </div>

      {/* Menu */}
      <ul className="flex space-x-6 items-center">
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

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 hover:text-gray-800 cursor-pointer" />
        <FaShoppingCart className="text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
