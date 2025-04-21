import * as Yup from 'yup';

export const createUserSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  role: Yup.string()
    .oneOf(['user', 'admin'], 'Invalid role')
    .required('Role is required'),
});
