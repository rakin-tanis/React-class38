import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";
// import { FavoritesProvider } from "./context/FavoritesContext";

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
    {
      path: "/favorites",
      element: <Favorites />,
    },
  ]);

  return router;
};

export default Router;
