"use client";

import { useState } from "react";

type chatType = { from: "user" | "bot"; text: string };

export default function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<chatType[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: chatType = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Call your backend API
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userMsg.text }),
      });
      const data = await res.json();

      const botMsg: chatType = {
        from: "bot",
        text: data.message || "Sorry, I didn't understand.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const botMsg: chatType = {
        from: "bot",
        text: "Error connecting to server.",
      };
      setMessages((prev) => [...prev, botMsg]);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 sm:w-96 h-[400px] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
          Assistant
        </h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md max-w-[80%] ${
              msg.from === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
