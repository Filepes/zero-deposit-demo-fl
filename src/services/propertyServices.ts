import { Property } from 'types/property';
import api from './api';

export const getAllProperties = async () => {
  const response = await api.get('/api/houses');
  return response.data;
};

export const getPropertyById = async (id: string) => {
  const response = await api.get(`/api/house/${id}`);
  return response.data;
};

export const createProperty = async (propertyValues: Omit<Property, 'id'>) => {
  const response = await api.post('/api/house', propertyValues);
  return response.data;
};
