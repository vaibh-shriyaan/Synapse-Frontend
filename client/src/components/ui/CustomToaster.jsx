import React from "react";
import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        // Default options for all toasts
        duration: 5000,
        style: {
          background: "rgba(23, 23, 30, 0.9)",
          color: "#fff",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(99, 102, 241, 0.3)",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          fontSize: "14px",
        },
        // Custom styles for different toast types
        success: {
          style: {
            background:
              "linear-gradient(to right, rgba(16, 22, 47, 0.95), rgba(23, 23, 43, 0.95))",
            borderLeft: "4px solid #10b981",
          },
          iconTheme: {
            primary: "#10b981",
            secondary: "#FFFFFF",
          },
        },
        error: {
          style: {
            background:
              "linear-gradient(to right, rgba(26, 16, 47, 0.95), rgba(28, 17, 43, 0.95))",
            borderLeft: "4px solid #ef4444",
          },
          iconTheme: {
            primary: "#ef4444",
            secondary: "#FFFFFF",
          },
        },
        loading: {
          style: {
            background:
              "linear-gradient(to right, rgba(16, 31, 47, 0.95), rgba(23, 33, 43, 0.95))",
            borderLeft: "4px solid #6366f1",
          },
        },
      }}
    />
  );
};

export default CustomToaster;
