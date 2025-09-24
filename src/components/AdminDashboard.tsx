import { useEffect } from "react";
import { useNavigation } from "./NavigationContext";

export default function AdminDashboard() {
  const { navigate } = useNavigation();

  useEffect(() => {
    // Check if admin is logged in
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("home"); // redirect non-admin users
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-300 mb-4">
        Welcome, Admin! You have full access here.
      </p>
      <button
        onClick={() => {
          sessionStorage.removeItem("isAdmin"); // log out
          navigate("home");
        }}
        className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors"
      >
        Logout
      </button>
    </div>
  );
}
