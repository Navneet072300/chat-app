"use client";
import { useState } from "react";

interface Message {
  text: string;
  sender: "user" | "other";
}

const Container = ({ text, sender }: Message) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`${
              message.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } p-3 rounded-lg max-w-xs`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
