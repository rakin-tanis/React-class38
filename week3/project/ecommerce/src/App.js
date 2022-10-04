import "./App.css";
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { FavoritesProvider } from "./context/FavoritesContext";


function App() {
  const [queryClient] = useState(() => new QueryClient());
  
  const router = Router()

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;