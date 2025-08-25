import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function PatientPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  });

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Smith",
      age: 45,
      phone: "+1 (555) 123-4567",
      lastVisit: "2024-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 32,
      phone: "+1 (555) 234-5678",
      lastVisit: "2024-01-10",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 58,
      phone: "+1 (555) 345-6789",
      lastVisit: "2024-01-08",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 29,
      phone: "+1 (555) 456-7890",
      lastVisit: "2024-01-12",
      status: "Active",
    },
    {
      id: 5,
      name: "Robert Wilson",
      age: 67,
      phone: "+1 (555) 567-8901",
      lastVisit: "2024-01-05",
      status: "Active",
    },
  ]);

  // Sample appointment and prescription data
  // eslint-disable-next-line no-unused-vars
  const getPatientHistory = (patientId) => {
    const appointments = [
      {
        id: 1,
        date: "2024-01-15",
        time: "10:00 AM",
        type: "Check-up",
        status: "Completed",
      },
      {
        id: 2,
        date: "2024-01-08",
        time: "2:30 PM",
        type: "Follow-up",
        status: "Completed",
      },
      {
        id: 3,
        date: "2024-01-22",
        time: "11:00 AM",
        type: "Consultation",
        status: "Scheduled",
      },
    ];

    const prescriptions = [
      {
        id: 1,
        date: "2024-01-15",
        medicine: "Amoxicillin",
        dosage: "500mg",
        duration: "7 days",
        status: "Active",
      },
      {
        id: 2,
        date: "2024-01-08",
        medicine: "Ibuprofen",
        dosage: "400mg",
        duration: "5 days",
        status: "Completed",
      },
      {
        id: 3,
        date: "2024-01-01",
        medicine: "Vitamin D",
        dosage: "1000 IU",
        duration: "30 days",
        status: "Active",
      },
    ];

    return { appointments, prescriptions };
  };

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPatient(null);
  };

  const openAddModal = () => {
    setShowAddModal(true);
    setNewPatient({
      name: "",
      age: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    setNewPatient({
      name: "",
      age: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.phone) {
      const newPatientData = {
        id: patients.length + 1,
        name: newPatient.name,
        age: parseInt(newPatient.age),
        phone: newPatient.phone,
        lastVisit: new Date().toISOString().split("T")[0], // Today's date
        status: "Active",
      };

      setPatients((prev) => [...prev, newPatientData]);
      closeAddModal();
    }
  };

  // Filter patients based on search term
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                    item.name === "Patients"
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
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Patients</h2>
            <p className="text-muted">Manage your patient records</p>
          </div>
          <button className="btn btn-primary" onClick={openAddModal}>
            <i className="bi bi-plus me-2"></i>Add Patient
          </button>
        </div>

        {/* Search and Filter */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search patients by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mb-3">
            <small className="text-muted">
              Showing {filteredPatients.length} of {patients.length} patients
              {searchTerm && ` for "${searchTerm}"`}
            </small>
          </div>
        )}

        {/* Patients Table */}
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Last Visit</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <span className="text-white fw-bold">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="fw-semibold">{patient.name}</span>
                    </div>
                  </td>
                  <td>{patient.age}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.lastVisit}</td>
                  <td>
                    <span className="badge bg-success">{patient.status}</span>
                  </td>
                  <td>
                    <div className="btn-group" role="group">
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => handleViewPatient(patient)}
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Results Message */}
        {searchTerm && filteredPatients.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-search fs-1 text-muted mb-3"></i>
            <h5 className="text-muted">No patients found</h5>
            <p className="text-muted">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      {/* Add Patient Modal */}
      {showAddModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-person-plus me-2 text-primary"></i>
                  Add New Patient
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeAddModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={newPatient.name}
                      onChange={handleInputChange}
                      placeholder="Enter patient's full name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Age *</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={newPatient.age}
                      onChange={handleInputChange}
                      placeholder="Enter age"
                      min="0"
                      max="120"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={newPatient.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={newPatient.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address (optional)"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Address</label>
                    <textarea
                      className="form-control"
                      name="address"
                      value={newPatient.address}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Enter address (optional)"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeAddModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddPatient}
                  disabled={
                    !newPatient.name || !newPatient.age || !newPatient.phone
                  }
                >
                  <i className="bi bi-plus me-2"></i>Add Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Patient History Modal */}
      {showModal && selectedPatient && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-person-circle me-2 text-primary"></i>
                  {selectedPatient.name} - Patient History
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                {/* Patient Info */}
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h6 className="fw-bold text-muted mb-2">
                      Patient Information
                    </h6>
                    <p className="mb-1">
                      <strong>Age:</strong> {selectedPatient.age}
                    </p>
                    <p className="mb-1">
                      <strong>Phone:</strong> {selectedPatient.phone}
                    </p>
                    <p className="mb-1">
                      <strong>Last Visit:</strong> {selectedPatient.lastVisit}
                    </p>
                    <p className="mb-0">
                      <strong>Status:</strong>
                      <span className="badge bg-success ms-2">
                        {selectedPatient.status}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-bold text-muted mb-2">Quick Stats</h6>
                    <div className="d-flex justify-content-between">
                      <div className="text-center">
                        <h4 className="text-primary mb-0">3</h4>
                        <small className="text-muted">Appointments</small>
                      </div>
                      <div className="text-center">
                        <h4 className="text-success mb-0">3</h4>
                        <small className="text-muted">Prescriptions</small>
                      </div>
                      <div className="text-center">
                        <h4 className="text-info mb-0">2</h4>
                        <small className="text-muted">Active Meds</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Appointments History */}
                <div className="mb-4">
                  <h6 className="fw-bold text-muted mb-3">
                    <i className="bi bi-calendar3 me-2"></i>Appointment History
                  </h6>
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead className="table-light">
                        <tr>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Type</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getPatientHistory(selectedPatient.id).appointments.map(
                          (apt) => (
                            <tr key={apt.id}>
                              <td>{apt.date}</td>
                              <td>{apt.time}</td>
                              <td>{apt.type}</td>
                              <td>
                                <span
                                  className={`badge ${
                                    apt.status === "Completed"
                                      ? "bg-success"
                                      : "bg-warning"
                                  }`}
                                >
                                  {apt.status}
                                </span>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Prescription History */}
                <div className="mb-3">
                  <h6 className="fw-bold text-muted mb-3">
                    <i className="bi bi-prescription me-2"></i>Prescription
                    History
                  </h6>
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead className="table-light">
                        <tr>
                          <th>Date</th>
                          <th>Medicine</th>
                          <th>Dosage</th>
                          <th>Duration</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getPatientHistory(
                          selectedPatient.id
                        ).prescriptions.map((prescription) => (
                          <tr key={prescription.id}>
                            <td>{prescription.date}</td>
                            <td>{prescription.medicine}</td>
                            <td>{prescription.dosage}</td>
                            <td>{prescription.duration}</td>
                            <td>
                              <span
                                className={`badge ${
                                  prescription.status === "Active"
                                    ? "bg-success"
                                    : "bg-secondary"
                                }`}
                              >
                                {prescription.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-plus me-2"></i>New Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrops */}
      {(showModal || showAddModal) && (
        <div
          className="modal-backdrop fade show"
          onClick={showAddModal ? closeAddModal : closeModal}
        ></div>
      )}
    </>
  );
}
