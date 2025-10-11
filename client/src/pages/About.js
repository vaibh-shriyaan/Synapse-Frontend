import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Await } from "react-router-dom";

const About = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });
const API_BASE=process.env.REACT_APP_API_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    // Handle form submission here
    try {
      const res = await axios.post(`${API_BASE}/mail/feedback`, feedback);
      toast.success(`Dear ${feedback.name} Thank you for your feedback`);
      setFeedback({ name: "", email: "", rating: "", message: "" });
    } catch (error) {
      toast.error(error.resposne?.data?.message || "Error submitting form");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-3">About Synapse</h1>
          <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the technology and vision behind your AI-powered
            conversation partner
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
              Synapse is designed to bridge the gap between human curiosity and
              artificial intelligence. We believe that AI should be accessible,
              helpful, and genuinely understanding of human needs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              Our goal is to create meaningful conversations that inspire,
              educate, and assist users in their daily tasks while maintaining
              the highest standards of privacy and security.
            </p>
          </div>
        </div>

        {/* What Makes Synapse Special */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Makes Synapse Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-6 rounded-xl border border-purple-500/30">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Advanced Learning
              </h3>
              <p className="text-gray-300">
                Continuously evolving through machine learning to provide more
                accurate and helpful responses.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Context Awareness
              </h3>
              <p className="text-gray-300">
                Understands conversation context and maintains coherent dialogue
                throughout your interaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Ethical AI
              </h3>
              <p className="text-gray-300">
                Built with responsible AI principles, ensuring safe and
                beneficial interactions for all users.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-xl border border-orange-500/30">
              <div className="w-12 h-12 bg-orange-600 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Real-time Processing
              </h3>
              <p className="text-gray-300">
                Lightning-fast response times powered by optimized neural
                networks and cloud infrastructure.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 p-6 rounded-xl border border-pink-500/30">
              <div className="w-12 h-12 bg-pink-600 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                User-Centric Design
              </h3>
              <p className="text-gray-300">
                Every feature is designed with user experience in mind, making
                AI accessible to everyone.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 p-6 rounded-xl border border-indigo-500/30">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Global Accessibility
              </h3>
              <p className="text-gray-300">
                Available worldwide with support for multiple languages and
                cultural contexts.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              The Technology Behind Synapse
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-indigo-400 mb-3">
                  🧠 Neural Networks
                </h4>
                <p className="text-gray-300 mb-4">
                  Powered by state-of-the-art transformer architectures that
                  enable deep understanding of language patterns and context.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-indigo-400 mb-3">
                  ☁️ Cloud Infrastructure
                </h4>
                <p className="text-gray-300 mb-4">
                  Scalable cloud deployment ensures consistent performance and
                  availability for users worldwide.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-indigo-400 mb-3">
                  🔒 Security
                </h4>
                <p className="text-gray-300 mb-4">
                  End-to-end encryption and privacy-first architecture protect
                  your conversations and personal data.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-indigo-400 mb-3">
                  ⚡ Optimization
                </h4>
                <p className="text-gray-300 mb-4">
                  Advanced caching and optimization techniques deliver responses
                  in milliseconds, not seconds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Share Your Feedback
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Help us improve Synapse by sharing your thoughts and experiences
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={feedback.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  How would you rate your experience?
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={feedback.rating}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a rating</option>
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Very Good</option>
                  <option value="3">⭐⭐⭐ Good</option>
                  <option value="2">⭐⭐ Fair</option>
                  <option value="1">⭐ Needs Improvement</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={feedback.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your experience with Synapse..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
