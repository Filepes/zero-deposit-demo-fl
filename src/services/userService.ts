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
