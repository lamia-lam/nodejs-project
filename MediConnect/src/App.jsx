import React from "react";
import { Routes, Route } from "react-router-dom";
import MediConnectLogin from "./Components/MediConnectLogin";
import MediConnectDashboard from "./components/MediConnectDashboard";
import MediConnectMedicines from "./components/MediConnectMedicines";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MediConnectLogin />} />
      <Route path="/dashboard" element={<MediConnectDashboard />} />
      <Route path="/Mediciences" element={<MediConnectMedicines />} />
    </Routes>
  );
}
