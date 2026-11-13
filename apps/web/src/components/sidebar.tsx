import { Link, useNavigate } from "@tanstack/react-router";
import { authClient } from "@/lib/auth/client";

export const Sidebar = () => {
  const navigate = useNavigate();

  const onLogout = async () => {
    await authClient.signOut();
    await navigate({ to: "/login", search: { redirect: undefined } });
  };

  return (
    <nav className="flex flex-col gap-2 p-4">
      <span className="font-semibold">Scribbl</span>
      <Link to="/">Home</Link>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
};
