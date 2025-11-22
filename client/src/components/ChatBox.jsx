import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputText.trim() === "") return;

    const newMessages = [...messages, { text: inputText, sender: "user" }];
    setMessages(newMessages);
    setInputText("");
    setIsLoading(true);

    try {
      const res = await fetch("https://synapse-backend-e265.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: inputText }),
      });

      const data = await res.json();

      if (!data.error) {
        setMessages((prev) => [...prev, { text: data.message, sender: "bot" }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { text: "Oops! Error getting response.", sender: "bot" },
        ]);
      }
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong on the server.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
        <h2 className="text-gray-300 font-medium">AI Assistant</h2>
      </div>

      {/* Messages container */}
      <div
        ref={messagesContainerRef}
        className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "bot" && (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
            )}

            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "bg-gray-800 text-gray-100 border border-gray-700"
              }`}
            >
              <ReactMarkdown
                className="prose prose-invert max-w-none break-words"
                rehypePlugins={[rehypeHighlight]}
              >
                {message.text}
              </ReactMarkdown>
            </div>

            {message.sender === "user" && (
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center ml-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex mb-4 justify-start">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div className="bg-gray-800 text-gray-100 px-4 py-3 rounded-2xl border border-gray-700">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-700 bg-gray-800 p-4">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-l-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-600 focus:border-indigo-500 transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || inputText.trim() === ""}
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300 flex items-center justify-center ${
              isLoading || inputText.trim() === ""
                ? "opacity-70 cursor-not-allowed"
                : "hover:from-indigo-700 hover:to-purple-700"
            }`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
