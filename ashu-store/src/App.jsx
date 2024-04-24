// Importing necessary modules from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Importing page components
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";
import { ProtectedRoute } from "./components";

//actions
import { action as registerAction } from "./pages/Register";

// Creating route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      { path: "about", element: <About /> },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      { path: "products", element: <Products /> },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

// Defining the App component
const App = () => {
  return <RouterProvider router={router} />;
};

// Exporting App component
export default App;
