import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function PharmaTopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", to: "/company" },
    { label: "Medicines", to: "/company/medicines" },
  ];

  return (
    <nav className="navbar navbar-light bg-white border-bottom px-4">
      <span
        className="navbar-brand mb-0 h1 d-flex align-items-center gap-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/company")}
      >
        <i className="bi bi-triangle-fill text-primary"></i>
        MediConnect
      </span>
      <ul className="navbar-nav flex-row gap-4">
        {navItems.map((item) => {
          const isActive = item.to === "/company"
            ? location.pathname === "/company"
            : location.pathname.startsWith(item.to);
          return (
          <li key={item.label} className="nav-item">
            <span
              className={`nav-link ${isActive ? "fw-semibold text-primary" : "text-dark"}`}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(item.to)}
            >
              {item.label}
            </span>
          </li>
          );
        })}
      </ul>
      <div className="d-flex align-items-center gap-3"></div>
    </nav>
  );
}


