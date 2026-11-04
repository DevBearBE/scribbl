import { Link } from "@tanstack/react-router";

export const Sidebar = () => (
  <nav className="flex flex-col gap-2 p-4">
    <span className="font-semibold">Scribbl</span>
    <Link to="/">Home</Link>
  </nav>
);
