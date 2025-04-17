import { useEffect, useState } from 'react';
import * as PropertyServices from 'services/propertyServices';

export const useGetAllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await PropertyServices.getAllProperties();
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  return { properties, loading };
};
