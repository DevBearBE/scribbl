import { RouterProvider } from "@tanstack/react-router";
import { Providers } from "./providers";
import { router } from "./router";

const App = () => (
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);

export default App;
