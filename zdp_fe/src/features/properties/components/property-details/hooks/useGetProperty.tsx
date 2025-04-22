import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as PropertyServices from 'services/propertyServices';
import { Property } from 'types/property';

export const useGetProperty = () => {
  const { id } = useParams();

  const [property, setProperty] = useState<Property>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProperty() {
      try {
        const data = await PropertyServices.getPropertyById(id as string);
        setProperty(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchProperty();
  }, [id]);

  return { property, loading };
};
