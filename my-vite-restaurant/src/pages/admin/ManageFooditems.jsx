// import React, { useState, useEffect } from 'react';

// const ManageFoodItems = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     category: '',
//     price: '',
//     image: '',
//   });

//   // Fetch food items from backend
//   useEffect(() => {
//     fetch('/api/menuItem/getMenutem') // Update with your API route
//       .then((res) => res.json())
//       .then((data) => setFoodItems(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddItem = (e) => {
//     e.preventDefault();
//     fetch('/api/menuItem/createMenuItem', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((newItem) => {
//         setFoodItems([...foodItems, newItem]);
//         setFormData({ name: '', category: '', price: '', image: '' });
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-center">Manage Food Items</h2>

//       {/* Form to Add New Food Item */}
//       <form onSubmit={handleAddItem} className="max-w-2xl mx-auto bg-white p-6 rounded shadow mb-10">
//         <h3 className="text-xl font-semibold mb-4">Add New Item</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={formData.category}
//             onChange={handleInputChange}
//             required
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleInputChange}
//             required
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="image"
//             placeholder="Image URL"
//             value={formData.image}
//             onChange={handleInputChange}
//             className="p-2 border rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//         >
//           Add Item
//         </button>
//       </form>

//       {/* Table of Food Items */}
//       <div className="overflow-x-auto bg-white p-6 rounded shadow">
//         <table className="w-full text-left">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-3">Image</th>
//               <th className="p-3">Name</th>
//               <th className="p-3">Category</th>
//               <th className="p-3">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {foodItems.map((item) => (
//               <tr key={item._id} className="border-t hover:bg-gray-50">
//                 <td className="p-3">
//                   <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
//                 </td>
//                 <td className="p-3 font-semibold">{item.name}</td>
//                 <td className="p-3">{item.category}</td>
//                 <td className="p-3 text-green-600 font-medium">₹{item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageFoodItems;
import React, { useEffect, useState } from "react";

const ManageFoodItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  // Fetch menu items
  useEffect(() => {
    fetch("/api/menu-items") // Replace with your actual backend endpoint
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error(err));
  }, []);

  // Filtered items by search
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Modal toggle
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setNewItem({ name: "", category: "", price: "", image: "" });
  };

  // Submit new item
  const handleAddItem = (e) => {
    e.preventDefault();
    fetch("/api/menu-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setMenuItems((prev) => [...prev, data]);
        toggleModal();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 border border-gray-300 rounded"
        />
        <button
          onClick={toggleModal}
          className="ml-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Item
        </button>
      </div>

      {/* Items Table */}
      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-2">Image</th>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Category</th>
              <th className="text-left p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2 text-green-600">₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Menu Item</h2>
            <form onSubmit={handleAddItem} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newItem.category}
                onChange={(e) =>
                  setNewItem({ ...newItem, category: e.target.value })
                }
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={(e) =>
                  setNewItem({ ...newItem, price: e.target.value })
                }
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newItem.image}
                onChange={(e) =>
                  setNewItem({ ...newItem, image: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageFoodItems;

