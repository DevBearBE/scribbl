import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";

export const BaseTemplate = ({
  children,
}: Readonly<{ children: ReactNode }>) => (
  <div className="flex h-full">
    <Sidebar />
    <main className="flex-1 overflow-y-auto p-6">{children}</main>
  </div>
);
