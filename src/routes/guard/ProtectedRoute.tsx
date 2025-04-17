import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'context';

interface ProtectedRouteProps {
  adminRoute?: boolean;
}

export function ProtectedRoute({ adminRoute = false }: ProtectedRouteProps) {
  const { user, loading, isAdmin } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminRoute && !isAdmin()) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}
