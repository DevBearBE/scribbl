import { Button, Icon, NavItem } from "@scribbl/ui";
import { createLink, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/lib/auth/client";
import { cn } from "@/lib/functions/styles/cn";

const NavLink = createLink(NavItem);

export const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const onLogout = async () => {
    await authClient.signOut();
    await navigate({ to: "/login" });
  };

  return (
    <aside
      data-collapsed={collapsed}
      className={cn(
        "group/sidebar flex flex-col justify-between shrink-0 overflow-y-auto overflow-x-hidden whitespace-nowrap",
        "w-56 bg-neutral-50 border-r border-neutral-200 transition-all duration-200",
        "data-[collapsed=true]:w-19",
      )}
    >
      <header className="p-4 flex items-center justify-between">
        <p className="text-2xl font-semibold group-data-[collapsed=true]/sidebar:hidden">
          Scribbl
          <span className="text-tapestry-500 font-black">.</span>
        </p>
        <Button
          variant="ghost"
          size="icon"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          onClick={() => setCollapsed((value) => !value)}
        >
          <Icon
            name={collapsed ? "fastArrowRightSquare" : "fastArrowLeftSquare"}
          />
        </Button>
      </header>
      <nav aria-label="Main" className="p-4 flex-1">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="/notes" icon="notes">
              All notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites" icon="star">
              Favourites
            </NavLink>
          </li>
          <li>
            <NavLink to="/trash" icon="trash">
              Trash
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="p-4">
        <Button variant="ghost" className="w-fit gap-3 px-3" onClick={onLogout}>
          <Icon name="logOut" />
          <span className="group-data-[collapsed=true]/sidebar:sr-only">
            Logout
          </span>
        </Button>
      </footer>
    </aside>
  );
};
