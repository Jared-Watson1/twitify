// src/pages/Dashboard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      // Optionally, display an error message to the user
    }
  };

  const handleLinkTwitter = () => {
    // Redirect to Twitter OAuth linking
    navigate("/link-twitter");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light1 p-4">
      <h1 className="text-3xl font-bold text-darkText mb-6">Dashboard</h1>
      <InteractiveHoverButton
        text="Link Twitter Account"
        className="w-full max-w-xs py-2 px-4 bg-light2 text-darkText rounded-md hover:bg-light5 transition mb-4"
        onClick={handleLinkTwitter}
      />
      <InteractiveHoverButton
        text="Logout"
        className="w-full max-w-xs py-2 px-4 bg-error text-white rounded-md hover:bg-red-600 transition"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Dashboard;
