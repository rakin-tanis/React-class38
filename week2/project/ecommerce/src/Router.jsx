import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
  ]);

  return router;
};

export default Router;
