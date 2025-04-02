const Reservation = require("../Models/ReservationModel");


// Get all reservations
exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate("customer");
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get reservation by ID
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id).populate("customer");
        if (!reservation) return res.status(404).json({ message: "Reservation not found" });
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a reservation
exports.createReservation = async (req, res) => {
    try {
        const newReservation = new Reservation(req.body);
        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Update a reservation (User can update their own, Admin can update any)
exports.updateReservation = async (req, res) => {
    try {
        let reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }

        // Check if the logged-in user is the owner or an admin
        if (req.user.id !== reservation.user.toString() && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized to update this reservation" });
        }

        reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Reservation updated successfully", reservation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete reservation
exports.deleteReservation = async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.json({ message: "Reservation deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
