import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/features/auth/login-page.tsx";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});
