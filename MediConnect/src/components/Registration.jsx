import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedRole: "",
  });
  const [roleError, setRoleError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "selectedRole") {
      setRoleError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration attempt:", formData);

    if (!formData.selectedRole) {
      setRoleError(true);
      window.alert("Please choose a role");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      window.alert("Passwords do not match");
      return;
    }

    // If registration is successful, navigate based on role
    if (formData.selectedRole === "doctor") {
      navigate("/dashboard");
    } else if (formData.selectedRole === "company") {
      navigate("/company");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <div className="text-center mb-4">
          <span className="fs-4 fw-bold text-dark">MediConnect</span>
          <h5 className="text-muted">Create your account</h5>
        </div>

        {/* Role selection dropdown (required) */}
        <div className="mb-3 text-start">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            id="role"
            name="selectedRole"
            className={`form-select ${
              roleError && !formData.selectedRole ? "is-invalid" : ""
            }`}
            value={formData.selectedRole}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a role</option>
            <option value="doctor">Doctor</option>
            <option value="company">Pharma Company</option>
          </select>
          {roleError && !formData.selectedRole && (
            <div className="invalid-feedback">
              Please choose a role to continue.
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign up
          </button>
        </form>

        <div className="text-center small text-muted">
          Already have an account?{" "}
          <a href="/" className="text-primary text-decoration-none fw-semibold">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
