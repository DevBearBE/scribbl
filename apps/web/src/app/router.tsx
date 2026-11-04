import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

export const router = createRouter({
  routeTree,
  defaultErrorComponent: () => <>Error!</>,
  defaultNotFoundComponent: () => <>Not Found!</>,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
