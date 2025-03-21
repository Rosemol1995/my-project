const WaitingList = require("../models/WaitingList");

// Get all waiting list entries
exports.getWaitingList = async (req, res) => {
    try {
        const waitingList = await WaitingList.find().populate("customer");
        res.json(waitingList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get waiting list entry by ID
exports.getWaitingListById = async (req, res) => {
    try {
        const waitingEntry = await WaitingList.findById(req.params.id).populate("customer");
        if (!waitingEntry) return res.status(404).json({ message: "Entry not found" });
        res.json(waitingEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add to waiting list
exports.createWaitingListEntry = async (req, res) => {
    try {
        const newEntry = new WaitingList(req.body);
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Update a waiting list entry (Admin can update status)
exports.updateWaitingList = async (req, res) => {
    try {
        let waitingEntry = await WaitingList.findById(req.params.id);
        if (!waitingEntry) {
            return res.status(404).json({ message: "Waiting list entry not found" });
        }

        // Only admin can update status
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized to update waiting list status" });
        }

        waitingEntry = await WaitingList.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Waiting list entry updated successfully", waitingEntry });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remove from waiting list
exports.deleteWaitingListEntry = async (req, res) => {
    try {
        await WaitingList.findByIdAndDelete(req.params.id);
        res.json({ message: "Waiting list entry removed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
