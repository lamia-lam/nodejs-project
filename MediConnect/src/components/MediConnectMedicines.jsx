import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function MedicinesPage() {
  const navigate = useNavigate();

  const medicines = [
    {
      name: "Medication A",
      manufacturer: "PharmaCorp",
      dosage: "500mg",
      price: "$25",
    },
    {
      name: "Medication B",
      manufacturer: "HealthSolutions",
      dosage: "250mg",
      price: "$18",
    },
    {
      name: "Medication C",
      manufacturer: "GlobalPharma",
      dosage: "100mg",
      price: "$12",
    },
    {
      name: "Medication D",
      manufacturer: "BioMed",
      dosage: "750mg",
      price: "$35",
    },
    {
      name: "Medication E",
      manufacturer: "InnovateMeds",
      dosage: "300mg",
      price: "$20",
    },
    {
      name: "Medication F",
      manufacturer: "CarePharma",
      dosage: "400mg",
      price: "$22",
    },
    {
      name: "Medication G",
      manufacturer: "LifeScience",
      dosage: "600mg",
      price: "$30",
    },
    {
      name: "Medication H",
      manufacturer: "MediCorp",
      dosage: "150mg",
      price: "$15",
    },
    {
      name: "Medication I",
      manufacturer: "VitalMeds",
      dosage: "200mg",
      price: "$17",
    },
    {
      name: "Medication J",
      manufacturer: "ApexPharma",
      dosage: "800mg",
      price: "$40",
    },
  ];

  return (
    <div className="container-fluid px-5 py-4">
      {/* Top Navigation - Desktop View */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom mb-4">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">
            <i className="bi bi-triangle-fill me-2 text-primary"></i>
            MediConnect
          </span>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav me-auto">
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
                    className={`nav-link ${
                      item === "Medicines" ? "active fw-semibold" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(
                        item.toLowerCase() === "dashboard"
                          ? "/dashboard"
                          : `/${item.toLowerCase()}`
                      )
                    }
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* Profile Icon */}
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/profile")}
            >
              <i className="bi bi-person-circle fs-4 text-primary"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold">Medicines</h2>
          <p className="text-muted">
            Browse available medicines and their information
          </p>
        </div>
      </div>

      {/* Filters - Horizontal for Laptop */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for medicines"
          />
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>All Categories</option>
            <option>Antibiotics</option>
            <option>Pain Relievers</option>
            <option>Anti-inflammatory</option>
            <option>Cardiovascular</option>
            <option>Diabetes</option>
            <option>Respiratory</option>
            <option>Gastrointestinal</option>
            <option>Vitamins & Supplements</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>All Manufacturers</option>
            <option>PharmaCorp</option>
            <option>HealthSolutions</option>
            <option>GlobalPharma</option>
            <option>BioMed</option>
            <option>InnovateMeds</option>
            <option>CarePharma</option>
            <option>LifeScience</option>
            <option>MediCorp</option>
            <option>VitalMeds</option>
            <option>ApexPharma</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>All Dosages</option>
            <option>100mg</option>
            <option>150mg</option>
            <option>200mg</option>
            <option>250mg</option>
            <option>300mg</option>
            <option>400mg</option>
            <option>500mg</option>
            <option>600mg</option>
            <option>750mg</option>
            <option>800mg</option>
          </select>
        </div>
      </div>

      {/* Medicines Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Medicine</th>
              <th>Manufacturer</th>
              <th>Dosage</th>
              <th>Price</th>
              <th>Brochure</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med, index) => (
              <tr key={index}>
                <td>{med.name}</td>
                <td className="text-primary">{med.manufacturer}</td>
                <td>{med.dosage}</td>
                <td>{med.price}</td>
                <td>
                  <button className="btn btn-link p-0">View Brochure</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
