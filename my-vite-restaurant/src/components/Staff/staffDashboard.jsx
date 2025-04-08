import React, { useState } from "react";
import { PlusCircle, LogOut } from "lucide-react";

const sampleMenu = [
  { id: 1, name: "Burger", price: 8.99 },
  { id: 2, name: "Fries", price: 3.49 },
  { id: 3, name: "Pizza", price: 12.99 },
  { id: 4, name: "Salad", price: 6.99 },
];

export default function StaffDashboard() {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const clearOrder = () => setOrderItems([]);

  const total = orderItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Nav */}
      <div className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-800">Staff Dashboard</h1>
        <div className="flex gap-4">
          <button
            onClick={clearOrder}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            <PlusCircle className="w-5 h-5" />
            <span>New Order</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Menu Items */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {sampleMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => addToOrder(item)}
            >
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Order Cart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Current Order</h2>
          {orderItems.length === 0 ? (
            <p className="text-sm text-gray-500">No items selected.</p>
          ) : (
            <ul className="space-y-2">
              {orderItems.map((item) => (
                <li key={item.id} className="flex justify-between text-gray-700">
                  <span>{item.name} x{item.qty}</span>
                  <span>${(item.qty * item.price).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <hr className="my-4 border-gray-200" />
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            disabled={orderItems.length === 0}
            className={`w-full mt-6 px-4 py-2 rounded-xl text-white font-medium transition ${
              orderItems.length === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
}