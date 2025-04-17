import { Login } from 'features/login';
import { Navigate } from 'react-router-dom';

export const publicRoutes = [
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
