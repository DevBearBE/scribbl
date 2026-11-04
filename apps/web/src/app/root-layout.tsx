import type { ReactNode } from "react";
import { cn } from "@/lib/functions/styles/cn";

export const RootLayout = ({ children }: { children: ReactNode }) => (
  <main className={cn("min-h-screen")}>{children}</main>
);
