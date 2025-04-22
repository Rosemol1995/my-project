import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 to-orange-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-4">Get in Touch</h2>
        <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
          Questions? Suggestions? We’d love to hear from you. Fill out the form and we'll get back to you shortly.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-orange-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-orange-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-orange-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-600 space-y-1">
          <p>Prefer to email or call us directly?</p>
          <p className="font-medium text-orange-500">contact@amberplate.com</p>
          <p className="font-medium text-orange-500">+1 (234) 567-8901</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
