import { RouterProvider } from "@tanstack/react-router";
import { Providers } from "./providers.tsx";
import { router } from "./router.tsx";

const App = () => (
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);

export default App;
