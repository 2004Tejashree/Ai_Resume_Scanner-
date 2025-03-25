import React, { useState } from "react";
import UploadResume from "./UploadResume";
import TagInput from "./TagInput";
import "./Dashboard.css";
//import "./Dashboard.html"

const Dashboard = ({ onLogout }) => {
  const [jobTags, setJobTags] = useState([]);
  const [resumeData, setResumeData] = useState(null);

  return (
      
    <div className="dashboard">
      <h2>Welcome to Resume Screening Dashboard</h2>

      {/* Job Specifications Input */}
      <TagInput jobTags={jobTags} setJobTags={setJobTags} />

      {/* Resume Upload */}
      <UploadResume setResumeData={setResumeData} />

      {/* Display Screening Results */}
      <div className="results">
        <h3>Screening Results</h3>
        {resumeData ? (
          <pre>{resumeData}</pre>
        ) : (
          <p>No resumes uploaded yet.</p>
        )}
      </div>

      {/* Logout Button */}
      <button onClick={onLogout} style={{ backgroundColor: "red", color: "white" }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;