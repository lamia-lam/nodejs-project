import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrescriptionSubmit() {
  const navigate = useNavigate();
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patients", path: "/patients" },
    { name: "Appointments", path: "/appointments" },
    { name: "Medicines", path: "/medicines" },
    { name: "Prescriptions", path: "/prescriptions" },
    { name: "Settings", path: "/settings" },
  ];

  const handleDownloadPDF = () => {
    alert("Downloading prescription PDF...");
  };

  const handleNewPrescription = () => {
    navigate("/prescriptions/new");
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Navbar (consistent with other pages) */}
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

      {/* Main Content */}
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-5 fw-bold text-dark mb-4">
            Prescription Submitted Successfully
          </h1>
          <p className="lead text-muted mb-5">
            Your prescription has been successfully submitted to the pharmacy.
            You can download a copy for your records or start a new
            prescription.
          </p>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-primary px-4"
              onClick={handleDownloadPDF}
            >
              Download PDF
            </button>
            <button
              className="btn btn-outline-secondary px-4"
              onClick={handleNewPrescription}
            >
              New Prescription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
