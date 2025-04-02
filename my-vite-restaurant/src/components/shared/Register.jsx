import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "staff", // Default role; adjust as needed
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const { name, email, password, confirmPassword, role } = formData;

        // Basic validation
        if (!name || !email || !password || !confirmPassword || !role) {
            setError("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3000/api/register",
                { name, email, password, confirmPassword, role},
                { withCredentials: true }
            );

            if (response.status === 201) {
                alert("Registration successful!");
                navigate("/login"); // Redirect to login page
            }
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select name="role" value={formData.role} onChange={handleChange} required>
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                        {/* Add more roles as needed */}
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
