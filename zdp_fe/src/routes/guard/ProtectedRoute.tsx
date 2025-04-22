import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'context';

interface ProtectedRouteProps {
  adminRoute?: boolean;
}

// Route guard component that protects routes based on authentication
export function ProtectedRoute({ adminRoute = false }: ProtectedRouteProps) {
  const { user, loading, isAdmin } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Redirect non admin users from admin routes
  if (adminRoute && !isAdmin()) {
    return <Navigate to="/home" />;
  }

  // Allow access to the protected route
  return <Outlet />;
}
