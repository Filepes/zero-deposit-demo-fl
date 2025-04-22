import { MainLayout } from 'components/main-layout';
import { NotFound } from 'components/not-found';
import { publicRoutes } from './public-routes/public-routes';
import { ProtectedRoute } from './guard/ProtectedRoute';
import { protectedRoutes } from './protected-routes/protected-routes';
import { adminRoutes } from './admin-routes/admin-routes';

export const routes = [
  {
    element: <MainLayout />,
    children: [
      ...publicRoutes,
      {
        element: <ProtectedRoute />,
        children: [...protectedRoutes],
      },
      {
        element: <ProtectedRoute adminRoute />,
        children: [...adminRoutes],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
