import React, { useState } from "react";

const TagInput = ({ jobTags, setJobTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setJobTags([...jobTags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (index) => {
    setJobTags(jobTags.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Enter Job Specifications:</h3>
      <input
        type="text"
        placeholder="Enter skills and press Enter..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleAddTag}
      />
      <div>
        {jobTags.map((tag, index) => (
          <span key={index} style={{ margin: "5px", padding: "5px", background: "#ccc" }}>
            {tag} <button onClick={() => handleRemoveTag(index)}>x</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
