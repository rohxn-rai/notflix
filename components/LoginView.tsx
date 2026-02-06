"use client";

import React, { useState, useEffect } from "react";
import { USERS_DB, addUserToDB } from "@/data/users";

interface LoginViewProps {
  onLogin: (username: string, isGuest: boolean) => void;
}

const LoginView = ({ onLogin }: LoginViewProps) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setError("");
    setSuccessMsg("");
    setUsername("");
    setPassword("");
  }, [isRegistering]);

  const handleGuestLogin = () => {
    // Pass 'true' for isGuest
    onLogin("Guest", true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (isRegistering) {
      // --- SIGN UP LOGIC (Using USERS_DB) ---
      const exists = USERS_DB.find(
        (u) => u.username.toLowerCase() === username.toLowerCase(),
      );

      if (exists) {
        setError("User already exists. Please login.");
        return;
      }

      addUserToDB({ username, password });

      setSuccessMsg("Account created! Switching to login...");
      setTimeout(() => setIsRegistering(false), 1500);
    } else {
      const userRecord = USERS_DB.find(
        (u) => u.username.toLowerCase() === username.toLowerCase(),
      );

      if (!userRecord) {
        setError("User not found. Please sign up.");
        return;
      }

      if (userRecord.password !== password) {
        setError("Incorrect password.");
        return;
      }

      onLogin(userRecord.username, false);
    }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 flex items-center justify-center p-4 relative font-sans">
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center"></div>

      <div className="bg-black/80 p-8 md:p-12 rounded-lg max-w-md w-full z-10 border border-gray-800 backdrop-blur-md shadow-2xl">
        <h1 className="text-5xl font-black text-red-600 mb-8 tracking-tighter text-center drop-shadow-lg">
          NOT-FLIX
        </h1>

        <h2 className="text-white text-2xl font-bold mb-6">
          {isRegistering ? "Create Account" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="bg-red-500/20 text-red-500 p-3 rounded text-sm border border-red-500/50">
              {error}
            </div>
          )}
          {successMsg && (
            <div className="bg-green-500/20 text-green-500 p-3 rounded text-sm border border-green-500/50">
              {successMsg}
            </div>
          )}

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-600 transition-all placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-600 transition-all placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-3 rounded mt-4 hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
          >
            {isRegistering ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-700 flex-1"></div>
          <span className="text-gray-500 text-xs uppercase">OR</span>
          <div className="h-px bg-gray-700 flex-1"></div>
        </div>

        <button
          onClick={handleGuestLogin}
          className="w-full bg-gray-800 text-gray-300 font-bold py-3 rounded hover:bg-white hover:text-black transition-all border border-gray-600"
        >
          Continue as Guest
        </button>

        <div className="mt-8 text-gray-400 text-sm text-center">
          {isRegistering ? "Already have an account?" : "New to Not-Flix?"}{" "}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-white hover:underline font-bold ml-1 focus:outline-none"
          >
            {isRegistering ? "Sign in now." : "Sign up now."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
