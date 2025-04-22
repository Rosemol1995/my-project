// import React, { useEffect, useState } from "react";

// const ManageStaff = () => {
//   const [staffList, setStaffList] = useState([]);

//   useEffect(() => {
//     fetch("/api/staff") // Replace with your actual API endpoint
//       .then((res) => res.json())
//       .then((data) => setStaffList(data))
//       .catch((err) => console.error("Failed to load staff:", err));
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">
//         Staff Order & Delivery Management
//       </h1>

//       <div className="overflow-x-auto bg-white rounded shadow">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Position
//               </th>
//               <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Orders Taken
//               </th>
//               <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Orders Delivered
//               </th>
//               <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {staffList.map((staff) => (
//               <tr key={staff._id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">{staff.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{staff.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap capitalize">
//                   {staff.position}
//                 </td>
//                 <td className="px-6 py-4 text-center text-blue-700 font-medium">
//                   {staff.ordersTaken}
//                 </td>
//                 <td className="px-6 py-4 text-center text-green-600 font-medium">
//                   {staff.ordersDelivered}
//                 </td>
//                 <td className="px-6 py-4 text-center">
//                   <span
//                     className={`px-3 py-1 inline-block rounded-full text-sm font-medium ${
//                       staff.status === "active"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {staff.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//             {staffList.length === 0 && (
//               <tr>
//                 <td colSpan="6" className="text-center py-6 text-gray-500">
//                   No staff data available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageStaff;
import React, { useEffect, useState } from "react";

const ManageStaff = () => {
  const [staffList, setStaffList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({
    name: "",
    email: "",
    password: "",
    role: "staff",
    position: "",
  });

  useEffect(() => {
    fetch("/api/staff") // Replace with your backend API
      .then((res) => res.json())
      .then((data) => setStaffList(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setNewStaff({
      name: "",
      email: "",
      password: "",
      role: "staff",
      position: "",
    });
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    fetch("/api/staff", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStaff),
    })
      .then((res) => res.json())
      .then((data) => {
        setStaffList([...staffList, data]);
        toggleModal();
      })
      .catch((err) => console.error("Failed to add staff:", err));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Staff</h2>
        <button
          onClick={toggleModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Add Staff
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left text-xs font-bold text-gray-600">Name</th>
              <th className="p-4 text-left text-xs font-bold text-gray-600">Email</th>
              <th className="p-4 text-left text-xs font-bold text-gray-600">Position</th>
              <th className="p-4 text-left text-xs font-bold text-gray-600">Orders Taken</th>
              <th className="p-4 text-left text-xs font-bold text-gray-600">Delivered Items</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {staffList.map((staff) => (
              <tr key={staff._id}>
                <td className="p-4">{staff.name}</td>
                <td className="p-4">{staff.email}</td>
                <td className="p-4">{staff.position}</td>
                <td className="p-4 text-blue-600">
                  {staff.ordersTaken?.map((item) => item.name).join(", ") || "—"}
                </td>
                <td className="p-4 text-green-600">
                  {staff.ordersDelivered?.map((item) => item.name).join(", ") || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Staff Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Add New Staff</h3>
            <form onSubmit={handleAddStaff} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newStaff.name}
                onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={newStaff.email}
                onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={newStaff.password}
                onChange={(e) => setNewStaff({ ...newStaff, password: e.target.value })}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Position (e.g., Waiter)"
                value={newStaff.position}
                onChange={(e) => setNewStaff({ ...newStaff, position: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStaff;
