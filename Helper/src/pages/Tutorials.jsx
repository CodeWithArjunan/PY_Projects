import React, { useState } from "react";
import "../styles/Tutorials.css";
import { useNavigate } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

export default function Tutorials() {
  const [currentLevel, setCurrentLevel] = useState(1);

  const navigate = useNavigate();
  //   const handleChat = () => {
  //     navigate("/chats");
  //   };
  const levels = [
    {
      id: 1,
      title: "Introduction to Python",
      video: "https://www.youtube.com/embed/kqtD5dpn9C8",
      unlocked: true,
    },
    {
      id: 2,
      title: "Python Basics",
      video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
      unlocked: false,
    },
    {
      id: 3,
      title: "Data Structures",
      video: "https://www.youtube.com/embed/10a3MGfWlvY",
      unlocked: false,
    },
    {
      id: 4,
      title: "OOP Concepts",
      video: "https://www.youtube.com/embed/Ej_02ICOIgs",
      unlocked: false,
    },
    {
      id: 5,
      title: "Mini Project",
      video: "https://www.youtube.com/embed/daefaLgNkw0",
      unlocked: false,
    },
  ];

  const handleComplete = () => {
    if (currentLevel < levels.length) {
      levels[currentLevel].unlocked = true;
      setCurrentLevel(currentLevel + 1);
    }
  };

  return (
    <div
      className="tutorial-container"
      style={{ top: "10px", position: "absolute" }}
    >
      <h1 className="title"> Data Scientist</h1>
      <p className="subtitle">Complete each level to unlock the next</p>

      {/* Video Section */}
      <div className="video-card">
        <h2>
          Level {currentLevel}: {levels[currentLevel - 1].title}
        </h2>

        <div className="video-frame">
          <iframe
            src={levels[currentLevel - 1].video}
            title="Tutorial Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <button className="complete-btn" onClick={handleComplete}>
          Mark as Completed
        </button>
      </div>

      {/* Level List */}
      <div className="levels-card">
        <h2>Basic Levels</h2>

        {levels.map((level) => (
          <div
            key={level.id}
            className={`level-item ${level.unlocked ? "unlocked" : "locked"}`}
          >
            <span>
              Level {level.id}: {level.title}
            </span>
            <span className="status">
              {level.unlocked ? "Unlocked ✔" : "🔒 Locked"}
            </span>
          </div>
        ))}
      </div>
      <button className="complete-btn" onClick={handleComplete}>
        Unlock The Intermediate Level
      </button>
      {/* <h2>Or</h2>
                 <button className="complete-btn" onClick={handleChat}>
                   Ask Question 
                </button> */}

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
