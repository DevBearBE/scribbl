import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { BaseTemplate } from "@/components/base-template";
import { authClient } from "@/lib/auth/client";

export const Route = createFileRoute("/_app")({
  beforeLoad: async ({ location }) => {
    const { data } = await authClient.getSession();
    if (!data)
      throw redirect({ to: "/login", search: { redirect: location.href } });
  },
  component: () => (
    <BaseTemplate>
      <Outlet />
    </BaseTemplate>
  ),
});
