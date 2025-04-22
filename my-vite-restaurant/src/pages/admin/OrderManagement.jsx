// import React, { useEffect, useState } from "react";

// const OrderManagement = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch("/api/orders") // Your backend endpoint
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.error("Failed to fetch orders:", err));
//   }, []);

//   const updateOrderStatus = async (orderId, newStatus) => {
//     try {
//       const response = await fetch(`/api/orders/${orderId}/status`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus }),
//       });
//       if (response.ok) {
//         setOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order._id === orderId ? { ...order, status: newStatus } : order
//           )
//         );
//       }
//     } catch (error) {
//       console.error("Error updating order status:", error);
//     }
//   };

//   const getNextStatus = (current) => {
//     const flow = ["pending", "preparing", "delivered"];
//     const next = flow[flow.indexOf(current) + 1];
//     return next || current;
//   };

//   const getStatusStyle = (status) => {
//     const styles = {
//       pending: "bg-yellow-100 text-yellow-700",
//       preparing: "bg-blue-100 text-blue-700",
//       delivered: "bg-green-100 text-green-700",
//       cancelled: "bg-red-100 text-red-700",
//     };
//     return styles[status] || "bg-gray-100 text-gray-700";
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Management</h2>

//       <div className="overflow-x-auto bg-white rounded-lg shadow">
//         <table className="min-w-full text-sm divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="p-4 text-left font-semibold">Order ID</th>
//               <th className="p-4 text-left font-semibold">Customer</th>
//               <th className="p-4 text-left font-semibold">Items</th>
//               <th className="p-4 text-center font-semibold">Total</th>
//               <th className="p-4 text-center font-semibold">Status</th>
//               <th className="p-4 text-right font-semibold">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {orders.map((order) => (
//               <tr key={order._id} className="hover:bg-gray-50 transition">
//                 <td className="p-4 font-mono text-gray-700">{order._id}</td>
//                 <td className="p-4">{order.customerName || "Guest"}</td>
//                 <td className="p-4">
//                   {order.items.map((item) => (
//                     <div key={item._id}>
//                       {item.name} × {item.quantity}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-4 text-center font-bold text-green-600">
//                   ₹{order.totalPrice.toFixed(2)}
//                 </td>
//                 <td className="p-4 text-center">
//                   <span
//                     className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusStyle(
//                       order.status
//                     )}`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="p-4 text-right">
//                   {order.status !== "delivered" && (
//                     <button
//                       onClick={() =>
//                         updateOrderStatus(order._id, getNextStatus(order.status))
//                       }
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
//                     >
//                       Mark as {getNextStatus(order.status)}
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//             {orders.length === 0 && (
//               <tr>
//                 <td colSpan="6" className="text-center py-8 text-gray-400">
//                   No orders available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderManagement;

import { Truck } from "lucide-react";
import React, { useState } from "react";

const exampleOrders = [
  {
    _id: "1",
    customerName: "John Doe",
    items: [
      { name: "Margherita Pizza", quantity: 1 },
      { name: "Garlic Bread", quantity: 2 },
    ],
    totalPrice: 550,
    status: "pending",
  },
  {
    _id: "2",
    customerName: "Jane Smith",
    items: [{ name: "Veg Burger", quantity: 2 }],
    totalPrice: 300,
    status: "preparing",
  },
  {
    _id: "3",
    customerName: "David Lee",
    items: [{ name: "Pasta Alfredo", quantity: 1 }],
    totalPrice: 280,
    status: "delivered",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  preparing: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const AdminOrderManagement = () => {
  const [orders, setOrders] = useState(exampleOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const updateStatus = (newStatus) => {
    const updatedOrders = orders.map((order) =>
      order._id === selectedOrder._id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    closeModal();
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Truck className="w-6 h-6 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">
          Order Management
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-xl rounded-lg p-5 transition hover:shadow-2xl"
          >
            <div className="mb-2 text-sm text-gray-500">
              Order ID: <span className="font-medium">{order._id}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {order.customerName}
            </h2>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              {order.items.map((item, i) => (
                <li key={i}>
                  🍽 {item.name} × {item.quantity}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-lg font-bold text-green-600">
              ₹{order.totalPrice}
            </div>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                statusColors[order.status]
              }`}
            >
              {order.status.toUpperCase()}
            </span>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => openModal(order)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-1.5 rounded"
              >
                Edit
              </button>
              {order.status !== "delivered" && (
                <button
                  onClick={() => updateStatus("delivered")}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1.5 rounded"
                >
                  Mark Delivered
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Update Status</h2>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Order ID:
              </label>
              <div className="p-2 bg-gray-100 rounded text-sm">
                {selectedOrder._id}
              </div>

              <label className="block text-sm font-medium text-gray-700 mt-4">
                Status:
              </label>
              <select
                value={selectedOrder.status}
                onChange={(e) => updateStatus(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrderManagement;
