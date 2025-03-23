import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = ({ onLogout }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Uploaded: ${selectedFile.name}`);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to Resume Screening Dashboard</h2>
      
      {/* Resume Upload Section */}
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Resume</button>
      </div>

      {/* Screening Results (Placeholder) */}
      <div className="results-section">
        <h3>Screening Results</h3>
        <p>No resumes uploaded yet.</p>
      </div>

      {/* Logout Button */}
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
