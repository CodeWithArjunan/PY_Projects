import React from "react";
import "../styles/ChatList.css";
import { useNavigate } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

// import mentor1 from "../assets/mentor1.png";
// import mentor2 from "../assets/mentor2.png";
// import mentor3 from "../assets/mentor3.png";

export default function ChatList({ onSelectChat }) {
  const chatUsers = [
    {
      id: 1,
      name: "Arun Kumar",
      avatar: "m1",
      lastMessage: "Sure, I will guide you through it!",
      time: "10:45 AM",
      online: true,
    },
    {
      id: 2,
      name: "Priya Sharma",
      avatar: "m2",
      lastMessage: "Great! Send me your resume.",
      time: "Yesterday",
      online: false,
    },
    {
      id: 3,
      name: "Rahul Mehta",
      avatar: "m3",
      lastMessage: "Let’s schedule a call tomorrow.",
      time: "Mon",
      online: true,
    },
    {
      id: 4,
      name: "Jessica",
      // avatar: "m3",
      lastMessage: "Let’s schedule a call tomorrow.",
      time: "Friday",
      online: false,
    },
    {
      id: 5,
      name: "Michael",
      avatar: "m3",
      lastMessage: "Let’s schedule a call tomorrow.",
      time: "February 11",
      online: false,
    },
    {
      id: 6,
      name: "Sarah",
      avatar: "m3",
      lastMessage: "Let’s schedule a call tomorrow.",
      time: "Saturday ",
      online: true,
    },
    {
      id: 7,
      name: "James",
      avatar: "m3",
      lastMessage: "Let’s schedule a call tomorrow.",
      time: "October 4",
      online: false,
    },
    {
      id: 8,
      name: "Emily",
      avatar: "m3",
      lastMessage: "Let’s schedule a call tomorrow.",
      time: "October 2",
      online: false,
    },
    {
      id: 9,
      name: "Sarah",
      avatar: "m3",
      lastMessage: "Let’s schedule a call tomorrow.",
      time: "October 1",
      online: false,
    },
  ];

  const navigate = useNavigate();
  const handleSingleChat = () => {
    navigate("/chat");
  };
  return (
    <div className="chatlist-container">
      {/* <h1 className="chatlist-title">search here</h1> */}
      {/* <div className="p-4 bg-gray-100">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400  search-input"
        />
      </div> */}

      <div className="chatlist-box">
        {chatUsers.map((user) => (
          <div
            key={user.id}
            className="chat-user"
            onClick={() => onSelectChat && onSelectChat(user)}
          >
            <div className="avatar-wrapper">
              <img src={"/src/assets/prof2.jpg" /*user.avatar*/} alt={user.name} className="chat-avatar" />
              {user.online && <span className="online-dot"></span>}
            </div>

            <div className="chat-info">
              <h3>{user.name}</h3>
              <p className="msg-preview" onClick={handleSingleChat}>
                {user.lastMessage}
              </p>
            </div>

            <div className="chat-time">{user.time}</div>
          </div>
        ))}
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
