// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import TextInput from "@/components/ui/TextInput";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light1 p-4">
      <div className="bg-light3 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-darkText text-center mb-4">
          Login
        </h2>
        {error && (
          <div className="mb-4 text-error text-sm text-center">{error}</div>
        )}
        <form onSubmit={handleLogin}>
          <TextInput
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
            required
          />
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full px-4 py-2 border border-light2 rounded-md focus:outline-none focus:ring-2 focus:ring-light4 transition"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-primary border-light2 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-darkText"
              >
                Remember me
              </label>
            </div>
            <Link to="#" className="text-sm text-light5 hover:text-light4">
              Forgot Password?
            </Link>
          </div>
          <InteractiveHoverButton text="Sign In" className="w-full mb-4" />
        </form>
        <p className="mt-4 text-center text-darkText">
          Don't have an account?{" "}
          <Link to="/register" className="text-light5 hover:text-light4">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
