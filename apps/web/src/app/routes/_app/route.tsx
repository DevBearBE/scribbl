import { createFileRoute, Outlet } from "@tanstack/react-router";
import { BaseTemplate } from "@/components/base-template.tsx";

export const Route = createFileRoute("/_app")({
  component: () => (
    <BaseTemplate>
      <Outlet />
    </BaseTemplate>
  ),
});
