import React, { useState } from "react";

const UploadResume = ({ setResumeData }) => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);

      // Read File Content
      const reader = new FileReader();
      reader.onload = (e) => {
        setResumeData(e.target.result);
      };
      reader.readAsText(uploadedFile);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf,.docx,.txt" onChange={handleFileUpload} />
      <button disabled={!file} style={{ backgroundColor: "blue", color: "white" }}>
        Upload Resume
      </button>
    </div>
  );
};

export default UploadResume;