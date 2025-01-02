// src/pages/Register.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import TextInput from "@/components/ui/TextInput";
import PasswordInput from "@/components/ui/PasswordInput";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!agree) {
      setError("You must agree to the Terms and Conditions.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Optionally, add additional user data (like name and location) to Firestore
      console.log("Registered user:", userCredential.user);
      navigate("/link-twitter"); // Redirect to Twitter linking page
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light1 p-4">
      <div className="bg-light3 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-darkText text-center mb-4">
          Register
        </h2>
        {error && (
          <div className="mb-4 text-error text-sm text-center">{error}</div>
        )}
        <form onSubmit={handleRegister}>
          <TextInput
            label="Name"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
          <TextInput
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
            required
          />
          <PasswordInput password={password} setPassword={setPassword} />
          <TextInput
            label="Location"
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Your location"
            required
          />
          <div className="flex items-center mb-4">
            <input
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="h-4 w-4 text-primary border-light2 rounded"
              required
            />
            <label htmlFor="agree" className="ml-2 block text-sm text-darkText">
              I agree to the{" "}
              <a href="#" className="text-light5 hover:text-light4">
                Terms and Conditions
              </a>
            </label>
          </div>
          <InteractiveHoverButton text="Sign Up" className="w-full mb-4" />
        </form>
        <p className="mt-4 text-center text-darkText">
          Already have an account?{" "}
          <Link to="/login" className="text-light5 hover:text-light4">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
