import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "../contexts/userContext";

const Login = () => {
  const navigate = useNavigate();
  const API_BASE = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useUser();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password } = formData;

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      return "Invalid email address.";
    if (password.length < 6)
      return "Password must be at least 6 characters long.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) return toast.error(errorMsg);
    try {
      const res = await axios.post(`${API_BASE}/api/v1/auth/login`, {
        ...formData,
      });
      toast.success(res.data?.message || "Successfully logged in!");
      login(res.data.user);
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid email or password!"
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700 border-opacity-30">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Sign in</h2>
          <div className="h-1 w-16 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
          <div className="relative">
            <input
              type="email"
              name="email"
              className="w-full p-4 pl-5 pr-12 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition duration-300"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="absolute right-4 top-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              className="w-full p-4 pl-5 pr-12 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition duration-300"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="absolute right-4 top-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-4 mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transform hover:scale-[1.02] transition duration-300"
          >
            Sign in
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Or create an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 font-medium hover:text-indigo-300 transition duration-300"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>
    </div>
  );
};

export default Login;
