"use client";

import { useActionState } from "react";
import { useState } from "react";
import loginAction from "@/actions/loginAction";

const initialState = {
  error: "",
};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );
  const [isRegistering, setIsRegistering] = useState(false);

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

        {state?.error && (
          <div className="bg-red-500/20 text-red-500 p-3 rounded text-sm border border-red-500/50 mb-4">
            {state.error}
          </div>
        )}

        <form action={formAction} className="flex flex-col gap-4">
          <input
            type="hidden"
            name="actionType"
            value={isRegistering ? "register" : "login"}
          />

          <div className="space-y-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="w-full bg-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-600 transition-all placeholder-gray-400"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-600 transition-all placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-red-600 text-white font-bold py-3 rounded mt-4 hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 disabled:opacity-50"
          >
            {isPending
              ? "Processing..."
              : isRegistering
                ? "Sign Up"
                : "Sign In"}
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-700 flex-1"></div>
          <span className="text-gray-500 text-xs uppercase">OR</span>
          <div className="h-px bg-gray-700 flex-1"></div>
        </div>

        <form action={formAction}>
          <input type="hidden" name="actionType" value="guest" />
          <button
            type="submit"
            className="w-full bg-gray-800 text-gray-300 font-bold py-3 rounded hover:bg-white hover:text-black transition-all border border-gray-600"
          >
            Continue as Guest
          </button>
        </form>

        <div className="mt-8 text-gray-400 text-sm text-center">
          {isRegistering ? "Already have an account?" : "New to Not-Flix?"}{" "}
          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-white hover:underline font-bold ml-1 focus:outline-none"
          >
            {isRegistering ? "Sign in now." : "Sign up now."}
          </button>
        </div>
      </div>
    </div>
  );
}
