import React from "react";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

export default function Dashboard() {
  const progress = 25; // percentage

  const skills = [
    "Python Programming",
    "Data Analysis",
    "Machine Learning Basics",
    "Problem Solving",
    "Statistics",
  ];

  const roadmap = [
    { step: "Complete Python Basics", done: true },
    { step: "Learn Data Visualization", done: false },
    { step: "Start Machine Learning Course", done: false },
    { step: "Build a Mini Project", done: false },
    { step: "Apply for Internships", done: false },
  ];

  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <FaCircleUser  style={{width:'100px', height:'70px'}}/>
      <h1 className="title">Student Dashboard</h1>

      <div className="card">
        <h2>Recommended Career</h2>
        <p className="career-name">🎯 Data Scientist</p>
        <p className="accuracy">
          Match Accuracy: <strong>86%</strong>
        </p>
      </div>

      <div className="card">
        <h2>Your Progress</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="progress-text">{progress}% Completed</p>
      </div>

      <div className="card">
        <h2>Suggested Skills</h2>

        <ul className="skill-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Learning Roadmap</h2>

        <ul className="roadmap-list">
          {roadmap.map((item, index) => (
            <li key={index} className={item.done ? "done" : "pending"}>
              {item.done ? "✔" : "⬜"} {item.step}
            </li>
          ))}
        </ul>
      </div>
      {/* Bottom Navigation Buttons */}
      <div className="flex justify-around p-4 bg-gray-100 border-t  bottom-nav">
        <button
          onClick={() => navigate("/")}
          className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition    bottom-btn btn-home"
        >
          <GoHomeFill />
        </button>
        <button
          onClick={() => navigate("/tutorials")}
          className="flex-1 mx-1 p-3 bg-green-500 text-white rounded hover:bg-green-600 transition  bottom-btn btn-tutorial"
        >
          <MdOutlineOndemandVideo />
        </button>
        <button
          onClick={() => navigate("/chats")}
          className="flex-1 mx-1 p-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition    bottom-btn btn-chat"
        >
          <FaMessage />
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex-1 mx-1 p-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition    bottom-btn btn-dashport"
        >
          <FaCircleUser />
        </button>
      </div>
    </div>
  );
}
