import React from "react";
import { Routes, Route } from "react-router-dom";
import MediConnectLogin from "./components/MediConnectLogin";
import MediConnectDashboard from "./components/MediConnectDashboard";
import MediConnectMedicines from "./components/MediConnectMedicines";
import ProfileSettings from "./components/ProfileSetting";
import PrescriptionPage from "./components/PrescriptionPage";
import PrescriptionSubmit from "./components/PrescriptionSubmit";
import NewPrescriptionPage from "./components/NewPrescriptionPage";
import PatientPage from "./components/PatientsPage";
import AppointmentsPage from "./components/AppointmentsPage";
import PharmaDashboard from "./components/PharmaDashboard";
import PharmaPrescriptions from "./components/PharmaPrescriptions";
import PharmaMedicines from "./components/PharmaMedicines";
import PharmaAnalytics from "./components/PharmaAnalytics";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MediConnectLogin />} />
      <Route path="/dashboard" element={<MediConnectDashboard />} />
      <Route path="/medicines" element={<MediConnectMedicines />} />
      <Route path="/profile" element={<ProfileSettings />} />
      <Route path="/prescriptions" element={<PrescriptionPage />} />
      <Route path="/prescriptions/new" element={<NewPrescriptionPage />} />
      <Route path="/prescriptions/submit" element={<PrescriptionSubmit />} />
      <Route path="/patients" element={<PatientPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/company" element={<PharmaDashboard />} />
      <Route path="/company/prescriptions" element={<PharmaPrescriptions />} />
      <Route path="/company/medicines" element={<PharmaMedicines />} />
      <Route path="/company/analytics" element={<PharmaAnalytics />} />
    </Routes>
  );
}
