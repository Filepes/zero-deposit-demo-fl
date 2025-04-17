import { Login } from 'features/login';

export const protectedRoutes = [
  {
    path: '/home',
    element: <Login />,
  },
];
