import { MainLayout } from 'components/main-layout';
import { NotFound } from 'components/not-found';
import { publicRoutes } from './public-routes/public-routes';
import { ProtectedRoute } from './guard/ProtectedRoute';
import { protectedRoutes } from './protected-routes/protected-routes';
import { adminRoutes } from './admin-routes/admin-routes';

// Main route configuration combining public protected and admin routes
export const routes = [
  {
    // Main layout of the app
    element: <MainLayout />,
    children: [
      // Routes accessible to all users
      ...publicRoutes,
      // Routes that require authentication
      {
        element: <ProtectedRoute />,
        children: [...protectedRoutes],
      },
      // Routes that require admin privileges
      {
        element: <ProtectedRoute adminRoute />,
        children: [...adminRoutes],
      },
      // Non matching routes - 404
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
