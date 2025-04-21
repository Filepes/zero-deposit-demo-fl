import { Login } from 'features/login';
import { Navigate } from 'react-router-dom';

export const publicRoutes = [
  {
    path: '/',
    element: <Navigate to="/properties" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
