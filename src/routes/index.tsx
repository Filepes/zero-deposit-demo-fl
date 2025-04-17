import { MainLayout } from 'components/main-layout';
import { publicRoutes } from './public-routes';
import { protectedRoutes } from './protected-routes';
import { ProtectedRoute } from './guard/ProtectedRoute';
import { NotFound } from 'components/not-found';

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
        children: [...protectedRoutes],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
