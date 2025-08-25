import React from "react";
import { useNavigate } from "react-router-dom";
import PharmaTopNav from "./PharmaTopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function PharmaPrescriptions() {
  const navigate = useNavigate();

  const medicines = [
    { name: "Amoxicillin", dosage: "500mg", quantity: "30 capsules", available: true },
    { name: "Ibuprofen", dosage: "200mg", quantity: "60 tablets", available: false },
    { name: "Lisinopril", dosage: "10mg", quantity: "90 tablets", available: true },
  ];

  return (
    <div className="min-vh-100 bg-white" style={{ fontFamily: "Arial, sans-serif" }}>
      <PharmaTopNav />
      {/* Page header to match dashboard */}
      <div className="p-4">
        <h2 className="mb-0 fw-bold">Incoming Prescriptions</h2>
      </div>

      <div className="px-4 pb-5">
        <p className="text-muted mb-4" style={{ maxWidth: 680 }}>
          Review and manage new prescriptions received from healthcare providers.
        </p>

        <h6 className="fw-semibold mb-3">Prescription Details</h6>
        <div className="border rounded-3 mb-4">
          <div className="row g-0 border-bottom p-3">
            <div className="col-3 text-muted">Patient Name</div>
            <div className="col">Sophia Clark</div>
          </div>
          <div className="row g-0 border-bottom p-3">
            <div className="col-3 text-muted">Prescriber</div>
            <div className="col">Dr. Robert Evans</div>
          </div>
          <div className="row g-0 p-3">
            <div className="col-3 text-muted">Date Received</div>
            <div className="col">July 26, 2024</div>
          </div>
        </div>

        <h6 className="fw-semibold mb-3">Medicine List</h6>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Medicine</th>
                <th>Dosage</th>
                <th>Quantity</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((m, idx) => (
                <tr key={idx}>
                  <td>{m.name}</td>
                  <td>{m.dosage}</td>
                  <td>{m.quantity}</td>
                  <td>
                    <span className={`badge ${m.available ? "bg-success" : "bg-secondary"}`}>
                      {m.available ? "true" : "false"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="d-flex justify-content-center gap-4 text-muted small mt-5 pt-3 border-top">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Contact Us</span>
        </footer>
        <div className="text-center text-muted small mt-2">©2024 MediConnect. All rights reserved.</div>
      </div>
    </div>
  );
}


