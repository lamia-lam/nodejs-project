import React from "react";
import { Routes, Route } from "react-router-dom";
import MediConnectLogin from "./components/MediConnectLogin";
import MediConnectDashboard from "./components/MediConnectDashboard";
import MediConnectMedicines from "./components/MediConnectMedicines";
import ProfileSettings from "./components/ProfileSetting";
import PrescriptionPage from "./components/PrescriptionPage";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MediConnectLogin />} />
      <Route path="/dashboard" element={<MediConnectDashboard />} />
      <Route path="/medicines" element={<MediConnectMedicines />} />
      <Route path="/profile" element={<ProfileSettings />} />
      <Route path="/prescriptions" element={<PrescriptionPage />} />
    </Routes>
  );
}
