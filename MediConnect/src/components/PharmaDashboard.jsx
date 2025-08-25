import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function PharmaDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { name: "Dashboard", icon: "bi-house" },
    { name: "Prescriptions", icon: "bi-file-earmark-text" },
    { name: "Medicines", icon: "bi-capsule" },
    { name: "Analytics", icon: "bi-graph-up" },
  ];

  const handleSidebarClick = (name) => {
    if (name === "Dashboard") navigate("/company");
    if (name === "Prescriptions") navigate("/company/prescriptions");
    if (name === "Medicines") navigate("/company/medicines");
    if (name === "Analytics") navigate("/company/analytics");
  };

  const activeName = (() => {
    const p = location.pathname;
    if (p.startsWith("/company/prescriptions")) return "Prescriptions";
    if (p.startsWith("/company/medicines")) return "Medicines";
    if (p.startsWith("/company/analytics")) return "Analytics";
    return "Dashboard";
  })();

  const recentRows = [
    { date: "2024-07-26", id: "RX12345", name: "Sophia Clark", status: "Filled" },
    { date: "2024-07-26", id: "RX67890", name: "Ethan Carter", status: "Pending" },
    { date: "2024-07-25", id: "RX11223", name: "Olivia Bennett", status: "Filled" },
    { date: "2024-07-25", id: "RX44556", name: "Liam Harper", status: "Pending" },
    { date: "2024-07-24", id: "RX77889", name: "Ava Foster", status: "Filled" },
  ];

  return (
    <div className="d-flex min-vh-100" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <div className="bg-white border-end d-flex flex-column" style={{ width: "280px", minHeight: "100vh" }}>
        {/* Brand */}
        <div className="p-4 border-bottom">
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
              style={{ width: "40px", height: "40px" }}
            >
              <i className="bi bi-capsule text-white"></i>
            </div>
            <h6 className="mb-0 fw-bold">MediConnect</h6>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3">
          <ul className="list-unstyled mb-0">
            {sidebarItems.map((item, index) => (
              <li key={index} className="mb-2">
                <button
                  className={`btn w-100 text-start d-flex align-items-center p-3 ${
                    activeName === item.name ? "btn-light" : "btn-outline-light text-dark border-0"
                  }`}
                  onClick={() => handleSidebarClick(item.name)}
                  style={{ borderRadius: "10px" }}
                >
                  <i className={`me-3 bi ${item.icon}`} style={{ fontSize: "18px" }}></i>
                  <span className="fw-medium">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-3 border-top">
          <button
            className="btn w-100 text-start d-flex align-items-center p-3 btn-outline-danger border-0"
            style={{ borderRadius: "10px" }}
            onClick={() => navigate("/")}
          >
            <i className="me-3 bi bi-box-arrow-right" style={{ fontSize: "18px" }}></i>
            <span className="fw-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-grow-1 bg-white">
        {/* Header */}
        <div className="p-4">
          <h2 className="mb-0 fw-bold">Dashboard</h2>
        </div>

        <div className="px-4">
          {/* KPI Cards */}
          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="border rounded-3 p-4" style={{ backgroundColor: "#f6f7f8" }}>
                <div className="text-muted mb-2">Today's Prescriptions</div>
                <div className="fw-bold" style={{ fontSize: "28px" }}>125</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border rounded-3 p-4" style={{ backgroundColor: "#f6f7f8" }}>
                <div className="text-muted mb-2">Pending Fulfillments</div>
                <div className="fw-bold" style={{ fontSize: "28px" }}>32</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border rounded-3 p-4" style={{ backgroundColor: "#f6f7f8" }}>
                <div className="text-muted mb-2">Low Stock Alerts</div>
                <div className="fw-bold" style={{ fontSize: "28px" }}>15</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-3 fw-bold" style={{ fontSize: "20px" }}>Recent Activity</div>
          <div className="table-responsive mb-5">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Prescription ID</th>
                  <th>Patient Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>
                      <span className={`badge ${row.status === "Filled" ? "bg-secondary" : "bg-warning"}`}>
                        {row.status}
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
  );
}


