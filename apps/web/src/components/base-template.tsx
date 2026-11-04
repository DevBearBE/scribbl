import type { ReactNode } from "react";
import { Sidebar } from "./sidebar.tsx";

export const BaseTemplate = ({
  children,
}: Readonly<{ children: ReactNode }>) => (
  <div className="flex h-full">
    <aside className="w-64 border-r">
      <Sidebar />
    </aside>
    <main className="flex-1 overflow-y-auto p-6">{children}</main>
  </div>
);
