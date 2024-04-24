import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.userState.user); // Access user from the user slice

  if (!user) {
    // User not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children; // User is logged in, render the children components
};

export default ProtectedRoute;
