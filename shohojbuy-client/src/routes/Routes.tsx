import MainLayout from "@/layouts/MainLayout";
import Cart from "@/pages/Cart";
import HomePage from "@/pages/HomePage";
import SingleProductPage from "@/pages/SingleProductPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/product/:id",
        Component: SingleProductPage,
      },
    ],
  },
]);
