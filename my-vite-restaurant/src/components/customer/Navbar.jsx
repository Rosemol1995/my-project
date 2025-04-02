import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">YourRestaurant</Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
            <Link to="/menu" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Menu</Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About Us</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
            <Link to="/menu" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Menu</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About Us</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
