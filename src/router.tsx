import { createBrowserRouter } from "react-router-dom";
import Products, { loader as productsLoader } from "./views/Products";
import Layout from "./layouts/Layout";
import NewProducts, { action as newProductAction } from "./views/NewProducts";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./views/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader
      },
      {
        path: "productos/nuevo",
        element: <NewProducts />,
        action: newProductAction
      },
      {
        path: "productos/:id/editar",
        element: <EditProduct/>,
        loader: editProductLoader,
        action: editProductAction
      }
    ],
  },
]);
