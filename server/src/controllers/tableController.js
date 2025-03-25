const Table = require("../models/Table");

// Create a new table
exports.createTable = async (req, res) => {
    try {
        const { name, capacity } = req.body;
        const table = new Table({ name, capacity });
        await table.save();
        res.status(201).json({ message: "Table created successfully", table });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all tables
exports.getAllTables = async (req, res) => {
    try {
        const tables = await Table.find().populate("reservations");
        res.status(200).json(tables);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single table by ID
exports.getTableById = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id).populate("reservations");
        if (!table) return res.status(404).json({ message: "Table not found" });
        res.status(200).json(table);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a table (capacity or status)
exports.updateTable = async (req, res) => {
    try {
        const {tableId} = req.params.id
        const {name,capacity,status} = req.body
        const table = await Table.findOne(tableId)
        if(!table){
            return res.status(400).json({
                error:"Table not found"
            })
        }
        const updatedTable = await Table.findByIdAndUpdate(tableId, {name,capacity,status}  , { new: true });
        res.status(200).json({ message: "Table updated successfully", data:updatedTable });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a table
exports.deleteTable = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        if (!table) return res.status(404).json({ message: "Table not found" });

        await table.deleteOne();
        res.status(200).json({ message: "Table deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update table status (e.g., mark as reserved or occupied)
// exports.updateTableStatus = async (req, res) => {
//     try {
//         const { status } = req.body;
//         const table = await Table.findById(req.params.id);

//         if (!table) return res.status(404).json({ message: "Table not found" });

//         if (!["available", "reserved", "occupied"].includes(status)) {
//             return res.status(400).json({ message: "Invalid status" });
//         }

//         table.status = status;
//         await table.save();
//         res.status(200).json({ message: "Table status updated", table });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
