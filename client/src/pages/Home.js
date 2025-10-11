import React from "react"
import { Link } from 'react-router-dom'
import SplineScene from '../components/ui/chatModel'
import { useUser } from "../contexts/userContext";
import "../index.css";

const Home = () => {
   const {user}=useUser();
  return (

   
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        {/* Hero Section */}
        <div className="hero-section flex w-full ">
         
         <div className="w-[40%] text-center max-w-xl mb-16">
          <h1 className="text-4xl font-bold text-white mb-3">
            Welcome to Synapse
          </h1>
          <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 mb-8">
            Your AI-powered assistant, ready to chat!
          </p>
          <div className="flex justify-center space-x-4">
            <Link to={user?'/chat':'/register'}>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Chatting
            </button>
            </Link>
            <Link to='/about'>
            <button className="border border-gray-600  text-gray-300 hover:border-indigo-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
            </Link>
          </div>
        </div> 
        <div className="w-[60%] flex justify-center items-center">
        <SplineScene />
        </div>
        </div>

        {/* Features Section */}
        <div className="block-test grid md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Get instant responses powered by advanced AI technology. No waiting, just pure conversation flow.</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Smart & Intuitive</h3>
            <p className="text-gray-400">Our AI understands context, remembers conversations, and adapts to your communication style.</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
            <p className="text-gray-400">Your conversations are secure and private. We prioritize your data protection above all else.</p>
          </div>
        </div>

        {/* What You Can Do Section */}
        <div className="w-full max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Can Synapse Help You With?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">💬 Natural Conversations</h4>
              <p className="text-gray-300">Have meaningful discussions on any topic. Ask questions, share ideas, or just chat casually.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">🧠 Problem Solving</h4>
              <p className="text-gray-300">Get help with complex problems, brainstorm solutions, and explore different perspectives.</p>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">📚 Learning & Research</h4>
              <p className="text-gray-300">Discover new topics, get explanations, and expand your knowledge across various subjects.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-6 rounded-xl border border-orange-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">✨ Creative Tasks</h4>
              <p className="text-gray-300">Generate ideas, write content, solve creative challenges, and explore your imagination.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-4xl mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">∞</div>
                <div className="text-gray-300">Unlimited Conversations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">🚀</div>
                <div className="text-gray-300">Constantly Improving</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-8 rounded-xl border border-indigo-500/30 w-full max-w-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-gray-300 mb-6">Join thousands of users who are already experiencing the future of AI conversation.</p>
          <Link to="/register">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
            Begin Conversation
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;