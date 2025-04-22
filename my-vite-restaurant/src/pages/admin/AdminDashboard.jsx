// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// const categories = ["Starters", "Main Course", "Desserts", "Beverages"];

// const menuItems = [
//   { name: "Spring Rolls", category: "Starters" },
//   { name: "Garlic Bread", category: "Starters" },
//   { name: "Grilled Chicken", category: "Main Course" },
//   { name: "Pasta Alfredo", category: "Main Course" },
//   { name: "Brownie Sundae", category: "Desserts" },
//   { name: "Cheesecake", category: "Desserts" },
//   { name: "Lemonade", category: "Beverages" },
//   { name: "Iced Tea", category: "Beverages" },
// ];

// const AdminDashboard = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Starters");

//   const filteredItems = menuItems.filter(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

//       <div className="flex gap-4 mb-6 flex-wrap">
//         {categories.map((category) => (
//           <Button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             variant={selectedCategory === category ? "default" : "outline"}
//             className="rounded-2xl text-base px-6 shadow-md transition-colors duration-300"
//           >
//             {category}
//           </Button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredItems.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.05 }}
//           >
//             <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-6">
//                 <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                 <p className="text-sm text-gray-500 mt-1">{item.category}</p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = ["Starters", "Main Course", "Desserts", "Beverages"];

const menuItems = [
  { name: "Spring Rolls", category: "Starters" },
  { name: "Garlic Bread", category: "Starters" },
  { name: "Grilled Chicken", category: "Main Course" },
  { name: "Pasta Alfredo", category: "Main Course" },
  { name: "Brownie Sundae", category: "Desserts" },
  { name: "Cheesecake", category: "Desserts" },
  { name: "Lemonade", category: "Beverages" },
  { name: "Iced Tea", category: "Beverages" },
];

const AdminDashboard = () =>{
  const [selectedCategory, setSelectedCategory] = useState("Starters");
  const navigate = useNavigate()

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">
                Admin Dashboard
              </span>
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href=""
                onClick={()=>navigate("menu")}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Menu
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Admin Menu Page
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Settings
              </a>
            </div>
            {/* Logout Button */}
            <div className="hidden sm:flex sm:items-center">
              <button
                onClick={() => {
                  /* Handle logout logic here */
                }}
                className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  /* Handle mobile menu toggle here */
                }}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            >
              Menu
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            >
              Admin Menu Page
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            >
              Settings
            </a>
            <button
              onClick={() => {
                /* Handle logout logic here */
              }}
              className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-red-500 hover:text-red-700 hover:bg-red-50 hover:border-red-300"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="flex gap-4 mb-6 flex-wrap mt-4 p-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-2xl text-base px-6 py-2 shadow-md transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard
