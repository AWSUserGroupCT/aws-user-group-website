import { Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface ProtectedRouteProps {
  path: string;
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;