import { CreateProperty } from 'features/properties/components/create-property';
import { PropertyDetails } from 'features/properties/components/property-details/PropertyDetails';
import { Properties } from 'features/properties/Properties';

export const protectedRoutes = [
  {
    path: '/properties',
    element: <Properties />,
  },
  {
    path: '/properties/:id',
    element: <PropertyDetails />,
  },
  {
    path: '/properties/create',
    element: <CreateProperty />,
  },
];
