import { Link, useLocation } from "react-router";

export function PageChange() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-full text-sm ${
      location.pathname === path
        ? "bg-indigo-600 text-white font-medium"
        : "text-muted-foreground hover:bg-gray-100"
    }`;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border px-2 py-2 flex gap-1">
      <Link to="/login" className={linkClass("/login")}>
        Login
      </Link>
      <Link to="/signup" className={linkClass("/signup")}>
        Sign up
      </Link>
      <Link to="/" className={linkClass("/")}>
        Home
      </Link>
      <Link to="/settings/profile" className={linkClass("/settings/profile")}>
        Settings
      </Link>
    </div>
  );
}