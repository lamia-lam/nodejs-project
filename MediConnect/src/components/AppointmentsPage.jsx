import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AppointmentsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    patient: "",
    date: "",
    time: "",
    type: "Consultation",
  });

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patients", path: "/patients" },
    { name: "Appointments", path: "/appointments" },
    { name: "Medicines", path: "/medicines" },
    { name: "Prescriptions", path: "/prescriptions" },
    { name: "Settings", path: "/settings" },
  ];

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "John Smith",
      date: "2024-01-22",
      time: "11:00 AM",
      type: "Consultation",
      status: "Scheduled",
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      date: "2024-01-20",
      time: "09:30 AM",
      type: "Check-up",
      status: "Completed",
    },
    {
      id: 3,
      patient: "Michael Brown",
      date: "2024-01-25",
      time: "02:00 PM",
      type: "Follow-up",
      status: "Scheduled",
    },
    {
      id: 4,
      patient: "Emily Davis",
      date: "2024-01-18",
      time: "12:15 PM",
      type: "Consultation",
      status: "Cancelled",
    },
    {
      id: 5,
      patient: "Robert Wilson",
      date: "2024-01-19",
      time: "10:45 AM",
      type: "Check-up",
      status: "Completed",
    },
  ]);

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch = apt.patient
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" ? true : apt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const openAddModal = () => {
    setShowAddModal(true);
    setNewAppointment({
      patient: "",
      date: "",
      time: "",
      type: "Consultation",
    });
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    setNewAppointment({
      patient: "",
      date: "",
      time: "",
      type: "Consultation",
    });
  };

  const handleNewApptChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAppointment = () => {
    if (
      !newAppointment.patient ||
      !newAppointment.date ||
      !newAppointment.time ||
      !newAppointment.type
    )
      return;
    setAppointments((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((a) => a.id)) + 1 : 1;
      return [
        ...prev,
        {
          id: nextId,
          patient: newAppointment.patient,
          date: newAppointment.date,
          time: newAppointment.time,
          type: newAppointment.type,
          status: "Scheduled",
        },
      ];
    });
    closeAddModal();
  };

  const updateAppointmentStatus = (appointmentId, newStatus) => {
    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === appointmentId ? { ...apt, status: newStatus } : apt
      )
    );
  };

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
                    item.name === "Appointments"
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
            <h2 className="fw-bold">Appointments</h2>
            <p className="text-muted">View and manage your appointments</p>
          </div>
          <button className="btn btn-primary" onClick={openAddModal}>
            <i className="bi bi-calendar-plus me-2"></i>Schedule Appointment
          </button>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-5">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search by patient name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Scheduled</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((apt) => (
                <tr key={apt.id}>
                  <td>{apt.patient}</td>
                  <td>{apt.date}</td>
                  <td>{apt.time}</td>
                  <td>{apt.type}</td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      value={apt.status}
                      onChange={(e) =>
                        updateAppointmentStatus(apt.id, e.target.value)
                      }
                    >
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Results Message */}
        {filteredAppointments.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-calendar-x fs-1 text-muted mb-3"></i>
            <h5 className="text-muted">No appointments found</h5>
            <p className="text-muted">
              {searchTerm || statusFilter !== "All"
                ? "Try adjusting your search or filter criteria"
                : "Schedule your first appointment to get started"}
            </p>
          </div>
        )}
      </div>

      {/* Schedule Appointment Modal */}
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
                  <i className="bi bi-calendar-plus me-2 text-primary"></i>
                  Schedule Appointment
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeAddModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="patient"
                    value={newAppointment.patient}
                    onChange={handleNewApptChange}
                    placeholder="Enter patient name"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Date *</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={newAppointment.date}
                      onChange={handleNewApptChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Time *</label>
                    <input
                      type="time"
                      className="form-control"
                      name="time"
                      value={newAppointment.time}
                      onChange={handleNewApptChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Type *</label>
                  <select
                    className="form-select"
                    name="type"
                    value={newAppointment.type}
                    onChange={handleNewApptChange}
                    required
                  >
                    <option>Consultation</option>
                    <option>Check-up</option>
                    <option>Follow-up</option>
                  </select>
                </div>
                <div className="mb-2">
                  <small className="text-muted">
                    Status will be set to "Scheduled"
                  </small>
                </div>
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
                  onClick={handleAddAppointment}
                  disabled={
                    !newAppointment.patient ||
                    !newAppointment.date ||
                    !newAppointment.time
                  }
                >
                  <i className="bi bi-check2-circle me-2"></i>Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {showAddModal && (
        <div className="modal-backdrop fade show" onClick={closeAddModal}></div>
      )}
    </>
  );
}
