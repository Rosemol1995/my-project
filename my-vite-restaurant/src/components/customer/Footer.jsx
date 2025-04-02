import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold">YourRestaurant</h2>
            <p className="mt-2 text-gray-400">
              Delightful dining experience with a variety of cuisines.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-2">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white mr-4">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white mr-4">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white mr-4">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Copyright Information */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} YourRestaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
