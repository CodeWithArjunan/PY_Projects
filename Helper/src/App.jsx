import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Strengths from "./pages/Strengths";
import Tstrengths from "./pages/TStrengths.jsx";
import AICareer from "./pages/AICareer";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Tutorials from "./pages/Tutorials";
import ChatList from "./pages/ChatList";
import HomePage from "./pages/Home.jsx";

export default function App() {
  return (
    <>
      <Routes>
        {/* Page 1 */}
        <Route path="/" element={<Login />} />
        {/* Home page*/}
        <Route path="/home" element={<HomePage />} />

        {/* Page 2 */}
        <Route path="/strengths" element={<Strengths />} />
        <Route path="/Tstrengths" element={<Tstrengths />} />

        {/* Page 3 */}
        <Route path="/career" element={<AICareer />} />

        {/* Page 4 */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Page 5 */}
        <Route path="/chat" element={<Chat />} />

        {/* Page 6 */}
        <Route path="/tutorials" element={<Tutorials />} />

        {/* Page 7 */}
        <Route path="/chats" element={<ChatList />} />
      </Routes>
    </>
  );
}
