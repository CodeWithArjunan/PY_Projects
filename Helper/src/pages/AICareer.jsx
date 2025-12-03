import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AICareer.css";

export default function AICareer() {

    const navigate = useNavigate();

    const  handleTutorialVedio = () => {
        navigate("/tutorials");
    };
   
    const [data] = useState({
        mainCareer: "Data Scientist",
        accuracy: 86,
        alternatives: [
            "Software Engineer",
            "Machine Learning Engineer",
            "Product Analyst",
            "Business Intelligence Developer"
        ]
    });

    return (
        <div className="ai-container">

            <div className="ai-box">
                <h1 className="title">AI Career Recommendations</h1>
                <p className="subtitle">Based on your strengths & interests</p>

                {/* Main Career Recommendation */}
                <div className="card main-career">
                    <h2>Top Career Match</h2>
                    <p className="career-name">🎯 {data.mainCareer}</p>
                    <p className="accuracy">Match Accuracy: <strong>{data.accuracy}%</strong></p>
                </div>

                {/* Alternative Careers */}
                <div className="card">
                    <h2>Alternative Career Options</h2>

                    <ul className="career-list">
                        {data.alternatives.map((career, index) => (
                            <li key={index}>• {career}</li>
                        ))}
                    </ul>
                </div>

                <button className="continue-btn" onClick={handleTutorialVedio}>Go To Course</button>
            </div>

        </div>
    );
}