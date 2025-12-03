import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Form Data:", form);
        if (form.email && form.password) {
            navigate("/strengths");
        }
    };

    return (
        <div className="login-container">

            <div className="login-box">
                <h1>Student Login</h1>

                <form onSubmit={handleSubmit} className="login-form">

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="login-btn">Login</button>

                    <p className="signup-text">
                        Don’t have an account? <span className="link">Sign Up</span>
                    </p>

                </form>
            </div>

        </div>
    );
}