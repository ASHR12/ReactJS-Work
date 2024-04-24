// src/react-query/queryClient.js
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 600000, // 10 minutes
    },
  },
});
