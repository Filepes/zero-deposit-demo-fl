import { Property } from 'types/property';
import api from './api';

// Gets all properties
export const getAllProperties = async () => {
  const response = await api.get('/api/houses');
  return response.data;
};

// Gets a property by id
export const getPropertyById = async (id: string) => {
  const response = await api.get(`/api/house/${id}`);
  return response.data;
};

// Creates a new property
export const createProperty = async (propertyValues: Omit<Property, 'id'>) => {
  const response = await api.post('/api/house', propertyValues);
  return response.data;
};

// Deletes a property by id
export const deleteProperty = async (id: string) => {
  const response = await api.delete(`/api/house/${id}`);
  return response.data;
};
