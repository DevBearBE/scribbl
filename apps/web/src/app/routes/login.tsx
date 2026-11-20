import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginPage } from "@/features/auth/login-page";
import { authClient } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    const { data } = await authClient.getSession();
    if (data) throw redirect({ href: "/" });
  },
  head: () => ({ meta: [{ title: "Scribbl | Login" }] }),
  component: LoginPage,
});
