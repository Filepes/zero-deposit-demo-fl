import { Users } from 'features/users';
import { CreateUser } from 'features/users/components/create-user';
import { UserDetails } from 'features/users/components/user-details';

export const adminRoutes = [
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/users/create',
    element: <CreateUser />,
  },
  {
    path: '/users/:id',
    element: <UserDetails />,
  },
];
