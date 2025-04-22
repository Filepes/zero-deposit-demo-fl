import { useEffect, useState, useCallback } from 'react';
import * as PropertyServices from 'services/propertyServices';

export const useGetAllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = useCallback(async () => {
    setLoading(true);
    try {
      const data = await PropertyServices.getAllProperties();
      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return { properties, loading, refetch: fetchProperties };
};
