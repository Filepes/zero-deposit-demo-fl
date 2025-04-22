import { User } from '../types/user';
import api from './api';

// Login service to authenticate a user based on the role
export const login = async (role: 'user' | 'admin') => {
  const response = await api.post('/api/login', { role });
  const token = response.data.token;
  localStorage.setItem('token', token);

  // Mock a user based on the token (be does not return a user)
  const someUser: User = {
    id: '1',
    username: token === 'mocked_admin_token' ? 'Admin' : 'Normal User',
    role: token === 'mocked_admin_token' ? 'admin' : 'user',
  };

  localStorage.setItem('role', role);

  return { token, user: someUser };
};

// Logs out the user by clearing the token and role from local storage
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

// Gets the current logged in user from localStorage
export const getCurrentUser = async () => {
  const role = localStorage.getItem('role') as 'admin' | 'user';
  return {
    id: '1',
    username: role === 'admin' ? 'Admin' : 'Normal User',
    role,
  };
};

// Gets all users
export const getAllUsers = async () => {
  const response = await api.get('/api/users');
  return response.data;
};

// Gets a user by id
export const getUserById = async (id: string): Promise<User> => {
  const response = await api.get(`/api/user/${id}`);
  return response.data;
};

// Creates a new user and gets the response user data
export const createUser = async (user: {
  username: string;
  role: string;
}): Promise<User> => {
  const response = await api.post('/api/user', user);
  return response.data;
};
