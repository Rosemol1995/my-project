import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
        alt="Delicious food"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-orange-500">Our Restaurant</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl">
          Experience the finest cuisines crafted with passion and served with excellence.
        </p>
        <Link
          to="/menu"
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg transition duration-300"
        >
          Explore Our Menu
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
