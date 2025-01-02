// src/pages/LinkTwitter.tsx
import React from "react";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const LinkTwitter: React.FC = () => {
  const handleLinkTwitter = () => {
    // Placeholder for Twitter OAuth functionality
    // This will redirect to your backend's Twitter OAuth endpoint
    window.location.href = "http://localhost:8000/api/auth/twitter/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light1 p-4">
      <div className="bg-light3 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-darkText text-center mb-4">
          Link Your Twitter Account
        </h2>
        <p className="text-center text-darkText mb-6">
          Connect your Twitter account to start managing your tweets
          effortlessly.
        </p>
        <InteractiveHoverButton
          text="Link Twitter Account"
          className="w-full mb-4"
          onClick={handleLinkTwitter}
        />
        {/* Optionally, add a logout button or navigation options */}
      </div>
    </div>
  );
};

export default LinkTwitter;
