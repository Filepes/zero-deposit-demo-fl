import { MainLayout } from 'components/main-layout';
import { publicRoutes } from './public-routes';
import { protectedRoutes } from './protected-routes';
import { ProtectedRoute } from './guard/ProtectedRoute';
import { NotFound } from 'components/not-found';
import { adminRoutes } from './admin-routes';

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
