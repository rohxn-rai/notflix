import React from "react";

interface HeaderProps {
  username?: string;
  onLogout?: () => void;
}

const Header = ({ username = "Guest", onLogout }: HeaderProps) => {
  const isGuest = username === "Guest";

  return (
    <header className="py-8 mb-12 border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur-md supports-backdrop-filter:bg-black/50">
      <div className="flex flex-row justify-between items-center mx-auto max-w-7xl w-full px-6">
        <h1 className="text-4xl font-black text-red-600 tracking-tighter cursor-pointer hover:scale-105 transition-transform">
          NOTFLIX
        </h1>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-300 font-mono hidden md:block">
            Welcome, <span className="text-white font-bold">{username}</span>
          </div>

          {onLogout && (
            <button
              onClick={onLogout}
              className={`text-sm px-6 py-3 rounded transition-colors border font-bold ${
                isGuest
                  ? "bg-red-600 hover:bg-red-700 text-white border-red-600"
                  : "bg-gray-800 hover:bg-red-900 text-white border-gray-700"
              }`}
            >
              {isGuest ? "Log In" : "Sign Out"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
