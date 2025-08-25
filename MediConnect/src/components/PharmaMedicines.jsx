import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PharmaTopNav from "./PharmaTopNav";

export default function PharmaMedicines() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [sortGeneric, setSortGeneric] = useState("Generic Name");
  const [sortPopularity, setSortPopularity] = useState("Popularity");
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [form, setForm] = useState({
    name: "",
    generic: "",
    dosage: "",
    form: "",
    manufacturer: "",
    price: "",
    brochure: null,
    description: "",
  });

  const [medicines, setMedicines] = useState(
    () => [
      { name: "Amoxicillin", generic: "Amoxicillin", dosage: "500mg", form: "Capsule", manufacturer: "PharmaCorp", price: 12.5 },
      { name: "Ibuprofen", generic: "Ibuprofen", dosage: "200mg", form: "Tablet", manufacturer: "HealthMeds", price: 8.75 },
      { name: "Lisinopril", generic: "Lisinopril", dosage: "10mg", form: "Tablet", manufacturer: "CarePharma", price: 15.0 },
      { name: "Metformin", generic: "Metformin", dosage: "500mg", form: "Tablet", manufacturer: "MediHealth", price: 10.2 },
      { name: "Atorvastatin", generic: "Atorvastatin", dosage: "20mg", form: "Tablet", manufacturer: "PharmaCorp", price: 22.0 },
      { name: "Simvastatin", generic: "Simvastatin", dosage: "20mg", form: "Tablet", manufacturer: "HealthMeds", price: 20.5 },
      { name: "Levothyroxine", generic: "Levothyroxine", dosage: "50mcg", form: "Tablet", manufacturer: "CarePharma", price: 18.75 },
      { name: "Omeprazole", generic: "Omeprazole", dosage: "20mg", form: "Capsule", manufacturer: "MediHealth", price: 14.9 },
      { name: "Amlodipine", generic: "Amlodipine", dosage: "5mg", form: "Tablet", manufacturer: "PharmaCorp", price: 16.3 },
      { name: "Losartan", generic: "Losartan", dosage: "50mg", form: "Tablet", manufacturer: "HealthMeds", price: 19.8 },
    ]
  );

  const filtered = medicines.filter((m) =>
    m.generic.toLowerCase().includes(query.toLowerCase())
  );

  const openAddModal = () => {
    setIsEdit(false);
    setEditingIndex(-1);
    setForm({ name: "", generic: "", dosage: "", form: "", manufacturer: "", price: "", brochure: null, description: "" });
    setShowModal(true);
  };

  const openEditModal = (index) => {
    const m = medicines[index];
    setIsEdit(true);
    setEditingIndex(index);
    setForm({ ...m, price: String(m.price), brochure: null, description: m.description || "" });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "brochure") {
      setForm((prev) => ({ ...prev, brochure: files && files[0] ? files[0] : null }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDelete = (index) => {
    setMedicines((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const priceNum = parseFloat(form.price);
    if (!form.name || !form.generic || !form.dosage || !form.form || !form.manufacturer || isNaN(priceNum)) {
      return;
    }
    const payload = {
      name: form.name,
      generic: form.generic,
      dosage: form.dosage,
      form: form.form,
      manufacturer: form.manufacturer,
      price: priceNum,
      description: form.description,
    };
    if (isEdit && editingIndex > -1) {
      setMedicines((prev) => prev.map((m, i) => (i === editingIndex ? payload : m)));
    } else {
      setMedicines((prev) => [payload, ...prev]);
    }
    setShowModal(false);
  };

  return (
    <div className="min-vh-100 bg-white" style={{ fontFamily: "Arial, sans-serif" }}>
      <PharmaTopNav />
      {/* Page header to match dashboard */}
      <div className="p-4">
        <h2 className="mb-0 fw-bold">Manage Medicines</h2>
      </div>

      <div className="px-4 pb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div></div>
          <button className="btn btn-outline-secondary" onClick={openAddModal}>
            Add New Medicine
          </button>
        </div>

        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
            <input
              className="form-control"
              placeholder="Search by generic name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex gap-2 mb-3">
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
              Sort by: {sortGeneric}
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => setSortGeneric("Generic Name")}>Generic Name</button></li>
              <li><button className="dropdown-item" onClick={() => setSortGeneric("A-Z")}>A-Z</button></li>
              <li><button className="dropdown-item" onClick={() => setSortGeneric("Z-A")}>Z-A</button></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
              Sort by: {sortPopularity}
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => setSortPopularity("Popularity")}>Popularity</button></li>
              <li><button className="dropdown-item" onClick={() => setSortPopularity("Highest Price")}>Highest Price</button></li>
              <li><button className="dropdown-item" onClick={() => setSortPopularity("Lowest Price")}>Lowest Price</button></li>
            </ul>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Medicine Name</th>
                <th>Generic Name</th>
                <th>Dosage</th>
                <th>Form</th>
                <th>Manufacturer</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((m, idx) => (
                <tr key={idx}>
                  <td>{m.name}</td>
                  <td>{m.generic}</td>
                  <td>{m.dosage}</td>
                  <td>{m.form}</td>
                  <td>{m.manufacturer}</td>
                  <td>${m.price.toFixed(2)}</td>
                  <td className="text-nowrap">
                    <button className="btn btn-link p-0 me-2" onClick={() => openEditModal(idx)}>Edit</button>
                    |
                    <button className="btn btn-link p-0 ms-2 text-danger" onClick={() => handleDelete(idx)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isEdit ? "Edit Medicine" : "Add New Medicine"}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Medicine Name</label>
                  <input className="form-control" name="name" value={form.name} onChange={handleFormChange} placeholder="Enter medicine name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Dosage</label>
                  <input className="form-control" name="dosage" value={form.dosage} onChange={handleFormChange} placeholder="Enter dosage" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input className="form-control" name="price" value={form.price} onChange={handleFormChange} placeholder="Enter price" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Description</label>
                  <textarea className="form-control" rows="3" name="description" value={form.description} onChange={handleFormChange} placeholder="Enter product description"></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Brochure</label>
                  <input type="file" className="form-control" name="brochure" onChange={handleFormChange} />
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Generic Name</label>
                    <input className="form-control" name="generic" value={form.generic} onChange={handleFormChange} placeholder="Generic" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Form</label>
                    <input className="form-control" name="form" value={form.form} onChange={handleFormChange} placeholder="Tablet/Capsule" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Manufacturer</label>
                    <input className="form-control" name="manufacturer" value={form.manufacturer} onChange={handleFormChange} placeholder="Company" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>{isEdit ? "Save Changes" : "Add Medicine"}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show" onClick={closeModal}></div>}
    </div>
  );
}


