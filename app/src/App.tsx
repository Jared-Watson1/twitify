// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import PrivateRoute from "@/components/PrivateRoute";
import PublicRoute from "@/components/PublicRoute";
import LinkTwitter from "@/pages/LinkTwitter"; // Import the new page

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/link-twitter"
        element={
          <PrivateRoute>
            <LinkTwitter />
          </PrivateRoute>
        }
      />
      {/* Redirect any unknown routes to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
