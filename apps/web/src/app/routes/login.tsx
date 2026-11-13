import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginPage } from "@/features/auth/login-page";
import { authClient } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect:
      typeof search.redirect === "string" &&
      search.redirect.startsWith("/") &&
      !search.redirect.startsWith("//")
        ? search.redirect
        : undefined,
  }),
  beforeLoad: async ({ search }) => {
    const { data } = await authClient.getSession();
    if (data) throw redirect({ href: search.redirect ?? "/" });
  },
  head: () => ({ meta: [{ title: "Scribbl | Login" }] }),
  component: LoginPage,
});
