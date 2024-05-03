import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.userState.user); // Access user from the user slice
  console.log("user in protected route", user);
  if (!user) {
    // User not logged in, redirect to login page
    return <Navigate to="/landing" replace />;
  }

  return children; // User is logged in, render the children components
};

export default ProtectedRoute;
