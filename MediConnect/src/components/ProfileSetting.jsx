import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function ProfileSettings() {
  const navigate = useNavigate();

  return (
    <>
      {/* 🔹 Header Navigation Bar */}
      <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3">
        <div className="container-fluid">
          {/* Logo */}
          <span className="navbar-brand fw-bold">
            <i className="bi bi-triangle-fill me-2 text-primary"></i>{" "}
            MediConnect
          </span>

          {/* Nav links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            {[
              "Dashboard",
              "Patients",
              "Appointments",
              "Medicines",
              "Prescriptions",
              "Settings",
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <span
                  className={`nav-link fw-medium text-dark ${
                    item === "Settings" ? "fw-semibold active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/${item.toLowerCase()}`)}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Right: Notifications and Profile Icon */}
          <div className="d-flex align-items-center">
            <button className="btn btn-link position-relative me-4">
              <i className="bi bi-bell fs-5 text-dark"></i>
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
            </button>

            <div
              className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
              style={{ width: "50px", height: "50px" }}
            >
              <span className="text-white fs-5">👨‍⚕️</span>
            </div>
          </div>
        </div>
      </header>

      {/* 🔹 Profile Settings Form */}
      <div className="container mt-5">
        <h2 className="mb-4 fw-bold">Profile & Settings</h2>

        {/* Contact Information */}
        <div className="mb-4">
          <h5 className="fw-bold">Contact Information</h5>

          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* Specialization */}
        <div className="mb-4">
          <h5 className="fw-bold">Specialization</h5>
          <select className="form-select">
            <option value="">Select Specialization</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
        </div>

        {/* Password */}
        <div className="mb-4">
          <h5 className="fw-bold">Password</h5>

          <div className="mb-3">
            <label className="form-label fw-semibold">Current Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter current password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Confirm New Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-end">
          <button className="btn btn-primary">Update Profile</button>
        </div>
      </div>
    </>
  );
}

export default ProfileSettings;
