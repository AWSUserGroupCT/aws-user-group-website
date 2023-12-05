import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children, redirectTo }: {children: React.ReactNode, redirectTo: string}) => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
