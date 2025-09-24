import { useState, useEffect } from "react";
import { useNavigation } from "./NavigationContext";

export default function AdminLogin() {
  const { navigate } = useNavigation();
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Already logged in? Go straight to dashboard
    if (sessionStorage.getItem("isAdmin") === "true") {
      navigate("admin-dashboard");
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission and page refresh

    if (password === "admin123") {
      sessionStorage.setItem("isAdmin", "true");
      navigate("admin-dashboard");
    } else {
      alert("Invalid password!");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin(e as any);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-6">
      <div className="bg-slate-800 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full p-3 mb-4 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            autoFocus
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
