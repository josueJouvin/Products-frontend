import { createBrowserRouter } from "react-router-dom";
import Products from "./views/Products";
import Layout from "./layouts/Layout";
import NewProducts, { action as newProductAction } from "./views/NewProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "productos/nuevo",
        element: <NewProducts />,
        action: newProductAction
      },
    ],
  },
]);