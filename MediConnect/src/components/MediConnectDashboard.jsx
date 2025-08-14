import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

export default function MediConnectDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();

  const sidebarItems = [
    { name: "Dashboard", icon: "bi-house" },
    { name: "Patients", icon: "bi-people" },
    { name: "Appointments", icon: "bi-calendar-event" },
    { name: "Medicines", icon: "bi bi-capsule-pill" },
    { name: "Prescriptions", icon: "bi-file-earmark-text" },
    { name: "Settings", icon: "bi-gear" },
  ];

  const medicineData = [
    { name: "Amoxicillin", prescriptions: 150 },
    { name: "Ibuprofen", prescriptions: 120 },
    { name: "Metformin", prescriptions: 100 },
  ];
  const handleSidebarClick = (name) => {
    setActiveTab(name);

    if (name === "Medicines") {
      navigate("/medicines"); // ✅ go to Medicines page
    }
    if (name === "Prescriptions") {
      navigate("/prescriptions");
    }
  };

  return (
    <div
      className="d-flex min-vh-100"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Sidebar */}
      <div
        className="bg-light border-end"
        style={{ width: "280px", minHeight: "100vh" }}
      >
        {/* Doctor Profile */}
        <div
          className="p-4 border-bottom"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        >
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
              style={{ width: "50px", height: "50px" }}
            >
              <span className="text-white fs-5">👨‍⚕️</span>
            </div>
            <div>
              <h6 className="mb-0 fw-bold">Dr. Alex Turner</h6>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-3">
          <ul className="list-unstyled">
            {sidebarItems.map((item, index) => (
              <li key={index} className="mb-2">
                <button
                  className={`btn w-100 text-start d-flex align-items-center p-3 ${
                    activeTab === item.name
                      ? "btn-primary"
                      : "btn-outline-light text-dark border-0"
                  }`}
                  onClick={() => handleSidebarClick(item.name)}
                  style={{
                    backgroundColor:
                      activeTab === item.name ? "#0d6efd" : "transparent",
                    borderRadius: "8px",
                  }}
                >
                  <i
                    className={`me-3 bi ${item.icon}`}
                    style={{ fontSize: "18px" }}
                  ></i>
                  <span className="fw-medium">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-white">
        {/* Header */}
        <div className="border-bottom p-4">
          <h2 className="mb-0 fw-bold">Dashboard</h2>
        </div>

        {/* Dashboard Content */}
        <div className="p-4">
          {/* Stats Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="card-body p-4">
                  <h6 className="card-title text-muted mb-3">
                    Today's Patients
                  </h6>
                  <h2
                    className="card-text fw-bold mb-0"
                    style={{ fontSize: "2.5rem" }}
                  >
                    12
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="card-body p-4">
                  <h6 className="card-title text-muted mb-3">Total Patients</h6>
                  <h2
                    className="card-text fw-bold mb-0"
                    style={{ fontSize: "2.5rem" }}
                  >
                    350
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="card-body p-4">
                  <h6 className="card-title text-muted mb-3">
                    Average Appointment Duration
                  </h6>
                  <h2
                    className="card-text fw-bold mb-0"
                    style={{ fontSize: "2.5rem" }}
                  >
                    30 mins
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Most Prescribed Medicines */}
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-bottom-0 p-4">
                  <h4 className="mb-0 fw-bold">Most Prescribed Medicines</h4>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead style={{ backgroundColor: "#f8f9fa" }}>
                        <tr>
                          <th className="border-0 p-4 fw-semibold text-muted">
                            Medicine
                          </th>
                          <th className="border-0 p-4 fw-semibold text-muted text-end">
                            Prescriptions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {medicineData.map((medicine, index) => (
                          <tr key={index}>
                            <td className="p-4 border-0">
                              <span className="fw-medium">{medicine.name}</span>
                            </td>
                            <td className="p-4 border-0 text-end">
                              <span className="text-primary fw-semibold">
                                {medicine.prescriptions}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
