import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

export default function PrescriptionPage() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patients", path: "/patients" },
    { name: "Appointments", path: "/appointments" },
    { name: "Medicines", path: "/medicines" },
    { name: "Prescriptions", path: "/prescriptions" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* 🔹 Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">
            <i className="bi bi-triangle-fill me-2 text-primary"></i>
            MediConnect
          </span>

          <ul className="navbar-nav me-auto ms-4 mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <span
                  className={`nav-link ${
                    item.name === "Prescriptions"
                      ? "fw-semibold text-primary"
                      : "text-dark"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center">
            <i
              className="bi bi-person-circle fs-4 text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/profile")}
            ></i>
          </div>
        </div>
      </nav>

      {/* 🔹 Main Content */}
      <div className="container py-5">
        <h2 className="fw-bold mb-4">New Prescription</h2>

        {/* Patient Info */}
        <div className="mb-4">
          <div className="mb-3">
            <label className="form-label fw-semibold">Patient Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter patient’s full name"
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">Patient Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter patient’s phone number"
            />
          </div>
        </div>

        {/* Medicine Info */}
        <div className="mb-4">
          <h4 className="fw-bolder mt-5 mb-3">Select Medicines</h4>
          <div className="mb-3">
            <label className="form-label fw-semibold">Medicine</label>
            <select className="form-select">
              <option>Select a medicine</option>
              <option>Paracetamol</option>
              <option>Ibuprofen</option>
              <option>Amoxicillin</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Dosage</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., 500mg"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Duration</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., 7 days"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Notes</label>
          <textarea
            rows="4"
            className="form-control"
            placeholder="Add any additional notes for the patient"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-end">
          <button className="btn btn-primary px-4">Submit</button>
        </div>
      </div>
    </>
  );
}
