import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src="path-to-your-image.jpg"
              alt="Restaurant Interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <p className="text-gray-700 mb-4">
              Welcome to [Rose's Restauarant], where we offer an exceptional dining experience with a
              blend of traditional and contemporary cuisine. Our chefs use the freshest ingredients
              to craft dishes that delight the senses.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began in [2025], with a passion for creating a space where people can
              come together to enjoy great food and company. Over the years, we've grown into a
              beloved establishment known for our commitment to quality and service.
            </p>
            <p className="text-gray-700">
              Thank you for being a part of our story. We look forward to serving you and creating
              memorable experiences together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
