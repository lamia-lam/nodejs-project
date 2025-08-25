import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MediConnectLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // required: "doctor" | "company"
  const [roleError, setRoleError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });

    if (!selectedRole) {
      setRoleError(true);
      window.alert("Please choose a role");
      return;
    }

    // Navigate after successful login based on role
    if (selectedRole === "doctor") {
      navigate("/dashboard");
    } else if (selectedRole === "company") {
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
          <h5 className="text-muted">Welcome back</h5>
        </div>

        {/* Role selection dropdown (required) */}
        <div className="mb-3 text-start">
          <label htmlFor="role" className="form-label">Role</label>
          <select
            id="role"
            className={`form-select ${roleError && !selectedRole ? "is-invalid" : ""}`}
            value={selectedRole}
            onChange={(e) => {
              setSelectedRole(e.target.value);
              setRoleError(false);
              // Do not navigate here; navigation occurs on login submit
            }}
            required
          >
            <option value="">Select a role</option>
            <option value="doctor">Doctor</option>
            <option value="company">Pharma Company</option>
          </select>
          {roleError && !selectedRole && (
            <div className="invalid-feedback">Please choose a role to continue.</div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-end mb-3">
            <a
              href="/forgot-password"
              className="text-primary text-decoration-none"
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Log in
          </button>
        </form>

        <div className="text-center small text-muted">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-primary text-decoration-none fw-semibold"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
