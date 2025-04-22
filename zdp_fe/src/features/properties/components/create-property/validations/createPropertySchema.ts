import * as Yup from 'yup';

export const createPropertySchema = Yup.object({
  address: Yup.string().required('Address is required'),
  num_rooms: Yup.number()
    .required('Number of rooms is required')
    .min(1, 'At least 1 room is required'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be positive'),
});
