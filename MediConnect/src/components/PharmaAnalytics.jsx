import React from "react";
import PharmaTopNav from "./PharmaTopNav";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PharmaAnalytics() {
  const rows = [
    { name: "Dr. Emily Carter", points: 1250, freq: 150, last: "2024-01-15" },
    { name: "Dr. David Lee", points: 1100, freq: 130, last: "2024-01-20" },
    { name: "Dr. Sarah Jones", points: 950, freq: 110, last: "2024-01-25" },
    { name: "Dr. Michael Brown", points: 800, freq: 90, last: "2024-01-30" },
    { name: "Dr. Jessica Wilson", points: 750, freq: 85, last: "2024-02-05" },
    {
      name: "Dr. Christopher Davis",
      points: 600,
      freq: 70,
      last: "2024-02-10",
    },
    { name: "Dr. Amanda Taylor", points: 550, freq: 65, last: "2024-02-15" },
    { name: "Dr. Ryan Clark", points: 400, freq: 50, last: "2024-02-20" },
    { name: "Dr. Laura Evans", points: 350, freq: 45, last: "2024-02-25" },
    { name: "Dr. Kevin White", points: 200, freq: 30, last: "2024-03-01" },
  ];

  return (
    <div
      className="min-vh-100 bg-white"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <PharmaTopNav />
      <div className="p-4">
        <h2 className="mb-0 fw-bold">Analytics</h2>
      </div>

      <div className="px-4 pb-5">
        <h6 className="fw-semibold mb-3">Prescribing Doctors</h6>
        <div className="table-responsive">
          <table
            className="table align-middle"
            style={{ tableLayout: "fixed", width: "100%" }}
          >
            <colgroup>
              <col style={{ width: "25%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "25%" }} />
            </colgroup>
            <thead className="table-light">
              <tr>
                <th>Doctor Name</th>
                <th>Points</th>
                <th>Prescription Frequency</th>
                <th>Last Prescription Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="text-truncate">{r.name}</td>
                  <td>{r.points}</td>
                  <td>{r.freq}</td>
                  <td>{r.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
