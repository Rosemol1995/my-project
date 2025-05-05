import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

const demoTables = [
  { _id: "1", name: "Table 1", capacity: 4, status: "available" },
  { _id: "2", name: "Table 2", capacity: 2, status: "occupied" },
  { _id: "3", name: "Table 3", capacity: 6, status: "reserved" },
];

const ManageTable = () => {
  const [tables, setTables] = useState(demoTables);
  const [newTable, setNewTable] = useState({ name: "", capacity: 1 });

  const addTable = () => {
    const id = Math.random().toString(36).substr(2, 9);
    setTables([...tables, { ...newTable, status: "available", _id: id }]);
    setNewTable({ name: "", capacity: 1 });
  };

  const updateTable = (id, key, value) => {
    setTables(tables.map(t => t._id === id ? { ...t, [key]: value } : t));
  };

  const deleteTable = (id) => {
    setTables(tables.filter(t => t._id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Restaurant Tables</h1>

      <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
        <h2 className="font-semibold text-lg mb-2">Add New Table</h2>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Table name"
            value={newTable.name}
            onChange={e => setNewTable({ ...newTable, name: e.target.value })}
            className="border rounded-lg px-3 py-1 w-1/3"
          />
          <input
            type="number"
            min="1"
            placeholder="Capacity"
            value={newTable.capacity}
            onChange={e => setNewTable({ ...newTable, capacity: parseInt(e.target.value) })}
            className="border rounded-lg px-3 py-1 w-1/4"
          />
          <button
            onClick={addTable}
            className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
          >
            <Plus className="inline mr-1" size={18} />
            Add
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tables.map(table => (
          <div key={table._id} className="border rounded-2xl p-4 shadow-md bg-white">
            <h3 className="text-lg font-semibold mb-2">{table.name}</h3>
            <p>Capacity: {table.capacity}</p>
            <p className={`capitalize mt-1 font-medium text-sm ${{
              available: "text-green-600",
              reserved: "text-yellow-600",
              occupied: "text-red-600"
            }[table.status]}`}>Status: {table.status}</p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => updateTable(table._id, "status", table.status === "available" ? "reserved" : "available")}
                className="text-blue-500 hover:text-blue-700"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => deleteTable(table._id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageTable
