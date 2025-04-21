import { Users } from 'features/users';
import { CreateUser } from 'features/users/components/create-user';

export const adminRoutes = [
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/users/create',
    element: <CreateUser />,
  },
];
