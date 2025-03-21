const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
exports.authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET); // Secret key from .env
        req.user = verified; // Attach user info to request
        next(); // Proceed to the next middleware/route
    } catch (error) {
        res.status(400).json({ message: "Invalid token!" });
    }
};

// Middleware to check user roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: You do not have access." });
        }
        next();
    };
};
