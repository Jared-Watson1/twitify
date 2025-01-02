// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light1 p-4">
      <h1 className="text-4xl font-bold text-darkText mb-4">
        Welcome to Twitify
      </h1>
      <p className="text-lg text-darkText mb-6">
        Manage and analyze your Twitter accounts effortlessly.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/register"
          className="bg-light2 text-darkText px-6 py-3 rounded-md hover:bg-light5 transition"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-light5 text-darkText px-6 py-3 rounded-md hover:bg-light2 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
