import { User } from '../types/user';
import api from './api';

export const login = async (role: 'user' | 'admin') => {
  const response = await api.post('/api/login', { role });
  const token = response.data.token;
  localStorage.setItem('token', token);

  const someUser: User = {
    id: '1',
    username: token === 'mocked_admin_token' ? 'Admin' : 'Normal User',
    role: token === 'mocked_admin_token' ? 'admin' : 'user',
  };

  localStorage.setItem('role', role);

  return { token, user: someUser };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

export const getCurrentUser = async () => {
  const role = localStorage.getItem('role') as 'admin' | 'user';
  return {
    id: '1',
    username: role === 'admin' ? 'Admin' : 'Normal User',
    role,
  };
};

export const getAllUsers = async () => {
  const response = await api.get('/api/users');
  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await api.get(`/api/user/${id}`);
  return response.data;
};

export const createUser = async (user: {
  username: string;
  role: string;
}): Promise<User> => {
  const response = await api.post('/api/user', user);
  return response.data;
};
