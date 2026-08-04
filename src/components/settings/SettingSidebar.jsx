import { Bell, LogOut, Settings, User } from "lucide-react";
import { Link, useLocation } from "react-router";

export function SettingSidebar() {
  const location = useLocation();

  const tabClass = (path) =>
    `w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
      location.pathname === path
        ? "bg-indigo-50 text-indigo-600 font-medium"
        : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <div className="w-56 bg-white rounded-lg border p-2 h-fit">
      <Link to="/settings/profile" className={tabClass("/settings/profile")}>
        <User size={16} />
        Profile
      </Link>

      <Link to="/settings/account" className={tabClass("/settings/account")}>
        <Settings size={16} />
        Account settings
      </Link>

      <Link to="/settings/notifications" className={tabClass("/settings/notifications")}>
        <Bell size={16} />
        Notifications
      </Link>

      <div className="border-t my-2" />

      <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50">
        <LogOut size={16} />
        Log out
      </button>
    </div>
  );
}