import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("REGISTER DATA READY:", form);
    // Later: authService.register(form)
  };

  return (
    <div className="page">
      <form className="auth-container" onSubmit={handleSubmit}>
        <div className="auth-title">Create Account</div>

        <div className="auth-field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="•••••••"
            onChange={handleChange}
            required
          />
        </div>

        <button className="auth-btn" type="submit">Register</button>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
