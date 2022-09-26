import "./App.css";
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  
  const router = Router()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
