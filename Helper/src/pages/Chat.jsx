import React, { useState, useRef, useEffect } from "react";
import "../styles/Chat.css";
import { useNavigate } from "react-router-dom";
import studentAvatar from "../assets/prof.jpg";
import mentorAvatar from "../assets/prof2.jpg";

export default function Chat() {

    const [messages, setMessages] = useState([
        { sender: "mentor", text: "Hi! How can I help you today?" },
        { sender: "student", text: "I want guidance about my career in tech." },
        { sender: "mentor", text: "Sure! What skills are you currently learning?" }
    ]);

    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;

        setMessages([...messages, { sender: "student", text: input }]);
        setInput("");
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chat-container">

            <div className="chat-box">

                <h1 className="chat-title">Mentor Chat</h1>

                <div className="messages">

                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message-row ${msg.sender === "student" ? "student-row" : "mentor-row"}`}
                        >
                            <img
                                src={msg.sender === "student" ? studentAvatar : mentorAvatar}
                                alt="avatar"
                                className="avatar"
                            />

                            <div className={`message-bubble ${msg.sender}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    <div ref={chatEndRef}></div>
                </div>

                <form className="input-area" onSubmit={sendMessage}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>

            </div>

        </div>
    );
}