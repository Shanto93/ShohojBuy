import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster richColors position="top-center" />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
