import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, Error, Register } from "./Pages";
import {
  Stats,
  Alljobs,
  Addjob,
  Profile,
  SharedLayout,
} from "./Pages/Dashboard";
import { ProtectedRoute } from "./Components";
// Creating route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <SharedLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Stats />,
        errorElement: <Error />,
      },
      {
        path: "all-jobs",
        element: <Alljobs />,
        errorElement: <Error />,
      },
      {
        path: "add-job",
        element: <Addjob />,
        errorElement: <Error />,
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/landing",
    element: <Landing />,

    errorElement: <Error />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
