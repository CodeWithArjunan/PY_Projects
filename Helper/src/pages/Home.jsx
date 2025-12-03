import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
// Sample news/images data
const newsItems = [
  { id: 1, title: "AI in Industry", img: './assets/prof.jpg' },
  { id: 2, title: "New Career Opportunities", img: "./assets/it2.jpg" },
  { id: 3, title: "Tech Innovation 2025", img: "./assets/it3.jpg" },
  { id: 4, title: "Startup Ecosystem Update", img: "./assets/it4.jpg" },
  { id: 5, title: "Industrial Trends", img: "./assets/it5.jpg" },
  { id: 6, title: "Job Market Insights", img: "./assets/it6.jpg" },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen   home-container">
      {/* Top Search Bar */}
      <div className="p-4 bg-gray-100">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400  search-input"
        />
        <FaSearch
          style={{
            width: "30px",
            height: "25px",
            position: "absolute",
            top: "20px",
            right: "28px",
          }}
        />
      </div>

      {/* Middle News / Images */}
      <div className="flex-1 p-4 overflow-y-auto   news-section">
        <h2 className="text-xl font-bold mb-4   news-title">Latest Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4    news-grid">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="border rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer    news-card"
            >
              <img
                src=  ''//{item.img}
                alt={item.title}
                className="w-full h-32 object-cover"
              />
              
              <img src={item.img} alt="" />
              <div className="p-2 font-semibold news-card-text">
                {item.title}
              </div>
            </div>
          ))}
        </div>
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
};

export default HomePage;
