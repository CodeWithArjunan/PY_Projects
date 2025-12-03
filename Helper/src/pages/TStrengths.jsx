import React, { useState } from "react";
import "../styles/Strengths.css";
import { useNavigate } from "react-router-dom";

export default function Tstrengths() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/career");
  };

  const strengthOptions = [
    "3D Modeling",
    "Problem-solving",
    "Data Analytics",
    "Robotics",
    "Linx",
    "Drones",
    "Internet of Things (IoT)",
    "Hand Tools",
    "Digital Twin",
    "Decision Making",
    "Analytical Thinking",
    "Jira",
    "Azure DevOps",
    "Monday devops",
    "Clickup",
    "AI-Powered Recommendations",
    "Deployment",
  ];

  const [selectedStrengths, setSelectedStrengths] = useState([]);

  const toggleStrength = (strength) => {
    if (selectedStrengths.includes(strength)) {
      setSelectedStrengths(
        selectedStrengths.filter((item) => item !== strength)
      );
    } else {
      setSelectedStrengths([...selectedStrengths, strength]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Strengths:", selectedStrengths);
  };

  return (
    <div className="strength-container">
      <div className="strength-box">
        <h1 className="title">Tell Us Your TechSkills</h1>
        <p className="subtitle">Select the strengths that best describe you</p>

        <form onSubmit={handleSubmit} className="strength-form">
          {strengthOptions.map((strength) => (
            <label
              key={strength}
              className={`strength-item ${
                selectedStrengths.includes(strength) ? "active" : ""
              }`}
              onClick={() => toggleStrength(strength)}
            >
              <input
                type="checkbox"
                value={strength}
                checked={selectedStrengths.includes(strength)}
                onChange={() => toggleStrength(strength)}
              />
              <span>{strength}</span>
            </label>
          ))}

          <button
            type="submit"
            className="continue-btn"
            onClick={handleNextPage}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
