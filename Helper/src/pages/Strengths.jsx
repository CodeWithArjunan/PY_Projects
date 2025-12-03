import React, { useState } from "react";
import "../styles/Strengths.css";
import { useNavigate } from "react-router-dom";

export default function strengths() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/Tstrengths");
  };

  const strengthOptions = [
    "Communication",
    "Problem-solving",
    "Leadership",
    "Teamwork",
    "Creativity",
    "Time Management",
    "Critical Thinking",
    "Adaptability",
    "Attention to Detail",
    "Decision Making",
    "Analytical Thinking",
    "Organization",
    "Public Speaking",
    "Empathy",
    "Logical Reasoning",
    "Initiative",
    "Collaboration",
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
        <h1 className="title">Tell Us Your SoftSkills</h1>
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
