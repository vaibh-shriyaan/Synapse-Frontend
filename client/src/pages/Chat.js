import React from "react";
import ChatBox from "../components/ChatBox";

const Chat = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-3">
              Chat with Synapse
            </h1>
            <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience intelligent conversations with our AI assistant
            </p>
          </div>

          {/* Main Content */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
                <ChatBox />
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-6 rounded-xl border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Tips for Better Responses
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      Be specific with your questions
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      Provide context when needed
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      Try rephrasing if unclear
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Privacy Notice
                  </h3>
                  <p className="text-gray-300">
                    Your conversations are encrypted and we don't store personal
                    data without permission.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Capabilities
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      Answer questions
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      Explain concepts
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      Help with brainstorming
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
